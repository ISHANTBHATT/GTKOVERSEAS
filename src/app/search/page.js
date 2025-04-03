// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   Filter,
//   SlidersHorizontal,
//   X,
//   ChevronDown,
//   Star,
//   Building,
//   GraduationCap,
//   BookOpen,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// // This would normally come from a database or API based on the search parameters
// const searchResults = [
//   {
//     id: 1,
//     title: "Computer Science, MSc",
//     university: "Texas A&M University",
//     logo: "/placeholder.svg?height=100&width=100",
//     location: "Texas, United States",
//     duration: "2.5 Years",
//     degree: "Master",
//     programType: "Pathway",
//     tuition: "13,715 $ / year",
//     employabilityRank: "111-120",
//     flag: "🇺🇸",
//   },
//   {
//     id: 2,
//     title: "Computer Science, MSc",
//     university: "University of California, Riverside",
//     logo: "/placeholder.svg?height=100&width=100",
//     location: "California, United States",
//     duration: "2 Years",
//     degree: "Master",
//     programType: "Full-time",
//     tuition: "37,980 $ / year",
//     employabilityRank: "91-100",
//     flag: "🇺🇸",
//   },
//   {
//     id: 3,
//     title: "Computer Science, MSc",
//     university: "University of Bristol",
//     logo: "/placeholder.svg?height=100&width=100",
//     location: "Bristol, United Kingdom",
//     duration: "1 Year",
//     degree: "Master",
//     programType: "Full-time",
//     tuition: "25,900 £ / year",
//     employabilityRank: "71-80",
//     flag: "🇬🇧",
//   },
//   {
//     id: 4,
//     title: "Computer Science, MSc",
//     university: "University of Toronto",
//     logo: "/placeholder.svg?height=100&width=100",
//     location: "Toronto, Canada",
//     duration: "2 Years",
//     degree: "Master",
//     programType: "Full-time",
//     tuition: "22,640 CAD / year",
//     employabilityRank: "51-60",
//     flag: "🇨🇦",
//   },
//   {
//     id: 5,
//     title: "Computer Science, MSc",
//     university: "University of Melbourne",
//     logo: "/placeholder.svg?height=100&width=100",
//     location: "Melbourne, Australia",
//     duration: "2 Years",
//     degree: "Master",
//     programType: "Full-time",
//     tuition: "46,000 AUD / year",
//     employabilityRank: "41-50",
//     flag: "🇦🇺",
//   },
// ];

// export default function SearchPage({ searchParams }) {
//   // Get search parameters from URL
//   const course =
//     typeof searchParams.course === "string" ? searchParams.course : "";
//   const destination =
//     typeof searchParams.destination === "string"
//       ? searchParams.destination
//       : "";
//   const degree =
//     typeof searchParams.degree === "string" ? searchParams.degree : "";

//   // Count results
//   const courseCount = searchResults.length;
//   const universityCount = new Set(searchResults.map((r) => r.university)).size;

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header with logo and search */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-center">
//             {/* <Link href="/" className="flex items-center">
//               <div className="text-2xl font-bold text-blue-600 flex items-center">
//                 <span className="text-3xl mr-1">S</span>
//                 <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
//                   STUDY
//                   <br />
//                   ABROAD
//                   <br />
//                   GLOBAL
//                 </span>
//               </div>
//             </Link> */}

//             <div className="flex-1 max-w-3xl mx-4">
//               <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2">
//                 <Input
//                   defaultValue={course}
//                   placeholder="Course name"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <div className="h-5 w-px bg-gray-300 mx-2"></div>
//                 <Input
//                   defaultValue={destination}
//                   placeholder="Country"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <div className="h-5 w-px bg-gray-300 mx-2"></div>
//                 <Input
//                   defaultValue={degree}
//                   placeholder="Degree"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <Button
//                   size="sm"
//                   className="ml-2 bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <Button variant="ghost">
//                 <SlidersHorizontal className="h-5 w-5 mr-2" />
//                 Menu
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filters bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center space-x-2 overflow-x-auto pb-2">
//             <div className="flex items-center text-blue-600">
//               <Filter className="h-4 w-4 mr-1" />
//               <span className="text-sm font-medium">All Filters (2)</span>
//             </div>

//             <Badge
//               variant="outline"
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
//             >
//               <span>{degree}</span>
//               <X className="h-3 w-3 cursor-pointer" />
//             </Badge>

