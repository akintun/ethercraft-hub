import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const P2EExplanation = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Own Your{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Game Assets
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every hero, weapon, and item is a true NFT that you own. Not locked in our game, 
              not controlled by us. <span className="text-foreground font-semibold">Yours to keep, trade, or sell.</span>
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Play & Earn</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete quests, win battles, and earn cryptocurrency rewards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Trade Freely</h4>
                  <p className="text-sm text-muted-foreground">
                    Use our marketplace or any NFT platform to trade your assets
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">True Ownership</h4>
                  <p className="text-sm text-muted-foreground">
                    Your assets remain yours even if the game shuts down
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="text-sm font-semibold">Play</p>
                </div>
                <ArrowRight className="text-primary flex-shrink-0" />
                <div className="text-center flex-1">
                  <div className="w-20 h-20 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-sm font-semibold">Earn</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-20 h-20 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">⬆️</span>
                  </div>
                  <p className="text-sm font-semibold">Upgrade</p>
                </div>
                <ArrowRight className="text-primary flex-shrink-0 rotate-180" />
                <div className="text-center flex-1">
                  <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <p className="text-sm font-semibold">Trade</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
