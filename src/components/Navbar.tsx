import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCF8F3]/90 backdrop-blur-md border-b border-[#E8DFD3]/60 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <Link 
          to="/" 
          className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D88C76] rounded-md"
        >
          <span className="font-serif text-3xl font-semibold tracking-tight text-[#292720] group-hover:text-[#D88C76] transition-colors">
            {portfolioConfig.name[0]}.
          </span>
          <span className="font-mono text-xl font-medium text-[#D88C76] tracking-tight">
            &lt;/&gt;
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5F5A50]"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 whitespace-nowrap transition-colors duration-200 hover:text-[#292720] ${
                  active ? 'text-[#292720] font-semibold' : ''
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D88C76] rounded-full transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-[#292720] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCF8F3] border-b border-[#E8DFD3] px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#E9E1D5]/50 text-[#D88C76] font-semibold'
                      : 'text-[#292720] hover:bg-[#E9E1D5]/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#E8DFD3]">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-white bg-[#D88C76] hover:bg-[#C67862] transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
