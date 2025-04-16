// "use client";

// import { useEffect, useRef, useState } from "react";
// import { BoneIcon as Muscle } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// // Timeline data
// const timelineData = [
//   {
//     id: "01",
//     title: "Open free account",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     card: {
//       type: "signup",
//       content: "Sign up",
//     },
//     bgColor: "bg-blue-50",
//   },
//   {
//     id: "02",
//     title: "Submit your design",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     card: {
//       type: "submit",
//       content: "submit",
//     },
//     bgColor: "bg-blue-50",
//   },
//   {
//     id: "03",
//     title: "Grow in the community",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//     card: {
//       type: "votes",
//       content: "42 votes",
//     },
//     bgColor: "bg-red-50",
//   },
// ];

// export default function ScrollTimeline() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.6,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = sectionRefs.current.findIndex(
//             (ref) => ref === entry.target
//           );
//           if (index !== -1) {
//             setActiveIndex(index);
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sectionRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       sectionRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div className="w-full">
//       {timelineData.map((item, index) => (
//         <div
//           key={item.id}
//           ref={(el) => (sectionRefs.current[index] = el)}
//           className={cn(
//             "min-h-screen flex items-center justify-center px-4 md:px-10 transition-all duration-500",
//             item.bgColor
//           )}
//         >
//           <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
//             <div
//               className={cn(
//                 "relative flex justify-center items-center",
//                 item.bgColor === "bg-red-50" ? "bg-red-100" : "bg-blue-100",
//                 "rounded-full w-64 h-64 md:w-96 md:h-96"
//               )}
//             >
//               <div className="bg-white p-6 rounded-lg shadow-lg w-48 md:w-64 flex flex-col items-center">
//                 {item.card.type === "signup" && (
//                   <>
//                     <div className="w-full h-12 bg-gray-100 rounded mb-4"></div>
//                     <div className="w-full h-12 bg-gray-100 rounded mb-4"></div>
//                     <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
//                       {item.card.content}
//                     </button>
//                   </>
//                 )}
//                 {item.card.type === "submit" && (
//                   <>
//                     <div className="w-full h-32 bg-gray-800 rounded mb-4 flex items-center justify-center">
//                       <Image
//                         src="/placeholder.svg?height=100&width=100"
//                         width={100}
//                         height={100}
//                         alt="Design preview"
//                         className="object-cover"
//                       />
//                     </div>
//                     <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
//                       {item.card.content}
//                     </button>
//                   </>
//                 )}
//                 {item.card.type === "votes" && (
//                   <div className="bg-red-400 text-white py-2 px-4 rounded-md font-medium flex items-center">
//                     <Muscle className="w-5 h-5 mr-2" />
//                     {item.card.content}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="text-blue-600 font-bold text-xl mb-2">
//                 {item.id}
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 {item.title}
//               </h2>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="fixed bottom-8 left-0 right-0 flex justify-center">
//         <div className="relative w-[80%] max-w-3xl h-1 bg-gray-200 rounded-full">
//           <div
//             className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-500"
//             style={{
//               width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
//             }}
//           ></div>
//           {timelineData.map((item, index) => (
//             <div
//               key={item.id}
//               className={cn(
//                 "absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300",
//                 index <= activeIndex ? "bg-blue-600" : "bg-gray-300"
//               )}
//               style={{
//                 left: `${(index / (timelineData.length - 1)) * 100}%`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { BoneIcon as Muscle } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// const timelineData = [
//   {
//     id: "01",
//     title: "Open free account",
//     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
//     card: { type: "signup", content: "Sign up" },
//     bgColor: "bg-blue-50",
//   },
//   {
//     id: "02",
//     title: "Submit your design",
//     description: "Mauris non tempor quam, et lacinia sapien.",
//     card: { type: "submit", content: "Submit" },
//     bgColor: "bg-blue-50",
//   },
//   {
//     id: "03",
//     title: "Grow in the community",
//     description: "Pellentesque habitant morbi tristique senectus.",
//     card: { type: "votes", content: "42 votes" },
//     bgColor: "bg-red-50",
//   },
// ];

