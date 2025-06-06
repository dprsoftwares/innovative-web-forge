
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, User, Contact } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">DevStack Solutions</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Full-stack software development company delivering innovative solutions 
              with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Mail className="text-blue-400" size={20} />
              <span className="text-gray-300">hello@devstacksolutions.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-blue-400 transition-colors">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DevStack Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
