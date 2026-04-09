import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import RevealText from './RevealText';

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

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = 'service_hxylnph';
      const templateId = 'template_st78d0p';
      const publicId = 'G_BMfj-HqLi1UW-Fp';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'azizbarwani5253@gmail.com'
        },
        publicId
      );

      if (result.status === 200) {
        setStatus('Thank you. I will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
        console.error("EmailJS Error:", result);
      }
    } catch (error) {
      setStatus('Network error. Please try again later.');
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { icon: FaPhone, text: '+91 7974205692', href: 'tel:+917974205692', color: 'bg-accent-cyan' },
    { icon: FaEnvelope, text: 'azizbarwani5253@gmail.com', href: 'mailto:azizbarwani5253@gmail.com', color: 'bg-accent-yellow' },
    { icon: FaGithub, text: 'GitHub', href: 'https://github.com/azizz7', color: 'bg-accent-orange' },
    { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/aziz-barwaniwala-2904a824b/', color: 'bg-accent-red' },
  ];

  return (
    <section id="contact" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-accent-gold font-fira font-bold tracking-widest text-sm uppercase mb-4">
                <RevealText text="Contact" />
              </h2>
              <h3 className="text-7xl md:text-9xl font-oswald font-bold text-soft-white leading-[0.85] uppercase tracking-tighter">
                Let's <span className="text-transparent text-outline-white" style={{ WebkitTextStroke: '2px #ededed' }}>Work</span> <br />
                <span className="text-accent-yellow">Together.</span>
              </h3>
            </div>

            <p className="text-muted-grey font-inter text-lg leading-relaxed max-w-md border-l-4 border-accent-yellow pl-6">
              Available for freelance projects and full-time opportunities. Let's discuss how we can create something meaningful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className={`absolute top-2 left-2 w-full h-full border-2 border-black ${detail.color} -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1`} />
                  <div className="bg-deep-slate border-2 border-black p-4 flex items-center gap-4 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-300">
                    <detail.icon className={`text-xl ${detail.color.replace('bg-', 'text-')}`} />
                    <span className="font-fira text-sm font-bold text-soft-white truncate">{detail.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Hard Shadow for Form */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-black bg-white/5 -z-10" />

            <div className="bg-deep-slate p-8 md:p-12 border-2 border-black">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label className="sr-only">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="NAME"
                      className="w-full bg-bg-primary border-2 border-white/10 p-4 text-soft-white font-fira placeholder-muted-grey/50 focus:outline-none focus:border-accent-yellow focus:shadow-[4px_4px_0px_0px_#ffeb3b] transition-all duration-300"
                    />
                    {errors.name && <span className="text-accent-red font-fira text-xs mt-2 block">{`// ${errors.name}`}</span>}
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL"
                      className="w-full bg-bg-primary border-2 border-white/10 p-4 text-soft-white font-fira placeholder-muted-grey/50 focus:outline-none focus:border-accent-cyan focus:shadow-[4px_4px_0px_0px_#00bcd4] transition-all duration-300"
                    />
                    {errors.email && <span className="text-accent-red font-fira text-xs mt-2 block">{`// ${errors.email}`}</span>}
                  </div>

                  <div>
                    <label className="sr-only">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="MESSAGE"
                      rows="5"
                      className="w-full bg-bg-primary border-2 border-white/10 p-4 text-soft-white font-fira placeholder-muted-grey/50 resize-none focus:outline-none focus:border-accent-orange focus:shadow-[4px_4px_0px_0px_#ff9800] transition-all duration-300"
                    />
                    {errors.message && <span className="text-accent-red font-fira text-xs mt-2 block">{`// ${errors.message}`}</span>}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-2 left-2 w-full h-full bg-white -z-10" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-yellow border-2 border-black text-black font-oswald font-bold text-xl tracking-widest uppercase hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`text-sm font-fira p-4 border-2 border-black ${status.includes('Thank') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
                    >
                      {`> ${status}`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact; 