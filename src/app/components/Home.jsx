import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BenefitCard from "./BenefitCard";
import CategoryCard from "./CategoryCard";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";
import CourseCard from "./CourseCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9E6]">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="StudyHub Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-blue-900">StudyHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-blue-900">
            Home
          </Link>
          <Link href="/course" className="font-medium text-gray-600">
            Course
          </Link>
          <Link href="/contact" className="font-medium text-gray-600">
            Contact Us
          </Link>
          <Link href="/blog" className="font-medium text-gray-600">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button className="rounded-full bg-amber-400 hover:bg-amber-500 text-white">
            Register
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <div className="bg-orange-500 text-white rounded-full py-1 px-4 w-fit mb-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-white/30"></div>
                <div className="w-6 h-6 rounded-full bg-white/40"></div>
                <div className="w-6 h-6 rounded-full bg-white/50"></div>
              </div>
              <span className="text-xs font-medium">
                Join 1000+ students worldwide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              The Best Platform To
              <br />
              Your Special Courses
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-blue-900 hover:bg-blue-800 text-white px-6 flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-blue-900 text-blue-900"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/2.png"
              alt="Student with books"
              width={500}
              height={600}
              className="relative z-10"
            />

            {/* Floating elements */}
            <div className="absolute top-10 right-10 z-20 bg-blue-900 text-white rounded-full py-2 px-4 shadow-lg">
              <p className="text-xs">Around 1,234 Courses</p>
            </div>

            <div className="absolute bottom-20 left-0 z-20 bg-purple-500 text-white rounded-full py-2 px-4 shadow-lg">
              <p className="text-xs">Unlock your bright career</p>
            </div>

            <div className="absolute top-1/4 right-0 w-8 h-8 rounded-full bg-yellow-300"></div>
            <div className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-pink-500"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-cyan-400"></div>
            <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-amber-200"></div>

            {/* Yellow diagonal shape */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-[150%] h-[70%] bg-amber-300 rounded-full transform rotate-12 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-t-3xl">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-24 h-auto">
            <Image
              src="/images/books.png"
              alt="Books stack"
              width={80}
              height={100}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <CategoryCard
            title="Business"
            icon="/images/business.png"
            color="teal"
          />
          <CategoryCard
            title="English"
            icon="/images/english.png"
            color="blue"
          />
          <CategoryCard
            title="Finance"
            icon="/images/finance.png"
            color="orange"
          />
          <CategoryCard
            title="Content"
            icon="/images/content.png"
            color="purple"
          />
          <CategoryCard
            title="Development"
            icon="/images/development.png"
            color="pink"
          />
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              From Our Online
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning</h2>

            <p className="text-gray-600 mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>

            <div className="space-y-6">
              <FeatureCard
                title="Online Degree"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
              />
              <FeatureCard
                title="Short Courses"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
              />
              <FeatureCard
                title="Training From Experts"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
              />
              <FeatureCard
                title="1.5k+ Video Courses"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Student learning online"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Students collaborating"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-pink-300 rounded-full opacity-50"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-amber-300 rounded-full opacity-70"></div>
            <div className="absolute top-0 right-1/4 w-12 h-12 bg-purple-200 rotate-45 opacity-60"></div>
            <div className="absolute bottom-10 left-1/4 w-10 h-10 bg-purple-300 rotate-12 opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose
            </h2>
            <p className="text-gray-600">
              In confusion, many can't decide where to get proper knowing for
              his or her desired aim and sometimes it can be an unwise decision.
            </p>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            <BenefitCard
              title="Experience"
              description="We have multiple training more than 5+ years of experience in education consultancy. We are Acorn Consultancy."
              icon="users"
            />
            <BenefitCard
              title="Transparency"
              description="Straight Talk is Good Business! Our services are our commitments to you and we deliver what we promise and we choose the."
              icon="eye"
            />
            <BenefitCard
              title="Pastoral Care"
              description="We look at the consultancy differently! We are highly choice to take care of your problems and worries because until we are."
              icon="heart"
            />
            <BenefitCard
              title="Authorized Agent"
              description="Our excellent network with the universities helps us to deliver supportive services to our students. We are Acorn Consultancy."
              icon="shield-check"
            />
            <BenefitCard
              title="Intelligence and Skill"
              description="Practical wisdom, trusted intuition! Our success rate with visa applications and university admissions is excellent."
              icon="brain"
            />
            <BenefitCard
              title="Long Term Relationship"
              description="Our excellent network with the universities helps us to deliver supportive services to our students. We are Acorn Consultancy."
              icon="handshake"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Completed Courses" value="100" icon="book-open" />
          <StatCard title="Student Satisfaction" value="100" icon="users" />
          <StatCard title="Universities" value="100" icon="building" />
          <StatCard title="Success Story" value="100" icon="check-circle" />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-b-3xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Book icon"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Popular</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <CourseCard
            title="Web Development Masterclass"
            image="/placeholder.svg?height=200&width=400"
            instructor="John Doe"
            rating={4.5}
            students={120}
          />
          <CourseCard
            title="Digital Marketing Fundamentals"
            image="/placeholder.svg?height=200&width=400"
            instructor="Jane Smith"
            rating={4.8}
            students={98}
          />
          <CourseCard
            title="Data Science Bootcamp"
            image="/placeholder.svg?height=200&width=400"
            instructor="Alex Johnson"
            rating={4.7}
            students={145}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">S</span>
                </div>
                <span className="text-xl font-bold">StudyHub</span>
              </div>
              <p className="text-blue-200 mb-4">
                The best platform for online learning and skill development.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-blue-200 hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-blue-200 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-200 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/category/business"
                    className="text-blue-200 hover:text-white"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/design"
                    className="text-blue-200 hover:text-white"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/development"
                    className="text-blue-200 hover:text-white"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/marketing"
                    className="text-blue-200 hover:text-white"
                  >
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-blue-200">
                <p>123 Education Street</p>
                <p>Learning City, ED 12345</p>
                <p className="mt-2">Email: info@studyhub.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>
              &copy; {new Date().getFullYear()} StudyHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
