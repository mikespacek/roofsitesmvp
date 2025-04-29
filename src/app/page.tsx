"use client";
import { useRouter } from "next/navigation";

const templates = [
  {
    id: "classic",
    title: "Classic Template",
    desc: "Clean, trusted, and timeless. Perfect for established roofers.",
  },
  {
    id: "modern",
    title: "Modern Template",
    desc: "Sleek, bold, and mobile-first. Stand out from the competition.",
  },
  {
    id: "bold",
    title: "Bold Template",
    desc: "Eye-catching colors and big calls-to-action for fast growth.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-hidden">
        {/* Animated SVG background */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 animate-pulse" viewBox="0 0 1440 320"><path fill="#2563eb" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-900 drop-shadow mb-6 relative z-10 animate-fade-in-up">Build a Pro Roofing Website in Minutes</h1>
        <p className="text-xl sm:text-2xl text-blue-800 max-w-2xl mx-auto mb-8 relative z-10 animate-fade-in-up delay-100">No code. No hassle. Just pick a template, enter your info, and launch your site instantly—hosted for you, free.</p>
        <button
          onClick={() => router.push("/templates")}
          className="relative z-10 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-full shadow-lg transition-all duration-200 animate-bounce"
        >
          Get Started
        </button>
        {/* Roofer SVG graphic */}
        <svg className="w-40 h-40 mt-12 mx-auto animate-float" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="60" fill="#2563eb" /><rect x="30" y="70" width="60" height="20" rx="6" fill="#fff" /><rect x="45" y="40" width="30" height="30" rx="6" fill="#fbbf24" /><rect x="55" y="50" width="10" height="20" rx="3" fill="#fff" /><polygon points="60,30 40,50 80,50" fill="#1e293b" /></svg>
      </section>

      {/* Template Previews */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Choose Your Look</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {templates.map((tpl, i) => (
            <div
              key={tpl.id}
              className="group bg-blue-50 border-2 border-blue-200 rounded-2xl shadow-lg p-6 w-80 transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative"
            >
              <div className="w-full h-32 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-xl mb-4 flex items-center justify-center">
                <svg width="60" height="40" viewBox="0 0 60 40"><rect width="60" height="40" rx="8" fill="#fff" /><rect x="10" y="10" width="40" height="8" rx="2" fill="#2563eb" /><rect x="10" y="24" width="24" height="4" rx="2" fill="#fbbf24" /></svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">{tpl.title}</h3>
              <p className="text-blue-800 mb-4 text-sm">{tpl.desc}</p>
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Preview</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-100 to-cyan-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">How It Works</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">1</div>
            <p className="text-blue-900 font-semibold mb-2">Pick a Template</p>
            <p className="text-blue-800 text-sm">Choose from modern, classic, or bold designs made for roofers.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">2</div>
            <p className="text-blue-900 font-semibold mb-2">Add Your Info</p>
            <p className="text-blue-800 text-sm">Enter your business details—no tech skills needed.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">3</div>
            <p className="text-blue-900 font-semibold mb-2">Launch Instantly</p>
            <p className="text-blue-800 text-sm">Get a live, hosted site at a unique link—ready to share.</p>
          </div>
        </div>
      </section>

      {/* Sticky Get Started Button */}
      <button
        onClick={() => router.push("/templates")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold rounded-full shadow-lg z-50 animate-bounce"
        style={{ minWidth: 220 }}
      >
        Get Started
      </button>
    </div>
  );
}
