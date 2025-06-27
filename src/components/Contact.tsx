import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Harisaikumar06@gmail.com',
      href: 'mailto:Harisaikumar06@gmail.com',
      color: 'text-neon-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'harisaithatholu',
      href: 'https://www.linkedin.com/in/harisaithatholu/',
      color: 'text-neon-cyan'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Hari-r31',
      href: 'https://github.com/Hari-r31',
      color: 'text-foreground'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      'service_y0i9w1b',       
      'template_ez57fdf',     
      templateParams,
      '4zafHynJ69vHj0hYQ'    
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }).catch((error) => {
      toast({
        title: "Message Failed!",
        description: `Something went wrong. ${error.text}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };


  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="tech-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neon-blue mb-6">Let's Connect</h3>
                <p className="text-foreground/80 mb-8">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. 
                  Whether you need full-stack development, IoT solutions, or project mentorship, I'm here to help.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] group"
                    >
                      <div className={`p-3 rounded-lg bg-card/50 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">{info.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="tech-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Current Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                    <span className="text-foreground/80">Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                    <span className="text-foreground/80">Open to freelance & consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="tech-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-card/50 border-white/10 focus:border-neon-blue/50 focus:ring-neon-blue/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-card/50 border-white/10 focus:border-neon-blue/50 focus:ring-neon-blue/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-card/50 border-white/10 focus:border-neon-blue/50 focus:ring-neon-blue/20"
                    placeholder="Project Discussion / Consultation / Other"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-card/50 border-white/10 focus:border-neon-blue/50 focus:ring-neon-blue/20 resize-none"
                    placeholder="Tell me about your project, requirements, timeline, and any specific details you'd like to discuss..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
