

---

# CryptoQuest - A Web3 Play-to-Earn Gaming Hub

CryptoQuest is a visually stunning and responsive landing page for a modern Web3 Play-to-Earn (P2E) game. It's designed to attract and inform potential players about the game's core features, NFT ecosystem, development roadmap, and community channels.

Built with a professional, cutting-edge tech stack, this project showcases a "game-first" aesthetic, combining a dark, neon-infused theme with glassmorphism effects and fluid animations to create an immersive user experience.

 
*(Note: Replace with an actual screenshot of the project)*

---

## ✨ Key Features

*   **Visually Immersive Design:** A dark, gaming-centric theme with neon highlights, gradient effects, and glassmorphism UI elements to create a premium feel.
*   **Fluid Animations:** Smooth and engaging animations powered by **Framer Motion** for section transitions, card hovers, and interactive elements.
*   **Fully Responsive:** A mobile-first design that looks and functions beautifully on all devices, from desktops to smartphones.
*   **Component-Driven Sections:** The page is built with modular components for each key area:
    *   **Hero Section:** An impactful, full-screen introduction with animated stats.
    *   **Gameplay Features:** Highlights the core mechanics of the game.
    *   **NFT Showcase:** An interactive carousel to display the game's NFT characters and assets.
    *   **P2E Explanation:** A clear visual breakdown of the "Play-to-Earn" loop.
    *   **Interactive Roadmap:** A vertical timeline that visualizes the project's past, present, and future milestones.
*   **Web3 Wallet Integration:** Includes a functional wallet connection flow using **`wagmi`** and a provider-agnostic dropdown, allowing users to connect with wallets like MetaMask and WalletConnect.
*   **Mocked Contract Hooks:** Custom React hooks (`useGameToken`, `useNFTMarketplace`) are set up to demonstrate how the frontend would interact with real smart contracts for token balances and NFT listings.

---

## 🛠️ Technology Stack

This project is built with a modern and robust technology stack, emphasizing performance, developer experience, and scalability.

| Category          | Technology                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Framework**     | [**React**](https://react.dev/) with [**Vite**](https://vitejs.dev/)                                          |
| **Language**      | [**TypeScript**](https://www.typescriptlang.org/)                                                           |
| **Styling**       | [**Tailwind CSS**](https://tailwindcss.com/)                                                                 |
| **UI Components** | [**shadcn/ui**](https://ui.shadcn.com/) (built on Radix UI & Lucide React)                                    |
| **Animations**    | [**Framer Motion**](https://www.framer.com/motion/)                                                         |
| **Web3**          | [**`wagmi`**](https://wagmi.sh/) & [**`viem`**](https://viem.sh/) for wallet connection and blockchain interaction |
| **Routing**       | [**React Router DOM**](https://reactrouter.com/)                                                            |
| **Linting**       | **ESLint** & **TypeScript-ESLint**                                                                          |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18.x or later recommended) and an `npm`-compatible package manager installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/akintun-ethercraft-hub.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd akintun-ethercraft-hub
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add your WalletConnect `projectId`.
    ```env
    VITE_WAGMI_PROJECT_ID="YOUR_PROJECT_ID_HERE"
    ```
    *You can get a `projectId` from [WalletConnect Cloud](https://cloud.walletconnect.com/).*

### Running the Application

Once the dependencies are installed, you can run the development server:

```sh
npm run dev
```

This will start the Vite development server, and you can view the application at `http://localhost:8080` (or another port if 8080 is in use).

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`: Runs the app in development mode with hot-reloading.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files using ESLint for code quality and errors.
*   `npm run preview`: Serves the production build locally to preview it before deployment.

---

## 📂 Project Structure

The codebase is organized with a clear and scalable structure to ensure maintainability.

```
akintun-ethercraft-hub/
├── public/                # Static assets
└── src/
    ├── assets/            # Images and other static assets
    ├── components/
    │   ├── layout/        # Navbar, Footer
    │   ├── sections/      # Major landing page sections (Hero, Roadmap, etc.)
    │   └── ui/            # Core UI components from shadcn/ui
    ├── config/            # Configuration files (wagmi, contracts)
    ├── hooks/             # Custom React hooks for Web3 and UI logic
    ├── lib/               # Utility functions
    ├── pages/             # Top-level page components
    ├── App.tsx            # Main application component with routing
    └── main.tsx           # Application entry point
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
