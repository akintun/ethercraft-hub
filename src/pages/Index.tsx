import React, { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { LoadingSpinner } from '@/components/layout/LoadingSpinner';

// Lazy-load the sections for better performance
const PartnersSection = React.lazy(() => import('@/components/sections/PartnersSection').then(module => ({ default: module.PartnersSection })));
const GameplayFeatures = React.lazy(() => import('@/components/sections/GameplayFeatures').then(module => ({ default: module.GameplayFeatures })));
const P2EExplanation = React.lazy(() => import('@/components/sections/P2EExplanation').then(module => ({ default: module.P2EExplanation })));
const NFTShowcase = React.lazy(() => import('@/components/sections/NFTShowcase').then(module => ({ default: module.NFTShowcase })));
const Roadmap = React.lazy(() => import('@/components/sections/Roadmap').then(module => ({ default: module.Roadmap })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </main>
      <section id="community">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
