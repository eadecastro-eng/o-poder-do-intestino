import React from 'react';
import { motion } from 'framer-motion';




const CTAButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "px-8 py34 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105";
 
  const variantClasses = {
    primary: "bg-[#d4af37] text-[#1a4d3e] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]",
    secondary: "bg-transparent text-[#d4af37] border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a4d3e]",
    glass: "backdrop-blur-md bg-white/10 text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-[#1a4d3e] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
  };




  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};




export default CTAButton;