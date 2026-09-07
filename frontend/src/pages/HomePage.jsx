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
                <span>Premier Waste Management Company Kochi</span>
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Turning Every Bit of Waste into a{' '}
                  <span className="text-gradient-primary">Worthy Future</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Vruthi is a smart, tech-driven <strong>waste management company Kochi</strong>. We offer hassle-free <strong>doorstep waste collection Kochi</strong>, safe <strong>waste disposal service Kochi</strong>, and eco-friendly household waste management services across Kochi and Ernakulam to shape a cleaner, zero-landfill future.
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
              We combine technology, sustainability, and responsible waste management to make waste collection simpler, more transparent, and accessible for households, businesses, apartments, and communities across Kochi and Ernakulam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart & Technology-Enabled Waste Management',
                description: [
                  'Vruthi uses a technology-enabled waste management platform to make everyday waste collection more convenient. Customers can schedule doorstep waste collection, manage their pickup services, and stay informed about their waste collection through the Vruthi platform. Our approach connects households and businesses with a more organized and reliable waste collection service in Kochi.'
                ],
                icon: '📱'
              },
              {
                title: 'Collection, Recovery & Recycling',
                description: [
                  'Effective waste management starts with proper collection, segregation, recovery, and recycling. Vruthi helps manage different waste streams, including household waste, dry waste, plastic waste, recyclable waste, and other eligible materials, directing recoverable materials towards appropriate recycling and recovery channels.',
                  'Our plastic waste collection and recyclable waste management approach helps reduce improper dumping and supports a more circular approach to resource recovery. Wherever applicable, waste is handled through appropriate recovery, recycling, reuse, composting, or responsible disposal processes.'
                ],
                icon: '♻️'
              },
              {
                title: 'Community & Social Impact',
                description: [
                  'Better waste management begins at the community level. Vruthi works with households, apartments, schools, businesses, shops, and local communities in Kochi and Ernakulam to encourage responsible waste segregation and disposal.',
                  'Through environmental awareness programs, community initiatives, and local campaigns, we promote better waste management practices in Kochi while encouraging people to take greater responsibility for the waste they generate.'
                ],
                icon: '🤝'
              },
              {
                title: 'Responsible Waste Management',
                description: [
                  'From doorstep waste collection and household waste management to segregation, material recovery, recycling, and responsible disposal, Vruthi works to create a more organized and environmentally responsible waste management system in Kochi.',
                  'We believe waste is not simply something to be thrown away. When managed responsibly, waste can become a valuable resource — recovered, recycled, reused, and given a new purpose.'
                ],
                icon: '🌱'
              },
              {
                title: 'Building a Cleaner, Circular Future',
                description: [
                  'Our goal is to make waste collection and waste management services simple, reliable, technology-enabled, and accessible while helping communities reduce unnecessary dumping, recover valuable materials, and move towards a more sustainable and circular future.'
                ],
                icon: '🌍'
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                {item.description.map((paragraph, i) => (
                  <p key={i} className={`text-muted-foreground leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>{paragraph}</p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Local SEO Offerings Section */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Local Service Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Reliable <span className="text-gradient-primary">Waste Management & Collection</span> in Kochi
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vruthi provides professional waste management services, waste collection services, doorstep waste collection, waste pickup, and responsible waste disposal services in Kochi and Ernakulam. We help households, apartments, residential communities, businesses, shops, offices, institutions, and other organizations manage their waste through convenient collection, proper segregation, material recovery, recycling, and responsible disposal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need household waste collection, residential waste management, dry waste collection, recyclable waste collection, plastic waste collection, food waste management, commercial waste collection, or regular doorstep waste pickup, Vruthi provides an organized approach to managing waste while supporting a cleaner and more sustainable community.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Household & Residential Waste Collection',
                description: 'Vruthi provides household waste collection and residential waste management services in Kochi and Ernakulam, helping families manage their everyday waste through convenient and scheduled collection. Our home waste collection and residential waste pickup services are designed to make responsible waste disposal easier for households and residential communities. We support responsible management of eligible household waste, dry waste, recyclable waste, plastic waste, and other collected materials, helping reduce improper dumping and encouraging better waste segregation at source.',
                icon: '🏠'
              },
              {
                title: 'Dry, Plastic & Recyclable Waste Collection',
                description: 'Our dry waste collection and recyclable waste collection services in Kochi help recover valuable materials from the waste stream. Depending on the collection category, materials may include plastic, paper, cardboard, metal, PET bottles, packaging materials, and other recyclable materials. Vruthi supports plastic waste management, recyclable waste recovery, dry waste management, waste segregation, material recovery, and recycling, helping divert recoverable materials from unnecessary disposal and supporting a more circular waste management system.',
                icon: '♻️'
              },
              {
                title: 'Doorstep Waste Collection & Waste Pickup',
                description: 'Our doorstep waste collection service in Kochi and Ernakulam provides a convenient way for households and businesses to arrange their waste pickup. Customers can schedule their collection through the Vruthi waste management platform, making it easier to manage regular waste collection and responsible disposal. If you are looking for waste collection near me, waste pickup near me, household waste pickup, residential waste collection, doorstep waste pickup, or a waste collection service in Kochi, Vruthi provides a technology-enabled solution for convenient and organized waste management.',
                icon: '🚛'
              },
              {
                title: 'Responsible Waste Disposal & Resource Recovery',
                description: 'Vruthi focuses on responsible waste disposal, waste recovery, recycling, and sustainable waste management rather than simply moving waste from one location to another. Our approach follows a structured process of collection, segregation, recovery, recycling, reuse, and appropriate disposal, wherever applicable. By supporting better waste management practices in Kochi and Ernakulam, Vruthi aims to reduce improper waste dumping, improve resource recovery, encourage recycling, and reduce unnecessary dependence on landfills.',
                icon: '🌱'
              },
              {
                title: 'Waste Management for Businesses & Communities',
                description: 'Vruthi also supports commercial waste management and waste collection for businesses, shops, offices, apartments, institutions, and communities. Organized waste collection can help commercial and residential communities maintain cleaner premises while ensuring collected materials are directed towards appropriate recovery, recycling, or disposal channels. From household waste collection and plastic waste management to commercial waste collection, dry waste recycling, recyclable waste recovery, and doorstep waste pickup, Vruthi is building a more convenient and responsible waste management ecosystem across Kochi and Ernakulam.',
                icon: '🏢'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 border-border/50 bg-card hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Near Me Search Engine Helpers */}
          <div className="mt-12 p-8 bg-card border border-border/50 rounded-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Looking for premium waste services near you?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-base">Waste Management Near Me</h4>
                <p className="text-sm text-muted-foreground">Vruthi delivers rapid, compliant local waste management services for households and enterprises in Kochi.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-base">Waste Collection Near Me</h4>
                <p className="text-sm text-muted-foreground">Get reliable home doorstep waste pickup service Kochi at your convenience via our simple Android/iOS application.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-base">Waste Pickup Near Me</h4>
                <p className="text-sm text-muted-foreground">Your nearest eco-partner for residential garbage collection Kochi, organic composting, and recyclables recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;