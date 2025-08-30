export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">Spacy</h4>
            <p className="mt-2 max-w-sm text-sm text-white/70">A luxury space hotel redefining travel beyond Earth. Designed for dreamers, explorers, and the beautifully curious.</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-white/80">Visit</h5>
            <p className="mt-2 text-sm text-white/70">Low Earth Orbit • Dock 7<br />Bookings: orbit@spacy.hospitality</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-white/80">Stay in the loop</h5>
            <form className="mt-2 flex gap-2">
              <input type="email" aria-label="Email address" placeholder="Email address" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/20" />
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Spacy Hospitality. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
