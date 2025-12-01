// src/components/sections/ExperienceSection.jsx
import React from "react";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeader from "../common/SectionHeader";
import { workExperience, education, certifications } from "../../data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================ */}
        {/* EXPERIENCE HEADER */}
        {/* ============================ */}
        <AnimatedSection>
          <SectionHeader
            title="Professional Journey"
            subtitle="A compressed view of everything I can do (and do without breaking production… mostly)"
          />
        </AnimatedSection>

        {/* ============================ */}
        {/* EXPERIENCE TIMELINE */}
        {/* ============================ */}
        <div className="mt-16 space-y-14 relative border-l border-slate-700/40">

          {workExperience.map((job, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="relative pl-12">

                {/* Timeline Dot */}
                <div className="
                  absolute -left-[9px] top-3 w-5 h-5 rounded-full 
                  bg-gradient-to-br from-blue-500 to-purple-600 
                  shadow-lg shadow-blue-600/30 border border-white/10
                " />

                {/* Experience Card */}
                <div className="
                  relative bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl
                  border border-slate-700/50 transition-all duration-300
                  hover:border-blue-500/50 hover:shadow-blue-500/10
                ">
                  
                  {/* Duration Badge */}
                  <div className="
                    absolute top-4 right-4 w-16 h-16 rounded-full
                    bg-gradient-to-br from-blue-700/20 to-purple-700/20 
                    border border-blue-400/30
                    text-[10px] text-white flex items-center justify-center
                  ">
                    {job.duration}
                  </div>

                  {/* Header */}
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <p className="text-blue-400 font-semibold">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mt-3">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="
                          px-3 py-1.5 rounded-lg text-xs 
                          bg-slate-700/40 border border-slate-600/50
                          hover:border-blue-400/50 hover:bg-slate-700/60 
                          text-gray-300 transition
                        "
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>


        {/* ============================ */}
        {/* EDUCATION HEADER */}
        {/* ============================ */}
        <AnimatedSection delay={200}>
          <div className="text-center mb-12 mt-24">
            <h3
              className="
                text-3xl font-bold 
                bg-gradient-to-r from-blue-400 to-purple-400 
                bg-clip-text text-transparent
              "
            >
              Education
            </h3>

            {/* Humour Subtitle */}
            <p className="text-sm text-gray-400 mt-2 italic">
              Where I learned the theory… and Google taught me the rest.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================ */}
        {/* EDUCATION TIMELINE */}
        {/* ============================ */}
        <div className="space-y-14 relative border-l border-slate-700/40">

          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 120}>
              <div className="relative pl-12">

                {/* Dot */}
                <div className="
                  absolute -left-[9px] top-3 w-5 h-5 rounded-full 
                  bg-gradient-to-br from-blue-500 to-purple-600 
                  shadow-lg shadow-blue-600/30 border border-white/10
                " />

                {/* Card */}
                <div className="
                  bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl
                  border border-slate-700/50 transition-all duration-300
                  hover:border-blue-500/50 hover:shadow-blue-500/10
                ">

                  <div className="flex items-start gap-4 mb-3">
                    <div className="
                      w-12 h-12 rounded-xl 
                      bg-gradient-to-br from-blue-500 to-purple-600
                      flex items-center justify-center shadow-md
                    ">
                      <GraduationCap size={22} className="text-white" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-sm text-blue-300">{edu.field}</p>
                      <p className="text-xs text-gray-400">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400">
                    {edu.period} • <span className="text-green-400">{edu.grade}</span>
                  </div>

                </div>

              </div>
            </AnimatedSection>
          ))}

        </div>



        {/* ============================ */}
        {/* CERTIFICATIONS HEADER */}
        {/* ============================ */}
        <AnimatedSection delay={300}>
          <div className="text-center mb-12 mt-24">
            <h3
              className="
                text-3xl font-bold 
                bg-gradient-to-r from-purple-400 to-pink-400 
                bg-clip-text text-transparent
              "
            >
              Certifications
            </h3>

            {/* Humour Subtitle */}
            <p className="text-sm text-gray-400 mt-2 italic">
              Collecting badges to prove I know what I swear I know.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================ */}
        {/* CERTIFICATION CARDS */}
        {/* ============================ */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 120}>
              <div
                className="
                  bg-slate-800/40 backdrop-blur-xl p-5 rounded-2xl
                  border border-slate-700/50 hover:border-purple-400/40
                  transition shadow-lg hover:shadow-purple-500/10 flex gap-4
                "
              >
                <div className="
                  w-12 h-12 rounded-xl 
                  bg-gradient-to-br from-purple-500 to-pink-600 
                  flex items-center justify-center shadow-md
                ">
                  <Award size={22} className="text-white" />
                </div>

                <div>
                  <p className="text-base font-semibold text-gray-200 leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
