'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../images/forest.jpg';
import img2 from '../images/tech_ambiental.jpg';
import img3 from '../images/amazonas.jpg';
import img4 from '../images/ai.jpg';

const EcoPlatform = () => {
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
    {
      title: "RestorAtIon",
      content: "Innovación verde, tecnología que transforma el futuro.",
      image: img1,
      fullBg: true
    },
    {
      title: "Nuestra Misión",
      content: "Utilizar modelos predictivos de IA para restaurar ecosistemas a nivel global, asegurando sostenibilidad a largo plazo y adaptabilidad ante cambios climáticos.",
      image: "/",
      fullBg: true
    },
    {
      title: "Visión",
      content: "Convertirnos en la plataforma líder en restauración ecológica, integrando tecnología de punta para regenerar la biodiversidad y asegurar el equilibrio ambiental.",
      image: "/images/image2.jpg",
      fullBg: true
    },
    {
      title: "Tecnología en Acción",
      content: "Integramos datos satelitales, clima, biodiversidad y factores del suelo para predecir acciones eficaces. Gestionamos recursos hídricos y seleccionamos especies estratégicas.",
      image: img2
    },
    {
      title: "Valor Ganado en Tiempo Real",
      content: "Nuestro modelo de IA optimiza procesos en tiempo real, ajustando estrategias con datos dinámicos, reduciendo costos y maximizando el impacto.",
      image: "/images/image4.jpg",
      fullBg: true
    },
    {
      title: "Impacto Ambiental Personalizado",
      content: "Ofrecemos soluciones a medida, adaptándonos rápidamente a condiciones locales y globales, asegurando la sostenibilidad del proyecto.",
      image: "/images/image5.jpg",
      fullBg: true
    },
    {
      title: "Optimización de Procesos de Restauración",
      content: "La IA mejora la eficiencia en la restauración de ecosistemas, reduciendo costos y mitigando riesgos. En el Amazonas, se integraron comunidades indígenas para lograr un impacto social positivo.",
      image: img3,
      textPosition: 'left'
    },
    {
      title: "Monitoreo Predictivo y Decisiones Automatizadas",
      content: "La IA procesa datos en tiempo real para ajustar estrategias automáticamente y responder rápidamente a eventos críticos. Caso de estudio: En una zona forestal, se introdujeron especies resistentes al fuego, acelerando la recuperación un 40%.",
      image: img4,
      textPosition: 'right'
    }
  ];

  return (
    <div className="min-h-screen">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? 'bg-green-50' : 'bg-green-900';
        const textColor = isEven ? 'text-green-900' : 'text-green-50';
        
        if (section.fullBg) {
          return (
            <motion.section
              key={index}
              className={`h-screen flex items-center justify-center ${bgColor} ${textColor} relative`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeSection === index ? 1 : 0.3,
                y: activeSection === index ? 0 : 50,
              }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${section.image.src || section.image})`,
                  opacity: 0.3
                }}
              ></div>
              <div className="z-10 text-center p-8 md:p-16">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-xl md:text-2xl">
                  {section.content}
                </p>
              </div>
            </motion.section>
          );
        } else {
          const textPositionClass = section.textPosition === 'left' 
            ? 'flex-row' 
            : 'flex-row-reverse';

          return (
            <motion.section
              key={index}
              className={`h-screen flex ${textPositionClass} ${bgColor} ${textColor}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeSection === index ? 1 : 0.3,
                y: activeSection === index ? 0 : 50,
              }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-1/2 flex flex-col justify-center p-8 md:p-16 z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-xl md:text-2xl">
                  {section.content}
                </p>
              </div>
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${section.image.src || section.image})`,
                }}
              ></div>
            </motion.section>
          );
        }
      })}
    </div>
  );
};

export default EcoPlatform;