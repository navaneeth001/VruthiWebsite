import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Schedule Pickup',
      description: 'Download Vruthi app, register, and schedule your waste collection with just a few taps.',
      icon: '📱'
    },
    {
      number: '02',
      title: 'Smart Collection',
      description: 'Our trained workers arrive at your doorstep with IoT-enabled tracking for complete transparency.',
      icon: '🚛'
    },
    {
      number: '03',
      title: 'Segregate & Sort',
      description: 'Waste is segregated at our facility into recyclables, organics, plastics, and e-waste streams.',
      icon: '♻️'
    },
    {
      number: '04',
      title: 'Process & Transform',
      description: 'Advanced processing converts waste into compost, recycled materials, and upcycled products.',
      icon: '⚙️'
    },
    {
      number: '05',
      title: 'Circular Economy',
      description: 'Processed materials return to market as new products, completing the zero-waste cycle.',
      icon: '🌱'
    },
    {
      number: '06',
      title: 'Earn Rewards',
      description: 'Get eco-points for proper segregation and redeem them for sustainable products in our shop.',
      icon: '🎁'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient-primary">Vruthi Works</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From your doorstep to zero landfill - a seamless, transparent journey powered by technology
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full hover-lift border-border/50 bg-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
              {/* Arrow connector (hidden on last item) */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;