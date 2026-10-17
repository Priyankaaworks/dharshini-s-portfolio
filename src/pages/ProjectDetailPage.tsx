import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { sampleProjects } from '../data/portfolioData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = sampleProjects.findIndex((p) => p.slug === slug);
  const project = sampleProjects[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? sampleProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < sampleProjects.length - 1 ? sampleProjects[projectIndex + 1] : null;

  return (
    <article className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Back button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5F5A50] hover:text-[#D88C76] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5EDE4] text-[#D88C76] border border-[#EADBCE]">
            {project.category}
          </span>
          <span className="text-xs text-[#5F5A50]">
            · Published {project.publishedDate}
          </span>
          {project.isSample && (
            <span className="text-xs bg-[#F7EBE1] text-[#7A6452] px-2.5 py-0.5 rounded-full border border-[#EADBCE]">
              Editable Sample Project
            </span>
          )}
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#292720] tracking-tight font-normal">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#5F5A50] leading-relaxed max-w-3xl">
          {project.fullDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#D88C76] hover:bg-[#C67862] shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#292720] bg-white border border-[#D5C7B8] hover:border-[#D88C76] hover:bg-[#F5EDE4]/40 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>

      {/* Main Showcase Image */}
      <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] shadow-md bg-[#F7EBE1]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover max-h-[580px] mx-auto"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Problem & Solution Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="bg-white rounded-2xl p-8 border border-[#EADBCE] space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#FDEEE9] flex items-center justify-center text-[#D88C76]">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl text-[#292720] font-medium">The Problem</h2>
          <p className="text-sm text-[#5F5A50] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-2xl p-8 border border-[#EADBCE] space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#F2F5ED] flex items-center justify-center text-[#8A9678]">
            <Lightbulb className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-2xl text-[#292720] font-medium">The Solution</h2>
          <p className="text-sm text-[#5F5A50] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Key Features & Architecture */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] space-y-8 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl text-[#292720] font-normal">
            Key Features & User Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#FCF8F3] border border-[#EADBCE]/70">
              <CheckCircle2 className="w-5 h-5 text-[#8A9678] shrink-0 mt-0.5" />
              <span className="text-sm text-[#292720] leading-relaxed font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Details */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
            Technologies & Tools
          </span>
          <h2 className="font-serif text-3xl text-[#292720] font-normal">
            Tech Stack Overview
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 rounded-xl bg-white border border-[#EADBCE] text-sm font-medium text-[#292720] shadow-sm flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-[#D88C76]" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges & Lessons Learned */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenges */}
        <div className="bg-[#FAF5EE] rounded-2xl p-8 border border-[#EADBCE] space-y-4">
          <h3 className="font-serif text-2xl text-[#292720] font-medium">Technical Challenges</h3>
          <ul className="space-y-3">
            {project.challenges.map((c, i) => (
              <li key={i} className="text-sm text-[#5F5A50] leading-relaxed flex items-start gap-2.5">
                <span className="text-[#D88C76] font-bold text-base">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons Learned */}
        <div className="bg-[#FAF5EE] rounded-2xl p-8 border border-[#EADBCE] space-y-4">
          <h3 className="font-serif text-2xl text-[#292720] font-medium">Lessons Learned</h3>
          <ul className="space-y-3">
            {project.lessonsLearned.map((l, i) => (
              <li key={i} className="text-sm text-[#5F5A50] leading-relaxed flex items-start gap-2.5">
                <span className="text-[#8A9678] font-bold text-base">•</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pagination: Next & Prev Projects */}
      <div className="pt-8 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-[#5F5A50] hover:text-[#D88C76] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevProject.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-[#5F5A50] hover:text-[#D88C76] transition-colors ml-auto"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </article>
  );
};
