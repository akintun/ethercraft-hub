import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending } = useConnect();
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="glow-cyan"
                    disabled={isPending}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    {isPending ? 'Connecting...' : 'Connect Wallet'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass w-56">
                  {connectors.map((connector) => (
                    <DropdownMenuItem
                      key={connector.id}
                      onClick={() => connect({ connector })}
                      className="cursor-pointer"
                    >
                      {connector.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="glass-hover">
                    <Wallet className="mr-2 h-4 w-4" />
                    {truncateAddress(address!)}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass w-56">
                  <div className="px-2 py-1.5 text-sm">
                    <p className="text-muted-foreground">Network</p>
                    <p className="font-medium">{chain?.name || 'Unknown'}</p>
                  </div>
                  <DropdownMenuSeparator />
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
              <div className="space-y-2">
                {connectors.map((connector) => (
                  <Button
                    key={connector.id}
                    onClick={() => {
                      connect({ connector });
                      setMobileMenuOpen(false);
                    }}
                    variant="default"
                    className="w-full glow-cyan"
                    disabled={isPending}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    {connector.name}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="p-3 glass rounded-lg text-sm">
                  <p className="text-muted-foreground">Connected</p>
                  <p className="font-medium">{truncateAddress(address!)}</p>
                  <p className="text-muted-foreground mt-1">{chain?.name}</p>
                </div>
                <Button
                  onClick={() => {
                    disconnect();
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Disconnect
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
