// import React from "react";
// import Hero from "./Hero";
// import WhyDifferent from "./WhyDifferent";
// import Inquiry from "./Inquiry";
// import OnlineLearning from "./OnlineLearning";
// import WhyChoose from "./Whychoose";
// import Categories from "./Categories";

// function Home4() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* <Navbar /> */}
//       <Hero />
//       <WhyDifferent />
//       <div className="flex flex-col md:flex-row gap-8 px-4 md:px-20 py-12">
//         <Inquiry />
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-bold mb-6">
//             What our <span className="text-orange-500">Students</span> Say?
//           </h2>
//           {/* Add testimonials component here */}
//         </div>
//       </div>
//       <OnlineLearning />
//       <WhyChoose />
//       <Categories />
//     </div>
//   );
// }

// export default Home4;

//working
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Header/Navigation */}
//       <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/logo.png"
//             alt="StudyHub Logo"
//             width={40}
//             height={40}
//             className="h-10 w-10"
//           />
//           <span className="text-blue-600 font-bold text-xl">StudyHub</span>
//         </div>

//         <nav className="hidden md:flex items-center gap-8">
//           <Link href="#" className="font-medium">
//             Home
//           </Link>
//           <Link href="#" className="font-medium">
//             Course
//           </Link>
//           <Link href="#" className="font-medium">
//             Contact Us
//           </Link>
//           <Link href="#" className="font-medium">
//             Blog
//           </Link>
//         </nav>

//         <div className="flex items-center gap-3">
//           <button className="p-2 bg-gray-100 rounded-md">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-gray-500"
//             >
//               <circle cx="11" cy="11" r="8"></circle>
//               <path d="m21 21-4.3-4.3"></path>
//             </svg>
//           </button>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full">
//             Register
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-amber-50 py-16 px-6 md:px-12 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//           <div className="z-10">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               The Best Platform To Your Special Courses
//             </h1>
//             <p className="text-gray-600 mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md">
//                 Get Started
//               </button>
//               <button className="border-2 border-blue-900 text-blue-900 font-medium py-3 px-6 rounded-md">
//                 Learn more
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <Image
//               src="/images/2.png"
//               alt="Student with laptop"
//               width={600}
//               height={400}
//               className="z-10 relative"
//             />

//             {/* Floating elements */}
//             <div className="absolute top-10 right-20 bg-blue-500 text-white p-3 rounded-lg z-20 shadow-lg">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm">Around 1,234 Courses</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
//                 </svg>
//               </div>
//             </div>

//             <div className="absolute bottom-20 left-10 bg-teal-500 text-white p-3 rounded-lg z-20 shadow-lg">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm">Build your bright career</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M12 20h9"></path>
//                   <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
//                 </svg>
//               </div>
//             </div>

//             <div className="absolute -bottom-10 right-10 bg-orange-500 text-white p-3 rounded-full z-20 shadow-lg">
//               <div className="flex items-center gap-2">
//                 <span className="text-xs">
//                   Meet our 2,000+ students around the world
//                 </span>
//               </div>
//             </div>

//             {/* Decorative circles */}
//             <div className="absolute top-20 right-0 w-20 h-20 bg-cyan-500 rounded-full opacity-70"></div>
//             <div className="absolute bottom-10 right-40 w-12 h-12 bg-purple-500 rounded-full opacity-70"></div>
//             <div className="absolute top-40 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-70"></div>
//             <div className="absolute bottom-20 left-40 w-10 h-10 bg-yellow-400 rounded-full opacity-70"></div>
//           </div>
//         </div>

//         {/* Background shapes */}
//         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-100 rounded-tr-full"></div>
//         <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-amber-100 rounded-bl-full"></div>
//       </section>

