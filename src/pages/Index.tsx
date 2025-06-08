
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for Indian businesses',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps designed for the Indian market across iOS and Android',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    },
    {
      title: 'Digital Transformation',
      description: 'Scalable cloud solutions and digital infrastructure tailored for Indian enterprises',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white relative overflow-hidden">
        {/* Indian-inspired decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Digital Solutions for 
                  <span className="text-orange-300"> Bharat's Future</span>
                </h1>
                <p className="text-xl mb-8 text-orange-100">
                  Empowering Indian businesses with cutting-edge technology, innovative design, 
                  and expert engineering. From Mumbai to Bangalore, we transform ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/quote"
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 text-center shadow-lg"
                  >
                    शुरू करें (Get Started)
                  </Link>
                  <Link
                    to="/portfolio"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105 text-center"
                  >
                    हमारा काम देखें (View Our Work)
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={300}>
              <div className="lg:text-right">
                <img
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop"
                  alt="Indian Architecture and Technology"
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">हमारी विशेषज्ञता (Our Expertise)</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to deployment, we deliver comprehensive solutions across the entire technology stack, 
                specially designed for the Indian market
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      to="/services"
                      className="text-orange-600 font-medium hover:text-orange-700 transition-colors inline-flex items-center group"
                    >
                      और जानें (Learn More) 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">100+</div>
                <div className="text-gray-300">प्रोजेक्ट्स पूरे किए</div>
                <div className="text-sm text-gray-400">(Projects Delivered)</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">50+</div>
                <div className="text-gray-300">खुश ग्राहक</div>
                <div className="text-sm text-gray-400">(Happy Clients)</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">5+</div>
                <div className="text-gray-300">साल का अनुभव</div>
                <div className="text-sm text-gray-400">(Years Experience)</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">24/7</div>
                <div className="text-gray-300">सहायता</div>
                <div className="text-sm text-gray-400">(Support)</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <TechStack />
      </AnimatedSection>
      
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">अपने विचारों को बदलने के लिए तैयार हैं?</h2>
            <h3 className="text-xl mb-4">(Ready to Transform Your Ideas?)</h3>
            <p className="text-xl mb-8 text-orange-100">
              आइए आपके प्रोजेक्ट पर चर्चा करें और साथ मिलकर कुछ अद्भुत बनाएं
            </p>
            <p className="text-lg mb-8 text-orange-200">
              (Let's discuss your project and create something amazing together)
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 inline-block shadow-lg"
            >
              अपना प्रोजेक्ट शुरू करें (Start Your Project)
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
