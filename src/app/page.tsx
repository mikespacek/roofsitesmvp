"use client";
import { useRouter } from "next/navigation";

const templates = [
  {
    id: "classic",
    title: "Classic Template",
    desc: "Timeless, trusted, and clean. Perfect for established roofers.",
    color: "from-gray-100 to-gray-300",
  },
  {
    id: "modern",
    title: "Modern Template",
    desc: "Sleek, minimal, and mobile-first. Stand out from the competition.",
    color: "from-blue-100 to-blue-300",
  },
  {
    id: "bold",
    title: "Bold Template",
    desc: "Eye-catching, high-contrast, and conversion-focused.",
    color: "from-yellow-100 to-yellow-300",
  },
];

const testimonials = [
  {
    name: "Mike S.",
    company: "Skyline Roofing",
    quote: "I had a beautiful site live in 10 minutes. My customers love it!",
  },
  {
    name: "Sarah J.",
    company: "Precision Exteriors",
    quote: "Easiest website builder I've ever used. Looks super professional.",
  },
  {
    name: "Luis R.",
    company: "Top Ridge Roofing",
    quote: "The template options are stunning. I booked 3 jobs my first week!",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-28 pb-20 px-4 relative overflow-hidden">
        {/* Animated SVG background */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-20 animate-pulse pointer-events-none" viewBox="0 0 1440 320"><defs><radialGradient id="appleGradient" cx="50%" cy="50%" r="80%"><stop offset="0%" stopColor="#e0e7ef" /><stop offset="100%" stopColor="#c7d2fe" /></radialGradient></defs><ellipse cx="720" cy="160" rx="900" ry="180" fill="url(#appleGradient)" /></svg>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 drop-shadow mb-6 relative z-10 tracking-tight leading-tight animate-fade-in-up">Effortless Websites for Roofers</h1>
        <p className="text-2xl sm:text-2xl text-gray-700 max-w-2xl mx-auto mb-10 relative z-10 animate-fade-in-up delay-100">Launch a stunning, professional site in minutes. No code. No hassle. Just results.</p>
        <button
          onClick={() => router.push("/templates")}
          className="relative z-10 px-12 py-4 bg-black hover:bg-gray-900 text-white text-xl font-bold rounded-full shadow-xl transition-all duration-200 animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Get Started
        </button>
        {/* Device mockup SVG */}
        <div className="mt-16 relative z-10 animate-float">
          <svg className="mx-auto" width="340" height="220" viewBox="0 0 340 220" fill="none"><rect x="10" y="10" width="320" height="200" rx="24" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/><rect x="30" y="40" width="280" height="40" rx="8" fill="#f3f4f6"/><rect x="30" y="90" width="180" height="20" rx="6" fill="#dbeafe"/><rect x="30" y="120" width="120" height="16" rx="6" fill="#fbbf24"/><rect x="30" y="150" width="220" height="12" rx="6" fill="#e5e7eb"/></svg>
        </div>
      </section>

      {/* Trusted By Bar */}
      <section className="py-4 bg-gradient-to-r from-gray-100 to-blue-50 border-y border-gray-200 flex justify-center items-center gap-8">
        <span className="text-gray-500 text-lg font-medium tracking-wide">Trusted by roofers across the US</span>
        <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb" /><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">R</text></svg>
        <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#fbbf24" /><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">P</text></svg>
        <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#0ea5e9" /><text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">S</text></svg>
      </section>

      {/* Template Previews */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 tracking-tight">Choose Your Look</h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className={`group bg-gradient-to-br ${tpl.color} border border-gray-200 rounded-3xl shadow-xl p-8 w-80 transition-transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer relative overflow-hidden`}
            >
              <div className="w-full h-40 bg-white rounded-xl mb-6 flex items-center justify-center shadow-inner relative">
                <svg width="100" height="60" viewBox="0 0 100 60"><rect width="100" height="60" rx="12" fill="#f3f4f6" /><rect x="16" y="16" width="68" height="10" rx="3" fill="#2563eb" /><rect x="16" y="34" width="40" height="6" rx="2" fill="#fbbf24" /></svg>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">View Demo</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{tpl.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{tpl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 tracking-tight">How It Works</h2>
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold shadow-lg">1</div>
            <p className="text-gray-900 font-semibold mb-2">Pick a Template</p>
            <p className="text-gray-700 text-sm">Choose from modern, classic, or bold designs made for roofers.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold shadow-lg">2</div>
            <p className="text-gray-900 font-semibold mb-2">Add Your Info</p>
            <p className="text-gray-700 text-sm">Enter your business details—no tech skills needed.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold shadow-lg">3</div>
            <p className="text-gray-900 font-semibold mb-2">Launch Instantly</p>
            <p className="text-gray-700 text-sm">Get a live, hosted site at a unique link—ready to share.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 tracking-tight">What Roofers Are Saying</h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-100 to-blue-50 border border-gray-200 rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center text-center animate-fade-in-up">
              <svg width="48" height="48" fill="none" className="mb-4"><circle cx="24" cy="24" r="24" fill="#2563eb" /><text x="24" y="32" textAnchor="middle" fontSize="24" fill="#fff" fontWeight="bold">"</text></svg>
              <p className="text-lg text-gray-800 mb-4">{t.quote}</p>
              <div className="text-gray-700 font-semibold">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Get Started Button */}
      <button
        onClick={() => router.push("/templates")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-black hover:bg-gray-900 text-white text-lg font-bold rounded-full shadow-2xl z-50 animate-bounce"
        style={{ minWidth: 220 }}
      >
        Get Started
      </button>
    </div>
  );
}
