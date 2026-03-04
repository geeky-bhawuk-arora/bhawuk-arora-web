import React from 'react';
import { User, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

const HeroSection = ({ scrollToSection }) => {
  // ... (omitted handleResumeDownload)
  // const handleResumeDownload = () => {
  //   // Create a link element and trigger download
  //   const link = document.createElement('a');
  //   link.href = personalInfo.resumeUrl;
  //   link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleResumeDownload = () => {
    window.open(personalInfo.resumeUrl, '_blank'); // Opens JPG in new tab/window
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <motion.div
          className="flex flex-col gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Staggering effect
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* Profile Avatar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
            }}
            className="w-36 h-36 mx-auto rounded-full overflow-hidden ring-4 ring-purple-500 hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            <img
              src="https://res.cloudinary.com/bhawuk-prod/image/upload/v1759812322/bhawuk-portfolio-react/bhawuk_profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide"
          >
            {personalInfo.title}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mt-2"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              variant="primary"
              size="lg"
            >
              Get In Touch
            </Button>

            <Button
              onClick={handleResumeDownload}
              variant="secondary"
              size="lg"
              className="flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown
            size={24}
            className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;