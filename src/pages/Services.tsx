
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import { Link } from 'react-router-dom';
import { Code, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
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
      icon: Code,
      title: 'Enterprise Web Development',
      description: 'Scalable web applications with modern architecture, microservices, and enterprise-grade security',
      features: ['React/Next.js Applications', 'Progressive Web Apps', 'Enterprise Platforms', 'API Development'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      pricing: 'Starting at ₹2,50,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile solutions with advanced features and optimal performance',
      features: ['Cross-platform Development', 'Native iOS & Android', 'Real-time Features', 'App Store Optimization'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      pricing: 'Starting at ₹3,00,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Robust cloud solutions with automated deployment, monitoring, and enterprise scalability',
      features: ['AWS/Azure/GCP Setup', 'Kubernetes Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      pricing: 'Starting at ₹1,50,000'
    },
    {
      icon: Database,
      title: 'Backend & API Development',
      description: 'High-performance APIs and database solutions with enterprise-grade architecture',
      features: ['RESTful & GraphQL APIs', 'Microservices Architecture', 'Database Optimization', 'Third-party Integrations'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      pricing: 'Starting at ₹2,00,000'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security audits, penetration testing, and compliance implementation',
      features: ['Security Audits', 'Penetration Testing', 'GDPR Compliance', 'ISO 27001 Implementation'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      technologies: ['Security Frameworks', 'Compliance', 'Auditing', 'Monitoring'],
      pricing: 'Starting at ₹1,00,000'
    },
    {
      icon: Zap,
      title: 'Digital Transformation Consulting',
      description: 'Strategic consulting and technology roadmap planning for enterprise digital transformation',
      features: ['Technology Assessment', 'Digital Strategy', 'Architecture Planning', 'Implementation Roadmap'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Strategy', 'Planning', 'Architecture', 'Implementation'],
      pricing: 'Starting at ₹75,000'
    }
  ];

  return (
    <div className="min-h-screen tech-grid">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 professional-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border border-indigo-400 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Technology Services</h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive software development and technology consulting services 
                designed to accelerate your digital transformation and drive business growth
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="tech-card overflow-hidden hover-lift group cursor-hover">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg shadow-lg">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500">
                        {service.pricing}
                      </div>
                      <Link
                        to="/quote"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium hover:scale-105 cursor-hover"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 code-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Our Methodology
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Development Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A proven agile methodology that ensures successful project delivery with continuous collaboration
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', desc: 'Requirements gathering, technical assessment, and project planning' },
              { step: '02', title: 'Architecture & Design', desc: 'System architecture, UI/UX design, and technical specifications' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous integration and automated testing' },
              { step: '04', title: 'Deployment & Support', desc: 'Production deployment, monitoring, and ongoing maintenance' }
            ].map((process, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                <div className="text-center group cursor-hover">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300 neon-glow">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 professional-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              Ready to Get Started?
            </div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Your Next Solution</h2>
            <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto">
              Schedule a consultation to discuss your project requirements and get a custom proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/quote"
                className="tech-button cursor-hover"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 glass-morphism cursor-hover"
              >
                Contact Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