//             <Badge
//               variant="outline"
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
//             >
//               <span>{destination}</span>
//               <X className="h-3 w-3 cursor-pointer" />
//             </Badge>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <Building className="h-4 w-4 mr-1 text-gray-400" />
//               <span className="text-sm">University</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
//               <span className="text-sm">Program</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <svg
//                 className="h-4 w-4 mr-1 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               <span className="text-sm">Fees</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <svg
//                 className="h-4 w-4 mr-1 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               <span className="text-sm">Bursary</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Tabs */}
//         <Tabs defaultValue="courses" className="mb-8">
//           <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500 border border-gray-200">
//             <TabsTrigger
//               value="courses"
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
//             >
//               Courses <Badge className="ml-2 bg-blue-500">{courseCount}</Badge>
//             </TabsTrigger>
//             <TabsTrigger
//               value="universities"
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
//             >
//               Universities{" "}
//               <Badge className="ml-2 bg-blue-500">{universityCount}</Badge>
//             </TabsTrigger>
//           </TabsList>

//           <div className="flex justify-between items-center mb-4">
//             <p className="text-sm text-gray-500">
//               Showing{" "}
//               <span className="font-medium text-gray-900">1-{courseCount}</span>{" "}
//               over{" "}
//               <span className="font-medium text-gray-900">{courseCount}</span>{" "}
//               results for{" "}
//               <span className="font-medium text-amber-500">
//                 &quot;{course}&quot;
//               </span>
//             </p>

//             <div className="flex items-center">
//               <span className="text-sm mr-2">Sort by:</span>
//               <Select defaultValue="relevance">
//                 <SelectTrigger className="w-[180px] h-9 text-sm">
//                   <SelectValue placeholder="Relevance" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="relevance">Relevance</SelectItem>
//                   <SelectItem value="tuition-low">
//                     Tuition: Low to High
//                   </SelectItem>
//                   <SelectItem value="tuition-high">
//                     Tuition: High to Low
//                   </SelectItem>
//                   <SelectItem value="ranking">University Ranking</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <TabsContent value="courses" className="mt-0">
//             <div className="space-y-6">
//               {searchResults.map((result) => (
//                 <div
//                   key={result.id}
//                   className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                 >
//                   <div className="p-6">
//                     <div className="flex flex-col md:flex-row">
//                       <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                         <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                           <Image
//                             src={result.logo || "/placeholder.svg"}
//                             alt={result.university}
//                             width={100}
//                             height={100}
//                             className="object-cover"
//                           />
//                         </div>
//                       </div>

//                       <div className="flex-grow">
//                         <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                           <div>
//                             <h2 className="text-xl font-bold text-gray-900 mb-1">
//                               {result.title}
//                             </h2>
//                             <div className="flex items-center mb-2">
//                               <span className="mr-1">{result.flag}</span>
//                               <span className="text-gray-600">
//                                 {result.university}, {result.location}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="mt-2 md:mt-0 text-right">
//                             <div className="text-2xl font-bold text-blue-600">
//                               {result.tuition}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               University
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.university}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Duration
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.duration}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Degree
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.degree}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Program type
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.programType}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center">
//                           <Badge
//                             variant="outline"
//                             className="flex items-center gap-1 text-amber-600 bg-amber-50 border-amber-100"
//                           >
//                             <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
//                             Graduate employability rank of{" "}
//                             {result.employabilityRank}
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="universities" className="mt-0">
//             <div className="bg-white rounded-lg p-8 text-center">
//               <GraduationCap className="h-12 w-12 mx-auto text-gray-300 mb-4" />
//               <h3 className="text-lg font-medium mb-2">University View</h3>
//               <p className="text-gray-500 mb-4">
//                 View universities offering Computer Science programs
//               </p>
//               <Button>View Universities</Button>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </main>
//   );
// }

//test
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Search,
//   Filter,
//   SlidersHorizontal,
//   X,
//   ChevronDown,
//   Star,
//   Building,
//   GraduationCap,
//   BookOpen,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import data from "../components/data.js";

// export default function SearchPage({ searchParams }) {
//   // Get search parameters from URL
//   const course = searchParams.course || "";
//   const destination = searchParams.destination || "";
//   const degree = searchParams.degree || "";

