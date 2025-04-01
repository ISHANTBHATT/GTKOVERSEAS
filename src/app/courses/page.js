"use client";

import React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";

// Sample course suggestions based on your data
const courseSuggestions = [
  "Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Computer Science",
  "Data Science",
  "Artificial Intelligence",
  "Cyber Security",
  "Business Management",
  "MBA",
  "Finance",
  "Marketing",
  "Human Resource Management",
  "Medicine",
  "Nursing",
  "Pharmacy",
  "Public Health",
  "Law",
  "Architecture",
  "Psychology",
  "Economics",
];

// Sample destinations based on your data
const destinations = [
  { name: "USA", value: "usa", flag: "🇺🇸" },
  { name: "Canada", value: "canada", flag: "🇨🇦" },
  { name: "United Kingdom", value: "uk", flag: "🇬🇧" },
  { name: "Australia", value: "australia", flag: "🇦🇺" },
  { name: "New Zealand", value: "new-zealand", flag: "🇳🇿" },
  { name: "France", value: "france", flag: "🇫🇷" },
  { name: "Germany", value: "germany", flag: "🇩🇪" },
  { name: "Denmark", value: "denmark", flag: "🇩🇰" },
  { name: "Finland", value: "finland", flag: "🇫🇮" },
  { name: "Italy", value: "italy", flag: "🇮🇹" },
  { name: "Cyprus", value: "cyprus", flag: "🇨🇾" },
  { name: "Malta", value: "malta", flag: "🇲🇹" },
  { name: "Switzerland", value: "switzerland", flag: "🇨🇭" },
  { name: "Ireland", value: "ireland", flag: "🇮🇪" },
  { name: "Singapore", value: "singapore", flag: "SG" },
  { name: "Dubai", value: "dubai", flag: "DXB" },
  { name: "Malaysia", value: "malaysia", flag: "MY" },
  { name: "Japan", value: "japan", flag: "JP" },
];

// Sample degree types
const degreeTypes = [
  { name: "Bachelor's", value: "bachelors" },
  { name: "Master's", value: "masters" },
  { name: "PhD", value: "phd" },
  { name: "Diploma", value: "diploma" },
  { name: "Certificate", value: "certificate" },
];

