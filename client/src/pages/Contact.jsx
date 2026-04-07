import React from "react";
import { motion as Motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Create mailto link
      const mailtoLink = `mailto:thakuramitsingh165@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-sm text-indigo-300 mb-5">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Build Something Great</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Share your idea, project, or job opportunity. I will reply with the best possible solution and timeline.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="space-y-8 lg:col-span-2">
            <Motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">Contact Information</h3>
              <p className="text-slate-300 mb-6">Available for freelance work, full-time roles, and collaboration projects.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-400/15 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-slate-300">thakuramitsingh165@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-400/15 rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-slate-300">+91-9015385652</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-400/15 rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-slate-300">Chandigarh</p>
                  </div>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-indigo-300 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition text-sm font-bold">GH</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition text-sm font-bold">in</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-sky-500 transition text-sm font-bold">X</a>
              </div>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-indigo-300 mb-2">Send a Message</h3>
            <p className="text-slate-300 mb-6">Fill in your details and I will get back to you soon.</p>
            {submitted && (
              <div className="mb-4 p-4 bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 rounded-lg">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2.5 border border-white/20 bg-slate-900/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourmail@example.com"
                    required
                    className="w-full px-4 py-2.5 border border-white/20 bg-slate-900/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion / hiring opportunity"
                  className="w-full px-4 py-2.5 border border-white/20 bg-slate-900/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Please share your requirement in detail..."
                  required
                  className="w-full px-4 py-2.5 border border-white/20 bg-slate-900/70 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              <Motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Send Message Now
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