// export default function ScrollTimeline() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const onScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const containerWidth = container.clientWidth;
//       const index = Math.round(scrollLeft / containerWidth);
//       setActiveIndex(index);
//     };

//     container.addEventListener("scroll", onScroll);
//     return () => container.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Horizontal Scroll Container */}
//       <div
//         ref={scrollContainerRef}
//         className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-screen"
//       >
//         {timelineData.map((item, index) => (
//           <div
//             key={item.id}
//             className={cn(
//               "snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center transition-all duration-500",
//               item.bgColor
//             )}
//           >
//             <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-10 md:gap-20">
//               {/* Card */}
//               <div
//                 className={cn("flex justify-center items-center", item.bgColor)}
//               >
//                 <div className="bg-white p-6 rounded-lg shadow-lg w-48 md:w-64 flex flex-col items-center">
//                   {item.card.type === "signup" && (
//                     <>
//                       <div className="w-full h-12 bg-gray-100 rounded mb-4" />
//                       <div className="w-full h-12 bg-gray-100 rounded mb-4" />
//                       <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
//                         {item.card.content}
//                       </button>
//                     </>
//                   )}
//                   {item.card.type === "submit" && (
//                     <>
//                       <div className="w-full h-32 bg-gray-800 rounded mb-4 flex items-center justify-center">
//                         <Image
//                           src="/placeholder.svg?height=100&width=100"
//                           width={100}
//                           height={100}
//                           alt="Design preview"
//                         />
//                       </div>
//                       <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
//                         {item.card.content}
//                       </button>
//                     </>
//                   )}
//                   {item.card.type === "votes" && (
//                     <div className="bg-red-400 text-white py-2 px-4 rounded-md font-medium flex items-center">
//                       <Muscle className="w-5 h-5 mr-2" />
//                       {item.card.content}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="flex flex-col max-w-xl">
//                 <div className="text-blue-600 font-bold text-xl mb-2">
//                   {item.id}
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="fixed bottom-8 left-0 right-0 flex justify-center">
//         <div className="relative w-[80%] max-w-3xl h-1 bg-gray-200 rounded-full">
//           <div
//             className="absolute top-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300"
//             style={{
//               width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
//             }}
//           />
//           {timelineData.map((_, index) => (
//             <div
//               key={index}
//               className={cn(
//                 "absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 transition-all duration-300",
//                 index <= activeIndex ? "bg-blue-600" : "bg-gray-300"
//               )}
//               style={{
//                 left: `${(index / (timelineData.length - 1)) * 100}%`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { BoneIcon as Muscle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Timeline data
const timelineData = [
  {
    id: "01",
    title: "Free Expert Counseling",
    description:
      "Our expert counselors provide personalized guidance for students applying to universities abroad. They patiently understand each student's need and academic background and help them achieve their goals by recommending the best courses and institutions suited to their profile.",
    card: {
      type: "signup",
      content: "Sign up",
    },
    bgColor: "bg-blue-50",
  },
  {
    id: "02",
    title: "Identify Course, Country And University",
    description:
      "We help the students identify the destination country most suited for them, the institution as well as the course. For those who are undecided about the course we administer a test to determine the interests and abilities of the student.",
    card: {
      type: "submit",
      content: "submit",
    },
    bgColor: "bg-orange-50",
  },
  {
    id: "03",
    title: "International Test Prep",
    description:
      "We offer coaching for key standardized tests like TOEFL, PTE, IELTS, GMAT, GRE, SAT, and ACT, with personalized guidance provided by our expert faculty. Our comprehensive courseware and regular internal testing ensure that students achieve their target scores for admission to their desired institutions.",
    card: {
      type: "votes",
      content: "42 votes",
    },
    bgColor: "bg-red-50",
  },
  {
    id: "04",
    title: "Document Editing",
    description:
      "We prioritize delivering optimal results by meticulously processing each student’s application to eliminate errors. We focus on essential areas, provide feedback, and ensure all documents are properly compiled and sealed. Our counselors keep students updated on their application status, and our experts analyze documents to meet university-specific requirements, enhancing success rates and speeding up responses.",
    card: {
      type: "votes",
      content: "42 votes",
    },
    bgColor: "bg-yellow-50",
  },
  {
    id: "05",
    title: "Application Process",
    description:
      "We give special attention to every application for admission, whether it is paper based or online. Students and counselors collaborate to thoroughly check and improve documents before submission. Additionally, we provide personalized assessments to institutions, highlighting the student's strengths and suitability for a successful match.",
    card: {
      type: "votes",
      content: "42 votes",
    },
    bgColor: "bg-teal-50",
  },
  {
    id: "06",
    title: "Interview Preparation",
    description:
      "Interviews are needed for admission, visa eligibility and for visa grant too. We help prepare students with answers to questions that universities are likely to ask. These mock interview sessions are led by specialists who are highly familiar with the typical questions asked by universities.",
    card: {
      type: "votes",
      content: "42 votes",
    },
    bgColor: "bg-purple-50",
  },
  {
    id: "07",
    title: "Visa Guidance",
    description:
      "Visa guidance is free for all Edwise students for all countries. We maintain a 99% success rate in visa applications through updated consulate advice. Our special services includes mock visa interviews to prepare students for common questions and provide guidance on the dos and don'ts. We assist with the entire visa process, from application submission to document preparation, ensuring smooth navigation and minimizing delays.",
    card: {
      type: "votes",
      content: "42 votes",
    },
    bgColor: "bg-pink-50",
  },
];

