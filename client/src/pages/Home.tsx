import { useState } from "react";
import { trpc } from "@/lib/trpc";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const checkoutMutation = trpc.payment.createCheckoutSession.useMutation();

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const { sessionUrl } = await checkoutMutation.mutateAsync();
      if (sessionUrl) {
        window.location.href = sessionUrl;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-red-950 via-black to-black opacity-50 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Sticky Header */}
        <div className="fixed top-0 w-full bg-black/95 backdrop-blur border-b-2 border-red-600 z-50 px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="text-lg font-black text-red-500">🎤 WHITNEY</div>
            <div className="text-xs font-black text-white bg-red-600 px-2 py-1 rounded animate-pulse">
              ⏰ 24H
            </div>
          </div>
        </div>

        {/* Hero Section - MOBILE OPTIMIZED */}
        <section className="pt-16 pb-8 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Extreme Urgency Banner */}
            <div className="mb-6 inline-block bg-red-600 text-white px-4 py-3 rounded-full font-black text-xs animate-pulse border-2 border-red-400">
              🚨 ONLY 47 SPOTS - ENDS TONIGHT
            </div>

            {/* Main Headline - MOBILE OPTIMIZED */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              Sing<br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                "I Will Always<br />Love You"
              </span>
              <br />
              Like Whitney
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl font-bold text-gray-200 mb-6 leading-snug">
              Learn the <span className="text-red-400">EXACT techniques</span> Whitney used to create the most iconic performance ever.
            </p>

            {/* Social Proof - MOBILE OPTIMIZED */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              <div className="bg-red-600/40 border-2 border-red-600 rounded-lg p-3">
                <div className="text-2xl font-black text-red-400">12.8K</div>
                <div className="text-xs font-bold">STUDENTS</div>
              </div>
              <div className="bg-red-600/40 border-2 border-red-600 rounded-lg p-3">
                <div className="text-2xl font-black text-red-400">4.98★</div>
                <div className="text-xs font-bold">3.2K REVIEWS</div>
              </div>
              <div className="bg-red-600/40 border-2 border-red-600 rounded-lg p-3">
                <div className="text-2xl font-black text-red-400">25</div>
                <div className="text-xs font-bold">LESSONS</div>
              </div>
              <div className="bg-red-600/40 border-2 border-red-600 rounded-lg p-3">
                <div className="text-2xl font-black text-red-400">100%</div>
                <div className="text-xs font-bold">GUARANTEE</div>
              </div>
            </div>

            {/* Primary CTA - MASSIVE */}
            <button
              onClick={handlePurchase}
              disabled={isLoading || checkoutMutation.isPending}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-black py-5 px-6 rounded-xl text-xl mb-3 border-3 border-red-400 animate-pulse transform hover:scale-105 transition-all shadow-2xl shadow-red-600/50"
            >
              {isLoading || checkoutMutation.isPending ? "PROCESSING..." : "🎤 BUY NOW - $47"}
            </button>

            <p className="text-xs font-bold text-gray-300 mb-1">✅ Instant Access | ✅ Lifetime</p>
            <p className="text-xs text-gray-400">Was $97 - Today $47 (52% OFF)</p>
          </div>
        </section>

        {/* Guarantee - MOBILE OPTIMIZED */}
        <section className="px-4 pb-6">
          <div className="bg-green-900/50 border-3 border-green-500 rounded-xl p-5 text-center">
            <p className="text-lg font-black text-green-300 mb-2">
              ✅ 100% MONEY-BACK GUARANTEE
            </p>
            <p className="text-xs text-gray-300">
              30 days. No questions. We're THAT confident.
            </p>
          </div>
        </section>

        {/* Testimonials - MOBILE OPTIMIZED */}
        <section className="px-4 pb-8 bg-black/60">
          <h2 className="text-2xl font-black mb-4 text-center">Real Results</h2>
          
          <div className="space-y-3">
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-bold mb-2">"My cover went viral! 500K views!"</p>
              <p className="text-xs text-gray-400">- Maria, Brazil 🇧🇷</p>
            </div>
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-bold mb-2">"Judges stood up and cried!"</p>
              <p className="text-xs text-gray-400">- Juan, Spain 🇪🇸</p>
            </div>
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-bold mb-2">"Sound like a professional now!"</p>
              <p className="text-xs text-gray-400">- Sarah, USA 🇺🇸</p>
            </div>
          </div>
        </section>

        {/* What You'll Learn - MOBILE OPTIMIZED */}
        <section className="px-4 pb-8">
          <h2 className="text-2xl font-black mb-4 text-center">What You'll Master</h2>
          
          <div className="space-y-3">
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-2xl mb-2">🎤</p>
              <p className="font-black mb-1">Vocal Control</p>
              <p className="text-xs text-gray-300">Breathing, resonance, power</p>
            </div>
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-2xl mb-2">😭</p>
              <p className="font-black mb-1">Emotional Connection</p>
              <p className="text-xs text-gray-300">Make people FEEL your voice</p>
            </div>
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-2xl mb-2">🎵</p>
              <p className="font-black mb-1">Unique Arrangements</p>
              <p className="text-xs text-gray-300">Make songs YOUR version</p>
            </div>
            <div className="bg-red-600/30 border-2 border-red-600 rounded-lg p-4">
              <p className="text-2xl mb-2">⭐</p>
              <p className="font-black mb-1">Stage Presence</p>
              <p className="text-xs text-gray-300">Perform with confidence</p>
            </div>
          </div>
        </section>

        {/* FAQ - MOBILE OPTIMIZED */}
        <section className="px-4 pb-8 bg-black/60">
          <h2 className="text-2xl font-black mb-4 text-center">Questions?</h2>
          
          <div className="space-y-2">
            <details className="bg-red-600/30 border-2 border-red-600 rounded-lg p-3">
              <summary className="font-black text-red-400 cursor-pointer">❓ How long do I have access?</summary>
              <p className="text-xs text-gray-300 mt-2">FOREVER! Lifetime access.</p>
            </details>
            <details className="bg-red-600/30 border-2 border-red-600 rounded-lg p-3">
              <summary className="font-black text-red-400 cursor-pointer">❓ Can I download videos?</summary>
              <p className="text-xs text-gray-300 mt-2">YES! Download and watch offline.</p>
            </details>
            <details className="bg-red-600/30 border-2 border-red-600 rounded-lg p-3">
              <summary className="font-black text-red-400 cursor-pointer">❓ What if I don't like it?</summary>
              <p className="text-xs text-gray-300 mt-2">30-day money-back guarantee.</p>
            </details>
            <details className="bg-red-600/30 border-2 border-red-600 rounded-lg p-3">
              <summary className="font-black text-red-400 cursor-pointer">❓ Do I get support?</summary>
              <p className="text-xs text-gray-300 mt-2">YES! 24-hour email support.</p>
            </details>
          </div>
        </section>

        {/* Final CTA - MOBILE OPTIMIZED */}
        <section className="px-4 pb-8 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Transform?</h2>
          <p className="text-sm text-gray-300 mb-6">
            Join 12,847 singers mastering Whitney's techniques.
          </p>
          
          <button
            onClick={handlePurchase}
            disabled={isLoading || checkoutMutation.isPending}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 text-white font-black py-5 px-6 rounded-xl text-xl border-3 border-red-400 animate-pulse transform hover:scale-105 transition-all shadow-2xl shadow-red-600/50 mb-4"
          >
            {isLoading || checkoutMutation.isPending ? "PROCESSING..." : "🎤 BUY NOW - $47"}
          </button>

          <p className="text-xs font-bold text-gray-300">⏰ OFFER ENDS TONIGHT</p>
          <p className="text-xs text-gray-400">Only 47 spots left</p>
        </section>

        {/* Footer */}
        <footer className="border-t border-red-600/50 py-4 px-4 text-center text-gray-500 text-xs">
          <p>© 2025 Sing Like Whitney. All rights reserved.</p>
          <p className="mt-1">Secure Stripe Payments | 24/7 Support</p>
        </footer>
      </div>
    </div>
  );
}

