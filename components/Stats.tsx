import React from 'react';
import { ShoppingCart, Clock, RotateCcw } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Map Graphic (Simulated) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'rgb(249,115,22)', stopOpacity:0}} />
                <stop offset="50%" style={{stopColor:'rgb(249,115,22)', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'rgb(249,115,22)', stopOpacity:0}} />
              </linearGradient>
            </defs>
         </svg>
         <div className="absolute top-10 left-10 w-2 h-2 bg-brand-400 rounded-full animate-ping"></div>
         <div className="absolute top-40 right-20 w-3 h-3 bg-brand-600 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
         <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-brand-300 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 relative inline-block">
          The Retail Advantage
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-500 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-orange-100 text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
               <ShoppingCart size={32} />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-brand-500 mb-2">
              +20-35%
            </div>
            <p className="text-gray-600 font-medium">increase in add-to-cart</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-orange-100 text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
               <Clock size={32} />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-brand-500 mb-2">
              +15-25%
            </div>
            <p className="text-gray-600 font-medium">longer session time</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-orange-100 text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
               <RotateCcw size={32} />
            </div>
            <div className="text-4xl md:text-5xl font-extrabold text-brand-500 mb-2">
              -20-40%
            </div>
            <p className="text-gray-600 font-medium">drop in return rates</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;