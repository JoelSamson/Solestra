import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Culture', href: '#vision' },
    { name: 'Intel', href: '#ai-lab' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 mix-blend-difference ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative z-50 group">
            <span className="text-3xl font-bold text-white tracking-tighter uppercase font-['Anton']">
              Solestra
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white uppercase tracking-[0.2em] font-['Oswald'] hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-['Anton'] text-white hover:text-amber-500 transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;