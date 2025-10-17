import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Loader2 } from 'lucide-react';

const roadmapData = [
  {
    phase: 'Q4 2023',
    title: 'Foundation',
    status: 'Completed',
    items: [
      'Smart contract development',
      'Core game mechanics',
      'NFT collection design',
      'Community building',
    ],
  },
  {
    phase: 'Q1 2024',
    title: 'Alpha Launch',
    status: 'Completed',
    items: [
      'Alpha testing with 1000 players',
      'Marketplace integration',
      'First tournament series',
      'Mobile app beta',
    ],
  },
  {
    phase: 'Q2 2024',
    title: 'Public Beta',
    status: 'In Progress',
    items: [
      'Public beta access',
      'Guild system launch',
      'Cross-chain integration',
      'Enhanced rewards program',
    ],
  },
  {
    phase: 'Q3 2024',
    title: 'Full Launch',
    status: 'Planned',
    items: [
      'Official game launch',
      'Esports tournaments',
      'Land ownership system',
      'Creator tools release',
    ],
  },
  {
    phase: 'Q4 2024',
    title: 'Expansion',
    status: 'Planned',
    items: [
      'New game modes',
      'Additional NFT collections',
      'Mobile optimization',
      'Global partnerships',
    ],
  },
];

const statusConfig = {
  Completed: {
    icon: CheckCircle2,
    color: 'text-primary',
    bgColor: 'bg-primary/20',
  },
  'In Progress': {
    icon: Loader2,
    color: 'text-secondary',
    bgColor: 'bg-secondary/20',
  },
  Planned: {
    icon: Circle,
    color: 'text-muted-foreground',
    bgColor: 'bg-muted',
  },
};

export const Roadmap = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building the future of Web3 gaming, one milestone at a time
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapData.map((item, index) => {
              const config = statusConfig[item.status as keyof typeof statusConfig];
              const Icon = config.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <div className="glass-hover rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">{item.phase}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${config.bgColor} ${config.color}`}>
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.items.map((deliverable, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full ${config.bgColor} flex items-center justify-center border-4 border-background`}>
                      <Icon className={`h-8 w-8 ${config.color} ${item.status === 'In Progress' ? 'animate-spin' : ''}`} />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
