import React from "react";
import { Shield, Clock, Award, MessageCircle } from "lucide-react";

export function HostAndPoliciesSection({ host, policies }) {
  return (
    <div className="py-8 space-y-12">
      {/* Full Host Profile Section */}
      <section aria-label="Host information" className="border-b border-gray-200 pb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={host.avatar}
              alt={host.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-xs"
            />
            <div>
              <h2 className="text-xl md:text-[22px] font-semibold text-gray-900">
                Hosted by {host.name}
              </h2>
              <p className="text-sm text-gray-500">Joined in 2022 · {host.tenureYears} years hosting</p>
            </div>
          </div>

          <button
            onClick={() => alert("Contact host messaging simulated!")}
            className="px-6 py-3 border border-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Host</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-800">Superhost</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-800">Response rate: {host.responseRate}</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-gray-700" />
            <span className="text-sm text-gray-800">Responds {host.responseTime}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mb-4">
          {host.bio}
        </p>

        {host.coHosts && host.coHosts.length > 0 && (
          <div className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700">Co-hosts: </span>
            {host.coHosts.join(", ")}
          </div>
        )}
      </section>

      {/* Things to Know: Rules, Safety, Cancellation */}
      <section aria-label="Policies and rules">
        <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* House Rules */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 mb-3">House rules</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {policies.houseRules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Safety & Property */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 mb-3">Safety & property</h3>
            <ul className="space-y-2.5 text-sm text-gray-700">
              {policies.safety.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h3 className="font-semibold text-base text-gray-900 mb-3">Cancellation policy</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {policies.cancellation}
            </p>
            <a href="#cancellation" className="text-sm font-semibold underline text-gray-900 hover:text-black">
              Add dates to get cancellation details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
