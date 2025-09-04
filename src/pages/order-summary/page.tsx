"use client"

import { Button } from "@/components/ui/button"

export default function OrderSummaryPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="p-8 text-center max-w-sm w-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">iSuccessful recharge!</h2>
                <p className="text-gray-600 text-sm mb-4">670000 Coins were sent to nytismocha</p>
                <p className="text-gray-600 text-sm mb-20">This operation has been completed.
                    lt wlll be processed within 24 hours!</p>
                <Button className="bg-red-500 hover:bg-red-600 text-white h-16 w-40"
                >
                    Go back
                </Button>
            </div>
        </div>
    )
}
