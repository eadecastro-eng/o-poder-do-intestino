import { motion } from 'framer-motion';
import HeroImage from '../components/HeroImage';
import CallToAction from '../components/CallToAction';
import WelcomeMessage from '../components/WelcomeMessage';




const HomePage = () => {
    return (
        <div
            className='min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative bg-[#1a4d3e]'
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a4d3e] via-[#133b2f] to-[#0a2019]"></div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='flex flex-col items-center gap-6 w-full max-w-[448px] relative z-10 bg-[#133b2f]/60 p-10 rounded-3xl border border-[#d4af37]/20 backdrop-blur-sm shadow-2xl'
            >
                <HeroImage />
                <div className='flex flex-col gap-3 w-full text-center'>
                    <CallToAction />
                    <WelcomeMessage />
                </div>
            </motion.div>
        </div>
    )
}




export default HomePage;