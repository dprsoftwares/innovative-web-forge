
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-800' },
    { name: 'Python', category: 'Language', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-100 text-orange-800' },
    { name: 'Docker', category: 'DevOps', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-800' },
    { name: 'GraphQL', category: 'API', color: 'bg-pink-100 text-pink-800' },
    { name: 'Kubernetes', category: 'DevOps', color: 'bg-purple-100 text-purple-800' },
    { name: 'Vue.js', category: 'Frontend', color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Go', category: 'Language', color: 'bg-sky-100 text-sky-800' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, robust, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform"
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
