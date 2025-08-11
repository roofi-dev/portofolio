
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "#tentang-saya", label: "Tentang Saya" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-primary">
          <ShieldCheck className="h-7 w-7" />
          <span className="font-headline">Firdha Roofi Irawan</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" className="text-primary hover:text-primary">
            <Link href="#kontak">Hubungi Saya</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="#home" className="flex items-center gap-2 font-bold text-lg text-primary" onClick={() => setOpen(false)}>
                    <ShieldCheck className="h-7 w-7" />
                    <span className="font-headline">Firdha Roofi I.</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary" onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <Link href="#kontak" onClick={() => setOpen(false)}>Hubungi Saya</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
