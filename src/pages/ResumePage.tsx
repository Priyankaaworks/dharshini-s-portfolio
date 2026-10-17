import React from 'react';
import { 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Phone,
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { portfolioConfig, skillCategories, experienceData, sampleProjects } from '../data/portfolioData';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPlaceholder = () => {
    // Generate an automatic text-based printable document or trigger browser print-to-PDF
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Action Header (Hidden in Print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-[#EADBCE] shadow-sm">
        <div className="space-y-1">
          <h1 className="font-serif text-2xl text-[#292720] font-medium">Curriculum Vitae</h1>
          <p className="text-xs sm:text-sm text-[#5F5A50]">
            Review, download, or print my complete resume.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#292720] bg-[#FCF8F3] border border-[#EADBCE] hover:border-[#D88C76] transition-colors"
          >
            <Printer className="w-4 h-4 text-[#D88C76]" />
            <span>Print Resume</span>
          </button>

          <button
            onClick={handleDownloadPlaceholder}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Sheet Container */}
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#EADBCE] shadow-md space-y-10 print:border-none print:shadow-none print:p-0 print:rounded-none">
        {/* Header Block */}
        <div className="border-b border-[#EADBCE] pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#292720] font-semibold tracking-tight">
                {portfolioConfig.fullName}
              </h2>
              <p className="font-serif text-xl text-[#D88C76] mt-0.5">
                {portfolioConfig.role}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-[#5F5A50] space-y-1 sm:text-right">
              <p className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D88C76]" />
                {portfolioConfig.location}
              </p>
              <p className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D88C76]" />
                <a href={`mailto:${portfolioConfig.email}`} className="hover:text-[#D88C76] transition-colors">
                  {portfolioConfig.email}
                </a>
              </p>
              <p className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D88C76]" />
                <a href={`tel:${portfolioConfig.phone}`} className="hover:text-[#D88C76] transition-colors">
                  {portfolioConfig.phoneFormatted || portfolioConfig.phone}
                </a>
              </p>
              <div className="flex sm:justify-end items-center gap-3 pt-1">
                <a href={portfolioConfig.social.github} target="_blank" rel="noreferrer" className="text-[#D88C76] hover:underline flex items-center gap-1">
                  <Github className="w-3 h-3" /> GitHub
                </a>
                <span>·</span>
                <a href={portfolioConfig.social.linkedin} target="_blank" rel="noreferrer" className="text-[#D88C76] hover:underline flex items-center gap-1">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5F5A50] leading-relaxed pt-2">
            {portfolioConfig.aboutExtended}
          </p>
        </div>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h3 className="font-serif text-xl text-[#292720] font-semibold uppercase tracking-wider text-xs border-b border-[#EADBCE] pb-1.5 text-[#D88C76]">
            Technical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {skillCategories.slice(0, 4).map((cat) => (
              <div key={cat.category} className="space-y-1">
                <span className="font-semibold text-[#292720]">{cat.category}: </span>
                <span className="text-[#5F5A50]">
                  {cat.skills.map(s => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="font-serif text-xl text-[#292720] font-semibold uppercase tracking-wider text-xs border-b border-[#EADBCE] pb-1.5 text-[#D88C76]">
            Work Experience
          </h3>
          <div className="space-y-6">
            {experienceData.filter(e => e.type === 'work').map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-serif text-lg text-[#292720] font-medium">
                    {item.roleOrDegree} · <span className="text-[#7A6452]">{item.organization}</span>
                  </h4>
                  <span className="text-xs text-[#5F5A50] font-medium">{item.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#5F5A50] leading-relaxed">
                  {item.description}
                </p>
                {item.achievements && (
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#5F5A50]">
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h3 className="font-serif text-xl text-[#292720] font-semibold uppercase tracking-wider text-xs border-b border-[#EADBCE] pb-1.5 text-[#D88C76]">
            Education
          </h3>
          <div className="space-y-4">
            {experienceData.filter(e => e.type === 'education').map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="font-serif text-lg text-[#292720] font-medium">
                    {item.roleOrDegree}
                  </h4>
                  <span className="text-xs text-[#5F5A50] font-medium">{item.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#7A6452]">{item.organization}</p>
                <p className="text-xs text-[#5F5A50]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="space-y-6">
          <h3 className="font-serif text-xl text-[#292720] font-semibold uppercase tracking-wider text-xs border-b border-[#EADBCE] pb-1.5 text-[#D88C76]">
            Featured Projects
          </h3>
          <div className="space-y-4">
            {sampleProjects.slice(0, 3).map((p) => (
              <div key={p.slug} className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-base text-[#292720] font-semibold">
                    {p.title}
                  </h4>
                  <span className="text-[11px] text-[#5F5A50]">{p.techStack.join(' · ')}</span>
                </div>
                <p className="text-xs text-[#5F5A50] leading-relaxed">
                  {p.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <h3 className="font-serif text-xl text-[#292720] font-semibold uppercase tracking-wider text-xs border-b border-[#EADBCE] pb-1.5 text-[#D88C76]">
            Certifications & Accomplishments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {experienceData.filter(e => e.type === 'certification' || e.type === 'hackathon').map((item) => (
              <div key={item.id} className="p-3 bg-[#FCF8F3] rounded-xl border border-[#EADBCE]">
                <p className="font-semibold text-[#292720]">{item.roleOrDegree}</p>
                <p className="text-[#5F5A50]">{item.organization} ({item.period})</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
