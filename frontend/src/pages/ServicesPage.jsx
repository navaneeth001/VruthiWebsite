import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smartphone, MapPin, Package, Gift, ArrowRight, Recycle, Trash2, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Smartphone,
      title: 'Doorstep Waste Collection',
      description: 'Scheduled pickup for households and businesses through the Vruthi mobile app, ensuring timely and convenient removal of waste from the source.',
      features: ['Easy scheduling', 'Real-time tracking', 'Digital payments', 'Flexible plans'],
      image: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b'
    },
    {
      icon: Recycle,
      title: 'Waste Processing & Recycling',
      description: 'Advanced processing and recycling of collected waste to convert reusable materials into new products, reducing landfill use and promoting sustainability.',
      features: ['Segregation at source', 'Material recovery', 'Quality recycling', 'Certified disposal'],
      image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267'
    },
    {
      icon: Trash2,
      title: 'Safe Waste Disposal',
      description: 'Environmentally responsible disposal of non-recyclable materials using structured systems to minimize environmental impact and comply with regulations.',
      features: ['Compliant disposal', 'Zero to landfill', 'Environmental safety', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1528122819723-9dca3a31295d'
    },
    {
      icon: Package,
      title: 'Composting Services',
      description: 'Convert organic waste into nutrient-rich compost through our advanced composting facility, supporting sustainable agriculture and gardening.',
      features: ['Organic waste processing', 'Quality compost', 'Bulk availability', 'Eco-friendly'],
      image: 'https://images.unsplash.com/photo-1641941672934-9e33a79ec482'
    }
  ];

  const plans = [
    {
      name: 'Individual',
      description: 'Perfect for single households',
      price: '₹200',
      period: '/month',
      features: [
        'Daily doorstep pickup',
        'Segregated waste collection',
        'Mobile app access',
        'Digital receipts',
        'Reward points'
      ]
    },
    {
      name: 'Apartment Complex',
      description: 'Ideal for residential societies',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Dedicated collection points',
        'Bulk waste handling',
        'Community dashboard',
        'Monthly reports',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Commercial',
      description: 'For businesses and institutions',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Flexible scheduling',
        'Large volume handling',
        'Compliance documentation',
        'Dedicated account manager',
        'Analytics dashboard'
      ]
    }
  ];

  const howItWorks = [
    { number: '01', title: 'Schedule Pickup', description: 'Download Vruthi app and schedule your collection', icon: '📱' },
    { number: '02', title: 'We Collect', description: 'Our team arrives at your doorstep', icon: '🚛' },
    { number: '03', title: 'We Process', description: 'Waste is segregated and processed', icon: '♻️' },
    { number: '04', title: 'Earn Rewards', description: 'Get eco-points for proper segregation', icon: '🎁' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Waste Management <span className="text-gradient-primary">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              From doorstep collection to zero-landfill processing, we handle your waste responsibly with complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 bg-card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Simple, transparent process from your doorstep to zero landfill
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <Card key={index} className="p-6 text-center border-border/50 bg-card hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Flexible <span className="text-gradient-primary">Plans</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the plan that fits your waste management needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 border-border/50 hover-lift animate-fadeInUp relative ${
                  plan.popular ? 'bg-gradient-hero border-primary/30' : 'bg-card'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2 mb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-primary hover:bg-primary-dark transition-colors"
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of households and businesses making waste management sustainable.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity group"
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;