import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-4 text-sm">Who We Are</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Gennoctua is where we build next-gen AI to personalize and elevate every digital interaction
              </h3>
            </div>

            <div className="pl-6 border-l-4 border-brand-500">
              <h2 className="text-brand-600 font-bold tracking-widest uppercase mb-4 text-sm">About The SDK</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge AI and deep shopping insights to deliver experiences that make every product feel magically tailored just for you.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-brand-100 rounded-3xl transform rotate-6 scale-105 opacity-50"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 p-8 overflow-hidden">
                <img
                  src="/images/mid-image.png"
                  alt="Chipset Technology"
                  className="w-full h-auto rounded-lg shadow-inner mix-blend-darken"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-mono text-brand-600 border border-brand-200">
                  SDK_CORE_V2.0
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section Divider Title for next section */}
        <div className="mt-28 text-center">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-tight z-10 relative px-4">
              Engineered for Adaptability
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-3 bg-brand-100 -z-0 transform -rotate-1 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;