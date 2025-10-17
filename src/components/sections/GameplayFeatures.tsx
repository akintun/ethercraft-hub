import { motion } from 'framer-motion';
import { Sword, Trophy, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Sword,
    title: 'Epic Battles',
    description: 'Engage in real-time PvP combat with strategic depth and skill-based gameplay.',
  },
  {
    icon: Trophy,
    title: 'Earn Rewards',
    description: 'Win tournaments and daily challenges to earn crypto rewards and rare NFTs.',
  },
  {
    icon: Users,
    title: 'Guild System',
    description: 'Join forces with other players, form guilds, and dominate the leaderboards.',
  },
  {
    icon: Zap,
    title: 'Fast & Fair',
    description: 'Lightning-fast gameplay with transparent blockchain-verified matches.',
  },
];

export const GameplayFeatures = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Game First, Always
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We built a game people love to play. The blockchain enhances the experience, 
            not defines it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-hover h-full group cursor-pointer">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