//       {/* Categories Section */}
//       {/* <section className="py-16 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
//             <div className="md:w-1/3">
//               <Image
//                 src="/images/books.png"
//                 alt="Stack of books"
//                 width={150}
//                 height={200}
//                 className="mb-4"
//               />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl font-bold mb-4">
//                 Explore Our Categories
//               </h2>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//             <CategoryCard
//               title="Business"
//               color="teal"
//               icon="/images/business.png"
//             />
//             <CategoryCard
//               title="English"
//               color="blue"
//               icon="/images/english.png"
//             />
//             <CategoryCard
//               title="Finance"
//               color="red"
//               icon="/images/finance.png"
//             />
//             <CategoryCard
//               title="Content"
//               color="purple"
//               icon="/images/content.png"
//             />
//             <CategoryCard
//               title="Development"
//               color="pink"
//               icon="/images/development.png"
//             />
//           </div>
//         </div>
//       </section> */}
//       <section className="container mx-auto py-12 px-4 md:px-6 flex">
//         <div className="flex flex-col gap-8 items-start">
//           <div className="md:w-2/3">
//             <div className="flex items-start gap-4">
//               <div className="h-full w-full relative">
//                 <Image
//                   src="/images/books.png"
//                   alt="Books icon"
//                   width={80}
//                   height={80}
//                   className="w-full h-full "
//                 />
//               </div>
//               <div className="">
//                 <h3 className="text-2xl font-bold mb-4">
//                   Explore Our Categories
//                 </h3>
//                 <p className="text-gray-700">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris. Lorem ipsum dolor sit amet, consectetur adipiscing
//                   elit, sed do eiusmod tempor incididunt ut labore et dolore
//                   magna aliqua. Ut enim ad minim veniam, quis nostrud
//                   exercitation ullamco laboris.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-full grid grid-cols-2 md:grid-cols-5 gap-4">
//             {categories.map((category, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div
//                   className={`w-24 h-24 rounded-full border-2 ${category.borderColor} flex items-center justify-center`}
//                 >
//                   <Image
//                     src={category.image}
//                     alt={category.name}
//                     width={50}
//                     height={50}
//                   />
//                 </div>
//                 <span className="mt-2 text-center font-medium">
//                   {category.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Online Learning Section */}
//       <section className="py-16 px-6 md:px-12 bg-amber-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="z-10">
//               <h2 className="text-3xl font-bold mb-4">
//                 From Our Online Learning
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
//               </p>

//               <div className="space-y-6">
//                 <LearningOption
//                   title="Online Degree"
//                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
//                 />
//                 <LearningOption
//                   title="Short Courses"
//                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
//                 />
//                 <LearningOption
//                   title="Training From Experts"
//                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
//                 />
//                 <LearningOption
//                   title="1.5K+ Video Courses"
//                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
//                 />
//               </div>
//             </div>

//             <div className="relative">
//               <Image
//                 src="/images/2.png"
//                 alt="Online learning"
//                 width={600}
//                 height={500}
//                 className="z-10 relative"
//               />

//               {/* Decorative elements */}
//               <div className="absolute top-10 right-10 text-purple-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                 </svg>
//               </div>
//               <div className="absolute top-40 left-0 text-pink-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//                 </svg>
//               </div>
//               <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-500 rounded-full opacity-70"></div>
//               <div className="absolute top-60 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-70"></div>
//               <div className="absolute bottom-40 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
//             </div>
//           </div>
//         </div>

//         {/* Background shapes */}
//         <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-br-full"></div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-amber-100 rounded-tl-full"></div>
//       </section>

//       {/* Why Different Section */}
//       <section className="py-16 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-2">
//               Why we are <span className="text-amber-500">different?</span>
//             </h2>
//             <h3 className="text-xl font-medium mb-4">
//               What makes us different makes us better.
//             </h3>

//             <p className="text-gray-600 mb-12">
//               We are distinctive in the quality of our services and stand out of
//               the crowd. Unlike other consultancy firms in Bangladesh, we really
//               care for our students. We always strive to give the best possible
//               solutions that a student may require. Our experienced consultants
//               and in-house lawyer are always at hand to prepare your visa
//               application documents in a perfect way.
//             </p>

//             <div className="grid grid-cols-3 gap-6">
//               <StatCircle percentage={70} label="Satisfied Students" />
//               <StatCircle percentage={80} label="Success Ratio" />
//               <StatCircle percentage={100} label="Free Advice" />
//             </div>
//           </div>

//           <div className="relative">
//             <Image
//               src="/images/2.png"
//               alt="Professional consultant"
//               width={600}
//               height={500}
//               className="z-10 relative"
//             />

