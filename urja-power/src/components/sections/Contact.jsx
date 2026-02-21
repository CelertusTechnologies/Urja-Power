import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { cn } from '../../utils/utils';

const InputField = ({ id, label, type = "text", ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className="relative mb-8 pt-6">
            <input
                id={id}
                type={type}
                className={cn(
                    "w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-white focus:ring-0 focus:outline-none focus:border-electric-blue transition-colors rounded-none peer",
                )}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false);
                    setHasValue(e.target.value.length > 0);
                }}
                onChange={(e) => setHasValue(e.target.value.length > 0)}
                {...props}
            />
            <label
                htmlFor={id}
                className={cn(
                    "absolute left-0 top-3 text-gray-500 transition-all duration-300 pointer-events-none origin-[0]",
                    isFocused || hasValue ? "transform -translate-y-7 scale-75 text-electric-blue" : "transform translate-y-3 scale-100"
                )}
            >
                {label}
            </label>
            <div
                className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-electric-blue transition-all duration-500 ease-out",
                    isFocused ? "w-full opacity-100" : "w-0 opacity-0"
                )}
            />
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative bg-black overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-industrial-900 to-transparent pointer-events-none z-0" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-electric-blue/10 rounded-full blur-[150px] pointer-events-none z-0" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Partner with <span className="text-electric-blue">Power</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-light"
                    >
                        Looking for a reliable B2B supplier for your next infrastructure project? Get in touch with our engineering and sales team today.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-2">

                    {/* Contact Information (Left Side / Top on Mobile) */}
                    <div className="lg:col-span-2 bg-industrial-900 rounded-2xl p-10 relative overflow-hidden group">
                        {/* Hover Glint */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                        <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-electric-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Plot No. 42, Industrial Area Phase II<br />
                                        New Delhi, India 110020
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-electric-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Phone Inquiry</h4>
                                    <p className="text-gray-400 text-sm">+91 1800 123 4567<br />+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-electric-blue" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                                    <p className="text-gray-400 text-sm">sales@urjapower.com<br />support@urjapower.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Shape */}
                        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-electric-blue/20 rounded-full blur-[50px] pointer-events-none" />
                    </div>

                    {/* Contact Form (Right Side) */}
                    <div className="lg:col-span-3 p-10 lg:p-12 relative">
                        <form className="h-full flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-x-8">
                                <InputField id="firstName" label="First Name *" required />
                                <InputField id="lastName" label="Last Name" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-8">
                                <InputField id="email" label="Email Address *" type="email" required />
                                <InputField id="phone" label="Phone Number" type="tel" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-8">
                                <InputField id="company" label="Company Name *" required />
                                <div className="relative mb-8 pt-6">
                                    <select className="w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-white focus:ring-0 focus:outline-none focus:border-electric-blue transition-colors rounded-none appearance-none cursor-pointer group">
                                        <option value="" disabled selected className="text-gray-500 bg-industrial-900">Inquiry Type *</option>
                                        <option value="b2b" className="bg-industrial-900 text-white py-2">B2B Bulk Order</option>
                                        <option value="distributor" className="bg-industrial-900 text-white">Distributorship</option>
                                        <option value="general" className="bg-industrial-900 text-white">General Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative mb-12 pt-6">
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 text-white focus:ring-0 focus:outline-none focus:border-electric-blue transition-colors rounded-none peer resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 top-3 text-gray-500 transition-all duration-300 pointer-events-none origin-[0] peer-focus:transform peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-electric-blue peer-[:not(:placeholder-shown)]:transform peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-75"
                                >
                                    Project Details / Message
                                </label>
                            </div>

                            <button
                                type="button"
                                className="group relative px-8 py-4 bg-white text-industrial-900 font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(27,209,255,0.4)] w-full sm:w-auto self-start"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-indigo-400 to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                                    Send Inquiry
                                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
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
