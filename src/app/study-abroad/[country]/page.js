import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Award, GraduationCap } from "lucide-react";
import studyAbroadData from "@/app/data/study-abroad.json";
import Image from "next/image";

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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="max-w-2xl">
              <h1 className="relative mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                {countryData.heroTitle}
                <span className="absolute -bottom-3 left-0 h-2 w-48 bg-[#8A0206]"></span>
              </h1>
              <p className="mb-8 text-lg text-gray-700">
                {countryData.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#8A0206] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800"
                >
                  Free Expert Consultation
                </Link>
                <Link
                  href="#"
                  className="rounded-md border border-[#8A0206] bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-gray-50"
                >
                  View & Download Brochure
                </Link>
              </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96 lg:h-[500px]">
              <div className="absolute inset-0 rounded-2xl ">
                <Image
                  src="/images/Sample-1.png"
                  width={1000}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="relative mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {countryData.title}
            <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-[#8A0206]"></span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {countryData.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-gray-200 pb-6"
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
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
                >
                  <div className="h-48 w-full bg-gray-200">
                    {/* Course image placeholder */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-center text-xl font-semibold text-gray-900">
                      {course.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="bg-red-50 py-16">
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
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-16 items-center justify-center">
                  {/* University logo placeholder */}
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                </div>
                <h3 className="mb-4 text-center text-lg font-semibold text-gray-900">
                  {university.name}
                </h3>

                <div className="flex items-center gap-4">
                  <GraduationCap className="h-6 w-6 text-[#8A0206]" />
                  <p className="text-sm text-gray-700">
                    Popular For
                    <br />
                    <span className="font-medium">{university.popularFor}</span>
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-4">
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
      <section className="bg-[#8A0206] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Get personalized guidance from our expert counselors to help you
            choose the right program and university.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-[#8A0206] transition-colors hover:bg-gray-100"
            >
              Book Free Consultation
            </Link>
            <Link
              href="#"
              className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-red-800"
            >
              Download Country Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
