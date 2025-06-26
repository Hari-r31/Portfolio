import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const skillCategories = {
    programming: {
      title: 'Programming',
      icon: '</>',
      skills: [
        { name: 'Python', level: 95, color: 'bg-yellow-500' },
        { name: 'JavaScript', level: 88, color: 'bg-yellow-400' },
        { name: 'C', level: 85, color: 'bg-blue-500' },
        { name: 'SQL', level: 90, color: 'bg-orange-500' }
      ]
    },
    web: {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React.js', level: 92, color: 'bg-cyan-500' },
        { name: 'Django', level: 88, color: 'bg-green-600' },
        { name: 'FastAPI', level: 95, color: 'bg-teal-500' },
        { name: 'Flask', level: 85, color: 'bg-gray-600' },
        { name: 'HTML5/CSS3', level: 90, color: 'bg-orange-500' }
      ]
    },
    database: {
      title: 'Database & Backend',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 90, color: 'bg-blue-600' },
        { name: 'Supabase', level: 88, color: 'bg-green-500' },
        { name: 'MySQL', level: 85, color: 'bg-blue-500' },
        { name: 'RESTful APIs', level: 93, color: 'bg-purple-500' }
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      icon: '⚙️',
      skills: [
        { name: 'Docker', level: 85, color: 'bg-blue-500' },
        { name: 'GitHub Actions', level: 80, color: 'bg-gray-700' },
        { name: 'Azure Functions', level: 82, color: 'bg-blue-600' },
        { name: 'CI/CD', level: 78, color: 'bg-green-500' }
      ]
    },
    ai: {
      title: 'AI/ML & Data',
      icon: '🤖',
      skills: [
        { name: 'Pandas', level: 88, color: 'bg-purple-600' },
        { name: 'NumPy', level: 85, color: 'bg-blue-500' },
        { name: 'OpenAI API', level: 90, color: 'bg-green-500' },
        { name: 'Data Analysis', level: 82, color: 'bg-yellow-500' }
      ]
    },
    embedded: {
      title: 'Embedded & IoT',
      icon: '🔧',
      skills: [
        { name: 'ESP32', level: 92, color: 'bg-red-500' },
        { name: 'NodeMCU', level: 90, color: 'bg-blue-500' },
        { name: 'IoT Sensors', level: 88, color: 'bg-green-500' },
        { name: 'Arduino IDE', level: 85, color: 'bg-teal-500' }
      ]
    }
  };

  const [activeTab, setActiveTab] = useState('programming');

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-4"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A comprehensive skillset spanning full-stack development, embedded systems, and modern DevOps practices
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-card/30 backdrop-blur-sm border border-white/10">
            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue text-xs md:text-sm"
              >
                <span className="mr-1">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="tech-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neon-blue mb-6 flex items-center">
                    <span className="mr-3 text-3xl">{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-neon-cyan font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Skills */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Twilio Integration', icon: '📱' },
            { name: 'Razorpay Payment', icon: '💳' },
            { name: 'Adobe Photoshop', icon: '🎨' },
            { name: 'Project Mentorship', icon: '👨‍🏫' }
          ].map((skill, index) => (
            <Card key={index} className="tech-card text-center group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                  {skill.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
