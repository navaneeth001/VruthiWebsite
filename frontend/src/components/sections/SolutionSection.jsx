import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, MapPin, Package, Gift, BarChart3, Shield } from 'lucide-react';

export const SolutionSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Vruthi Mobile App',
      description: 'Easy scheduling, real-time tracking, and seamless payments for doorstep waste collection.',
      benefits: ['iOS & Android', 'One-tap booking', 'Digital receipts']
    },
    {
      icon: MapPin,
      title: 'IoT-Enabled Tracking',
      description: 'Smart bins with GPS and real-time monitoring ensure complete transparency and efficiency.',
      benefits: ['Live tracking', 'Route optimization', 'Data analytics']
    },
    {
      icon: Package,
      title: 'Circular Economy Model',
      description: 'Zero waste to landfill - everything is recycled, composted, or upcycled into new products.',
      benefits: ['Recycle', 'Compost', 'Upcycle']
    },
    {
      icon: Gift,
      title: 'Reward System',
      description: 'Earn eco-points for proper segregation, redeemable for discounts and eco-friendly products.',
      benefits: ['Earn points', 'Redeem rewards', 'Shop sustainable']
    },
    {
      icon: BarChart3,
      title: 'Subscription Model',
      description: 'Flexible monthly, quarterly, or annual plans with predictable pricing and premium service.',
      benefits: ['Flexible plans', 'No hidden fees', 'Cancel anytime']
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'Track your waste journey from pickup to processing, with detailed environmental impact reports.',
      benefits: ['Full visibility', 'Impact reports', 'Carbon tracking']
    }
  ];

  return (
    <section id="solution" className="py-20 lg:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Solution
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet <span className="text-gradient-primary">Vruthi</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive, smart platform that makes waste management transparent and rewarding. From doorstep pickup to zero-landfill processing.
          </p>
        </div>

        {/* Image showcase */}
        <div className="max-w-5xl mx-auto mb-16 animate-fadeIn">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"
              alt="Vruthi platform technology"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-2">Smart Waste. Bright Future. Zero to Landfill.</h3>
                <p className="text-muted-foreground">Technology meets sustainability for a cleaner tomorrow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-border/50 bg-card animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.benefits.map((benefit, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;