import { SiGithub, SiFacebook } from "react-icons/si";
import { Linkedin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10 py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#ff3355]/40 via-[#1f6fff]/40 to-[#ff3355]/40" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-black font-mono tracking-tight">
              <span className="text-[#ff3355]">&lt;</span>
              <span className="text-white">OMON_DEVs</span>
              <span className="text-[#1f6fff]">/&gt;</span>
            </a>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Building Modern Digital Solutions That Grow Businesses
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61590586166938" target="_blank" rel="noopener noreferrer" data-testid="link-footer-facebook" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
              <SiFacebook className="w-4 h-4" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-github" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
              <SiGithub className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-linkedin" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-gray-500">
          &copy; 2025 OMON_DEVs. All rights reserved. Built by Dev Malik.
        </div>
      </div>
    </footer>
  );
}
