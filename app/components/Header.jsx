import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">U</span>
              </div>
            </div>
            <span className="text-2xl tracking-tight text-primary">
              UPPSIKT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a
              href="#tjanster"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Tjänster
            </a>
            <a
              href="#om"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Om oss
            </a>
            <a
              href="#process"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Process
            </a>
            <a
              href="#kontakt"
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-secondary transition-all shadow-lg">
              Få offert
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-primary/10">
            <a
              href="#tjanster"
              className="block text-foreground/70 hover:text-primary transition-colors"
            >
              Tjänster
            </a>
            <a
              href="#om"
              className="block text-foreground/70 hover:text-primary transition-colors"
            >
              Om oss
            </a>
            <a
              href="#process"
              className="block text-foreground/70 hover:text-primary transition-colors"
            >
              Process
            </a>
            <a
              href="#kontakt"
              className="block text-foreground/70 hover:text-primary transition-colors"
            >
              Kontakt
            </a>
            <Button className="w-full bg-primary hover:bg-secondary">
              Få offert
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
