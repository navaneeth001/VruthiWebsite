import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { toast } from 'sonner';

export const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Vruthi</span>
                <span className="text-xs text-muted-foreground -mt-1">by Neowaste Innovation</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tech-enabled green platform disrupting waste management in India. Zero waste to landfill, maximum impact.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Solution', 'Technology', 'Market Opportunity', 'Social Impact', 'Team'].map((link) => (
                <li key={link}>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  39/2475-B1, LR Towers, SJRRA 104,<br />
                  South Janatha Road, Palarivattom,<br />
                  Kochi, Kerala 682025
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:neowasteinnovationpvtltd@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  neowasteinnovationpvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:8139933683"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8139933683
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Neowaste Innovation Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;