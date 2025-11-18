import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Leaf, Target } from 'lucide-react';

export const ImpactStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '₹21.86B',
      label: 'Market Size by 2033',
      description: 'India waste management market',
      color: 'text-primary'
    },
    {
      icon: Target,
      value: '50,000+',
      label: 'Households by Year 5',
      description: 'Subscription-based customers',
      color: 'text-secondary'
    },
    {
      icon: Leaf,
      value: '3,000+',
      label: 'Tonnes Daily',
      description: 'MSW generated in Kerala',
      color: 'text-accent'
    },
    {
      icon: Users,
      value: '240K',
      label: 'Addressable Market',
      description: 'Kochi households (premium)',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-border/50 bg-card animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col space-y-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;