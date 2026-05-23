import React from 'react';
import { motion } from 'framer-motion';




const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-md text-[#f5e6d3] leading-6 w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Descubra o bem-estar através da saúde intestinal.
    </motion.p>
  );
};




export default WelcomeMessage;