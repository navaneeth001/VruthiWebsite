import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Calendar, TrendingUp, Target } from 'lucide-react';

export const TractionSection = () => {
  const milestones = [
    {
      phase: 'Month 1-2',
      title: 'Foundation',
      status: 'completed',
      items: ['Company incorporation', 'Legal framework', 'Initial permits']
    },
    {
      phase: 'Month 3-5',
      title: 'Development',
      status: 'completed',
      items: ['Vruthi app development', 'Equipment procurement', 'Team hiring & training']
    },
    {
      phase: 'Month 6-8',
      title: 'Pilot Launch',
      status: 'in-progress',
      items: ['Pilot operations in Cochin', 'Initial customer onboarding', 'Operations refinement']
    },
    {
      phase: 'Month 9-12',
      title: 'Full Launch',
      status: 'upcoming',
      items: ['Commercial launch', 'Scale operations', 'Revenue generation']
    }
  ];

  const achievements = [
    { label: 'Seed Funding Round', value: '₹75L', icon: TrendingUp },
    { label: 'Target Households Y1', value: '2,000', icon: Target },
    { label: 'Break-even Timeline', value: 'Year 2', icon: CheckCircle2 },
    { label: 'Cities by Year 3', value: '3-5', icon: Calendar }
  ];

  const statusColors = {
    'completed': 'bg-success/10 text-success border-success/20',
    'in-progress': 'bg-accent/10 text-accent border-accent/20',
    'upcoming': 'bg-muted text-muted-foreground border-border'
  };

  return (
    <section id="traction" className="py-20 lg:py-28 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Traction & Milestones
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Journey</span> So Far
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to pilot operations — tracking our progress towards revolutionizing waste management in India.
          </p>
        </div>

        {/* Milestones timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 bg-card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge className={`mb-4 ${statusColors[milestone.status]}`}>
                  {milestone.status === 'completed' ? '✓ ' : milestone.status === 'in-progress' ? '▶ ' : '○ '}
                  {milestone.status.replace('-', ' ')}
                </Badge>
                <div className="text-xs text-muted-foreground mb-1">{milestone.phase}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        milestone.status === 'completed' ? 'text-success' : 'text-muted-foreground/30'
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Key achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center border-border/50 bg-card hover-lift animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </Card>
          ))}
        </div>

        {/* Expansion plan */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 bg-gradient-hero border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Expansion Roadmap</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Year 2-3</h4>
                <p className="text-sm text-muted-foreground">Franchise expansion across Kerala cities</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Year 4-5</h4>
                <p className="text-sm text-muted-foreground">National expansion to 3-4 major cities</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌐</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Beyond</h4>
                <p className="text-sm text-muted-foreground">Pan-India presence & tech licensing</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;