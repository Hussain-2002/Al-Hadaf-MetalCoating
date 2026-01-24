// src/components/FestiveModal.jsx
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function FestiveModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("newYear2026ModalSeen");
    if (!seen) {
      setIsOpen(true);
      sessionStorage.setItem("newYear2026ModalSeen", "true");
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full" />

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative p-8 text-center space-y-6">
          <div className="text-5xl">🎆</div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-[1.25] pb-1 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
  Happy New Year 2026
</h2>



          <p className="text-lg font-semibold text-gray-800">
            Flat <span className="text-red-600">50% OFF</span> on Metal Protection
          </p>

          <p className="text-gray-600 leading-relaxed">
            For the <strong>1st month of 2026</strong><br />
            Coat your metal for <strong>lifetime</strong> in just
            <span className="text-red-600 font-bold"> half the cost</span>.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                window.location.href = "/contact";
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all"
            >
              Claim Offer
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              Maybe Later
            </button>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            *Valid for January 2026 only
          </p>
        </div>
      </div>
    </div>
  );
}
