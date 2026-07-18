import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-semibold">
                E
              </span>
              <span className="font-display text-lg font-semibold">Ecomtik</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A Dubai-based brand builder and Amazon growth agency helping ambitious
              consumer brands scale profitably across global marketplaces.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Business Bay, Dubai, UAE</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@ecomtik.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Follow
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ecomtik FZ-LLC. All rights reserved.</p>
          <p>Dubai · Riyadh · London</p>
        </div>
      </div>
    </footer>
  );
}
