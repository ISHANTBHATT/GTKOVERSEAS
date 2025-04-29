"use client";

import React from "react";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Globe,
  BookText,
} from "lucide-react";
import ScholarshipSection from "../components/ScholarshipSection";

export default function ScholarshipPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  return (
    <div className="relative">
      <div className="min-h-screen bg-[#8A0206] text-white overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-cyan-500 rounded-full filter blur-[150px] opacity-10"></div>
        </div>

        {/* Grid pattern */}
        <div className="fixed inset-0 z-0 opacity-10">
          <div className="h-full w-full bg-[url('/grid-pattern.png')]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Scholarships
                </span>
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mt-2 text-white"
            >
              To Study Abroad
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg"
            >
              Discover extraordinary opportunities to fund your international
              education journey
            </motion.p>
          </div>

          <div className="space-y-32 max-w-5xl mx-auto">
            <ScholarshipCard
              number="01"
              icon={<Award className="w-10 h-10" />}
              title="Merit-Based Scholarships"
              description="Awarded for academic, athletic, artistic, or extracurricular achievements."
              color="from-cyan-500 to-blue-500"
              glowColor="cyan"
              delay={0.1}
            />

            <ScholarshipCard
              number="02"
              icon={<Users className="w-10 h-10" />}
              title="Student-Specific Scholarships"
              description="These foreign scholarships for Indian students are available to applicants of specific genders, races, religions, ethnicities, or medical histories."
              color="from-purple-500 to-pink-500"
              glowColor="purple"
              delay={0.2}
            />

            <ScholarshipCard
              number="03"
              icon={<GraduationCap className="w-10 h-10" />}
              title="Need-Based Scholarships"
              description="Awarded to students based on financial need."
              color="from-amber-500 to-orange-500"
              glowColor="amber"
              delay={0.3}
            />

            <ScholarshipCard
              number="04"
              icon={<BookOpen className="w-10 h-10" />}
              title="Program-Based Scholarships"
              description="These study abroad scholarships are provided by individual programs or universities based on academic and personal achievements."
              color="from-emerald-500 to-teal-500"
              glowColor="emerald"
              delay={0.4}
            />
          </div>
        </div>

        {/* Floating elements */}
        <FloatingElement
          icon={<Globe className="w-full h-full text-blue-300" />}
          size="w-16 h-16"
          position="top-[15%] right-[10%]"
          animation={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            },
          }}
        />

        <FloatingElement
          icon={<BookText className="w-full h-full text-purple-300" />}
          size="w-12 h-12"
          position="bottom-[20%] left-[15%]"
          animation={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        <FloatingElement
          icon={<Sparkles className="w-full h-full text-amber-300" />}
          size="w-10 h-10"
          position="top-[30%] left-[20%]"
          animation={{
            y: [0, -10, 0],
            x: [0, 10, 0],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        />
      </div>
      <div ref={targetRef}>
        <motion.div style={{ opacity, scale }}>
          <ScholarshipSection />
        </motion.div>
      </div>
    </div>
  );
}

function ScholarshipCard({
  number,
  icon,
  title,
  description,
  color,
  glowColor,
  delay,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const glowMap = {
    cyan: "bg-cyan-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl ${glowMap[glowColor]} opacity-0 blur-xl`}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden"
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br opacity-10"></div>

        <div className="flex flex-col md:flex-row items-stretch">
          {/* Number and icon section */}
          <div
            className={`p-8 md:p-10 bg-gradient-to-br ${color} md:w-1/3 flex flex-col items-center justify-center relative overflow-hidden`}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <motion.div
              className="text-7xl font-bold text-white mb-6 relative z-10"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            >
              {number}
            </motion.div>

            <motion.div
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full relative z-10"
              animate={{
                rotate: isHovered ? 10 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {icon}
            </motion.div>
          </div>

          {/* Content section */}
          <div className="p-8 md:p-10 md:w-2/3 flex flex-col justify-center">
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-slate-300 mb-8"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {description}
            </motion.p>

            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Button
                className={`bg-gradient-to-r ${color} hover:opacity-90 transition-all group relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center">
                  Free Expert Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-80`}
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        ></div>
      </motion.div>
    </motion.div>
  );
}

function FloatingElement({ icon, size, position, animation }) {
  return (
    <motion.div
      className={`fixed ${position} ${size} opacity-20 z-0`}
      animate={animation}
    >
      {icon}
    </motion.div>
  );
}
