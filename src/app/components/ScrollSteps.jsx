// "use client";
// import { useState, useEffect, useCallback } from "react";

// const pages = [
//   {
//     id: 1,
//     leftBg:
//       "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')]",
//     rightBg: "bg-gray-800",
//     heading: "Skewed One Page Scroll",
//     description: "Just scroll down",
//     link: null,
//   },
//   {
//     id: 2,
//     leftBg: "bg-gray-800",
//     rightBg:
//       "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg')]",
//     heading: "Page 2",
//     description: "Nothing to do here, continue scrolling.",
//     link: null,
//   },
//   {
//     id: 3,
//     leftBg:
//       "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')]",
//     rightBg: "bg-gray-800",
//     heading: "Page 3",
//     description: "The end is near, I promise!",
//     link: null,
//   },
//   {
//     id: 4,
//     leftBg: "bg-gray-800",
//     rightBg:
//       "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')]",
//     heading: "Page 4",
//     description: "Ok, ok, just one more scroll!",
//     link: null,
//   },
//   {
//     id: 5,
//     leftBg:
//       "bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg')]",
//     rightBg: "bg-gray-800",
//     heading: "Epic finale",
//     description: (
//       <span>
//         Feel free to check{" "}
//         <a
//           href="https://codepen.io/suez/pens/public/"
//           className="text-pink-300 underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           my other pens
//         </a>{" "}
//         and follow me on{" "}
//         <a
//           href="https://twitter.com/NikolayTalanov"
//           className="text-pink-300 underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Twitter
//         </a>
//       </span>
//     ),
//   },
// ];

// export default function SkewScroll() {
//   const [curPage, setCurPage] = useState(1);
//   const numOfPages = pages.length;
//   const animTime = 1000;
//   const [scrolling, setScrolling] = useState(false);

//   const go = useCallback(
//     (newPage) => {
//       if (scrolling || newPage < 1 || newPage > numOfPages) return;
//       setScrolling(true);
//       setCurPage(newPage);
//       setTimeout(() => setScrolling(false), animTime);
//     },
//     [scrolling, numOfPages]
//   );

//   const onWheel = useCallback(
//     (e) => {
//       if (scrolling) return;
//       go(curPage + (e.deltaY > 0 ? 1 : -1));
//     },
//     [scrolling, curPage, go]
//   );

//   const onKey = useCallback(
//     (e) => {
//       if (scrolling) return;
//       if (e.key === "ArrowUp") go(curPage - 1);
//       else if (e.key === "ArrowDown") go(curPage + 1);
//     },
//     [scrolling, curPage, go]
//   );

//   useEffect(() => {
//     window.addEventListener("wheel", onWheel);
//     window.addEventListener("keydown", onKey);
//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [onWheel, onKey]);

//   return (
//     <div className="relative overflow-hidden h-screen">
//       {pages.map((page) => {
//         const offset = page.id - curPage;
//         // For both halves: offset === 0 => visible, offset < 0 => above/down depending
//         const leftTransform =
//           offset === 0
//             ? "translate-y-0"
//             : offset < 0
//             ? "-translate-y-full"
//             : "translate-y-full";
//         const rightTransform =
//           offset === 0
//             ? "translate-y-0"
//             : offset < 0
//             ? "translate-y-full"
//             : "-translate-y-full";
//         const commonHalf =
//           "absolute top-0 w-1/2 h-screen transition-transform duration-[1000ms]";
//         return (
//           <div key={page.id} className="absolute inset-0 w-full">
//             {/* Left Half */}
//             <div className={`${commonHalf} left-0 ${leftTransform}`}>
//               <div className="absolute top-0 left-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black">
//                 <div
//                   className={`flex items-center justify-center flex-col w-full h-full px-[30%] text-white transform skew-x-[18deg] transition-transform duration-[1000ms] ${
//                     offset === 0 ? "" : "opacity-50 scale-95"
//                   } ${page.leftBg}`}
//                 >
//                   {page.id !== 5 && (
//                     <h2 className="uppercase text-2xl mb-4 text-center">
//                       {page.heading}
//                     </h2>
//                   )}
//                   {page.id !== 5 && (
//                     <p className="text-lg text-center">{page.description}</p>
//                   )}
//                   {page.id === 5 && <>{page.description}</>}
//                 </div>
//               </div>
//             </div>
//             {/* Right Half */}
//             <div className={`${commonHalf} left-1/2 ${rightTransform}`}>
//               <div className="absolute top-0 right-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black">
//                 <div
//                   className={`flex items-center justify-center flex-col w-full h-full px-[30%] text-white transform skew-x-[18deg] transition-transform duration-[1000ms] ${
//                     offset === 0 ? "" : "opacity-50 scale-95"
//                   } ${page.rightBg}`}
//                 >
//                   {offset === 0 && page.id !== 5 && (
//                     <h2 className="uppercase text-2xl mb-4 text-center">
//                       {page.heading}
//                     </h2>
//                   )}
//                   {offset === 0 && page.id !== 5 && (
//                     <p className="text-lg text-center">{page.description}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

