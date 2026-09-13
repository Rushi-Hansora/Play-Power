import React from "react";

/**
 * High-fidelity vector logos for Card networks, UPI applications, and major Indian Net Banking institutions.
 */

// --- Card Brands ---

export function VisaLogo({ className = "h-4.5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 48 16" fill="none" aria-label="Visa">
      <path d="M19.5 1.5L13.8 14.5H10.1L6.1 4.2C5.9 3.4 5.7 3.1 5.1 2.8C4.1 2.3 2.6 1.8 1.3 1.5L1.4 1H7.8C8.7 1 9.4 1.6 9.6 2.6L11.4 11.2L15.9 1.5H19.5Z" fill="#1A1F71" />
      <path d="M27.2 10.3C27.2 6.4 21.8 6.2 21.8 4.4C21.8 3.8 22.4 3.2 23.6 3C24.2 2.9 25.8 2.8 27.3 3.5L27.9 1.1C27.1 0.8 26 0.5 24.6 0.5C20.7 0.5 18 2.6 18 5.6C18 10 23.5 10.2 23.5 12.1C23.5 12.8 22.7 13.5 21.3 13.5C19.8 13.5 18.2 12.9 17.5 12.5L16.8 15C17.7 15.4 19.3 15.8 21 15.8C25.2 15.8 27.2 13.6 27.2 10.3Z" fill="#1A1F71" />
      <path d="M35.4 14.5H39L35.8 1.5H32.4C31.6 1.5 31 2 30.7 2.7L25.8 14.5H29.6L30.4 12.3H35L35.4 14.5ZM31.4 9.6L33.3 4.3L34.4 9.6H31.4Z" fill="#1A1F71" />
      <path d="M3.9 1.5L0.2 14.5H3.8L7.5 1.5H3.9Z" fill="#F7B600" />
    </svg>
  );
}

export function MastercardLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 32 20" fill="none" aria-label="Mastercard">
      <circle cx="12" cy="10" r="8" fill="#EB001B" />
      <circle cx="20" cy="10" r="8" fill="#F79E1B" fillOpacity="0.88" />
    </svg>
  );
}

export function RupayLogo({ className = "h-4 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 50 16" fill="none" aria-label="RuPay">
      <text x="2" y="12" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#092B65">Ru</text>
      <text x="21" y="12" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#00833E">Pay</text>
      <path d="M44 3L48 8L44 13" stroke="#F15A24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AmexLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 32 20" fill="none" aria-label="American Express">
      <rect width="32" height="20" rx="3" fill="#006FCF" />
      <text x="4" y="13.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="8" fill="#FFFFFF" letterSpacing="0.4">AMEX</text>
    </svg>
  );
}

// --- UPI Brands ---

export function UpiLogoBadge({ className = "h-4 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 46 16" fill="none" aria-label="UPI">
      <path d="M4 3L9 8L4 13" stroke="#00833E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 3L13 8L8 13" stroke="#F15A24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="17" y="12" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" fill="#111827">UPI</text>
    </svg>
  );
}

export function GooglePayLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
      <span className="font-semibold text-xs text-gray-800 tracking-tight">GPay</span>
    </div>
  );
}

export function PhonePeLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <div className="w-5 h-5 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-bold text-[11px] shadow-2xs shrink-0">
        पे
      </div>
      <span className="font-semibold text-xs text-[#5f259f]">PhonePe</span>
    </div>
  );
}

export function PaytmLogo() {
  return (
    <div className="flex items-center gap-1 select-none">
      <div className="w-5 h-5 rounded-full bg-[#002E6E] flex items-center justify-center text-white font-black text-[9px] shrink-0">
        P
      </div>
      <div className="flex items-baseline leading-none">
        <span className="font-black text-xs text-[#002E6E] tracking-tight">Pay</span>
        <span className="font-black text-xs text-[#00BAF2] tracking-tight">tm</span>
      </div>
    </div>
  );
}

export function BhimLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#008648] to-[#FF7900] flex items-center justify-center shadow-2xs shrink-0">
        <svg className="w-3 h-3 text-white" viewBox="0 0 10 10" fill="currentColor">
          <path d="M2 1.5L8 5L2 8.5V1.5Z" />
        </svg>
      </div>
      <span className="font-bold text-xs text-gray-800 tracking-tight">BHIM</span>
    </div>
  );
}

// --- Major Net Banking Brands ---

export function HdfcBankLogo() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#004c8f] flex items-center justify-center shrink-0 border border-blue-900/30">
      <div className="w-3.5 h-3.5 bg-white relative flex items-center justify-center">
        <div className="w-2 h-2 bg-[#ed232a]" />
      </div>
    </div>
  );
}

export function IciciBankLogo() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#F37021] flex items-center justify-center text-white font-extrabold text-[11px] italic shrink-0 shadow-2xs">
      i
    </div>
  );
}

export function SbiBankLogo() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#008ecb] flex items-center justify-center shrink-0 shadow-2xs relative">
      <div className="w-2.5 h-2.5 rounded-full bg-white relative">
        <div className="w-0.5 h-2 bg-[#008ecb] absolute -bottom-1 left-1" />
      </div>
    </div>
  );
}

export function AxisBankLogo() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#97144D] flex items-center justify-center text-white font-black text-xs shrink-0 shadow-2xs">
      <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="currentColor">
        <path d="M7 1L1 12H5L7 7L9 12H13L7 1Z" />
      </svg>
    </div>
  );
}

export function KotakBankLogo() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#ED1C24] flex items-center justify-center text-white font-black text-xs shrink-0 shadow-2xs">
      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 8C2 4.68 4.68 2 8 2C11.32 2 14 4.68 14 8C14 11.32 11.32 14 8 14C4.68 14 2 11.32 2 8ZM4.5 8C4.5 9.93 6.07 11.5 8 11.5C9.93 11.5 11.5 9.93 11.5 8C11.5 6.07 9.93 4.5 8 4.5C6.07 4.5 4.5 6.07 4.5 8Z" />
      </svg>
    </div>
  );
}

export function PnbBankLogo() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#A20000] flex items-center justify-center text-[#FFCC00] font-black text-[10px] shrink-0 border border-amber-500/30">
      PNB
    </div>
  );
}
