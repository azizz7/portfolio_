import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init('G_BMfj-HqLi1UW-Fp');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear previous error for this field
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Validate email format while typing
    if (name === 'email' && value.trim() !== '') {
      if (!isValidEmail(value)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email'
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous status
    setStatus('');

    // Validate form
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Debug: Log the environment variables
      console.log('EmailJS Config:', {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      });

      // Using new EmailJS credentials
      const serviceId = 'service_hxylnph';
      const templateId = 'template_st78d0p';
      const publicKey = 'G_BMfj-HqLi1UW-Fp';

      console.log('Using new EmailJS credentials:', { serviceId, templateId, publicKey });

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'azizbarwani5253@gmail.com'
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again or contact me directly at azizbarwani5253@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
    }
  };

  const contactDetails = [
    {
      icon: FaPhone,
      text: '+91 7974205692',
      href: 'tel:+917974205692',
      label: 'Phone'
    },
    {
      icon: FaGithub,
      text: 'GitHub',
      href: 'https://github.com/azizz7',
      label: 'GitHub Profile'
    },
    {
      icon: FaLinkedin,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aziz-barwaniwala-2904a824b/',
      label: 'LinkedIn Profile'
    },
    {
      icon: FaEnvelope,
      text: 'Email',
      href: 'mailto:azizbarwani5253@gmail.com',
      label: 'Email Address'
    }
  ];



  return (
    <section id="contact" className="min-h-screen bg-dark-bg py-20">
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 mb-12"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label className="text-orange-400 block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={`w-full bg-gray-700 text-white border ${errors.name ? 'border-red-400' : 'border-gray-600'
                  } rounded-md p-2 focus:outline-none focus:border-blue-500`}
                required
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-orange-400 block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={`w-full bg-gray-700 text-white border ${errors.email ? 'border-red-400' : 'border-gray-600'
                  } rounded-md p-2 focus:outline-none focus:border-blue-500`}
                required
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-orange-400 block mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full bg-gray-700 text-white border ${errors.message ? 'border-red-400' : 'border-gray-600'
                  } rounded-md p-2 focus:outline-none focus:border-blue-500`}
                required
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-500 hover:bg-blue-600'
                } text-white rounded-md px-4 py-2 transition-colors duration-300`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <AnimatePresence>
              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center mt-4 ${status.includes('Failed') ? 'text-red-400' : 'text-green-400'
                    }`}
                >
                  {status}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center items-center gap-6 flex-wrap"
        >
          {contactDetails.map((detail, index) => (
            <motion.a
              key={index}
              href={detail.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-neon-blue
                       transition-colors duration-300 group"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              aria-label={detail.label}
            >
              <detail.icon className="text-2xl" />
              <span className="hidden sm:inline">{detail.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 