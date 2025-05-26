// "use client";

// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation"; // Import useSearchParams
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   ChevronDown,
//   GraduationCap,
//   MapPin,
//   School,
// } from "lucide-react";
// import data from "../components/data.js";

// export default function SearchPage() {
//   const searchParams = useSearchParams(); // Correct way to get search params in Next.js App Router

//   // State variables
//   const [courseInput, setCourseInput] = useState("");
//   const [selectedDestination, setSelectedDestination] = useState("");
//   const [selectedDegree, setSelectedDegree] = useState("");
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [currentCountryCourses, setCurrentCountryCourses] = useState([]);

//   useEffect(() => {
//     if (searchParams) {
//       setCourseInput(searchParams.get("course") || "");
//       setSelectedDestination(searchParams.get("destination") || "");
//       setSelectedDegree(searchParams.get("degree") || "");
//     }
//   }, [searchParams]); // Ensure state updates when searchParams change

//   // Degree types
//   const degreeTypes = [
//     { name: "Bachelor's", value: "bachelors" },
//     { name: "Master's", value: "masters" },
//     { name: "PhD", value: "phd" },
//     { name: "Diploma", value: "diploma" },
//     { name: "Certificate", value: "certificate" },
//   ];

//   const destinations = data.map((country) => ({
//     name: country.cn,
//     value: country.cn.toLowerCase().replace(/\s+/g, "-"),
//     flag: "🌐",
//   }));

//   // Update courses based on selected destination
//   useEffect(() => {
//     if (selectedDestination) {
//       const country = data.find(
//         (item) =>
//           item.cn.toLowerCase() === selectedDestination.replace(/-/g, " ")
//       );
//       setCurrentCountryCourses(country ? country.cr : []);
//     } else {
//       setCurrentCountryCourses([]);
//     }
//   }, [selectedDestination]);

//   // Handle search input changes
//   const handleCourseInputChange = (e) => {
//     const value = e.target.value;
//     setCourseInput(value);
//     if (value.length > 0) {
//       const filtered = currentCountryCourses.filter((suggestion) =>
//         suggestion.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredSuggestions(filtered);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setCourseInput(suggestion);
//     setFilteredSuggestions([]);
//   };

//   // Perform the search by updating the URL
//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (courseInput) params.append("course", courseInput);
//     if (selectedDestination) params.append("destination", selectedDestination);
//     if (selectedDegree) params.append("degree", selectedDegree);

//     window.location.href = `/search?${params.toString()}`;
//   };

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header with integrated search bar */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-center">
//             <div className="flex-1 max-w-3xl mx-4">
//               <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">
//                 {/* Destination selector */}
//                 <Popover
//                   open={openDestination}
//                   onOpenChange={setOpenDestination}
//                 >
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDestination}
//                       className="flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDestination
//                         ? destinations.find(
//                             (d) => d.value === selectedDestination
//                           )?.name
//                         : "Select destination"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search destinations..." />
//                       <CommandList>
//                         <CommandEmpty>No destination found.</CommandEmpty>
//                         <CommandGroup>
//                           {destinations.map((destination) => (
//                             <CommandItem
//                               key={destination.value}
//                               value={destination.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDestination(
//                                   currentValue === selectedDestination
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDestination(false);
//                               }}
//                             >
//                               <span className="mr-2">{destination.flag}</span>
//                               {destination.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Course search input with suggestions */}
//                 <div className="relative flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Degree selector */}
//                 <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDegree}
//                       className="flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <School className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDegree
//                         ? degreeTypes.find((d) => d.value === selectedDegree)
//                             ?.name
//                         : "Select degree"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search degree types..." />
//                       <CommandList>
//                         <CommandEmpty>No degree type found.</CommandEmpty>
//                         <CommandGroup>
//                           {degreeTypes.map((degree) => (
//                             <CommandItem
//                               key={degree.value}
//                               value={degree.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDegree(
//                                   currentValue === selectedDegree
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDegree(false);
//                               }}
//                             >
//                               {degree.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Search button */}
//                 <Button
//                   onClick={handleSearch}
//                   size="sm"
//                   className="ml-2 bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             {/* <div>
//               <Button variant="ghost">
//                 <SlidersHorizontal className="h-5 w-5 mr-2" />
//                 Menu
//               </Button>
//             </div> */}
//           </div>
//         </div>
//       </header>

//       {/* Tabs for search results */}
//       <Tabs defaultValue="courses">
//         <TabsList className="container mx-auto px-4">
//           <TabsTrigger value="courses">
//             Courses (
//             {
//               /* Add course count logic if available */
//               0
//             }
//             )
//           </TabsTrigger>
//           <TabsTrigger value="universities">
//             Universities (
//             {
//               /* Add university count logic if available */
//               0
//             }
//             )
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="courses">
//           {/* Render your course search results here */}
//         </TabsContent>
//         <TabsContent value="universities">
//           {/* Render your university search results here */}
//         </TabsContent>
//       </Tabs>
//     </main>
//   );
// }

//working code
// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   ChevronDown,
//   GraduationCap,
//   MapPin,
//   School,
//   Star,
// } from "lucide-react";
// import data from "../components/data.js";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";

// export default function SearchPage() {
//   // Use the useSearchParams hook to access search parameters
//   const searchParams = useSearchParams();

//   // Initialize search parameters from URL (if any)
//   const [courseInput, setCourseInput] = useState(
//     searchParams.get("course") || ""
//   );
//   const [selectedDestination, setSelectedDestination] = useState(
//     searchParams.get("destination") || ""
//   );
//   const [selectedDegree, setSelectedDegree] = useState(
//     searchParams.get("degree") || ""
//   );
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [currentCountryCourses, setCurrentCountryCourses] = useState([]);
//   const [currentCountryUniversities, setCurrentCountryUniversities] = useState(
//     []
//   );

//   const degreeTypes = [
//     { name: "Bachelor's", value: "bachelors" },
//     { name: "Master's", value: "masters" },
//     { name: "PhD", value: "phd" },
//     { name: "Diploma", value: "diploma" },
//     { name: "Certificate", value: "certificate" },
//   ];

//   const destinations = data.map((country) => ({
//     name: country.cn,
//     value: country.cn.toLowerCase().replace(/\s+/g, "-"),
//     flag: "🌐",
//   }));

//   useEffect(() => {
//     if (selectedDestination) {
//       const country = data.find(
//         (item) =>
//           item.cn.toLowerCase() === selectedDestination.replace(/-/g, " ")
//       );
//       setCurrentCountryCourses(country ? country.cr : []);
//       setCurrentCountryUniversities(country ? country.un : []);
//     } else {
//       setCurrentCountryCourses([]);
//       setCurrentCountryUniversities([]);
//     }
//   }, [selectedDestination]);

//   // Handle course input changes and update suggestions
//   const handleCourseInputChange = (e) => {
//     const value = e.target.value;
//     setCourseInput(value);
//     if (value.length > 0) {
//       const filtered = currentCountryCourses.filter((suggestion) =>
//         suggestion.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredSuggestions(filtered);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setCourseInput(suggestion);
//     setFilteredSuggestions([]);
//   };

//   // Perform the search by updating the URL (or calling your search logic)
//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (courseInput) params.append("course", courseInput);
//     if (selectedDestination) params.append("destination", selectedDestination);
//     if (selectedDegree) params.append("degree", selectedDegree);