export default function Home() {
  const [courseInput, setCourseInput] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [openDestination, setOpenDestination] = useState(false);
  const [openDegree, setOpenDegree] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleCourseInputChange = (e) => {
    const value = e.target.value;
    setCourseInput(value);

    if (value.length > 0) {
      const filtered = courseSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCourseInput(suggestion);
    setFilteredSuggestions([]);
  };

  const handleSearch = () => {
    // In a real app, we would use router.push here
    // For now, we'll just redirect using window.location
    const params = new URLSearchParams();
    if (courseInput) params.append("course", courseInput);
    if (selectedDestination) params.append("destination", selectedDestination);
    if (selectedDegree) params.append("degree", selectedDegree);

    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] bg-gradient-to-br from-red-50 via-orange-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=700&width=1400')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
          <div className="max-w-4xl text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Find Your <span className="text-[#8A0206]">Perfect</span> Study
              Destination
            </h1>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Explore top universities and courses worldwide to kickstart your
              international education journey
            </p>
          </div>

          <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="relative md:col-span-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  value={courseInput}
                  onChange={handleCourseInputChange}
                  placeholder="Search for a course..."
                  className="pl-10 pr-4 py-6 w-full text-base rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                {filteredSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                    <ul className="py-1 max-h-60 overflow-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                        >
                          <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="md:col-span-3">
                <Popover
                  open={openDestination}
                  onOpenChange={setOpenDestination}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openDestination}
                      className="w-full justify-between py-6 text-base rounded-lg border-gray-200"
                    >
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                        {selectedDestination
                          ? destinations.find(
                              (d) => d.value === selectedDestination
                            )?.name
                          : "Select destination"}
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search destinations..." />
                      <CommandList>
                        <CommandEmpty>No destination found.</CommandEmpty>
                        <CommandGroup>
                          {destinations.map((destination) => (
                            <CommandItem
                              key={destination.value}
                              value={destination.value}
                              onSelect={(currentValue) => {
                                setSelectedDestination(
                                  currentValue === selectedDestination
                                    ? ""
                                    : currentValue
                                );
                                setOpenDestination(false);
                              }}
                            >
                              <span className="mr-2">{destination.flag}</span>
                              {destination.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="md:col-span-3">
                <Popover open={openDegree} onOpenChange={setOpenDegree}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openDegree}
                      className="w-full justify-between py-6 text-base rounded-lg border-gray-200"
                    >
                      <div className="flex items-center">
                        <School className="h-5 w-5 mr-2 text-gray-400" />
                        {selectedDegree
                          ? degreeTypes.find((d) => d.value === selectedDegree)
                              ?.name
                          : "Select degree"}
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search degree types..." />
                      <CommandList>
                        <CommandEmpty>No degree type found.</CommandEmpty>
                        <CommandGroup>
                          {degreeTypes.map((degree) => (
                            <CommandItem
                              key={degree.value}
                              value={degree.value}
                              onSelect={(currentValue) => {
                                setSelectedDegree(
                                  currentValue === selectedDegree
                                    ? ""
                                    : currentValue
                                );
                                setOpenDegree(false);
                              }}
                            >
                              {degree.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="md:col-span-1">
                <Button
                  onClick={handleSearch}
                  className="w-full h-full bg-[#8A0206] hover:bg-red-700 text-white rounded-lg"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <p className="text-sm text-slate-500 mr-2">Popular searches:</p>
            {[
              "Computer Science",
              "MBA",
              "Engineering",
              "Medicine",
              "Data Science",
            ].map((term) => (
              <Link
                href={`/search?course=${encodeURIComponent(term)}`}
                key={term}
                className="text-sm text-[#8A0206] bg-red-100 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Study Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the most popular countries for international education and
              find your perfect fit
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "USA",
                icon: "🇺🇸",
                universities: 100,
                courses: "Engineering, Business, Computer Science",
              },
              {
                name: "Canada",
                icon: "🇨🇦",
                universities: 100,
                courses: "Engineering, Management, IT",
              },
              {
                name: "United Kingdom",
                icon: "🇬🇧",
                universities: 100,
                courses: "Law, Engineering, Business",
              },
              {
                name: "Australia",
                icon: "🇦🇺",
                universities: 63,
                courses: "Engineering, Hospitality, Business",
              },
              {
                name: "New Zealand",
                icon: "🇳🇿",
                universities: 38,
                courses: "IT, MBA, Healthcare",
              },
              {
                name: "Ireland",
                icon: "🇮🇪",
                universities: 26,
                courses: "Engineering, Management, Medicine",
              },
              {
                name: "Europe",
                icon: "🇪🇺",
                universities: 150,
                courses: "Engineering, Business, Arts",
              },
              {
                name: "Asia",
                icon: "🌏",
                universities: 100,
                courses: "Technology, Business, Medicine",
              },
            ].map((destination) => (
              <Link
                href={`/destinations/${destination.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={destination.name}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-4">{destination.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {destination.universities} Universities
                    </p>
                  </div>
                  <div className="bg-gray-50 px-6 py-3 border-t">
                    <p className="text-xs text-gray-500 truncate">
                      Popular: {destination.courses}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              World-Class Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover top-ranked institutions that offer exceptional education
              and research opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "University of Connecticut",
                location: "Storrs, Connecticut, USA",
                logo: "/placeholder.svg?height=80&width=80",
                ranking: "#45 in National Universities",
                programs: ["Engineering", "Business", "Computer Science"],
                tuition: "$13,700 - $37,900 / year",
              },
              {
                name: "Johns Hopkins University",
                location: "Baltimore, Maryland, USA",
                logo: "/placeholder.svg?height=80&width=80",
                ranking: "#7 in National Universities",
                programs: [
                  "Engineering",
                  "Medicine",
                  "International Relations",
                ],
                tuition: "$27,800 - $58,700 / year",
              },
              {
                name: "University of Bristol",
                location: "Bristol, United Kingdom",
                logo: "/placeholder.svg?height=80&width=80",
                ranking: "#62 in World Universities",
                programs: ["Law", "Engineering", "Arts"],
                tuition: "£19,300 - £25,900 / year",
              },
            ].map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={university.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{university.name}</h3>
                      <p className="text-sm text-gray-500">
                        {university.location}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {university.ranking}
                    </Badge>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {university.programs.map((program, i) => (
                        <Badge key={i} variant="outline" className="bg-blue-50">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-gray-900">
                        {university.tuition}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="text-[#8A0206] border-red-200 hover:bg-blue-50"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-[#8A0206] hover:bg-red-700">
              Explore All Universities
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover in-demand programs that can launch your international
              career
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Computer Science",
                icon: "💻",
                countries: ["USA", "UK", "Canada"],
              },
              {
                name: "Business Management",
                icon: "📊",
                countries: ["USA", "Australia", "UK"],
              },
              {
                name: "Engineering",
                icon: "🔧",
                countries: ["Germany", "USA", "Canada"],
              },
              {
                name: "Medicine",
                icon: "🩺",
                countries: ["UK", "USA", "Australia"],
              },
              {
                name: "Data Science",
                icon: "📈",
                countries: ["USA", "Canada", "Germany"],
              },
              {
                name: "Architecture",
                icon: "🏛️",
                countries: ["Italy", "UK", "USA"],
              },
              { name: "Law", icon: "⚖️", countries: ["UK", "USA", "Canada"] },
              {
                name: "Hospitality",
                icon: "🏨",
                countries: ["Switzerland", "Australia", "USA"],
              },
            ].map((course, index) => (
              <Link
                href={`/courses/${course.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all p-6 text-center group-hover:bg-red-50">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-red-600">
                    {course.name}
                  </h3>
                  <div className="text-xs text-gray-500">
                    Top countries: {course.countries.join(", ")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#8A0206] to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We&#39;re dedicated to helping you find the perfect educational
              path abroad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Database",
                description:
                  "Access information on over 500+ universities and 1000+ courses worldwide",
                icon: "🌐",
              },
              {
                title: "Expert Guidance",
                description:
                  "Get personalized advice from education consultants with international experience",
                icon: "🧠",
              },
              {
                title: "Application Support",
                description:
                  "Receive assistance throughout the entire application process, from selection to admission",
                icon: "📝",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who found their perfect educational path with
              our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                program: "Computer Science, MSc",
                university: "University of Toronto, Canada",
                quote:
                  "The search tools helped me find the perfect program that matched my career goals and budget.",
                avatar: "/images/profile1.jpg",
              },
              {
                name: "Michael Chen",
                program: "Business Administration, MBA",
                university: "University of Melbourne, Australia",
                quote:
                  "I was able to compare universities across different countries and find scholarships I didn&#x27;t know existed.",
                avatar: "/images/profile2.jpg",
              },
              {
                name: "Priya Sharma",
                program: "Mechanical Engineering, BEng",
                university: "University of Manchester, UK",
                quote:
                  "The detailed course information and university profiles made my decision process so much easier.",
                avatar: "/images/profile3.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 relative">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-red-400 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.program}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8A0206] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Begin your search today and discover the perfect educational
            opportunity abroad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#8A0206] hover:bg-red-700 text-lg px-8 py-6 border-white border">
              Search Programs
            </Button>
            <Button
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 text-lg px-8 py-6 hover:text-[#8A0206]"
            >
              Get Expert Advice
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
