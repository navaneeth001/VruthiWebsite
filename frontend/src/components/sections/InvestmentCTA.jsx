import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, TrendingUp, DollarSign, Target } from 'lucide-react';
import { toast } from 'sonner';

export const InvestmentCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Thank you for your interest! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  const investmentHighlights = [
    {
      icon: DollarSign,
      title: '₹75L Seed Round',
      description: 'Initial capital for pilot, expansion, and operations'
    },
    {
      icon: TrendingUp,
      title: '₹29Cr Revenue (Y5)',
      description: '45x revenue growth over 5 years'
    },
    {
      icon: Target,
      title: 'Break-even in Year 2',
      description: 'Quick path to profitability with subscription model'
    }
  ];

  return (
    <section id="investment" className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Investment Opportunity
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Join Us in Building a <span className="text-gradient-primary">Sustainable Future</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partner with us to revolutionize India\'s waste management sector and create lasting environmental and social impact.
          </p>
        </div>

        {/* Investment highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {investmentHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-6 text-center border-border/50 bg-card hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact form and info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="p-8 border-border/50 bg-card animate-fadeInUp">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Company or Investment Firm"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your investment interest..."
                  rows={4}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact info */}
          <div className="space-y-6 animate-fadeInUp delay-200">
            <Card className="p-8 border-border/50 bg-gradient-hero">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Office Address</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      39/2475-B1, LR Towers, SJRRA 104,<br />
                      South Janatha Road, Palarivattom,<br />
                      Kochi, Kerala 682025, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:neowasteinnovationpvtltd@gmail.com"
                      className="text-sm text-primary hover:text-primary-dark transition-colors"
                    >
                      neowasteinnovationpvtltd@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a
                      href="tel:+918139933683"
                      className="text-sm text-primary hover:text-primary-dark transition-colors"
                    >
                      +91 8139933683
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/50 bg-card">
              <h3 className="text-lg font-bold text-foreground mb-4">Investment Documents</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" download>
                    <span className="mr-2">📄</span>
                    Pitch Deck (PDF)
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" download>
                    <span className="mr-2">📊</span>
                    Financial Projections (PDF)
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="#" download>
                    <span className="mr-2">📝</span>
                    Investor Proposal (PDF)
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;