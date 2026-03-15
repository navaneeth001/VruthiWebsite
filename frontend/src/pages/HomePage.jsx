import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, TrendingUp, Users, Leaf, Recycle, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: Leaf,
      value: 'Zero',
      label: 'Waste to Landfill',
      description: 'Complete circular economy'
    },
    {
      icon: Users,
      value: '40%',
      label: 'Inclusive Workforce',
      description: 'Empowering communities'
    },
    {
      icon: Recycle,
      value: '100%',
      label: 'Waste Processed',
      description: 'Recycle, compost, upcycle'
    },
    {
      icon: TrendingUp,
      value: 'Smart',
      label: 'IoT-Enabled',
      description: 'Real-time tracking'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fadeInUp">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 inline-flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Revolutionizing Waste Management in India</span>
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Turning Every Bit of Waste into a{' '}
                  <span className="text-gradient-primary">Worthy Future</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  An intelligent platform reimagining waste management, sanitation, and disposal for Indian households. Blending smart technology with meaningful social impact to shape a cleaner, zero-landfill future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-base group"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://play.google.com/store/search?q=vruthi&c=apps&hl=en', '_blank')}
                  className="border-secondary/30 hover:bg-secondary/5 text-base"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Find our app here
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="hover:bg-primary/5 text-base"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative animate-fadeIn delay-200 flex flex-col items-center justify-center">
              <div className="relative w-full flex items-center justify-center mb-8">
                <img
                  src={require('@/assets/VRUTHI.svg').default || require('@/assets/VRUTHI.svg')}
                  alt="Vruthi Sustainable waste management"
                  className="w-full h-auto max-h-[700px] object-contain scale-125"
                />
              </div>
              
              {/* Clickable card below SVG */}
              <div 
                onClick={() => window.open('https://vruthiapp.web.app', '_blank')}
                className="w-full max-w-md bg-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50 cursor-pointer hover:bg-accent/10 transition-colors z-10"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Explore our services</div>
                    <div className="text-xs text-muted-foreground">Click here to visit Vruthi App</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-primary">
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

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-primary">Vruthi?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine technology, sustainability, and social impact to deliver India's most comprehensive waste management solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Digital Platform',
                description: 'IoT smart bins, mobile app, and real-time tracking for complete transparency.',
                icon: '📱'
              },
              {
                title: 'Zero Waste Model',
                description: 'Complete circular economy - recycle, compost, and upcycle everything.',
                icon: '♻️'
              },
              {
                title: 'Social Impact',
                description: '40% of our workforce comprises physically challenged individuals.',
                icon: '🤝'
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;