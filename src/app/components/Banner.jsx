// "use client";

// import React from "react";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Banner() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const countries = [
//     { name: "USA", flag: "🇺🇸", color: "bg-blue-100" },
//     { name: "UK", flag: "🇬🇧", color: "bg-red-100" },
//     { name: "Germany", flag: "🇩🇪", color: "bg-yellow-100" },
//     { name: "India", flag: "🇮🇳", color: "bg-green-100" },
//     { name: "Australia", flag: "🇦🇺", color: "bg-blue-100" },
//     { name: "Canada", flag: "🇨🇦", color: "bg-red-100" },
//     { name: "Japan", flag: "🇯🇵", color: "bg-white" },
//     { name: "Poland", flag: "🇵🇱", color: "bg-red-100" },
//   ];

//   return (
//     <main className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-12 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <div>
//               <p className="text-sm uppercase tracking-wider text-gray-500">
//                 OUR GOAL{" "}
//                 <span className="ml-2 inline-block w-16 h-0.5 bg-gray-300 align-middle">
//                   ~~~~~
//                 </span>
//               </p>
//               <h1 className="mt-2 text-5xl md:text-6xl font-bold text-[#1a1a6c]">
//                 Start your Journey
//                 <br />
//                 to study abroad
//               </h1>
//               <p className="mt-6 text-gray-600">
//                 Get real time help through video chat from alumni&apos;s
//                 <br />
//                 and students of universities in the World
//               </p>
//             </div>

