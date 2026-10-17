import React, { useState } from 'react';
import { Search, Code2, Sparkles, CheckCircle, Info } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [showProficiency, setShowProficiency] = useState(false);

  const filteredCategories = skillCategories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
  })).filter(cat => cat.skills.length > 0);

  const getFamiliarityBadge = (fam?: string) => {
    switch (fam) {
      case 'Proficient':
        return 'text-[#8A9678] bg-[#F2F5ED] border-[#D9DFD0]';
      case 'Intermediate':
        return 'text-[#D88C76] bg-[#FDEEE9] border-[#F2D2C8]';
      case 'Learning':
        return 'text-[#6B7280] bg-[#F3F4F6] border-[#E5E7EB]';
      default:
        return 'text-[#5F5A50] bg-[#F5EDE4] border-[#EADBCE]';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
          Technical Capabilities
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
          Skills & Technologies
        </h1>
        <p className="text-base text-[#5F5A50] leading-relaxed">
          Languages, frameworks, databases, and developer utilities I work with. Organized by domain for quick reference.
        </p>

        {/* Note on honest expertise */}
        <div className="inline-flex items-center gap-2 p-3 bg-[#F7EBE1]/60 border border-[#EADBCE] rounded-xl text-xs text-[#7A6452]">
          <Info className="w-4 h-4 text-[#D88C76] shrink-0" />
          <span>Familiarity tags represent self-assessed learning progress rather than invented seniority claims.</span>
        </div>
      </div>

      {/* Control Bar: Search & Proficiency Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#EADBCE] shadow-sm">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#5F5A50] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search technologies (e.g., React, Python, Git)..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FCF8F3] border border-[#EADBCE] rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 focus:border-[#D88C76]"
          />
        </div>

        {/* Proficiency Level Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#5F5A50]">Show Familiarity Badges:</span>
          <button
            onClick={() => setShowProficiency(!showProficiency)}
            role="switch"
            aria-checked={showProficiency}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              showProficiency ? 'bg-[#D88C76]' : 'bg-[#E5DDD4]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                showProficiency ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm hover:shadow-md transition-shadow space-y-4"
          >
            <div className="space-y-1">
              <h2 className="font-serif text-2xl text-[#292720] font-medium">
                {cat.category}
              </h2>
              <p className="text-xs text-[#5F5A50] leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FCF8F3] border border-[#EADBCE] hover:border-[#D88C76] transition-colors"
                >
                  <span className="text-sm font-medium text-[#292720]">
                    {skill.name}
                  </span>
                  {showProficiency && skill.familiarity && (
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getFamiliarityBadge(skill.familiarity)}`}>
                      {skill.familiarity}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