//     // This will reload the page with the new query parameters.
//     window.location.href = `/search?${params.toString()}`;
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   // Add this pagination logic before the return statement
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUniversities = currentCountryUniversities.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(
//     currentCountryUniversities.length / itemsPerPage
//   );
//   const PaginationControls = () => (
//     <div className="flex items-center justify-between mt-6">
//       <div className="text-sm text-gray-500">
//         Showing {indexOfFirstItem + 1} -{" "}
//         {Math.min(indexOfLastItem, currentCountryUniversities.length)} of{" "}
//         {currentCountryUniversities.length} universities
//       </div>
//       <div className="flex gap-2">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={
//             currentPage === totalPages ||
//             currentCountryUniversities.length === 0
//           }
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header with integrated search bar */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-center">
//             <div className="flex-1 max-w-3xl mx-4">
//               <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">
//                 {/* Destination selector */}
//                 <Popover
//                   open={openDestination}
//                   onOpenChange={setOpenDestination}
//                 >
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDestination}
//                       className="flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDestination
//                         ? destinations.find(
//                             (d) => d.value === selectedDestination
//                           )?.name
//                         : "Select destination"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search destinations..." />
//                       <CommandList>
//                         <CommandEmpty>No destination found.</CommandEmpty>
//                         <CommandGroup>
//                           {destinations.map((destination) => (
//                             <CommandItem
//                               key={destination.value}
//                               value={destination.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDestination(
//                                   currentValue === selectedDestination
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDestination(false);
//                               }}
//                             >
//                               <span className="mr-2">{destination.flag}</span>
//                               {destination.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Course search input with suggestions */}
//                 <div className="relative flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Degree selector */}
//                 <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDegree}
//                       className="flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <School className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDegree
//                         ? degreeTypes.find((d) => d.value === selectedDegree)
//                             ?.name
//                         : "Select degree"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search degree types..." />
//                       <CommandList>
//                         <CommandEmpty>No degree type found.</CommandEmpty>
//                         <CommandGroup>
//                           {degreeTypes.map((degree) => (
//                             <CommandItem
//                               key={degree.value}
//                               value={degree.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDegree(
//                                   currentValue === selectedDegree
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDegree(false);
//                               }}
//                             >
//                               {degree.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Search button */}
//                 <Button
//                   onClick={handleSearch}
//                   size="sm"
//                   className="ml-2 bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Tabs for search results */}
//       <Tabs defaultValue="courses" className="py-4">
//         <TabsList className="container mx-auto px-4">
//           <TabsTrigger value="courses">
//             Courses (
//             {
//               /* Add course count logic if available */
//               0
//             }
//             )
//           </TabsTrigger>
//           <TabsTrigger value="universities">
//             Universities (
//             {
//               /* Add university count logic if available */
//               currentCountryUniversities.length
//             }
//             )
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="courses">
//           {/* Render your course search results here */}
//         </TabsContent>
//         {/* <TabsContent value="universities">
//           <div className="container mx-auto px-4 py-4">
//             {currentCountryUniversities.length === 0 ? (
//               <p className="text-gray-500">
//                 No universities found for this destination.
//               </p>
//             ) : (
//               <ul className="space-y-2">
//                 {currentCountryUniversities.map((university, index) => (
//                   <li
//                     key={index}
//                     className="p-3 border rounded bg-white shadow-sm"
//                   >
//                     {university}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </TabsContent> */}

//         <TabsContent value="universities">
//           <div className="container mx-auto px-4 py-4">
//             {currentCountryUniversities.length === 0 ? (
//               <p className="text-gray-500">
//                 No universities found for this destination.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentUniversities.map((university, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                     >
//                       <div className="p-6">
//                         <div className="flex flex-col md:flex-row">
//                           {/* University Logo */}
//                           <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                             <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                               <Image
//                                 src={university.logo || "/placeholder.svg"}
//                                 alt={university.name}
//                                 width={64}
//                                 height={64}
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>

//                           {/* University Details */}
//                           <div className="flex-grow">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                               <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                                   {university}
//                                 </h2>
//                                 <div className="flex items-center mb-2">
//                                   <span className="mr-1">
//                                     {university.flag}
//                                   </span>
//                                   <span className="text-gray-600">
//                                     {university.location}
//                                   </span>
//                                 </div>
//                               </div>

//                               {/* <div className="mt-2 md:mt-0 text-right">
//                                 <div className="text-2xl font-bold text-blue-600">
//                                   {university.tuition}
//                                 </div>
//                                 <div className="text-sm text-gray-500">
//                                   per year
//                                 </div>
//                               </div> */}
//                               <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
//                                 Find your counsellor
//                               </button>
//                             </div>

//                             {/* Details Grid */}
//                             {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                               <div>
//                                 <div className="text-xs text-gray-500 mb-1">
//                                   Duration
//                                 </div>
//                                 <div className="text-sm font-medium">
//                                   {university.duration}
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500 mb-1">
//                                   Degree
//                                 </div>
//                                 <div className="text-sm font-medium">
//                                   {university.degreeType}
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500 mb-1">
//                                   Program Type
//                                 </div>
//                                 <div className="text-sm font-medium">
//                                   {university.programType}
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500 mb-1">
//                                   Start Date
//                                 </div>
//                                 <div className="text-sm font-medium">
//                                   {university.startDate}
//                                 </div>
//                               </div>
//                             </div> */}

//                             {/* Badges */}
//                             {/* <div className="mt-4 flex items-center gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="flex items-center gap-1 text-amber-600 bg-amber-50 border-amber-100"
//                               >
//                                 <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
//                                 Rank #{university.employabilityRank}
//                               </Badge>
//                               <Badge
//                                 variant="outline"
//                                 className="text-green-600 bg-green-50 border-green-100"
//                               >
//                                 Accreditation: {university.accreditation}
//                               </Badge>
//                             </div> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </main>
//   );
// }

//working code
// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   ChevronDown,
//   MapPin,
//   GraduationCap,
//   School,
//   ChevronRight,
// } from "lucide-react";
// import uniData from "../components/data.js";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";

// export default function SearchPage() {
//   // Use the useSearchParams hook to access search parameters
//   const searchParams = useSearchParams();

