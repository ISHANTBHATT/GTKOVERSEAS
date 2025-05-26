"use client";
import React from "react";
import {
  Target,
  Users,
  Presentation,
  BarChart3,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ScrollTimeline from "../components/scroll-timeline";

const roadmapSteps = [
  {
    id: 1,
    title: "Strategy Planning",
    description:
      "Define core objectives and create comprehensive action plans to achieve business goals",
    color: "bg-red-500",
    icon: <Target className="w-6 h-6 text-white" />,
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    id: 2,
    title: "Team Building",
    description:
      "Assemble and develop high-performing teams aligned with organizational values",
    color: "bg-orange-500",
    icon: <Users className="w-6 h-6 text-white" />,
    bgColor: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Execute strategies with precision while maintaining flexibility for adjustments",
    color: "bg-green-500",
    icon: <Presentation className="w-6 h-6 text-white" />,
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: 4,
    title: "Performance Analysis",
    description:
      "Monitor progress and analyze key metrics to ensure optimal results",
    color: "bg-blue-500",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    id: 5,
    title: "Partnership Growth",
    description:
      "Establish strategic partnerships to expand market reach and capabilities",
    color: "bg-purple-500",
    icon: <Handshake className="w-6 h-6 text-white" />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="w-full mx-auto">
        <div className=" relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-[#8A0206] to-[#6A0104] text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:mx-20">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold  leading-tight">
                Admission
                <span className="relative">
                  <span className="relative z-10"> Guidance</span>
                  {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
                </span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-white/80 leading-tight">
                Transform Your Education with Expert Admission Guidance
              </p>
              <p className="text-lg text-white/80 max-w-xl">
                Embarking on an international education journey is exciting—but
                it can also be overwhelming. Our Admission Guidance Services are
                designed to simplify the process, helping you gain admission to
                top universities across the globe.
              </p>
              <button className="text-[#8A0206] bg-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 hover:text-white transition-colors flex items-center gap-2">
                Free Expert Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column - Hero Image */}
            <div className="flex-1 absolute justify-center hidden lg:flex bottom-0 right-0">
              <Image
                src="/images/v0.png"
                alt="Professional travel and forex consultant"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="text-center mb-16 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ROADMAP INFOGRAPHIC
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic pathway to success: A comprehensive visualization of our
            journey towards achieving organizational excellence
          </p>
        </div> */}

        {/* <div>
          <Image
            src="/images/road.png"
            width={1000}
            height={1000}
            className="w-full h-1/2"
          />
        </div> */}

        {/* Roadmap Path */}
        {/* <div className="relative mb-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2 z-0">
            <div className="absolute top-1/2 left-0 right-0 h-full">
              <div className="h-full w-full bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-lg transform transition-transform hover:scale-110`}
                >
                  {step.icon}
                </div>

                <div
                  className={`p-6 rounded-lg ${step.bgColor} shadow-md w-full h-full transition-transform hover:scale-105`}
                >
                  <div className="text-center">
                    <span
                      className={`inline-block w-8 h-8 rounded-full ${step.color} text-white font-bold text-lg mb-3 flex items-center justify-center`}
                    >
                      {step.id}
                    </span>
                    <h3 className={`text-xl font-bold mb-2 ${step.textColor}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <ScrollTimeline />
      </div>
    </div>
  );
}

export default Page;
