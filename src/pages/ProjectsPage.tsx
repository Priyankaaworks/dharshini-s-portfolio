import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ExternalLink, Github, ArrowRight, Filter, Info } from 'lucide-react';
import { sampleProjects, Project } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Web Development', 'Frontend', 'Full Stack', 'AI/ML', 'Data Science'];

  const filteredProjects = useMemo(() => {
    return sampleProjects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
          Portfolio & Case Studies
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
          Crafted Works & Applications
        </h1>
        <p className="text-base text-[#5F5A50] leading-relaxed">
          Explore software applications, user interfaces, and full-stack projects. Each card includes architecture details, problems solved, and source code.
        </p>

        {/* Informative placeholder note */}
        <div className="inline-flex items-center gap-2 p-3 bg-[#F7EBE1]/60 border border-[#EADBCE] rounded-xl text-xs text-[#7A6452]">
          <Info className="w-4 h-4 text-[#D88C76] shrink-0" />
          <span>These are sample projects configured as editable placeholders in <code>portfolioData.ts</code>.</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5EDE4] rounded-2xl border border-[#EADBCE]">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-[#292720] shadow-sm font-semibold'
                    : 'text-[#5F5A50] hover:text-[#292720]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:w-72">
          <Search className="w-4 h-4 text-[#5F5A50] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, stack, tag..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#EADBCE] rounded-xl text-[#292720] placeholder-[#5F5A50]/60 focus:outline-none focus:ring-2 focus:ring-[#D88C76]/50 focus:border-[#D88C76]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#5F5A50] hover:text-[#292720]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.slug}
              className="group bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Image */}
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
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#7A6452] px-2.5 py-1 rounded-full border border-[#EADBCE]">
                  {project.category}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="font-serif text-2xl text-[#292720] group-hover:text-[#D88C76] transition-colors font-medium block"
                  >
                    {project.title}
                  </Link>
                  <p className="text-sm text-[#5F5A50] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FCF8F3] text-[#7A6452] border border-[#EADBCE]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D88C76] hover:text-[#C67862] transition-colors group/link"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.title}`}
                        className="p-1.5 text-[#5F5A50] hover:text-[#292720] transition-colors"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="p-1.5 text-[#5F5A50] hover:text-[#D88C76] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-dashed border-[#EADBCE] space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#F5EDE4] flex items-center justify-center text-[#D88C76]">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#292720]">No projects found</h3>
          <p className="text-sm text-[#5F5A50] max-w-sm mx-auto">
            No projects match your current filter or search query "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#D88C76] hover:bg-[#C67862] rounded-full transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