//working
// "use client";
// import { useState, useEffect, useRef } from "react";

// const magicVH = 32.4; // magic vh based on skew angle
// const animTime = 1000; // in ms

// const pages = [
//   {
//     title: "Skewed One Page Scroll",
//     description: "Just scroll down",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')",
//     bgRight: "black",
//   },
//   {
//     title: "Page 2",
//     description: "Nothing to do here, continue scrolling.",
//     bgLeft: "black",
//     bgRight:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg')",
//   },
//   {
//     title: "Page 3",
//     description: "The end is near, I promise!",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')",
//     bgRight: "black",
//   },
//   {
//     title: "Page 4",
//     description: "Ok, ok, just one more scroll!",
//     bgLeft: "black",
//     bgRight:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')",
//   },
//   {
//     title: "Epic finale",
//     description: "Feel free to check my other pens and follow me on Twitter",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg')",
//     bgRight: "black",
//     links: [
//       { text: "my other pens", href: "https://codepen.io/suez/pens/public/" },
//       { text: "Twitter", href: "https://twitter.com/NikolayTalanov" },
//     ],
//   },
// ];

// export default function ScrollSteps() {
//   const [curPage, setCurPage] = useState(1);
//   const numOfPages = pages.length;
//   const scrollingRef = useRef(false);

//   const pagination = (newPage) => {
//     scrollingRef.current = true;
//     setCurPage(newPage);
//     setTimeout(() => {
//       scrollingRef.current = false;
//     }, animTime);
//   };

//   const navigateUp = () => {
//     if (curPage === 1 || scrollingRef.current) return;
//     pagination(curPage - 1);
//   };
//   const navigateDown = () => {
//     if (curPage === numOfPages || scrollingRef.current) return;
//     pagination(curPage + 1);
//   };

//   useEffect(() => {
//     const onWheel = (e) => {
//       if (scrollingRef.current) return;
//       if (e.deltaY < 0) navigateUp();
//       else navigateDown();
//     };
//     const onKey = (e) => {
//       if (scrollingRef.current) return;
//       if (e.key === "ArrowUp") navigateUp();
//       if (e.key === "ArrowDown") navigateDown();
//     };
//     window.addEventListener("wheel", onWheel);
//     window.addEventListener("keydown", onKey);
//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [curPage]);

//   const isUrl = (bg) => typeof bg === "string" && bg.startsWith("url");

//   return (
//     <div className="relative overflow-hidden h-screen">
//       {pages.map((p, i) => {
//         const idx = i + 1;
//         const active = idx === curPage;
//         const inactive = idx === curPage - 1;
//         const showLeftText = isUrl(p.bgRight); // if right is image, text on left
//         const showRightText = isUrl(p.bgLeft); // if left is image, text on right

//         const leftStyle = {
//           transform: active
//             ? "translate3d(0,0,0)"
//             : `translate3d(-${magicVH}vh, 100%, 0)`,
//           transition: `transform ${animTime}ms`,
//         };
//         const rightStyle = {
//           transform: active
//             ? "translate3d(0,0,0)"
//             : `translate3d(${magicVH}vh, -100%, 0)`,
//           transition: `transform ${animTime}ms`,
//         };

