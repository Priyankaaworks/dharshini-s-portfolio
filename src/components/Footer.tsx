import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[#E8DFD3]/80 bg-[#FCF8F3] py-12 text-[#5F5A50]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D88C76] rounded"
        >
          <span className="font-serif text-2xl font-semibold text-[#292720]">
            {portfolioConfig.name[0]}.
          </span>
          <span className="font-mono text-lg font-medium text-[#D88C76]">
            &lt;/&gt;
          </span>
        </Link>

        {/* Center Tagline with Heart */}
        <div className="text-center font-sans text-sm text-[#5F5A50] flex items-center justify-center gap-2">
          <span>Let's build something amazing together</span>
          <span className="text-[#D88C76] text-base" aria-hidden="true">🤎</span>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-4 text-[#292720]">
            <a
              href={portfolioConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-1.5 text-[#292720] hover:text-[#D88C76] transition-colors rounded-full hover:bg-[#E9E1D5]/40"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.social.email}
              aria-label="Send Email"
              title={`Email: ${portfolioConfig.email}`}
              className="p-1.5 text-[#292720] hover:text-[#D88C76] transition-colors rounded-full hover:bg-[#E9E1D5]/40"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${portfolioConfig.phone}`}
              aria-label="Call Phone"
              title={`Call: ${portfolioConfig.phoneFormatted || portfolioConfig.phone}`}
              className="p-1.5 text-[#292720] hover:text-[#D88C76] transition-colors rounded-full hover:bg-[#E9E1D5]/40"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-1.5 text-[#292720] hover:text-[#D88C76] transition-colors rounded-full hover:bg-[#E9E1D5]/40"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#5F5A50]/80">
            © {currentYear} {portfolioConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
