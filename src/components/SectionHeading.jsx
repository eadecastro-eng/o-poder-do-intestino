import React from 'react';
import { motion } from 'framer-motion';




const SectionHeading = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-3 font-['Playfair_Display']">
        {children}
      </h2>
      <div className="w-24 h-1 bg-[#d4af37] rounded-full"></div>
    </motion.div>
  );
};




export default SectionHeading;