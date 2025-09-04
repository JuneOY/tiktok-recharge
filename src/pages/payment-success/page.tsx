"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Link } from 'react-router-dom';

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="text-center">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
                </div>

                {/* Success Message */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">Payment Completed</h1>
                <p className="text-gray-600 mb-16 max-w-sm">Your coins have been added to your account</p>

                {/* Go Back Button */}
                <Link to="/">
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-lg text-base font-medium">
                        Go back
                    </Button>
                </Link>
            </div>
        </div>
    )
}
