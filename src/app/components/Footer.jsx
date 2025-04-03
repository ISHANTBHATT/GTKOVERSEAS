import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
          {/* Important Links */}
          <div>
            <h3 className="mb-4 font-medium text-[#8A0206]">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Work with us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  University Visits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Media & Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  E-Brochure Download
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Pay Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Test Prep */}
          <div>
            <h3 className="mb-4 font-medium text-[#8A0206]">Test Prep</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  TOEFL
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  PTE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  GMAT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  GRE
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  SAT
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  CAEL
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  CELPIP
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Duolingo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  ACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="mb-4 font-medium text-[#8A0206]">
              Study Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in USA
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Canada
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in UK
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Australia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in New-Zealand
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Singapore
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Ireland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in France
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Germany
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Switzerland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Dubai
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Spain
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Malaysia
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Mauritius
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in India
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Netherlands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study in Italy
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Services */}
          <div>
            <h3 className="mb-4 font-medium text-[#8A0206]">
              Student Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Visa Guidance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Admission Guidance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Career Counseling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Finance Assistance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Travel Assistance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Forex Assistance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Scholarship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-red-600 hover:underline">
                  Study Abroad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 font-medium text-[#8A0206]">Contact Us</h3>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Copyright and Footer Links */}
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-gray-700">
            Copyright © 2026, GTKOVERSEAS{" "}
            <a
              href="mailto:info@GTKOVERSEAS.com"
              className="text-red-600 hover:underline"
            >
              info@GTKOVERSEAS.com
            </a>
          </div>
          <div className="space-x-6">
            <Link href="#" className="text-red-600 hover:underline">
              Disclaimer
            </Link>
            <Link href="#" className="text-red-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-red-600 hover:underline">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
