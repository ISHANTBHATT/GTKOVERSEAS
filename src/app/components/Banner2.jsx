// import React from "react";

// function Banner2() {
//   return (
//     <div className="h-screen flex justify-between  bg-[#4ABEDF]">
//       <div className="w-1/2"></div>
//       <div className="w-1/2 h-full">
//         <video
//           src="/images/2.mp4"
//           width={500}
//           height={300}
//           autoPlay
//           loop
//           muted
//           className=" w-full h-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner2;

//working
// import React from "react";

// function Banner2() {
//   return (
//     <div className="h-screen flex bg-[#4ABEDF]">
//       {/* Left side with text */}
//       <div className="w-1/2 flex flex-col justify-center pl-16 relative">
//         <div className="max-w-2xl">
//           <div className="mb-8">
//             <span className="text-white/80 font-semibold tracking-widest">
//               CREATIVE SOLUTIONS
//             </span>
//             <h1 className="text-7xl font-bold mt-4 leading-tight">
//               <span className="bg-gradient-to-r from-white to-blue-100 text-transparent bg-clip-text">
//                 Transform
//               </span>
//               <br />
//               <span className="animate-fade-in-up delay-100">Your Digital</span>
//               <br />
//               <span className="animate-fade-in-up delay-200">Experience</span>
//             </h1>
//           </div>

//           <div className="relative group">
//             <p className="text-xl text-white/90 leading-relaxed mb-8">
//               Where innovation meets imagination - craft your vision with
//               cutting-edge digital solutions.
//             </p>
//             <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#4ABEDF] to-[#8A0206] rounded-full transform transition-all duration-300 group-hover:w-32" />
//           </div>

//           <div className="flex items-center gap-6">
//             <button className="bg-gradient-to-r from-[#8A0206] to-[#8A0206] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
//               Get Started
//             </button>
//             <div className="flex gap-4">
//               {["instagram", "twitter", "facebook", "linkedin"].map((icon) => (
//                 <a
//                   key={icon}
//                   href="#"
//                   className="text-white/80 hover:text-white transition-colors duration-300"
//                 >
//                   <svg className="w-6 h-6" fill="currentColor">
//                     <use href={`/icons/social-icons.svg#${icon}`} />
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 flex gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-white">500k+</div>
//               <div className="text-white/80 text-sm">Active Users</div>
//             </div>
//             <div className="h-12 w-px bg-white/30" />
//             <div className="text-center">
//               <div className="text-3xl font-bold text-white">95%</div>
//               <div className="text-white/80 text-sm">Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="w-1/2 flex flex-col justify-center pl-16 relative bg-gradient-to-r from-[#4ABEDF]/20 to-transparent">
//         <div className="max-w-2xl backdrop-blur-sm p-8 rounded-2xl">
//           <div className="mb-8">
//             <span className="text-[#0F2C58] font-semibold tracking-widest bg-white/20 px-4 py-2 rounded-full">
//               INNOVATIVE SOLUTIONS
//             </span>
//             <h1 className="text-7xl font-bold mt-6 leading-tight">
//               <span className="bg-gradient-to-r from-[#0F2C58] to-[#1A5D7A] text-transparent bg-clip-text">
//                 Elevate
//               </span>
//               <br />
//               <span className="text-white drop-shadow-md">Your Digital</span>
//               <br />
//               <span className="text-[#0F2C58]">Potential</span>
//             </h1>
//           </div>

//           <div className="relative group">
//             <p className="text-xl text-[#0F2C58] leading-relaxed mb-8 font-medium">
//               Crafting exceptional digital experiences that blend creativity
//               with cutting-edge technology.
//             </p>
//             <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#4ABEDF] to-[#0F2C58] rounded-full transform transition-all duration-300 group-hover:w-32" />
//           </div>

//           <div className="flex items-center gap-6">
//             <button className="bg-gradient-to-r from-[#1A5D7A] to-[#0F2C58] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#0F2C58]/40 transition-all duration-300 transform hover:-translate-y-1">
//               Start Your Journey
//             </button>
//             <div className="flex gap-4">
//               {["instagram", "twitter", "facebook", "linkedin"].map((icon) => (
//                 <a
//                   key={icon}
//                   href="#"
//                   className="text-[#0F2C58] hover:text-[#1A5D7A] transition-colors duration-300 bg-white/20 p-2 rounded-full hover:bg-white/30"
//                 >
//                   <svg className="w-6 h-6" fill="currentColor">
//                     <use href={`/icons/social-icons.svg#${icon}`} />
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 flex gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#0F2C58]">500k+</div>
//               <div className="text-[#0F2C58]/80 text-sm">Active Users</div>
//             </div>
//             <div className="h-12 w-px bg-[#0F2C58]/30" />
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#0F2C58]">95%</div>
//               <div className="text-[#0F2C58]/80 text-sm">Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       {/* Right side with full-height video */}
//       <div className="w-1/2 h-full">
//         <video
//           src="/images/4.mp4"
//           autoPlay
//           loop
//           muted
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner2;

import React from "react";

function Banner2() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#4ABEDF]">
      {/* Background video (fills entire section) */}
      <video
        src="/images/4.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-right ml-40"
      />

      {/* Overlay gradient to blend left side color into transparent */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#4ABEDF] to-transparent" /> */}

      {/* Content container (on top of video/gradient) */}
      <div className="relative z-10 flex items-center h-full px-16">
        <div className="max-w-2xl">
          <div className="mb-8">
            <span className="text-white/80 font-semibold tracking-widest">
              CREATIVE SOLUTIONS
            </span>
            <h1 className="text-7xl font-bold mt-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-100 text-transparent bg-clip-text">
                Transform
              </span>
              <br />
              <span className="animate-fade-in-up delay-100">Your Digital</span>
              <br />
              <span className="animate-fade-in-up delay-200">Experience</span>
            </h1>
          </div>

          <div className="relative group">
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Where innovation meets imagination - craft your vision with
              cutting-edge digital solutions.
            </p>
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#4ABEDF] to-[#8A0206] rounded-full transform transition-all duration-300 group-hover:w-32" />
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-gradient-to-r from-[#8A0206] to-[#8A0206] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <div className="flex gap-4">
              {["instagram", "twitter", "facebook", "linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor">
                    <use href={`/icons/social-icons.svg#${icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500k+</div>
              <div className="text-white/80 text-sm">Active Users</div>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
