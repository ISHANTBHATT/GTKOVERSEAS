// "use client";
// import { useState, useEffect, useRef } from "react";
// import "./Carousel.css";

// const Carousel = () => {
//   const TIME_AUTO_NEXT = 3500;
//   const initialItems = [
//     {
//       id: 1,
//       title: "SUNRISE ON PEAKS",
//       name: "Sunrise",
//       description:
//         "Witness the serene beauty of the sunrise over majestic mountain peaks. A moment of pure tranquility.",
//       image: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg",
//     },
//     {
//       id: 2,
//       title: "RUGGED ROCKS",
//       name: "Rocky",
//       description:
//         "Explore the rugged beauty of barren rocky mountains. A testament to nature's raw power.",
//       image:
//         "https://images.pexels.com/photos/17804524/pexels-photo-17804524/free-photo-of-barren-rocky-mountains.jpeg",
//     },
//     {
//       id: 3,
//       title: "FOREST PATHWAY",
//       name: "Forest",
//       description:
//         "A peaceful trail through dense green forests. Perfect for reconnecting with nature.",
//       image:
//         "https://images.pexels.com/photos/6439041/pexels-photo-6439041.jpeg",
//     },
//     {
//       id: 4,
//       title: "COLORFUL MEADOW",
//       name: "Meadow",
//       description:
//         "A colorful meadow filled with butterflies and blooming flowers. Nature at its best.",
//       image:
//         "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg",
//     },
//     {
//       id: 5,
//       title: "SERENE LAKE",
//       name: "Lake",
//       description:
//         "A calm and serene lake surrounded by towering trees and mountains. A perfect escape.",
//       image: "https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg",
//     },
//     {
//       id: 6,
//       title: "PEAKS IN THE CLOUDS",
//       name: "Clouds",
//       description:
//         "Mountain peaks wrapped in clouds. A dreamy sight that inspires awe and wonder.",
//       image:
//         "https://images.pexels.com/photos/18536296/pexels-photo-18536296/free-photo-of-mountain-peaks-over-clouds.jpeg",
//     },
//     {
//       id: 7,
//       title: "RIVERBANK PARADISE",
//       name: "Riverbank",
//       description:
//         "A picturesque riverbank flowing through lush greenery and vibrant landscapes.",
//       image:
//         "https://images.pexels.com/photos/7616134/pexels-photo-7616134.jpeg",
//     },
//     {
//       id: 8,
//       title: "MYSTIC RIDGES",
//       name: "Ridges",
//       description:
//         "Discover the mystic beauty of mountain ridges under a cloudy sky. Perfect for adventurers.",
//       image:
//         "https://images.pexels.com/photos/20641721/pexels-photo-20641721/free-photo-of-barren-mountains-peaks-under-clouds.jpeg",
//     },
//     {
//       id: 9,
//       title: "GOLDEN CLIFFS",
//       name: "Cliffs",
//       description:
//         "Golden cliffs basking in sunlight. A stunning view that captures the heart of nature.",
//       image:
//         "https://images.pexels.com/photos/17977245/pexels-photo-17977245/free-photo-of-barren-mountain-peaks.jpeg",
//     },
//     {
//       id: 10,
//       title: "PEACEFUL VALLEY",
//       name: "Valley",
//       description:
//         "A peaceful valley surrounded by towering mountains. A perfect destination for solitude.",
//       image:
//         "https://images.pexels.com/photos/2073873/pexels-photo-2073873.jpeg",
//     },
//   ];

//   const [items, setItems] = useState(initialItems);
//   const timeRunningRef = useRef(null);
//   const progressBarRef = useRef(null);

//   const handleNext = () => {
//     setItems((prev) => [...prev.slice(1), prev[0]]);
//   };

//   const handlePrev = () => {
//     setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
//   };

//   useEffect(() => {
//     const interval = setInterval(handleNext, TIME_AUTO_NEXT);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (timeRunningRef.current) {
//       timeRunningRef.current.style.animation = "none";
//       timeRunningRef.current.offsetHeight;
//       timeRunningRef.current.style.animation = `runningTime ${
//         TIME_AUTO_NEXT / 1000
//       }s linear forwards`;
//     }

//     const activeItemId = items[1].id;
//     const progress = (activeItemId / initialItems.length) * 100;
//     if (progressBarRef.current) {
//       progressBarRef.current.style.width = `${progress}%`;
//     }
//   }, [items]);

