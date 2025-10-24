import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Success() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");
    setSessionId(id);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Payment Successful!
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          🎉 Welcome to The Voice Secret community! Your purchase is complete.
        </p>

        {/* What's Next */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">What Happens Next?</h2>

          <div className="space-y-4 text-left">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Check Your Email</h3>
                <p className="text-gray-400">A confirmation email with your download link will arrive in the next few minutes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Download Your Pack</h3>
                <p className="text-gray-400">Get instant access to all 50+ covers analysis, the 5 Pillars Guide, and the Viral Mastery Bonus.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Start Learning</h3>
                <p className="text-gray-400">Begin with the 5 Pillars Guide and apply the techniques to your next cover.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Go Viral</h3>
                <p className="text-gray-400">Use the Viral Mastery Guide to optimize your content and reach millions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Session ID for records */}
        {sessionId && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-gray-400 mb-1">Session ID:</p>
            <p className="text-sm font-mono text-gray-300 break-all">{sessionId}</p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setLocation("/")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>
          <a
            href="https://www.youtube.com/@YourChannelName"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Visit My Channel
          </a>
        </div>

        {/* Footer Message */}
        <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-sm text-blue-300 mb-2">💡 Pro Tip:</p>
          <p className="text-gray-300">
            Share your progress on social media using #TheVoiceSecret. Tag me for a chance to be featured on the channel!
          </p>
        </div>
      </div>
    </div>
  );
}

