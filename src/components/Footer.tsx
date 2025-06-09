
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Code, Cpu, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-sky-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 cursor-hover group">
              <img 
                src="/lovable-uploads/5fa05619-1f58-4c66-b497-f2c004e34f3a.png" 
                alt="Aierologics Labs" 
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
              <div className="ml-4">
                <div className="text-white font-bold text-2xl">Aierologics</div>
                <div className="text-sky-300 text-sm font-medium tracking-wider">LABS</div>
              </div>
              <div className="ml-3 flex items-center space-x-1 text-sky-400">
                <Code size={20} className="animate-pulse" />
                <Cpu size={20} className="animate-pulse delay-75" />
                <Zap size={20} className="animate-pulse delay-150" />
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Advanced AI-powered software development company delivering cutting-edge solutions 
              with innovative technology and expert engineering.
            </p>
            <div className="space-y-3">
              <div className="flex items-center cursor-hover">
                <Mail className="text-sky-400 mr-3" size={18} />
                <span className="text-slate-300">hello@aierologics.com</span>
              </div>
              <div className="flex items-center cursor-hover">
                <Phone className="text-sky-400 mr-3" size={18} />
                <span className="text-slate-300">+91 9876543210</span>
              </div>
              <div className="flex items-center cursor-hover">
                <MapPin className="text-sky-400 mr-3" size={18} />
                <span className="text-slate-300">Bangalore, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-sky-400">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">AI Development</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Web Applications</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">DevOps & MLOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-sky-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Contact</Link></li>
              <li><Link to="/quote" className="text-slate-300 hover:text-sky-400 transition-colors cursor-hover">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 Aierologics Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">Built with AI & Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
