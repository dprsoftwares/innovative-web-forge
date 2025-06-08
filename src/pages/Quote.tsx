import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../integrations/supabase/client';

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [] as string[],
    priority: 'medium'
  });

  const projectTypes = [
    'Web Application',
    'Mobile App (iOS/Android)',
    'E-commerce Platform',
    'Custom Software',
    'API Development',
    'Cloud Migration',
    'UI/UX Design',
    'Digital Transformation',
    'Consulting'
  ];

  const budgetRanges = [
    'Under ₹8,00,000',
    '₹8,00,000 - ₹20,00,000',
    '₹20,00,000 - ₹40,00,000',
    '₹40,00,000 - ₹80,00,000',
    'Over ₹80,00,000'
  ];

  const timelineOptions = [
    'Rush (2-4 weeks)',
    'Standard (1-3 months)',
    'Extended (3-6 months)',
    'Long-term (6+ months)'
  ];

  const commonFeatures = [
    'User Authentication',
    'Payment Gateway (Razorpay/Paytm)',
    'Admin Dashboard',
    'Mobile Responsive',
    'API Integration',
    'Database Design',
    'Cloud Hosting (AWS/Azure)',
    'Analytics & Reporting',
    'Email/SMS Notifications',
    'Search Functionality',
    'Real-time Updates',
    'Third-party Integrations',
    'Multi-language Support',
    'GST Integration'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Save to our database first
      const { error: dbError } = await supabase
        .from('quote_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            phone: formData.phone || null,
            project_type: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            description: formData.description,
            features: formData.features.length > 0 ? formData.features : null,
            priority: formData.priority
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      // Send to Dolibarr ERP
      const { data: dolibarrResult, error: dolibarrError } = await supabase.functions.invoke('send-quote-to-dolibarr', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
          features: formData.features,
          priority: formData.priority
        }
      });

      console.log('Dolibarr integration result:', dolibarrResult);

      if (dolibarrError) {
        console.error('Dolibarr integration error:', dolibarrError);
        toast({
          title: "Quote Saved",
          description: "Your quote request was saved but couldn't be synced with our ERP system. We'll follow up manually.",
          variant: "destructive",
        });
      } else if (dolibarrResult?.warning) {
        toast({
          title: "Quote Saved with Warning",
          description: dolibarrResult.warning,
        });
      } else {
        toast({
          title: "Quote Request Submitted!",
          description: "Thank you for your request. We'll prepare a detailed quote and get back to you within 24 hours.",
        });
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        features: [],
        priority: 'medium'
      });
    } catch (error) {
      console.error('Error submitting quote form:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    const updatedFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-green-600 via-orange-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-orange-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">अपना मुफ्त कोटेशन प्राप्त करें</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-300">(Get Your Free Quote)</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                हमें अपने प्रोजेक्ट के बारे में बताएं और हम आपको 24 घंटे के भीतर एक विस्तृत, 
                पारदर्शी कोटेशन प्रदान करेंगे। कोई दायित्व नहीं, सिर्फ ईमानदार मूल्य निर्धारण।
              </p>
              <p className="text-lg text-green-200 mt-4">
                (Tell us about your project and we'll provide you with a detailed, transparent quote 
                within 24 hours. No obligations, just honest pricing.)
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">प्रोजेक्ट विवरण (Project Details)</h2>
                <p className="text-gray-600">
                  कृपया एक सटीक कोटेशन बनाने में हमारी मदद के लिए जितना संभव हो उतना विवरण प्रदान करें
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Please provide as much detail as possible to help us create an accurate quote)
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <AnimatedSection animation="slide-up" delay={200}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">संपर्क जानकारी (Contact Information)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          पूरा नाम (Full Name) *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                          placeholder="राम शर्मा (Ram Sharma)"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          ईमेल पता (Email Address) *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                          placeholder="ram@example.com"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          कंपनी का नाम (Company Name)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                          placeholder="आपकी कंपनी (Your Company)"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          फ़ोन नंबर (Phone Number)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Project Details */}
                <AnimatedSection animation="slide-up" delay={300}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">परियोजना विवरण (Project Details)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="group">
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          प्रोजेक्ट का प्रकार (Project Type) *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                        >
                          <option value="">प्रोजेक्ट का प्रकार चुनें (Select project type)</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div className="group">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          बजट सीमा (Budget Range) *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                        >
                          <option value="">बजट सीमा चुनें (Select budget range)</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      <div className="group">
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          समयरेखा (Timeline) *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                        >
                          <option value="">समयरेखा चुनें (Select timeline)</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Features */}
                <AnimatedSection animation="slide-up" delay={400}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">आवश्यक सुविधाएँ (Required Features)</h3>
                    <p className="text-gray-600 mb-4">उन सभी सुविधाओं का चयन करें जो आपके प्रोजेक्ट पर लागू होती हैं:</p>
                    <p className="text-sm text-gray-500 mb-4">(Select all features that apply to your project:)</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {commonFeatures.map((feature) => (
                        <label key={feature} className="flex items-center cursor-pointer group hover:scale-105 transition-transform duration-300">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            disabled={isSubmitting}
                            className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Project Description */}
                <AnimatedSection animation="slide-up" delay={500}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">परियोजना विवरण (Project Description)</h3>
                    <div className="space-y-6">
                      <div className="group">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                          विस्तृत विवरण (Detailed Description) *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={6}
                          value={formData.description}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                          placeholder="कृपया अपने प्रोजेक्ट का विस्तार से वर्णन करें। अपने लक्ष्यों, लक्षित दर्शकों, प्रमुख कार्यक्षमता, डिज़ाइन प्राथमिकताओं और किसी भी विशिष्ट आवश्यकता या बाधाओं को शामिल करें..."
                        ></textarea>
                      </div>

                      <div className="group">
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                          परियोजना प्राथमिकता (Project Priority)
                        </label>
                        <select
                          id="priority"
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group-hover:shadow-md"
                        >
                          <option value="low">कम - लचीली समयरेखा (Low - Flexible timeline)</option>
                          <option value="medium">मध्यम - मानक प्राथमिकता (Medium - Standard priority)</option>
                          <option value="high">उच्च - जरूरी प्रोजेक्ट (High - Urgent project)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Submit Button */}
                <AnimatedSection animation="scale-in" delay={600}>
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
                    >
                      {isSubmitting ? 'सबमिट हो रहा है... (Submitting...)' : 'कोटेशन अनुरोध सबमिट करें (Submit Quote Request)'}
                    </button>
                    <p className="text-gray-500 text-sm mt-4">
                      हम आपकी आवश्यकताओं की समीक्षा करेंगे और 24 घंटे के भीतर आपको एक विस्तृत कोटेशन भेजेंगे
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      (We'll review your requirements and send you a detailed quote within 24 hours)
                    </p>
                  </div>
                </AnimatedSection>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">आगे क्या होता है? (What Happens Next?)</h2>
              <p className="text-xl text-gray-600">
                हमारी पारदर्शी कोटेशन प्रक्रिया सुनिश्चित करती है कि आपको सटीक मूल्य निर्धारण मिले
              </p>
              <p className="text-lg text-gray-500 mt-2">
                (Our transparent quote process ensures you get accurate pricing)
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'समीक्षा (Review)', desc: 'We carefully review your requirements and ask clarifying questions if needed' },
              { step: '2', title: 'विश्लेषण (Analysis)', desc: 'Our team analyzes the scope and creates a detailed project breakdown' },
              { step: '3', title: 'कोटेशन (Quote)', desc: 'You receive a comprehensive quote with timeline and deliverables' },
              { step: '4', title: 'चर्चा (Discussion)', desc: 'We schedule a call to discuss the quote and answer any questions' }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 150}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:shadow-lg transition-shadow duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
