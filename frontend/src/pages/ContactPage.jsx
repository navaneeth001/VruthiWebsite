import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for contacting us! Our team will reach out to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: '39/2475-B1, LR Towers, SJRRA 104, South Janatha Road, Palarivattom, Kochi, Kerala 682025, India',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8139933683',
      link: 'tel:+918139933683'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'neowasteinnovationpvtltd@gmail.com',
      link: 'mailto:neowasteinnovationpvtltd@gmail.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Saturday: 8:00 AM - 6:00 PM',
      link: null
    }
  ];

  const faqs = [
    {
      question: 'How do I schedule a pickup?',
      answer: 'Download the Vruthi mobile app, create an account, and schedule your pickup with just a few taps. You can choose immediate or scheduled collection.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We currently serve Kochi and surrounding areas. We are expanding to other cities in Kerala and South India soon.'
    },
    {
      question: 'What types of waste do you collect?',
      answer: 'We collect all types of waste including household waste, recyclables, organic waste, plastic, and e-waste through segregated collection.'
    },
    {
      question: 'How does the pricing work?',
      answer: 'We offer flexible subscription plans starting from ₹300/month for individuals, with custom pricing for apartments and commercial establishments.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Make Waste Management <span className="text-gradient-primary">Smart</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Have questions or ready to get started? We're here to help you create a cleaner, sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-border/50 bg-card animate-fadeInUp">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
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
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
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
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fadeInUp delay-200">
              <Card className="p-8 border-border/50 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-primary hover:text-primary-dark transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground leading-relaxed">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-border/50 bg-gradient-hero">
                <h3 className="text-lg font-bold text-foreground mb-4">Download Vruthi App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get started with waste management right from your phone.
                </p>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2"></span>
                    Download on App Store
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <span className="mr-2"></span>
                    Get it on Google Play
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 bg-card hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container-custom">
          <Card className="overflow-hidden border-border/50">
            <div className="bg-muted/50 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Visit Our Office</p>
                <p className="text-sm text-muted-foreground">39/2475-B1, LR Towers, Palarivattom, Kochi</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;