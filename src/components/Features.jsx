import { Rocket, Star, Wifi, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Zero-Gravity Wellness',
    description: 'Float into serenity with anti-gravity yoga, hydro-pods, and a panoramic nebula sauna.',
    icon: Sparkles,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Stellar Suites',
    description: 'Floor-to-ceiling Earthrise views, adaptive beds, and smart tint windows for deep-space sleep.',
    icon: Star,
    accent: 'from-indigo-500 to-cyan-500',
  },
  {
    title: 'Hypersonic Transfers',
    description: 'Seamless shuttle service from major spaceports with concierge check-in on approach.',
    icon: Rocket,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Quantum Secure',
    description: 'End-to-end quantum encryption and biometric access for total peace of mind.',
    icon: ShieldCheck,
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Luxury reimagined for orbit</h2>
          <p className="mt-3 text-white/70">Every detail on Spacy is crafted for comfort in microgravity, wrapped in breathtaking celestial views.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-black shadow-lg shadow-black/20`}>
                <f.icon size={20} className="text-white drop-shadow" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </article>
          ))}
        </div>

        <div id="pricing" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight">Introductory orbit fares</h3>
              <p className="mt-2 max-w-xl text-white/70">Launch specials for early pioneers. Flexible rescheduling, carbon-offset transfers, and concierge planning included.</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
                <li className="flex items-center gap-2"><Wifi size={16} /> Quantum-fast Wi‑Fi</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} /> 24/7 station security</li>
                <li className="flex items-center gap-2"><Star size={16} /> Michelin-rated dining</li>
                <li className="flex items-center gap-2"><Rocket size={16} /> VIP shuttle lounge</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm text-white/60">From</div>
              <div className="mt-1 text-4xl font-semibold tracking-tight">$19,900</div>
              <div className="text-xs text-white/50">per guest • 3 nights orbit</div>
              <a href="#book" className="mt-5 block rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-black hover:bg-white/90">Reserve your window</a>
              <p className="mt-3 text-xs text-white/50">Taxes and launch fees included. Subject to orbital availability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
