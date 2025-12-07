import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { id: 1, image: '/testimonials/IMG_20251206_221113.jpg' },
  { id: 2, image: '/testimonials/IMG_20251206_221132.jpg' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Quote className="text-neutral-600 dark:text-neutral-400" size={32} />
          <h2 className="text-4xl font-bold metallic-text">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
            >
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
