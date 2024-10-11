'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EcoSPA = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { title: "Eco-Friendly Living", content: "Embrace a sustainable lifestyle" },
    { title: "Renewable Energy", content: "Power your future cleanly" },
    { title: "Reduce, Reuse, Recycle", content: "Small actions, big impact" },
    { title: "Green Spaces", content: "Nurture nature in your environment" },
  ];

  return (
    <div className="min-h-screen">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? 'bg-green-50' : 'bg-green-800';
        const textColor = isEven ? 'text-green-800' : 'text-green-50';

        return (
          <motion.section
            key={index}
            className={`h-screen flex flex-col justify-center items-center p-8 md:p-16 ${bgColor} ${textColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSection === index ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
              {section.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl">
              {section.content}
            </p>
          </motion.section>
        );
      })}
    </div>
  );
};

export default EcoSPA;