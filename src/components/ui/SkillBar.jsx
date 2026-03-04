import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-blue-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: delay > 0 ? delay / 1000 : 0
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;