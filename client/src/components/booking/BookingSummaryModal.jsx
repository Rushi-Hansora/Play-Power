import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { useBooking } from "../../contexts/BookingContext";
import { formatCurrency, formatDateRange } from "../../utils/formatters";
import {
  CheckCircle2,
  Shield,
  CreditCard,
  QrCode,
  Building2,
  Lock,
  Sparkles,
  Check,
  Tag,
  AlertCircle,
} from "lucide-react";

export function BookingSummaryModal() {
  const {
    listing,
    bookedStay,
    activeProperty,
    checkIn,
    checkOut,
    nights,
    totalGuests,
    basePricePerNight,
    nightsTotal,
    cleaningFee,
    serviceFee,
    isDiscountClaimed,
    isOwnerDiscountApproved,
    toggleOwnerDiscount,
    discountAmount,
    totalBeforeTaxes,
    isBookingModalOpen,
    setIsBookingModalOpen,
  } = useBooking();

  const currentStay = bookedStay || activeProperty || listing;
  const hasDiscount = Boolean(isDiscountClaimed || isOwnerDiscountApproved);

  // Payment tab selection: 'card' | 'upi' | 'netbanking'
  const [activeTab, setActiveTab] = useState("card");

  // Form states
  const [cardNumber, setCardNumber] = useState("4532 8921 4482 1092");
  const [cardExpiry, setCardExpiry] = useState("08/28");
  const [cardCvv, setCardCvv] = useState("321");
  const [cardName, setCardName] = useState("Guest Traveler");

  const [upiId, setUpiId] = useState("traveler@okhdfcbank");
  const [isUpiVerified, setIsUpiVerified] = useState(true);
  const [showQr, setShowQr] = useState(false);

  const [selectedBank, setSelectedBank] = useState("HDFC Bank");

  // Payment gateway simulation states: 'idle' | 'processing' | 'confirmed'
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [processingStep, setProcessingStep] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handlePay = () => {
    setPaymentStatus("processing");
    setProcessingStep("Connecting to secure 256-bit bank gateway...");

    setTimeout(() => {
      setProcessingStep(
        activeTab === "upi"
          ? "Verifying UPI authorization with your banking app..."
          : activeTab === "netbanking"
          ? `Authenticating session with ${selectedBank}...`
          : "Authorizing card transaction with issuing bank..."
      );
    }, 900);

    setTimeout(() => {
      setProcessingStep("Payment verified! Securing reservation with Host...");
    }, 1800);

    setTimeout(() => {
      const generatedId = `AIR-GOA-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingId(generatedId);
      setPaymentStatus("confirmed");
    }, 2600);
  };

  const handleClose = () => {
    setIsBookingModalOpen(false);
    setTimeout(() => {
      setPaymentStatus("idle");
      setProcessingStep("");
    }, 300);
  };

  const listingTitle = currentStay?.title || listing?.title || "Candolim Luxury Suite with Private Jacuzzi";
  const listingImage = currentStay?.photos?.[0]?.url || currentStay?.image || listing?.photos?.[0]?.url || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80";

  return (
    <Modal
      isOpen={isBookingModalOpen}
      onClose={handleClose}
      title={
        paymentStatus === "confirmed"
          ? "Reservation Confirmed!"
          : paymentStatus === "processing"
          ? "Processing Payment..."
          : "Confirm and Pay"
      }
      maxWidth="max-w-2xl"
    >
      {paymentStatus === "processing" ? (
        <div className="py-12 px-4 text-center space-y-5">
          <div className="relative w-16 h-16 mx-auto">
            <div className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-[#FF385C] animate-spin" />
            <Lock className="w-6 h-6 text-gray-700 absolute inset-0 m-auto" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Securing Your Reservation
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
              {processingStep}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>256-bit Bank-Grade Encryption Protected</span>
          </div>
        </div>
      ) : paymentStatus === "confirmed" ? (
        <div className="py-6 space-y-6 text-center">
          <div className="inline-flex p-3.5 bg-emerald-50 text-emerald-600 rounded-full">
            <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">
              Payment Successful
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              You're Going to Goa!
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Confirmation code: <span className="font-mono font-bold text-gray-900">{bookingId}</span>
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-5 text-left space-y-3">
            <div className="flex items-center gap-3.5 pb-3 border-b border-gray-200">
              <img src={listingImage} alt={listingTitle} className="w-16 h-14 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{listingTitle}</h4>
                <p className="text-xs text-gray-500">{formatDateRange(checkIn, checkOut)} · {nights} nights</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <span className="font-medium text-gray-500">Guests:</span> {totalGuests} traveler{totalGuests > 1 ? "s" : ""}
              </div>
              <div>
                <span className="font-medium text-gray-500">Paid Amount:</span> {formatCurrency(totalBeforeTaxes)}
              </div>
              <div>
                <span className="font-medium text-gray-500">Payment via:</span> {activeTab === "upi" ? "UPI Instant" : activeTab === "netbanking" ? selectedBank : "Card ending in 1092"}
              </div>
              <div>
                <span className="font-medium text-gray-500">Host:</span> Mirashya Homes
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 max-w-md mx-auto">
            A confirmation receipt and self-check-in guide have been sent to your email. Host Mirashya Homes has been notified.
          </p>

          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition cursor-pointer"
          >
            Done
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stay Info Header */}
          <div className="flex gap-4 p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
            <img
              src={listingImage}
              alt={listingTitle}
              className="w-22 h-18 sm:w-24 sm:h-20 object-cover rounded-xl shrink-0"
            />
            <div className="flex flex-col justify-between py-0.5">
              <div>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  Selected Stay
                </span>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 line-clamp-1">
                  {listingTitle}
                </h3>
              </div>
              <div className="text-xs text-gray-600">
                {formatDateRange(checkIn, checkOut)} ({nights} nights · {totalGuests} guests)
              </div>
            </div>
          </div>

          {/* Owner Permission Discount Option */}
          <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-700" />
                <span className="text-xs sm:text-sm font-bold text-emerald-900">
                  Host / Owner Permission Discount
                </span>
              </div>
              {/* Toggle Switch */}
              <button
                type="button"
                onClick={toggleOwnerDiscount}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                  isOwnerDiscountApproved ? "bg-emerald-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    isOwnerDiscountApproved ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed">
              {isOwnerDiscountApproved ? (
                <span className="font-semibold text-emerald-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Owner permission verified! 10% direct host discount of -{formatCurrency(discountAmount)} applied to total.
                </span>
              ) : (
                "Toggle on if the property owner has authorized your 10% direct booking privilege."
              )}
            </p>
          </div>

          {/* Payment Method Selector Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
              Select Payment Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("card")}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                  activeTab === "card"
                    ? "border-black bg-black text-white shadow-xs"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("upi")}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                  activeTab === "upi"
                    ? "border-black bg-black text-white shadow-xs"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>UPI (0% Fee)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("netbanking")}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                  activeTab === "netbanking"
                    ? "border-black bg-black text-white shadow-xs"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Net Banking</span>
              </button>
            </div>
          </div>

          {/* Method 1: Credit / Debit Card Form */}
          {activeTab === "card" && (
            <div className="p-4 border border-gray-200 rounded-2xl bg-white space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black"
                  />
                  <div className="absolute right-2.5 top-2 flex items-center gap-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded">
                      VISA
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-red-100 text-red-800 rounded">
                      MC
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                    Expiration (MM/YY)
                  </label>
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    placeholder="123"
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Cardholder Name"
                  className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black"
                />
              </div>
            </div>
          )}

          {/* Method 2: UPI Form */}
          {activeTab === "upi" && (
            <div className="p-4 border border-gray-200 rounded-2xl bg-white space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1.5">
                  Popular UPI Apps
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                    <button
                      key={app}
                      type="button"
                      onClick={() => setUpiId(`traveler@${app.toLowerCase().replace(/\s/g, "")}`)}
                      className="py-2 px-1 text-center border border-gray-200 rounded-lg text-xs font-semibold hover:border-black hover:bg-gray-50 transition cursor-pointer"
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                  Or enter your UPI ID (VPA)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="flex-1 text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-black"
                  />
                  <button
                    type="button"
                    onClick={() => setIsUpiVerified(true)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition cursor-pointer"
                  >
                    Verify
                  </button>
                </div>
                {isUpiVerified && (
                  <p className="text-[11px] text-emerald-700 flex items-center gap-1 mt-1 font-medium">
                    <Check className="w-3 h-3" /> Verified UPI ID
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowQr(!showQr)}
                  className="text-xs text-[#FF385C] font-semibold underline hover:text-[#E00B41] cursor-pointer"
                >
                  {showQr ? "Hide QR Code" : "Or Scan QR Code to Pay"}
                </button>
              </div>

              {showQr && (
                <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                  <div className="w-32 h-32 mx-auto bg-white p-2 border border-gray-300 rounded-lg flex items-center justify-center">
                    <QrCode className="w-24 h-24 text-gray-800" />
                  </div>
                  <p className="text-xs text-gray-600">Scan using any UPI app to pay {formatCurrency(totalBeforeTaxes)}</p>
                </div>
              )}
            </div>
          )}

          {/* Method 3: Net Banking Form */}
          {activeTab === "netbanking" && (
            <div className="p-4 border border-gray-200 rounded-2xl bg-white space-y-3.5">
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                Select Your Bank
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "HDFC Bank",
                  "ICICI Bank",
                  "State Bank of India",
                  "Axis Bank",
                  "Kotak Bank",
                  "Punjab National Bank",
                ].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBank(b)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition cursor-pointer ${
                      selectedBank === b
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-gray-50 text-gray-800 hover:border-gray-400"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Breakdown */}
          <div className="space-y-2.5 border-t border-b border-gray-200 py-3.5 text-xs sm:text-sm text-gray-700">
            <div className="flex justify-between">
              <span>{formatCurrency(basePricePerNight)} × {nights} nights</span>
              <span>{formatCurrency(nightsTotal)}</span>
            </div>

            {hasDiscount && (
              <div className="flex justify-between text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">
                <span>Host Approved 10% Discount</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Cleaning fee</span>
              <span>{formatCurrency(cleaningFee)}</span>
            </div>

            <div className="flex justify-between">
              <span>Airbnb service fee</span>
              <span>{formatCurrency(serviceFee)}</span>
            </div>

            <div className="flex justify-between font-bold text-base text-gray-900 pt-2 border-t border-gray-100">
              <span>Total Payable</span>
              <span>{formatCurrency(totalBeforeTaxes)}</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={handlePay}
            className="w-full py-3.5 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white rounded-xl font-bold text-sm sm:text-base hover:brightness-105 active:scale-98 transition shadow-xs cursor-pointer flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            <span>Pay & Confirm {formatCurrency(totalBeforeTaxes)}</span>
          </button>
        </div>
      )}
    </Modal>
  );
}

