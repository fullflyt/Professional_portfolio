import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer({ data }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{data.name}</h3>
              <p className="text-slate-400">{data.title}</p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering professionals to unlock their potential and achieve sustainable career success through strategic coaching and personalized development.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${data.email}`}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`tel:${data.phone}`}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Phone size={18} />
              </a>
              <a 
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-300">{data.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-slate-300">{data.phone}</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-slate-400">
                Ready to transform your career? Book a free consultation today.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 {data.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}