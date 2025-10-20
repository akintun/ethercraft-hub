import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, polygon, polygonMumbai } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

// Your WalletConnect Cloud project ID
const projectId = import.meta.env.VITE_WAGMI_PROJECT_ID;

if (!projectId) {
  throw new Error("VITE_WAGMI_PROJECT_ID is not set in the environment variables. Please add it to your .env file.");
}

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
