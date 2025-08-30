import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pb-20 pt-10 md:pb-28 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star size={14} className="text-yellow-300" /> Voted #1 Orbital Getaway 2089
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Stay among the stars at <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Spacy</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-white/80 md:text-lg">
            Experience zero-gravity relaxation, aurora-view suites, and Michelin-rated cosmic dining aboard our luxury orbital hotel.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#book" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
              Book your orbit
            </a>
            <a href="#features" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore features
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/60">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/64?img=${i + 5}`} alt="guest" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
              ))}
            </div>
            <span className="flex items-center gap-1"><Users size={14} /> 12,000+ delighted travelers</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.8 }} className="relative w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-black shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2070&auto=format&fit=crop"
              alt="Orbiting hotel with Earth view"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                <span className="rounded-full bg-white/10 px-2 py-1">Zero-G Spa</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Aurora Lounge</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Stellar Suites</span>
                <span className="rounded-full bg-white/10 px-2 py-1">Shuttle Transfer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
