
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import FloatingElements from '../components/FloatingElements';
import { User, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Arjun Sharma',
      position: 'CEO & Full-Stack Developer',
      bio: 'IIT Delhi graduate with 8+ years in software development, Arjun leads our technical vision and client relationships.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      name: 'Priya Patel',
      position: 'Senior Frontend Developer',
      bio: 'From Mumbai, Priya specializes in creating beautiful, responsive user interfaces with modern frameworks.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX Design']
    },
    {
      name: 'Rajesh Kumar',
      position: 'Backend & DevOps Engineer',
      bio: 'IIT Bombay alumnus, Rajesh ensures our applications are scalable, secure, and deployed with best practices.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      skills: ['Python', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      name: 'Sneha Reddy',
      position: 'Mobile Developer',
      bio: 'From Hyderabad, Sneha creates exceptional mobile experiences for both iOS and Android platforms.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      skills: ['React Native', 'Swift', 'Kotlin', 'Flutter']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'नवाचार (Innovation)',
      description: 'We stay at the forefront of technology, constantly learning and adopting new tools and methodologies to deliver cutting-edge solutions for Indian businesses.'
    },
    {
      icon: Award,
      title: 'गुणवत्ता (Quality)',
      description: 'Every line of code we write is crafted with precision. We believe in thorough testing, clean architecture, and maintainable solutions.'
    },
    {
      icon: Users,
      title: 'साझेदारी (Partnership)',
      description: 'We work closely with our clients as partners, understanding their business goals and providing strategic guidance beyond just technical implementation.'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-orange-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-32 h-32 border border-red-300 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">DevStack Solutions के बारे में</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-300">(About DevStack Solutions)</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're a passionate team of developers, designers, and innovators from across India, 
                committed to delivering exceptional software solutions that drive business growth 
                in the digital age of Bharat.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">हमारी कहानी (Our Story)</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2019 in the heart of India's tech capital, DevStack Solutions began as a 
                  small team of passionate developers who believed that great software could transform 
                  Indian businesses. Today, we've grown into a full-service development company that 
                  has delivered over 100 successful projects across India.
                </p>
                <p className="text-gray-600 mb-4">
                  Our mission is simple: to bridge the gap between complex technology and Indian business needs. 
                  We combine technical excellence with strategic thinking to create solutions that not 
                  only work flawlessly but also drive real business value in the Indian market.
                </p>
                <p className="text-gray-600">
                  From startups in Bangalore to enterprise clients in Mumbai and Delhi, we've helped 
                  organizations across various industries leverage technology to achieve their goals 
                  and stay ahead of the competition in India's rapidly growing digital economy.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop"
                  alt="Indian architecture representing our heritage and innovation"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">हमारे मूल्य (Our Values)</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">हमारी टीम से मिलें (Meet Our Team)</h2>
              <p className="text-xl text-gray-600">
                Talented professionals from across India who bring your ideas to life
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group">
                  <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium hover:bg-orange-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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

export default About;
