"use client";

import React from "react";

const OurOrganizationSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#99BF9C]">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        {/* All 8 Items in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Item 1 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-1.webp"
                alt="Organization item 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                We count 3,986 dedicated Steel&apos;ers worldwide
              </span>
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-2.webp"
                alt="Organization item 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                You can find 20 Steel Energy offices around the world
              </span>
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-3.webp"
                alt="Organization item 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                We handle 56 Facility Management/Facility Service contracts
                worldwide
              </span>
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-4.webp"
                alt="Organization item 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                We started over 260 new projects under our Gas Solutions segment
                in 2024
              </span>
            </p>
          </div>

          {/* Item 5 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-5.webp"
                alt="Organization item 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                In 2024, our specialists supported customers across more than 60
                countries around the globe
              </span>
            </p>
          </div>

          {/* Item 6 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-6.webp"
                alt="Organization item 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                Steel Energy are committed to responsibility towards people and
                planet
              </span>
            </p>
          </div>

          {/* Item 7 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-7.webp"
                alt="Organization item 7"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                A focus on high quality is at the heart of everything we do
              </span>
            </p>
          </div>

          {/* Item 8 */}
          <div className="text-center group">
            <div className="w-56 h-56 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/org-8.webp"
                alt="Organization item 8"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                Our commitment to innovation drives sustainable energy solutions
              </span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-start space-x-4">
            <p className="text-white text-sm font-medium">
              <span className="text-white">{">>"}</span>{" "}
              <span className="text-white underline decoration-white underline-offset-4">
                Our organisation in numbers
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOrganizationSection;
