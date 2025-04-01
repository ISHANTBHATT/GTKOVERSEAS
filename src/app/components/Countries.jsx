// import Image from "next/image";

// export default function Countries() {
//   const countries = [
//     { name: "USA", flag: "/images/USA.png" },
//     { name: "UK", flag: "/images/UK.png" },
//     { name: "Canada", flag: "/images/Canada.png" },
//     { name: "Australia", flag: "/images/Australia.png" },
//     { name: "Germany", flag: "/images/Germany.png" },
//     { name: "France", flag: "/images/Spain.png" },
//   ];

//   return (
//     <div className="flex flex-col items-center text-center space-y-4 p-6">
//       <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
//         Online <span className="text-blue-500">Classes</span>
//       </h2>
//       <p className="text-lg text-gray-600 font-medium">Countries We Serve</p>
//       <div className="flex flex-wrap justify-center gap-4">
//         {countries.map((country, index) => (
//           <div
//             key={index}
//             className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 shadow-md bg-white hover:scale-105 transition-all"
//           >
//             <Image
//               src={country.flag}
//               alt={country.name}
//               width={30}
//               height={20}
//               className="rounded"
//             />
//             <span className="text-gray-700 font-semibold">{country.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export function Countries() {
  const cards = [
    {
      title: "Study in USA",
      src: "/images/usa.jpg",
    },
    {
      title: "Study in UK",
      src: "/images/uk.jpg",
    },
    {
      title: "Study in Canada",
      src: "/images/canada.jpg",
    },
    {
      title: "Study in Australia",
      src: "/images/australia.jpg",
    },
    {
      title: "Study in New Zealand",
      src: "/images/new-zealand.jpg",
    },
    {
      title: "Study in Ireland",
      src: "/images/ireland.jpg",
    },
  ];

  return (
    <div className="pt-20">
      <div>
        <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide text-center py-10">
          Let Us Help You Live Your{" "}
          <span className="text-[#8A0206]">Dream</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 font-medium text-center pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea.
        </p>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
