
import React from 'react';

const TechStack = () => {
  const technologies = [
    { 
      name: 'React', 
      category: 'Frontend', 
      color: 'bg-blue-100 text-blue-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Node.js', 
      category: 'Backend', 
      color: 'bg-green-100 text-green-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'TypeScript', 
      category: 'Language', 
      color: 'bg-blue-100 text-blue-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'Python', 
      category: 'AI/ML', 
      color: 'bg-yellow-100 text-yellow-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'TensorFlow', 
      category: 'AI/ML', 
      color: 'bg-orange-100 text-orange-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    { 
      name: 'AWS', 
      category: 'Cloud', 
      color: 'bg-orange-100 text-orange-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
    },
    { 
      name: 'Docker', 
      category: 'DevOps', 
      color: 'bg-cyan-100 text-cyan-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
      name: 'PostgreSQL', 
      category: 'Database', 
      color: 'bg-indigo-100 text-indigo-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    { 
      name: 'MongoDB', 
      category: 'Database', 
      color: 'bg-green-100 text-green-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'GraphQL', 
      category: 'API', 
      color: 'bg-pink-100 text-pink-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
    },
    { 
      name: 'Kubernetes', 
      category: 'DevOps', 
      color: 'bg-purple-100 text-purple-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
    },
    { 
      name: 'Next.js', 
      category: 'Frontend', 
      color: 'bg-gray-100 text-gray-800',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 neural-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Technology Arsenal</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cutting-edge technologies powering next-generation AI solutions and scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-card p-6 hover-lift cursor-hover group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">${tech.name.charAt(0)}</div>`;
                      }
                    }}
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{tech.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${tech.color}`}>
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg shadow-lg">
            <span className="font-medium">And many more cutting-edge technologies...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
