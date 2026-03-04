import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
      {/* Subtle floating particles */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full"
      />
      <motion.div
        animate={{ x: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full"
      />

      {/* Moving Ambient Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 30, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 -z-10"
      />
    </div>
  );
};

export default BackgroundElements;