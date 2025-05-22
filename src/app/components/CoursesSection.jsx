"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Sparkles, BookOpen, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const regions = [
  {
    id: "uk",
    name: "UK",
    count: 245,
    icon: <MapPin className="h-4 w-4 mr-2" />,
    categories: [
      {
        id: "business-uk",
        title: "Business Management",
        description:
          "Master strategic planning, leadership, and organizational growth",
        image: "/images/usac6.jpg",
        courses: 78,
        popular: true,
        color: "from-amber-500 to-orange-600",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        id: "engineering-uk",
        title: "Engineering",
        description:
          "Build the future with practical and theoretical engineering skills",
        image: "/images/usac2.jpg",
        courses: 64,
        popular: false,
        color: "from-emerald-500 to-teal-600",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "computer-science-uk",
        title: "Computer Science",
        description:
          "Develop cutting-edge software and explore AI technologies",
        image: "/images/usac4.jpg",
        courses: 92,
        popular: true,
        color: "from-sky-500 to-indigo-600",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "usa",
    name: "USA",
    count: 389,
    icon: <MapPin className="h-4 w-4 mr-2" />,
    categories: [
      {
        id: "business-usa",
        title: "Marketing",
        description: "Learn digital marketing strategies and brand development",
        image: "/images/usac3.jpg",
        courses: 95,
        popular: true,
        color: "from-pink-500 to-rose-600",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        id: "data-science-usa",
        title: "Data Science",
        description:
          "Master data analysis, machine learning, and statistical modeling",
        image: "/images/usac4.jpg",
        courses: 87,
        popular: true,
        color: "from-blue-500 to-indigo-600",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "healthcare-usa",
        title: "Healthcare",
        description: "Explore medical sciences and healthcare management",
        image: "/images/usac5.jpg",
        courses: 62,
        popular: false,
        color: "from-teal-500 to-cyan-600",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "canada",
    name: "Canada",
    count: 167,
    icon: <MapPin className="h-4 w-4 mr-2" />,
    categories: [
      {
        id: "environmental-canada",
        title: "Environmental Science",
        description:
          "Study sustainability, conservation, and environmental policy",
        image: "/images/usac1.jpg",
        courses: 54,
        popular: true,
        color: "from-green-500 to-emerald-600",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        id: "arts-canada",
        title: "Fine Arts",
        description:
          "Develop skills in visual arts, design, and creative expression",
        image: "/images/usac2.jpg",
        courses: 48,
        popular: false,
        color: "from-purple-500 to-violet-600",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "finance-canada",
        title: "Finance",
        description:
          "Learn investment strategies, financial planning, and economics",
        image: "/images/usac3.jpg",
        courses: 65,
        popular: true,
        color: "from-slate-500 to-gray-600",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
  },
  {
    id: "australia",
    name: "Australia",
    count: 132,
    icon: <MapPin className="h-4 w-4 mr-2" />,
    categories: [
      {
        id: "agriculture-australia",
        title: "Agriculture",
        description:
          "Study sustainable farming, crop science, and agricultural business",
        image: "/images/usac4.jpg",
        courses: 42,
        popular: false,
        color: "from-yellow-500 to-amber-600",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        id: "tourism-australia",
        title: "Tourism & Hospitality",
        description:
          "Develop skills in tourism management and hospitality services",
        image: "/images/usac5.jpg",
        courses: 56,
        popular: true,
        color: "from-orange-500 to-red-600",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        id: "marine-australia",
        title: "Marine Biology",
        description:
          "Explore ocean ecosystems, marine conservation, and aquatic life",
        image: "/images/usac6.jpg",
        courses: 34,
        popular: true,
        color: "from-cyan-500 to-blue-600",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
  },
];

export default function CoursesSection() {
  const [activeRegion, setActiveRegion] = useState("uk");
  const [hoveredCard, setHoveredCard] = useState(null);

  const activeCategories =
    regions.find((region) => region.id === activeRegion)?.categories || [];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Discover{" "}
            <span className="relative inline-block">
              Trending Courses
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
              />
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore top-rated courses from leading universities and industry
            experts worldwide
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Tabs */}
          <div className="md:w-1/4">
            <div className="sticky top-24 bg-white  rounded-xl shadow-lg p-1">
              <div className="flex flex-col space-y-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all",
                      activeRegion === region.id
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md"
                        : "hover:bg-slate-100 "
                    )}
                  >
                    <div className="flex items-center">
                      {region.icon}
                      <span className="font-medium">{region.name}</span>
                    </div>
                    <Badge
                      variant={
                        activeRegion === region.id ? "secondary" : "outline"
                      }
                      className={cn(
                        activeRegion === region.id
                          ? "bg-white/20 hover:bg-white/20 text-white"
                          : ""
                      )}
                    >
                      {region.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="md:w-3/4">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCategories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="py-0 overflow-hidden h-full border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-80"
                          //   `${category.color}`
                        )}
                      />
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover "
                      />
                      {category.popular && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-slate-900 hover:bg-white">
                            <Sparkles className="h-3 w-3 mr-1 text-amber-500" />{" "}
                            Popular
                          </Badge>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-slate-600  mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm text-slate-500 ">
                        {category.icon}
                        <span className="ml-2">
                          {category.courses} courses available
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        className={cn(
                          "w-full group",
                          hoveredCard === category.id
                            ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                            : "bg-[#8A0206]"
                        )}
                      >
                        Explore Courses
                        <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Categories
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
