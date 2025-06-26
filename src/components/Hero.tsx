import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Hari-r31', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harisaithatholu/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Harisaikumar06@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919491147433', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Hari Sai Kumar</span>
                <br />
                <span className="text-foreground">Thatholu</span>
              </h1>
              <p className="text-xl md:text-2xl text-neon-blue font-mono">
                Associate Software Developer | Embedded Systems Innovator | Python & FastAPI Specialist | IoT & Cloud Enthusiast
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl">
              Passionate backend developer at Conflowence, specializing in Python, FastAPI, and cloud deployment. 
              Currently pursuing Masters of Technology while building innovative IoT solutions 
              that bridge the gap between software and hardware.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] group"
                  aria-label={link.label}
                >
                  <link.icon size={24} className="text-foreground/80 group-hover:text-neon-blue transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-full blur-xl absolute -inset-4 animate-glow"></div>
              <div className="relative w-72 h-72 bg-gradient-to-br from-card to-card/50 rounded-full border-2 border-neon-blue/30 overflow-hidden">
                <img
                  src="https://i.postimg.cc/tJz9bYs9/pic.jpg"
                  alt="Hari Sai Kumar Thatholu"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tech Icons Floating Around */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center animate-bounce">
                <span className="text-neon-blue font-mono text-sm font-bold">{'</>'}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center animate-bounce delay-500">
                <span className="text-neon-green font-mono text-sm font-bold">IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
