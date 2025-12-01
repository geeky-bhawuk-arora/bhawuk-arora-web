import React from 'react';
import { Code, Database, Cloud, Zap, Award, Rocket, Coffee, Bug, Briefcase } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';

const AboutSection = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Engineering & AI',
      description: 'Building data pipelines, ADF/Databricks workflows, and intelligent AI systems like NL-to-SQL agents and CNN-based enhancers.',
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Automation',
      description: 'Automating cloud infra using Terraform, Ansible, Docker, and GitHub Actions with a focus on secure, scalable deployments.',
      color: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400'
    },
    {
      icon: Code,
      title: 'Specialized Platform Development',
      description: 'Developing Salesforce apps (Apex/LWC) and building production-ready APIs using FastAPI and Spring Boot.',
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400'
    }
  ];

  const funFacts = [
    { icon: Coffee, text: "Runs on caffeine and Stack Overflow" },
    { icon: Bug, text: "Professional bug creator & occasional fixer" },
    { icon: Rocket, text: "Enthusiast of things that fly (and crash)" }
  ];

  const stats = [
    {
      count: '15+',
      label: 'Projects Built',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      count: '5+',
      label: 'Certifications',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      count: '3',
      label: 'Internships',
      icon: Briefcase,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <AnimatedSection>
          <SectionHeader 
            title="About Me"
            subtitle="AI • Data Engineering • Cloud & DevOps"
          />
        </AnimatedSection>

        {/* Fun Disclaimer Banner */}
        <AnimatedSection delay={100}>
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto">
            <p className="text-gray-300 text-center text-sm md:text-base italic flex items-center justify-center gap-2 flex-wrap">
              <span className="text-2xl">⚠️</span>
              <span>Disclaimer: Occasionally runs on sarcasm, caffeine, and questionable debugging decisions.</span>
            </p>
          </div>
        </AnimatedSection>

        {/* MAIN BIO */}
        <AnimatedSection delay={200}>
          <div className="mt-16 space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I work across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-bold">
                DevOps, Data Engineering, and Cloud Automation
              </span>
              {' '} building systems that behave better than most software I meet.
            </p>


            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I automate repetitive tasks, decode messy logs, and solve problems I definitely didn’t cause (probably).
            </p>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Early in my career but learning fast, iterating faster, and breaking fewer things with surprising consistency.
            </p>
          </div>
        </AnimatedSection>

        {/* Fun Facts Pills */}
        <AnimatedSection delay={250}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {funFacts.map((fact, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full hover:border-blue-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <fact.icon size={20} className="text-blue-400" />
                <span className="text-gray-300 text-sm">{fact.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* QUICK STATS - INTEGRATED HERE */}
        <AnimatedSection delay={300}>
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className="relative flex justify-center mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Count */}
                <div className="relative text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.count}
                  </div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.gradient} group-hover:w-3/4 transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* WHAT I DO */}
        <AnimatedSection delay={400}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mt-24 mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Do
          </h3>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={450 + i * 100}>
              <div className="group relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-0 right-0 w-1 h-10 bg-gradient-to-b ${service.color} rounded`}></div>
                  <div className={`absolute top-0 right-0 w-10 h-1 bg-gradient-to-r ${service.color} rounded`}></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;