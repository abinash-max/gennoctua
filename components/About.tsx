// import React, { useEffect, useRef } from 'react';

// const About: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const angleStep = (2 * Math.PI) / 4; // 4 images in a circle
//   let currentAngle = 0;
//   let isAutoRotating = true;
//   let animationId: number;

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const items = Array.from(carousel.children) as HTMLElement[];
//     const radius = 200; // Distance from center
//     let angle = 0;

//     const updateCarousel = () => {
//       items.forEach((item, index) => {
//         // Calculate position in 3D space
//         const itemAngle = angle + (index * angleStep);
//         const x = Math.sin(itemAngle) * radius;
//         const z = Math.cos(itemAngle) * radius;
//         const scale = 0.5 + (z + radius) / (2 * radius) * 0.5; // Scale based on z-position
        
//         // Apply 3D transform
//         item.style.transform = `
//           translateX(calc(50% + ${x}px))
//           translateZ(${z}px)
//           scale(${scale})
//         `;
//         item.style.opacity = scale.toString(); // Fade based on position
//         item.style.zIndex = Math.round(scale * 100).toString();
//       });
//     };

//     const autoRotate = () => {
//       if (isAutoRotating) {
//         angle += 0.002;
//         updateCarousel();
//       }
//       animationId = requestAnimationFrame(autoRotate);
//     };

//     animationId = requestAnimationFrame(autoRotate);

//     // Pause on hover
//     const handleMouseEnter = () => isAutoRotating = false;
//     const handleMouseLeave = () => isAutoRotating = true;
    
//     carousel.addEventListener('mouseenter', handleMouseEnter);
//     carousel.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationId);
//       carousel.removeEventListener('mouseenter', handleMouseEnter);
//       carousel.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Content */}
//           <div className="order-2 lg:order-1">
//             <div className="mb-10">
//               <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-4 text-sm">Who We Are</h2>
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Gennoctua is where we build next-gen AI to personalize and elevate every digital interaction
//               </h3>
//             </div>

//             <div className="pl-6 border-l-4 border-brand-500">
//               <h2 className="text-brand-600 font-bold tracking-widest uppercase mb-4 text-sm">About The SDK</h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We combine cutting-edge AI and deep shopping insights to deliver experiences that make every product feel magically tailored just for you.
//               </p>
//             </div>
//           </div>

//           {/* 3D Carousel */}
//           <div className="order-1 lg:order-2 flex justify-center">
//             <div className="relative w-96 h-96">
//               <div className="absolute inset-0 bg-brand-100 rounded-3xl transform rotate-6 scale-105 opacity-50"></div>
//               <div className="relative w-full h-full flex items-center justify-center perspective-1000">
//                 <div 
//                   ref={carouselRef}
//                   className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000"
//                 >
//                   {[1, 2, 3, 4].map((num) => (
//                     <div
//                       key={num}
//                       className="absolute w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-300"
//                       style={{
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         transformOrigin: 'center center',
//                       }}
//                     >
//                       <img
//                         src={`/images/aw-${num}.png`}
//                         alt={`aw-${num}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section Divider Title for next section */}
//         <div className="mt-28 text-center">
//           <div className="inline-block relative">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-tight z-10 relative px-4">
//               Engineered for Adaptability
//             </h2>
//             <div className="absolute top-1/2 left-0 right-0 h-3 bg-brand-100 -z-0 transform -rotate-1 rounded-full opacity-60"></div>
//           </div>
//         </div>
//       </div>
//       <style jsx global>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;


import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const angleStep = (2 * Math.PI) / 4; // 4 images
  let isAutoRotating = true;
  let animationId: number;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = Array.from(carousel.children) as HTMLElement[];
    const radius = 200;
    let angle = 0;

    const updateCarousel = () => {
      items.forEach((item, index) => {
        const itemAngle = angle + index * angleStep;
        const x = Math.sin(itemAngle) * radius;
        const z = Math.cos(itemAngle) * radius;
        const scale = 0.5 + ((z + radius) / (2 * radius)) * 0.5;

        item.style.transform = `
          translateX(calc(50% + ${x}px))
          translateZ(${z}px)
          scale(${scale})
        `;
        item.style.opacity = scale.toString();
        item.style.zIndex = Math.round(scale * 100).toString();
      });
    };

    const autoRotate = () => {
      if (isAutoRotating) {
        angle += 0.002;
        updateCarousel();
      }
      animationId = requestAnimationFrame(autoRotate);
    };

    animationId = requestAnimationFrame(autoRotate);

    const handleMouseEnter = () => (isAutoRotating = false);
    const handleMouseLeave = () => (isAutoRotating = true);

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-4 text-sm">
                Who We Are
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Gennoctua is where we build next-gen AI to personalize and elevate every digital interaction
              </h3>
            </div>

            <div className="pl-6 border-l-4 border-brand-500">
              <h2 className="text-brand-600 font-bold tracking-widest uppercase mb-4 text-sm">
                About The SDK
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge AI and deep shopping insights to deliver experiences that make every product feel magically tailored just for you.
              </p>
            </div>
          </div>

          {/* 3D Carousel - moved left & aligned background */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start -mt-32 lg:-ml-10">
            <div className="relative w-96 h-96">

              {/* ORIGINAL BACKGROUND (kept exactly, aligned cleanly) */}
              <div
                className="absolute bg-brand-100 rounded-3xl transform rotate-6 scale-100 opacity-50"
                style={{
                  width: "90%",
                  height: "80%",
                  top: "-2rem",   // same vertical offset but cleaner
                  left: "0rem",   // aligned to carousel left
                  zIndex: -1,
                }}
              ></div>

              {/* Carousel */}
              <div className="relative w-full h-full flex items-start justify-center perspective-1000 pt-16">
                <div
                  ref={carouselRef}
                  className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="absolute w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-300"
                      style={{
                        left: "50%",
                        top: "calc(50% - 1.5rem)",
                        transform: "translate(-50%, -50%)",
                        transformOrigin: "center center",
                      }}
                    >
                      <img
                        src={`/images/aw-${num}.png`}
                        alt={`aw-${num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-28 text-center">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-tight z-10 relative px-4">
              Engineered for Adaptability
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-3 bg-brand-100 -z-0 transform -rotate-1 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default About;
