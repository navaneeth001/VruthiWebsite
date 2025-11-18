import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, MapPin, AlertCircle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Irregular Collection',
      description: 'Inconsistent waste pickup schedules leading to accumulation and health hazards in urban areas.',
      stat: '57%',
      statLabel: 'Waste not properly collected'
    },
    {
      icon: TrendingDown,
      title: 'Low Recycling Rates',
      description: 'Minimal recycling infrastructure with most waste ending up in overflowing landfills.',
      stat: '<15%',
      statLabel: 'Current recycling rate'
    },
    {
      icon: MapPin,
      title: 'Landfill Crisis',
      description: 'Brahmapuram landfill fire (March 2023) exposed urgent need for sustainable waste solutions.',
      stat: '100+',
      statLabel: 'Days of crisis'
    },
    {
      icon: AlertCircle,
      title: 'Lack of Transparency',
      description: 'No visibility into waste journey, disposal methods, or environmental impact for residents.',
      stat: '0%',
      statLabel: 'Tracking visibility'
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Waste Management <span className="text-gradient-primary">Crisis</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kerala generates over 3,000 tonnes of municipal solid waste daily, with only 43% properly collected. The existing system is broken.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-destructive">{problem.stat}</div>
                    <div className="text-sm text-muted-foreground">{problem.statLabel}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">
            This crisis demands a <span className="text-primary font-semibold">comprehensive, technology-driven solution</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;