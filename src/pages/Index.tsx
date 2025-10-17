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
        <section id="game">
          <GameplayFeatures />
        </section>
        <P2EExplanation />
        <section id="marketplace">
          <NFTShowcase />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
      </main>
      <section id="community">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
