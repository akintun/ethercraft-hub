import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Play. Earn. Own.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Enter a world where your gaming skills translate to real rewards. 
            Battle, collect, and trade NFT heroes in the ultimate Web3 gaming experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg">
              Play Now
            </Button>
            <Button variant="heroSecondary" size="lg">
              Read Whitepaper
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Active Players', value: '50K+' },
            { label: 'NFTs Traded', value: '$2M+' },
            { label: 'Daily Rewards', value: '$50K+' },
            { label: 'Community', value: '100K+' },
          ].map((stat, index) => (
            <div key={index} className="glass-hover rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
