import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_CONFIG, getCallUrl } from '../config/clinic';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
    { name: 'Home', id: 'home' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = CLINIC_CONFIG.services.basic;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                PR
              </div>
              <div>
                <h3 className="text-xl font-bold">{CLINIC_CONFIG.clinic.name}</h3>
                <p className="text-sm text-gray-400">{CLINIC_CONFIG.doctor.name}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {CLINIC_CONFIG.clinic.description}. Expert care by {CLINIC_CONFIG.doctor.name} ({CLINIC_CONFIG.doctor.qualification}) with FREE consultation for new patients and home visits available.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-1" />
                <div>
                  <p className="text-gray-300 font-semibold">{CLINIC_CONFIG.location.mainLocation}</p>
                  <p className="text-gray-400 text-sm">Service Areas: {CLINIC_CONFIG.location.serviceAreas.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <div>
                  <a 
                    href={getCallUrl(CLINIC_CONFIG.contact.phones.primary)}
                    className="text-gray-300 font-semibold hover:text-sky-400 transition-colors"
                  >
                    {CLINIC_CONFIG.contact.phones.primary}
                  </a>
                  <p className="text-gray-400 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <a 
                  href={`mailto:${CLINIC_CONFIG.contact.email}`}
                  className="text-gray-300 hover:text-sky-400 transition-colors"
                >
                  {CLINIC_CONFIG.contact.email}
                </a>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-lg">
              <h5 className="font-bold text-white mb-2">🆓 FREE CONSULTATION!</h5>
              <p className="text-sm text-emerald-100 mb-3">
                🏠 Home visits available | ⏰ Hours: {CLINIC_CONFIG.contact.operatingHours}
              </p>
              <a
                href={getCallUrl(CLINIC_CONFIG.contact.phones.primary)}
                className="inline-block bg-white text-emerald-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                📞 Call Now: {CLINIC_CONFIG.contact.phones.primary}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 {CLINIC_CONFIG.clinic.name}. All rights reserved. Licensed Physiotherapy Services by {CLINIC_CONFIG.doctor.name}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300"
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300"
              >
                About Doctor
              </button>
              <a 
                href={`https://wa.me/${CLINIC_CONFIG.contact.phones.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;