import React from 'react';
import { Plane, Github, Linkedin, Twitter } from 'lucide-react';

import { socialLinks } from '../data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const getSocialIcon = (iconName) => {
    switch(iconName) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      default: return <Github size={20} />;
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Plane className="text-[#FACC15] mr-2" size={24} />
              <span className="font-mono text-xl font-bold">
                PORT<span className="text-[#FACC15]">FOLIO</span>
              </span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating seamless digital experiences through clean code and intuitive design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white hover:bg-[#38BDF8] hover:text-white p-2 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {currentYear} | All rights reserved</p>
              <p className="mt-1">Designed with ❤️ by Mandeep</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <span className="font-mono">FLIGHT STATUS: </span>
            <span className="text-green-400">Active</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;