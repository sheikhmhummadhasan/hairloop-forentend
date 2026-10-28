"use client";
import React, { useState } from 'react';
import { ArrowLeft, Lock, ChevronDown, Check } from 'lucide-react';

const StripePayment = () => {
    const [currency, setCurrency] = useState('BDT');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [country, setCountry] = useState('Bangladesh');
    const [saveInfo, setSaveInfo] = useState(false);

    return (
        <div className="min-h-screen bg-[#111215] text-gray-200 flex flex-col items-center justify-between p-4 md:p-8 font-sans">
            {/* Top Title */}
            <div className="w-full max-w-4xl text-gray-400 text-sm mb-4 font-medium">
                Stripe Payment
            </div>

            {/* Main Modal Card */}
            <div className="w-full max-w-4xl bg-[#16181d] border border-[#252830] rounded-2xl p-6 md:p-10 shadow-2xl relative">
                {/* Sandbox Badge */}
                <div className="absolute top-6 right-6">
                    <span className="bg-[#232730] text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase border border-[#313642]">
                        SANDBOX
                    </span>
                </div>

                {/* Top Action Icons */}
                <div className="flex items-center gap-3 mb-8">
                    <button className="p-2 rounded-lg bg-[#1e2129] hover:bg-[#282c37] border border-[#2e3340] text-gray-300 transition">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="p-2 rounded-lg bg-[#1e2129] border border-[#2e3340] text-gray-300">
                        <Lock className="w-4 h-4" />
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* Left Column - Plan & Currency */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                                CHOOSE A CURRENCY:
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3">
                                {/* BDT Button */}
                                <button
                                    type="button"
                                    onClick={() => setCurrency('BDT')}
                                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                                        currency === 'BDT'
                                            ? 'border-white bg-[#1e2129] shadow-md'
                                            : 'border-[#2e3340] bg-[#121317] hover:border-gray-500'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 rounded-full bg-[#006a4e] relative flex items-center justify-center shrink-0 overflow-hidden">
                                            <div className="w-2.5 h-2.5 bg-[#f42a41] rounded-full"></div>
                                        </div>
                                        <span className="font-semibold text-sm text-white">
                                            BDT 2,553.33
                                        </span>
                                    </div>
                                </button>

                                {/* USD Button */}
                                <button
                                    type="button"
                                    onClick={() => setCurrency('USD')}
                                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                                        currency === 'USD'
                                            ? 'border-white bg-[#1e2129] shadow-md'
                                            : 'border-[#2e3340] bg-[#121317] hover:border-gray-500'
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-3.5 bg-red-600 relative overflow-hidden flex flex-col justify-between shrink-0 rounded-[2px]">
                                            <div className="h-[2px] bg-white"></div>
                                            <div className="h-[2px] bg-white"></div>
                                            <div className="h-[2px] bg-white"></div>
                                            <div className="absolute top-0 left-0 w-2.5 h-2 bg-blue-900"></div>
                                        </div>
                                        <span className="font-semibold text-sm text-gray-300">
                                            $20.00
                                        </span>
                                    </div>
                                </button>
                            </div>

                            <p className="text-xs text-gray-500 italic mt-2">
                                1 USD = 127.6665 BDT
                            </p>
                        </div>

                        <hr className="border-[#262a34]" />

                        {/* Order Summary */}
                        <div className="flex items-start justify-between pt-2">
                            <div>
                                <h3 className="text-lg font-bold text-white">
                                    Hireloop Pro Plan
                                </h3>
                                <p className="text-sm text-gray-400 mt-0.5">
                                    Access to all features
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="text-lg font-bold text-white">
                                    {currency === 'BDT' ? 'BDT 2,553.33' : '$20.00'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Payment Form */}
                    <div className="space-y-6">
                        
                        {/* Link Button */}
                        <button className="w-full bg-[#00d66c] hover:bg-[#00c061] text-black font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg">
                            <div className="flex items-center gap-1.5 font-bold text-base tracking-tight">
                                <span className="w-2 h-2 rounded-full bg-black"></span>
                                <span>link</span>
                            </div>
                            <span className="text-black/40">|</span>
                            <div className="flex items-center gap-2 text-xs bg-black/10 px-2 py-1 rounded">
                                <span className="bg-blue-600 text-white font-bold px-1 rounded text-[10px]">
                                    VISA
                                </span>
                                <span className="font-bold text-black">4242</span>
                            </div>
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center">
                            <div className="border-t border-[#2a2e3a] w-full"></div>
                            <span className="bg-[#16181d] px-3 text-xs text-gray-500 uppercase tracking-widest font-medium absolute">
                                OR
                            </span>
                        </div>

                        {/* Form Inputs */}
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            
                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                                    Contact information
                                </label>
                                <div>
                                    <span className="text-[11px] text-gray-400 block mb-1">Email</span>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-[#111216] border border-[#2d323e] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400 transition"
                                    />
                                </div>
                            </div>

                            {/* Payment Box */}
                            <div className="space-y-3 pt-1">
                                <label className="block text-xs font-semibold text-gray-300">
                                    Payment method
                                </label>

                                <div className="border border-[#2d323e] rounded-xl overflow-hidden bg-[#111216]">
                                    <div className="p-3.5 border-b border-[#252833] flex items-center gap-2 bg-[#181a20]">
                                        <div className="w-4 h-3 border border-gray-400 rounded-sm flex items-center justify-center">
                                            <div className="w-2 h-1 bg-gray-400"></div>
                                        </div>
                                        <span className="text-xs font-semibold text-white">Card</span>
                                    </div>

                                    <div className="p-3.5 space-y-3">
                                        {/* Card Number */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                CARD INFORMATION
                                            </span>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="1234 1234 1234 1234"
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value)}
                                                    className="w-full bg-[#181a20] border border-[#2a2e3a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 opacity-60">
                                                    <div className="w-5 h-3 bg-blue-500 rounded-[2px]"></div>
                                                    <div className="w-5 h-3 bg-amber-500 rounded-[2px]"></div>
                                                    <div className="w-5 h-3 bg-[#006fcf] rounded-[2px]"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expiry & CVC */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                value={expiry}
                                                onChange={(e) => setExpiry(e.target.value)}
                                                className="w-full bg-[#181a20] border border-[#2a2e3a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400"
                                            />
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    placeholder="CVC"
                                                    value={cvc}
                                                    onChange={(e) => setCvc(e.target.value)}
                                                    className="w-full bg-[#181a20] border border-[#2a2e3a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                                                    🕒
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                CARDHOLDER NAME
                                            </span>
                                            <input
                                                type="text"
                                                placeholder="Full name on card"
                                                value={cardholderName}
                                                onChange={(e) => setCardholderName(e.target.value)}
                                                className="w-full bg-[#181a20] border border-[#2a2e3a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-400"
                                            />
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                COUNTRY OR REGION
                                            </span>
                                            <div className="relative">
                                                <select
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    className="w-full bg-[#181a20] border border-[#2a2e3a] rounded-lg px-3.5 py-2.5 text-sm text-white appearance-none focus:outline-none focus:border-gray-400 cursor-pointer"
                                                >
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                </select>
                                                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Save Info */}
                            <div className="bg-[#111216] border border-[#2d323e] rounded-xl p-4">
                                <label className="flex items-start gap-3 cursor-pointer select-none">
                                    <div className="relative mt-0.5">
                                        <input
                                            type="checkbox"
                                            checked={saveInfo}
                                            onChange={() => setSaveInfo(!saveInfo)}
                                            className="sr-only"
                                        />
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                            saveInfo ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-600 bg-[#181a20]'
                                        }`}>
                                            {saveInfo && <Check className="w-3 h-3 stroke-[3]" />}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-white block">
                                            Save my information for faster checkout
                                        </span>
                                        <span className="text-[11px] text-gray-500 block mt-0.5">
                                            Pay securely on this site and everywhere Link is accepted.
                                        </span>
                                    </div>
                                </label>
                            </div>

                            {/* Pay Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#0070f3] hover:bg-[#0060df] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg text-base mt-2"
                            >
                                Pay
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full max-w-4xl text-center py-6 mt-4">
                <p className="text-xs text-gray-500 font-medium">
                    Powered by <span className="font-bold text-gray-400">Stripe</span>
                </p>
                <div className="flex justify-center gap-4 text-[11px] text-gray-500 mt-2">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                </div>
            </footer>
        </div>
    );
};

export default StripePayment;