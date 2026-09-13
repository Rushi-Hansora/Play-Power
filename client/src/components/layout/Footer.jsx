import React from "react";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 mt-12 sm:mt-16 text-sm text-gray-700">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8 xl:px-0 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Support</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Hosting</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Airbnb</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Candolim Stays</h3>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Candolim beachfront villas</a></li>
              <li><a href="#" className="hover:underline">North Goa holiday homes</a></li>
              <li><a href="#" className="hover:underline">Romantic Jacuzzi stays</a></li>
              <li><a href="#" className="hover:underline">North Goa travel guide</a></li>
              <li><a href="#" className="hover:underline">Calangute & Candolim</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 Airbnb, Inc. All rights reserved.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-gray-800">
            <button className="flex items-center gap-2 hover:underline cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button className="hover:underline cursor-pointer">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
