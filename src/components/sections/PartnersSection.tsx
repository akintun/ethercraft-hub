import { motion } from 'framer-motion';

const partners = [
  { name: 'Binance', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
  { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
  { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
  { name: 'Uniswap', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
  { name: 'Aave', logo: 'https://cryptologos.cc/logos/aave-aave-logo.png' },
];

export const PartnersSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed By Industry Leaders</h2>
          <p className="text-muted-foreground">
            Trusted by the biggest names in blockchain and gaming
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
