import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, polygon, polygonMumbai } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

// Reown/WalletConnect Project ID
// Get yours at: https://cloud.reown.com
const projectId = 'YOUR_REOWN_PROJECT_ID';

export const config = createConfig({
  chains: [mainnet, sepolia, polygon, polygonMumbai],
  connectors: [
    injected(),
    walletConnect({ 
      projectId,
      showQrModal: true,
      metadata: {
        name: 'CryptoQuest',
        description: 'Play-to-Earn Web3 Game',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        icons: ['https://avatars.githubusercontent.com/u/37784886']
      }
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
