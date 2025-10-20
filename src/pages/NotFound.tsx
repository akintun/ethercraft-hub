import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl text-muted-foreground">Oops! The page you're looking for has ventured into the unknown.</p>
        <Button asChild variant="hero" size="lg">
          <Link to="/">
            Return to Home Base
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
