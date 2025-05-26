"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "Personalized Guidance & Free Counselling",
  },
  {
    id: 2,
    title: "Course & University Selection",
  },
  {
    id: 3,
    title: "Test Preparation Support",
  },
  {
    id: 4,
    title: "Application Review & Documentation",
  },
  {
    id: 5,
    title: "Funding & Scholarships",
  },
  {
    id: 6,
    title: "Visa Assistance & Pre-Departure Briefing",
  },
];

export default function CounselingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepClick = (index) => {
    setActiveStep(index + 1);
    setIsAutoPlaying(false);
  };

  const resetAnimation = () => {
    setActiveStep(0);
    setIsAutoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1488CC]  to-[#2B32B2] flex items-center justify-center p-4">
      <div className="w-full max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Counseling{" "}
            <motion.span
              className="text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Process
            </motion.span>
          </h1>
          <motion.div
            className="w-96 h-1 bg-white mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 -translate-y-1/2 z-0">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width:
                      activeStep > 0
                        ? `${((activeStep - 1) / (steps.length - 1)) * 100}%`
                        : "0%",
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>

              {/* Dotted Line Animation */}
              {/* <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gray-400 rounded-full"
                    style={{ left: `${(i / 19) * 100}%` }}
                    initial={{ opacity: 0.3 }}
                    animate={{
                      opacity:
                        activeStep > 0 &&
                        i <= ((activeStep - 1) / (steps.length - 1)) * 19
                          ? 1
                          : 0.3,
                      scale:
                        activeStep > 0 &&
                        i <= ((activeStep - 1) / (steps.length - 1)) * 19
                          ? 1.2
                          : 1,
                    }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  />
                ))}
              </div> */}

              {/* Steps */}
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center"
                >
                  <motion.div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl cursor-pointer transition-all duration-300 ${
                      activeStep > index
                        ? "bg-red-500 shadow-lg shadow-red-500/50"
                        : "bg-red-700"
                    }`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      boxShadow:
                        activeStep > index
                          ? "0 0 30px rgba(239, 68, 68, 0.6)"
                          : "0 0 0px rgba(239, 68, 68, 0)",
                    }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleStepClick(index)}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {step.id}
                    </motion.span>
                  </motion.div>

                  <AnimatePresence>
                    {activeStep > index && (
                      <motion.div
                        className="mt-6 text-center max-w-xs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                          {step.title}
                        </h3>
                        {/* <p className="text-gray-300 text-sm">
                          {step.description}
                        </p> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer transition-all duration-300 ${
                    activeStep > index
                      ? "bg-red-500 shadow-lg shadow-red-500/50"
                      : "bg-red-700"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleStepClick(index)}
                  animate={{
                    boxShadow:
                      activeStep > index
                        ? "0 0 30px rgba(239, 68, 68, 0.6)"
                        : "0 0 0px rgba(239, 68, 68, 0)",
                  }}
                >
                  {step.id}
                </motion.div>

                <div className="flex-1">
                  {/* <h3 className="text-white font-semibold text-lg mb-2">
                    {step.title}
                  </h3> */}
                  <AnimatePresence>
                    {activeStep > index && (
                      <motion.p
                        className="text-white font-semibold text-lg mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.title}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        {/* <motion.div
          className="flex justify-center mt-16 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Button
            onClick={resetAnimation}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
          >
            Restart Animation
          </Button>
          <Button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            variant="outline"
            className="bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            {isAutoPlaying ? "Pause" : "Play"}
          </Button>
        </motion.div> */}

        {/* Progress Indicator */}
        {/* <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeStep > index ? "bg-red-500" : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => handleStepClick(index)}
                animate={{
                  scale: activeStep === index + 1 ? 1.3 : 1,
                  opacity: activeStep > index ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
