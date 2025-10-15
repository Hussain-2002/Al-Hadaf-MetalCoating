import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

/**
 * ========================================
 * 🎡 SPIN WHEEL COMPONENT - COMPLETE LOGIC
 * ========================================
 * 
 * ✅ FEATURES:
 * - 5 sections with alternating white/red colors
 * - Password protected (hardcoded: ALHADAF2024)
 * - Shows offer name + code after spin
 * - WhatsApp redirect with pre-filled message
 * - Fully responsive (desktop + mobile different layouts)
 * - No localStorage (React state only)
 * 
 * 🔧 HOW TO CUSTOMIZE:
 * 1. Change PASSWORD: Line 31
 * 2. Change WHATSAPP NUMBER: Line 35
 * 3. Change OFFERS: Lines 40-70
 * 
 * 📱 WORKFLOW:
 * 1. User clicks floating button → Modal opens
 * 2. Enter password → Wheel appears
 * 3. Spin wheel → Random result
 * 4. Show offer → WhatsApp redirect button
 */

const SpinWheel = ({ isOpen, onClose }) => {
  // ===== 📊 STATE MANAGEMENT =====
  const [password, setPassword] = useState(''); // User input password
  const [isUnlocked, setIsUnlocked] = useState(false); // Password correct?
  const [isSpinning, setIsSpinning] = useState(false); // Wheel spinning?
  const [rotation, setRotation] = useState(0); // Wheel rotation degrees
  const [result, setResult] = useState(null); // Winning offer
  const [hasSpun, setHasSpun] = useState(false); // Already spun once?

  // ===== 🔐 HARDCODED PASSWORD =====
  // CUSTOMIZE: Change password here
  const CORRECT_PASSWORD = 'ALHADAF2024';

  // ===== 📱 ADMIN WHATSAPP NUMBER =====
  // CUSTOMIZE: Replace with actual admin WhatsApp (with country code, no + or spaces)
  const ADMIN_WHATSAPP = '+971585328151'; // Example: 919876543210

  // ===== 🎁 OFFERS CONFIGURATION =====
  // CUSTOMIZE: Change offer names, codes, or add more offers
  // NOTE: Colors alternate automatically (white, red, white, red...)
  const offers = [
    { 
      id: 1, 
      name: '20% OFF', 
      code: 'SAVE20', 
      color: '#ffffff', // White
      textColor: '#000000' 
    },
    { 
      id: 2, 
      name: 'FREE Coating', 
      code: 'FREECOAT', 
      color: '#ef4444', // Red
      textColor: '#000000' 
    },
    { 
      id: 3, 
      name: '₹500 Cashback', 
      code: 'CASH500', 
      color: '#ffffff', // White
      textColor: '#000000' 
    },
    { 
      id: 4, 
      name: 'Buy 1 Get 1', 
      code: 'BOGO2024', 
      color: '#ef4444', // Red
      textColor: '#000000' 
    },
    { 
      id: 5, 
      name: '30% OFF', 
      code: 'MEGA30', 
      color: '#ffffff', // White
      textColor: '#000000' 
    }
  ];

  // ===== 🔄 RESET ON MODAL CLOSE =====
  // WHY: Fresh start when user reopens
  useEffect(() => {
    if (!isOpen) {
      setPassword('');
      setIsUnlocked(false);
      setIsSpinning(false);
      setResult(null);
      setHasSpun(false);
      setRotation(0);
    }
  }, [isOpen]);

  // ===== ✅ PASSWORD VERIFICATION =====
  const handlePasswordSubmit = () => {
    if (password.toUpperCase() === CORRECT_PASSWORD) {
      setIsUnlocked(true);
    } else {
      alert('❌ Wrong password! Contact admin for correct password.');
      setPassword('');
    }
  };

  // Handle Enter key in password input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  // ===== 🎡 SPIN WHEEL LOGIC =====
  /**
   * CALCULATION EXPLAINED:
   * 1. Each section = 360° / 5 = 72°
   * 2. Random spins = 5-10 full rotations (1800°-3600°)
   * 3. Random landing = 0-360°
   * 4. Total rotation = (full rotations × 360) + random degrees
   * 5. After spin ends, calculate which section pointer landed on
   */
  const handleSpin = () => {
    if (isSpinning || hasSpun) return; // Prevent double spin

    setIsSpinning(true);

    // Random rotation calculation
    const minSpins = 5;
    const maxSpins = 10;
    const randomSpins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = (randomSpins * 360) + randomDegree;

    setRotation(rotation + totalRotation);

    // Show result after 4 seconds (spin duration)
    setTimeout(() => {
      const normalizedRotation = (rotation + totalRotation) % 360;
      const sectionDegree = 360 / offers.length;
      const winningIndex = Math.floor((360 - normalizedRotation) / sectionDegree) % offers.length;
      
      setResult(offers[winningIndex]);
      setIsSpinning(false);
      setHasSpun(true);
    }, 4000);
  };

  // ===== 📱 WHATSAPP REDIRECT =====
  const handleWhatsAppRedirect = () => {
    if (!result) return;

    const message = `Hi! I won an offer from the Spin Wheel!\n\nOffer: ${result.name}\nCode: ${result.code}\n\nI would like to avail this offer on my next purchase.`;
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Don't render if modal closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        
        {/* ===== ❌ CLOSE BUTTON ===== */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* ===== 🔐 PASSWORD SCREEN ===== */}
        {!isUnlocked ? (
          <div className="p-8 text-center">
            <div className="mb-6">
              <Gift className="w-16 h-16 mx-auto text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                🎁 Spin & Win!
              </h2>
              <p className="text-gray-600">
                Enter your exclusive password to unlock the wheel
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter Password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-center text-lg font-semibold"
                autoFocus
              />
              <button
                onClick={handlePasswordSubmit}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors"
              >
                UNLOCK WHEEL
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              💡 Password is provided after service purchase
            </p>
          </div>
        ) : (
          /* ===== 🎡 SPIN WHEEL SCREEN ===== */
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              🎯 Spin the Wheel!
            </h2>

            {/* Wheel Container */}
            <div className="relative mx-auto mb-6" style={{ width: '280px', height: '280px' }}>
              
              {/* Top Pointer (Arrow) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-yellow-400"></div>
              </div>

              {/* Spinning Wheel */}
              <div
                className="w-full h-full rounded-full border-8 border-gray-800 overflow-hidden relative"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
                  backgroundColor: '#f3f4f6'
                }}
              >
                {/* Wheel Sections */}
                {offers.map((offer, index) => {
                  const sectionDegree = 360 / offers.length; // 72°
                  const startAngle = index * sectionDegree;
                  const midAngle = startAngle + sectionDegree / 2;
                  
                  return (
                    <div
                      key={offer.id}
                      className="absolute inset-0"
                      style={{
                        clipPath: `polygon(
                          50% 50%,
                          ${50 + 50 * Math.sin((startAngle * Math.PI) / 180)}% ${50 - 50 * Math.cos((startAngle * Math.PI) / 180)}%,
                          ${50 + 50 * Math.sin(((startAngle + sectionDegree) * Math.PI) / 180)}% ${50 - 50 * Math.cos(((startAngle + sectionDegree) * Math.PI) / 180)}%
                        )`,
                        backgroundColor: offer.color,
                      }}
                    >
                      {/* Offer Text */}
                      <div
                        className="absolute font-bold text-sm"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${midAngle}deg) translateY(-70px)`,
                          color: offer.textColor,
                          textAlign: 'center',
                          width: '60px'
                        }}
                      >
                        {offer.name}
                      </div>
                    </div>
                  );
                })}

                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full border-4 border-gray-800 flex items-center justify-center font-bold text-sm shadow-lg">
                  SPIN
                </div>
              </div>
            </div>

            {/* Spin Button */}
            {!hasSpun && (
              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  isSpinning
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg'
                }`}
              >
                {isSpinning ? '🎡 SPINNING...' : '🎯 SPIN NOW!'}
              </button>
            )}

            {/* ===== 🎉 RESULT SCREEN ===== */}
            {hasSpun && result && (
              <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-500">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    🎉 Congratulations!
                  </h3>
                  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <p className="text-3xl font-bold text-gray-900 mb-2">
                      {result.name}
                    </p>
                    <p className="text-sm text-gray-600">Your Offer Code:</p>
                    <p className="text-2xl font-mono font-bold text-red-600 bg-yellow-100 px-4 py-2 rounded-lg inline-block mt-2">
                      {result.code}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-base hover:bg-green-700 transition-colors shadow-lg"
                >
                  <span className="block text-lg font-extrabold">📱 SEND YOUR NAME, SERVICE & CODE</span>
                  <span className="block text-sm font-normal mt-1">to avail this offer on next purchase with Al Hadaf Metal Coating</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinWheel;