import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-10"
        style={{ color: 'var(--text-color)' }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/10 border border-white/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <input
              name="name"
              required
              onChange={handleChange}
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 p-3 outline-none text-sm"
              style={{ color: 'var(--txt-p-color1)' }}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm transition-all">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 p-3 outline-none text-sm"
              style={{ color: 'var(--txt-p-color2)' }}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm transition-all">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              name="company"
              onChange={handleChange}
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 p-3 outline-none text-sm"
              style={{ color: 'var(--txt-p-color3)' }}
              placeholder=" "
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm transition-all">
              Company Name
            </label>
          </div>

          <div className="relative">
            <select
              name="license"
              required
              onChange={handleChange}
              className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 p-3 outline-none text-sm appearance-none"
              style={{ color: 'var(--txt-p-color1)' }}
            >
              <option style={{ color: 'var(--txt-p-color4)' }} value="" disabled selected hidden>Select License Type</option>
              <option style={{ color: 'var(--txt-p-color4)' }} value="Office 365">Office 365</option>
              <option style={{ color: 'var(--txt-p-color4)' }} value="Adobe Suite">Adobe Suite</option>
              <option style={{ color: 'var(--txt-p-color4)' }} value="Other">Other</option>
            </select>
            
          </div>
        </div>

        <div className="relative mb-6">
          <textarea
            name="message"
            rows={5}
            required
            onChange={handleChange}
            className="peer w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 p-3 outline-none text-sm resize-none"
            style={{ color: 'var(--txt-p-color1)' }}
            placeholder=" "
          />
          <label className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm transition-all">
            Your Message
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}
