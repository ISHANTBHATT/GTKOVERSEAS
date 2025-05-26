// import React from "react";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import {
//   BookOpen,
//   Award,
//   GraduationCap,
//   Globe,
//   Users,
//   Zap,
//   Briefcase,
// } from "lucide-react";
// import studyAbroadData from "@/app/data/study-abroad.json";
// import Image from "next/image";

// export async function generateStaticParams() {
//   return studyAbroadData.countries.map((country) => ({
//     country: country.id,
//   }));
// }

// export default function CountryPage({ params }) {
//   const countryData = studyAbroadData.countries.find(
//     (country) => country.id === params.country
//   );

//   if (!countryData) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-red-50 to-orange-50 pt-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-start gap-8 md:flex-row">
//             <div className="max-w-2xl">
//               <h1 className="relative mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
//                 {countryData.heroTitle}
//                 <span className="absolute -bottom-3 left-0 h-2 w-48 bg-[#8A0206]"></span>
//               </h1>
//               <p className="mb-8 text-lg text-gray-700">
//                 {countryData.heroDescription}
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="/contact"
//                   className="rounded-md bg-[#8A0206] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800"
//                 >
//                   Free Expert Consultation
//                 </Link>
//                 <Link
//                   href="#"
//                   className="rounded-md border border-[#8A0206] bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-gray-50"
//                 >
//                   View & Download Brochure
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96 lg:h-[500px]">
//               <div className="absolute inset-0 rounded-2xl ">
//                 <Image
//                   src="/images/Sample-1.png"
//                   width={1000}
//                   height={800}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Study Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
//             {countryData.title}
//             <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
//           </h2>

//           <div className="grid gap-8 md:grid-cols-2">
//             {countryData.benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 border-b border-gray-200 pb-6"
//               >
//                 <div className="flex-shrink-0 text-[#8A0206] pt-1">
//                   <BookOpen className="h-8 w-8" />
//                 </div>
//                 <div>
//                   <h3 className="mb-2 text-xl font-semibold text-gray-900">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-700">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Courses Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
//             {countryData.popularCourses.title}
//             <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
//           </h2>

//           <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
//             {countryData.popularCourses.description}
//           </p>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {countryData.popularCourses.courses
//               .slice(0, 6)
//               .map((course, index) => (
//                 <div
//                   key={index}
//                   className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
//                 >
//                   <div className="h-48 w-full bg-gray-200">
//                     <Image
//                       src={course.image}
//                       alt={course.title}
//                       width={500}
//                       height={500}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-center text-xl font-semibold text-gray-900">
//                       {course.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Universities Section */}
//       <section className="bg-red-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
//             {countryData.universities.title}
//             <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
//           </h2>

//           <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
//             {countryData.universities.description}
//           </p>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
//             {countryData.universities.list.map((university, index) => (
//               <div key={index} className="rounded-lg bg-white p-6 shadow-md">
//                 <div className="mb-4 flex h-16 items-center justify-center">
//                   {/* University logo placeholder */}
//                   <div className="h-20 w-20 rounded-full bg-gray-200 ">
//                     <Image
//                       src={university.logo}
//                       alt={university.name}
//                       width={100}
//                       height={100}
//                       className="h-full w-full object-contain p-2"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="mb-4 text-center text-lg font-semibold text-gray-900">
//                   {university.name}
//                 </h3>

//                 <div className="flex items-center gap-4">
//                   <GraduationCap className="h-6 w-6 text-[#8A0206]" />
//                   <p className="text-sm text-gray-700">
//                     Popular For
//                     <br />
//                     <span className="font-medium">{university.popularFor}</span>
//                   </p>
//                 </div>

//                 <div className="mt-3 flex items-center gap-4">
//                   <Award className="h-6 w-6 text-[#8A0206]" />
//                   <p className="text-sm text-gray-700">
//                     QS World Ranking
//                     <br />
//                     <span className="font-medium">{university.ranking}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#8A0206] py-16 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="mb-6 text-3xl font-bold md:text-4xl">
//             Ready to Begin Your Journey?
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
//             Receive personalized guidance from our expert counselors to assist
//             you in selecting the ideal program and university.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/contact"
//               className="rounded-md bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-gray-100"
//             >
//               Book Free Consultation
//             </Link>
//             <Link
//               href="#"
//               className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800"
//             >
//               Download Country Guide
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Award,
  GraduationCap,
  Globe,
  Users,
  Briefcase,
  DollarSign,
  Lightbulb,
  Building,
  CheckCircle,
  Star,
  ChevronRight,
} from "lucide-react";
import studyAbroadData from "@/app/data/study-abroad.json";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import QuickFacts from "@/app/components/QuickFacts";

export async function generateStaticParams() {
  return studyAbroadData.countries.map((country) => ({
    country: country.id,
  }));
}

