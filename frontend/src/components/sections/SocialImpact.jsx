import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Sparkles, TreePine } from 'lucide-react';

export const SocialImpact = () => {
  const impacts = [
    {
      icon: Users,
      title: '40% Inclusive Workforce',
      description: 'Empowering physically challenged individuals with dignified employment and skill development.',
      stats: ['Equal opportunity', 'Fair wages', 'Training programs'],
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e'
    },
    {
      icon: TreePine,
      title: 'Zero Waste to Landfill',
      description: 'Complete circular economy model ensuring every waste stream is recycled, composted, or upcycled.',
      stats: ['100% processing', 'Carbon reduction', 'Resource recovery'],
      image: 'https://images.unsplash.com/photo-1528122819723-9dca3a31295d'
    },
    {
      icon: Sparkles,
      title: 'Community Engagement',
      description: 'Building awareness through rewards, education, and making sustainability accessible to all.',
      stats: ['Eco-education', 'Reward points', 'Behavior change'],
      image: 'https://images.unsplash.com/photo-1758873268631-fa944fc5cad2'
    }
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Heart className="w-4 h-4 mr-2 inline" />
            Social Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-primary">Profit with Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond business metrics, we\'re creating real social and environmental impact in every community we serve.
          </p>
        </div>

        {/* Impact cards */}
        <div className="space-y-8 lg:space-y-12">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border/50 bg-card hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={impact.image}
                    alt={impact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <impact.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{impact.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{impact.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {impact.stats.map((stat, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '40%', label: 'Diverse workforce' },
            { value: '100%', label: 'Waste processed' },
            { value: '50K+', label: 'Households by Y5' },
            { value: 'Zero', label: 'To landfill' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;