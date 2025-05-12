import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center text-left px-6 relative it overflow-hidden mb-[0px]">

     
      <div className="absolute inset-0 bg-black/60 z-0" />

     
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl ml-[10px] font-extrabold mb-4 text-white drop-shadow-glow"
        >
          Monetize Your Unused Software Licenses
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-slate-200 mb-6 max-w-xl backdrop-blur-sm  p-4 rounded-lg shadow-lg"
        >
          Turn idle software licenses into revenue. Fast, compliant, and stress-free.
          <br />
          <span className="text-blue-400 font-semibold">Quick. Legal. Hassle-free.</span>
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 ml-[10px] text-white px-8 py-3 mt-2 rounded-full shadow-xl hover:bg-blue-700 transition font-semibold glow-button"
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </section>
  );
}
