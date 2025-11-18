import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
                Tech-enabled green platform disrupting waste management, sanitation, and disposal for Indian households. Zero waste to landfill, maximum social impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#investment')}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-base group"
              >
                Explore Investment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#solution')}
                className="border-primary/30 hover:bg-primary/5 text-base group"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">₹29Cr</div>
                <div className="text-sm text-muted-foreground">Projected Revenue Y5</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Inclusive Workforce</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Waste to Landfill</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-fadeIn delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
              <img
                src="https://images.unsplash.com/photo-1762805544550-f12a8ebceb2e"
                alt="Sustainable waste management in India"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Smart Waste Collection</div>
                    <div className="text-xs text-muted-foreground">IoT-enabled tracking & zero landfill approach</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-semibold text-sm animate-float">
              ₹75L Funding Ask
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;