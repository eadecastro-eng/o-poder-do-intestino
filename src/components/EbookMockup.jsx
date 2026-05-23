import React from 'react';
import { motion } from 'framer-motion';




const EbookMockup = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full max-w-sm mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative cursor-pointer perspective-[1000px]"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          initial={{ rotateY: -15, rotateX: 5 }}
          animate={{ rotateY: -15, rotateX: 5 }}
          whileHover={{ rotateY: -5, rotateX: 2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Book Cover */}
          <div className="relative z-10 w-64 md:w-72 rounded-r-lg shadow-2xl overflow-hidden border-l-8 border-[#d4af37] bg-[#1a4d3e]">
            <img
              src="https://horizons-cdn.hostinger.com/70b0f650-7121-4c06-bf1e-6ef244d47b29/d88a7e3dc361e7bb0d7a412707c61b4b.png"
              alt="Capa do e-book 21 Dias para um Intestino Desinflamado"
              className="w-full h-auto object-cover"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 opacity-50"></div>
          </div>
         
          {/* Book Pages Edge (Depth Effect) */}
          <div
            className="absolute top-1 bottom-1 right-0 w-6 bg-[#f5e6d3] border border-[#d4af37]/30 shadow-inner rounded-r-sm z-0"
            style={{
              transform: 'translateX(50%) translateZ(-15px) rotateY(90deg)',
              transformOrigin: 'right'
            }}
          >
            {/* Pages lines */}
            <div className="w-full h-full flex flex-col justify-evenly opacity-30 px-[1px] py-2">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-[#1a4d3e]/40"></div>
              ))}
            </div>
          </div>
        </motion.div>
       
        {/* Floor Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] h-8 bg-black/50 blur-xl rounded-[100%] pointer-events-none"></div>
      </motion.div>
     
      <p className="text-[#d4af37] text-center font-semibold text-lg mt-14 bg-[#1a4d3e]/80 backdrop-blur-md px-6 py-2 rounded-full border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
        100% online, acesso imediato
      </p>
    </div>
  );
};




export default EbookMockup;