import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Wifi, BarChart2, Smartphone, Database, Lock } from 'lucide-react';

export const TechnologySection = () => {
  const techFeatures = [
    {
      icon: Smartphone,
      title: 'Mobile-First Platform',
      description: 'Native iOS & Android apps built with React Native for seamless user experience and offline capabilities.',
      tags: ['React Native', 'Push Notifications', 'Offline Mode']
    },
    {
      icon: Wifi,
      title: 'IoT Smart Bins',
      description: 'GPS-enabled smart collection units with real-time fill-level monitoring and automated route optimization.',
      tags: ['GPS Tracking', 'Sensors', 'Real-time Data']
    },
    {
      icon: Database,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture on AWS/Azure ensuring 99.9% uptime and seamless data synchronization.',
      tags: ['AWS', 'MongoDB', 'Auto-scaling']
    },
    {
      icon: BarChart2,
      title: 'Analytics Dashboard',
      description: 'Advanced data analytics providing insights on waste patterns, operational efficiency, and environmental impact.',
      tags: ['ML Analytics', 'Predictive Models', 'Reporting']
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Integrated payment gateway (Razorpay) with bank-grade encryption for secure subscription and transaction processing.',
      tags: ['Razorpay', 'PCI Compliant', 'Multi-payment']
    },
    {
      icon: Cpu,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms optimize collection routes, predict maintenance, and enhance recycling efficiency.',
      tags: ['Route Optimization', 'Predictive Analytics', 'AI Models']
    }
  ];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Technology & Innovation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on <span className="text-gradient-primary">Cutting-Edge Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our platform combines IoT, cloud computing, and AI to deliver a seamless, transparent, and efficient waste management experience.
          </p>
        </div>

        {/* Image */}
        <div className="max-w-4xl mx-auto mb-16 animate-fadeIn">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1647683014917-80af32c28228"
              alt="Smart city technology infrastructure"
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">IoT-Enabled Smart Infrastructure</h3>
                <p className="text-muted-foreground">Real-time tracking, automated routing, and data-driven decisions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-border/50 bg-card animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">Built with industry-leading technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React Native', 'FastAPI', 'MongoDB', 'AWS', 'IoT Sensors', 'ML/AI', 'Razorpay', 'Google Maps API'].map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;