//   return (
//     <div className="carousel min-h-screen">
//       <div className="list">
//         {items.map((item) => (
//           <div
//             key={item.id}
//             className="item"
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <div className="content">
//               <div className="title" data-item={item.id}>
//                 {item.title}
//               </div>
//               <div className="name">{item.name}</div>
//               <div className="des">{item.description}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="arrows">
//         <button className="prev" onClick={handlePrev}>
//           <i className="bi bi-arrow-left"></i>
//         </button>
//         <button className="next" onClick={handleNext}>
//           <i className="bi bi-arrow-right"></i>
//         </button>

//         <div className="slide-number">
//           {items[1].id.toString().padStart(2, "0")}/{initialItems.length}
//         </div>

//         <div className="progress-bar-container">
//           <div className="progress-bar" ref={progressBarRef} />
//         </div>
//       </div>

//       <div className="timeRunning" ref={timeRunningRef} />
//     </div>
//   );
// };

// export default Carousel;

//2
"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import InquiryFormModal from "./InquiryFormModal";
import uniData from "../components/data.js";
const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const TIME_AUTO_NEXT = 3500;
  const initialItems = [
    {
      id: 1,
      title: "Australia",
      name: "Australia Advantage",
      description:
        "Discover world-class education and vibrant student life in Australia, a top destination for international students.",
      image: "/images/australia.jpg",
    },
    {
      id: 2,
      title: "UK",
      name: "British Excellence",
      description:
        "Experience academic excellence and rich cultural heritage in the UK, home to some of the world’s oldest and most prestigious universities.",
      image: "/images/uk1.jpg",
    },
    {
      id: 3,
      title: "Canada",
      name: "Canadian Opportunity",
      description:
        "Enjoy high-quality education in a safe, welcoming, and multicultural environment across Canada’s top-ranked institutions.",
      image: "/images/canada1.jpg",
    },
    {
      id: 4,
      title: "USA",
      name: "American Dream",
      description:
        "Unlock endless possibilities with innovative programs and global exposure at leading universities in the United States.",
      image: "/images/usa1.jpg",
    },
    {
      id: 5,
      title: "Europe",
      name: "Europe Gateway",
      description:
        "Explore diverse cultures and academic traditions with affordable, high-quality education across Europe.",
      image: "/images/europe1.jpg",
    },
    // {
    //   id: 6,
    //   title: "PEAKS IN THE CLOUDS",
    //   name: "Clouds",
    //   description:
    //     "Mountain peaks wrapped in clouds. A dreamy sight that inspires awe and wonder.",
    //   image:
    //     "https://images.pexels.com/photos/18536296/pexels-photo-18536296/free-photo-of-mountain-peaks-over-clouds.jpeg",
    // },
    // {
    //   id: 7,
    //   title: "RIVERBANK PARADISE",
    //   name: "Riverbank",
    //   description:
    //     "A picturesque riverbank flowing through lush greenery and vibrant landscapes.",
    //   image:
    //     "https://images.pexels.com/photos/7616134/pexels-photo-7616134.jpeg",
    // },
  ];
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const [items, setItems] = useState(initialItems);
  const timeRunningRef = useRef(null);
  const progressBarRef = useRef(null);

  const handleNext = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, TIME_AUTO_NEXT);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRunningRef.current) {
      timeRunningRef.current.style.animation = "none";
      timeRunningRef.current.offsetHeight;
      timeRunningRef.current.style.animation = `runningTime ${
        TIME_AUTO_NEXT / 1000
      }s linear forwards`;
    }

    const activeItemId = items[1].id;
    const progress = (activeItemId / initialItems.length) * 100;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [items]);

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="w-full h-screen relative overflow-hidden bg-[#111111]">
        <div className="w-full h-full relative">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute ${
                index < 2
                  ? "bottom-0 left-0 w-full h-full rounded-none"
                  : "bottom-[150px] left-[55%] w-[180px] h-[250px]"
              } rounded-[20px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.7)] bg-cover bg-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]`}
              style={{
                backgroundImage: `url(${item.image})`,
                zIndex: index < 2 ? 1 : 10 - index,
                left:
                  index === 2
                    ? "55%"
                    : index === 3
                    ? "calc(55% + 200px)"
                    : index === 4
                    ? "calc(55% + 400px)"
                    : index === 5
                    ? "calc(55% + 600px)"
                    : index >= 6
                    ? "calc(55% + 800px)"
                    : "",
                transitionDelay:
                  index === 3
                    ? "100ms"
                    : index === 4
                    ? "200ms"
                    : index === 5
                    ? "300ms"
                    : index >= 6
                    ? "400ms"
                    : "0ms",
              }}
            >
              <div className="absolute inset-0 bg-[rgba(33,33,33,0.5)] z-10"></div>
              <div
                className={`absolute z-30 text-white ${
                  index < 2
                    ? "left-[100px] top-1/2 -translate-y-1/2 w-[600px]"
                    : "left-0 top-full -translate-y-full w-full p-2.5"
                } transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]`}
              >
                <div
                  className={`${
                    index < 2
                      ? "w-[50px] h-[3px] mb-5"
                      : "w-[20px] h-[1px] mb-2.5"
                  } bg-white`}
                ></div>
                <div
                  className={`${
                    index < 2 ? "text-3xl mb-5" : "text-xs"
                  } font-bold uppercase`}
                >
                  {item.title}
                  <span
                    className={`${
                      index < 2
                        ? "text-xl top-[-40px] left-[15px]"
                        : "text-xs top-[-20px] left-3"
                    } absolute font-normal`}
                  >
                    {item.id}
                  </span>
                </div>
                <div
                  className={`${
                    index < 2 ? "text-xl mb-5" : "text-xs"
                  } uppercase text-[#d36e10] font-medium`}
                >
                  {item.name}
                </div>
                <div
                  className={`${
                    index < 2
                      ? "text-base w-[400px] opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  {item.description}
                </div>
                {index < 2 && (
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-4 py-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewDetails()}
                      className="bg-[#8A0206] hover:bg-[#8A0206]/80 text-white font-medium py-3 px-6 rounded-md"
                    >
                      Free Counselling
                    </motion.button>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-medium py-3 px-6 rounded-md"
                      >
                        Learn more
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[50px] left-[55%] w-[calc(100%-55%-2%)] z-10 flex gap-[5%] items-center">
          <button
            onClick={handlePrev}
            className="w-10 h-10 min-w-10 min-h-10 rounded-full border-2 border-white text-white bg-transparent flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white hover:text-white"
          >
            <ArrowLeft size={25} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 min-w-10 min-h-10 rounded-full border-2 border-white text-white bg-transparent flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-white hover:text-white"
          >
            <ArrowRight size={25} />
          </button>

          <div className="text-2xl text-white font-normal ml-auto tracking-[5px]">
            {items[1].id.toString().padStart(2, "0")}/{initialItems.length}
          </div>

          <div className="w-[60%] h-[3px] bg-[rgba(255,255,255,0.5)] rounded-xl overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#d36e10] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        <div
          ref={timeRunningRef}
          className="fixed z-1000 h-[4px] bg-white top-0 left-0"
          style={{ width: "0%" }}
        />
      </div>
      <InquiryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // courseData={selectedCourse}
        // degreeType={selectedDegree}
        destinations={uniData}
      />
    </>
  );
};

export default Carousel;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function ImageCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const carouselRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const transitionTimeoutRef = useRef(null);
//   const progressBarRef = useRef(null);

//   const images = [
//     {
//       url: "https://images.pexels.com/photos/552785/pexels-photo-552785.jpeg",
//       title: "SUNRISE ON PEAKS",
//       name: "Sunrise",
//       description:
//         "Witness the serene beauty of the sunrise over majestic mountain peaks. A moment of pure tranquility.",
//     },
//     {
//       url: "https://images.pexels.com/photos/17804524/pexels-photo-17804524/free-photo-of-barren-rocky-mountains.jpeg",
//       title: "RUGGED ROCKS",
//       name: "Rocky",
//       description:
//         "Explore the rugged beauty of barren rocky mountains. A testament to nature's raw power.",
//     },
//     {
//       url: "https://images.pexels.com/photos/6439041/pexels-photo-6439041.jpeg",
//       title: "FOREST PATHWAY",
//       name: "Forest",
//       description:
//         "A peaceful trail through dense green forests. Perfect for reconnecting with nature.",
//     },
//     {
//       url: "https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg",
//       title: "COLORFUL MEADOW",
//       name: "Meadow",
//       description:
//         "A colorful meadow filled with butterflies and blooming flowers. Nature at its best.",
//     },
//     {
//       url: "https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg",
//       title: "SERENE LAKE",
//       name: "Lake",
//       description:
//         "A calm and serene lake surrounded by towering trees and mountains. A perfect escape.",
//     },
//     {
//       url: "https://images.pexels.com/photos/18536296/pexels-photo-18536296/free-photo-of-mountain-peaks-over-clouds.jpeg",
//       title: "PEAKS IN THE CLOUDS",
//       name: "Clouds",
//       description:
//         "Mountain peaks wrapped in clouds. A dreamy sight that inspires awe and wonder.",
//     },
//     {
//       url: "https://images.pexels.com/photos/7616134/pexels-photo-7616134.jpeg",
//       title: "RIVERBANK PARADISE",
//       name: "Riverbank",
//       description:
//         "A picturesque riverbank flowing through lush greenery and vibrant landscapes.",
//     },
//     {
//       url: "https://images.pexels.com/photos/20641721/pexels-photo-20641721/free-photo-of-barren-mountains-peaks-under-clouds.jpeg",
//       title: "MYSTIC RIDGES",
//       name: "Ridges",
//       description:
//         "Discover the mystic beauty of mountain ridges under a cloudy sky. Perfect for adventurers.",
//     },
//     {
//       url: "https://images.pexels.com/photos/17977245/pexels-photo-17977245/free-photo-of-barren-mountain-peaks.jpeg",
//       title: "GOLDEN CLIFFS",
//       name: "Cliffs",
//       description:
//         "Golden cliffs basking in sunlight. A stunning view that captures the heart of nature.",
//     },
//     {
//       url: "https://images.pexels.com/photos/2073873/pexels-photo-2073873.jpeg",
//       title: "PEACEFUL VALLEY",
//       name: "Valley",
//       description:
//         "A peaceful valley surrounded by towering mountains. A perfect destination for solitude.",
//     },
//   ];

//   // Function to handle navigation
//   const handleNavigation = (direction) => {
//     if (isTransitioning) return;

//     setIsTransitioning(true);

//     if (direction === "next") {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     } else {
//       setActiveIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       );
//     }

//     // Reset auto slide timer
//     resetAutoSlide();
//   };

//   // Reset auto slide timer
//   const resetAutoSlide = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // Reset progress bar animation
//     if (progressBarRef.current) {
//       progressBarRef.current.style.animation = "none";
//       progressBarRef.current.offsetHeight; // Trigger reflow
//       progressBarRef.current.style.animation =
//         "runningTime 3.5s linear forwards";
//     }

//     // Set timeout for auto slide
//     timeoutRef.current = setTimeout(() => {
//       handleNavigation("next");
//     }, 3500);
//   };

//   // Initialize auto slide on component mount
//   useEffect(() => {
//     resetAutoSlide();

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       if (transitionTimeoutRef.current) {
//         clearTimeout(transitionTimeoutRef.current);
//       }
//     };
//   }, []);

//   // Reset transition state after animation completes
//   useEffect(() => {
//     if (isTransitioning) {
//       transitionTimeoutRef.current = setTimeout(() => {
//         setIsTransitioning(false);
//       }, 1200); // Match the CSS transition time
//     }
//   }, [isTransitioning]);

//   // Get the previous, current, and next indices
//   const getPrevIndex = () => (activeIndex - 1 + images.length) % images.length;
//   const getNextIndex = () => (activeIndex + 1) % images.length;

//   // Function to determine item class based on its position
//   const getItemClass = (index) => {
//     if (index === activeIndex) {
//       return "absolute w-full h-full left-0 bottom-0 rounded-none z-10 transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)";
//     }
//     if (index === getNextIndex()) {
//       return "absolute w-[180px] h-[250px] bottom-[150px] left-[55%] rounded-[20px] overflow-hidden shadow-2xl z-[100] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)";
//     }
//     if (index === (getNextIndex() + 1) % images.length) {
//       return "absolute w-[180px] h-[250px] bottom-[150px] left-[calc(55%+200px)] rounded-[20px] overflow-hidden shadow-2xl z-[100] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) delay-100";
//     }
//     if (index === (getNextIndex() + 2) % images.length) {
//       return "absolute w-[180px] h-[250px] bottom-[150px] left-[calc(55%+400px)] rounded-[20px] overflow-hidden shadow-2xl z-[100] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) delay-200";
//     }
//     if (index === (getNextIndex() + 3) % images.length) {
//       return "absolute w-[180px] h-[250px] bottom-[150px] left-[calc(55%+600px)] rounded-[20px] overflow-hidden shadow-2xl z-[100] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) delay-300";
//     }
//     return "absolute w-[180px] h-[250px] bottom-[150px] left-[calc(55%+800px)] rounded-[20px] overflow-hidden shadow-2xl z-[100] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) delay-400";
//   };

//   return (
//     <div className="w-full h-screen overflow-hidden relative ">
//       {/* Time running bar */}
//       <div
//         ref={progressBarRef}
//         className="fixed z-[1000] w-0 h-1 bg-white left-0 top-0"
//         style={{ animation: "runningTime 3.5s linear forwards" }}
//       />

//       {/* Carousel list */}
//       <div className="list relative w-full h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={getItemClass(index)}
//             style={{ backgroundImage: `url(${image.url})` }}
//           >
//             {/* Overlay */}
//             <div className="absolute left-0 top-0 h-full w-full bg-[rgba(33,33,33,0.5)] z-[1]"></div>

//             {/* Content */}
//             <div
//               className={`absolute text-left text-white z-[3] left-0 w-full p-2.5 transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
//                 index === activeIndex
//                   ? "transform -translate-y-1/2 left-[100px] w-[600px] top-1/2 p-0"
//                   : "top-full transform -translate-y-full"
//               }`}
//             >
//               <div
//                 className={`${
//                   index === activeIndex
//                     ? "text-3xl mb-5 font-bold"
//                     : "text-xs mb-2.5 font-bold uppercase"
//                 } relative`}
//                 data-item={index + 1}
//               >
//                 {/* Title line */}
//                 <span
//                   className={`block h-[1px] ${
//                     index === activeIndex
//                       ? "w-[50px] h-[3px] mb-5"
//                       : "w-5 mb-2.5"
//                   } bg-white`}
//                 ></span>
//                 {image.title}
//               </div>

//               <div
//                 className={`${
//                   index === activeIndex ? "text-xl mb-5" : "text-[10px] mb-2.5"
//                 } uppercase font-medium text-[#d36e10]`}
//               >
//                 {image.name}
//               </div>

//               <div
//                 className={`${
//                   index === activeIndex
//                     ? "text-base opacity-100 block w-[400px]"
//                     : "text-base opacity-0 hidden"
//                 } font-normal transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)`}
//               >
//                 {image.description}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation arrows */}
//       <div className="absolute bottom-[50px] left-[55%] w-[calc(100%-55%-2%)] z-[100] flex gap-[5%] items-center">
//         <button
//           onClick={() => handleNavigation("prev")}
//           className="w-10 h-10 min-w-10 min-h-10 rounded-full border-2 border-white text-white bg-transparent outline-none text-2xl font-bold transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) cursor-pointer flex items-center justify-center hover:border-white hover:text-white"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         <button
//           onClick={() => handleNavigation("next")}
//           className="w-10 h-10 min-w-10 min-h-10 rounded-full border-2 border-white text-white bg-transparent outline-none text-2xl font-bold transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) cursor-pointer flex items-center justify-center hover:border-white hover:text-white"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//         {/* Slide number */}
//         <div className="text-2xl text-white font-normal ml-auto tracking-[5px] opacity-0 animate-[animate_0.5s_ease-in-out_0.3s_1_forwards]">
//           {`${activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}/${
//             images.length
//           }`}
//         </div>

//         {/* Progress bar */}
//         <div className="w-[60%] h-[3px] bg-[rgba(255,255,255,0.5)] rounded-[20px] overflow-hidden">
//           <div
//             className="h-full bg-[#d36e10] transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1)"
//             style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* CSS animations */}
//       <style jsx>{`
//         @keyframes animate {
//           from {
//             opacity: 0;
//             transform: translate(0, 100px);
//             filter: blur(33px);
//           }
//           to {
//             opacity: 1;
//             transform: translate(0);
//             filter: blur(0);
//           }
//         }

//         @keyframes runningTime {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
