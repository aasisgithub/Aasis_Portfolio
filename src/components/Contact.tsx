import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (form.current) {
      emailjs
        .sendForm(
          'service_wxw92vr', // Your EmailJS service ID
          'template_30seazf', // Your EmailJS template ID
          form.current,
          {
            publicKey: 'I4rQRyN11ZMjCsPj8', // Your EmailJS public key
          }
        )
        .then(
          () => {
            setSubmitStatus({
              success: true,
              message: 'Message sent successfully!',
            });
            setFormState({ name: '', email: '', phone: '', message: '' });
          },
          () => {
            setSubmitStatus({
              success: false,
              message: 'Failed to send message. Please try again.',
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

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

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/aasisgithub', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/aasis-shrestha-7702a9306/', label: 'LinkedIn' },
    { icon: <Facebook size={24} />, url: 'https://www.facebook.com/aasis.shrestha.98/', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">aasisshrestha9898@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+977 9812276928</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white dark:bg-gray-700 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-md"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary transition-colors h-32 resize-none"
                    placeholder="Your Message"
                    required
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-3 rounded-lg ${
                      submitStatus.success
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;