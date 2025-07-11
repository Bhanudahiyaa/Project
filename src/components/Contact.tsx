import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  User,
  MapPin,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhanudahiya8@gmail.com",
      href: "mailto:bhanudahiya8@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bhanupratap1",
      href: "https://linkedin.com/in/bhanupratap1",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "bhanudahiyaa",
      href: "https://github.com/bhanudahiyaa",
    },
  ];

  return (
    <section id="contact" className="pt-1 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
          >
            <span className="text-metallic animate-slide-up">
              Let's Connect
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto rounded-full"
          ></motion.div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let’s discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 animate-slide-up">
                Get in Touch
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I’m always excited to work on new projects and collaborate with
                passionate individuals. Whether you have a specific idea or just
                want to chat about tech, feel free to reach out!
              </p>
            </div>

            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
                >
                  <div className="p-3 bg-gray-700/20 rounded-lg group-hover:bg-gray-600/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {contact.label}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Delhi, India</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50"
          >
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="w-6 h-6 text-gray-400" />
              <h3 className="text-2xl font-bold text-white animate-slide-up">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/30"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/30"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/30 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 flex items-center justify-center space-x-2 text-green-400 text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
