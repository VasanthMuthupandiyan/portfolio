import React from 'react';
import { Activity, Zap, Target, Users, Heart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: 'Manual Therapy',
      description: 'Hands-on treatment techniques including joint mobilization, soft tissue massage, and myofascial release.',
      features: ['Joint mobilization', 'Soft tissue massage', 'Trigger point therapy']
    },
    {
      icon: Zap,
      title: 'Exercise Rehabilitation',
      description: 'Customized exercise programs designed to restore strength, flexibility, and functional movement patterns.',
      features: ['Strength training', 'Flexibility programs', 'Functional movement']
    },
    {
      icon: Target,
      title: 'Sports Injury Treatment',
      description: 'Specialized care for athletes and active individuals recovering from sports-related injuries.',
      features: ['Injury assessment', 'Return-to-sport programs', 'Performance optimization']
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Small group rehabilitation classes and wellness programs for ongoing support and motivation.',
      features: ['Pilates classes', 'Balance training', 'Pain management groups']
    },
    {
      icon: Heart,
      title: 'Chronic Pain Management',
      description: 'Comprehensive programs for managing chronic conditions and improving long-term quality of life.',
      features: ['Pain education', 'Movement therapy', 'Lifestyle modification']
    },
    {
      icon: Calendar,
      title: 'Preventive Care',
      description: 'Proactive assessments and programs to prevent injuries and maintain optimal physical health.',
      features: ['Movement screening', 'Ergonomic assessment', 'Injury prevention']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From injury rehabilitation to performance enhancement, we offer a complete range of physiotherapy services designed to help you move better and feel stronger.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our physiotherapists are here to help you achieve your movement and wellness goals.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Your Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;