//   // Get filtered results
//   const searchResults = getFilteredResults(course, destination, degree);

//   // Count results
//   const courseCount = searchResults.length;
//   const universityCount = new Set(searchResults.map((r) => r.university)).size;

//   // Filter function
//   function getFilteredResults(course, destination, degree) {
//     if (!destination) return [];

//     const country = data.find(
//       (c) => c.cn.toLowerCase() === destination.toLowerCase().replace(/-/g, " ")
//     );

//     if (!country) return [];

//     // Filter by course if provided
//     const hasCourse =
//       !course ||
//       country.cr.some((c) => c.toLowerCase().includes(course.toLowerCase()));

//     if (!hasCourse) return [];

//     // Transform university data
//     return country.un.map((uni, index) => {
//       // Clean university string
//       const cleaned = uni.replace(/^\d+\.\s*/, "");
//       const [name, ...locationParts] = cleaned.split(/,\s*(?![^(]*\))/);
//       const location = locationParts.join(", ");

//       return {
//         id: index + 1,
//         title: `${course || "Course"}, ${degree || "Degree"}`,
//         university: name,
//         logo: "/placeholder.svg?height=100&width=100",
//         location,
//         duration: "2 Years",
//         degree: degree || "Master",
//         programType: "Full-time",
//         tuition: "$XX,XXX / year",
//         employabilityRank: "XX-XX",
//         flag: "🌐",
//       };
//     });
//   }

//   // Keep the rest of the component the same
//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header with logo and search */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-center">
//             {/* <Link href="/" className="flex items-center">
//               <div className="text-2xl font-bold text-blue-600 flex items-center">
//                 <span className="text-3xl mr-1">S</span>
//                 <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
//                   STUDY
//                   <br />
//                   ABROAD
//                   <br />
//                   GLOBAL
//                 </span>
//               </div>
//             </Link> */}

//             <div className="flex-1 max-w-3xl mx-4">
//               <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2">
//                 <Input
//                   defaultValue={course}
//                   placeholder="Course name"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <div className="h-5 w-px bg-gray-300 mx-2"></div>
//                 <Input
//                   defaultValue={destination}
//                   placeholder="Country"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <div className="h-5 w-px bg-gray-300 mx-2"></div>
//                 <Input
//                   defaultValue={degree}
//                   placeholder="Degree"
//                   className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
//                 />
//                 <Button
//                   size="sm"
//                   className="ml-2 bg-blue-600 hover:bg-blue-700"
//                 >
//                   <Search className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>

//             <div>
//               <Button variant="ghost">
//                 <SlidersHorizontal className="h-5 w-5 mr-2" />
//                 Menu
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filters bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center space-x-2 overflow-x-auto pb-2">
//             <div className="flex items-center text-blue-600">
//               <Filter className="h-4 w-4 mr-1" />
//               <span className="text-sm font-medium">All Filters (2)</span>
//             </div>

//             <Badge
//               variant="outline"
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
//             >
//               <span>{degree}</span>
//               <X className="h-3 w-3 cursor-pointer" />
//             </Badge>

//             <Badge
//               variant="outline"
//               className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
//             >
//               <span>{destination}</span>
//               <X className="h-3 w-3 cursor-pointer" />
//             </Badge>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <Building className="h-4 w-4 mr-1 text-gray-400" />
//               <span className="text-sm">University</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
//               <span className="text-sm">Program</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <svg
//                 className="h-4 w-4 mr-1 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               <span className="text-sm">Fees</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>

//             <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
//               <svg
//                 className="h-4 w-4 mr-1 text-gray-400"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
//                   fill="currentColor"
//                 />
//               </svg>
//               <span className="text-sm">Bursary</span>
//               <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Tabs */}
//         <Tabs defaultValue="courses" className="mb-8">
//           {/* Results section */}
//           <TabsContent value="courses" className="mt-0">
//             <div className="space-y-6">
//               {searchResults.map((result) => (
//                 <div
//                   key={result.id}
//                   className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
//                 >
//                   <div className="p-6">
//                     {/* University card content */}
//                     <div className="flex flex-col md:flex-row">
//                       {/* University image */}
//                       <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                         <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
//                           <Image
//                             src={result.logo}
//                             alt={result.university}
//                             width={100}
//                             height={100}
//                             className="object-cover"
//                           />
//                         </div>
//                       </div>

