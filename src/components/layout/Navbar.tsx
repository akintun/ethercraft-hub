import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.png';

const navigation = [
  { name: 'Game', href: '#game' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const truncateAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Game Logo" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CryptoQuest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            {!isConnected ? (
              <Button
                onClick={() => connect({ connector: connectors[0] })}
                variant="default"
                className="glow-cyan"
              >
                Connect Wallet
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="glass-hover">
                    {truncateAddress(address!)}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass">
                  <DropdownMenuItem onClick={() => disconnect()}>
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {!isConnected ? (
              <Button
                onClick={() => {
                  connect({ connector: connectors[0] });
                  setMobileMenuOpen(false);
                }}
                variant="default"
                className="w-full glow-cyan"
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                onClick={() => {
                  disconnect();
                  setMobileMenuOpen(false);
                }}
                variant="outline"
                className="w-full"
              >
                Disconnect ({truncateAddress(address!)})
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
