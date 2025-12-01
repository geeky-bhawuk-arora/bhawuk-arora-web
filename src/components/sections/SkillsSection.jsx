// src/components/sections/SkillsSection.jsx
import React from "react";
import {
  Code,
  Zap,
  Globe,
  Cpu,
  Database,
  Boxes,
  Wrench,
} from "lucide-react";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeader from "../common/SectionHeader";
import SkillBar from "../ui/SkillBar";
import { technicalSkills } from "../../data/skill";

// Map icons to skills (edit anytime)
const skillIcons = {
  Python: Zap,
  Azure: Globe,
  PySpark: Cpu,
  FastAPI: Zap,
  Terraform: Boxes,
  Ansible: Wrench,
  SQL: Database,
  NoSQL: Database,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <SectionHeader
            title="Technical Proficiency"
            subtitle=" A compressed view of everything I can do (and do without breaking production… mostly)"

          />
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="
            bg-slate-800/40 backdrop-blur-xl p-10 
            rounded-2xl border border-slate-700/60 
            shadow-xl shadow-blue-900/10 mt-10
          ">
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
              <Code size={28} />
              Core Skill Proficiency
            </h3>

            <div className="space-y-10">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || Code;

                return (
                  <div key={skill.name} className="flex items-center gap-6">
                    {/* Icon Left */}
                    <div className="
                      w-12 h-12 rounded-xl flex items-center justify-center 
                      bg-gradient-to-br from-blue-600 to-purple-500 
                      shadow-lg shadow-blue-600/30
                    ">
                      <IconComponent size={22} className="text-white" />
                    </div>

                    {/* Skill Bar */}
                    <div className="flex-1">
                      <SkillBar
                        skill={skill.name}
                        percentage={skill.percentage}
                        delay={index * 120}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default SkillsSection;