//             {/* Decorative circles */}
//             <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500 rounded-full"></div>
//             <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-500 rounded-full"></div>
//             <div className="absolute top-40 left-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Section */}
//       <section className="py-16 px-6 md:px-12 bg-amber-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-between items-start mb-12">
//             <div className="max-w-xl">
//               <h2 className="text-3xl font-bold mb-2">Why Choose</h2>
//               <div className="border-l-4 border-gray-800 pl-4 mt-4">
//                 <p className="text-gray-600">
//                   In confusion, many can't decide where to get proper knowing
//                   for his or her desired aim and sometimes it can be an unwise
//                   decision.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mb-12">
//             <FeatureCard
//               title="Experience"
//               description="all that matters! Having more than 10+ years of experience in educational consultancy, our Education Consultants..."
//               icon="user"
//             />
//             <FeatureCard
//               title="Transparency"
//               description="Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the..."
//               icon="check-circle"
//             />
//             <FeatureCard
//               title="Pastoral Care"
//               description="We look at the consultancy differently! We are highly unique to take care of your problems and remain focused until we can..."
//               icon="users"
//             />
//             <FeatureCard
//               title="Authorized Agent"
//               description="We are authorized by the universities helps us to deliver supportive services to our students. We provide end to end..."
//               icon="shield"
//             />
//             <FeatureCard
//               title="Intelligency and Skill"
//               description="Our experienced team ensure Our success rate with visa applications and university admissions is one of the highest..."
//               icon="brain"
//             />
//             <FeatureCard
//               title="Long Term Relationship"
//               description="We believe in the long term relationship helps us to deliver supportive services to our students. We provide end to end..."
//               icon="link"
//             />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <StatCard icon="file-text" value="100" label="Completed Courses" />
//             <StatCard
//               icon="user-check"
//               value="★"
//               label="Student Satisfaction"
//             />
//             <StatCard icon="building" value="100" label="Universities" />
//             <StatCard icon="check-circle" value="✓" label="Success Story" />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function CategoryCard({ title, color, icon }) {
//   const borderColors = {
//     teal: "border-teal-500",
//     blue: "border-blue-500",
//     red: "border-red-500",
//     purple: "border-purple-500",
//     pink: "border-pink-500",
//   };

//   return (
//     <div
//       className={`flex flex-col items-center p-4 border-2 ${borderColors[color]} rounded-full bg-white hover:shadow-lg transition-shadow`}
//     >
//       <div className="w-24 h-24 flex items-center justify-center mb-2">
//         <Image
//           src={icon || "/placeholder.svg"}
//           alt={title}
//           width={60}
//           height={60}
//           className="rounded-full"
//         />
//       </div>
//       <h3 className="font-medium text-center">{title}</h3>
//     </div>
//   );
// }

// function LearningOption({ title, description }) {
//   return (
//     <div>
//       <h3 className="font-bold text-lg mb-1">{title}</h3>
//       <p className="text-gray-600 text-sm">{description}</p>
//     </div>
//   );
// }

// function StatCircle({ percentage, label }) {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-24 h-24 mb-2">
//         <svg className="w-24 h-24" viewBox="0 0 100 100">
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             fill="none"
//             stroke="#f3f4f6"
//             strokeWidth="10"
//           />
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             fill="none"
//             stroke="#f59e0b"
//             strokeWidth="10"
//             strokeDasharray={`${percentage * 2.51} 251`}
//             strokeLinecap="round"
//             transform="rotate(-90 50 50)"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-2xl font-bold">{percentage}%</span>
//         </div>
//       </div>
//       <span className="text-center font-medium">{label}</span>
//     </div>
//   );
// }

// function FeatureCard({ title, description, icon }) {
//   const icons = {
//     user: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//         <circle cx="12" cy="7" r="4"></circle>
//       </svg>
//     ),
//     "check-circle": (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//         <polyline points="22 4 12 14.01 9 11.01"></polyline>
//       </svg>
//     ),
//     users: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//         <circle cx="9" cy="7" r="4"></circle>
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//         <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//       </svg>
//     ),
//     shield: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//       </svg>
//     ),
//     brain: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10"></circle>
//         <path d="M12 16v-4"></path>
//         <path d="M12 8h.01"></path>
//       </svg>
//     ),
//     link: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//         <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//       </svg>
//     ),
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//       <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
//         {icons[icon]}
//       </div>
//       <h3 className="font-bold text-lg mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <div className="flex items-center text-gray-400">
//         <span>→</span>
//       </div>
//     </div>
//   );
// }

