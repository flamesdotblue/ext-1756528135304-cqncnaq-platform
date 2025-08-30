import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white antialiased">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="0.5">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 120 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 1600} cy={Math.random() * 1600} r={Math.random() * 1.5 + 0.2} fill="url(#g)" />
          ))}
        </svg>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-transparent to-black/60" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
