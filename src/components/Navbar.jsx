import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/90 shadow-lg shadow-indigo-600/30">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight">Spacy</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
          <a href="#suites" className="text-sm text-white/80 transition hover:text-white">Suites</a>
          <a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a href="#book" className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow hover:bg-white/90">Book now</a>
        </div>
        <button aria-label="Open menu" className="md:hidden rounded-md p-2 hover:bg-white/5" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-sm text-white/90" onClick={() => setOpen(false)}>Features</a>
            <a href="#suites" className="text-sm text-white/90" onClick={() => setOpen(false)}>Suites</a>
            <a href="#pricing" className="text-sm text-white/90" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#contact" className="text-sm text-white/90" onClick={() => setOpen(false)}>Contact</a>
            <a href="#book" className="mt-2 rounded-full bg-white text-black px-4 py-2 text-center text-sm font-medium" onClick={() => setOpen(false)}>Book now</a>
          </div>
        </div>
      )}
    </header>
  );
}