//   // Initialize search parameters from URL (if any)
//   const [courseInput, setCourseInput] = useState(
//     searchParams.get("course") || ""
//   );
//   const [selectedDestination, setSelectedDestination] = useState(
//     searchParams.get("destination") || ""
//   );
//   const [selectedDegree, setSelectedDegree] = useState(
//     searchParams.get("degree") || "master"
//   );
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [filteredUniversities, setFilteredUniversities] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   const degreeTypes = [
//     { name: "Bachelor's", value: "bachelors" },
//     { name: "Master's", value: "master" },
//   ];

//   const destinations = uniData.map((country) => ({
//     name: country.country,
//     value: country.country.toLowerCase().replace(/\s+/g, "-"),
//     flag: "🌐",
//   }));

//   // Extract all courses from the data
//   const getAllCourses = () => {
//     const courses = [];
//     uniData.forEach((country) => {
//       Object.entries(country.universities).forEach(([uniName, programs]) => {
//         Object.entries(programs[selectedDegree] || {}).forEach(
//           ([courseName, duration]) => {
//             courses.push({
//               name: courseName,
//               university: uniName,
//               country: country.country,
//               duration: duration,
//             });
//           }
//         );
//       });
//     });
//     return courses;
//   };

//   // Extract all universities from the data
//   const getAllUniversities = () => {
//     const universities = [];
//     uniData.forEach((country) => {
//       Object.keys(country.universities).forEach((uniName) => {
//         universities.push({
//           name: uniName,
//           country: country.country,
//           logo: `/placeholder.svg?height=64&width=64`,
//           location: country.country,
//         });
//       });
//     });
//     return universities;
//   };

//   useEffect(() => {
//     // Filter courses based on search input
//     if (courseInput) {
//       const allCourses = getAllCourses();
//       const filtered = allCourses.filter((course) =>
//         course.name.toLowerCase().includes(courseInput.toLowerCase())
//       );
//       setFilteredCourses(filtered);

//       // Also filter universities that offer this course
//       const relevantUniversities = filtered.map((course) => course.university);
//       const uniqueUniversities = [...new Set(relevantUniversities)];
//       const uniDetails = getAllUniversities().filter((uni) =>
//         uniqueUniversities.includes(uni.name)
//       );
//       setFilteredUniversities(uniDetails);
//     } else {
//       setFilteredCourses([]);
//       setFilteredUniversities(getAllUniversities());
//     }
//   }, [courseInput, selectedDegree]);

//   // Handle course input changes and update suggestions
//   const handleCourseInputChange = (e) => {
//     const value = e.target.value;
//     setCourseInput(value);
//     if (value.length > 0) {
//       const allCourses = getAllCourses();
//       const suggestions = allCourses
//         .map((course) => course.name)
//         .filter((name) => name.toLowerCase().includes(value.toLowerCase()));

//       // Remove duplicates
//       const uniqueSuggestions = [...new Set(suggestions)];
//       setFilteredSuggestions(uniqueSuggestions);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setCourseInput(suggestion);
//     setFilteredSuggestions([]);
//   };

//   // Perform the search by updating the URL
//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (courseInput) params.append("course", courseInput);
//     if (selectedDestination) params.append("destination", selectedDestination);
//     if (selectedDegree) params.append("degree", selectedDegree);

//     // This will reload the page with the new query parameters.
//     window.location.href = `/search?${params.toString()}`;
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUniversities = filteredUniversities.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

//   const PaginationControls = () => (
//     <div className="flex items-center justify-between mt-6">
//       <div className="text-sm text-gray-500">
//         Showing {filteredUniversities.length > 0 ? indexOfFirstItem + 1 : 0} -{" "}
//         {Math.min(indexOfLastItem, filteredUniversities.length)} of{" "}
//         {filteredUniversities.length} universities
//       </div>
//       <div className="flex gap-2">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={
//             currentPage === totalPages || filteredUniversities.length === 0
//           }
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header with integrated search bar */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-center">
//             <div className="flex-1 max-w-3xl mx-4">
//               <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">
//                 {/* Destination selector */}
//                 <Popover
//                   open={openDestination}
//                   onOpenChange={setOpenDestination}
//                 >
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDestination}
//                       className="flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDestination
//                         ? destinations.find(
//                             (d) => d.value === selectedDestination
//                           )?.name
//                         : "Select destination"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search destinations..." />
//                       <CommandList>
//                         <CommandEmpty>No destination found.</CommandEmpty>
//                         <CommandGroup>
//                           {destinations.map((destination) => (
//                             <CommandItem
//                               key={destination.value}
//                               value={destination.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDestination(
//                                   currentValue === selectedDestination
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDestination(false);
//                               }}
//                             >
//                               <span className="mr-2">{destination.flag}</span>
//                               {destination.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Course search input with suggestions */}
//                 <div className="relative flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Degree selector */}
//                 <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={openDegree}
//                       className="flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
//                     >
//                       <School className="h-5 w-5 mr-1 text-gray-400" />
//                       {selectedDegree
//                         ? degreeTypes.find((d) => d.value === selectedDegree)
//                             ?.name
//                         : "Select degree"}
//                       <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-full p-0" align="start">
//                     <Command>
//                       <CommandInput placeholder="Search degree types..." />
//                       <CommandList>
//                         <CommandEmpty>No degree type found.</CommandEmpty>
//                         <CommandGroup>
//                           {degreeTypes.map((degree) => (
//                             <CommandItem
//                               key={degree.value}
//                               value={degree.value}
//                               onSelect={(currentValue) => {
//                                 setSelectedDegree(
//                                   currentValue === selectedDegree
//                                     ? ""
//                                     : currentValue
//                                 );
//                                 setOpenDegree(false);
//                               }}
//                             >
//                               {degree.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Search button */}
//                 <Button
//                   onClick={handleSearch}
//                   size="sm"
//                   className="ml-2 bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Tabs for search results */}
//       <Tabs defaultValue="courses" className="py-4">
//         <TabsList className="container mx-auto px-4">
//           <TabsTrigger value="courses">
//             Courses ({filteredCourses.length})
//           </TabsTrigger>
//           <TabsTrigger value="universities">
//             Universities ({filteredUniversities.length})
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="courses">
//           <div className="container mx-auto px-4 py-4">
//             {filteredCourses.length === 0 ? (
//               <p className="text-gray-500">
//                 No courses found. Try a different search term.
//               </p>
//             ) : (
//               <div className="space-y-4">
//                 {filteredCourses.map((course, index) => (
//                   <Card
//                     key={index}
//                     className="p-6 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                       <div>
//                         <h2 className="text-xl font-bold text-gray-900 mb-2">
//                           {course.name}
//                         </h2>
//                         <div className="flex items-center mb-2">
//                           <School className="h-4 w-4 mr-2 text-[#8A0206]" />
//                           <span className="text-gray-600">
//                             {course.university}
//                           </span>
//                         </div>
//                         <div className="flex items-center mb-2">
//                           <MapPin className="h-4 w-4 mr-2 text-gray-400" />
//                           <span className="text-gray-600">
//                             {course.country}
//                           </span>
//                         </div>
//                       </div>

//                       <div className="mt-4 md:mt-0 flex flex-col items-end">
//                         <div className="text-lg font-bold text-blue-600">
//                           Duration: {course.duration}
//                         </div>
//                         <div className="mt-2">
//                           <Button className="bg-[#8A0206] hover:bg-red-800">
//                             View Details
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </div>
//         </TabsContent>

//         <TabsContent value="universities">
//           <div className="container mx-auto px-4 py-4">
//             {filteredUniversities.length === 0 ? (
//               <p className="text-gray-500">
//                 No universities found for this search.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentUniversities.map((university, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                     >
//                       <div className="p-6">
//                         <div className="flex flex-col md:flex-row">
//                           {/* University Logo */}
//                           <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                             <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                               <Image
//                                 src={
//                                   university.logo ||
//                                   "/placeholder.svg?height=64&width=64"
//                                 }
//                                 alt={university.name}
//                                 width={64}
//                                 height={64}
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>

//                           {/* University Details */}
//                           <div className="flex-grow">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                               <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                                   {university.name}
//                                 </h2>
//                                 <div className="flex items-center mb-2">
//                                   <MapPin className="h-4 w-4 mr-1 text-gray-400" />
//                                   <span className="text-gray-600">
//                                     {university.location}
//                                   </span>
//                                 </div>
//                               </div>

//                               <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors mt-4 md:mt-0">
//                                 Find your counsellor
//                               </button>
//                             </div>

