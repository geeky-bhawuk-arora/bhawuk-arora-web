import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import { featuredProjects } from '../../data/projects';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Featured Projects"
            subtitle="Building cool things that (usually) work on the first try."
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={100 * (index + 1)}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden"
              >
                {/* Abstract Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-full text-gray-300 hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl !== "#" && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-full text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center text-sm font-semibold text-gray-500">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <span key={key} className="flex gap-2 items-center">
                        <span className="text-gray-300 capitalize">{key.replace('_', ' ')}:</span>
                        <span className="text-white">{value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;