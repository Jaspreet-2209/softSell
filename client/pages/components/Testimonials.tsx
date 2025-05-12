import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aarav Mehta',
      role: 'Product Manager',
      company: 'NovaWorks',
      text: `The flexibility and scalability SoftSell provides is unmatched. We scaled faster without worrying about backend complexities.`,
    },
    {
      name: 'Emily Nguyen',
      role: 'CTO',
      company: 'PixelForge',
      text: `Impressive performance and seamless integration. Their team really understands what growing tech companies need.`,
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-24 mb-[0px]"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 tracking-tight"
        style={{ color: 'var(--text-color)' }}
      >
        Hear from Our Clients
      </motion.h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-3xl"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md bg-white/10"
            >
              <p
                className="text-lg md:text-xl italic mb-6 leading-relaxed"
                style={{ color: 'var(--txt-p-color1)' }}
              >
                “{review.text}”
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-[var(--border-color)] flex items-center justify-center text-xl font-bold"
                  style={{ color: 'var(--text-color)' }}
                >
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p
                    className="text-base font-semibold"
                    style={{ color: 'var(--txt-p-color1)' }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--txt-p-color2)' }}
                  >
                    {review.role} @ {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
