import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';

export const TeamSection = () => {
  const team = [
    {
      name: 'Ajith Edathodi',
      role: 'CEO & Co-Founder',
      education: 'BBM',
      experience: '13 years in telesales industry',
      description: 'Visionary leader with extensive experience in business development and strategic partnerships.',
      initials: 'AE',
      image: 'assets/team/ajith.jpg'
    },
    {
      name: 'Chittur Srilalan Rajashree',
      role: 'COO & Co-Founder',
      education: 'B.Sc., MA, B.Ed., MBA',
      experience: 'Software Engineer (Singapore), VP-Placements',
      description: 'Operations expert with diverse background in technology and management.',
      initials: 'CR',
      image: 'assets/team/rajasree.jpg'
    },
    {
      name: 'Navaneeth',
      role: 'CTO & Co-Founder',
      education: 'B.Tech (Applied Electronics), MBA',
      experience: 'Bosch India, Honeywell',
      description: 'Technology leader with experience at leading tech companies building scalable systems.',
      initials: 'NV',
      image: 'assets/team/navaneeth.jpg'
    },
    {
      name: 'Parthiv Kanhan',
      role: 'CMO & Co-Founder',
      education: 'Creative Arts & Digital Marketing',
      experience: 'Award-winning Digital Marketing Head & Creative Director',
      description: 'Specialist in visual storytelling, ad film conceptualization, and end-to-end digital strategies for global brands.',
      initials: 'PK',
      image: 'assets/team/parthiv.jpg',
      linkedin: 'https://www.linkedin.com/in/parthiv-kanhan-754895260/'
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Leadership Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-primary">Visionaries</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experienced leaders bringing together expertise in business, operations, and technology to revolutionize waste management.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 hover-lift border-border/50 bg-card animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
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

              {/* Details */}
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

              {/* LinkedIn */}
              <div className="mt-6 pt-6 border-t border-border/50">
                {member.linkedin ? (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                ) : (
                  <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary-dark transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </button>
                )}
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
                <span className="font-semibold text-foreground">Ajith Edathodi</span>, CEO & Co-Founder
              </footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;