//                             {/* Related Courses Section */}
//                             <div className="mt-4">
//                               <h3 className="text-sm font-semibold text-gray-500 mb-2">
//                                 Related Courses:
//                               </h3>
//                               <div className="flex flex-wrap gap-2">
//                                 {filteredCourses
//                                   .filter(
//                                     (course) =>
//                                       course.university === university.name
//                                   )
//                                   .slice(0, 3)
//                                   .map((course, idx) => (
//                                     <Badge
//                                       key={idx}
//                                       variant="outline"
//                                       className="flex items-center gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
//                                     >
//                                       <GraduationCap className="h-3 w-3" />
//                                       {course.name}
//                                     </Badge>
//                                   ))}
//                                 {filteredCourses.filter(
//                                   (course) =>
//                                     course.university === university.name
//                                 ).length > 3 && (
//                                   <Badge
//                                     variant="outline"
//                                     className="flex items-center gap-1 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                                   >
//                                     <ChevronRight className="h-3 w-3" />
//                                     View more
//                                   </Badge>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </main>
//   );
// }

//current working code
// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   ChevronDown,
//   MapPin,
//   GraduationCap,
//   School,
//   ChevronRight,
// } from "lucide-react";
// import uniData from "../components/data.js";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";

// // Utility to extract keywords for matching
// function extractKeywords(courseName) {
//   return courseName
//     .split(/\W+/)
//     .map((w) => w.toLowerCase())
//     .filter((w) => w.length > 3);
// }

// // Returns courses sharing any keyword with the given courseName
// function getRelatedCourses(allCourses, courseName) {
//   const keys = extractKeywords(courseName);
//   return allCourses.filter((c) => {
//     if (c.name === courseName) return false;
//     const title = c.name.toLowerCase();
//     return keys.some((k) => title.includes(k));
//   });
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();

//   const [courseInput, setCourseInput] = useState(
//     searchParams.get("course") || ""
//   );
//   const [selectedDestination, setSelectedDestination] = useState(
//     searchParams.get("destination") || ""
//   );
//   const [selectedDegree, setSelectedDegree] = useState(
//     searchParams.get("degree") || "master"
//   );
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [relatedCourses, setRelatedCourses] = useState([]);
//   const [filteredUniversities, setFilteredUniversities] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   const degreeTypes = [
//     { name: "Bachelor's", value: "bachelors" },
//     { name: "Master's", value: "master" },
//   ];

//   const destinations = uniData.map((country) => ({
//     name: country.country,
//     value: country.country.toLowerCase().replace(/\s+/g, "-"),
//     flag: "🌐",
//   }));

//   // Gather all courses once for performance
//   const allCourses = useMemo(() => {
//     const courses = [];
//     uniData.forEach((country) => {
//       Object.entries(country.universities).forEach(([uniName, programs]) => {
//         Object.entries(programs[selectedDegree] || {}).forEach(
//           ([courseName, duration]) => {
//             courses.push({
//               name: courseName,
//               university: uniName,
//               country: country.country,
//               duration,
//             });
//           }
//         );
//       });
//     });
//     return courses;
//   }, [selectedDegree]);

//   // Gather all universities once
//   const getAllUniversities = () => {
//     const universities = [];
//     uniData.forEach((country) => {
//       Object.keys(country.universities).forEach((uniName) => {
//         universities.push({
//           name: uniName,
//           country: country.country,
//           logo: `/placeholder.svg?height=64&width=64`,
//           location: country.country,
//         });
//       });
//     });
//     return universities;
//   };

//   // Update filters and related courses
//   useEffect(() => {
//     if (courseInput) {
//       const matches = allCourses.filter((course) =>
//         course.name.toLowerCase().includes(courseInput.toLowerCase())
//       );
//       setFilteredCourses(matches);

//       // Compute related courses based on the first match
//       const primaryName = matches[0]?.name;
//       if (primaryName) {
//         const related = getRelatedCourses(allCourses, primaryName);
//         setRelatedCourses(related);
//       } else {
//         setRelatedCourses([]);
//       }

//       const uniNames = matches.map((c) => c.university);
//       const uniqueUni = [...new Set(uniNames)];
//       const uniDetails = getAllUniversities().filter((u) =>
//         uniqueUni.includes(u.name)
//       );
//       setFilteredUniversities(uniDetails);
//     } else {
//       setFilteredCourses([]);
//       setRelatedCourses([]);
//       setFilteredUniversities(getAllUniversities());
//     }
//     setCurrentPage(1);
//   }, [courseInput, selectedDegree]);

//   const handleCourseInputChange = (e) => {
//     const value = e.target.value;
//     setCourseInput(value);
//     if (value.length > 0) {
//       const suggestions = allCourses
//         .map((c) => c.name)
//         .filter((n) => n.toLowerCase().includes(value.toLowerCase()));
//       setFilteredSuggestions([...new Set(suggestions)]);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setCourseInput(suggestion);
//     setFilteredSuggestions([]);
//   };

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (courseInput) params.append("course", courseInput);
//     if (selectedDestination) params.append("destination", selectedDestination);
//     if (selectedDegree) params.append("degree", selectedDegree);
//     window.location.href = `/search?${params.toString()}`;
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUniversities = filteredUniversities.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

//   const PaginationControls = () => (
//     <div className="flex items-center justify-between mt-6">
//       <div className="text-sm text-gray-500">
//         Showing {filteredUniversities.length > 0 ? indexOfFirstItem + 1 : 0} -{" "}
//         {Math.min(indexOfLastItem, filteredUniversities.length)} of{" "}
//         {filteredUniversities.length} universities
//       </div>
//       <div className="flex gap-2">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={
//             currentPage === totalPages || filteredUniversities.length === 0
//           }
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex  items-center justify-center">
//             <div className="flex-1 max-w-3xl mx-4">
//               {/* <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">

