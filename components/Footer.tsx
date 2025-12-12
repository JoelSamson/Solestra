import React from 'react';
import { Sun, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <Sun className="h-6 w-6 text-amber-500 fill-amber-500" />
              <span className="text-xl font-bold text-white tracking-tight">Solestra</span>
            </div>
            <div className="flex gap-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-neutral-500 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Sitemap</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Expertise</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Agency Vision</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">AI Laboratory</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Offices</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li>San Francisco</li>
              <li>New York</li>
              <li>London</li>
              <li>Berlin</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-t border-neutral-900 pt-8">
          <h1 className="text-[12vw] leading-none font-bold text-neutral-900 select-none pointer-events-none">
            SOLESTRA
          </h1>
          <p className="text-neutral-600 text-sm whitespace-nowrap mb-4 md:mb-8">
            © {new Date().getFullYear()} Solestra Agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;