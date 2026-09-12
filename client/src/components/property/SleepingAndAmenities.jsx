import React, { useState } from "react";
import { BedDouble, Sofa, Check } from "lucide-react";
import { Modal } from "../common/Modal";

export function SleepingArrangements({ arrangements }) {
  return (
    <section className="py-8 border-b border-gray-200" aria-label="Sleeping arrangements">
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
        Where you'll sleep
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {arrangements.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition bg-white shadow-2xs group"
          >
            {item.image && (
              <div className="aspect-16/10 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.room}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-104 group-hover:brightness-95"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4 sm:p-5">
              <div className="mb-3">
                {item.icon === "bed-double" ? (
                  <BedDouble className="w-6 h-6 text-gray-800 stroke-[1.8]" />
                ) : (
                  <Sofa className="w-6 h-6 text-gray-800 stroke-[1.8]" />
                )}
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-0.5">{item.room}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{item.bedType}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AmenitiesSection({ amenities }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Top 10 featured amenities to show in main listing view
  const displayAmenities = amenities.slice(0, 10);

  return (
    <section id="amenities" className="py-8 border-b border-gray-200" aria-label="Amenities">
      <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
        {displayAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-4 text-gray-800 py-1">
            <Check className="w-5 h-5 text-gray-700 shrink-0" />
            <span className="text-base text-gray-800">{amenity.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 border border-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-50 transition cursor-pointer"
      >
        Show all 45 amenities
      </button>

      {/* Amenities Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What this place offers"
      >
        <div className="space-y-8 py-2">
          {["Bathroom", "Kitchen", "Outdoor", "Internet", "Entertainment", "Safety", "Services"].map(
            (category) => {
              const items = amenities.filter((a) => a.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-base font-bold text-gray-900 mb-4">{category}</h3>
                  <div className="space-y-3.5">
                    {items.map((a, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gray-600" />
                        <span>{a.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Modal>
    </section>
  );
}
