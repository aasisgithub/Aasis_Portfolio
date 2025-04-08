import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import profileImage from '../images/p1.1.png';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#111827] transition-colors duration-300"
    >
      {/* Container for content and centered image */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl order-2 md:order-1"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <TypeAnimation
              sequence={[
                "Hi, I'm Aasis Shrestha",
                2000,
                'Developer & UI UX Designer',
                2000,
                'Welcome to My Portfolio',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
            Crafting digital experiences with passion and precision
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Rectangular image with refined shiny border animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex-shrink-0 relative"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden rounded-lg">
            {/* Subtle glossy reflection */}
            <motion.div
              initial={{ x: -200, y: -200 }}
              animate={{ 
                x: [ -200, 600 ],
                y: [ -200, 600 ],
                transition: { 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }
              }}
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: `linear-gradient(
                  135deg,
                 rgba(255, 255, 255, 0) 0%,
                  rgba(255, 255, 255, 0) 30%,
                  rgba(255, 255, 255, 0.5) 45%,
                  rgba(255, 255, 255, 0.8) 50%,
                  rgba(255, 255, 255, 0.5) 55%,
                  rgba(255, 255, 255, 0) 70%,
                  rgba(255, 255, 255, 0) 100%
                )`,
                width: '200%',
                height: '200%',
              }}
            />
            
            {/* Elegant border gradient matching your site */}
            <div 
              className="absolute inset-0 rounded-lg p-[2px] overflow-hidden"
              style={{
                background: 'linear-gradient(60deg,#2b5876,#4e4376,#753a88,#ffa751)',
                backgroundSize: '500% 100%',
                animation: 'gradient 5s ease infinite',
              }}
            >
              <div className="relative w-full h-full rounded-[calc(0.5rem-2px)] overflow-hidden bg-white/5 backdrop-blur-sm">
                <img 
                  src={profileImage}
                  alt="Aasis Shrestha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;