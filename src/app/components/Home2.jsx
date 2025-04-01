import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  ChevronRight,
  Shield,
  Users,
  Brain,
  Clock,
  Award,
} from "lucide-react";

export default function Home2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <div className="h-4 w-12 rounded-full bg-red-400"></div>
              <div className="h-4 w-12 rounded-full bg-purple-400"></div>
              <div className="h-4 w-12 rounded-full bg-blue-400"></div>
              <div className="h-4 w-12 rounded-full bg-emerald-400"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">STUDYHUB</h1>
              <p className="text-xs">Learning Education and Consultancy Firm</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="font-medium">
              Home
            </Link>
            <Link href="#" className="font-medium">
              Course
            </Link>
            <Link href="#" className="font-medium">
              Contact Us
            </Link>
            <Link href="#" className="font-medium">
              Blog
            </Link>
            <Button className="bg-amber-400 hover:bg-amber-500 text-black">
              Sign In
            </Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Best Platform To Your Special Courses
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-3/4 h-3/4 bg-amber-300 rounded-bl-[100px]"></div>
            <div className="relative z-10">
              <Image
                src="/images/2.png"
                alt="Student with books"
                width={400}
                height={500}
                className="mx-auto"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full"></div>
            <div className="absolute -z-10 top-1/4 -right-4 w-8 h-8 bg-amber-400 rounded-full"></div>
            <div className="absolute -z-10 bottom-1/3 left-0 w-12 h-12 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-12 px-4 md:px-6 flex">
        <div className="flex flex-col gap-8 items-start">
          <div className="md:w-2/3">
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
          <div className="md:w-full grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Student thinking"
              width={500}
              height={400}
              className="mx-auto"
            />
            <div className="absolute -z-10 top-1/4 -left-4 w-16 h-16 bg-amber-300 rounded-full"></div>
            <div className="absolute -z-10 bottom-1/4 -right-4 w-12 h-12 bg-pink-400 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Why we are <span className="text-amber-600">different?</span>
            </h2>
            <p className="font-medium mb-4">
              What makes us different makes us better.
            </p>
            <p className="text-gray-700 mb-6">
              We are distinctive in the quality of our services and stand out of
              the crowd. Unlike other educational consultants, we have a team of
              experts who have been through the process that you are questioning
              and therefore have a deeper understanding of your needs. Our
              experienced consultants in a perfect way.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className={stat.color}
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        strokeDasharray={`${stat.percentage * 2.51} 251.2`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold">
                      {stat.percentage}%
                    </div>
                  </div>
                  <p className="mt-2 text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              From Our Online Learning
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <course.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-600">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Student learning online"
              width={500}
              height={400}
              className="mx-auto"
            />
            <div className="absolute -z-10 -top-4 -right-4 w-16 h-16 bg-pink-300 rounded-full"></div>
            <div className="absolute -z-10 bottom-1/3 -left-4 w-20 h-20 bg-blue-300 rounded-full"></div>
            <div className="absolute -z-10 -bottom-4 right-1/4 w-12 h-12 bg-amber-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Choose</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 border-l border-gray-300 pl-8">
            <p className="italic text-gray-700">
              In confusion, many can't decide where to get proper training for
              the for life choices and sometimes it's an important decision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats2.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">
                <stat.icon className="h-10 w-10 text-gray-700" />
              </div>
              <div className="text-center">
                <p className="font-bold">{stat.value}+</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation and Testimonials Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">General Inquiry</h2>
            <p className="text-gray-700 mb-6">
              If you wish to make a query, please complete the form below and we
              will get back to you as soon as possible.
            </p>

            <div className="bg-amber-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">
                Free Consultation
              </h3>
              <form className="space-y-4">
                <Input placeholder="First Name" className="bg-white" />
                <Input placeholder="Last Name" className="bg-white" />
                <Input placeholder="Email" type="email" className="bg-white" />
                {/* <Textarea
                  placeholder="Enter Your Message Here"
                  className="bg-white"
                /> */}
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Send Us
                </Button>
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              What our <span className="text-amber-500">Students</span> Say?
            </h2>
            <p className="text-gray-700 mb-6">
              We're proud to have helped many students achieve their goals and
              here's what some of them have to say about our services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={testimonial.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    {testimonial.text}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-amber-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Event and University News</h2>
          <p className="text-gray-700">
            Keep an eye on our regular Education Event, University visits,
            Seminar, etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <div className="h-48 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {event.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <Link href="#" className="text-amber-500 text-sm font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-8 relative">
          <div className="absolute -z-10 top-0 left-1/4 w-16 h-16 bg-amber-300 rounded-full"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-20 h-20 bg-pink-300 rounded-full"></div>

          <h2 className="text-2xl font-bold mb-2">Our Popular</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popular.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 h-64 rounded-lg overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=256&width=384"
                alt="Popular course"
                width={384}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-8 px-4 md:px-6 mb-12">
        <div className="bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-bold text-lg mb-4 md:mb-0">
            Register to Get Updates
          </p>
          <Button className="bg-white text-black hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

// Sample data
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

const stats = [
  { percentage: 70, label: "Satisfied Students", color: "text-amber-500" },
  { percentage: 80, label: "Success Ratio", color: "text-amber-500" },
  { percentage: 100, label: "Free Advice", color: "text-amber-500" },
];

const courses = [
  {
    title: "Online Degree",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.",
    icon: BookOpen,
  },
  {
    title: "Short Courses",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.",
    icon: Clock,
  },
  {
    title: "Training From Experts",
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.",
    icon: Users,
  },
];

const features = [
  {
    title: "Experience",
    description:
      "We've been providing education consulting for over 10 years of experience in education consulting field.",
    icon: Award,
  },
  {
    title: "Transparency",
    description:
      "We're 100% transparent about our processes and what we can and cannot help you achieve.",
    icon: Shield,
  },
  {
    title: "Pastoral Care",
    description:
      "We offer continuous aftercare to all of your students and their families throughout their journey.",
    icon: Users,
  },
  {
    title: "Intelligence and Skill",
    description:
      "We have a team of skilled professionals who are experts in their respective fields.",
    icon: Brain,
  },
];

const stats2 = [
  { value: 100, label: "Clients", icon: Users },
  { value: 100, label: "Projects", icon: BookOpen },
  { value: 100, label: "Awards", icon: Award },
  { value: 100, label: "Success", icon: Shield },
];

const testimonials = [
  {
    name: "Samuel Turner",
    role: "Medical Student",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jennifer Parker",
    role: "Business Student",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const events = [
  {
    title: "Education Fair & Student Future Progress Conference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Apr 18, 2023",
  },
  {
    title: "Education Fair & Student Future Progress Conference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Apr 19, 2023",
  },
  {
    title: "Education Fair & Student Future Progress Conference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Apr 20, 2023",
  },
];

const popular = [{ id: 1 }, { id: 2 }, { id: 3 }];