export default function CountryPage({ params }) {
  const countryData = studyAbroadData.countries.find(
    (country) => country.id === params.country
  );

  if (!countryData) {
    notFound();
  }

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="max-w-2xl">
              <h1 className="relative mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                {countryData.heroTitle}
                <span className="absolute -bottom-3 left-0 h-2 w-48 bg-[#8A0206]"></span>
              </h1>
              <p className="mb-8 text-lg text-gray-700">
                {countryData.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#8A0206] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Free Expert Consultation
                </Link>
                <Link
                  href="#"
                  className="rounded-md border border-[#8A0206] bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  View & Download Brochure
                </Link>
              </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96 lg:h-[500px] shadow-xl">
              <div className="absolute inset-0 rounded-2xl">
                <Image
                  src="/images/Sample-1.png"
                  width={1000}
                  height={800}
                  className="w-full h-full object-contain"
                  alt="Study in USA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {countryData.quickFacts && <QuickFacts countryData={countryData} />}
      {/* Quick Facts Section */}
      {/* {countryData.quickFacts && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {countryData.quickFacts.title}
              <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {countryData.quickFacts.facts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-[#8A0206] p-2 text-white">
                      {index === 0 && <Globe className="h-5 w-5" />}
                      {index === 1 && <Users className="h-5 w-5" />}
                      {index === 2 && <Lightbulb className="h-5 w-5" />}
                      {index === 3 && <Briefcase className="h-5 w-5" />}
                    </div>
                    <p className="text-gray-800 font-medium">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Cost of Study Section */}
      {countryData.costofStudy && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {countryData.costofStudy.title}
              <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
            </h2>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#8A0206] text-white">
                      <th className="px-6 py-4 text-left">Expense Type</th>
                      <th className="px-6 py-4 text-right">
                        Annual Cost (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {Object.entries(countryData.costofStudy.table).map(
                      ([key, value], index) => {
                        if (key === "Types of Expenses") return null;
                        return (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-red-50"
                            }
                          >
                            <td className="px-6 py-4 text-left font-medium text-gray-800">
                              {key}
                            </td>
                            <td className="px-6 py-4 text-right">
                              {key === "Total Expenses" ? (
                                <span className="font-bold text-[#8A0206]">
                                  ${value}
                                </span>
                              ) : (
                                <span>${value}</span>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/financial-aid"
                className="inline-flex items-center rounded-md bg-[#8A0206] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800 shadow-md"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Explore Financial Aid Options
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Careers Section */}
      {countryData.Careers && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {countryData.Careers.title}
              <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
            </h2>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-3">
                {countryData.Careers.points.map((point, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-xl border border-red-100 bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-red-50 opacity-50"></div>
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8A0206] text-white">
                        {index === 0 && <Building className="h-6 w-6" />}
                        {index === 1 && <Briefcase className="h-6 w-6" />}
                        {index === 2 && <CheckCircle className="h-6 w-6" />}
                      </div>
                      <p className="text-gray-800">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-10 text-center">
                <Link
                  href="/career-resources"
                  className="inline-flex items-center rounded-md border border-[#8A0206] bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-red-50 shadow-md"
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore Career Resources
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      )}

      {/* Why Study Section */}
      <section className="py-16 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {countryData.title}
            <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {countryData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-gray-200 pb-6 hover:bg-white hover:shadow-md p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 text-[#8A0206] pt-1">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {countryData.popularCourses.title}
            <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
            {countryData.popularCourses.description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countryData.popularCourses.courses
              .slice(0, 6)
              .map((course, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-center text-xl font-semibold text-gray-900 group-hover:text-[#8A0206] transition-colors">
                      {course.title}
                    </h3>
                    <div className="mt-4 flex justify-center">
                      <Link
                        href={`/courses/${course.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-medium text-[#8A0206] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {countryData.universities.title}
            <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
            {countryData.universities.description}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {countryData.universities.list.map((university, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4 flex h-20 items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gray-50 p-2 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={university.logo || "/placeholder.svg"}
                      alt={university.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-lg font-semibold text-gray-900 group-hover:text-[#8A0206] transition-colors">
                  {university.name}
                </h3>

                <div className="flex items-center gap-4 group-hover:bg-red-50 p-2 rounded-lg transition-colors">
                  <GraduationCap className="h-6 w-6 text-[#8A0206]" />
                  <p className="text-sm text-gray-700">
                    Popular For
                    <br />
                    <span className="font-medium">{university.popularFor}</span>
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-4 group-hover:bg-red-50 p-2 rounded-lg transition-colors">
                  <Award className="h-6 w-6 text-[#8A0206]" />
                  <p className="text-sm text-gray-700">
                    QS World Ranking
                    <br />
                    <span className="font-medium">{university.ranking}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#8A0206] to-red-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Receive personalized guidance from our expert counselors to assist
            you in selecting the ideal program and university.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-all hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Free Consultation
            </Link>
            <Link
              href="#"
              className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-all hover:bg-red-800/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download Country Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
