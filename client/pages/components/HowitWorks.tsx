import { FaUpload, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload size={40} />,
      title: 'Upload License',
      description: 'Ready to sell your unused license?',
      detail: 'Upload it and we’ll handle the rest.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FaDollarSign size={40} />,
      title: 'Get Valuation',
      description: 'We value your license honestly.',
      detail: 'No lowballing—just what it’s worth.',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: 'Get Paid',
      description: 'We send your earnings quickly.',
      detail: 'No delays, no middlemen—just your money.',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 mb-[0px]"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
        style={{color: 'var(--text-color)'}}
      >
        How It Works
      </motion.h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12" style={{color: 'var(--txt-p-color1)'}} >

        Got unused software licenses lying around? SoftSell helps you turn them into cash in just three simple steps
      </p>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl px-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.25 }}
            viewport={{ once: true }}
            className={`flex flex-col items-start text-left p-6 rounded-2xl shadow-lg border border-slate-700 bg-gradient-to-br ${step.color} hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-white mb-4 glow-icon ic">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
            <p className="mb-2 text-xl text-white-900" style={{color: 'var(--txt-p-color5)'}}>{step.description}</p>
            <p className="text-xl text-white-900" style={{color: 'var(--txt-p-color5)'}}>{step.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
