import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { StarSparkle } from '../components/BotanicalAccents';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-24 text-center space-y-6">
      <div className="relative inline-block">
        <span className="font-serif text-8xl sm:text-9xl font-light text-[#D88C76]">
          404
        </span>
        <StarSparkle className="absolute -top-4 -right-4 w-6 h-6 text-[#D88C76]" />
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl text-[#292720] font-medium">
        Page Not Found
      </h1>

      <p className="text-sm sm:text-base text-[#5F5A50] leading-relaxed">
        The page you are looking for might have been moved, renamed, or is currently undergoing maintenance.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#292720] bg-white border border-[#D5C7B8] hover:border-[#D88C76] transition-colors"
        >
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
};
