import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Eye, Sparkles } from 'lucide-react';

export const AboutPage = () => {
  const team = [
    {
      name: 'Ajith Edathodi',
      role: 'Founder & CEO',
      education: 'BBM',
      experience: '13 years in telesales industry',
      description: 'Visionary leader with extensive experience in business development and strategic partnerships.',
      initials: 'AE',
      image: '/assets/team/ajith.jpg'
    },
    {
      name: 'Chittur Srilalan Rajashree',
      role: 'COO & Co-Founder',
      education: 'B.Sc., MA, B.Ed., MBA',
      experience: 'Software Engineer (Singapore), VP-Placements',
      description: 'Operations expert with diverse background in technology and management.',
      initials: 'CR',
      image: '/assets/team/rajasree.jpg'
    },
    {
      name: 'Navaneeth',
      role: 'CTO & Co-Founder',
      education: 'B.Tech (Applied Electronics), MBA',
      experience: 'Bosch India, Honeywell',
      description: 'Technology leader with experience at leading tech companies building scalable systems.',
      initials: 'NV',
      image: '/assets/team/navaneeth.jpg'
    },
    {
      name: 'Parthiv Kanhan',
      role: 'CMO & Co-Founder',
      education: 'Creative Arts & Digital Marketing',
      experience: 'Award-winning Digital Marketing Head & Creative Director',
      description: 'Specialist in visual storytelling, ad film conceptualization, and end-to-end digital strategies for global brands.',
      initials: 'PK',
      image: '/assets/team/parthiv.jpg',
      linkedin: 'https://www.linkedin.com/in/parthiv-kanhan-754895260/'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Social Impact',
      description: '40% of our workforce comprises physically challenged individuals, providing dignified employment and skill development opportunities.',
      color: 'text-primary'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Leveraging IoT, AI, and mobile technology to create transparent, efficient waste management solutions.',
      color: 'text-secondary'
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Zero waste to landfill approach through complete recycling, composting, and upcycling processes.',
      color: 'text-accent'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              About Neowaste Innovation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforming Waste Management in <span className="text-gradient-primary">India</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Neowaste Innovation Pvt Ltd is a tech-forward platform dedicated to revolutionizing waste management, sanitation, and disposal for Indian households through smart technology and scalable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 lg:p-12 border-border/50 bg-card hover-lift animate-fadeInUp">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To deliver structured, tech-enabled doorstep waste collection across Cochin and South India via the Vruthi app. Through IoT tracking, transparent recycling, and organic composting, we turn waste into value while scaling through a community-driven franchise model.
              </p>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Pillars</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">IoT Doorstep Pickup:</span> Daily tracked collection for food waste &amp; recyclables.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Certified Recycling:</span> Zero-leakage biomethanation and material recovery.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Franchise Scale:</span> Rapid, profitable expansion across Kerala &amp; South India.</span>
                </li>
              </ul>
            </Card>

            {/* Vision */}
            <Card className="p-8 lg:p-12 border-border/50 bg-card hover-lift animate-fadeInUp delay-200">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A zero-landfill South India powered by a circular economy, dignified green jobs, and technology-driven sustainability.
              </p>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Zero Landfill:</span> 100% circular diversion from soil and backwaters.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Dignified Workforce:</span> Fair living wages, safety gear, and healthcare.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Smart Impact:</span> App-based tracking with verified ESG compliance.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-primary">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide everything we do at Neowaste Innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 border-border/50 bg-card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 ${value.color}`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              Leadership Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet the <span className="text-gradient-primary">Visionaries</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced leaders bringing together expertise in business, operations, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20 bg-muted">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">Education</div>
                    <div className="text-sm text-foreground">{member.education}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-1">Experience</div>
                    <div className="text-sm text-foreground">{member.experience}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Team quote */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gradient-hero border-border/50">
              <blockquote className="text-center">
                <p className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed mb-6">
                  "Technology has the power to change how we treat our planet. With Vruthi, we are empowering individuals and businesses to manage waste smarter, reduce their footprint, and take part in building a greener tomorrow—right from their fingertips."
                </p>
                <footer className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Ajith Edathodi</span>, Founder & CEO
                </footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </section>

      {/* Vruthi Overview Summary */}
      <section className="py-16 bg-muted/20 border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Vruthi, the flagship environmental service of Neowaste Innovation Pvt Ltd, delivers reliable, scientific doorstep waste collection and sustainable resource recovery across Kochi and Ernakulam.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              We provide comprehensive waste management solutions for residential homes, villas, housing societies (RWAs), restaurants, and commercial enterprises. Our scheduled services cover daily organic food and wet waste management, recyclable plastic pickup, dry waste sorting, electronic waste (e-waste) disposal, and bulk debris removal.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Built on a strict protocol of source segregation and zero-leakage processing, Vruthi diverts waste from landfills and local backwaters through authorized composting and circular recycling hubs. Guided by our core mission—&#8220;Protecting Land, Water, Culture &amp; Future&#8221;—we combine smart digital scheduling with dignified, professional service to build a cleaner, greener Kerala.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;