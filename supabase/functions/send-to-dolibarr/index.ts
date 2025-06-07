
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactSubmission = await req.json();
    
    const dolibarrApiKey = Deno.env.get('DOLIBARR_API_KEY');
    const dolibarrUsername = Deno.env.get('DOLIBARR_USERNAME');
    
    if (!dolibarrApiKey || !dolibarrUsername) {
      throw new Error('Dolibarr API credentials not configured');
    }

    console.log('Sending contact data to Dolibarr:', contactData);

    // Create a third party (contact) in Dolibarr
    const thirdPartyData = {
      name: contactData.company || `${contactData.name} (Individual)`,
      name_alias: contactData.name,
      email: contactData.email,
      client: 1, // Mark as potential client
      status: 1, // Active status
      note_private: `Contact form submission - Subject: ${contactData.subject}\n\nMessage: ${contactData.message}`
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
      // Don't throw error here - we still want to save to our database
      return new Response(
        JSON.stringify({ 
          success: true, 
          warning: 'Contact saved locally but failed to sync with Dolibarr ERP',
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
        message: 'Contact successfully sent to Dolibarr ERP',
        dolibarrId: dolibarrResult
      }), 
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in send-to-dolibarr function:', error);
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
