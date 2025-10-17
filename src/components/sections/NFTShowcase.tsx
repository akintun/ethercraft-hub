import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import nft1 from '@/assets/nft-1.jpg';
import nft2 from '@/assets/nft-2.jpg';
import nft3 from '@/assets/nft-3.jpg';

const nfts = [
  {
    id: 1,
    name: 'Flame Warrior',
    image: nft1,
    rarity: 'Legendary',
    price: '2.5 ETH',
  },
  {
    id: 2,
    name: 'Mystic Sorcerer',
    image: nft2,
    rarity: 'Epic',
    price: '1.8 ETH',
  },
  {
    id: 3,
    name: 'Cyber Assassin',
    image: nft3,
    rarity: 'Legendary',
    price: '3.2 ETH',
  },
  {
    id: 4,
    name: 'Shadow Hunter',
    image: nft1,
    rarity: 'Rare',
    price: '0.9 ETH',
  },
  {
    id: 5,
    name: 'Storm Mage',
    image: nft2,
    rarity: 'Epic',
    price: '1.5 ETH',
  },
];

const rarityColors: Record<string, string> = {
  Legendary: 'text-accent',
  Epic: 'text-secondary',
  Rare: 'text-primary',
};

export const NFTShowcase = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collect <span className="text-primary">Legendary</span> Heroes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Each hero is a unique NFT with special abilities and attributes. 
            Build your collection and dominate the arena.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {nfts.map((nft, index) => (
              <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-hover cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={nft.image}
                          alt={nft.name}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold glass ${
                              rarityColors[nft.rarity]
                            }`}
                          >
                            {nft.rarity}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-xl font-bold">{nft.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Price</span>
                          <span className="text-lg font-bold text-primary">{nft.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass" />
          <CarouselNext className="glass" />
        </Carousel>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};
