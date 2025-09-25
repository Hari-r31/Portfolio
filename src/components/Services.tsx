import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern technologies like React, FastAPI, Django, and PostgreSQL.',
      features: [
        'Responsive frontend design with React.js',
        'Robust backend APIs with FastAPI/Django',
        'Database design and optimization',
        'Cloud deployment and DevOps',
        'Payment gateway integration',
        'Real-time features and notifications'
      ],
      technologies: ['React', 'FastAPI', 'Django', 'PostgreSQL', 'Docker', 'Azure'],
      pricing: 'Starting from ₹20,000'
    },
    {
      icon: '🔧',
      title: 'Embedded System Prototyping',
      description: 'Custom IoT solutions and embedded system development for automation, monitoring, and smart device applications.',
      features: [
        'IoT sensor integration and monitoring',
        'Microcontroller programming (ESP32, Arduino)',
        'Wireless communication protocols',
        'Mobile app integration with Blynk',
        'Automated alert systems via SMS/Email',
        'Real-time data visualization dashboards'
      ],
      technologies: ['ESP32', 'Arduino', 'C++', 'IoT Sensors', 'Blynk', 'Twilio'],
      pricing: 'Starting from ₹15,000'
    },
    {
      icon: '👨‍🏫',
      title: 'Academic Project Mentorship',
      description: 'Comprehensive guidance for final-year engineering projects, from concept to implementation and documentation.',
      features: [
        'Project ideation and feasibility analysis',
        'Technical architecture design',
        'Code development and debugging support',
        'Documentation and presentation preparation',
        'Hardware selection and procurement guidance',
        'Peer review and optimization suggestions'
      ],
      technologies: ['Various based on project requirements'],
      pricing: 'Starting from ₹8,000'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Services Offered</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Professional development services combining full-stack expertise with embedded systems innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="tech-card h-full flex flex-col group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-neon-blue transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80">{service.description}</p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <h4 className="text-lg font-semibold text-neon-cyan mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-green mb-3">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-neon-cyan">{service.pricing}</p>
                    <p className="text-xs text-foreground/60">*Pricing varies based on project complexity</p>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="tech-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Why Choose My Services?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Professional experience as Associate Software Developer</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Deep expertise in both software and hardware integration</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Academic background in VLSI & Embedded Systems</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Proven track record of successful project deliveries</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">End-to-end support from design to deployment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">Competitive pricing with quality assurance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
