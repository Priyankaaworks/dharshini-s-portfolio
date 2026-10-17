import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#5F5A50] hover:text-[#D88C76] transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to all articles</span>
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#5F5A50]">
          <span className="px-3 py-1 rounded-full bg-[#F5EDE4] text-[#D88C76] font-semibold border border-[#EADBCE]">
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

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#292720] tracking-tight font-normal leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-[#5F5A50] leading-relaxed italic border-l-2 border-[#D88C76] pl-4">
          {post.summary}
        </p>
      </header>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADBCE] shadow-sm space-y-6 text-[#292720] leading-relaxed text-base">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="pt-8 border-t border-[#EADBCE] flex items-center justify-between">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5F5A50] hover:text-[#D88C76] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Articles</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D88C76] hover:text-[#C67862] transition-colors"
        >
          <span>Discuss this article</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};