//             <div className="flex items-center space-x-2 max-w-md">
//               <Input
//                 className="rounded-md border-gray-300"
//                 placeholder="Search for college or university"
//               />
//               <div className="w-24">
//                 <Select defaultValue="usa">
//                   <SelectTrigger>
//                     <SelectValue placeholder="Country" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="usa">USA</SelectItem>
//                     <SelectItem value="uk">UK</SelectItem>
//                     <SelectItem value="canada">Canada</SelectItem>
//                     <SelectItem value="australia">Australia</SelectItem>
//                     <SelectItem value="germany">Germany</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <Button size="icon" className="bg-purple-600 hover:bg-purple-700">
//                 <Search className="h-4 w-4" />
//               </Button>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="flex -space-x-3">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div
//                     key={i}
//                     className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
//                   >
//                     <img
//                       src={`/placeholder.svg?height=40&width=40&text=${i}`}
//                       alt={`Student ${i}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="font-semibold">22k+ Students Onboarded</span>
//                 <a href="#" className="text-purple-600 font-medium">
//                   View Profiles
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {mounted && (
//               <>
//                 <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto">
//                   <div className="absolute inset-0 rounded-full border-2 border-gray-100 overflow-hidden">
//                     <img
//                       src="/images/1.jpg"
//                       alt="Student"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     {countries.map((country, index) => (
//                       <motion.div
//                         key={country.name}
//                         className={`absolute w-12 h-12 rounded-full ${country.color} flex items-center justify-center shadow-md border-2 border-white`}
//                         initial={{
//                           x:
//                             Math.cos((2 * Math.PI * index) / countries.length) *
//                             280,
//                           y:
//                             Math.sin((2 * Math.PI * index) / countries.length) *
//                             280,
//                         }}
//                         animate={{
//                           x:
//                             Math.cos(
//                               2 * Math.PI * (index / countries.length) +
//                                 Date.now() / 10000
//                             ) * 200,
//                           y:
//                             Math.sin(
//                               2 * Math.PI * (index / countries.length) +
//                                 Date.now() / 10000
//                             ) * 200,
//                         }}
//                         transition={{
//                           repeat: Number.POSITIVE_INFINITY,
//                           duration: 20,
//                           ease: "linear",
//                         }}
//                       >
//                         <CountryFlag country={country.name} />
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// function CountryFlag({ country }) {
//   const flagMap = {
//     USA: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-full bg-white relative">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-8 h-4 bg-blue-700"></div>
//             <div className="w-8 h-1 bg-white mt-4"></div>
//             <div className="w-8 h-1 bg-red-600 mt-6"></div>
//             <div className="w-8 h-1 bg-white mt-8"></div>
//             <div className="w-8 h-1 bg-red-600 mt-10"></div>
//           </div>
//         </div>
//       </div>
//     ),
//     UK: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-full bg-blue-700 relative">
//           <div className="absolute w-8 h-1 bg-white top-3.5 left-0"></div>
//           <div className="absolute h-8 w-1 bg-white left-3.5 top-0"></div>
//           <div className="absolute w-8 h-1 bg-red-600 top-3.5 left-0 transform rotate-45"></div>
//         </div>
//       </div>
//     ),
//     Germany: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-2.5 bg-black"></div>
//         <div className="w-full h-2.5 bg-red-600"></div>
//         <div className="w-full h-2.5 bg-yellow-400"></div>
//       </div>
//     ),
//     India: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-2.5 bg-orange-500"></div>
//         <div className="w-full h-2.5 bg-white flex items-center justify-center">
//           <div className="w-2 h-2 rounded-full bg-blue-800"></div>
//         </div>
//         <div className="w-full h-2.5 bg-green-600"></div>
//       </div>
//     ),
//     Australia: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-full bg-blue-700 relative">
//           <div className="absolute top-0 left-0 w-4 h-4 bg-white">
//             <div className="absolute w-4 h-0.5 bg-red-600 top-1.5 left-0"></div>
//             <div className="absolute h-4 w-0.5 bg-red-600 left-1.5 top-0"></div>
//           </div>
//           <div className="absolute bottom-1 right-1 w-1 h-1 bg-white transform rotate-45"></div>
//         </div>
//       </div>
//     ),
//     Canada: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-2 h-full bg-red-600 absolute left-0"></div>
//         <div className="w-4 h-full bg-white absolute left-2"></div>
//         <div className="w-2 h-full bg-red-600 absolute right-0"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
//         </div>
//       </div>
//     ),
//     Japan: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-full bg-white flex items-center justify-center">
//           <div className="w-4 h-4 rounded-full bg-red-600"></div>
//         </div>
//       </div>
//     ),
//     Poland: (
//       <div className="w-8 h-8 rounded-full overflow-hidden">
//         <div className="w-full h-4 bg-white"></div>
//         <div className="w-full h-4 bg-red-600"></div>
//       </div>
//     ),
//   };

//   return flagMap[country] || <span>{country}</span>;
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Banner() {
  const [mounted, setMounted] = useState(false);
  const requestRef = useRef();
  const [angle, setAngle] = useState(0);

  const animate = () => {
    setAngle((prevAngle) => (prevAngle + 0.004) % (2 * Math.PI));
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    setMounted(true);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Outer circle countries
  const outerCountries = [
    { name: "USA", code: "us", position: 0 },
    { name: "UK", code: "gb", position: 1 },
    { name: "Australia", code: "au", position: 2 },
    { name: "Canada", code: "ca", position: 3 },
  ];

  // Inner circle countries (smaller flags)
  const innerCountries = [
    { name: "Spain", code: "es", position: 0 },
    { name: "Germany", code: "de", position: 1 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            {mounted && (
              <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                {/* Outer circle - thin border */}
                <div className="absolute inset-0 rounded-full border border-gray-200"></div>

                {/* Middle circle - thin border */}
                <div className="absolute inset-[60px] rounded-full border border-gray-200"></div>

                {/* Inner circle with student image */}
                <div className="absolute inset-[60px] rounded-full overflow-hidden  ">
                  <img
                    src="/images/2.png"
                    alt="Student with books and phone"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Outer circle country flags */}
                {outerCountries.map((country) => {
                  const countryAngle =
                    (country.position / outerCountries.length) * 2 * Math.PI +
                    angle;
                  const radius = 200; // For a 400px container
                  const x = Math.cos(countryAngle) * radius;
                  const y = Math.sin(countryAngle) * radius;

                  return (
                    <div
                      key={`outer-${country.code}`}
                      className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white overflow-hidden">
                        <img
                          src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Inner circle country flags - smaller and rotating in opposite direction */}
                {innerCountries.map((country) => {
                  const countryAngle =
                    (country.position / innerCountries.length) * 2 * Math.PI -
                    angle * 1.5;
                  const radius = 140; // Smaller radius for inner circle
                  const x = Math.cos(countryAngle) * radius;
                  const y = Math.sin(countryAngle) * radius;

                  return (
                    <div
                      key={`inner-${country.code}`}
                      className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white overflow-hidden">
                        <img
                          src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                          alt={`${country.name} flag`}
                          className="w-7 h-7 object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                OUR GOAL{" "}
                <span className="ml-2 inline-block w-16 h-0.5 bg-gray-300 align-middle">
                  {/* ~~~~~ */}
                </span>
              </p>
              <h1 className="mt-2 text-5xl md:text-6xl font-bold text-[#4ABEDF]">
                Start your Journey
                <br />
                to study abroad
              </h1>
              <p className="mt-6 text-gray-600">
                Get real time help through video chat from alumni&apos;s
                <br />
                and students of universities in the World
              </p>
            </div>

            <div className="flex items-center space-x-2 max-w-md">
              <Input
                className="rounded-md border-gray-300"
                placeholder="Search for college or university"
              />
              <div className="w-24">
                <Select defaultValue="usa">
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="icon" className="bg-[#4ABEDF] hover:bg-purple-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`/images/profile${i}.jpg`}
                      alt={`Student ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">22k+ Students Onboarded</span>
                <a href="#" className="text-[#4ABEDF] font-medium">
                  View Profiles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
