import React from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified physiotherapists have decades of combined experience in rehabilitation and sports medicine.'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'All treatments are based on the latest research and proven therapeutic techniques for optimal recovery.'
    },
    {
      icon: Heart,
      title: 'Patient-Centered',
      description: 'We create personalized treatment plans tailored to each patient\'s specific condition and recovery goals.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Extended hours and emergency appointments available to accommodate your busy schedule and urgent needs.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About PhysioCore
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2009, PhysioCore has been helping patients regain mobility, strength, and confidence through expert physiotherapy care and innovative rehabilitation techniques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Physiotherapist working with patient"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Dedicated to Your Recovery & Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide exceptional physiotherapy services that restore function, reduce pain, and improve quality of life. We combine clinical expertise with compassionate care to help you achieve your health and fitness goals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With state-of-the-art equipment, evidence-based treatment methods, and a team of specialized physiotherapists, we ensure that every patient receives the highest standard of care tailored to their unique needs.
            </p>
            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 p-6 rounded-lg border-l-4 border-sky-500">
              <p className="text-gray-700 font-medium">
                "At PhysioCore, we believe that movement is medicine. Our goal is to empower every patient to live an active, pain-free life through expert rehabilitation and preventive care."
              </p>
              <p className="text-sm text-gray-600 mt-2">- Dr. James Anderson, Lead Physiotherapist</p>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;