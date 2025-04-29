"use client";

import React from "react";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Sparkles,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function ScholarshipSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-rose-100 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-indigo-100 to-transparent"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 blur-2xl opacity-30"
        ></motion.div>
      </div>
      <div className="absolute bottom-20 left-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-300 blur-2xl opacity-30"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            Types of Scholarships
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-indigo-400"></div>
          </h2>
          <p className="text-slate-600 text-lg">
            Scholarships can be broadly categorized into three main types:
          </p>
        </motion.div>

        <div className="space-y-32">
          <MagazineCard
            number="01"
            title="Merit-Based Scholarships"
            description="Awarded for academic, athletic, artistic, or extracurricular achievements. These scholarships recognize and reward students who have demonstrated exceptional talent and dedication."
            image="/images/sc1.jpg"
            color="rose"
            icon={<Sparkles className="w-6 h-6" />}
            delay={0.1}
          />

          <MagazineCard
            number="02"
            title="University Scholarships"
            description="University Scholarships are grants, tuition waivers etc awarded by the institution on grounds of institutions preferences. They are sought by students who indulge in a specific area of interest of study."
            image="/images/sc2.jpg"
            color="amber"
            icon={<GraduationCap className="w-6 h-6" />}
            delay={0.2}
            reverse={true}
          />

          <MagazineCard
            number="03"
            title="Need-Based Scholarships"
            description="Need-based scholarships are granted on the basis of the assets and income of the prospective student and his/her family. Factors such as test scores or athletic ability have little influence on the awarding of the aid."
            image="/images/sc3.jpg"
            color="indigo"
            icon={<Globe className="w-6 h-6" />}
            delay={0.3}
          />

          <MagazineCard
            number="04"
            title="Program-Based Scholarships"
            description="These study abroad scholarships are provided by individual programs or universities based on academic and personal achievements. They often target specific fields of study or research areas."
            image="/images/sc4.jpg"
            color="emerald"
            icon={<BookOpen className="w-6 h-6" />}
            delay={0.4}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

function MagazineCard({
  number,
  title,
  description,
  image,
  color,
  icon,
  delay,
  reverse = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const colorMap = {
    rose: {
      light: "bg-rose-50",
      medium: "bg-rose-100",
      border: "border-rose-200",
      text: "text-rose-500",
      accent: "bg-rose-500",
      button: "bg-rose-500 hover:bg-rose-600",
      number: "text-rose-400",
    },
    amber: {
      light: "bg-amber-50",
      medium: "bg-amber-100",
      border: "border-amber-200",
      text: "text-amber-500",
      accent: "bg-amber-500",
      button: "bg-amber-500 hover:bg-amber-600",
      number: "text-amber-400",
    },
    indigo: {
      light: "bg-indigo-50",
      medium: "bg-indigo-100",
      border: "border-indigo-200",
      text: "text-indigo-500",
      accent: "bg-indigo-500",
      button: "bg-indigo-500 hover:bg-indigo-600",
      number: "text-indigo-400",
    },
    emerald: {
      light: "bg-emerald-50",
      medium: "bg-emerald-100",
      border: "border-emerald-200",
      text: "text-emerald-500",
      accent: "bg-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-600",
      number: "text-emerald-400",
    },
  };

  const currentColor = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-stretch rounded-3xl overflow-hidden border shadow-lg ${
          currentColor.border
        } hover:shadow-xl transition-all duration-300`}
      >
        {/* Image section with parallax */}
        <div className="md:w-2/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y: smoothY }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>

          {/* Floating number */}
          <motion.div
            className={`absolute ${reverse ? "left-6" : "right-6"} top-6 z-10`}
            animate={{
              y: isHovered ? -5 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <span
              className={`text-7xl md:text-8xl font-black ${currentColor.number} opacity-90`}
            >
              {number}
            </span>
          </motion.div>
        </div>

        {/* Content section */}
        <div
          className={`md:w-3/5 p-8 md:p-12 ${currentColor.light} flex flex-col justify-center relative`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full opacity-10 blur-3xl"></div>

          {/* Icon badge */}
          <motion.div
            className={`w-12 h-12 rounded-full ${currentColor.medium} flex items-center justify-center mb-6 ${currentColor.text}`}
            animate={{
              rotate: isHovered ? 10 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
            animate={{ x: isHovered ? (reverse ? -5 : 5) : 0 }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h3>

          <motion.div
            className={`w-16 h-1 mb-6 rounded-full ${currentColor.accent}`}
            animate={{ width: isHovered ? "4rem" : "3rem" }}
            transition={{ duration: 0.4 }}
          />

          <motion.p
            className="text-slate-600 mb-8 leading-relaxed"
            animate={{ x: isHovered ? (reverse ? -5 : 5) : 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {description}
          </motion.p>

          <motion.div
            animate={{ x: isHovered ? (reverse ? -5 : 5) : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Button
              className={`text-white ${currentColor.button} group relative overflow-hidden`}
            >
              <span className="relative z-10 flex items-center">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </Button>
          </motion.div>

          {/* Corner accent */}
          <div
            className={`absolute ${
              reverse ? "left-0 bottom-0" : "right-0 top-0"
            } w-24 h-24 ${currentColor.accent} opacity-10`}
            style={{
              clipPath: reverse
                ? "polygon(0 100%, 100% 100%, 0 0)"
                : "polygon(100% 0, 0 0, 100% 100%)",
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
