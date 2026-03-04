// src/components/sections/BlogSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';

const blogPosts = [
    {
        id: 1,
        title: "Understanding Databricks Delta Lakehouse for Beginners",
        excerpt: "A deep dive into how Delta Lake brings reliability to data lakes and why it's a game-changer for big data engineering.",
        date: "Aug 15, 2024",
        readTime: "5 min read",
        tags: ["Data Engineering", "Databricks", "Big Data"],
        url: "#" // Replace with actual URL
    },
    {
        id: 2,
        title: "Deploying FastAPI Applications with Docker & Terraform",
        excerpt: "Learn how to containerize your Python APIs and deploy them seamlessly using Infrastructure as Code principles.",
        date: "Oct 22, 2024",
        readTime: "7 min read",
        tags: ["DevOps", "FastAPI", "Terraform", "Docker"],
        url: "#" // Replace with actual URL
    },
    {
        id: 3,
        title: "Building Real-time Dashboards with PySpark",
        excerpt: "A practical guide to processing streaming data and visualizing metrics in real-time dashboards.",
        date: "Jan 05, 2025",
        readTime: "6 min read",
        tags: ["PySpark", "Analytics", "Streaming"],
        url: "#" // Replace with actual URL
    }
];

const BlogSection = () => {
    return (
        <section id="blog" className="py-24 relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection>
                    <SectionHeader
                        title="Latest Writings"
                        subtitle="Thoughts, tutorials, and rants on code."
                    />
                </AnimatedSection>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <AnimatedSection key={post.id} delay={100 * (index + 1)}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="h-full flex flex-col bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group shadow-lg hover:shadow-blue-500/10"
                            >
                                {/* Header/Meta */}
                                <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-400">
                                    <span className="flex items-center gap-1.5 bg-slate-700/50 px-2 py-1 rounded-md">
                                        <Calendar size={12} className="text-blue-400" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <BookOpen size={12} className="text-purple-400" />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-gray-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-semibold text-gray-300 bg-slate-700/40 border border-slate-600/50 px-2 py-1 rounded-full uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer/Link */}
                                <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                                    >
                                        Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-600 transition-all"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* View All Button */}
                <AnimatedSection delay={400}>
                    <div className="mt-12 text-center">
                        <a
                            href="#" // Replace with Medium/Hashnode profile link later
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700 border border-slate-600/50 hover:border-blue-500/50 rounded-full font-medium text-gray-200 transition-all duration-300 group shadow-lg"
                        >
                            View all posts on Medium
                            <ExternalLink size={16} className="text-blue-400 group-hover:rotate-45 transition-transform" />
                        </a>
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
};

export default BlogSection;
