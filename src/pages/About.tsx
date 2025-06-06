
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { User } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Full-Stack Developer',
      bio: 'With 8+ years in software development, Alex leads our technical vision and client relationships.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      name: 'Sarah Kim',
      position: 'Senior Frontend Developer',
      bio: 'Sarah specializes in creating beautiful, responsive user interfaces with modern frameworks.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX Design']
    },
    {
      name: 'David Chen',
      position: 'Backend & DevOps Engineer',
      bio: 'David ensures our applications are scalable, secure, and deployed with best practices.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      skills: ['Python', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      name: 'Emily Taylor',
      position: 'Mobile Developer',
      bio: 'Emily creates exceptional mobile experiences for both iOS and Android platforms.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      skills: ['React Native', 'Swift', 'Kotlin', 'Flutter']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevStack Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and innovators committed to 
              delivering exceptional software solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2019, DevStack Solutions began as a small team of passionate developers 
                who believed that great software could transform businesses. Today, we've grown into 
                a full-service development company that has delivered over 100 successful projects.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is simple: to bridge the gap between complex technology and business needs. 
                We combine technical excellence with strategic thinking to create solutions that not 
                only work flawlessly but also drive real business value.
              </p>
              <p className="text-gray-600">
                From startups to enterprise clients, we've helped organizations across various industries 
                leverage technology to achieve their goals and stay ahead of the competition.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, constantly learning and adopting new tools 
                and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every line of code we write is crafted with precision. We believe in thorough testing, 
                clean architecture, and maintainable solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, understanding their business goals 
                and providing strategic guidance beyond just technical implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Talented professionals who bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