//                       {/* University details */}
//                       <div className="flex-grow">
//                         <div className="flex flex-col md:flex-row md:justify-between md:items-start">
//                           <div>
//                             <h2 className="text-xl font-bold text-gray-900 mb-1">
//                               {result.title}
//                             </h2>
//                             <div className="flex items-center mb-2">
//                               <span className="mr-1">{result.flag}</span>
//                               <span className="text-gray-600">
//                                 {result.university}, {result.location}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="mt-2 md:mt-0 text-right">
//                             <div className="text-2xl font-bold text-blue-600">
//                               {result.tuition}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               University
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.university}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Duration
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.duration}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Degree
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.degree}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500 mb-1">
//                               Program type
//                             </div>
//                             <div className="text-sm font-medium">
//                               {result.programType}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-4 flex items-center">
//                           <Badge
//                             variant="outline"
//                             className="flex items-center gap-1 text-amber-600 bg-amber-50 border-amber-100"
//                           >
//                             <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
//                             Graduate employability rank of{" "}
//                             {result.employabilityRank}
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </main>
//   );
// }

//v1

// "use client";

// import React, { useState, useEffect } from "react";
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
//   SlidersHorizontal,
// } from "lucide-react";
// import data from "../components/data.js";
// import Link from "next/link";

// export default function SearchPage({ searchParams }) {
//   // Initialize search parameters from URL (if any)
//   const [courseInput, setCourseInput] = useState(
//     searchParams.course ? searchParams.course : ""
//   );
//   const [selectedDestination, setSelectedDestination] = useState(
//     searchParams.destination ? searchParams.destination : ""
//   );
//   const [selectedDegree, setSelectedDegree] = useState(
//     searchParams.degree ? searchParams.degree : ""
//   );
//   const [openDestination, setOpenDestination] = useState(false);
//   const [openDegree, setOpenDegree] = useState(false);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [currentCountryCourses, setCurrentCountryCourses] = useState([]);

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

//   // Update the list of courses based on the selected destination
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

// v2
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
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
  GraduationCap,
  MapPin,
  School,
} from "lucide-react";
import data from "../components/data.js";

