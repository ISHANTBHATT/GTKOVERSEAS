// import React, { useState } from "react";

// import {
//   Circle,
//   Leaf,
//   Flame,
//   Eye,
//   Shield,
//   Building,
//   Zap,
//   Target,
//   Box,
//   Code,
// } from "lucide-react";
// function Partners() {
//   const clients = [
//     {
//       id: 1,
//       name: "Nexus Corp",
//       logo: Circle,
//       color: "#1a1a1a",
//       industry: "Technology",
//       description: "Leading innovation in cloud computing",
//       website: "https://nexus.example.com",
//     },
//     {
//       id: 2,
//       name: "Greeny",
//       logo: Leaf,
//       color: "#97C22B",
//       industry: "Sustainability",
//       description: "Eco-friendly solutions provider",
//       website: "https://greeny.example.com",
//     },
//     {
//       id: 3,
//       name: "Flora Store",
//       logo: Flame,
//       color: "#FF6B6B",
//       industry: "Retail",
//       description: "Premium lifestyle products",
//       website: "https://flora.example.com",
//     },
//     {
//       id: 4,
//       name: "Olive Health",
//       logo: Eye,
//       color: "#4CAF50",
//       industry: "Healthcare",
//       description: "Modern healthcare solutions",
//       website: "https://olive.example.com",
//     },
//     {
//       id: 5,
//       name: "Shield Tech",
//       logo: Shield,
//       color: "#607D8B",
//       industry: "Security",
//       description: "Advanced security systems",
//       website: "https://shield.example.com",
//     },
//     {
//       id: 6,
//       name: "Metro Corp",
//       logo: Building,
//       color: "#3F51B5",
//       industry: "Infrastructure",
//       description: "Urban development solutions",
//       website: "https://metro.example.com",
//     },
//     {
//       id: 7,
//       name: "Power Systems",
//       logo: Zap,
//       color: "#FFC107",
//       industry: "Energy",
//       description: "Renewable energy solutions",
//       website: "https://power.example.com",
//     },
//     {
//       id: 8,
//       name: "Target Plus",
//       logo: Target,
//       color: "#E91E63",
//       industry: "Marketing",
//       description: "Digital marketing experts",
//       website: "https://targetplus.example.com",
//     },
//     {
//       id: 9,
//       name: "Box Logic",
//       logo: Box,
//       color: "#795548",
//       industry: "Logistics",
//       description: "Smart logistics solutions",
//       website: "https://boxlogic.example.com",
//     },
//     {
//       id: 10,
//       name: "Code Labs",
//       logo: Code,
//       color: "#009688",
//       industry: "Software",
//       description: "Custom software development",
//       website: "https://codelabs.example.com",
//     },
//   ];
//   return (
//     <div className="min-h-screen py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Client List</h1>
//           <p className="text-lg text-gray-600">Our Partners</p>
//         </div>

//         <div className="client-grid">
//           {clients.map((client, index) => (
//             <ClientLogo
//               key={client.id}
//               name={client.name}
//               Logo={client.logo}
//               color={client.color}
//               delay={index * 0.2}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ClientLogo({ name, Logo, color, delay, onClick }) {
//   return (
//     <div
//       className="logo-container group cursor-pointer"
//       onClick={onClick}
//       style={{ "--delay": `${delay}s` }}
//     >
//       <div
//         className="client-logo relative w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
//         style={{ backgroundColor: color }}
//       >
//         <Logo className="w-12 h-12 text-white" />
//         <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300" />
//       </div>
//       <p className="mt-3 text-center text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         {name}
//       </p>
//     </div>
//   );
// }

// export default Partners;
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const clients = [
  "/images/usa-u1.png",
  "/images/usa-u2.png",
  "/images/hu3.png",
  "/images/hu4.png",
  "/images/hu5.png",
  "/images/hu6.jpg",
  "/images/hu7.png",
  "/images/hu8.png",
  "/images/hu9.png",
  "/images/hu10.png",
  "/images/hu11.png",
  "/images/hu12.jpg",
  "/images/hu13.png",
  "/images/hu14.png",
  "/images/hu15.png",
  "/images/hu16.png",
  "/images/hu17.jpg",
  "/images/hu18.png",
  "/images/hu19.png",
  "/images/hu20.png",
  "/images/hu21.png",
  "/images/hu22.png",
  "/images/hu23.png",
];

export default function ClientList() {
  return (
    // <section className="w-full py-10 bg-white text-center">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <h2 className="text-4xl font-bold text-gray-900">
    //       Our Top Ranked Partners
    //     </h2>
    //     <p className="text-gray-500 text-sm mt-1">
    //       Here are the top universities according to the QS World Rankings.
    //     </p>

    //     <div className="mt-10 flex flex-wrap justify-center gap-6">
    //       {clients.map((logo, index) => (
    //         <div
    //           key={index}
    //           className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm border border-gray-200 flex items-center justify-center bg-white"
    //         >
    //           <Image
    //             src={logo}
    //             alt={`Client logo ${index + 1}`}
    //             width={80}
    //             height={80}
    //             className="object-contain"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="w-full py-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          Our Top Ranked Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-1"
        >
          Here are the top universities according to the QS World Rankings.
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm border border-gray-200 flex items-center justify-center bg-white"
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
