// pages/index.js
// "use client";
// import { useRef, useState, useEffect } from "react";
// import Image from "next/image";

// export default function Scroll() {
//   // Example data for each “step” or section
//   const sections = [
//     {
//       title: "Let's party",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "/images/pic1.jpg",
//     },
//     {
//       title: "They're all here",
//       text: "Dolor iusto quaerat qui, illo incidunt suscipit.",
//       image: "/images/pic2.jpg",
//     },
//     {
//       title: "It's simple",
//       text: "Distinctio officia earum eius atque officiis quis harum animi.",
//       image: "/images/pic3.jpg",
//     },
//   ];

//   return (
//     <div>
//       {sections.map((section, idx) => (
//         <ScrollSection
//           key={idx}
//           title={section.title}
//           text={section.text}
//           image={section.image}
//           // Reverse layout on odd sections
//           reverse={idx % 2 !== 0}
//         />
//       ))}
//     </div>
//   );
// }

// function ScrollSection({ title, text, image, reverse }) {
//   const [show, setShow] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section
//       ref={ref}
//       className="min-h-screen flex items-center justify-center px-4 md:px-0"
//     >
//       <div
//         className={`
//           max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center
//           transition-all duration-1000 ease-in-out
//           ${reverse ? "md:flex-row-reverse" : ""}
//         `}
//       >
//         {/* TEXT BLOCK */}
//         <div
//           className={`
//             w-full md:w-1/2 p-6
//             transition-transform duration-1000
//             ${show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
//           `}
//         >
//           <h2 className="text-3xl font-bold mb-4">{title}</h2>
//           <p className="text-lg">{text}</p>
//         </div>

//         {/* IMAGE BLOCK */}
//         <div
//           className={`
//             w-full md:w-1/2 p-6
//             transition-transform duration-1000
//             ${
//               show
//                 ? // When visible
//                   reverse
//                   ? "-translate-x-0 opacity-100"
//                   : "translate-x-0 opacity-100"
//                 : // When hidden
//                 reverse
//                 ? "translate-x-12 opacity-0"
//                 : "-translate-x-12 opacity-0"
//             }
//           `}
//         >
//           <Image
//             src={image}
//             alt={title}
//             width={600}
//             height={400}
//             className="mx-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { GraduationCap, University, CircleDollarSign } from "lucide-react";
import { FaUniversity } from "react-icons/fa";
const content = [
  // {
  //   title: "Exam Preparation",
  //   icon: GraduationCap,
  //   description:
  //     "Offer resources and support for standardized tests such as the TOEFL, IELTS, GRE, or GMAT, depending on the student's destination and program requirements.",
  //   content: (
  //     <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
  //       <Image
  //         src="/images/a1.jpg"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="linear board demo"
  //       />
  //     </div>
  //   ),
  // },
  {
    title: "Financial Planning",
    icon: CircleDollarSign,
    description:
      "Help students explore scholarships, grants, and financial aid options. Assist in creating a budget that covers tuition, living expenses, and travel costs.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/a2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Visa Application",
    icon: FaUniversity,
    description:
      "Provide step-by-step guidance on the visa application process, ensuring students understand the documentation required and any interviews they might need to attend.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src="/images/a3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Pre-Departure Orientation",
    icon: CircleDollarSign,
    description:
      "Conduct sessions to prepare students for their international journey. Topics can include cultural differences, accommodation arrangements, healthcare, and safety tips.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/images/a4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Career Counseling",
    icon: University,
    description:
      " Provide advice on internships, part-time work opportunities, and post-graduation employment prospects to help students make the most of their international education experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/images/a5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function Scroll() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
