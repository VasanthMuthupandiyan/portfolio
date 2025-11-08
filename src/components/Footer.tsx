import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    'About Us',
    'Our Services',
    'Treatment Areas',
    'Health Tips',
    'Insurance',
    'Careers'
  ];

  const services = [
    'Manual Therapy',
    'Sports Rehabilitation',
    'Chronic Pain Management',
    'Post-Surgery Recovery',
    'Exercise Programs',
    'Wellness Assessments'
  ];

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
                PC
              </div>
              <div>
                <h3 className="text-xl font-bold">PhysioCore</h3>
                <p className="text-sm text-gray-400">Movement & Recovery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing expert physiotherapy and rehabilitation services to help you move better, feel stronger, and live pain-free for over 15 years.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
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
                  <a
                    href="#"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
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
                  <a
                    href="#"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
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
                  <p className="text-gray-300">456 Wellness Avenue</p>
                  <p className="text-gray-300">Health District, HD 67890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <p className="text-gray-300">(555) 987-6543</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <p className="text-gray-300">info@physiocore.com</p>
              </div>
            </div>

            {/* Emergency notice */}
            <div className="mt-6 p-4 bg-orange-600 rounded-lg">
              <h5 className="font-semibold text-white mb-2">Urgent Care?</h5>
              <p className="text-sm text-orange-100">
                For medical emergencies, call 911. For urgent physiotherapy needs, call our emergency line: (555) 987-6544
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PhysioCore. All rights reserved. Licensed Physiotherapy Clinic #PT789012
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors duration-300">
                Patient Rights
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;