//                 <div className="w-full md:mx-auto">
//                   <Popover
//                     open={openDestination}
//                     onOpenChange={setOpenDestination}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDestination}
//                         className="w-full md:mx-auto flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDestination
//                           ? destinations.find(
//                               (d) => d.value === selectedDestination
//                             )?.name
//                           : "Select destination"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search destinations..." />
//                         <CommandList>
//                           <CommandEmpty>No destination found.</CommandEmpty>
//                           <CommandGroup>
//                             {destinations.map((destination) => (
//                               <CommandItem
//                                 key={destination.value}
//                                 value={destination.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDestination(
//                                     currentValue === selectedDestination
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDestination(false);
//                                 }}
//                               >
//                                 <span className="mr-2">{destination.flag}</span>
//                                 {destination.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 <div className="relative w-full md:flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full md:mx-auto">
//                   <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDegree}
//                         className="w-full md:w-auto flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <School className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDegree
//                           ? degreeTypes.find((d) => d.value === selectedDegree)
//                               ?.name
//                           : "Select degree"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search degree types..." />
//                         <CommandList>
//                           <CommandEmpty>No degree type found.</CommandEmpty>
//                           <CommandGroup>
//                             {degreeTypes.map((degree) => (
//                               <CommandItem
//                                 key={degree.value}
//                                 value={degree.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDegree(
//                                     currentValue === selectedDegree
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDegree(false);
//                                 }}
//                               >
//                                 {degree.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 <div className="w-full md:w-auto">
//                   <Button
//                     onClick={handleSearch}
//                     size="sm"
//                     className="w-full md:w-auto ml-2 bg-blue-600 hover:bg-blue-700"
//                   >
//                     <Search className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div> */}
//               <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 space-y-2 md:space-y-0 md:space-x-2 relative">
//                 {/* Destination selector */}
//                 <div className="w-full md:w-auto">
//                   <Popover
//                     open={openDestination}
//                     onOpenChange={setOpenDestination}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDestination}
//                         className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDestination
//                           ? destinations.find(
//                               (d) => d.value === selectedDestination
//                             )?.name
//                           : "Select destination"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search destinations..." />
//                         <CommandList>
//                           <CommandEmpty>No destination found.</CommandEmpty>
//                           <CommandGroup>
//                             {destinations.map((destination) => (
//                               <CommandItem
//                                 key={destination.value}
//                                 value={destination.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDestination(
//                                     currentValue === selectedDestination
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDestination(false);
//                                 }}
//                               >
//                                 <span className="mr-2">{destination.flag}</span>
//                                 {destination.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Course search input */}
//                 <div className="relative w-full md:flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="w-full pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Degree selector */}
//                 <div className="w-full md:w-auto">
//                   <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDegree}
//                         className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <School className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDegree
//                           ? degreeTypes.find((d) => d.value === selectedDegree)
//                               ?.name
//                           : "Select degree"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search degree types..." />
//                         <CommandList>
//                           <CommandEmpty>No degree type found.</CommandEmpty>
//                           <CommandGroup>
//                             {degreeTypes.map((degree) => (
//                               <CommandItem
//                                 key={degree.value}
//                                 value={degree.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDegree(
//                                     currentValue === selectedDegree
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDegree(false);
//                                 }}
//                               >
//                                 {degree.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Search button */}
//                 <div className="w-full md:w-auto">
//                   <Button
//                     onClick={handleSearch}
//                     size="sm"
//                     className="w-full md:w-auto py-2 bg-blue-600 hover:bg-blue-700"
//                   >
//                     <Search className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <Tabs defaultValue="courses" className="py-4">
//         <TabsList className="container mx-auto px-4">
//           <TabsTrigger value="courses">
//             Courses ({filteredCourses.length})
//           </TabsTrigger>
//           <TabsTrigger value="universities">
//             Universities ({filteredUniversities.length})
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="courses">
//           <div className="container mx-auto px-4 py-4">
//             {filteredCourses.length === 0 ? (
//               <p className="text-gray-500">
//                 No courses found. Try a different search term.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-4">
//                   {filteredCourses.map((course, idx) => (
//                     <Card
//                       key={idx}
//                       className="p-6 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                         <div>
//                           <h2 className="text-xl font-bold text-gray-900 mb-2">
//                             {course.name}
//                           </h2>
//                           <div className="flex items-center mb-2">
//                             <School className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             <span className="text-gray-600">
//                               {course.university}
//                             </span>
//                           </div>
//                           <div className="flex items-center mb-2">
//                             <MapPin className="h-4 w-4 mr-2 text-gray-400" />
//                             <span className="text-gray-600">
//                               {course.country}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="mt-4 md:mt-0 flex flex-col items-end">
//                           <div className="text-lg font-bold text-blue-600">
//                             Duration: {course.duration}
//                           </div>
//                           <div className="mt-2">
//                             <Button className="bg-[#8A0206] hover:bg-red-800">
//                               View Details
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>

