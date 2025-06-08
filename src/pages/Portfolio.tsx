
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Portfolio = () => {
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

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A fully-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Razorpay'],
      client: 'RetailCorp India',
      duration: '4 months',
      features: ['Real-time inventory', 'Multi-payment gateway', 'Admin dashboard', 'Mobile responsive']
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'HIPAA Compliant'],
      client: 'MedTech Solutions',
      duration: '6 months',
      features: ['Video consultations', 'Secure messaging', 'Appointment booking', 'Medical records']
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Web Development',
      description: 'Real-time financial data visualization with advanced analytics and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'D3.js', 'AWS'],
      client: 'FinanceFlow Inc',
      duration: '3 months',
      features: ['Real-time charts', 'Custom reports', 'Data export', 'Multi-tenant']
    },
    {
      title: 'IoT Fleet Management',
      category: 'Cloud Solutions',
      description: 'Cloud-based fleet management system with GPS tracking, maintenance scheduling, and route optimization.',
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop',
      technologies: ['Microservices', 'Docker', 'MongoDB', 'AWS IoT'],
      client: 'LogiTech Transport',
      duration: '8 months',
      features: ['GPS tracking', 'Route optimization', 'Maintenance alerts', 'Driver analytics']
    },
    {
      title: 'Social Learning Platform',
      category: 'Web Development',
      description: 'Educational platform with course management, interactive content, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
      client: 'EduTech Academy',
      duration: '5 months',
      features: ['Video streaming', 'Progress tracking', 'Discussion forums', 'Certification system']
    },
    {
      title: 'Restaurant POS System',
      category: 'Mobile Development',
      description: 'Point-of-sale system for restaurants with order management, inventory tracking, and analytics.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Paytm API', 'Cloud Functions'],
      client: 'RestaurantChain Ltd',
      duration: '4 months',
      features: ['Order management', 'Inventory tracking', 'Sales analytics', 'Multi-location']
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Cloud Solutions'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen tech-grid">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 professional-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses 
              transform their ideas into powerful digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-hover ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:scale-105 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div key={index} className="tech-card overflow-hidden hover-lift cursor-hover">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="text-sm text-slate-500">
                      {project.duration} • {project.client}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-600 text-sm">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="tech-button w-full text-center cursor-hover"
                  >
                    Discuss Similar Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 code-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Success Metrics</h2>
            <p className="text-xl text-slate-600">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">100%</div>
              <div className="text-slate-600 font-medium">On-Time Delivery</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">95%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">2.5x</div>
              <div className="text-slate-600 font-medium">Average ROI Improvement</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300 cursor-hover">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">24/7</div>
              <div className="text-slate-600 font-medium">Post-Launch Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 professional-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Let's create something amazing together. Get in touch to discuss your requirements.
          </p>
          <Link
            to="/quote"
            className="tech-button cursor-hover"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
