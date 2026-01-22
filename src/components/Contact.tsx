import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, FileDown, MapPin } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind 
            or just want to connect, feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:vigneshsaravanan@example.com"
              className="contact-card group"
            >
              <Mail className="text-gray-400 group-hover:text-gray-900 transition-colors" size={24} />
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-medium text-gray-900">vigneshsaravanan@example.com</p>
              </div>
            </a>

            <a
              href="tel:+919876543210"
              className="contact-card group"
            >
              <Phone className="text-gray-400 group-hover:text-gray-900 transition-colors" size={24} />
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="font-medium text-gray-900">+91 98765 43210</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vigneshsaravanan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <Linkedin className="text-gray-400 group-hover:text-gray-900 transition-colors" size={24} />
              <div>
                <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
                <p className="font-medium text-gray-900">linkedin.com/in/vigneshsaravanan</p>
              </div>
            </a>

            <div className="contact-card">
              <MapPin className="text-gray-400" size={24} />
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-medium text-gray-900">Chennai, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-primary"
            >
              <FileDown size={18} />
              Download Resume
            </button>
            <a
              href="https://linkedin.com/in/vigneshsaravanan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Vignesh Saravanan. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & built with care in Chennai
          </p>
        </div>
      </footer>
    </section>
  );
}