//         return (
//           <div key={i} className="absolute top-0 left-0 w-full h-screen">
//             {/* Left half */}
//             <div
//               className="absolute top-0 left-0 w-1/2 h-full"
//               style={leftStyle}
//             >
//               <div className="absolute top-0 left-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center text-white"
//                   style={{
//                     padding: "0 30%",
//                     transform:
//                       showLeftText || active
//                         ? "skewX(18deg)"
//                         : "skewX(18deg) scale(0.95)",
//                     opacity: showLeftText || active ? 1 : 0,
//                     transition: `transform ${animTime}ms, opacity ${animTime}ms`,
//                     background: p.bgLeft,
//                     backgroundSize: "cover",
//                     transformOrigin: "100% 0",
//                   }}
//                 >
//                   {showLeftText && (
//                     <>
//                       <h2 className="mb-4 uppercase text-xl text-center">
//                         {p.title}
//                       </h2>
//                       <p className="text-lg text-center">
//                         {p.description}
//                         {p.links &&
//                           p.links.map((link, j) => (
//                             <a
//                               key={j}
//                               className="text-pink-300 ml-1"
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {link.text}
//                             </a>
//                           ))}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Right half */}
//             <div
//               className="absolute top-0 left-1/2 w-1/2 h-full"
//               style={rightStyle}
//             >
//               <div className="absolute top-0 right-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center text-white"
//                   style={{
//                     padding: "0 30%",
//                     transform:
//                       showRightText || active
//                         ? "skewX(18deg)"
//                         : "skewX(18deg) scale(0.95)",
//                     opacity: showRightText || active ? 1 : 0,
//                     transition: `transform ${animTime}ms, opacity ${animTime}ms`,
//                     background: p.bgRight,
//                     backgroundSize: "cover",
//                     transformOrigin: "0 100%",
//                   }}
//                 >
//                   {showRightText && (
//                     <>
//                       <h2 className="mb-4 uppercase text-xl text-center">
//                         {p.title}
//                       </h2>
//                       <p className="text-lg text-center">
//                         {p.description}
//                         {p.links &&
//                           p.links.map((link, j) => (
//                             <a
//                               key={j}
//                               className="text-pink-300 ml-1"
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {link.text}
//                             </a>
//                           ))}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

//test
// "use client";
// import { useState, useEffect, useRef } from "react";

// const magicVH = 32.4; // magic vh based on skew angle
// const animTime = 1000; // in ms

// const pages = [
//   {
//     title: "Skewed One Page Scroll",
//     description: "Just scroll down",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg')",
//     bgRight: "black",
//   },
//   {
//     title: "Page 2",
//     description: "Nothing to do here, continue scrolling.",
//     bgLeft: "black",
//     bgRight:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg')",
//   },
//   {
//     title: "Page 3",
//     description: "The end is near, I promise!",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg')",
//     bgRight: "black",
//   },
//   {
//     title: "Page 4",
//     description: "Ok, ok, just one more scroll!",
//     bgLeft: "black",
//     bgRight:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')",
//   },
//   {
//     title: "Epic finale",
//     description: "Feel free to check my other pens and follow me on Twitter",
//     bgLeft:
//       "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg')",
//     bgRight: "black",
//     links: [
//       { text: "my other pens", href: "https://codepen.io/suez/pens/public/" },
//       { text: "Twitter", href: "https://twitter.com/NikolayTalanov" },
//     ],
//   },
// ];

// export default function ScrollSteps() {
//   const [curPage, setCurPage] = useState(1);
//   const numOfPages = pages.length;
//   const scrollingRef = useRef(false);
//   const containerRef = useRef(null);
//   const lastScrollY = useRef(0);
//   const pageHeight = useRef(0);

//   const pagination = (newPage) => {
//     scrollingRef.current = true;
//     setCurPage(newPage);

//     // Scroll to the appropriate position
//     if (containerRef.current) {
//       const targetScrollY = (newPage - 1) * pageHeight.current;
//       window.scrollTo({
//         top: targetScrollY,
//         behavior: "smooth",
//       });
//     }

//     setTimeout(() => {
//       scrollingRef.current = false;
//     }, animTime);
//   };

//   const navigateUp = () => {
//     if (curPage === 1 || scrollingRef.current) return;
//     pagination(curPage - 1);
//   };

//   const navigateDown = () => {
//     if (curPage === numOfPages || scrollingRef.current) return;
//     pagination(curPage + 1);
//   };

//   // Initialize page height and set up scroll sections
//   useEffect(() => {
//     if (containerRef.current) {
//       pageHeight.current = window.innerHeight;

//       // Set the container height to accommodate all pages
//       document.body.style.height = `${pageHeight.current * numOfPages}px`;

