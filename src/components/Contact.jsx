import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  const triggerToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const API_BASE = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        triggerToast('success', data.message || 'Thank you! Your message was sent.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        triggerToast('error', data.message || 'Submission failed. Please check inputs.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      triggerToast('error', 'Network error. Please make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background flex items-center justify-center relative px-6">
      {/* Background glow ambient blob */}
      <div className="glow-blob w-[400px] h-[400px] bg-accent-cyan bottom-10 right-10 opacity-10" />

      {/* Main glass box wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl glass rounded-3xl p-8 md:p-12 shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <span className="text-accent-cyan text-sm font-semibold uppercase tracking-widest">Connect</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2">
            Initiate Connection
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4" />
          <p className="text-slate-300 mt-4 text-sm md:text-base font-light">
            Fill out the request packet below. I usually respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Grid row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:bg-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200"
                placeholder="Name"
              />
              {errors.name && <span className="text-red-400 text-xs mt-1.5 font-light">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:bg-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-400 text-xs mt-1.5 font-light">{errors.email}</span>}
            </div>
          </div>

          {/* Subject field */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:bg-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200"
              placeholder="Enter Subject"
            />
            {errors.subject && <span className="text-red-400 text-xs mt-1.5 font-light">{errors.subject}</span>}
          </div>

          {/* Message field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Message Payload
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:bg-white/10 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-all duration-200 resize-none"
              placeholder="Message"
            />
            {errors.message && <span className="text-red-400 text-xs mt-1.5 font-light">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 mt-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl font-bold text-white transition duration-300 shadow-neon-cyan/20 hover:shadow-neon-cyan flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <span>Transmit Message</span>
                <FiSend className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>

        {/* Animated Toast Status Box */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl border backdrop-blur-md ${
                toast.type === 'success'
                  ? 'bg-emerald-950/95 border-emerald-800/60 text-emerald-300'
                  : 'bg-rose-950/95 border-rose-800/60 text-rose-300'
              } shadow-lg shadow-black/40`}
            >
              {toast.type === 'success' ? (
                <FiCheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;
