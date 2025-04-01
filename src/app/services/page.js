import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8]">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-6 md:px-10">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">CSSB</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li className="font-medium">Home</li>
            <li className="text-gray-500">Services</li>
            <li className="text-gray-500">Contact</li>
            <li className="text-gray-500">About</li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="flex items-center rounded-full bg-black px-4 py-1.5 text-sm text-white">
            Apply now
            <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600">
              <ChevronRight className="h-3 w-3" />
            </div>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl mx-6 md:mx-10 mt-6">
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/services.jpg"
              alt="Student working on laptop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-10 items-center">
              <div className="mb-4 inline-flex  items-center rounded-full border-1 px-3 py-1 text-lg text-white">
                <span>• Services</span>
              </div>
              <h2 className="text-4xl font-semibold text-white md:text-7xl text-center">
                Services for
                <br />
                students
              </h2>
            </div>
          </div>
        </section>

        {/* Student Counselling Section */}
        <section className="mx-6 md:mx-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-4xl p-10">
          <div className="flex flex-col gap-40">
            <h3 className="text-6xl font-semibold">
              • Student
              <br />
              counselling
            </h3>
            <button className="mt-4 flex items-center text-sm font-medium">
              <span>What we discuss</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div>
            <p className="text-gray-600">
              At CSSB, we carefully and thoroughly assess through personalized
              consultations. Our goal is to understand your situation and
              academic history so we can provide the most suitable for you.
            </p>
            <p className="mt-4 text-gray-600">
              We are partnered with over 250 educational institutions across
              Canada, Australia, the UK, New Zealand, Germany, and Ireland. Our
              counselors will assess your academic background, career goals, and
              financial capacity to help you choose the most suitable for you.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mx-6 md:mx-10 mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div className="shadow-xl pt-6 bg-white rounded-4xl p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <span className="text-gray-500">01</span>
            </div>
            <h4 className="mt-4 font-bold">
              • Academic
              <br />
              Assessment
            </h4>
            <p className="mt-2 text-sm text-gray-500">
              Evaluate your academic credentials and eligibility
            </p>
          </div>
          <div className="shadow-xl pt-6 bg-white rounded-4xl p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <span className="text-gray-500">02</span>
            </div>
            <h4 className="mt-4 font-bold">
              • Choosing a<br />
              suitable University
            </h4>
            <p className="mt-2 text-sm text-gray-500">
              Guidance on selecting the right institutions based on your
              preferences and requirements
            </p>
          </div>
          <div className="shadow-xl pt-6 bg-white rounded-4xl p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <span className="text-gray-500">03</span>
            </div>
            <h4 className="mt-4 font-bold">
              • Scholarship
              <br />
              Guidance
            </h4>
            <p className="mt-2 text-sm text-gray-500">
              Information on funding and scholarship opportunities for your
              academic aspirations
            </p>
          </div>
          <div className="shadow-xl pt-6 bg-white rounded-4xl p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <span className="text-gray-500">04</span>
            </div>
            <h4 className="mt-4 font-bold">
              • Financial
              <br />
              Planning
            </h4>
            <p className="mt-2 text-sm text-gray-500">
              Help with budgeting and financial planning for your education
              expenses
            </p>
          </div>
        </section>

        {/* University Application Section */}
        <section className="mx-6 md:mx-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-4xl p-10">
          <div>
            <h3 className="text-2xl font-bold">
              University
              <br />
              Application
            </h3>
            <p className="mt-4 text-gray-600">
              After you have received your assessment confirmation, our
              counselors will complete and submit your application for you. Our
              counselors are trained to handle the application process
              efficiently, ensuring all requirements are met to maximize your
              chances of acceptance.
            </p>
            <button className="mt-6 flex items-center text-sm font-medium">
              <span>What we discuss</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  1
                </div>
                <span className="text-sm text-gray-600">
                  Bring the required documents
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  2
                </div>
                <span className="text-sm text-gray-600">
                  Choose a suitable university
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  3
                </div>
                <span className="text-sm text-gray-600">
                  Our counselor will process the application
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  4
                </div>
                <span className="text-sm text-gray-600">
                  Accept offer letter and pay your tuition fee
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  5
                </div>
                <span className="text-sm text-gray-600">
                  Get your enrollment confirmation
                </span>
              </li>
            </ul>
            <button className="mt-8 flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium">
              Request a service
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/services.jpg"
              alt="University application process"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Visa Application Section */}
        <section className="mx-6 md:mx-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-4xl p-10">
          <div>
            <h3 className="text-2xl font-bold">
              Visa application
              <br />
              Guidance
            </h3>
            <p className="mt-4 text-gray-600">
              After you have received your enrollment confirmation, our
              counselors will complete and submit your visa application for you.
              Our counselors are trained to handle the application process
              efficiently, ensuring all requirements are met to maximize your
              chances of acceptance.
            </p>
            <button className="mt-6 flex items-center text-sm font-medium">
              <span>What we discuss</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  1
                </div>
                <span className="text-sm text-gray-600">
                  Bring the required documents
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  2
                </div>
                <span className="text-sm text-gray-600">
                  Choose a suitable university
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  3
                </div>
                <span className="text-sm text-gray-600">
                  Our counselor will process the application
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  4
                </div>
                <span className="text-sm text-gray-600">
                  Accept offer letter and pay your tuition fee
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  5
                </div>
                <span className="text-sm text-gray-600">
                  Get your enrollment confirmation
                </span>
              </li>
            </ul>
            <button className="mt-8 flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium">
              Request a service
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/services.jpg"
              alt="Visa application process"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Accommodation Section */}
        <section className="mx-6 md:mx-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-4xl p-10">
          <div>
            <h3 className="text-2xl font-bold">
              Accommodation
              <br />
              Advice
            </h3>
            <p className="mt-4 text-gray-600">
              After you have received your enrollment confirmation, our
              counselors will complete and submit your accommodation application
              for you. Our counselors are trained to handle the application
              process efficiently, ensuring all requirements are met to maximize
              your chances of acceptance.
            </p>
            <button className="mt-6 flex items-center text-sm font-medium">
              <span>What we discuss</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  1
                </div>
                <span className="text-sm text-gray-600">
                  Bring the required documents
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  2
                </div>
                <span className="text-sm text-gray-600">
                  Choose a suitable university
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  3
                </div>
                <span className="text-sm text-gray-600">
                  Our counselor will process the application
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  4
                </div>
                <span className="text-sm text-gray-600">
                  Accept offer letter and pay your tuition fee
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  5
                </div>
                <span className="text-sm text-gray-600">
                  Get your enrollment confirmation
                </span>
              </li>
            </ul>
            <button className="mt-8 flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium">
              Request a service
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/services.jpg"
              alt="Accommodation advice"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* Pre-Departure Section */}
        <section className="mx-6 md:mx-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-4xl p-10">
          <div>
            <h3 className="text-2xl font-bold">
              Pre-Departure
              <br />
              briefing
            </h3>
            <p className="mt-4 text-gray-600">
              After you have received your enrollment confirmation, our
              counselors will provide you with a customized document prepared
              for your visa application. Our counselors are trained to handle
              the application process efficiently, ensuring all requirements are
              met to maximize your chances of acceptance.
            </p>
            <button className="mt-6 flex items-center text-sm font-medium">
              <span>What we discuss</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  1
                </div>
                <span className="text-sm text-gray-600">
                  Bring the required documents
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  2
                </div>
                <span className="text-sm text-gray-600">
                  Choose a suitable university
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  3
                </div>
                <span className="text-sm text-gray-600">
                  Our counselor will process the application
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  4
                </div>
                <span className="text-sm text-gray-600">
                  Accept offer letter and pay your tuition fee
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">
                  5
                </div>
                <span className="text-sm text-gray-600">
                  Get your enrollment confirmation
                </span>
              </li>
            </ul>
            <button className="mt-8 flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium">
              Request a service
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/services.jpg"
              alt="Pre-departure briefing"
              width={500}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-6 md:mx-10 mt-20 mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-red-600 py-16 px-10 text-center text-white">
            <h3 className="text-3xl font-bold">
              Looking for a one-stop
              <br />
              solution?
            </h3>
            <p className="mt-4">Let us show you through every step</p>
            <button className="mt-6 inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-black">
              Get started for free
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t py-10 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold">CSSB</h3>
            <div className="mt-4 flex space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                <span className="text-xs">FB</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                <span className="text-xs">IG</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                <span className="text-xs">LI</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Certified by Trusted Agents</h4>
            <div className="mt-4 flex space-x-2">
              <div className="h-10 w-10 rounded bg-gray-200"></div>
              <div className="h-10 w-10 rounded bg-gray-200"></div>
              <div className="h-10 w-10 rounded bg-gray-200"></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Head Office</h4>
            <p className="mt-2 text-sm text-gray-500">
              123 Main Street
              <br />
              Suite 456
              <br />
              City, State 12345
              <br />
              Country
            </p>
          </div>
          <div>
            <h4 className="font-bold">Contact us</h4>
            <p className="mt-2 text-sm text-gray-500">
              Email: info@cssb.com
              <br />
              Phone: +1 (123) 456-7890
              <br />
              Fax: +1 (123) 456-7891
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <div>
            <p>Copyright © 2023 CSSB Service All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Home</span>
            <span>About</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
