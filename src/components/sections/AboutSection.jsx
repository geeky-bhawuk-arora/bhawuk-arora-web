import React from 'react';
import { Code, Database, Globe, MapPin, Cloud, Zap, Cpu, Award } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
// import { personalInfo } from '../../data/personalInfo';

const AboutSection = () => {
  // const coreSkills = [
  //   'Python', 'Java', 'Azure', 'PySpark', 'FastAPI', 
  //   'Terraform', 'Ansible', 'Databricks', 'Salesforce', 'Docker'
  // ];

  const services = [
    {
      icon: Database,
      title: 'Data Engineering & AI',
      description:
        'Building scalable pipelines with Azure ADF/Databricks and deploying intelligent systems like NL-to-SQL agents and CNN-based image enhancement models.',
      color: 'text-blue-400'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Infrastructure',
      description:
        'Automating cloud environments using Terraform, Ansible, Docker, and GitHub Actions to deliver secure, reliable, fast deployments.',
      color: 'text-green-400'
    },
    {
      icon: Code,
      title: 'Specialized Platform Development',
      description:
        'Developing Salesforce platforms (Apex/LWC) and building scalable APIs using FastAPI and Spring Boot for real-world production workloads.',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <AnimatedSection>
          <SectionHeader 
            title="About Me"
            subtitle="AI • Data Engineering • Cloud & DevOps"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">

          {/* LEFT PANEL */}
          <AnimatedSection delay={150}>
            <div className="space-y-8">

              {/* LOCATION */}
              {/* <div className="flex items-center text-gray-400 gap-2">
                <MapPin size={18} className="text-blue-400" /> 
                <span>{personalInfo.location}</span>
              </div> */}

              {/* BIO BOX */}
              {/* <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/40 shadow-lg shadow-slate-900/20">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I specialize in <span className="text-blue-400 font-semibold">AI, Data Engineering, and Cloud Automation</span> — building scalable pipelines, ML systems, and cloud-native applications.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  With hands-on experience in <span className="text-purple-400 font-semibold">Terraform, Ansible, Azure, FastAPI, and Databricks</span>, I focus on creating high-performance data and cloud workflows.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  I also develop full Salesforce applications using Apex & LWC and build production-ready APIs & backend systems.
                </p>
              </div> */}

              {/* CORE SKILLS */}
              {/* <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/40">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 rounded-lg bg-slate-700/40 text-gray-300 text-sm border border-slate-600/30 hover:border-blue-400/40 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>*/}
          </div>
          </AnimatedSection>


          {/* RIGHT PANEL */}
          <AnimatedSection delay={250}>
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-purple-400">What I Do</h3>

              {/* SERVICE CARDS */}
              {services.map((s, i) => (
                <div
                  key={i}
                  className="group bg-slate-800/40 p-6 rounded-2xl border border-slate-700/40 hover:border-blue-400/40 transition-all shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-slate-700/40 group-hover:bg-slate-600/40 transition-all">
                      <s.icon size={26} className={s.color} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                        {s.title}
                      </h4>
                      <p className="text-gray-400 mt-2 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* QUICK STATS */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-slate-800/30 rounded-xl text-center border border-slate-700/40">
                  <div className="text-3xl font-bold text-blue-400 flex justify-center items-center gap-2">
                    <Zap size={26} /> 5+
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Major Certifications</p>
                </div>

                <div className="p-5 bg-slate-800/30 rounded-xl text-center border border-slate-700/40">
                  <div className="text-3xl font-bold text-purple-400 flex justify-center items-center gap-2">
                    <Award size={26} /> 2
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Featured Projects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
