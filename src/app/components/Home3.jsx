"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "./Starrating";

export default function Home3() {
  return (
    <main className="min-h-screen bg-[#fffdf7]">
      {/* Header/Navigation */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image
              src="/images/logo.png"
              alt="StudyHub Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-blue-900">StudyHub</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium">
            Home
          </a>
          <a href="#" className="font-medium">
            Course
          </a>
          <a href="#" className="font-medium">
            Contact Us
          </a>
          <a href="#" className="font-medium">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-gray-100 rounded-full">
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
          <Button className="bg-[#f8d254] hover:bg-[#f0c83e] text-black font-medium rounded-full">
            Register
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fff8e1] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Best Platform To Your Special Courses
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800 rounded-md px-6">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900 rounded-md px-6"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/2.png"
                alt="Student with laptop"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="absolute top-10 right-10 bg-[#00a2e0] text-white p-3 rounded-lg z-20">
              <p className="text-sm">Build your bright career</p>
            </div>
            <div className="absolute top-20 left-0 bg-[#f97316] text-white p-2 rounded-full z-20">
              <p className="text-xs px-2">100+ Qualified Teachers</p>
            </div>
            <div className="absolute bottom-20 right-0 bg-[#0f172a] text-white p-2 rounded-lg z-20">
              <p className="text-xs">Around 1.5M Courses</p>
            </div>
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#f472b6] rounded-full opacity-70"></div>
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-[#22d3ee] rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#facc15] rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#fff8e1] rounded-full translate-x-1/2 translate-y-1/2 opacity-70"></div>
        <div className="flex items-start gap-8 mb-12 relative z-10">
          <div className="hidden md:block w-1/5">
            <Image
              src="/images/books.png"
              alt="Stack of books"
              width={150}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-4/5">
            <h2 className="text-3xl font-bold mb-4">Explore Our Categories</h2>
            <p className="text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 relative z-10">
          {[
            { name: "Business", color: "#10b981", icon: "📊" },
            { name: "English", color: "#3b82f6", icon: "🔤" },
            { name: "Finance", color: "#f97316", icon: "💰" },
            { name: "Content", color: "#4f46e5", icon: "📝" },
            { name: "Development", color: "#8b5cf6", icon: "💻" },
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 flex items-center justify-center mb-4`}
                style={{ borderColor: category.color }}
              >
                <div className="text-4xl">{category.icon}</div>
              </div>
              <h3 className="font-bold text-center">{category.name}</h3>
              <p className="text-xs text-gray-500 text-center mt-1">
                Lorem ipsum dolor
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">From Our Online</h2>
            <h2 className="text-3xl font-bold mb-6">Learning</h2>
            <p className="text-gray-600 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>

            {[
              "Online Degree",
              "Short Courses",
              "Training From Experts",
              "1.5K+ Video Courses",
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold mb-2">{item}</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-16 h-16 text-[#d8b4fe] opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="absolute top-1/4 left-0 w-12 h-12 text-[#a5b4fc] opacity-50 transform -translate-x-1/2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 4 19.6 20 7.4 4 7.4 20 19.6"></polygon>
              </svg>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#22d3ee] rounded-full w-32 h-32 absolute top-0 right-0 z-0"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/s1.jpg"
                  alt="Student studying"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="bg-[#f472b6] rounded-full w-24 h-24 absolute bottom-1/3 left-1/4 z-0"></div>
              <div className="relative z-10 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/s2.jpg"
                  alt="Student with laptop"
                  width={400}
                  height={250}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="bg-[#facc15] rounded-full w-20 h-20 absolute bottom-0 right-1/4 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold">Why Choose</h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-600">
              In confusion, many can't decide where to get proper knowing for
              his or her desired aim and sometimes it can be an unwise decision.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Experience",
              icon: "👨‍🏫",
              description:
                "20 Year involved having more than 15+ years of experience in education consulting. M.P Education Consultancy.",
            },
            {
              title: "Transparency",
              icon: "👁️",
              description:
                "Straight Talk is Good Business! Our services are our commitments to you and we deliver what we commit. We don't cross the line.",
            },
            {
              title: "Pastoral Care",
              icon: "🤝",
              description:
                "We look at the consultancy differently. We are highly critical to take care of your problems and never hesitate until we solve.",
            },
            {
              title: "Authorized Agent",
              icon: "✅",
              description:
                "Our excellent network with the Universities helps us to deliver expensive services to our students. We are authorized.",
            },
            {
              title: "Intelligency and Skill",
              icon: "🧠",
              description:
                "Practical wisdom trusted advice! Our success rate with visa applications and university admissions is unmatched.",
            },
            {
              title: "Long Term Relationship",
              icon: "🔄",
              description:
                "Our excellent network with the Universities helps us to deliver expensive services to our students. We are authorized.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 border rounded-lg shadow-sm">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="mt-4 flex items-center text-blue-600">
                <span className="text-xs">Learn more</span>
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
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-12">
          {[
            { label: "Completed Courses", value: "100", icon: "📚" },
            { label: "Student Satisfaction", value: "100", icon: "😊" },
            { label: "Universities", value: "100", icon: "🏛️" },
            { label: "Success Story", value: "100", icon: "✅" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-bold text-xl">{stat.value} +</div>
              <div className="text-sm text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Are Different Section */}
      <section className="container mx-auto px-4 py-16 bg-[#fffdf7]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Why we are <span className="text-[#f59e0b]">different?</span>
            </h2>
            <p className="font-medium mb-4">
              What makes us different makes us better.
            </p>
            <p className="text-gray-600 mb-12">
              We are distinctive in the quality of our services and stand out of
              the crowd. Unlike other consultancy firms in Bangladesh, we really
              care for our students. We always strive to give the best possible
              solutions that a student may require. Our experienced consultants
              and in-house lawyer are always at hand to prepare your visa
              application documents in a perfect way.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "70%", label: "Satisfied Students" },
                { value: "80%", label: "Success Ratio" },
                { value: "100%", label: "Free Advice" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 36 36" className="w-24 h-24">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3"
                        strokeDasharray={`${
                          Number.parseInt(stat.value) * 100
                        }, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                      {stat.value}
                    </div>
                  </div>
                  <p className="text-sm font-medium mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/images/2.png"
              alt="Professional consultant"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Inquiry and Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">General Inquiry</h2>
            <p className="text-gray-600 mb-6">
              If you wish to make a query, please complete the form below and
              submit.
            </p>
            <div className="bg-[#f59e0b] text-white py-3 px-6 rounded-md text-center mb-6">
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
              <Button className="w-full bg-[#f59e0b] hover:bg-[#e89000] text-white rounded-full py-6">
                Send Us
              </Button>
            </form>
          </div>
          <div className="bg-[#fff8e1] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              What our <span className="text-[#f59e0b]">Students</span> Say?
            </h2>
            <p className="text-gray-600 mb-6">
              We've chosen a selection of student testimonials to give you a
              better insight about us, our honesty, transparency and our
              devotion towards our students.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
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
                    typesetting industry. Lorem ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <StarRating rating={4.5} />
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="text-center">
              <Button className="bg-[#f59e0b] hover:bg-[#e89000] text-white rounded-full px-6">
                View more
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
