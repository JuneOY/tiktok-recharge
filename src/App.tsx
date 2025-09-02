"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CoinPackage {
  coins: number
  price: number
  originalPrice?: number
}

const coinPackages: CoinPackage[] = [
  { coins: 20, price: 0.21 },
  { coins: 70, price: 0.74 },
  { coins: 350, price: 3.71 },
  { coins: 700, price: 7.42 },
  { coins: 1400, price: 14.84 },
  { coins: 3500, price: 37.1 },
  { coins: 7000, price: 74.2 },
  { coins: 17500, price: 185.5 },
]

const COIN_TO_USD_RATE = 0.0106

export default function RechargePage() {
  const [selectedPackage, setSelectedPackage] = useState<CoinPackage | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePackageSelect = (pkg: CoinPackage) => {
    setSelectedPackage(pkg)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedPackage(null) // Clear package selection when using custom input
  }

  const handleRecharge = async () => {
    if (!selectedPackage && !customAmount) return

    setIsProcessing(true)

    // Random delay between 1-2 seconds
    const delay = Math.random() * 1000 + 1000

    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, delay)
  }

  const totalPrice = selectedPackage
    ? selectedPackage.price
    : customAmount
      ? Number.parseFloat(customAmount) * COIN_TO_USD_RATE
      : 0

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="p-8 text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Completed</h2>
          <p className="text-gray-600 text-sm mb-20">Your coins have been added to your account</p>
          <Button
            onClick={() => {
              setShowSuccess(false)
              setSelectedPackage(null)
              setCustomAmount("")
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white h-16 w-40"
          >
            Go back
          </Button>
        </div>
      </div>
    )
  }

  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-8 flex flex-col items-center">
        <div className="tiktok">
          <div className="loading">
            <svg preserveAspectRatio="none" viewBox="0 0 160 90" width="160" height="90">
              <defs>
                <mask id="redhole">
                  <rect width="100%" height="100%" fill="white"></rect>
                  <circle fill="black" className="loading-red loading-black"></circle>
                </mask>
                <mask id="greenhole">
                  <rect width="100%" height="100%" fill="white"></rect>
                  <circle fill="black" className="loading-green loading-black"></circle>
                </mask>
              </defs>
              <circle className="loading-green" mask="url(#redhole)"></circle>
              <circle className="loading-red" mask="url(#greenhole)"></circle>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .tiktok {
          width: 48px;
          height: 48px;
        }
  
        .loading {
          display: flex;
          width: 200px;
          height: 200px;
          align-items: center;
          transform: scale(0.24);
          transform-origin: 0 0;
        }
  
        .loading-black {
          fill: #000 !important;
        }
  
        .loading-red {
          fill: #fe2c55;
          stroke-width: 0;
          r: 36px;
          cx: 120px;
          cy: 44px;
          animation: tiktok-red 1s cubic-bezier(0.05,0,1,1) infinite;
        }
  
        .loading-green {
          fill: #3af2ff;
          stroke-width: 0;
          r: 36px;
          cx: 40px;
          cy: 44px;
          animation: tiktok-green 1s cubic-bezier(0.05,0,1,1) infinite;
        }
  
        .loading-black-circle {
          fill: #0f0f0f;
          stroke-width: 0;
          stroke: #fff;
          r: 36px;
          cx: 40px;
          cy: 44px;
        }
  
        @keyframes tiktok-green {
          25% {
            cx: 80px;
            r: 43.2px;
          }
          50% {
            cx: 120px;
            r: 36px;
          }
          75% {
            cx: 80px;
            r: 21.6px;
          }
          to {
            cx: 40px;
            r: 36px;
          }
        }
  
        @keyframes tiktok-red {
          25% {
            cx: 80px;
            r: 24px;
          }
          50% {
            cx: 40px;
            r: 36px;
          }
          75% {
            cx: 80px;
            r: 43.2px;
          }
          to {
            cx: 120px;
            r: 36px;
          }
        }
      `}</style>
    </div>
  )

  return (
    <div className="min-h-screen bg-white flex flex-col pb-32">
      {isProcessing && <LoadingOverlay />}
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 flex items-center">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <div className="flex items-center gap-1 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
            />
          </svg>
          <h1 className="text-lg font-semibold text-gray-800">TikTok</h1>
        </div>
      </div>

      <div className="p-4 flex-1">
        {/* TikTok Logo and Username */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Get Coins</h2>

        <div className="flex items-center mb-6">
          <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <Input placeholder="Enter username" className="border-gray-200 bg-white h-12" />
          </div>
        </div>

        {/* Recharge Section */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recharge</h2>

        {/* Coin Packages Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {coinPackages.map((pkg) => (
            <button
              key={pkg.coins}
              onClick={() => handlePackageSelect(pkg)}
              className={`p-4 rounded-xl transition-all border-2 ${selectedPackage?.coins === pkg.coins ? "border-red-300 bg-red-50 border-2" : "border-gray-50 bg-gray-50"
                }`}
            >
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-yellow-400 border-orange-200 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="#ffffff"
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">{pkg.coins.toLocaleString()}</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-500">${pkg.price.toFixed(2)}</div>
                {pkg.originalPrice && <div className="text-xs text-gray-500 line-through">${pkg.originalPrice}</div>}
              </div>
            </button>
          ))}

          <div
            className={`p-4 rounded-xl border-2 transition-all ${!selectedPackage && customAmount ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
          >
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-yellow-400 border-orange-200 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  />
                </svg>
              </div>
              <input
                type="number"
                placeholder="Custom"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="font-semibold text-gray-800 bg-transparent border-none outline-none p-0 text-sm flex-1 break-words w-full"
                style={{
                  appearance: "none",
                  boxShadow: "none",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-gray-500 break-words">
                {customAmount ? `$${(Number.parseFloat(customAmount) * COIN_TO_USD_RATE).toFixed(2)}` : "amount"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-lg font-semibold text-gray-800 break-words text-right">${totalPrice.toFixed(2)}</span>
          </div>

          <Button
            onClick={handleRecharge}
            disabled={(!selectedPackage && !customAmount) || isProcessing}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold disabled:bg-gray-300"
          >
            {isProcessing ? "Processing..." : "Recharge"}
          </Button>
        </div>
      </div>
    </div>
  )
}
