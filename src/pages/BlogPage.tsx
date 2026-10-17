import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4">
        <span className="text-xs font-bold tracking-[0.2em] text-[#D88C76] uppercase block">
          Thoughts & Writings
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#292720] tracking-tight font-normal">
          Articles & Engineering Notes
        </h1>
        <p className="text-base text-[#5F5A50] leading-relaxed max-w-xl">
          Observations on user interface craft, front-end architecture, and practical web development lessons.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-sm hover:shadow-md transition-shadow space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F5A50]">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F5EDE4] text-[#D88C76] font-semibold border border-[#EADBCE]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D88C76]" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8A9678]" />
                {post.readTime}
              </span>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="block group-hover:text-[#D88C76] transition-colors"
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-[#292720] font-medium leading-snug">
                {post.title}
              </h2>
            </Link>

            <p className="text-sm text-[#5F5A50] leading-relaxed">
              {post.summary}
            </p>

            <div className="pt-2">
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D88C76] hover:text-[#C67862] transition-colors group/read"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/read:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
