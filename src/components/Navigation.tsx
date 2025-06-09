
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Cpu, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="tech-header shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity cursor-hover group">
              <img 
                src="/lovable-uploads/5fa05619-1f58-4c66-b497-f2c004e34f3a.png" 
                alt="Aierologics Labs" 
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
              <div className="ml-3 hidden sm:block">
                <div className="text-white font-bold text-xl">Aierologics</div>
                <div className="text-sky-300 text-xs font-medium">LABS</div>
              </div>
              <div className="ml-2 hidden lg:flex items-center space-x-1 text-sky-400">
                <Code size={16} className="animate-pulse" />
                <Cpu size={16} className="animate-pulse delay-75" />
                <Zap size={16} className="animate-pulse delay-150" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-hover ${
                  isActive(item.path)
                    ? 'text-sky-400 bg-sky-400/10 shadow-lg'
                    : 'text-slate-300 hover:text-sky-400 hover:bg-sky-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="tech-button cursor-hover"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-sky-400/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 cursor-hover ${
                    isActive(item.path)
                      ? 'text-sky-400 bg-sky-400/10'
                      : 'text-slate-300 hover:text-sky-400 hover:bg-sky-400/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block tech-button mt-4 text-center cursor-hover"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
