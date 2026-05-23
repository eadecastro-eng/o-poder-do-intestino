import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';




const PricingCard = ({ originalPrice, currentPrice, items, ctaText, onCtaClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1a4d3e] rounded-2xl shadow-2xl p-8 max-w-md mx-auto relative overflow-hidden border border-[#d4af37]/50"
    >
      <div className="absolute top-0 right-0 bg-[#d4af37] text-[#1a4d3e] px-6 py-2 rounded-bl-2xl font-bold shadow-md">
        Oferta Especial
      </div>
     
      <div className="mt-8 mb-6 text-center">
        <p className="text-[#f5e6d3]/60 line-through text-xl mb-2 font-light">De R$ {originalPrice}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-6xl font-bold text-[#d4af37] drop-shadow-md">R${currentPrice}</span>
        </div>
        <p className="text-sm text-[#f5e6d3]/80 mt-2">Disponível por tempo limitado</p>
      </div>




      <div className="space-y-4 mb-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
            <span className="text-[#f5e6d3]">{item}</span>
          </div>
        ))}
      </div>




      <CTAButton onClick={onCtaClick} className="w-full py-4 text-xl">
        {ctaText}
      </CTAButton>
    </motion.div>
  );
};




export default PricingCard;