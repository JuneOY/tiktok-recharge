"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, HelpCircle, Backpack as Backspace, Shield } from "lucide-react"
import { Link } from 'react-router-dom';

export default function CustomCoinsPage() {
    const [coinAmount, setCoinAmount] = useState("50")

    const handleNumberClick = (num: string) => {
        if (coinAmount === "50") {
            setCoinAmount(num)
        } else if (coinAmount.length < 9) {
            setCoinAmount(coinAmount + num)
        }
    }

    const handleBackspace = () => {
        if (coinAmount.length > 1) {
            setCoinAmount(coinAmount.slice(0, -1))
        } else {
            setCoinAmount("50")
        }
    }

    const calculatePrice = () => {
        const coins = Number.parseInt(coinAmount) || 0
        return (coins * 0.01).toFixed(2)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link to="/">
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </Link>
                <h1 className="text-lg font-semibold text-gray-900">Custom</h1>
                <HelpCircle className="w-5 h-5 text-gray-600" />
            </div>

            <div className="p-4">
                {/* Number of Coins Input */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-900 font-medium">Number of Coins</span>
                        <ChevronLeft className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">C</span>
                        </div>
                        <input
                            type="text"
                            value={`${coinAmount} - 2,500,000`}
                            readOnly
                            className="flex-1 bg-transparent text-gray-600 text-lg outline-none"
                        />
                    </div>
                </div>

                {/* Number Pad */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumberClick(num.toString())}
                            className="h-16 bg-gray-100 rounded-lg text-xl font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                        >
                            {num}
                        </button>
                    ))}

                    <button className="h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-sm text-gray-600">000</span>
                    </button>

                    <button
                        onClick={() => handleNumberClick("0")}
                        className="h-16 bg-gray-100 rounded-lg text-xl font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        0
                    </button>

                    <button
                        onClick={handleBackspace}
                        className="h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        <Backspace className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Special Offer */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-900 font-medium">Special offer</span>
                    <div className="text-red-500 text-sm font-medium">
                        Unlock 5% cash back
                        <ChevronLeft className="w-4 h-4 inline ml-1 rotate-[-90deg]" />
                    </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-semibold text-gray-900">${calculatePrice()}</span>
                </div>

                {/* Recharge Button */}
                <Link to="/order-summary">
                    <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-lg text-base font-medium">
                        <Shield className="w-4 h-4 mr-2" />
                        Recharge
                    </Button>
                </Link>
            </div>
        </div>
    )
}
