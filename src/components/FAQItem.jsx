import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';




const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a4d3e] rounded-xl shadow-md overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow duration-300 border border-[#d4af37]/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#133b2f] transition-colors duration-200"
      >
        <span className="font-semibold text-[#d4af37] text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-[#d4af37] flex-shrink-0" />
        </motion.div>
      </button>
     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#133b2f]"
          >
            <div className="px-6 py-5 text-[#f5e6d3] leading-relaxed border-t border-[#d4af37]/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};




export default FAQItem;