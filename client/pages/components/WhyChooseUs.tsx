import { FaShieldAlt, FaClock, FaSmile, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FaShieldAlt size={30} />,
      title: 'Secure & Legal',
      desc: 'Our process is 100% compliant, ensuring your software resale is safe and recognized by law.',
    },
    {
      icon: <FaClock size={30} />,
      title: 'Fast Turnaround',
      desc: 'List your license and get a quote within hours. Our system is optimized for speed.',
    },
    {
      icon: <FaSmile size={30} />,
      title: 'Customer Focused',
      desc: 'From start to finish, we’re with you. Friendly support and clear communication, always.',
    },
    {
      icon: <FaChartLine size={30} />,
      title: 'Best Value',
      desc: 'We connect you to real demand and offer competitive pricing backed by market research.',
    }
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 mb-[0px]"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-6  txt-color"
      >
        Why Choose <span className="text-blue-700 dark:text-blue-500">SoftSell</span>?
      </motion.h2>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-12 " style={{ color: 'var(--txt-p-color)' }}>
        We offer a unique combination of security, speed, and value that sets us apart in the license resale industry.
      </p>

      <div className="grid md:grid-cols-2 gap-y-10 gap-x-12 max-w-5xl text-left">
        {points.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            <div className="text-blue-600 glow-icon mt-1 ic">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm" style={{ color: 'var(--txt-p-color1)' }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
