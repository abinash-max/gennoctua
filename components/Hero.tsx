import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-500 leading-tight mb-6 uppercase tracking-tight text-glow">
              The Hyper- <br /> Personalisation <br /> SDK
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Effortless integration for adaptive, intelligent user experiences.
              Our engine translates behavioral data into instant, tailored UI modifications without latency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2">
                View Documentation <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border-2 border-brand-500 text-brand-600 hover:bg-brand-50 font-semibold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2">
                Talk to Sales <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative flex justify-center items-center">
            {/* Abstract Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>

            {/* Brain Image Placeholder */}
            <div className="relative z-10 w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-700">
              <img
                src="/images/hero2.jpeg"
                alt="Hero Visual"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl opacity-90"
              />

              {/* Mid Image Overlay */}


              {/* Floating elements simulation */}
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-xl border border-brand-100 hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">Active Learning</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-xl border border-brand-100 hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">Latency &lt;15ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Glow */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent mt-24 opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;