//       // Make the container fixed position but take up full viewport
//       containerRef.current.style.position = "fixed";
//       containerRef.current.style.top = "0";
//       containerRef.current.style.left = "0";
//       containerRef.current.style.width = "100%";
//       containerRef.current.style.height = "100vh";
//     }

//     return () => {
//       // Reset body height when component unmounts
//       document.body.style.height = "";
//     };
//   }, [numOfPages]);

//   // Handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollingRef.current) return;

//       const currentScrollY = window.scrollY;
//       const scrollDirection =
//         currentScrollY > lastScrollY.current ? "down" : "up";
//       lastScrollY.current = currentScrollY;

//       // Calculate which page we should be on based on scroll position
//       const targetPage = Math.floor(currentScrollY / pageHeight.current) + 1;

//       // Only change page if we've scrolled significantly
//       const scrollThreshold = pageHeight.current * 0.1; // 10% of page height
//       const scrollOffset = currentScrollY % pageHeight.current;

//       if (targetPage !== curPage && !scrollingRef.current) {
//         if (
//           (scrollDirection === "down" && scrollOffset > scrollThreshold) ||
//           (scrollDirection === "up" &&
//             scrollOffset < pageHeight.current - scrollThreshold)
//         ) {
//           pagination(targetPage);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [curPage]);

//   // Keep the wheel and keyboard navigation
//   useEffect(() => {
//     const onWheel = (e) => {
//       if (scrollingRef.current) return;
//       if (e.deltaY < 0) navigateUp();
//       else navigateDown();
//     };

//     const onKey = (e) => {
//       if (scrollingRef.current) return;
//       if (e.key === "ArrowUp") navigateUp();
//       if (e.key === "ArrowDown") navigateDown();
//     };

//     window.addEventListener("wheel", onWheel);
//     window.addEventListener("keydown", onKey);

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [curPage]);

//   const isUrl = (bg) => typeof bg === "string" && bg.startsWith("url");

//   return (
//     <div ref={containerRef} className="relative overflow-hidden h-screen">
//       {pages.map((p, i) => {
//         const idx = i + 1;
//         const active = idx === curPage;
//         const showLeftText = isUrl(p.bgRight); // if right is image, text on left
//         const showRightText = isUrl(p.bgLeft); // if left is image, text on right

//         const leftStyle = {
//           transform: active
//             ? "translate3d(0,0,0)"
//             : `translate3d(-${magicVH}vh, 100%, 0)`,
//           transition: `transform ${animTime}ms`,
//         };
//         const rightStyle = {
//           transform: active
//             ? "translate3d(0,0,0)"
//             : `translate3d(${magicVH}vh, -100%, 0)`,
//           transition: `transform ${animTime}ms`,
//         };

//         return (
//           <div key={i} className="absolute top-0 left-0 w-full h-screen">
//             {/* Left half */}
//             <div
//               className="absolute top-0 left-0 w-1/2 h-full"
//               style={leftStyle}
//             >
//               <div className="absolute top-0 left-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center text-white"
//                   style={{
//                     padding: "0 30%",
//                     transform:
//                       showLeftText || active
//                         ? "skewX(18deg)"
//                         : "skewX(18deg) scale(0.95)",
//                     opacity: showLeftText || active ? 1 : 0,
//                     transition: `transform ${animTime}ms, opacity ${animTime}ms`,
//                     background: p.bgLeft,
//                     backgroundSize: "cover",
//                     transformOrigin: "100% 0",
//                   }}
//                 >
//                   {showLeftText && (
//                     <>
//                       <h2 className="mb-4 uppercase text-xl text-center">
//                         {p.title}
//                       </h2>
//                       <p className="text-lg text-center">
//                         {p.description}
//                         {p.links &&
//                           p.links.map((link, j) => (
//                             <a
//                               key={j}
//                               className="text-pink-300 ml-1"
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {link.text}
//                             </a>
//                           ))}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Right half */}
//             <div
//               className="absolute top-0 left-1/2 w-1/2 h-full"
//               style={rightStyle}
//             >
//               <div className="absolute top-0 right-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center text-white"
//                   style={{
//                     padding: "0 30%",
//                     transform:
//                       showRightText || active
//                         ? "skewX(18deg)"
//                         : "skewX(18deg) scale(0.95)",
//                     opacity: showRightText || active ? 1 : 0,
//                     transition: `transform ${animTime}ms, opacity ${animTime}ms`,
//                     background: p.bgRight,
//                     backgroundSize: "cover",
//                     transformOrigin: "0 100%",
//                   }}
//                 >
//                   {showRightText && (
//                     <>
//                       <h2 className="mb-4 uppercase text-xl text-center">
//                         {p.title}
//                       </h2>
//                       <p className="text-lg text-center">
//                         {p.description}
//                         {p.links &&
//                           p.links.map((link, j) => (
//                             <a
//                               key={j}
//                               className="text-pink-300 ml-1"
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {link.text}
//                             </a>
//                           ))}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";

