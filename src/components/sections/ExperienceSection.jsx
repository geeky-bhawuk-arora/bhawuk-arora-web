import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, Building2 } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import { workExperience, education, certifications } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader 
            title="Professional Journey" 
            subtitle="My career path in cloud technologies and software development"
          />
        </AnimatedSection>
        
        {/* Modern Card-Based Timeline */}
        <div className="mt-16 space-y-6">
          {workExperience.map((job, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="relative group">
                {/* Connecting Line for non-first items */}
                {index !== 0 && (
                  <div className="absolute left-6 -top-6 w-0.5 h-6 bg-gradient-to-b from-slate-700 to-transparent"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Indicator */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Building2 size={20} className="text-white" />
                      </div>
                      {index !== workExperience.length - 1 && (
                        <div className="absolute left-1/2 top-12 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group-hover:translate-x-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-base text-blue-400 font-semibold mb-2">{job.company}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30">
                          {job.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((highlight, i) => (
                        <span 
                          key={i} 
                          className="bg-slate-700/40 px-3 py-1.5 rounded-lg text-xs text-gray-300 border border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/60 transition-all"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Education & Certifications */}
        <AnimatedSection delay={400}>
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education & Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-400 mb-1">{education.degree}</h4>
                    <p className="text-sm font-medium text-gray-300 mb-1">{education.field}</p>
                    <p className="text-sm text-gray-400 mb-2">{education.institution}</p>
                    <p className="text-xs text-gray-500">Graduated: {education.graduationDate}</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-purple-400 pt-2">Professional Certifications</h4>
                </div>
                <ul className="space-y-2.5 ml-16">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className={`text-${cert.color}-400 mt-0.5 flex-shrink-0`}>✓</span>
                      <span>{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;