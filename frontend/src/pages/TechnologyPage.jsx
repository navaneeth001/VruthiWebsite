import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Wifi, BarChart2, Smartphone, Database, Lock, MapPin, Zap } from 'lucide-react';

export const TechnologyPage = () => {
  const techFeatures = [
    {
      icon: Smartphone,
      title: 'Vruthi Mobile App',
      description: 'Native iOS & Android apps for seamless scheduling, tracking, and payments with offline capabilities.',
      features: ['Easy booking', 'Real-time tracking', 'Digital payments', 'Push notifications'],
      stats: '10K+ Downloads'
    },
    {
      icon: Wifi,
      title: 'IoT Smart Bins',
      description: 'GPS-enabled smart collection units with real-time fill-level monitoring and automated alerts.',
      features: ['GPS tracking', 'Fill sensors', 'QR codes', 'Data sync'],
      stats: '500+ Bins Deployed'
    },
    {
      icon: MapPin,
      title: 'Route Optimization',
      description: 'AI-powered route planning reduces fuel consumption and ensures timely pickups for all customers.',
      features: ['Smart routing', 'Traffic integration', 'Real-time updates', 'Efficiency tracking'],
      stats: '30% Time Saved'
    },
    {
      icon: BarChart2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive dashboard providing insights on waste patterns, collection efficiency, and environmental impact.',
      features: ['Waste analytics', 'Performance metrics', 'Reports', 'Predictions'],
      stats: 'Real-time Data'
    },
    {
      icon: Database,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture ensuring 99.9% uptime and seamless data synchronization across all platforms.',
      features: ['Auto-scaling', 'Data backup', 'High availability', 'Secure storage'],
      stats: '99.9% Uptime'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Integrated payment gateway with bank-grade encryption for secure subscription and transaction processing.',
      features: ['Multiple options', 'PCI compliant', 'Auto-billing', 'Receipts'],
      stats: 'Bank-level Security'
    }
  ];

  const platforms = [
    {
      title: 'User App',
      description: 'For households and businesses',
      features: [
        'Schedule pickups',
        'Track collection status',
        'Manage subscriptions',
        'Earn reward points',
        'View waste impact'
      ],
      icon: '📱'
    },
    {
      title: 'Worker App',
      description: 'For collection teams',
      features: [
        'View assigned routes',
        'Navigate to locations',
        'Update collection status',
        'Upload photos',
        'Track earnings'
      ],
      icon: '🚛'
    },
    {
      title: 'Admin Dashboard',
      description: 'For management',
      features: [
        'Monitor operations',
        'Manage users & workers',
        'Track revenue',
        'Generate reports',
        'System analytics'
      ],
      icon: '📊'
    }
  ];

  const techStack = [
    { category: 'Frontend', tech: 'React Native, React.js, Tailwind CSS' },
    { category: 'Backend', tech: 'FastAPI, Python, Node.js' },
    { category: 'Database', tech: 'MongoDB, PostgreSQL' },
    { category: 'Cloud', tech: 'AWS, Azure' },
    { category: 'IoT', tech: 'GPS Sensors, QR Codes, RFID' },
    { category: 'Payments', tech: 'Razorpay, Stripe' },
    { category: 'Maps', tech: 'Google Maps API' },
    { category: 'Analytics', tech: 'Machine Learning, Data Science' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Technology & Innovation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Built on <span className="text-gradient-primary">Cutting-Edge Technology</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Our platform combines IoT, cloud computing, AI, and mobile technology to deliver seamless, transparent, and efficient waste management.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1647683014917-80af32c28228"
                alt="Smart city technology infrastructure"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl p-8">
                  <h3 className="text-3xl font-bold text-foreground mb-3">IoT-Enabled Smart Infrastructure</h3>
                  <p className="text-lg text-muted-foreground">Real-time tracking, automated routing, and data-driven decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Core <span className="text-gradient-primary">Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advanced features powering India's most comprehensive waste management platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover-lift border-border/50 bg-card animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">{feature.stats}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-xs text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Complete <span className="text-gradient-primary">Platform Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three interconnected platforms working together for seamless operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 bg-card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-6 text-center">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{platform.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 text-center">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technology <span className="text-gradient-primary">Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built with industry-leading technologies for reliability and scalability
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-border/50 bg-card">
              <div className="grid md:grid-cols-2 gap-8">
                {techStack.map((item, index) => (
                  <div
                    key={index}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.category}</h4>
                        <p className="text-sm text-muted-foreground">{item.tech}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gradient-hero border-border/50">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                Why Our Technology Matters
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Complete Transparency', description: 'Track every step of your waste journey in real-time' },
                  { title: 'Maximum Efficiency', description: 'Optimized routes reduce fuel costs and carbon footprint' },
                  { title: 'Data-Driven Decisions', description: 'Analytics help improve service and sustainability' },
                  { title: 'User-Friendly', description: 'Simple interfaces make waste management effortless' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;