export default function ScrollTimeline() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      const scrollContainer = scrollRef.current;

      if (container && scrollContainer) {
        const scrollTop = window.scrollY;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;

        // Calculate the scroll range within the container
        if (
          scrollTop >= containerTop &&
          scrollTop <= containerTop + containerHeight
        ) {
          const progress =
            (scrollTop - containerTop) / (containerHeight - window.innerHeight);
          const maxTranslateX = scrollContainer.scrollWidth - window.innerWidth;

          scrollContainer.style.transform = `translateX(-${
            progress * maxTranslateX
          }px)`;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[100vh] md:h-[120vh]"
        style={{
          height: `${timelineData.length * 100}vh`, // makes enough scroll area
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            ref={scrollRef}
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ width: `${timelineData.length * 100}vw` }}
          >
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "w-screen flex items-center justify-center px-4 md:px-10",
                  item.bgColor
                )}
              >
                <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
                  <div
                    className={cn(
                      "relative flex justify-center items-center",
                      item.bgColor === "bg-red-50"
                        ? "bg-red-100"
                        : "bg-blue-100",
                      "rounded-full w-64 h-64 md:w-96 md:h-96"
                    )}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg w-48 md:w-64 flex flex-col items-center">
                      {item.card.type === "signup" && (
                        <>
                          <div className="w-full h-12 bg-gray-100 rounded mb-4"></div>
                          <div className="w-full h-12 bg-gray-100 rounded mb-4"></div>
                          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
                            {item.card.content}
                          </button>
                        </>
                      )}
                      {item.card.type === "submit" && (
                        <>
                          <div className="w-full h-32 bg-gray-800 rounded mb-4 flex items-center justify-center">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              width={100}
                              height={100}
                              alt="Design preview"
                              className="object-cover"
                            />
                          </div>
                          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium">
                            {item.card.content}
                          </button>
                        </>
                      )}
                      {item.card.type === "votes" && (
                        <div className="bg-red-400 text-white py-2 px-4 rounded-md font-medium flex items-center">
                          <Muscle className="w-5 h-5 mr-2" />
                          {item.card.content}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-blue-600 font-bold text-xl mb-2">
                      {item.id}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Content after scroll */}
      {/* <div className="h-screen bg-white flex items-center justify-center text-xl font-bold">
        End of timeline — now you can scroll down!
      </div> */}
    </>
  );
}
