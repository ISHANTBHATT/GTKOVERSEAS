"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import studyAbroadData from "@/app/data/study-abroad.json";

// const studyAbroadLinks = [
//   { name: "USA", href: "#" },
//   { name: "Canada", href: "#" },
//   { name: "UK", href: "#" },
//   { name: "Ireland", href: "#" },
//   { name: "Australia", href: "#" },
//   { name: "New Zealand", href: "#" },

//   { name: "France", href: "#" },
//   { name: "Germany", href: "#" },
//   { name: "denmark", href: "#" },
//   { name: "Finland", href: "#" },
//   { name: "Italy", href: "#" },
//   { name: "Cyprus", href: "#" },
//   { name: "Malta", href: "#" },
//   { name: "Switzerland", href: "#" },
//   { name: "Sweden", href: "#" },
//   { name: "Hungary", href: "#" },
//   { name: "Netherlands", href: "#" },

//   { name: "Ireland", href: "#" },
//   { name: "Singapore", href: "#" },
//   { name: "Dubai", href: "#" },
//   { name: "Malaysia", href: "#" },
//   { name: "Japan", href: "#" },
// ];

const studyAbroadLinks = studyAbroadData.countries.map((country) => ({
  name: country.name,
  href: `/study-abroad/${country.id}`,
  id: country.id,
}));
const studentServicesLinks = [
  { name: "Test Preparations", href: "#" },
  { name: "Career Counseling", href: "#" },
  { name: "Admission Guidance", href: "#" },
  { name: "Financial Assistance", href: "#" },
  { name: "Travel & Forex Assistance", href: "#" },
  { name: "Visa Assistance", href: "#" },
];

const whatWeDoLinks = [
  { name: "Our Services", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  //   const handleDropdownToggle = (dropdown) => {
  //     if (activeDropdown === dropdown) {
  //       setActiveDropdown(null);
  //     } else {
  //       setActiveDropdown(dropdown);
  //     }
  //   };
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);
  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdowns();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navigateToCountry = (countryId) => {
    router.push(`/study-abroad/${countryId}`);
    closeDropdowns();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeDropdowns}>
          <div className="relative h-12 w-36">
            <Image
              src="/images/logo.png"
              alt="StudyHub Logo"
              width={1000}
              height={1000}
              className="h-10 w-full"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={dropdownRef}
          className="hidden items-center space-x-1 md:flex"
        >
          <Link
            href="/"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            About
          </Link>

          {/* Study Abroad Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("studyAbroad")}
              className={cn(
                "flex items-center px-4 py-2 text-base font-medium transition-colors",
                activeDropdown === "studyAbroad"
                  ? "text-[#8A0206]"
                  : "text-gray-800 hover:text-[#8A0206]/80"
              )}
              aria-expanded={activeDropdown === "studyAbroad"}
            >
              Study Abroad
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  activeDropdown === "studyAbroad" ? "rotate-180" : ""
                )}
              />
            </button>
            {activeDropdown === "studyAbroad" && (
              <div className="absolute left-0 z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg max-h-96 overflow-y-auto">
                {studyAbroadLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/courses"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Find a Course
          </Link>

          {/* Student Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("studentServices")}
              className={cn(
                "flex items-center px-4 py-2 text-base font-medium transition-colors",
                activeDropdown === "studentServices"
                  ? "text-[#8A0206]"
                  : "text-gray-800 hover:text-[#8A0206]/80"
              )}
              aria-expanded={activeDropdown === "studentServices"}
            >
              Student Services
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  activeDropdown === "studentServices" ? "rotate-180" : ""
                )}
              />
            </button>
            {activeDropdown === "studentServices" && (
              <div className="absolute left-0 z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {studentServicesLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100",
                      link.isHeader
                        ? "font-semibold text-gray-900"
                        : "text-gray-800",
                      link.hasSubmenu ? "flex items-center justify-between" : ""
                    )}
                    onClick={closeDropdowns}
                  >
                    {link.name}
                    {link.hasSubmenu && (
                      <ChevronDown className="h-4 w-4 rotate-270" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* What We Do Dropdown */}
          {/* <div className="relative">
            <button
              onClick={() => handleDropdownToggle("whatWeDo")}
              className={cn(
                "flex items-center px-4 py-2 text-base font-medium transition-colors",
                activeDropdown === "whatWeDo"
                  ? "text-[#8A0206]"
                  : "text-gray-800 hover:text-[#8A0206]/80"
              )}
              aria-expanded={activeDropdown === "whatWeDo"}
            >
              What We Do
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  activeDropdown === "whatWeDo" ? "rotate-180" : ""
                )}
              />
            </button>
            {activeDropdown === "whatWeDo" && (
              <div className="absolute left-0 z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {whatWeDoLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div> */}

          <Link
            href="/"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Scholarships
          </Link>
          {/* Regular Links */}
          <Link
            href="/"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Events
          </Link>
          {/* <Link
            href="#resources"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Resources
          </Link> */}
        </nav>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="rounded-md bg-[#8A0206] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#8A0206]/80"
          onClick={closeDropdowns}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-800 md:hidden"
          onClick={() => handleDropdownToggle("mobile")}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                activeDropdown === "mobile"
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {activeDropdown === "mobile" && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            <div className="py-2">
              <button
                onClick={() => handleDropdownToggle("mobileStudyAbroad")}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-800"
              >
                Study Abroad
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "mobileStudyAbroad" ? "rotate-180" : ""
                  )}
                />
              </button>
              {activeDropdown === "mobileStudyAbroad" && (
                <div className="mt-2 space-y-1 pl-4">
                  {studyAbroadLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-2 text-sm text-gray-700"
                      onClick={closeDropdowns}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                onClick={() => handleDropdownToggle("mobileStudentServices")}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-800"
              >
                Student Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "mobileStudentServices"
                      ? "rotate-180"
                      : ""
                  )}
                />
              </button>
              {activeDropdown === "mobileStudentServices" && (
                <div className="mt-2 space-y-1 pl-4">
                  {studentServicesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "block py-2 text-sm",
                        link.isHeader
                          ? "font-semibold text-gray-900"
                          : "text-gray-700"
                      )}
                      onClick={closeDropdowns}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                onClick={() => handleDropdownToggle("mobileWhatWeDo")}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-800"
              >
                What We Do
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeDropdown === "mobileWhatWeDo" ? "rotate-180" : ""
                  )}
                />
              </button>
              {activeDropdown === "mobileWhatWeDo" && (
                <div className="mt-2 space-y-1 pl-4">
                  {whatWeDoLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-2 text-sm text-gray-700"
                      onClick={closeDropdowns}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#events"
              className="block py-2 text-base font-medium text-gray-800"
              onClick={closeDropdowns}
            >
              Events
            </Link>
            <Link
              href="#resources"
              className="block py-2 text-base font-medium text-gray-800"
              onClick={closeDropdowns}
            >
              Resources
            </Link>
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-[#1e3a8a] px-4 py-2 text-center text-base font-medium text-white"
                onClick={closeDropdowns}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
{
  /* <motion.header
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
</motion.header> */
}
