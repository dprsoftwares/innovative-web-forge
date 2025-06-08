
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface QuoteSubmission {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
  priority: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteSubmission = await req.json();
    
    const dolibarrApiKey = Deno.env.get('DOLIBARR_API_KEY');
    const dolibarrUsername = Deno.env.get('DOLIBARR_USERNAME');
    
    if (!dolibarrApiKey || !dolibarrUsername) {
      throw new Error('Dolibarr API credentials not configured');
    }

    console.log('Sending quote data to Dolibarr:', quoteData);

    // Create a third party (potential client) in Dolibarr with quote information
    const thirdPartyData = {
      name: quoteData.company || `${quoteData.name} (Individual)`,
      name_alias: quoteData.name,
      email: quoteData.email,
      phone: quoteData.phone || '',
      client: 1, // Mark as potential client
      status: 1, // Active status
      note_private: `Quote Request:
Project Type: ${quoteData.projectType}
Budget: ${quoteData.budget}
Timeline: ${quoteData.timeline}
Priority: ${quoteData.priority}
Features: ${quoteData.features.join(', ')}

Description: ${quoteData.description}`
    };

    const dolibarrResponse = await fetch('https://erp.aierologics.com/api/index.php/thirdparties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'DOLAPIKEY': dolibarrApiKey,
        'DOLUSER': dolibarrUsername,
      },
      body: JSON.stringify(thirdPartyData),
    });

    const responseText = await dolibarrResponse.text();
    console.log('Dolibarr API response status:', dolibarrResponse.status);
    console.log('Dolibarr API response:', responseText);

    if (!dolibarrResponse.ok) {
      console.error('Dolibarr API error:', responseText);
      return new Response(
        JSON.stringify({ 
          success: true, 
          warning: 'Quote saved locally but failed to sync with Dolibarr ERP',
          dolibarrError: responseText
        }), 
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    let dolibarrResult;
    try {
      dolibarrResult = JSON.parse(responseText);
    } catch (e) {
      dolibarrResult = responseText;
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote successfully sent to Dolibarr ERP',
        dolibarrId: dolibarrResult
      }), 
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in send-quote-to-dolibarr function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