//                 {/* Related Courses Section */}
//                 {relatedCourses.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-lg font-semibold mb-2">
//                       You might also like:
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {relatedCourses.slice(0, 6).map((course, i) => (
//                         <Card key={i} className="p-4 hover:shadow-md">
//                           <h4 className="font-medium">{course.name}</h4>
//                           <p className="text-sm text-gray-600">
//                             {course.university} — {course.duration}
//                           </p>
//                         </Card>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </TabsContent>

//         {/* ... existing Universities tab ... */}
//         <TabsContent value="universities">
//           <div className="container mx-auto px-4 py-4">
//             {filteredUniversities.length === 0 ? (
//               <p className="text-gray-500">
//                 No universities found for this search.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentUniversities.map((university, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                     >
//                       <div className="p-6">
//                         <div className="flex flex-col md:flex-row">
//                           {/* University Logo */}
//                           <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                             <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                               <Image
//                                 src={
//                                   university.logo ||
//                                   "/placeholder.svg?height=64&width=64"
//                                 }
//                                 alt={university.name}
//                                 width={64}
//                                 height={64}
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>
//                           {/* University Details */}
//                           <div className="flex-grow">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                               <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                                   {university.name}
//                                 </h2>
//                                 <div className="flex items-center mb-2">
//                                   <MapPin className="h-4 w-4 mr-1 text-gray-400" />
//                                   <span className="text-gray-600">
//                                     {university.location}
//                                   </span>
//                                 </div>
//                               </div>
//                               <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors mt-4 md:mt-0">
//                                 Find your counsellor
//                               </button>
//                             </div>
//                             {/* Related Courses Section */}
//                             <div className="mt-4">
//                               <h3 className="text-sm font-semibold text-gray-500 mb-2">
//                                 Related Courses:
//                               </h3>
//                               <div className="flex flex-wrap gap-2">
//                                 {filteredCourses
//                                   .filter(
//                                     (course) =>
//                                       course.university === university.name
//                                   )
//                                   .slice(0, 3)
//                                   .map((course, idx) => (
//                                     <Badge
//                                       key={idx}
//                                       variant="outline"
//                                       className="flex items-center gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
//                                     >
//                                       <GraduationCap className="h-3 w-3" />
//                                       {course.name}
//                                     </Badge>
//                                   ))}
//                                 {filteredCourses.filter(
//                                   (course) =>
//                                     course.university === university.name
//                                 ).length > 3 && (
//                                   <Badge
//                                     variant="outline"
//                                     className="flex items-center gap-1 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                                   >
//                                     <ChevronRight className="h-3 w-3" />
//                                     View more
//                                   </Badge>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </main>
//   );
// }

//current working code
// "use client";

// import React, { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   ChevronDown,
//   MapPin,
//   GraduationCap,
//   School,
//   ChevronRight,
// } from "lucide-react";
// import uniData from "../components/data.js";
// import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";

// // Utility to extract keywords for matching
// function extractKeywords(courseName) {
//   return courseName
//     .split(/\W+/)
//     .map((w) => w.toLowerCase())
//     .filter((w) => w.length > 3);
// }

// // Returns courses sharing any keyword with the given courseName
// function getRelatedCourses(allCourses, courseName) {
//   const keys = extractKeywords(courseName);
//   return allCourses.filter((c) => {
//     if (c.name === courseName) return false;
//     const title = c.name.toLowerCase();
//     return keys.some((k) => title.includes(k));
//   });
// }

// export default function SearchPage() {
//   const searchParams = useSearchParams();

//   const [courseInput, setCourseInput] = useState(
//     searchParams.get("course") || ""
//   );
//   const [selectedDestination, setSelectedDestination] = useState(
//     searchParams.get("destination") || ""
//   );
//   const [selectedDegree, setSelectedDegree] = useState(
//     searchParams.get("degree") || "master"
//   );
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [relatedCourses, setRelatedCourses] = useState([]);
//   const [filteredUniversities, setFilteredUniversities] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   const degreeTypes = [
//     { name: "Bachelor's", value: "bachelors" },
//     { name: "Master's", value: "master" },
//   ];

//   const destinations = uniData.map((country) => ({
//     name: country.country,
//     value: country.country.toLowerCase().replace(/\s+/g, "-"),
//     flag: "🌐",
//   }));

//   // Map selectedDestination value to the human-readable country name
//   const selectedCountryName = selectedDestination
//     ? destinations.find((d) => d.value === selectedDestination)?.name
//     : null;

//   // Gather all courses once for performance (respects selectedDegree)
//   const allCourses = useMemo(() => {
//     const courses = [];
//     uniData.forEach((country) => {
//       Object.entries(country.universities).forEach(([uniName, programs]) => {
//         Object.entries(programs[selectedDegree] || {}).forEach(
//           ([courseName, duration]) => {
//             courses.push({
//               name: courseName,
//               university: uniName,
//               country: country.country,
//               duration,
//             });
//           }
//         );
//       });
//     });
//     return courses;
//   }, [selectedDegree]);

//   // Gather all universities once
//   const getAllUniversities = () => {
//     const universities = [];
//     uniData.forEach((country) => {
//       Object.keys(country.universities).forEach((uniName) => {
//         universities.push({
//           name: uniName,
//           country: country.country,
//           logo: `/placeholder.svg?height=64&width=64`,
//           location: country.country,
//         });
//       });
//     });
//     return universities;
//   };

//   // Update filters and related courses whenever inputs change
//   useEffect(() => {
//     // 1) Start from all courses
//     let matches = allCourses;

//     // 2) Filter by courseInput text
//     if (courseInput) {
//       matches = matches.filter((c) =>
//         c.name.toLowerCase().includes(courseInput.toLowerCase())
//       );
//     }

//     // 3) Filter by selected country
//     if (selectedCountryName) {
//       matches = matches.filter((c) => c.country === selectedCountryName);
//     }

//     setFilteredCourses(matches);

//     // 4) Compute related courses (also scoped by country)
//     if (matches.length > 0) {
//       const related = getRelatedCourses(allCourses, matches[0].name).filter(
//         (c) => !selectedCountryName || c.country === selectedCountryName
//       );
//       setRelatedCourses(related);
//     } else {
//       setRelatedCourses([]);
//     }

//     // 5) Build the university list
//     let uniDetails;
//     if (courseInput) {
//       // only show unis that have matching courses
//       const uniNames = matches.map((c) => c.university);
//       const uniqueUni = [...new Set(uniNames)];
//       uniDetails = getAllUniversities().filter((u) =>
//         uniqueUni.includes(u.name)
//       );
//     } else {
//       uniDetails = getAllUniversities();
//     }

//     // 6) If a country is selected, scope to that country
//     if (selectedCountryName) {
//       uniDetails = uniDetails.filter((u) => u.country === selectedCountryName);
//     }

//     setFilteredUniversities(uniDetails);
//     setCurrentPage(1);
//   }, [courseInput, selectedDegree, selectedDestination, allCourses]);

//   const handleCourseInputChange = (e) => {
//     const value = e.target.value;
//     setCourseInput(value);

//     if (value.length > 0) {
//       let suggestions = allCourses.filter((c) =>
//         c.name.toLowerCase().includes(value.toLowerCase())
//       );
//       if (selectedCountryName) {
//         suggestions = suggestions.filter(
//           (c) => c.country === selectedCountryName
//         );
//       }
//       setFilteredSuggestions([...new Set(suggestions.map((c) => c.name))]);
//     } else {
//       setFilteredSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setCourseInput(suggestion);
//     setFilteredSuggestions([]);
//   };

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (courseInput) params.append("course", courseInput);
//     if (selectedDestination) params.append("destination", selectedDestination);
//     if (selectedDegree) params.append("degree", selectedDegree);
//     window.location.href = `/search?${params.toString()}`;
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentUniversities = filteredUniversities.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

//   const PaginationControls = () => (
//     <div className="flex items-center justify-between mt-6">
//       <div className="text-sm text-gray-500">
//         Showing {filteredUniversities.length > 0 ? indexOfFirstItem + 1 : 0} -{" "}
//         {Math.min(indexOfLastItem, filteredUniversities.length)} of{" "}
//         {filteredUniversities.length} universities
//       </div>
//       <div className="flex gap-2">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage((p) => p - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage((p) => p + 1)}
//           disabled={
//             currentPage === totalPages || filteredUniversities.length === 0
//           }
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex  items-center justify-center">
//             <div className="flex-1 max-w-3xl mx-4">
//               {/* <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">

//                 <div className="w-full md:mx-auto">
//                   <Popover
//                     open={openDestination}
//                     onOpenChange={setOpenDestination}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDestination}
//                         className="w-full md:mx-auto flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDestination
//                           ? destinations.find(
//                               (d) => d.value === selectedDestination
//                             )?.name
//                           : "Select destination"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search destinations..." />
//                         <CommandList>
//                           <CommandEmpty>No destination found.</CommandEmpty>
//                           <CommandGroup>
//                             {destinations.map((destination) => (
//                               <CommandItem
//                                 key={destination.value}
//                                 value={destination.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDestination(
//                                     currentValue === selectedDestination
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDestination(false);
//                                 }}
//                               >
//                                 <span className="mr-2">{destination.flag}</span>
//                                 {destination.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 <div className="relative w-full md:flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full md:mx-auto">
//                   <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDegree}
//                         className="w-full md:w-auto flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <School className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDegree
//                           ? degreeTypes.find((d) => d.value === selectedDegree)
//                               ?.name
//                           : "Select degree"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search degree types..." />
//                         <CommandList>
//                           <CommandEmpty>No degree type found.</CommandEmpty>
//                           <CommandGroup>
//                             {degreeTypes.map((degree) => (
//                               <CommandItem
//                                 key={degree.value}
//                                 value={degree.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDegree(
//                                     currentValue === selectedDegree
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDegree(false);
//                                 }}
//                               >
//                                 {degree.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 <div className="w-full md:w-auto">
//                   <Button
//                     onClick={handleSearch}
//                     size="sm"
//                     className="w-full md:w-auto ml-2 bg-blue-600 hover:bg-blue-700"
//                   >
//                     <Search className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div> */}
//               <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 space-y-2 md:space-y-0 md:space-x-2 relative">
//                 {/* Destination selector */}
//                 <div className="w-full md:w-auto">
//                   <Popover
//                     open={openDestination}
//                     onOpenChange={setOpenDestination}
//                   >
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDestination}
//                         className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <MapPin className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDestination
//                           ? destinations.find(
//                               (d) => d.value === selectedDestination
//                             )?.name
//                           : "Select destination"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search destinations..." />
//                         <CommandList>
//                           <CommandEmpty>No destination found.</CommandEmpty>
//                           <CommandGroup>
//                             {destinations.map((destination) => (
//                               <CommandItem
//                                 key={destination.value}
//                                 value={destination.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDestination(
//                                     currentValue === selectedDestination
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDestination(false);
//                                 }}
//                               >
//                                 <span className="mr-2">{destination.flag}</span>
//                                 {destination.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Course search input */}
//                 <div className="relative w-full md:flex-1">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
//                     <Search className="h-4 w-4 text-gray-400" />
//                   </div>
//                   <Input
//                     value={courseInput}
//                     onChange={handleCourseInputChange}
//                     placeholder="Search for a course..."
//                     className="w-full pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
//                   />
//                   {filteredSuggestions.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
//                       <ul className="py-1 max-h-60 overflow-auto">
//                         {filteredSuggestions.map((suggestion, index) => (
//                           <li
//                             key={index}
//                             onClick={() => handleSuggestionClick(suggestion)}
//                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                           >
//                             <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             {suggestion}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Degree selector */}
//                 <div className="w-full md:w-auto">
//                   <Popover open={openDegree} onOpenChange={setOpenDegree}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={openDegree}
//                         className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
//                       >
//                         <School className="h-5 w-5 mr-1 text-gray-400" />
//                         {selectedDegree
//                           ? degreeTypes.find((d) => d.value === selectedDegree)
//                               ?.name
//                           : "Select degree"}
//                         <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search degree types..." />
//                         <CommandList>
//                           <CommandEmpty>No degree type found.</CommandEmpty>
//                           <CommandGroup>
//                             {degreeTypes.map((degree) => (
//                               <CommandItem
//                                 key={degree.value}
//                                 value={degree.value}
//                                 onSelect={(currentValue) => {
//                                   setSelectedDegree(
//                                     currentValue === selectedDegree
//                                       ? ""
//                                       : currentValue
//                                   );
//                                   setOpenDegree(false);
//                                 }}
//                               >
//                                 {degree.name}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Search button */}
//                 <div className="w-full md:w-auto">
//                   <Button
//                     onClick={handleSearch}
//                     size="sm"
//                     className="w-full md:w-auto py-2 bg-blue-600 hover:bg-blue-700"
//                   >
//                     <Search className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <Tabs defaultValue="courses" className="py-4">
//         <TabsList className="container mx-auto px-4">
//           <TabsTrigger value="courses">
//             Courses ({filteredCourses.length})
//           </TabsTrigger>
//           <TabsTrigger value="universities">
//             Universities ({filteredUniversities.length})
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="courses">
//           <div className="container mx-auto px-4 py-4">
//             {filteredCourses.length === 0 ? (
//               <p className="text-gray-500">
//                 No courses found. Try a different search term.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-4">
//                   {filteredCourses.map((course, idx) => (
//                     <Card
//                       key={idx}
//                       className="p-6 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                         <div>
//                           <h2 className="text-xl font-bold text-gray-900 mb-2">
//                             {course.name}
//                           </h2>
//                           <div className="flex items-center mb-2">
//                             <School className="h-4 w-4 mr-2 text-[#8A0206]" />
//                             <span className="text-gray-600">
//                               {course.university}
//                             </span>
//                           </div>
//                           <div className="flex items-center mb-2">
//                             <MapPin className="h-4 w-4 mr-2 text-gray-400" />
//                             <span className="text-gray-600">
//                               {course.country}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="mt-4 md:mt-0 flex flex-col items-end">
//                           <div className="text-lg font-bold text-blue-600">
//                             Duration: {course.duration}
//                           </div>
//                           <div className="mt-2">
//                             <Button className="bg-[#8A0206] hover:bg-red-800">
//                               View Details
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>

//                 {/* Related Courses Section */}
//                 {relatedCourses.length > 0 && (
//                   <div className="mt-8">
//                     <h3 className="text-lg font-semibold mb-2">
//                       You might also like:
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {relatedCourses.slice(0, 6).map((course, i) => (
//                         <Card key={i} className="p-4 hover:shadow-md">
//                           <h4 className="font-medium">{course.name}</h4>
//                           <p className="text-sm text-gray-600">
//                             {course.university} — {course.duration}
//                           </p>
//                         </Card>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </TabsContent>

//         {/* ... existing Universities tab ... */}
//         <TabsContent value="universities">
//           <div className="container mx-auto px-4 py-4">
//             {filteredUniversities.length === 0 ? (
//               <p className="text-gray-500">
//                 No universities found for this search.
//               </p>
//             ) : (
//               <>
//                 <div className="space-y-6">
//                   {currentUniversities.map((university, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                     >
//                       <div className="p-6">
//                         <div className="flex flex-col md:flex-row">
//                           {/* University Logo */}
//                           <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                             <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                               <Image
//                                 src={
//                                   university.logo ||
//                                   "/placeholder.svg?height=64&width=64"
//                                 }
//                                 alt={university.name}
//                                 width={64}
//                                 height={64}
//                                 className="object-cover"
//                               />
//                             </div>
//                           </div>
//                           {/* University Details */}
//                           <div className="flex-grow">
//                             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                               <div>
//                                 <h2 className="text-xl font-bold text-gray-900 mb-1">
//                                   {university.name}
//                                 </h2>
//                                 <div className="flex items-center mb-2">
//                                   <MapPin className="h-4 w-4 mr-1 text-gray-400" />
//                                   <span className="text-gray-600">
//                                     {university.location}
//                                   </span>
//                                 </div>
//                               </div>
//                               <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors mt-4 md:mt-0">
//                                 Find your counsellor
//                               </button>
//                             </div>
//                             {/* Related Courses Section */}
//                             <div className="mt-4">
//                               <h3 className="text-sm font-semibold text-gray-500 mb-2">
//                                 Related Courses:
//                               </h3>
//                               <div className="flex flex-wrap gap-2">
//                                 {filteredCourses
//                                   .filter(
//                                     (course) =>
//                                       course.university === university.name
//                                   )
//                                   .slice(0, 3)
//                                   .map((course, idx) => (
//                                     <Badge
//                                       key={idx}
//                                       variant="outline"
//                                       className="flex items-center gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
//                                     >
//                                       <GraduationCap className="h-3 w-3" />
//                                       {course.name}
//                                     </Badge>
//                                   ))}
//                                 {filteredCourses.filter(
//                                   (course) =>
//                                     course.university === university.name
//                                 ).length > 3 && (
//                                   <Badge
//                                     variant="outline"
//                                     className="flex items-center gap-1 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
//                                   >
//                                     <ChevronRight className="h-3 w-3" />
//                                     View more
//                                   </Badge>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <PaginationControls />
//               </>
//             )}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </main>
//   );
// }

"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Search,
  ChevronDown,
  MapPin,
  GraduationCap,
  School,
  ChevronRight,
} from "lucide-react";
import uniData from "../components/data.js";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import InquiryFormModal from "./InquiryFormModal.jsx";

// Utility to extract keywords for matching
function extractKeywords(courseName) {
  return courseName
    .split(/\W+/)
    .map((w) => w.toLowerCase())
    .filter((w) => w.length > 3);
}

// Returns courses sharing any keyword with the given courseName
function getRelatedCourses(allCourses, courseName) {
  const keys = extractKeywords(courseName);
  return allCourses.filter((c) => {
    if (c.name === courseName) return false;
    const title = c.name.toLowerCase();
    return keys.some((k) => title.includes(k));
  });
}

export default function SearchPage() {
  const searchParams = useSearchParams();

  const [courseInput, setCourseInput] = useState(
    searchParams.get("course") || ""
  );
  const [selectedDestination, setSelectedDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [selectedDegree, setSelectedDegree] = useState(
    searchParams.get("degree") || "master"
  );
  const [openDestination, setOpenDestination] = useState(false);
  const [openDegree, setOpenDegree] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // State for the inquiry form modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const degreeTypes = [
    { name: "Bachelor's", value: "bachelors" },
    { name: "Master's", value: "master" },
  ];

  const destinations = uniData.map((country) => ({
    name: country.country,
    value: country.country.toLowerCase().replace(/\s+/g, "-"),
    flag: "🌐",
  }));

  // Map selectedDestination value to the human-readable country name
  const selectedCountryName = selectedDestination
    ? destinations.find((d) => d.value === selectedDestination)?.name
    : null;

  // Gather all courses once for performance (respects selectedDegree)
  const allCourses = useMemo(() => {
    const courses = [];
    uniData.forEach((country) => {
      Object.entries(country.universities).forEach(([uniName, programs]) => {
        Object.entries(programs[selectedDegree] || {}).forEach(
          ([courseName, duration]) => {
            courses.push({
              name: courseName,
              university: uniName,
              country: country.country,
              duration,
            });
          }
        );
      });
    });
    return courses;
  }, [selectedDegree]);

  // Gather all universities once
  const getAllUniversities = () => {
    const universities = [];
    uniData.forEach((country) => {
      Object.keys(country.universities).forEach((uniName) => {
        universities.push({
          name: uniName,
          country: country.country,
          logo: country.universities[uniName].logo,
          location: country.country,
        });
      });
    });
    return universities;
  };

  // Update filters and related courses whenever inputs change
  useEffect(() => {
    // 1) Start from all courses
    let matches = allCourses;

    // 2) Filter by courseInput text
    if (courseInput) {
      matches = matches.filter((c) =>
        c.name.toLowerCase().includes(courseInput.toLowerCase())
      );
    }

    // 3) Filter by selected country
    if (selectedCountryName) {
      matches = matches.filter((c) => c.country === selectedCountryName);
    }

    setFilteredCourses(matches);

    // 4) Compute related courses (also scoped by country)
    if (matches.length > 0) {
      const related = getRelatedCourses(allCourses, matches[0].name).filter(
        (c) => !selectedCountryName || c.country === selectedCountryName
      );
      setRelatedCourses(related);
    } else {
      setRelatedCourses([]);
    }

    // 5) Build the university list
    let uniDetails;
    if (courseInput) {
      // only show unis that have matching courses
      const uniNames = matches.map((c) => c.university);
      const uniqueUni = [...new Set(uniNames)];
      uniDetails = getAllUniversities().filter((u) =>
        uniqueUni.includes(u.name)
      );
    } else {
      uniDetails = getAllUniversities();
    }

    // 6) If a country is selected, scope to that country
    if (selectedCountryName) {
      uniDetails = uniDetails.filter((u) => u.country === selectedCountryName);
    }

    setFilteredUniversities(uniDetails);
    setCurrentPage(1);
  }, [
    courseInput,
    selectedDegree,
    selectedDestination,
    allCourses,
    selectedCountryName,
  ]);

  const handleCourseInputChange = (e) => {
    const value = e.target.value;
    setCourseInput(value);

    if (value.length > 0) {
      let suggestions = allCourses.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      if (selectedCountryName) {
        suggestions = suggestions.filter(
          (c) => c.country === selectedCountryName
        );
      }
      setFilteredSuggestions([...new Set(suggestions.map((c) => c.name))]);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCourseInput(suggestion);
    setFilteredSuggestions([]);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (courseInput) params.append("course", courseInput);
    if (selectedDestination) params.append("destination", selectedDestination);
    if (selectedDegree) params.append("degree", selectedDegree);
    window.location.href = `/search?${params.toString()}`;
  };

  // Handle opening the inquiry form modal
  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUniversities = filteredUniversities.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);

  const PaginationControls = () => (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-gray-500">
        Showing {filteredUniversities.length > 0 ? indexOfFirstItem + 1 : 0} -{" "}
        {Math.min(indexOfLastItem, filteredUniversities.length)} of{" "}
        {filteredUniversities.length} universities
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={
            currentPage === totalPages || filteredUniversities.length === 0
          }
        >
          Next
        </Button>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex  items-center justify-center">
            <div className="flex-1 max-w-3xl mx-4">
              <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 space-y-2 md:space-y-0 md:space-x-2 relative">
                {/* Destination selector */}
                <div className="w-full md:w-auto">
                  <Popover
                    open={openDestination}
                    onOpenChange={setOpenDestination}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openDestination}
                        className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
                      >
                        <MapPin className="h-5 w-5 mr-1 text-gray-400" />
                        {selectedDestination
                          ? destinations.find(
                              (d) => d.value === selectedDestination
                            )?.name
                          : "Select destination"}
                        <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
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

                {/* Course search input */}
                <div className="relative w-full md:flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    value={courseInput}
                    onChange={handleCourseInputChange}
                    placeholder="Search for a course..."
                    className="w-full pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
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

                {/* Degree selector */}
                <div className="w-full md:w-auto">
                  <Popover open={openDegree} onOpenChange={setOpenDegree}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openDegree}
                        className="w-full md:w-auto flex items-center py-2 text-sm rounded-lg border-gray-200"
                      >
                        <School className="h-5 w-5 mr-1 text-gray-400" />
                        {selectedDegree
                          ? degreeTypes.find((d) => d.value === selectedDegree)
                              ?.name
                          : "Select degree"}
                        <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
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

                {/* Search button */}
                <div className="w-full md:w-auto">
                  <Button
                    onClick={handleSearch}
                    size="sm"
                    className="w-full md:w-auto py-2 bg-blue-600 hover:bg-blue-700"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Tabs defaultValue="courses" className="py-4">
        <TabsList className="container mx-auto px-4">
          <TabsTrigger value="courses">
            Courses ({filteredCourses.length})
          </TabsTrigger>
          <TabsTrigger value="universities">
            Universities ({filteredUniversities.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="container mx-auto px-4 py-4">
            {filteredCourses.length === 0 ? (
              <p className="text-gray-500">
                No courses found. Try a different search term.
              </p>
            ) : (
              <>
                <div className="space-y-4">
                  {filteredCourses.map((course, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 mb-2">
                            {course.name}
                          </h2>
                          <div className="flex items-center mb-2">
                            <School className="h-4 w-4 mr-2 text-[#8A0206]" />
                            <span className="text-gray-600">
                              {course.university}
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-gray-600">
                              {course.country}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col items-end">
                          <div className="text-lg font-bold text-blue-600">
                            Duration: {course.duration}
                          </div>
                          <div className="mt-2">
                            <Button
                              className="bg-[#8A0206] hover:bg-red-800"
                              onClick={() => handleViewDetails(course)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Related Courses Section */}
                {relatedCourses.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-2">
                      You might also like:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedCourses.slice(0, 6).map((course, i) => (
                        <Card key={i} className="p-4 hover:shadow-md">
                          <h4 className="font-medium">{course.name}</h4>
                          <p className="text-sm text-gray-600">
                            {course.university} — {course.duration}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </TabsContent>

        {/* Universities tab */}
        <TabsContent value="universities">
          <div className="container mx-auto px-4 py-4">
            {filteredUniversities.length === 0 ? (
              <p className="text-gray-500">
                No universities found for this search.
              </p>
            ) : (
              <>
                <div className="space-y-6">
                  {currentUniversities.map((university, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row">
                          {/* University Logo */}
                          <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                              <Image
                                src={
                                  university.logo ||
                                  "/placeholder.svg?height=64&width=64" ||
                                  "/placeholder.svg"
                                }
                                alt={university.name}
                                width={64}
                                height={64}
                                className="object-cover"
                              />
                            </div>
                          </div>
                          {/* University Details */}
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                              <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-1">
                                  {university.name}
                                </h2>
                                <div className="flex items-center mb-2">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                  <span className="text-gray-600">
                                    {university.location}
                                  </span>
                                </div>
                              </div>
                              <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors mt-4 md:mt-0">
                                Find your counsellor
                              </button>
                            </div>
                            {/* Related Courses Section */}
                            <div className="mt-4">
                              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                                Related Courses:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {filteredCourses
                                  .filter(
                                    (course) =>
                                      course.university === university.name
                                  )
                                  .slice(0, 3)
                                  .map((course, idx) => (
                                    <Badge
                                      key={idx}
                                      variant="outline"
                                      className="flex items-center gap-1 bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                                    >
                                      <GraduationCap className="h-3 w-3" />
                                      {course.name}
                                    </Badge>
                                  ))}
                                {filteredCourses.filter(
                                  (course) =>
                                    course.university === university.name
                                ).length > 3 && (
                                  <Badge
                                    variant="outline"
                                    className="flex items-center gap-1 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                  >
                                    <ChevronRight className="h-3 w-3" />
                                    View more
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <PaginationControls />
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Inquiry Form Modal */}
      <InquiryFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseData={selectedCourse}
        degreeType={selectedDegree}
        destinations={uniData}
      />
    </main>
  );
}
