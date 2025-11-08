import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_CONFIG } from '../config/clinic';

const Testimonials = () => {
  const testimonials = CLINIC_CONFIG.testimonials;

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients treated by {CLINIC_CONFIG.doctor.name} at {CLINIC_CONFIG.clinic.name}
          </p>
        </motion.div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                scale: 1.02
              }}
              className="bg-white rounded-2xl shadow-lg p-8 group transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-sky-500 mr-3 group-hover:text-emerald-500 transition-colors duration-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-emerald-600 font-semibold">
                      {testimonial.condition}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      📍 {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">95%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">5,000+</div>
              <div className="text-gray-600">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">450+</div>
              <div className="text-gray-600">Five-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;