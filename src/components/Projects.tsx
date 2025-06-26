import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Plant Doctor',
      subtitle: 'Full-Stack AI-IoT Integration',
      description: 'Comprehensive plant health monitoring system combining AI image recognition with IoT sensors.',
      fullDescription: 'An advanced plant health monitoring system that uses computer vision to diagnose plant diseases and IoT sensors to monitor environmental conditions. The system provides real-time alerts and treatment recommendations through a responsive web interface.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI API', 'ESP32', 'PostgreSQL', 'Docker'],
      features: [
        'AI-powered disease detection using computer vision',
        'Real-time sensor monitoring (soil moisture, temperature, humidity)',
        'Automated watering system with mobile alerts',
        'Treatment recommendation engine',
        'Historical data analytics and reporting'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      subtitle: 'Django + Razorpay Integration',
      description: 'Full-featured e-commerce platform with payment gateway integration and inventory management.',
      fullDescription: 'A complete e-commerce solution built with Django, featuring user authentication, product catalog, shopping cart, order management, and secure payment processing through Razorpay integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Razorpay API', 'Bootstrap', 'JavaScript'],
      features: [
        'User authentication and profile management',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Razorpay',
        'Order tracking and management',
        'Admin dashboard for inventory management'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'IoT Fish Pond Monitoring',
      subtitle: 'Sensors + Blynk + Twilio',
      description: 'Smart aquaculture monitoring system with automated alerts and environmental control.',
      fullDescription: 'An IoT solution for fish pond monitoring that tracks water quality parameters and sends automated alerts via SMS when conditions require attention. Features remote monitoring through Blynk app.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      technologies: ['ESP32', 'Blynk', 'Twilio API', 'C++', 'IoT Sensors', 'Mobile App'],
      features: [
        'Real-time water quality monitoring',
        'Automated SMS alerts via Twilio',
        'Remote control through Blynk app',
        'Data logging and historical trends',
        'Automated feeding system integration'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Dynamic Blog Application',
      subtitle: 'React + FastAPI',
      description: 'Modern blog platform with real-time commenting and content management.',
      fullDescription: 'A responsive blog platform built with React frontend and FastAPI backend, featuring user authentication, content management, real-time commenting system, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Docker'],
      features: [
        'Rich text editor for content creation',
        'User authentication and role management',
        'Real-time commenting system',
        'SEO-optimized article pages',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Li-Fi Vehicle Communication',
      subtitle: 'Embedded Systems Project',
      description: 'Vehicle-to-vehicle communication system using Light Fidelity technology.',
      fullDescription: 'An innovative communication system for vehicles using Li-Fi technology to enable high-speed data transmission between vehicles for safety and traffic management applications.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'C++', 'LED Arrays', 'Photodiodes', 'Signal Processing'],
      features: [
        'High-speed Li-Fi data transmission',
        'Vehicle-to-vehicle communication protocol',
        'Real-time traffic data sharing',
        'Safety alert system',
        'Low-latency emergency communications'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Research Project'
    },
    {
      id: 6,
      title: 'IoT LED Display Board',
      subtitle: 'Smart Signage System',
      description: 'Internet-connected LED display board for dynamic content management.',
      fullDescription: 'A smart LED display board that can be controlled remotely via web interface. Perfect for advertising, announcements, and real-time information display in commercial and educational environments.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: ['NodeMCU', 'Wi-Fi', 'Web Interface', 'LED Matrix', 'Real-time Updates'],
      features: [
        'Remote content management via web interface',
        'Real-time message updates',
        'Scheduling system for automated displays',
        'Multiple display modes and animations',
        'Mobile-responsive control panel'
      ],
      github: 'https://github.com/Hari-r31',
      demo: '#',
      status: 'Completed'
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-800/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning web development, IoT systems, and embedded technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="tech-card group cursor-pointer overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      project.status === 'Completed' ? 'bg-neon-green/20 text-neon-green' :
                      project.status === 'Research Project' ? 'bg-neon-blue/20 text-neon-blue' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neon-cyan text-sm font-mono mb-3">{project.subtitle}</p>
                <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-neon-blue/30 text-neon-blue">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-neon-blue to-neon-cyan text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                        onClick={() => setSelectedProject(project)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border border-white/10">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-gradient">{selectedProject?.title}</DialogTitle>
                      </DialogHeader>
                      {selectedProject && (
                        <div className="space-y-6">
                          <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div>
                            <h4 className="text-lg font-semibold text-neon-blue mb-2">Project Overview</h4>
                            <p className="text-foreground/80">{selectedProject.fullDescription}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-neon-cyan mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {selectedProject.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-foreground/80">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-neon-green mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline" className="border-neon-blue/30 text-neon-blue">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-4 pt-4">
                            <Button asChild className="bg-gray-800 hover:bg-gray-700">
                              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                            <Button asChild variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
                              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="outline" className="border-gray-600 hover:border-neon-blue" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue"
            asChild
          >
            <a href="https://github.com/Hari-r31" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
