import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, DollarSign, MapPin, Building, Users2 } from 'lucide-react';

export const MarketOpportunity = () => {
  const marketData = [
    {
      icon: TrendingUp,
      title: 'Market Size',
      value: '₹21.86B',
      subtitle: 'by 2033',
      description: 'India\'s waste management market projected to reach ₹21.86 billion by 2033, growing from ₹12.21B in 2024.',
      color: 'text-primary'
    },
    {
      icon: DollarSign,
      title: 'TAM (Total Addressable Market)',
      value: '₹8-9B',
      subtitle: 'Urban solid waste',
      description: 'Organized, innovative waste management opportunity in urban India.',
      color: 'text-secondary'
    },
    {
      icon: Target,
      title: 'SAM (Serviceable Addressable)',
      value: '₹250-400M',
      subtitle: '3-5% of SAM',
      description: 'Targeting South India\'s urban hubs with our subscription model.',
      color: 'text-accent'
    }
  ];

  const targetSegments = [
    {
      icon: Building,
      title: 'Residential',
      description: 'Homes & apartment complexes',
      market: '600K households in Kochi',
      potential: '240K addressable'
    },
    {
      icon: Users2,
      title: 'Commercial',
      description: 'Offices, IT parks, retail outlets',
      market: 'Growing corporate sector',
      potential: 'High-value contracts'
    },
    {
      icon: MapPin,
      title: 'Institutional',
      description: 'Schools, colleges, hotels',
      market: 'Educational & hospitality',
      potential: 'Volume-based pricing'
    }
  ];

  return (
    <section id="market" className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Market Opportunity
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A <span className="text-gradient-primary">₹21.86B Market</span> Waiting
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            India\'s waste management sector is experiencing explosive growth, driven by urbanization, environmental awareness, and regulatory pressure.
          </p>
        </div>

        {/* Market size cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {marketData.map((data, index) => (
            <Card
              key={index}
              className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 ${data.color}`}>
                <data.icon className="w-7 h-7" />
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-1">{data.title}</div>
              <div className="text-4xl font-bold text-foreground mb-1">{data.value}</div>
              <div className="text-sm text-primary font-medium mb-3">{data.subtitle}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
            </Card>
          ))}
        </div>

        {/* Target segments */}
        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Target Market Segments</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {targetSegments.map((segment, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 bg-card animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <segment.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{segment.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{segment.description}</p>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Market:</span> {segment.market}
                  </div>
                  <div className="text-xs text-primary font-medium">{segment.potential}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Revenue projections */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Revenue Projections (5-Year)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { year: 'Year 1', revenue: '₹0.65Cr', growth: '-' },
              { year: 'Year 2', revenue: '₹2.2Cr', growth: '+238%' },
              { year: 'Year 3', revenue: '₹6.7Cr', growth: '+205%' },
              { year: 'Year 4', revenue: '₹14.2Cr', growth: '+112%' },
              { year: 'Year 5', revenue: '₹29.0Cr', growth: '+104%' }
            ].map((item, index) => (
              <Card key={index} className="p-4 text-center border-border/50 bg-card animate-scaleIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-xs text-muted-foreground mb-1">{item.year}</div>
                <div className="text-xl font-bold text-foreground mb-1">{item.revenue}</div>
                <div className="text-xs text-success font-medium">{item.growth}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;