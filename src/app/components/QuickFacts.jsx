"use client";

import { useState, useEffect } from "react";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function QuickFacts({ countryData }) {
  //   const [animatedCount, setAnimatedCount] = useState({
  //     students: 0,
  //     universities: 0,
  //     cities: 0,
  //   })

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setAnimatedCount((prev) => ({
  //         students: prev.students < 1000000 ? prev.students + 50000 : 1000000,
  //         universities: prev.universities < 4500 ? prev.universities + 225 : 4500,
  //         cities: prev.cities < 12 ? prev.cities + 1 : 12,
  //       }))
  //     }, 100)

  //     return () => clearInterval(interval)
  //   }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Background decorative elements */}
      {/* <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-100 dark:bg-rose-900/20 blur-3xl opacity-70"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Why Study in USA */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-rose-500 hover:bg-rose-600">
                Discover
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 dark:from-rose-400 dark:to-purple-400">
                Why Study in USA?
              </h2>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500 to-purple-500 rounded-full"></div>
                <div className="pl-6 space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Study in one of the most prestigious higher education
                    systems globally and access some high-end technology and
                    cutting-edge research for an immersive, engaging &
                    collaborative study experience.
                  </p>
                  <p>
                    Choose from an extensive range of schools, numerous study
                    disciplines and niche qualifications that are difficult to
                    find by in other parts of the world.
                  </p>
                  <p>
                    Experience a uniquely flexible education system allowing you
                    to apply to a variety of programs suiting your academic &
                    career goals. Graduate with a truly global outlook and
                    real-world skills for the future.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                  {animatedCount.students.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">International Students</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {animatedCount.universities.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Accredited Universities</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{animatedCount.cities}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Best Student Cities</div>
              </div>
            </div>

            <Button className="group bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white">
              Explore Programs
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </div>

          {/* Right column - Quick Facts */}
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Quick Facts
            </h3>

            {countryData.quickFacts.facts.map((fact, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="flex items-start p-4">
                      <div className="flex-shrink-0 p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                        <Star className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {fact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
