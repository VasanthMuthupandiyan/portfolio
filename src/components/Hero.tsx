import { ArrowRight, Activity, Clock, Award, Phone, MessageCircle, Star, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_CONFIG, getCallUrl, getWhatsAppUrl } from '../config/clinic';

const Hero = () => {
  const stats = [
    { icon: Home, label: 'Home Visits', value: 'Available', highlight: true },
    { icon: Clock, label: 'Free Consultation', value: 'New Patients', highlight: true },
    { icon: Users, label: 'Service Areas', value: '6+ Locations', highlight: false }
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Special Offers Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
            <Star className="w-5 h-5 mr-2 animate-pulse" />
            FREE CONSULTATION for New Patients | Home Visits Available
            <Star className="w-5 h-5 ml-2 animate-pulse" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {/* Doctor Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-sky-500"
              >
                <h3 className="text-2xl font-bold text-sky-700">{CLINIC_CONFIG.doctor.name}</h3>
                <p className="text-lg text-gray-600">{CLINIC_CONFIG.doctor.qualification}</p>
                <p className="text-sm text-emerald-600 font-semibold">{CLINIC_CONFIG.doctor.title}</p>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                  {CLINIC_CONFIG.clinic.tagline}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 max-w-lg leading-relaxed"
              >
                {CLINIC_CONFIG.clinic.description}. Specialized in neurological rehabilitation, pediatric therapy, and advanced pain management with IFT & Ultrasound therapy.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
                            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center group"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={getCallUrl(CLINIC_CONFIG.contact.phones.primary)}
                  className="flex-1 border-2 border-sky-600 text-sky-600 px-6 py-4 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: {CLINIC_CONFIG.contact.phones.primary}
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={getWhatsAppUrl(CLINIC_CONFIG.contact.whatsapp.primary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className={`text-center p-4 rounded-xl ${stat.highlight ? 'bg-gradient-to-br from-emerald-100 to-sky-100 border-2 border-emerald-300' : 'bg-white/80'} transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 ${stat.highlight ? 'bg-gradient-to-br from-emerald-500 to-sky-500' : 'bg-gradient-to-br from-sky-500 to-emerald-500'} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className={`text-lg font-bold ${stat.highlight ? 'text-emerald-700' : 'text-gray-900'}`}>{stat.value}</p>
                  <p className={`text-sm ${stat.highlight ? 'text-emerald-600 font-semibold' : 'text-gray-600'}`}>{stat.label}</p>
                </motion.div>
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