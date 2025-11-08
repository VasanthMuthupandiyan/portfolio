import React from 'react';
import { ArrowRight, Activity, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { icon: Activity, label: 'Licensed Therapists', value: '12+' },
    { icon: Clock, label: 'Years of Experience', value: '15+' },
    { icon: Award, label: 'Patients Treated', value: '5K+' }
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Restore Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600"> Movement </span>
                & Strength
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
              >
                Expert physiotherapy services helping you recover from injuries, manage pain, and achieve optimal physical performance through personalized treatment plans.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 hover:border-sky-600 text-gray-700 hover:text-sky-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Our Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern physiotherapy clinic"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certified Therapists</div>
                  <div className="text-sm text-gray-600">Licensed & Experienced</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;