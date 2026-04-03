import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '../../utils/utils';
import logo from '../../assets/Logo.png';

const SHEETY_URL =
  'https://api.sheety.co/f87695357a26c709f44cd4ecdaa2e07a/pvcWebsiteQueriEs/sheet1';

const InputField = ({ id, label, type = 'text', value, onChange, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-8 pt-6">
      <input
        id={id}
        type={type}
        value={value}
        className={cn(
          'w-full bg-transparent border-0 border-b-2 border-industrial-200 px-0 py-3 text-industrial-900 focus:ring-0 focus:outline-none focus:border-[#22c55e] transition-colors rounded-none peer'
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          'absolute left-0 top-3 text-industrial-500 transition-all duration-300 pointer-events-none origin-[0]',
          isFocused || value
            ? 'transform -translate-y-7 scale-75 text-[#22c55e]'
            : 'transform translate-y-3 scale-100'
        )}
      >
        {label}
      </label>
      <div
        className={cn(
          'absolute bottom-0 left-0 h-[2px] bg-[#22c55e] transition-all duration-500 ease-out',
          isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'
        )}
      />
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    inqueryType: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(SHEETY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sheet1: {
            firstName: form.firstName,
            lastName: form.lastName,
            emailAddress: form.emailAddress,
            phoneNumber: form.phoneNumber,
            companyName: form.companyName,
            inqueryType: form.inqueryType,
            message: form.message,
          },
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setForm({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        companyName: '',
        inqueryType: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-50 to-transparent pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-industrial-900 mb-4"
          >
            Partner with <span className="text-[#22c55e]">Urja Power</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-industrial-600 font-light"
          >
            Looking for a reliable B2B supplier for your next infrastructure project? Get in touch with our engineering and sales team today.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 glass rounded-3xl overflow-hidden border border-industrial-100 shadow-xl p-2">

          {/* Contact Information (Left Side / Top on Mobile) */}
          <div className="lg:col-span-2 rounded-2xl p-10 relative overflow-hidden group border border-[#22c55e]/20" style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 60%, #1a3a0a 100%)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            {/* Logo in Contact Section */}
            <div className="flex justify-center mb-8">
              <img
                src={logo}
                alt="URJA POWER"
                className="h-20 w-auto object-contain"
                style={{ filter: 'brightness(1.1) saturate(1.2)' }}
              />
            </div>

            <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#4ade80]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Headquarters</h4>
                  <p className="text-green-200 text-sm leading-relaxed">
                    Plot No. 42, Industrial Area Phase II<br />
                    New Delhi, India 110020
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#4ade80]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone Inquiry</h4>
                  <p className="text-green-200 text-sm">+91 1800 123 4567<br />+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#4ade80]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-green-200 text-sm">Support@urjapower.in<br />Shivurjapowerprivatelimited@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#eab308]/10 rounded-full blur-[50px] pointer-events-none" />
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-3 p-10 lg:p-12 relative">
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-x-8">
                <InputField
                  id="firstName"
                  label="First Name *"
                  required
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                />
                <InputField
                  id="lastName"
                  label="Last Name"
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-x-8">
                <InputField
                  id="emailAddress"
                  label="Email Address *"
                  type="email"
                  required
                  value={form.emailAddress}
                  onChange={handleChange('emailAddress')}
                />
                <InputField
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-x-8">
                <InputField
                  id="companyName"
                  label="Company Name *"
                  required
                  value={form.companyName}
                  onChange={handleChange('companyName')}
                />
                <div className="relative mb-8 pt-6">
                  <select
                    id="inqueryType"
                    value={form.inqueryType}
                    onChange={handleChange('inqueryType')}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-industrial-200 px-0 py-3 text-industrial-900 focus:ring-0 focus:outline-none focus:border-electric-blue transition-colors rounded-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-industrial-500 bg-white">Inquiry Type *</option>
                    <option value="B2B Bulk Order" className="bg-white text-industrial-900 py-2">B2B Bulk Order</option>
                    <option value="Distributorship" className="bg-white text-industrial-900">Distributorship</option>
                    <option value="General Inquiry" className="bg-white text-industrial-900">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="relative mb-12 pt-6">
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange('message')}
                  className="w-full bg-transparent border-0 border-b-2 border-industrial-200 px-0 py-3 text-industrial-900 focus:ring-0 focus:outline-none focus:border-electric-blue transition-colors rounded-none peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-industrial-500 transition-all duration-300 pointer-events-none origin-[0] peer-focus:transform peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-electric-blue peer-[:not(:placeholder-shown)]:transform peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Project Details / Message
                </label>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 mb-4 text-sm font-medium">
                  <CheckCircle className="w-5 h-5" />
                  Inquiry submitted successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 mb-4 text-sm font-medium">
                  <XCircle className="w-5 h-5" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative px-8 py-4 bg-[#22c55e] text-white border border-[#16a34a] font-bold rounded-lg overflow-hidden transition-all hover:bg-[#16a34a] hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] w-full sm:w-auto self-start shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center gap-2 transition-colors">
                  {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
                  <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
