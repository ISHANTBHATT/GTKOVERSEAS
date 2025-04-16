import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  X,
  Scale,
  Settings,
  TrendingUp,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="/images/ab1.jpg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#A83A28]">
              Home
            </Link>
            <span>•</span>
            <span>About</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 grid gap-4">
            <Image
              src="/images/ab4.jpg"
              alt="Business people"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src="/images/ab3.jpg"
                alt="Document signing"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="bg-[#1E0E0E] rounded-lg flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="text-5xl font-bold text-[#A83A28] mb-2">
                  25+
                </div>
                <div className="text-xl">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF5F2] rounded-lg p-8">
            <div className="text-[#A83A28] uppercase tracking-wider mb-2">
              ABOUT RITAXES
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#3C2A2A]">
              Innovative Strategies for Tax Prosperity
            </h2>
            <p className="text-gray-700 mb-6">
              Duis et dolor vel neque faucibus tincidunt. Nulla semper
              condimentum tellus in ultricies. Nunc tempor ipsum nec fermentum
              consequat. Cras et felis ultricies, molestie dolor sit amet,
              condimentum ante.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Curabitur gravida sem</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Mauris tempor ac erat</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Fusce eleifend lectus</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Fusce non sodales dui</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Class aptent taciti</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-[#A83A28] rounded-full p-1 mt-1 text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span>Nam elementum semper</span>
              </li>
            </ul>
            <Button className="bg-[#A83A28] hover:bg-[#8B2A1F] text-white rounded-full px-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Plan Section */}
      <section className="grid md:grid-cols-2 gap-6 p-6 md:p-10">
        <div className="space-y-6">
          <div className="bg-[#FFF5F2] rounded-lg p-8">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <h2 className="text-[#A83A28] text-xl font-medium">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>

          <div className="bg-[#FFF5F2] rounded-lg p-8">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <h2 className="text-[#A83A28] text-xl font-medium">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700">
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>

          <div className="bg-[#8B2A1F] rounded-lg p-8 text-white">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <h2 className="text-[#A83A28] text-xl font-medium">
                Our History
              </h2>
            </div>
            <p>
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>
        </div>

        <div
          className="bg-[#3C2A2A] rounded-lg p-10 flex flex-col justify-center items-center text-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(60, 42, 42, 0.85), rgba(60, 42, 42, 0.85)), url('/placeholder.svg?height=800&width=600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Our Plan Makes You Feel More Comfortable in Tax Management
          </h2>
          <p className="mb-8">
            Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec
            fermentum consequat. Cras et felis ultricies.
          </p>
          <Button className="bg-[#A83A28] hover:bg-[#8B2A1F] text-white rounded-full px-6">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#1E0E0E] p-6 md:p-10 text-white rounded-t-[50px]">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/ab2.jpg"
                alt="Tax consultant"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-[#3C2A2A]/80 p-6 rounded-lg max-w-[80%]">
              <div className="text-5xl text-[#A83A28] mb-2">"</div>
              <h3 className="text-xl font-semibold mb-1">
                Tax Research for Financial Mastery
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-[#A83A28] uppercase tracking-wider mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Reliable Tax Solutions Tailored to Your Needs
            </h2>
            <p className="mb-8">
              Aliquam aliquam ante tristique nulla suscipit pulvinar eget ut
              tortor. Cras scelerisque sodales viverra. Nullam auctor tincidunt
              velit at auctor.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Analytical Skill</span>
                  <span>94%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div
                    className="h-2 bg-[#A83A28] rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Tax Knowledge</span>
                  <span>98%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div
                    className="h-2 bg-[#A83A28] rounded-full"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Advisory & Consultation</span>
                  <span>93%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div
                    className="h-2 bg-[#A83A28] rounded-full"
                    style={{ width: "93%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span>Problem-Solving Skills</span>
                  <span>96%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div
                    className="h-2 bg-[#A83A28] rounded-full"
                    style={{ width: "96%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-[#A83A28] p-6 md:p-10 text-white text-center rounded-b-[50px]">
        <p className="mb-8">
          Trusted by 1000+ company worldwide. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit luctus nec mattis.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">Rovist</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">Rinsure</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">raxmus</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">ravenz</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">Rekover</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl font-bold">reshield</span>
          </div>
        </div>
      </section>

      {/* Help Achieve Goals Section */}
      <section className="p-6 md:p-10">
        <div className="grid md:grid-cols-5 gap-6 mb-6">
          <div className="md:col-span-3 rounded-lg overflow-hidden">
            <Image
              src="/images/ab1.jpg"
              alt="Business meeting"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 bg-[#FFF5F2] rounded-lg p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-[#3C2A2A]">
              We're Here to Help You Achieve Your Goals
            </h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <Button className="bg-[#A83A28] hover:bg-[#8B2A1F] text-white rounded-full px-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#A83A28] rounded-lg p-8 text-white">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Settings className="text-[#A83A28] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Commitment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="bg-[#A83A28] rounded-lg p-8 text-white">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Scale className="text-[#A83A28] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Honesty</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="bg-[#A83A28] rounded-lg p-8 text-white">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="text-[#A83A28] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Growth</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 bg-[#FFF5F2] rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#A83A28]">2,800+</h3>
            <p className="text-[#3C2A2A] font-medium">Satisfied Client</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#A83A28]">3,456+</h3>
            <p className="text-[#3C2A2A] font-medium">Case Finished</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#A83A28]">4.8</h3>
            <p className="text-[#3C2A2A] font-medium">Client Rating</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#A83A28]">30+</h3>
            <p className="text-[#3C2A2A] font-medium">Branch Office</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="p-6 md:p-10 bg-[#FFF5F2]">
        <div className="mb-8">
          <div className="text-[#A83A28] uppercase tracking-wider mb-2">
            Our Team
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl font-bold text-[#3C2A2A]">
              Meet Our Professional Team
            </h2>
            <div className="max-w-md">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/profile1.jpg"
              alt="Mark Joseph"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-[#3C2A2A] text-white">
              <h3 className="text-xl font-semibold">Mark Joseph</h3>
              <p className="text-gray-300 mb-4">Tax Expert</p>
              <div className="flex gap-2">
                <Link href="#" className="bg-white rounded-full p-2">
                  <Facebook className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Twitter className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Linkedin className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/profile2.jpg"
              alt="Ella Grace"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-[#3C2A2A] text-white">
              <h3 className="text-xl font-semibold">Ella Grace</h3>
              <p className="text-gray-300 mb-4">Tax Expert</p>
              <div className="flex gap-2">
                <Link href="#" className="bg-white rounded-full p-2">
                  <Facebook className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Twitter className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Linkedin className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/profile3.jpg"
              alt="Kylian Herrera"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 bg-[#3C2A2A] text-white">
              <h3 className="text-xl font-semibold">Kylian Herrera</h3>
              <p className="text-gray-300 mb-4">Tax Expert</p>
              <div className="flex gap-2">
                <Link href="#" className="bg-white rounded-full p-2">
                  <Facebook className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Twitter className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-2">
                  <Linkedin className="w-4 h-4 text-[#3C2A2A]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}