const magicVH = 32.4; // magic vh based on skew angle
const animTime = 1000; // in ms

const pages = [
  {
    title: "Financial Planning",
    description:
      "Help students explore scholarships, grants, and financial aid options. Assist in creating a budget that covers tuition, living expenses, and travel costs.",
    bgLeft: "url('/images/a2.jpg')",
    bgRight: "#8A0206",
  },
  {
    title: "Visa Application",
    description:
      "Provide step-by-step guidance on the visa application process, ensuring students understand the documentation required and any interviews they might need to attend.",
    bgLeft: "#8A0206",
    bgRight: "url('/images/a3.jpg')",
  },
  {
    title: "Pre-Departure Orientation",
    description:
      "Conduct sessions to prepare students for their international journey. Topics can include cultural differences, accommodation arrangements, healthcare, and safety tips.",
    bgLeft: "url('/images/a4.jpg')",
    bgRight: "#8A0206",
  },
  {
    title: "Career Counseling",
    description:
      "Provide advice on internships, part-time work opportunities, and post-graduation employment prospects to help students make the most of their international education experience.",
    bgLeft: "#8A0206",
    bgRight: "url('/images/a8.jpg')",
  },
  // {
  //   title: "Epic finale",
  //   description: "Feel free to check my other pens and follow me on Twitter",
  //   bgLeft:
  //     "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg')",
  //   bgRight: "black",
  //   links: [
  //     { text: "my other pens", href: "https://codepen.io/suez/pens/public/" },
  //     { text: "Twitter", href: "https://twitter.com/NikolayTalanov" },
  //   ],
  // },
];

