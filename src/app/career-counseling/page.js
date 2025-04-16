// import Image from "next/image";
// import React from "react";

// function Page() {
//   return (
//     <div>
//       {" "}
//       <div className="container relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
//           <div className="flex-1 space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Career
//               <span className="relative">
//                 <span className="relative z-10"> Counseling</span>
//                 {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
//               </span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-xl">
//               Expert guidance through your career counseling process. We make
//               immigration simple, efficient, and stress-free.
//             </p>
//             <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
//               Free Expert Consultation
//             </button>
//           </div>

//           {/* Right Column - Hero Image */}
//           <div className="flex-1 absolute justify-center flex bottom-0 right-0">
//             <Image
//               src="/images/v0.png"
//               alt="Professional visa consultant"
//               width={800}
//               height={800}
//               //   className="rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Clock,
  FileCheck,
} from "lucide-react";
import Image from "next/image";

export default function CareerCounseling() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "01",
      title: "Career Guidance and Counseling",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "02",
      title: "Effective Recruitment and Selection",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "03",
      title: "Personal Development & Skill Enhancement",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "04",
      title: "Educational Planning & Academic Success",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "05",
      title: "Promotion and Career Advancement",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "06",
      title: "Objective Assessment",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "07",
      title: "Enhanced Self-Awareness",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "08",
      title: "Adaptability & Planning",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 ">
      <div className="container relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Career
              <span className="relative">
                <span className="relative z-10"> Counseling</span>
                {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Expert guidance through your career counseling process. We make
              immigration simple, efficient, and stress-free.
            </p>
            <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
              Free Expert Consultation
            </button>
          </div>
          {/* Right Column - Hero Image */}
          <div className="flex-1 absolute justify-center flex bottom-0 right-0">
            <Image
              src="/images/v0.png"
              alt="Professional visa consultant"
              width={800}
              height={800}
              //   className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900  sm:text-5xl md:text-6xl">
            Career <span className="text-[#8A0206] ">Counseling</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 ">
            Career counseling, also known as career guidance or career coaching,
            is a process that assists individuals in making informed decisions
            about their career development and future employment opportunities.
          </p>
        </div>

        {/* Academic Pathway Planning */}
        <div className="mb-20 rounded-2xl bg-white  shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900  mb-4">
                Academic Pathway Planning
              </h2>
              <p className="text-slate-600 ">
                Academic Pathway Planning is a structured process that helps
                students map out their educational journey to achieve career
                goals. Our expert counselors for study abroad will then assist
                you in setting objectives, selecting courses and create a
                roadmap for success.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full bg-[#FFF5F2]  p-6">
                <BookOpen size={80} className="text-[#8A0206] " />
              </div>
            </div>
          </div>
        </div>

        {/* Importance of Aptitude Tests */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 ">
              Importance{" "}
              <span className="text-[#8A0206] ">Of Aptitude Tests</span>
            </h2>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-slate-200  hover:bg-[#8A0206] hover:text-white text-slate-700 transition-colors"
              >
                <ChevronLeft className="h-6 w-6  " />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-slate-200  hover:bg-[#8A0206] hover:text-white text-slate-700 transition-colors"
              >
                <ChevronRight className="h-6 w-6  " />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white  rounded-2xl shadow-lg p-8">
              <p className="text-slate-600 ">
                Aptitude tests play a significant role in various areas,
                including counseling for studying abroad, career development,
                recruitment, and personal growth. They are designed to assess an
                individual&apos;s inherent or acquired abilities, strengths, and
                potential in specific areas. The importance of aptitude tests
                can be highlighted through the following points.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
              <div
                className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full relative">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-white">
                          {slide.id}
                        </span>
                        <h3 className="text-xl font-semibold text-white">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Types of Aptitude Tests */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900  mb-8">
            Types <span className="text-[#8A0206] ">Of Aptitude Tests</span>
          </h2>

          <Tabs defaultValue="aptitude" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="aptitude">Aptitude</TabsTrigger>
              <TabsTrigger value="interest">Interest</TabsTrigger>
              <TabsTrigger value="personality">Personality</TabsTrigger>
            </TabsList>
            <TabsContent
              value="aptitude"
              className="bg-white  rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Student with notebook"
                    className="rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#8A0206] ">
                      01
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 ">
                      Aptitude
                    </h3>
                  </div>
                  <p className="text-slate-600 ">
                    Aptitude: valuable tool that provide insights into an
                    individual&apos;s abilities, strengths, personal growth and
                    potential in various areas. It plays a fundamental role in
                    career choices, academic decisions, recruitment, enhancing
                    personal development, and fostering success and satisfaction
                    in education, work, and personal growth.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="interest"
              className="bg-white  rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Interest assessment"
                    className="rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#8A0206] ">
                      02
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 ">
                      Interest
                    </h3>
                  </div>
                  <p className="text-slate-600 ">
                    An interest test, often referred to as an &quot;interest
                    inventory&quot; or &quot;interest assessment&quot;, is a
                    tool used to identify an individual&apos;s preferences,
                    likes, and dislikes related to various activities, subjects,
                    and career fields. These tests are designed to assess an
                    individual&apos;s interests, passions, and inclinations to
                    guide them in making informed decisions about educational
                    paths, career choices, and personal development
                    opportunities.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="personality"
              className="bg-white  rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Personality assessment"
                    className="rounded-xl"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#8A0206] ">
                      03
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 ">
                      Personality
                    </h3>
                  </div>
                  <p className="text-slate-600 ">
                    A personality test is a tool designed to assess and evaluate
                    various aspects of an individual&apos;s personality. These
                    tests aim to uncover patterns of behavior, preferences, and
                    traits that characterize a person.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Process of Testing */}
        <div className="rounded-3xl bg-gradient-to-r from-[#8A0206] to-[#8A0206] p-10 text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Process Of{" "}
            <span className="relative inline-block">
              Testing
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/60 rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/20">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Online Testing</h3>
                <p>
                  Take the test from the comfort of your home eliminating the
                  need to travel anywhere for the assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/20">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Test Duration</h3>
                <p>
                  The aptitude test is designed to be completed in approximately
                  2.5 hours at a leisurely pace.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-white/20">
                  <FileCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Review</h3>
                <p>
                  The test report is carefully checked and then shared with the
                  student by a clinical psychologist.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
