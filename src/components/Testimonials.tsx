import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marathon Runner',
      content: 'After my knee injury, I thought my running days were over. The team at PhysioCore got me back on track with a personalized recovery program. I\'m now running pain-free!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Robert Kim',
      role: 'Office Worker',
      content: 'Years of desk work left me with chronic back pain. The ergonomic assessment and exercise program completely transformed my daily comfort and productivity.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Linda Thompson',
      role: 'Senior Citizen',
      content: 'The balance training program has given me confidence to stay active. The therapists are patient, caring, and truly understand the challenges of aging.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Soccer Player',
      content: 'The sports injury rehabilitation here is top-notch. They not only helped me recover from my ACL surgery but made me stronger than before.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Susan Davis',
      role: 'Teacher',
      content: 'The manual therapy sessions have been incredible for my shoulder pain. Dr. Anderson\'s expertise and gentle approach made all the difference.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mark Wilson',
      role: 'Construction Worker',
      content: 'After my work injury, I was worried about returning to my job. The functional movement training prepared me perfectly for getting back to work safely.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories from patients who have overcome injuries and achieved their movement goals with our expert care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-sky-200 group-hover:text-sky-300 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

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