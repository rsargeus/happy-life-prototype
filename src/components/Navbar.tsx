import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          WebinarPro
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#webinars" className="text-foreground/80 hover:text-foreground transition-colors">
            Webinars
          </a>
          <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Priser
          </a>
          <Link to="/login">
            <Button variant="ghost">Logga in</Button>
          </Link>
          <Link to="/login">
            <Button>Kom igång</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
