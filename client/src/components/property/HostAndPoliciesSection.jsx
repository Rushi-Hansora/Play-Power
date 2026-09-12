import React from "react";
import { Shield, GraduationCap } from "lucide-react";

export function HostAndPoliciesSection({ host, policies }) {
  const coHosts = host.coHosts || [
    { name: "Sharath", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Aman Dev Pahwa", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Maria Karen Priyanka", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Simran", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Pallavi", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Sanyukta", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" },
    { name: "Shruti", initial: "S", bg: "bg-pink-100 text-pink-600" },
    { name: "Amisha", initial: "A", bg: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="py-8 space-y-12">
      {/* Meet your host Section Matching Image 1 */}
      <section aria-label="Host information" className="border-b border-gray-200 pb-12">
        <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-8">
          Meet your host
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Floating Host Card & Highlights */}
          <div className="lg:col-span-5 max-w-md">
            {/* Host Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_6px_24px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-between">
              {/* Host Avatar & Name */}
              <div className="flex flex-col items-center text-center pr-4">
                <div className="relative mb-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1a382b] flex flex-col items-center justify-center p-2 shadow-xs">
                    <span className="text-[10px] tracking-wider font-serif font-bold text-amber-200">MIRASHYA</span>
                    <span className="text-[7px] tracking-widest text-emerald-100">HOMES</span>
                  </div>
                  {/* Verified Pink Checkmark Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-[#E00B41] text-white p-1 rounded-full border-2 border-white shadow-xs">
                    <svg className="w-3.5 h-3.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  Mirashya<br />Homes
                </h3>
                <span className="text-xs font-semibold text-gray-500 mt-1">Host</span>
              </div>

              {/* Host Stats */}
              <div className="space-y-4 pl-4 sm:pl-6 border-l border-gray-100">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{host.totalReviews || "1,463"}</div>
                  <div className="text-[11px] text-gray-500 font-medium">Reviews</div>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-0.5">
                    {host.hostRating || "4.68"}
                    <span className="text-xs">★</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">Rating</div>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{host.tenureYears || 2}</div>
                  <div className="text-[11px] text-gray-500 font-medium">Years hosting</div>
                </div>
              </div>
            </div>

            {/* Host Details Below Card */}
            <div className="mt-7 space-y-4 text-sm text-gray-900 pl-1">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M12 13v8M9 17h6" />
                </svg>
                <span>{host.bornIn || "Born in the 80s"}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-gray-800 shrink-0 stroke-[1.6]" />
                <span>{host.school || "Where I went to school: NICMAR GOA"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Co-Hosts, Host Details & AirCover Protection */}
          <div className="lg:col-span-7 space-y-8">
            {/* Co-Hosts */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Co-Hosts</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
                {coHosts.map((cohost, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    {cohost.avatar ? (
                      <img
                        src={cohost.avatar}
                        alt={cohost.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-200 shrink-0"
                      />
                    ) : (
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          cohost.bg || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {cohost.initial}
                      </div>
                    )}
                    <span className="text-xs sm:text-sm text-gray-900 font-medium leading-tight">
                      {cohost.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Details */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Host details</h3>
              <p className="text-sm text-gray-800 leading-normal">
                Response rate: {host.responseRate || "100%"}
              </p>
              <p className="text-sm text-gray-800 leading-normal mb-5">
                Responds {host.responseTime || "within an hour"}
              </p>
              <button
                onClick={() => alert("Message host chat opened!")}
                className="px-6 py-3 bg-[#f7f7f7] hover:bg-gray-200 border border-gray-200 text-gray-900 font-semibold text-sm rounded-lg transition active:scale-98 cursor-pointer"
              >
                Message host
              </button>
            </div>

            {/* AirCover Payment Protection Note */}
            <div className="flex items-start gap-3 text-xs text-gray-500 max-w-lg pt-2">
              <Shield className="w-5 h-5 text-gray-500 shrink-0 stroke-[1.5] mt-0.5" />
              <p className="leading-relaxed">
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Know: Rules, Safety, Cancellation */}
      <section aria-label="Policies and rules">
        <h2 className="text-lg sm:text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* House Rules */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">House rules</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              {policies.houseRules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Safety & Property */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">Safety & property</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              {policies.safety.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">Cancellation policy</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
              {policies.cancellation}
            </p>
            <a href="#cancellation" className="text-xs sm:text-sm font-semibold underline text-gray-900 hover:text-black">
              Add dates to get cancellation details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

