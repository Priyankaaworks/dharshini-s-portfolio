import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Trophy, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Info 
} from 'lucide-react';
import { experienceData, ExperienceItem } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredExperience = experienceData.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const getItemIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5 text-[#D88C76]" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#8A9678]" />;
      case 'certification':
        return <Award className="w-5 h-5 text-[#B87A5E]" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-[#D9A05B]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#D88C76]" />;
    }
  };

  const getBadgeStyle = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'work':
        return 'text-[#D88C76] bg-[#FDEEE9] border-[#F2D2C8]';
      case 'education':
        return 'text-[#8A9678] bg-[#F2F5ED] border-[#D9DFD0]';
      case 'certification':
        return 'text-[#B87A5E] bg-[#F7EBE1] border-[#EADBCE]';
      case 'hackathon':
        return 'text-[#8C6D58] bg-[#FAF3EC] border-[#EADBCE]';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
          Journey & Milestones
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
          Experience & Education
        </h1>
        <p className="text-base text-[#5F5A50] leading-relaxed max-w-xl">
          An overview of my education, internships, certifications, and technical milestones.
        </p>

        {/* Notice */}
        <div className="inline-flex items-center gap-2 p-3 bg-[#F7EBE1]/60 border border-[#EADBCE] rounded-xl text-xs text-[#7A6452]">
          <Info className="w-4 h-4 text-[#D88C76] shrink-0" />
          <span>These are editable placeholder records in <code>portfolioData.ts</code> that you can update with your exact dates, universities, and company names.</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F5EDE4] rounded-2xl border border-[#EADBCE] w-fit">
        {[
          { id: 'all', label: 'All Milestones' },
          { id: 'work', label: 'Work & Internships' },
          { id: 'education', label: 'Education' },
          { id: 'certification', label: 'Certifications' },
          { id: 'hackathon', label: 'Hackathons' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              filter === tab.id
                ? 'bg-white text-[#292720] shadow-sm font-semibold'
                : 'text-[#5F5A50] hover:text-[#292720]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-[#EADBCE] ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
        {filteredExperience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#EADBCE] group-hover:border-[#D88C76] flex items-center justify-center shadow-sm transition-colors">
              {getItemIcon(item.type)}
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBadgeStyle(item.type)}`}>
                      {item.type}
                    </span>
                    {item.location && (
                      <span className="text-xs text-[#5F5A50] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D88C76]" />
                        {item.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl text-[#292720] font-medium">
                    {item.roleOrDegree}
                  </h3>
                  <h4 className="text-sm font-medium text-[#7A6452]">
                    {item.organization}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5F5A50] bg-[#FCF8F3] px-3 py-1.5 rounded-xl border border-[#EADBCE]/80 shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#D88C76]" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-[#5F5A50] leading-relaxed">
                {item.description}
              </p>

              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-2 pt-2 border-t border-[#EADBCE]/60">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#5F5A50] flex items-start gap-2">
                      <span className="text-[#D88C76] font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.skills && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCF8F3] text-[#7A6452] border border-[#EADBCE]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
