import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-500 leading-tight mb-6 tracking-tight text-glow">
              Make Every Shopping Experience <br /> Uniquely Yours <br />
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              With Gennoctua’s AI-powered hyper-personalization,
              your customers see exactly what they love — right when it matters.
            </p>


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