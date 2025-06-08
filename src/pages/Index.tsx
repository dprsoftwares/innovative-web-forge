
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      cursorDot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  const services = [
    {
      title: 'Enterprise Web Solutions',
      description: 'Scalable, high-performance web applications built with cutting-edge technologies and enterprise-grade architecture',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['React', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      title: 'Mobile Application Development',
      description: 'Cross-platform mobile solutions with native performance, advanced features, and seamless user experiences',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tech: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Robust cloud solutions with automated deployment, monitoring, and scalable infrastructure management',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop',
      tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    }
  ];

  return (
    <div className="min-h-screen relative tech-grid">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 professional-gradient text-white relative overflow-hidden">
        {/* Tech decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-blue-400 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-indigo-400 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-blue-300 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-up">
              <div>
                <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
                  ⚡ Leading Technology Partner
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Enterprise
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> Digital</span>
                  <br />Solutions
                </h1>
                <p className="text-xl mb-10 text-slate-300 leading-relaxed">
                  Transforming businesses through innovative software engineering, 
                  cloud architecture, and cutting-edge development practices. 
                  Trusted by enterprises across India and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/quote"
                    className="tech-button text-center cursor-hover"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/portfolio"
                    className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 text-center glass-morphism cursor-hover"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={300}>
              <div className="relative">
                <div className="tech-card p-8">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
                    alt="Modern software development"
                    className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 code-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Our Expertise
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Technology Solutions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From concept to deployment, we deliver comprehensive enterprise solutions 
                using the latest technologies and industry best practices
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <div className="tech-card overflow-hidden hover-lift group cursor-hover">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center group cursor-hover"
                    >
                      Explore Solution
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 tech-gradient text-white circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">500+</div>
                <div className="text-slate-300 font-medium">Projects Delivered</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">150+</div>
                <div className="text-slate-300 font-medium">Enterprise Clients</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">8+</div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
                <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">99.9%</div>
                <div className="text-slate-300 font-medium">Uptime SLA</div>
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
      <section className="py-20 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              Ready to Scale?
            </div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Extraordinary</h2>
            <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
              Partner with us to transform your business through innovative technology solutions
            </p>
            <Link
              to="/contact"
              className="tech-button cursor-hover"
            >
              Start Your Journey
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
