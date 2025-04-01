import Link from "next/link";
import { GlobeIcon } from "lucide-react";
import studyAbroadData from "@/app/data/study-abroad.json";
import Image from "next/image";

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="relative mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Study Abroad Destinations
            <span className="absolute -bottom-3 left-1/2 h-2 w-48 -translate-x-1/2 transform bg-red-500"></span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">
            Explore our comprehensive guide to studying abroad in top
            educational destinations around the world. Choose from a wide range
            of countries offering world-class education and life-changing
            experiences.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {studyAbroadData.countries.map((country) => (
              <Link
                key={country.id}
                href={`/study-abroad/${country.id}`}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
              >
                <div className="h-48 w-full bg-gray-200">
                  {/* Country image placeholder */}
                  <div className="flex h-full items-center justify-center bg-blue-100 ">
                    {/* <GlobeIcon className="h-12 w-12" /> */}
                    <Image
                      src={`/images/${country.name}-flag.jpg`}
                      width={500}
                      height={500}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-xl font-semibold text-gray-900 group-hover:text-[#8A0206]">
                    Study in {country.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