export default function SearchPage() {
  const searchParams = useSearchParams(); // Correct way to get search params in Next.js App Router

  // State variables
  const [courseInput, setCourseInput] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [openDestination, setOpenDestination] = useState(false);
  const [openDegree, setOpenDegree] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentCountryCourses, setCurrentCountryCourses] = useState([]);

  useEffect(() => {
    if (searchParams) {
      setCourseInput(searchParams.get("course") || "");
      setSelectedDestination(searchParams.get("destination") || "");
      setSelectedDegree(searchParams.get("degree") || "");
    }
  }, [searchParams]); // Ensure state updates when searchParams change

  // Degree types
  const degreeTypes = [
    { name: "Bachelor's", value: "bachelors" },
    { name: "Master's", value: "masters" },
    { name: "PhD", value: "phd" },
    { name: "Diploma", value: "diploma" },
    { name: "Certificate", value: "certificate" },
  ];

  const destinations = data.map((country) => ({
    name: country.cn,
    value: country.cn.toLowerCase().replace(/\s+/g, "-"),
    flag: "🌐",
  }));

  // Update courses based on selected destination
  useEffect(() => {
    if (selectedDestination) {
      const country = data.find(
        (item) =>
          item.cn.toLowerCase() === selectedDestination.replace(/-/g, " ")
      );
      setCurrentCountryCourses(country ? country.cr : []);
    } else {
      setCurrentCountryCourses([]);
    }
  }, [selectedDestination]);

  // Handle search input changes
  const handleCourseInputChange = (e) => {
    const value = e.target.value;
    setCourseInput(value);
    if (value.length > 0) {
      const filtered = currentCountryCourses.filter((suggestion) =>
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

  // Perform the search by updating the URL
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (courseInput) params.append("course", courseInput);
    if (selectedDestination) params.append("destination", selectedDestination);
    if (selectedDegree) params.append("degree", selectedDegree);

    window.location.href = `/search?${params.toString()}`;
  };

  return (
    // <main className="min-h-screen bg-gray-50">
    //   {/* Header with search bar */}
    //   <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
    //     <div className="container mx-auto px-4 py-3">
    //       <div className="flex items-center justify-center">
    //         <div className="flex-1 max-w-3xl mx-4">
    //           <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">
    //             {/* Destination Selector */}
    //             <Popover
    //               open={openDestination}
    //               onOpenChange={setOpenDestination}
    //             >
    //               <PopoverTrigger asChild>
    //                 <Button
    //                   variant="outline"
    //                   role="combobox"
    //                   aria-expanded={openDestination}
    //                   className="flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
    //                 >
    //                   <MapPin className="h-5 w-5 mr-1 text-gray-400" />
    //                   {selectedDestination
    //                     ? destinations.find(
    //                         (d) => d.value === selectedDestination
    //                       )?.name
    //                     : "Select destination"}
    //                   <ChevronDown className="h-4 w-4 ml-1 opacity-50" />
    //                 </Button>
    //               </PopoverTrigger>
    //               <PopoverContent className="w-full p-0" align="start">
    //                 <Command>
    //                   <CommandInput placeholder="Search destinations..." />
    //                   <CommandList>
    //                     <CommandEmpty>No destination found.</CommandEmpty>
    //                     <CommandGroup>
    //                       {destinations.map((destination) => (
    //                         <CommandItem
    //                           key={destination.value}
    //                           value={destination.value}
    //                           onSelect={(currentValue) => {
    //                             setSelectedDestination(
    //                               currentValue === selectedDestination
    //                                 ? ""
    //                                 : currentValue
    //                             );
    //                             setOpenDestination(false);
    //                           }}
    //                         >
    //                           <span className="mr-2">{destination.flag}</span>
    //                           {destination.name}
    //                         </CommandItem>
    //                       ))}
    //                     </CommandGroup>
    //                   </CommandList>
    //                 </Command>
    //               </PopoverContent>
    //             </Popover>

    //             {/* Course search input with suggestions */}
    //             <div className="relative flex-1">
    //               <Input
    //                 value={courseInput}
    //                 onChange={handleCourseInputChange}
    //                 placeholder="Search for a course..."
    //                 className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
    //               />
    //               {filteredSuggestions.length > 0 && (
    //                 <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
    //                   <ul className="py-1 max-h-60 overflow-auto">
    //                     {filteredSuggestions.map((suggestion, index) => (
    //                       <li
    //                         key={index}
    //                         onClick={() => handleSuggestionClick(suggestion)}
    //                         className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
    //                       >
    //                         <GraduationCap className="h-4 w-4 mr-2 text-[#8A0206]" />
    //                         {suggestion}
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               )}
    //             </div>

    //             {/* Search button */}
    //             <Button
    //               onClick={handleSearch}
    //               size="sm"
    //               className="ml-2 bg-blue-600 hover:bg-blue-700"
    //             >
    //               <Search className="h-4 w-4" />
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </main>
    <main className="min-h-screen bg-gray-50">
      {/* Header with integrated search bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="flex-1 max-w-3xl mx-4">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2 relative">
                {/* Destination selector */}
                <Popover
                  open={openDestination}
                  onOpenChange={setOpenDestination}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openDestination}
                      className="flex items-center mr-2 py-2 text-sm rounded-lg border-gray-200"
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

                {/* Course search input with suggestions */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    value={courseInput}
                    onChange={handleCourseInputChange}
                    placeholder="Search for a course..."
                    className="pl-8 pr-2 py-2 text-sm rounded-lg border-0 bg-transparent focus-visible:ring-0"
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
                <Popover open={openDegree} onOpenChange={setOpenDegree}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openDegree}
                      className="flex items-center ml-2 py-2 text-sm rounded-lg border-gray-200"
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

                {/* Search button */}
                <Button
                  onClick={handleSearch}
                  size="sm"
                  className="ml-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* <div>
              <Button variant="ghost">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Menu
              </Button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Tabs for search results */}
      <Tabs defaultValue="courses">
        <TabsList className="container mx-auto px-4">
          <TabsTrigger value="courses">
            Courses (
            {
              /* Add course count logic if available */
              0
            }
            )
          </TabsTrigger>
          <TabsTrigger value="universities">
            Universities (
            {
              /* Add university count logic if available */
              0
            }
            )
          </TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
          {/* Render your course search results here */}
        </TabsContent>
        <TabsContent value="universities">
          {/* Render your university search results here */}
        </TabsContent>
      </Tabs>
    </main>
  );
}
