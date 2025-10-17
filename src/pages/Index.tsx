import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { GameplayFeatures } from '@/components/sections/GameplayFeatures';
import { P2EExplanation } from '@/components/sections/P2EExplanation';
import { NFTShowcase } from '@/components/sections/NFTShowcase';
import { Roadmap } from '@/components/sections/Roadmap';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <GameplayFeatures />
        <P2EExplanation />
        <NFTShowcase />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
