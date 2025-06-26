import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Hari-r31', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harisaithatholu/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Harisaikumar06@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919491147433', label: 'Phone' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-mono text-2xl font-bold text-gradient mb-4">
              {'<HST />'}
            </div>
            <p className="text-foreground/80 mb-6 max-w-sm">
              Associate Software Developer passionate about building innovative solutions 
              that bridge software and hardware technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-card/30 border border-white/10 rounded-lg hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] group"
                  aria-label={link.label}
                >
                  <link.icon size={20} className="text-foreground/80 group-hover:text-neon-blue transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neon-blue mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground/80 hover:text-neon-cyan transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-neon-cyan mb-4">Services</h3>
            <ul className="space-y-3 text-foreground/80">
              <li>Full-Stack Development</li>
              <li>Embedded Systems</li>
              <li>IoT Solutions</li>
              <li>Project Mentorship</li>
              <li>Technical Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-neon-green mb-4">Get In Touch</h3>
            <div className="space-y-3 text-foreground/80">
              <div>
                <p className="text-sm text-foreground/60">Email</p>
                <a 
                  href="mailto:Harisaikumar06@gmail.com"
                  className="hover:text-neon-blue transition-colors duration-300"
                >
                  Harisaikumar06@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Phone</p>
                <a 
                  href="tel:+919491147433"
                  className="hover:text-neon-green transition-colors duration-300"
                >
                  +91 94911 47433
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Location</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              © {currentYear} Hari Sai Kumar Thatholu. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={scrollToTop}
                className="text-foreground/60 hover:text-neon-blue transition-colors duration-300"
              >
                Back to Top ↑
              </button>
              <span className="text-foreground/40">|</span>
              <span className="text-foreground/60">
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
