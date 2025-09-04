"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { ChevronDown, HelpCircle, Shield, MoreHorizontal, ArrowLeft, ChevronRight, Loader2 } from "lucide-react"
import card_american_express_51cd3f from "@/assets/image/card_american_express_51cd3f.png"
import card_jcb_0481eb from "@/assets/image/card_jcb_0481eb.png"
import diners_0faca9 from "@/assets/image/diners_0faca9.png"
import home_screen_thumbnail_dee906dc from "@/assets/image/home_screen_thumbnail_dee906dc.png"
import icon_invite_rewards from "@/assets/image/icon_invite_rewards.png"
import mastercard_light_5865fd from "@/assets/image/mastercard_light_5865fd.png"
import paypal_light_839c52 from "@/assets/image/paypal_light_839c52.png"
import visa_acffbd from "@/assets/image/visa_acffbd.png"


export default function MainRechargePage() {
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [showPaymentDrawer, setShowPaymentDrawer] = useState(false)
  const [showCustomDrawer, setShowCustomDrawer] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("apple-pay")
  const [isLoading, setIsLoading] = useState(false)
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [customCoinAmount, setCustomCoinAmount] = useState("")
  const [username, setUsername] = useState("")
  const [showSuccessPage, setShowSuccessPage] = useState(false)
  const [isCustomRechargeLoading, setIsCustomRechargeLoading] = useState(false)
  const [isPayNowLoading, setIsPayNowLoading] = useState(false)
  const [currentOrderCoins, setCurrentOrderCoins] = useState(0)
  const [currentOrderPrice, setCurrentOrderPrice] = useState(0)

  const coinPackages = [
    { coins: 30, price: 0.31 },
    { coins: 350, price: 3.65 },
    { coins: 700, price: 7.25 },
    { coins: 1400, price: 14.49 },
    { coins: 3500, price: 36.2 },
  ]

  const handleBuyClick = () => {
    setIsLoading(true)
    setCurrentOrderCoins(coinPackages[selectedPackage].coins)
    setCurrentOrderPrice(coinPackages[selectedPackage].price)
    setTimeout(() => {
      setIsLoading(false)
      setShowPaymentDrawer(true)
    }, 2000)
  }

  const handleCloseDrawer = () => {
    setShowPaymentDrawer(false)
  }

  const toggleTerms = () => {
    setIsTermsExpanded(!isTermsExpanded)
  }

  const handleCustomClick = () => {
    setShowCustomDrawer(true)
  }

  const handleCloseCustomDrawer = () => {
    setShowCustomDrawer(false)
  }

  const handleCustomRecharge = () => {
    setIsCustomRechargeLoading(true)
    const coins = Number.parseInt(customCoinAmount.replace(/,/g, "")) || 0
    const price = Number.parseFloat(calculatePrice(customCoinAmount))

    setTimeout(() => {
      setIsCustomRechargeLoading(false)
      setShowCustomDrawer(false)
      setCurrentOrderCoins(coins)
      setCurrentOrderPrice(price)
      setShowPaymentDrawer(true)
    }, 2000)
  }

  const handlePayNow = () => {
    setIsPayNowLoading(true)

    setTimeout(() => {
      setIsPayNowLoading(false)
      setShowPaymentDrawer(false)
      setShowSuccessPage(true)
    }, 2000)
  }

  const handleGoBack = () => {
    setShowSuccessPage(false)
    setUsername("")
    setCustomCoinAmount("")
    setCurrentOrderCoins(0)
    setCurrentOrderPrice(0)
    setSelectedPackage(0)
  }

  const handleKeypadClick = (value: string) => {
    if (value === "backspace") {
      setCustomCoinAmount((prev) => {
        const newValue = prev.replace(/,/g, "").slice(0, -1)
        return formatNumber(newValue)
      })
    } else {
      setCustomCoinAmount((prev) => {
        const currentValue = prev.replace(/,/g, "")
        const newValue = currentValue + value
        return formatNumber(newValue)
      })
    }
  }

  const formatNumber = (num: string) => {
    if (!num) return ""
    return Number.parseInt(num).toLocaleString()
  }

  const calculatePrice = (coins: string) => {
    const numCoins = Number.parseInt(coins.replace(/,/g, "")) || 0
    return (numCoins * 0.0104).toFixed(2) // Approximate rate based on the example
  }

  const TikTokCoinIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#Icon_Color-Tiktok_Coin_svg__a)">
        <path d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0Z" fill="#FFB84D"></path>
        <path d="M47 24a23 23 0 1 1-46 0 23 23 0 0 1 46 0Z" fill="#FFDE55"></path>
        <path d="M42 24a18 18 0 1 0-36 0 18 18 0 0 1 36 0Z" fill="#F7A300"></path>
        <path d="M42 24a18 18 0 1 0-36 0 18 18 0 0 1 36 0Z" fill="#F7A80F"></path>
        <path d="M41.94 25.5a18 18 0 1 0-35.88 0 18 18 0 0 1 35.88 0Z" fill="#E88B00"></path>
        <path d="M41.94 25.5a18 18 0 1 0-35.88 0 18 18 0 0 1 35.88 0Z" fill="#F09207"></path>
        <path
          d="M34.74 17.77v5.86c-2.06 0-4.05-.44-5.81-1.55v7.2a7.79 7.79 0 0 1-7.84 7.75 7.79 7.79 0 0 1-7.8-8.35 7.79 7.79 0 0 1 9.19-8.24v6c-.47-.13-.9-.26-1.39-.26a3.14 3.14 0 0 0-3.09 2.5 3.14 3.14 0 0 0 3.1 2.5c1.74 0 3.14-1.4 3.14-3.11V12.03h4.69a5.6 5.6 0 0 0 5.81 5.74Z"
          fill="#F09207"
        ></path>
        <path
          d="M34.34 18.18a5.78 5.78 0 0 1-5.82-5.74h-3.87v15.63c0 1.94-1.6 3.5-3.56 3.5a3.53 3.53 0 0 1-3.55-3.5 3.53 3.53 0 0 1 4.52-3.38v-3.9a7.38 7.38 0 0 0-8.4 7.28 7.38 7.38 0 0 0 7.43 7.34c4.1 0 7.43-3.29 7.43-7.34v-7.98a9.73 9.73 0 0 0 5.82 1.92v-3.83Z"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="Icon_Color-Tiktok_Coin_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )

  if (showSuccessPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="p-8 text-center max-w-sm w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Successful recharge!</h2>
          <p className="text-gray-600 text-sm mb-4">
            {currentOrderCoins.toLocaleString()} Coins were sent to {username}
          </p>
          <p className="text-gray-600 text-sm mb-20">
            This operation has been completed. It will be processed within 24 hours!
          </p>
          <Button onClick={handleGoBack} className="bg-red-500 hover:bg-red-600 text-white h-16 w-40">
            Go back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col h-screen justify-between bg-gray-100"
      style={{ maxHeight: "-webkit-fill-available", height: "100dvh" }}
    >
      {/* Header */}
      <header>
        <div className="flex items-center overflow-hidden relative h-[52px]">
          <div className="absolute w-full h-full top-0 left-0 -z-1 bg-white"></div>
          <div className="inline-flex items-center justify-start flex-1 h-full"></div>
          <div className="truncate flex-3 px-4 text-center text-lg font-bold text-black leading-[52px]">Get Coins</div>
          <div className="flex-1 inline-flex items-center justify-end h-full">
            <button className="h-10 w-10 p-0 text-black flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button className="h-10 w-10 p-0 text-black flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16 flex-1 overflow-y-auto">
        <div>
          {/* Secure Payment Badge */}
          <div className="flex items-center px-4 mx-2 bg-white rounded-lg overflow-hidden transition-all duration-400 h-[80px]">
            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <Input
                placeholder="Enter username"
                className="border-gray-200 bg-white h-12"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Recharge Section */}
        <div className="m-2 bg-white rounded-lg">
          <div className="flex flex-col gap-1 px-4 py-3">
            <h2 className="text-black text-sm font-medium">Recharge</h2>
            <div className="flex items-center">
              <strong className="text-red-500 text-xs">Save around 25% with a lower third-party service fee.</strong>
              <HelpCircle className="w-3.5 h-3.5 text-gray-400 ml-1" />
            </div>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Coin Packages Grid */}
          <div className="flow-root px-4 py-4">
            <ol className="grid p-0 gap-2 grid-cols-3">
              {coinPackages.map((pkg, index) => (
                <li key={index} className="list-none overflow-hidden">
                  <div
                    onClick={() => setSelectedPackage(index)}
                    className={`rounded-lg w-full h-16 flex flex-col justify-center items-center relative cursor-pointer ${selectedPackage === index ? "bg-red-50 border border-red-500" : "bg-gray-100"
                      }`}
                  >
                    <div className="flex gap-0.5 justify-center items-center">
                      <TikTokCoinIcon />
                      <b className="text-lg font-bold">{pkg.coins}</b>
                    </div>
                    <div className="text-xs text-gray-500">${pkg.price}</div>
                  </div>
                </li>
              ))}

              {/* Custom Option */}
              <li className="list-none overflow-hidden">
                <div
                  onClick={handleCustomClick}
                  className="rounded-lg w-full h-16 flex flex-col justify-center items-center bg-gray-100 cursor-pointer"
                >
                  <div className="flex flex-col justify-center items-center w-full px-1">
                    <div className="text-sm font-bold text-center w-full break-words overflow-hidden opacity-100">
                      Custom
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mx-2 mb-2 flex flex-col gap-2.5">
          {/* Invite & Rewards */}
          <div className="flex justify-between text-gray-900 gap-2 p-4 overflow-hidden items-center bg-white rounded-lg">
            <div className="flex items-center">
              <div className="flex gap-3">
                <span className="flex items-center flex-shrink-0">
                  <img
                    src={icon_invite_rewards}
                    height="43"
                    width="56"
                  />
                </span>
                <div className="flex flex-col justify-center gap-0.5">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">Invite & Get Rewards</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <span>Check out this new feature!</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="flex items-center flex-shrink-0">
              <ChevronDown className="w-4 h-4 text-gray-500 -rotate-90" />
            </span>
          </div>

          {/* Exchange */}
          <div className="rounded-lg bg-white mb-2 px-4 py-3 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={home_screen_thumbnail_dee906dc}
                width="56"
                height="56"
                alt="home_screen_thumbnail"
              />
              <div className="flex-grow font-medium text-sm">
                Add this page to the mobile desktop for easy access with just one click
              </div>
            </div>
          </div>
        </div>

        {/* TikTok Logo */}
        <div className="mt-4 text-lg font-medium flex content-center items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="69" height="16" fill="none" viewBox="0 0 69 16">
            <path
              fill="#161823"
              fillOpacity="0.1"
              d="M28.207 6.681a1.399 1.399 0 1 0-.001-2.798 1.399 1.399 0 0 0 0 2.798M40.594 3.883h8.879l-.797 2.483h-2.449v9.181999999999999h-2.81V6.364h-2.492l-.33.006zM26.813 7.848v-.253h2.781l.001.253.003 6.968-.007.731H26.83v-.396zM31.047 4.4v-.55h2.75v5.433000000000001l2.781-2.707h3.316l-3.482 3.381 3.9 5.583H37.25l-2.603-3.873-.825.798v3.076l-2.767-.006v-.248zM58.77 4.4v-.55h2.75v.479l.007 4.954 2.775-2.706h3.316l-3.48 3.385 3.906 5.583h-3.061l-2.606-3.873-.824.798v3.076h-2.766v-.248zM48.063 10.818a4.781 4.781 0 1 1 9.197 1.859 4.8 4.8 0 0 1-1.757 2.145 4.77 4.77 0 0 1-2.65.808 4.78 4.78 0 0 1-3.4-1.404 4.8 4.8 0 0 1-1.038-1.564 4.8 4.8 0 0 1-.352-1.844m6.95 0c0-1.292-.89-2.303-2.179-2.3-1.29 0-2.162 1.012-2.162 2.304s.866 2.313 2.162 2.311c1.297 0 2.18-1.028 2.179-2.32zM17.496 3.883h8.674l-.797 2.483H23.12v9.177h-2.8V6.365l-2.822.006zM14.686 3.843c-.981-.03-1.87-.5-2.54-1.128A3.69 3.69 0 0 1 11.006 0H8.276v10.53c0 1.721-1.031 2.734-2.296 2.734a2.3 2.3 0 0 1-1.77-.803 2.3 2.3 0 0 1-.468-.879 2.29 2.29 0 0 1 .318-1.917 2.29 2.29 0 0 1 2.662-.866v-2.78a3.4 3.4 0 0 0-.742-.079 5.025 5.025 0 0 0-4.644 3.104 5.034 5.034 0 0 0 3.661 6.86 5.023 5.023 0 0 0 6.007-4.934V5.302c1.058.733 2.323 1.078 3.674 1.103z"
            />
          </svg>
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 z-10">
        <div className="px-4 py-3 bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] transform-gpu pb-5">
          <div>
            <div className="mb-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex-shrink-0 text-gray-600 text-sm mr-2">Special offer</div>
                <div className="flex flex-row justify-end items-center">
                  <span className="text-red-500 text-sm font-medium">Unlock 5% cash back</span>
                  <ChevronDown className="w-4 h-4 text-gray-500 -rotate-90" />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="pb-2.5 flex justify-center">
            <img
              src={visa_acffbd}
              alt="VISA"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
            <img
              src={mastercard_light_5865fd}
              alt="MASTER"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
            <img
              src={diners_0faca9}
              alt="DINERS"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
            <img
              src={card_american_express_51cd3f}
              alt="AMEX"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
            <img
              src={card_jcb_0481eb}
              alt="JCB"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
            <img
              src={paypal_light_839c52}
              alt="PAYPAL"
              className="h-4 w-[26px] mr-1 border border-gray-300 rounded"
            />
          </div>

          {/* Buy Button */}
          <Button
            onClick={handleBuyClick}
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white h-11 rounded-lg text-base font-semibold"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Shield className="w-5 h-5 mr-1" />
                Buy for ${coinPackages[selectedPackage]?.price || "0.31"}
              </>
            )}
          </Button>
        </div>
      </footer>

      {/* Payment Drawer */}
      <Drawer open={showPaymentDrawer} onOpenChange={setShowPaymentDrawer}>
        <DrawerContent className="h-[85vh] flex flex-col">
          <DrawerHeader className="flex items-center overflow-hidden relative h-[52px] bg-white border-b">
            <div className="inline-flex items-center justify-start flex-1 h-full">
              <button onClick={handleCloseDrawer} className="h-10 w-10 p-0 text-black flex items-center justify-center">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <DrawerTitle className="truncate flex-3 px-4 text-center text-lg font-bold text-black">
              Order summary
            </DrawerTitle>
            <div className="flex-1 inline-flex items-center justify-end h-full">
              <button className="h-10 w-10 p-0 text-black flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </DrawerHeader>

          {/* Secure Payment Badge */}
          <div className="flex items-center justify-center px-4 py-2 bg-green-50 border-b border-green-100">
            <Shield className="w-3.5 h-3.5 text-green-600 mr-2" />
            <span className="text-sm text-green-600 font-medium">Secure payment</span>
            <ChevronRight className="w-3 h-3 text-green-600 ml-1" />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-auto">
            {/* Order Details */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Account</span>
                <span className="text-sm">{username}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">{currentOrderCoins.toLocaleString()} Coins</span>
                <span className="text-sm">${currentOrderPrice.toFixed(2)}</span>
              </div>

              <div className="border-t border-gray-200 my-4"></div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Payment method</h3>

              {/* Credit Card Option */}
              <div className="border border-gray-200 rounded-lg mb-3">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="w-6 h-4 bg-gray-100 rounded mr-3 flex items-center justify-center">
                      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="w-full h-full">
                        <path
                          d="M14.625 11.25C14.4179 11.25 14.25 11.4179 14.25 11.625V12.375C14.25 12.5821 14.4179 12.75 14.625 12.75H17.625C17.8321 12.75 18 12.5821 18 12.375V11.625C18 11.4179 17.8321 11.25 17.625 11.25H14.625Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.5 2.625C3.67157 2.625 3 3.29657 3 4.125V13.875C3 14.7034 3.67157 15.375 4.5 15.375H19.5C20.3284 15.375 21 14.7034 21 13.875V4.125C21 3.29657 20.3284 2.625 19.5 2.625H4.5ZM4.5 4.125H19.5V5.8125H4.5V4.125ZM4.5 7.3125H19.5V13.875H4.5V7.3125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Add Credit Or Debit Card</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Apple Pay Option */}
              <div className="border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="w-6 h-4 bg-black rounded mr-3 flex items-center justify-center">
                      <svg width="16" height="7" viewBox="0 0 16 7" fill="white">
                        <path d="M3.89 0C3.28 0 2.78 0.5 2.78 1.11C2.78 1.72 3.28 2.22 3.89 2.22C4.5 2.22 5 1.72 5 1.11C5 0.5 4.5 0 3.89 0ZM1.67 2.78C0.75 2.78 0 3.53 0 4.44C0 5.36 0.75 6.11 1.67 6.11C2.58 6.11 3.33 5.36 3.33 4.44C3.33 3.53 2.58 2.78 1.67 2.78Z" />
                      </svg>
                    </div>
                    <span className="text-sm">Apple Pay</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="apple-pay"
                      checked={selectedPaymentMethod === "apple-pay"}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-4 shadow-[0_-2px_12px_0_rgba(0,0,0,0.12)]">
            <div className="mb-4">
              <div className="relative flex justify-between items-center">
                <div
                  className={`text-xs text-gray-600 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${isTermsExpanded ? "max-h-96" : "max-h-[2.4em]"
                    }`}
                  style={{ lineHeight: "1.2em" }}
                >
                  <p className="mb-2">
                    By tapping <span className="font-semibold text-black">Pay</span> to make a purchase, you acknowledge
                    that you are purchasing a limited license to access this virtual item subject to our{" "}
                    <a href="#" className="text-black font-semibold underline">
                      Virtual Items Policy
                    </a>
                    . By using any amount of Coins within 14 days after the purchase, you acknowledge and confirm that
                    you will no longer be eligible for a refund.
                  </p>
                  <p>
                    To assess your tax rate in accordance with our{" "}
                    <a href="#" className="text-black font-semibold underline">
                      Privacy Policy
                    </a>
                    , TikTok detected that your location is{" "}
                    <span className="font-semibold text-black">United States, Alta, Salt Lake, Utah</span>.
                  </p>
                </div>
                <button
                  onClick={toggleTerms}
                  className="ml-2 text-gray-400 transition-colors bg-gray-200 rounded h-[18px] w-[20px]"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isTermsExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold">Total</span>
              <span className="text-lg font-bold">${currentOrderPrice.toFixed(2)}</span>
            </div>

            {/* Pay Button */}
            <Button
              onClick={handlePayNow}
              disabled={!selectedPaymentMethod || isPayNowLoading}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white h-12 rounded-lg text-base font-semibold"
            >
              {isPayNowLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Pay now
                </>
              )}
            </Button>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Custom Amount Drawer */}
      <Drawer open={showCustomDrawer} onOpenChange={setShowCustomDrawer}>
        <DrawerContent className="flex flex-col">
          <DrawerHeader className="flex items-center overflow-hidden relative h-[52px] bg-white border-b">
            <div className="inline-flex items-center justify-start flex-1 h-full">
              <button
                onClick={handleCloseCustomDrawer}
                className="h-10 w-10 p-0 text-black flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <DrawerTitle className="truncate flex-3 px-4 text-center text-lg font-bold text-black">Custom</DrawerTitle>
            <div className="flex-1 inline-flex items-center justify-end h-full">
              <button className="h-10 w-10 p-0 text-black flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </DrawerHeader>

          {/* Content */}
          <div className="flex-1 px-4 pt-3 overflow-auto">
            {/* Coin Amount Input */}
            <div className="mb-2">
              <div className="flex items-center mb-2">
                <span className="text-sm font-semibold">Coin Amount</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>

              <div className="border border-gray-200 p-4 mb-2">
                <div className="flex items-center h-4">
                  <TikTokCoinIcon size={20} />
                  <div className="ml-3 flex-1">
                    <div className="text-2xl font-bold">{customCoinAmount}</div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-4">${calculatePrice(customCoinAmount)}</div>
            </div>

            {/* Numeric Keypad */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[1, 2, 3, "backspace", 4, 5, 6, "000", 7, 8, 9, 0].map((key, index) => (
                <button
                  key={index}
                  onClick={() => handleKeypadClick(key.toString())}
                  className="h-12 bg-gray-100 flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-colors"
                >
                  {key === "backspace" ? (
                    <svg
                      fill="currentColor"
                      className="flip-rtl text-color-TextQuaternary text-gray-400"
                      fontSize="22px"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                    >
                      <path d="m16.54 8.5-12.46 11a6 6 0 0 0 0 9l12.46 11a6 6 0 0 0 3.97 1.5H40a6 6 0 0 0 6-6V13a6 6 0 0 0-6-6H20.51a6 6 0 0 0-3.97 1.5ZM26.17 24l-4.38-4.38a1 1 0 0 1 0-1.41l1.42-1.42a1 1 0 0 1 1.41 0L29 21.17l4.38-4.38a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1 0 1.41L31.83 24l4.38 4.38a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 0 1-1.41 0L29 26.83l-4.38 4.38a1 1 0 0 1-1.41 0l-1.42-1.42a1 1 0 0 1 0-1.41L26.17 24Z"></path>
                    </svg>
                  ) : (
                    key
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white border-t">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Special offer</span>
                <div className="flex items-center">
                  <span className="text-sm text-red-500 font-medium">Unlock 5% cash back</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 ml-1" />
                </div>
              </div>
            </div>

            <div className="px-4 py-3 pt-0">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">${calculatePrice(customCoinAmount)}</span>
              </div>

              <Button
                onClick={handleCustomRecharge}
                disabled={!customCoinAmount || isCustomRechargeLoading}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white h-12 rounded-lg text-base font-semibold"
              >
                {isCustomRechargeLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Recharge
                  </>
                )}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
