import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Dōjō", to: "/", hash: "" },
  { label: "Hermandad", to: "/", hash: "about" },
  { label: "Guerreros", to: "/", hash: "members" },
  { label: "Arena", to: "/", hash: "tournaments" },
  { label: "Pergaminos", to: "/", hash: "news" },
  { label: "Alistarse", to: "/", hash: "join" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-blood/20 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center border border-blood/60 bg-blood/10 transition-all group-hover:bg-blood/30 group-hover:shadow-blood-sm">
            <span className="font-display text-sm font-bold text-blood">侍</span>
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-[0.4em] text-foreground">
            SAMURAI<span className="text-blood">-BS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.hash ? `#${l.hash}` : "/"}
              className="group relative font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-blood transition-all duration-300 group-hover:w-full group-hover:shadow-blood-sm" />
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="hidden md:inline-flex items-center justify-center border border-blood bg-blood/10 px-5 py-2 font-display text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-blood/30 hover:shadow-blood-sm"
        >
          Alistarse
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-blood/40 md:hidden"
        >
          <span className={`h-px w-5 bg-blood transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-blood transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-blood transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-blood/20 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.hash ? `#${l.hash}` : "/"}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 font-display text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-blood"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
