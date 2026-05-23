import React from 'react';
import { motion } from 'framer-motion';




const CallToAction = () => {
  return (
    <motion.h1
      className='text-2xl font-bold text-[#d4af37] leading-8 w-full font-["Playfair_Display"] drop-shadow-sm'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      O Poder do Intestino
    </motion.h1>
  );
};




export default CallToAction;