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
  { name: "Test Preparations", href: "test-preparations" },
  { name: "Career Counseling", href: "career-counseling" },
  { name: "Admission Guidance", href: "admission-guidance" },
  { name: "Financial Assistance", href: "financial-assistance" },
  { name: "Travel & Forex Assistance", href: "travel-forex-assistance" },
  { name: "Visa Assistance", href: "visa-assistance" },
];

const whatWeDoLinks = [
  { name: "Our Services", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "About Us", href: "about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  //   const handleDropdownToggle = (dropdown) => {
  //     if (activeDropdown === dropdown) {
  //       setActiveDropdown(null);
  //     } else {
  //       setActiveDropdown(dropdown);
  //     }
  //   };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 z-50 w-full  ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white "
      }

      `}
    >
      <div className=" flex h-20 items-center justify-between px-4">
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
          className="hidden items-center space-x-1 lg:flex"
        >
          <Link
            href="/about"
            className="px-4 py-2 text-base font-medium  transition-colors hover:text-[#8A0206]/80"
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
                  : " hover:text-[#8A0206]/80"
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
              <div className="absolute left-0 z-50 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg max-h-96 overflow-y-auto">
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
            className="px-4 py-2 text-base font-medium  transition-colors hover:text-[#8A0206]/80"
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
                  : "hover:text-[#8A0206]/80"
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
              <div className="absolute left-0 z-50 mt-1 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {studentServicesLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={`../${link.href}`}
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

          {/* <Link
            href="/scholarships"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Scholarships
          </Link>

          <Link
            href="/"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Events
          </Link> */}

          {/* <Link
            href="#resources"
            className="px-4 py-2 text-base font-medium text-gray-800 transition-colors hover:text-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Resources
          </Link> */}
        </nav>

        {/* Contact Us Button */}
        <div className="flex gap-2">
          <Link
            href="https://wa.me/1234567890" // Replace with your actual number
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-md flex items-center text-base font-medium text-[#8A0206] transition-colors mr-2"
          >
            <Image
              src="/images/whatsapp-icon.png" // Place your image in public folder with this name
              alt="WhatsApp"
              width={40}
              height={50}
              className="mr-2"
            />
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-[#8A0206] px-6 py-2 text-base font-medium text-white transition-colors hover:bg-[#8A0206]/80"
            onClick={closeDropdowns}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`rounded-md p-2 lg:hidden ${
            isScrolled || !isHomePage ? "text-gray-800" : "text-white "
          }`}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMobileSubmenuOpen(null);
          }}
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
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md text-neutral-800">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>


            <div>
              <button
                onClick={() =>
                  setMobileSubmenuOpen(
                    mobileSubmenuOpen === "studyAbroad" ? null : "studyAbroad"
                  )
                }
                className="flex justify-between w-full"
              >
                Study Abroad
                <ChevronDown
                  className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    mobileSubmenuOpen === "studyAbroad" ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileSubmenuOpen === "studyAbroad" && (
                <div className="ml-4 mt-1 space-y-1">
                  {studyAbroadLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-gray-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

      
            <div>
              <button
                onClick={() =>
                  setMobileSubmenuOpen(
                    mobileSubmenuOpen === "studentServices"
                      ? null
                      : "studentServices"
                  )
                }
                className="flex justify-between w-full"
              >
                Student Services
                <ChevronDown
                  className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    mobileSubmenuOpen === "studentServices" ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileSubmenuOpen === "studentServices" && (
                <div className="ml-4 mt-1 space-y-1">
                  {studentServicesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={`/${link.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-gray-700"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
              Find a Course
            </Link>

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )} */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-white transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A0206]/10 to-white/50 backdrop-blur-sm" />
        <div className="relative h-full w-full  bg-white/95 shadow-2xl overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              className="self-end p-6 hover:scale-110 transition-transform"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#8A0206]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <div className="px-8 py-4 space-y-6">
              <Link
                href="/about"
                className="block text-2xl font-semibold text-[#8A0206] hover:pl-4 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Study Abroad Submenu */}
              <div className="group">
                <button
                  onClick={() =>
                    setMobileSubmenuOpen(
                      mobileSubmenuOpen === "studyAbroad" ? null : "studyAbroad"
                    )
                  }
                  className="flex justify-between items-center w-full text-2xl font-semibold text-gray-800"
                >
                  Study Abroad
                  <ChevronDown
                    className={cn(
                      "ml-2 h-6 w-6 transition-transform text-[#8A0206]",
                      mobileSubmenuOpen === "studyAbroad" ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "ml-4 space-y-2 overflow-hidden transition-all duration-500",
                    mobileSubmenuOpen === "studyAbroad"
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {studyAbroadLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xl text-gray-700 hover:text-[#8A0206] hover:pl-4 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Student Services Submenu */}
              <div className="group">
                <button
                  onClick={() =>
                    setMobileSubmenuOpen(
                      mobileSubmenuOpen === "studentServices"
                        ? null
                        : "studentServices"
                    )
                  }
                  className="flex justify-between items-center w-full text-2xl font-semibold text-gray-800"
                >
                  Student Services
                  <ChevronDown
                    className={cn(
                      "ml-2 h-6 w-6 transition-transform text-[#8A0206]",
                      mobileSubmenuOpen === "studentServices"
                        ? "rotate-180"
                        : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "ml-4 space-y-2 overflow-hidden transition-all duration-500",
                    mobileSubmenuOpen === "studentServices"
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {studentServicesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={`../${link.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-xl text-gray-700 hover:text-[#8A0206] hover:pl-4 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/courses"
                className="block text-2xl font-semibold text-gray-800 hover:text-[#8A0206] hover:pl-4 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find a Course
              </Link>

              <Link
                href="/contact"
                className="block text-2xl font-semibold text-gray-800 hover:text-[#8A0206] hover:pl-4 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-auto p-8">
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] text-white py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
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
