import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Gamepad2, Music } from 'lucide-react';
// Import your local image
import profileImage from '../images/p3.jpg'; // Adjust the path as needed

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const hobbies = [
    { icon: <Code2 size={24} />, title: 'Coding', description: 'Building awesome web applications' },
    { icon: <Music size={24} />, title: 'Music', description: 'Listening Music' },
    { icon: <Gamepad2 size={24} />, title: 'Gaming', description: 'Strategy and RPG games' },
    { icon: <Coffee size={24} />, title: 'Coffee', description: 'Exploring different brews' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl"
              >
                <img
                  src={profileImage} // Using your local image
                  alt="Aasis Shrestha"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I am a passionate web developer and graphics designer with experience in creating responsive websites and designing captivating visuals. I love
                tackling new challenges and continuously growing my skill set to deliver
                outstanding results for my clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2 text-primary dark:text-primary">
                      {hobby.icon}
                      <h3 className="font-semibold">{hobby.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{hobby.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;