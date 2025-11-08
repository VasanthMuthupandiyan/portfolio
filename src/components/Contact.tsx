import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Build custom HTML for the email
    const custom_html = `
      <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(90deg, #0284c7 0%, #10b981 100%); border-radius: 16px; font-family: 'Inter', Arial, sans-serif; color: #fff; max-width: 480px; margin: 0 auto; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="padding: 32px;">
            <h2 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #fff;">New Assessment Request</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="background: #fff; border-radius: 12px; color: #222; margin-bottom: 16px;">
              <tr>
                <td style="padding: 12px 16px;">
                  <strong>Full Name:</strong> ${formData.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px;">
                  <strong>Email Address:</strong> ${formData.email}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px;">
                  <strong>Phone Number:</strong> ${formData.phone}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px;">
                  <strong>Service Needed:</strong> ${formData.subject}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px;">
                  <strong>Condition/Message:</strong><br>
                  ${formData.message}
                </td>
              </tr>
            </table>
            <p style="margin: 0; font-size: 16px; color: #fff;">
              Please respond to this patient as soon as possible.<br>
              <span style="font-size: 13px; color: #e0f2fe;">PhysioCore Movement & Recovery</span>
            </p>
          </td>
        </tr>
      </table>
    `;

    emailjs.send(
      "service_xmpswd9",
      "template_ilx0qh9",
      { custom_html }, // Only custom_html needed
      "LRTnxIcJlNzukCVT1"
    ).then(
      () => {
        setToastMessage("Message sent successfully!");
        setShowToast(true);
        form.current?.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setShowToast(false), 2500);
      },
      () => {
        setToastMessage("Failed to send message.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
    );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['456 Wellness Avenue', 'Health District, HD 67890', 'United States']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main: (555) 987-6543', 'Emergency: (555) 987-6544', 'Fax: (555) 987-6545']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@physiocore.com', 'appointments@physiocore.com', 'support@physiocore.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Saturday: 8:00 AM - 5:00 PM', 'Sunday: 9:00 AM - 3:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      {/* Animated Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-8 right-8 z-50 bg-gradient-to-r from-sky-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl font-semibold text-base"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your recovery journey? Contact us to schedule an assessment or learn more about our physiotherapy services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Assessment</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                      placeholder="(555) 987-6543"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="assessment">Initial Assessment</option>
                      <option value="sports">Sports Injury</option>
                      <option value="chronic">Chronic Pain</option>
                      <option value="post-surgery">Post-Surgery Rehab</option>
                      <option value="wellness">Wellness Program</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your condition
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-300 resize-none"
                    placeholder="Please describe your symptoms, injury, or goals..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-sky-100 to-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Clinic</h4>
                <p className="text-gray-600">456 Wellness Avenue, Health District, HD 67890</p>
                <button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;