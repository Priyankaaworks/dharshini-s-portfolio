import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Target, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone,
  Download,
  BookOpen,
  Code
} from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { BotanicalBranchLeft, BotanicalBranchRight } from '../components/BotanicalAccents';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
      {/* Hero Editorial Intro */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Portrait */}
        <div className="md:col-span-5 flex justify-center relative">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-[8rem] rounded-b-[4rem] bg-[#F7EBE1] p-2 border border-[#EADBCE] shadow-sm">
            <div className="absolute -left-6 top-1/3 pointer-events-none opacity-60">
              <BotanicalBranchLeft className="w-20 h-auto" />
            </div>
            <div className="absolute -right-6 bottom-4 pointer-events-none opacity-60">
              <BotanicalBranchRight className="w-20 h-auto" />
            </div>
            <img
              src={portfolioConfig.avatar}
              alt={portfolioConfig.fullName}
              className="w-full h-full object-cover object-top rounded-t-[7.5rem] rounded-b-[3.5rem]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
              About Me
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
              A blend of logic, design empathy, and curiosity.
            </h1>
          </div>

          <p className="text-base text-[#5F5A50] leading-relaxed">
            {portfolioConfig.aboutExtended}
          </p>

          <p className="text-base text-[#5F5A50] leading-relaxed">
            I believe that great software is born at the intersection of aesthetic refinement and dependable systems engineering. Whether constructing accessible front-end interfaces or designing reliable APIs, I strive to make each line of code clear and purposeful.
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-[#5F5A50]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#D88C76]" />
              <span>{portfolioConfig.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#D88C76]" />
              <a href={`mailto:${portfolioConfig.email}`} className="hover:text-[#D88C76] transition-colors">{portfolioConfig.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D88C76]" />
              <a href={`tel:${portfolioConfig.phone}`} className="hover:text-[#D88C76] transition-colors">{portfolioConfig.phoneFormatted || portfolioConfig.phone}</a>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#292720] bg-white border border-[#D5C7B8] hover:border-[#D88C76] transition-colors"
            >
              <Download className="w-4 h-4 text-[#D88C76]" />
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
            Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292720] font-normal">
            My Development Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.philosophy.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm space-y-3"
            >
              <span className="font-serif text-2xl font-bold text-[#D88C76]">
                0{idx + 1}.
              </span>
              <h3 className="font-serif text-xl text-[#292720] font-medium">
                {item.title}
              </h3>
              <p className="text-sm text-[#5F5A50] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths & Learning Goals */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Strengths */}
        <div className="bg-[#FAF5EE] rounded-3xl p-8 border border-[#EADBCE] space-y-5">
          <div className="flex items-center gap-2 text-[#D88C76]">
            <Target className="w-5 h-5" />
            <h3 className="font-serif text-2xl text-[#292720] font-medium">Core Strengths</h3>
          </div>
          <ul className="space-y-3 text-sm text-[#5F5A50] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#D88C76] font-bold">•</span>
              <span><strong>Attention to Visual Detail:</strong> Translating Figma and UI concepts into pixel-perfect, responsive code with fluid transitions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D88C76] font-bold">•</span>
              <span><strong>Problem Breakdown:</strong> Decomposing complex software challenges into manageable, testable components.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D88C76] font-bold">•</span>
              <span><strong>Clear Communication:</strong> Documenting decisions, asking proactive questions, and supporting team workflows.</span>
            </li>
          </ul>
        </div>

        {/* Current Learning Goals */}
        <div className="bg-[#FAF5EE] rounded-3xl p-8 border border-[#EADBCE] space-y-5">
          <div className="flex items-center gap-2 text-[#8A9678]">
            <Compass className="w-5 h-5" />
            <h3 className="font-serif text-2xl text-[#292720] font-medium">Current Learning Goals</h3>
          </div>
          <ul className="space-y-3 text-sm text-[#5F5A50] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-[#8A9678] font-bold">•</span>
              <span><strong>Advanced Full-Stack Engineering:</strong> Deepening expertise in server-side state architectures, microservices, and database tuning.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8A9678] font-bold">•</span>
              <span><strong>Accessibility Standards:</strong> Achieving comprehensive WCAG 2.1 AA/AAA compliance across all web interactions.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#8A9678] font-bold">•</span>
              <span><strong>Cloud & CI/CD Pipelines:</strong> Automating testing suites and deployment routines using modern cloud native workflows.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
