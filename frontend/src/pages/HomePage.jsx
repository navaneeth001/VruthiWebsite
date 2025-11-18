import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ImpactStats from '@/components/sections/ImpactStats';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorks from '@/components/sections/HowItWorks';
import TechnologySection from '@/components/sections/TechnologySection';
import MarketOpportunity from '@/components/sections/MarketOpportunity';
import SocialImpact from '@/components/sections/SocialImpact';
import TeamSection from '@/components/sections/TeamSection';
import TractionSection from '@/components/sections/TractionSection';
import InvestmentCTA from '@/components/sections/InvestmentCTA';
import Footer from '@/components/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactStats />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <TechnologySection />
        <MarketOpportunity />
        <SocialImpact />
        <TeamSection />
        <TractionSection />
        <InvestmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;