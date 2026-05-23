import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';




const BulletList = ({ items, variant = 'check' }) => {
  const Icon = variant === 'check' ? Check : AlertCircle;
  const iconColor = 'text-[#d4af37]'; // Always gold for consistent branding




  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start gap-3"
        >
          <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-1 drop-shadow-sm`} />
          <span className={`leading-relaxed opacity-90 ${variant === 'check' ? 'text-white' : ''}`}>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};




export default BulletList;