export default function ScrollSteps() {
  const [curPage, setCurPage] = useState(1);
  const numOfPages = pages.length;
  const scrollingRef = useRef(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const pageHeight = useRef(0);
  const [isMounted, setIsMounted] = useState(false);

  const pagination = (newPage) => {
    scrollingRef.current = true;
    setCurPage(newPage);

    // Scroll to the appropriate position within the section
    if (containerRef.current && sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const targetScrollY = sectionTop + (newPage - 1) * pageHeight.current;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      scrollingRef.current = false;
    }, animTime);
  };

  const navigateUp = () => {
    if (curPage === 1 || scrollingRef.current) return;
    pagination(curPage - 1);
  };

  const navigateDown = () => {
    if (curPage === numOfPages || scrollingRef.current) return;
    pagination(curPage + 1);
  };

  // Initialize page height and set up scroll sections
  useEffect(() => {
    pageHeight.current = window.innerHeight;
    setIsMounted(true);

    if (sectionRef.current && containerRef.current) {
      // Set the section height to accommodate all pages
      sectionRef.current.style.height = `${pageHeight.current * numOfPages}px`;

      // Make the container relative to the section but fixed in viewport
      containerRef.current.style.position = "sticky";
      containerRef.current.style.top = "0";
      containerRef.current.style.width = "100%";
      containerRef.current.style.height = "100vh";
      containerRef.current.style.zIndex = "10";
    }

    return () => {
      // Reset when component unmounts
      if (sectionRef.current) {
        sectionRef.current.style.height = "";
      }
    };
  }, [numOfPages]);

  // Handle scroll events
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (scrollingRef.current || !sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const currentScrollY = window.scrollY;

      // Only process scrolls within our section
      if (currentScrollY < sectionTop || currentScrollY > sectionBottom) return;

      const relativeScroll = currentScrollY - sectionTop;
      const scrollDirection =
        relativeScroll > lastScrollY.current ? "down" : "up";
      lastScrollY.current = relativeScroll;

      // Calculate which page we should be on based on scroll position within the section
      const targetPage = Math.floor(relativeScroll / pageHeight.current) + 1;

      // Ensure targetPage is within bounds
      const boundedTargetPage = Math.max(1, Math.min(targetPage, numOfPages));

      // Only change page if we've scrolled significantly and page would change
      if (boundedTargetPage !== curPage && !scrollingRef.current) {
        pagination(boundedTargetPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [curPage, isMounted]);

  // Handle wheel and keyboard navigation
  useEffect(() => {
    if (!isMounted) return;

    // const onWheel = (e) => {
    //   if (!sectionRef.current) return;

    //   const sectionRect = sectionRef.current.getBoundingClientRect();
    //   // Only process wheel events when the section is visible in viewport
    //   if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight)
    //     return;

    //   if (scrollingRef.current) return;
    //   if (e.deltaY < 0) navigateUp();
    //   else navigateDown();
    // };

    const onKey = (e) => {
      if (!sectionRef.current) return;

      // Only process key events when the section is in view
      const sectionRect = sectionRef.current.getBoundingClientRect();
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight)
        return;

      if (scrollingRef.current) return;
      if (e.key === "ArrowUp") navigateUp();
      if (e.key === "ArrowDown") navigateDown();
    };

    // window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      // window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [curPage, isMounted]);

  const isUrl = (bg) => typeof bg === "string" && bg.startsWith("url");

  return (
    <section ref={sectionRef} className="w-full relative mb-20">
      <div ref={containerRef} className="overflow-hidden">
        {pages.map((p, i) => {
          const idx = i + 1;
          const active = idx === curPage;
          const showLeftText = isUrl(p.bgRight); // if right is image, text on left
          const showRightText = isUrl(p.bgLeft); // if left is image, text on right

          const leftStyle = {
            transform: active
              ? "translate3d(0,0,0)"
              : `translate3d(-${magicVH}vh, 100%, 0)`,
            transition: `transform ${animTime}ms`,
          };
          const rightStyle = {
            transform: active
              ? "translate3d(0,0,0)"
              : `translate3d(${magicVH}vh, -100%, 0)`,
            transition: `transform ${animTime}ms`,
          };

          return (
            <div key={i} className="absolute top-0 left-0 w-full h-screen">
              {/* Left half */}
              <div
                className="absolute top-0 left-0 w-1/2 h-full"
                style={leftStyle}
              >
                <div className="absolute top-0 left-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white"
                    style={{
                      padding: "0 30%",
                      transform:
                        showLeftText || active
                          ? "skewX(18deg)"
                          : "skewX(18deg) scale(0.95)",
                      opacity: showLeftText || active ? 1 : 0,
                      transition: `transform ${animTime}ms, opacity ${animTime}ms`,
                      background: p.bgLeft,
                      backgroundSize: "cover",
                      transformOrigin: "100% 0",
                    }}
                  >
                    {showLeftText && (
                      <>
                        <h2 className="mb-4  text-3xl text-center">
                          {p.title}
                        </h2>
                        <p className="text-xl text-center">
                          {p.description}
                          {p.links &&
                            p.links.map((link, j) => (
                              <a
                                key={j}
                                className="text-pink-300 ml-1"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.text}
                              </a>
                            ))}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Right half */}
              <div
                className="absolute top-0 left-1/2 w-1/2 h-full"
                style={rightStyle}
              >
                <div className="absolute top-0 right-[-40%] w-[140%] h-full transform -skew-x-[18deg] bg-black overflow-hidden">
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white"
                    style={{
                      padding: "0 30%",
                      transform:
                        showRightText || active
                          ? "skewX(18deg)"
                          : "skewX(18deg) scale(0.95)",
                      opacity: showRightText || active ? 1 : 0,
                      transition: `transform ${animTime}ms, opacity ${animTime}ms`,
                      background: p.bgRight,
                      backgroundSize: "cover",
                      transformOrigin: "0 100%",
                    }}
                  >
                    {showRightText && (
                      <>
                        <h2 className="mb-4  text-3xl text-center">
                          {p.title}
                        </h2>
                        <p className="text-xl text-center">
                          {p.description}
                          {p.links &&
                            p.links.map((link, j) => (
                              <a
                                key={j}
                                className="text-pink-300 ml-1"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.text}
                              </a>
                            ))}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