// function StatCard({ icon, value, label }) {
//   const icons = {
//     "file-text": (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//         <polyline points="14 2 14 8 20 8"></polyline>
//         <line x1="16" y1="13" x2="8" y2="13"></line>
//         <line x1="16" y1="17" x2="8" y2="17"></line>
//         <polyline points="10 9 9 9 8 9"></polyline>
//       </svg>
//     ),
//     "user-check": (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//         <circle cx="8.5" cy="7" r="4"></circle>
//         <polyline points="17 11 19 13 23 9"></polyline>
//       </svg>
//     ),
//     building: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
//         <line x1="12" y1="6" x2="12.01" y2="6"></line>
//         <line x1="12" y1="10" x2="12.01" y2="10"></line>
//         <line x1="12" y1="14" x2="12.01" y2="14"></line>
//         <line x1="12" y1="18" x2="12.01" y2="18"></line>
//       </svg>
//     ),
//     "check-circle": (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//         <polyline points="22 4 12 14.01 9 11.01"></polyline>
//       </svg>
//     ),
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="w-12 h-12 mb-2">{icons[icon]}</div>
//       <div className="text-2xl font-bold">{value} +</div>
//       <div className="text-sm text-center">{label}</div>
//     </div>
//   );
// }

// const categories = [
//   {
//     name: "Business",
//     borderColor: "border-blue-400",
//     image: "/images/business.png",
//   },
//   {
//     name: "English",
//     borderColor: "border-green-400",
//     image: "/images/english.png",
//   },
//   {
//     name: "Finance",
//     borderColor: "border-red-400",
//     image: "/images/finance.png",
//   },
//   {
//     name: "Content",
//     borderColor: "border-purple-400",
//     image: "/images/content.png",
//   },
//   {
//     name: "Development",
//     borderColor: "border-indigo-400",
//     image: "/images/development.png",
//   },
// ];

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Countries } from "./Countries";
import Scroll from "./Scroll";
import StarRating from "./StarRating";
import Banner from "./Banner";
import { ArrowRight } from "lucide-react";
import WorkProcess from "./WorkProcess";
// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      {/* <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm fixed w-full z-50"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="StudyHub Logo"
            width={1000}
            height={1000}
            className="h-10 w-full"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="font-medium">
            About Us
          </Link>
          <Link href="/courses" className="font-medium">
            Explore Destinations
          </Link>
          <Link href="#" className="font-medium">
            Find a Course
          </Link>
          <Link href="#" className="font-medium">
            Student Services
          </Link>
          <Link href="#" className="font-medium">
            Scholarships
          </Link>
          <Link href="#" className="font-medium">
            Events
          </Link>
          <Link href="#" className="font-medium">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 bg-gray-100 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
          <button className="bg-[#8A0206] hover:bg-[#8A0206]/80 text-white font-medium py-2 px-6 rounded-full">
            Register
          </button>
        </div>
      </motion.header> */}

      {/* Hero Section */}
      <section className="relative bg-[#8A0206] min-h-screen flex items-center py-16 px-6 md:px-12 overflow-hidden rounded-[50px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="z-10"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              The Best Platform To Your Special Courses
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-200 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-200 text-[#8A0206] font-medium py-3 px-6 rounded-md">
                Get Started
              </button>
              <button className="border-2 border-white text-white font-medium py-3 px-6 rounded-md">
                Learn more
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            {/* <Image
              src="/images/2.png"
              alt="Student with laptop"
              width={600}
              height={400}
              className="z-10 relative"
            />
            <motion.div
              variants={float}
              className="absolute top-10 right-20 bg-blue-500 text-white p-3 rounded-lg z-20 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">Around 1,234 Courses</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
            </motion.div>
            <motion.div
              variants={float}
              className="absolute bottom-20 left-10 bg-teal-500 text-white p-3 rounded-lg z-20 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">Build your bright career</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
            </motion.div>

            <motion.div
              variants={float}
              className="absolute -bottom-10 right-10 bg-orange-500 text-white p-3 rounded-full z-20 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs">
                  Meet our 2,000+ students around the world
                </span>
              </div>
            </motion.div>

            <div className="absolute top-20 right-0 w-20 h-20 bg-cyan-500 rounded-full opacity-70"></div>
            <div className="absolute bottom-10 right-40 w-12 h-12 bg-purple-500 rounded-full opacity-70"></div>
            <div className="absolute top-40 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-70"></div>
            <div className="absolute bottom-20 left-40 w-10 h-10 bg-yellow-400 rounded-full opacity-70"></div> */}
            <Banner />
          </motion.div>
        </div>
      </section>

      <Countries />
      {/* Categories Section */}
      <section className="container mx-auto py-12 px-4 md:px-20 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8 items-start w-full"
        >
          <div className="xl:w-2/3">
            <div className="flex items-start gap-4">
              <div className="h-full w-full relative">
                <Image
                  src="/images/books.png"
                  alt="Books icon"
                  width={80}
                  height={80}
                  className="w-full h-full "
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-bold mb-4">
                  Explore Our Categories
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 rounded-full border-2 ${category.borderColor} flex items-center justify-center`}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={50}
                    height={50}
                  />
                </div>
                <span className="mt-2 text-center font-medium">
                  {category.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Online Learning Section */}
      <section className="py-16 px-6 md:px-12 bg-[#8A0206] relative overflow-hidden min-h-screen flex items-center rounded-[50px] mx-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                From Our Online Learning
              </h2>
              <p className="text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>

              <div className="space-y-6">
                <LearningOption
                  title="Online Degree"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                />
                <LearningOption
                  title="Short Courses"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                />
                <LearningOption
                  title="Training From Experts"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                />
                <LearningOption
                  title="1.5K+ Video Courses"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
                />
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/2.png"
                alt="Online learning"
                width={600}
                height={500}
                className="z-10 relative"
              />

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="absolute top-40 left-0 text-pink-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="absolute bottom-20 left-20 w-16 h-16 bg-cyan-500 rounded-full opacity-70"></div>
              <div className="absolute top-60 right-20 w-12 h-12 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute bottom-40 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </motion.div>
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#780105] rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#780105] rounded-tl-full"></div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 px-6 md:px-12 bg-white min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Why we are <span className="text-[#8A0206]">different?</span>
            </h2>
            <h3 className="text-xl font-medium mb-4">
              What makes us different makes us better.
            </h3>

            <p className="text-gray-600 mb-12">
              We are distinctive in the quality of our services and stand out of
              the crowd. Unlike other consultancy firms in Bangladesh, we really
              care for our students. We always strive to give the best possible
              solutions that a student may require. Our experienced consultants
              and in-house lawyer are always at hand to prepare your visa
              application documents in a perfect way.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <StatCircle percentage={70} label="Satisfied Students" />
              <StatCircle percentage={80} label="Success Ratio" />
              <StatCircle percentage={100} label="Free Advice" />
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/2.png"
              alt="Professional consultant"
              width={600}
              height={500}
              className="z-10 relative"
            />

            {/* Decorative circles */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-500 rounded-full"></div>
            <div className="absolute top-40 left-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-6 md:px-12 bg-[#8A0206] min-h-screen flex items-center relative overflow-hidden rounded-[50px] mx-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#780105] rounded-full translate-x-1/2  opacity-70"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="flex justify-between items-start mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-2 text-white">Why Choose</h2>
              <div className="border-l-4 border-gray-400 pl-4 mt-4">
                <p className="text-gray-300">
                  In confusion, many can&apos;t decide where to get proper
                  knowing for his or her desired aim and sometimes it can be an
                  unwise decision.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              title="Experience"
              description="all that matters! Having more than 10+ years of experience in educational consultancy, our Education Consultants..."
              icon="user"
            />
            <FeatureCard
              title="Transparency"
              description="Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We do not chase the..."
              icon="check-circle"
            />
            <FeatureCard
              title="Pastoral Care"
              description="We look at the consultancy differently! We are highly unique to take care of your problems and remain focused until we can..."
              icon="users"
            />
            <FeatureCard
              title="Authorized Agent"
              description="We are authorized by the universities helps us to deliver supportive services to our students. We provide end to end..."
              icon="shield"
            />
            <FeatureCard
              title="Intelligency and Skill"
              description="Our experienced team ensure Our success rate with visa applications and university admissions is one of the highest..."
              icon="brain"
            />
            <FeatureCard
              title="Long Term Relationship"
              description="We believe in the long term relationship helps us to deliver supportive services to our students. We provide end to end..."
              icon="link"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon="file-text" value="100" label="Completed Courses" />
            <StatCard
              icon="user-check"
              value="100"
              label="Student Satisfaction"
            />
            <StatCard icon="building" value="100" label="Universities" />
            <StatCard icon="check-circle" value="100" label="Success Story" />
          </div>
          {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <FeatureCard {...props} />
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </section>

      <WorkProcess />
      <Scroll />
      {/* Inquiry and Testimonials Section */}
      <section className="container mx-auto px-6 md:px-36 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">General Inquiry</h2>
            <p className="text-gray-600 mb-6">
              If you wish to make a query, please complete the form below and
              submit.
            </p>
            <div className="bg-[#8A0206] hover:bg-[#780105] text-white py-3 px-6 rounded-md text-center mb-6">
              Free Consultation
            </div>
            <form className="space-y-4">
              <Input placeholder="First Name" className="rounded-full" />
              <Input placeholder="Last Name" className="rounded-full" />
              <Input placeholder="Email" className="rounded-full" />
              <Textarea
                placeholder="Enter Your Message Here"
                className="rounded-3xl min-h-[100px]"
              />
              <Button className="w-full bg-[#8A0206] hover:bg-[#780105] text-white rounded-full py-6">
                Send Us
              </Button>
            </form>
          </div>
          <div className="bg-[#FFF5F2] rounded-lg p-6 text-black">
            <h2 className="text-2xl font-bold mb-4">
              What our <span className="text-[#8A0206]">Students</span> Say?
            </h2>
            <p className="text-gray-700 mb-6">
              We&apos;ve chosen a selection of student testimonials to give you
              a better insight about us, our honesty, transparency and our
              devotion towards our students.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src="/images/profile1.jpg"
                        alt="Student"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Hamayun Zaman</p>
                      <p className="text-xs text-gray-500">
                        Business Department
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                  <StarRating rating={4.5} />
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="text-center">
              <Button className="bg-[#8A0206] hover:bg-[#780105] text-white rounded-full px-6">
                View more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LearningOption({ title, description }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-1 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

// Enhanced FeatureCard with hover animations
function FeatureCard({ title, description, icon }) {
  const icons = {
    user: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    "check-circle": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    brain: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    ),
    link: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
  };
  return (
    // <motion.div
    //   whileHover={{ y: -5, scale: 1.02 }}
    //   className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow z-10"
    // >
    //   <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
    //     {icons[icon]}
    //   </div>
    //   <h3 className="font-bold text-lg mb-2">{title}</h3>
    //   <p className="text-gray-600 text-sm mb-4">{description}</p>
    //   <div className="flex items-center text-gray-400">
    //     <span>→</span>
    //   </div>
    // </motion.div>
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-lg p-8 shadow-sm z-10"
    >
      <div className="bg-[#FFF5F0] rounded-full w-16 h-16 flex items-center justify-center mb-6 ">
        {icons[icon]}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href="#"
        className="text-[#B33A2F] font-medium flex items-center hover:underline"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
}

// Animated StatCircle
function StatCircle({ percentage, label }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24 mb-2">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#8A0206"
            strokeWidth="10"
            strokeDasharray={`${percentage * 2.51} 251`}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="text-center font-medium">{label}</span>
    </motion.div>
  );
}

function StatCard({ icon, value, label }) {
  const icons = {
    "file-text": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    "user-check": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <polyline points="17 11 19 13 23 9"></polyline>
      </svg>
    ),
    building: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="6" x2="12.01" y2="6"></line>
        <line x1="12" y1="10" x2="12.01" y2="10"></line>
        <line x1="12" y1="14" x2="12.01" y2="14"></line>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    "check-circle": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-12 h-12 mb-2">{icons[icon]}</div>
      <div className="text-2xl font-bold">{value} +</div>
      <div className="text-sm text-center">{label}</div>
    </div>
  );
}

const categories = [
  {
    name: "Business",
    borderColor: "border-blue-400",
    image: "/images/business.png",
  },
  {
    name: "English",
    borderColor: "border-green-400",
    image: "/images/english.png",
  },
  {
    name: "Finance",
    borderColor: "border-red-400",
    image: "/images/finance.png",
  },
  {
    name: "Content",
    borderColor: "border-purple-400",
    image: "/images/content.png",
  },
  {
    name: "Development",
    borderColor: "border-indigo-400",
    image: "/images/development.png",
  },
];
