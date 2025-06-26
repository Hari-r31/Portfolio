import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      period: '2024 - 2026',
      title: 'M.Tech in VLSI & Embedded Systems',
      institution: 'Visakha Institute of Engineering & Technology, Vizag',
      description: 'Specializing in advanced VLSI design and embedded system development',
      status: 'Current'
    },
        {
      period: '2023',
      title: 'Python Full-Stack Development Certification',
      institution: 'PySpiders Training Institute, Hyderbad',
      description: 'Comprehensive training in modern web development technologies and frameworks',
      status: 'Certified'
    },
    {
      period: '2021 - 2024',
      title: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Visakha Institute of Engineering & Technology, Vizag',
      description: 'Strong foundation in electronics, communication systems, and embedded programming',
      status: 'Completed'
    },
    {
      period: '2018 - 2021',
      title: 'Diploma in Electronics & Communication Engineering',
      institution: 'Sir C.V.Raman Polytechnic College, Ullamparru',
      description: 'Practical training in electronic circuits, microprocessors, and communication systems',
      status: 'Completed'
    },
    {
      period: '2017 - 2028',
      title: 'SSC',
      institution: 'Montessori E.M High School, Palakol',
      description: 'Focused on core subjects including Mathematics, Science, Social Studies, and English.',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="tech-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neon-blue mb-4">Professional Journey</h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    I'm a passionate Associate Software Developer at Conflowence, where I specialize in 
                    backend development using Python, FastAPI, and modern cloud deployment strategies. 
                    My work focuses on building robust, scalable solutions that power innovative applications.
                  </p>
                  <p>
                    Currently pursuing my M.Tech in VLSI & Embedded Systems, I'm bridging the gap between 
                    software development and hardware innovation. This dual expertise allows me to create 
                    comprehensive IoT solutions that seamlessly integrate embedded systems with powerful 
                    backend architectures.
                  </p>
                  <p>
                    My passion lies in solving real-world problems through technology. Whether it's developing 
                    AI-powered plant health monitoring systems or creating efficient e-commerce platforms, 
                    I thrive on turning complex challenges into elegant, functional solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neon-cyan mb-4">What Drives Me</h3>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Building scalable backend systems that can handle complex business logic</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Integrating AI and IoT technologies to create smart, responsive solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Mentoring students and helping them bring their final-year projects to life</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Exploring the intersection of embedded systems and modern web technologies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p>Designing real-world applications that merge cloud, AI, and hardware seamlessly</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Delivering clean, maintainable code that aligns with performance and security best practices</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Translating raw sensor data into actionable insights using machine learning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <p>Bridging the gap between low-level embedded systems and high-level application logic</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Creating tools and platforms that empower others to build faster and smarter</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p>Collaborating with cross-functional teams to ship production-grade solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Section */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-neon-cyan mb-8">Education & Certifications</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full ${
                        item.status === 'Current' ? 'bg-neon-green animate-pulse' : 'bg-neon-blue'
                      }`}></div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-neon-blue to-transparent mt-2 ml-1.5"></div>
                      )}
                    </div>
                    <Card className="tech-card flex-1">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-mono text-neon-blue">{item.period}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.status === 'Current' 
                              ? 'bg-neon-green/20 text-neon-green' 
                              : 'bg-neon-blue/20 text-neon-blue'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-neon-cyan mb-2">{item.institution}</p>
                        <p className="text-sm text-foreground/70">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
