import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Laptop, 
  Code, 
  GraduationCap, 
  Heart, 
  Search, 
  FileEdit, 
  Rocket, 
  Github, 
  Linkedin, 
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';
import { portfolioConfig, sampleProjects } from '../data/portfolioData';
import { BotanicalBranchLeft, BotanicalBranchRight, StarSparkle } from '../components/BotanicalAccents';

export const HomePage: React.FC = () => {
  const featuredProjects = sampleProjects.filter(p => p.featured).slice(0, 3);

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'laptop': return <Laptop className="w-5 h-5 text-[#D88C76]" />;
      case 'code': return <Code className="w-5 h-5 text-[#D88C76]" />;
      case 'graduation': return <GraduationCap className="w-5 h-5 text-[#D88C76]" />;
      case 'heart': return <Heart className="w-5 h-5 text-[#D88C76]" />;
      default: return <Code className="w-5 h-5 text-[#D88C76]" />;
    }
  };

  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'search': return <Search className="w-5 h-5 text-[#D88C76]" />;
      case 'edit': return <FileEdit className="w-5 h-5 text-[#D88C76]" />;
      case 'code': return <Code className="w-5 h-5 text-[#D88C76]" />;
      case 'rocket': return <Rocket className="w-5 h-5 text-[#D88C76]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D88C76]" />;
    }
  };

  const skillBadges = [
    { name: 'C++', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Git', icon: '🌿' },
    { name: 'VS Code', icon: '💻' },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-6 sm:pt-12 pb-8 max-w-6xl mx-auto px-6 overflow-hidden">
        {/* Floating subtle star sparkles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden md:block pointer-events-none">
          <StarSparkle className="w-6 h-6 text-[#E4A290] opacity-60 animate-pulse" />
        </div>
        <div className="absolute top-36 right-16 hidden md:block pointer-events-none">
          <StarSparkle className="w-4 h-4 text-[#D88C76] opacity-50" />
        </div>
        <div className="absolute bottom-16 left-8 hidden md:block pointer-events-none">
          <StarSparkle className="w-5 h-5 text-[#D88C76] opacity-40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            {/* Script intro with heart */}
            <div className="flex items-center gap-2">
              <span className="font-script text-3xl sm:text-4xl text-[#7A6452] tracking-wide">
                Hi, I'm
              </span>
              <span className="text-xl inline-block transition-transform hover:scale-125 duration-200">
                🤎
              </span>
            </div>

            {/* Giant Serif Name & Role */}
            <div className="space-y-2">
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-normal text-[#C8735A] tracking-tight leading-[0.95] text-balance">
                {portfolioConfig.name}
              </h1>
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#5F5A50] font-normal tracking-tight">
                {portfolioConfig.role}
              </p>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-[#5F5A50] leading-relaxed max-w-lg">
              {portfolioConfig.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm hover:shadow-md transition-all duration-200 group active:scale-95 whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#292720] bg-transparent border border-[#D5C7B8] hover:border-[#D88C76] hover:bg-[#F5EDE4]/60 transition-all duration-200 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#D88C76]" />
                <span>Download Resume</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-5 text-[#292720]">
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full text-[#292720] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.social.email}
                aria-label="Email Me"
                className="p-2 rounded-full text-[#292720] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors"
                title={`Email: ${portfolioConfig.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${portfolioConfig.phone}`}
                aria-label="Call Me"
                className="p-2 rounded-full text-[#292720] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors"
                title={`Call: ${portfolioConfig.phoneFormatted || portfolioConfig.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full text-[#292720] hover:text-[#D88C76] hover:bg-[#E9E1D5]/40 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Arched Image with Botanical Leaves and Handwritten script */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Left Botanical Foliage */}
            <div className="absolute -left-4 sm:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none">
              <BotanicalBranchLeft className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-sm" />
            </div>

            {/* Right Botanical Foliage */}
            <div className="absolute -right-4 sm:right-4 top-1/3 -translate-y-1/2 z-20 pointer-events-none select-none">
              <BotanicalBranchRight className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-sm" />
            </div>

            {/* Handwritten calligraphic quote in corner */}
            <div className="absolute top-4 right-2 sm:right-6 z-20 pointer-events-none select-none text-right">
              <p className="font-script text-2xl sm:text-3xl text-[#5F5A50] leading-none transform rotate-3">
                Code<br />
                Create<br />
                Grow <span className="text-[#D88C76]">♡</span>
              </p>
            </div>

            {/* Organic Peach Arched Frame */}
            <div className="relative w-72 h-80 sm:w-96 sm:h-[26rem] md:w-[26rem] md:h-[28rem] rounded-t-[10rem] rounded-b-[6rem] bg-gradient-to-b from-[#F7EBE1] to-[#F1DFC8]/80 p-2 sm:p-3 shadow-inner flex items-end justify-center overflow-hidden border border-[#EEDBCC]/70">
              {/* Soft radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent pointer-events-none" />

              {/* Developer Photo */}
              <img
                src={portfolioConfig.avatar}
                alt={`${portfolioConfig.name} - ${portfolioConfig.role}`}
                className="w-full h-full object-cover object-top rounded-t-[9.5rem] rounded-b-[5.5rem] transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATISTICS BAR ===================== */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-[#EADBCE] shadow-sm hover:shadow-md transition-shadow py-8 px-6 sm:px-12">
          {/* Subtle leaves on the right */}
          <div className="absolute -right-5 -bottom-5 hidden sm:block pointer-events-none opacity-60">
            <BotanicalBranchRight className="w-16 h-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#EADBCE]">
            {portfolioConfig.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center px-4 ${idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : ''}`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#FCF8F3] border border-[#EADBCE] flex items-center justify-center mb-3 text-[#D88C76]">
                  {getStatIcon(stat.icon)}
                </div>
                {/* Value */}
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#292720] tracking-tight tabular-nums">
                  {stat.value}
                </span>
                {/* Label */}
                <span className="text-xs font-semibold tracking-wider text-[#5F5A50] uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block mb-1">
              Featured Projects
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292720] tracking-tight font-normal">
              My Recent Work
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D88C76] hover:text-[#C67862] transition-colors group whitespace-nowrap"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="group bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Project Image Preview */}
              <Link 
                to={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] bg-[#F7EBE1] overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#292720]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#292720] px-3 py-1.5 rounded-full shadow-sm">
                    View Case Study
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-serif text-xl sm:text-2xl text-[#292720] hover:text-[#D88C76] transition-colors font-medium"
                    >
                      {project.title}
                    </Link>
                    <Link
                      to={`/projects/${project.slug}`}
                      aria-label={`Open details for ${project.title}`}
                      className="text-[#5F5A50] hover:text-[#D88C76] p-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-sm text-[#5F5A50] line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags - Clean unboxed text with subtle pill pills matching image */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCF8F3] text-[#7A6452] border border-[#EADBCE]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== TECHNICAL SKILLS PREVIEW ===================== */}
      <section className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block mb-1">
              My Skills
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292720] tracking-tight font-normal">
              Technical Skills
            </h2>
          </div>

          <Link
            to="/skills"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D88C76] hover:text-[#C67862] transition-colors group whitespace-nowrap"
          >
            <span>View All Skills</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal Skill Badges matching image */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {skillBadges.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-[#EADBCE] shadow-sm hover:border-[#D88C76] hover:shadow transition-all duration-200"
            >
              <span className="text-base" aria-hidden="true">{skill.icon}</span>
              <span className="text-sm font-medium text-[#292720]">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== DEVELOPMENT PROCESS ===================== */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative bg-[#F9F2EA] rounded-3xl p-8 sm:p-12 border border-[#EADBCE] overflow-hidden">
          {/* Subtle leaves in corner */}
          <div className="absolute right-2 -bottom-2 hidden md:block pointer-events-none opacity-60">
            <BotanicalBranchRight className="w-20 h-auto" />
          </div>

          {/* Handwritten slogan in top right */}
          <div className="absolute top-6 right-6 sm:right-10 pointer-events-none select-none hidden lg:block text-right">
            <p className="font-script text-2xl text-[#7A6452] transform -rotate-3 leading-tight">
              Better<br />
              Code<br />
              Better<br />
              Tomorrow <span className="text-[#D88C76]">♡</span>
            </p>
          </div>

          {/* Section Header */}
          <div className="space-y-2 max-w-xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
              My Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#292720] tracking-tight font-normal">
              From Idea to Impact
            </h2>
            <p className="text-sm text-[#5F5A50] leading-relaxed">
              I follow a simple and effective process to turn ideas into meaningful digital solutions.
            </p>
          </div>

          {/* 4 Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {portfolioConfig.processSteps.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-4 relative">
                {/* Step Icon */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center text-[#D88C76] shadow-sm">
                  {getProcessIcon(step.icon)}
                </div>

                {/* Step Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-lg font-semibold text-[#292720]">
                      {step.step}.
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#292720]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5F5A50] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow for desktop between steps */}
                {idx < portfolioConfig.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-5 text-[#D88C76]/60">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION SECTION ===================== */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#F5EDE4] text-[#D88C76] mb-2">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#292720] font-normal tracking-tight">
          Have a project in mind or looking for a developer?
        </h2>
        <p className="text-base text-[#5F5A50] max-w-xl mx-auto leading-relaxed">
          I am always open to discussing new opportunities, creative collaborations, or engineering challenges.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-[#292720] border border-[#D5C7B8] hover:border-[#D88C76] hover:bg-white transition-all"
          >
            <span>View Resume</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
