import { Brain, Baby, Bone, Activity, Zap, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_CONFIG } from '../config/clinic';

const Services = () => {
  const services = CLINIC_CONFIG.services.specialized;

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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive physiotherapy services by {CLINIC_CONFIG.doctor.name} ({CLINIC_CONFIG.doctor.qualification}) specializing in neurological rehabilitation, pediatric therapy, and advanced pain management techniques.
          </p>
        </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                scale: 1.02
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300"
            >
              {/* Service Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    {service.icon === 'brain' && <Brain className="w-6 h-6 text-sky-600" />}
                    {service.icon === 'baby' && <Baby className="w-6 h-6 text-emerald-600" />}
                    {service.icon === 'bone' && <Bone className="w-6 h-6 text-orange-600" />}
                    {service.icon === 'activity' && <Activity className="w-6 h-6 text-red-600" />}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon === 'brain' && <Brain className="w-6 h-6 text-white" />}
                    {service.icon === 'baby' && <Baby className="w-6 h-6 text-white" />}
                    {service.icon === 'bone' && <Bone className="w-6 h-6 text-white" />}
                    {service.icon === 'activity' && <Activity className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {CLINIC_CONFIG.services.basic.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-sky-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Book Consultation
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Therapies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Advanced Therapies Available</h3>
            <p className="text-xl text-gray-600">Cutting-edge treatment techniques for faster recovery</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {CLINIC_CONFIG.services.advanced.map((therapy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={therapy.image} 
                    alt={therapy.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{therapy.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-lg">{therapy.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-sky-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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