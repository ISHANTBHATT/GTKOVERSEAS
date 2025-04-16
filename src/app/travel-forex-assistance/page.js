import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

const travelAssistanceData = [
  {
    id: 1,
    title: "Hassle-free Flight Bookings",
    description:
      "Say goodbye to the hassle of searching for the best flight deals. Our experienced travel consultants will help you find the most convenient and cost-effective flights to your destination.",
    image1: "/images/t1.jpg",
    image2: "/images/t2.jpg",
  },
  {
    id: 2,
    title: "Expert Advice",
    description:
      "Our team of experts will provide you with valuable information about preparing for life in your destination country, including cultural norms, local customs, and travel tips, ensuring that you arrive fully prepared.",
    image1: "/images/t3.jpg",
    image2: "/images/t4.jpg",
  },
];
const forexAssistanceData = [
  {
    id: 1,
    title: "Competitive Exchange Rates",
    description:
      "We work closely with trusted currency exchange partners to offer you competitive rates that beat those offered by banks and traditional currency exchange outlets. By leveraging our extensive network, we ensure that you get the most value for your money.",
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "We believe in transparency, which is why we provide clear and concise information about exchange rates and fees upfront. With no hidden charges or surprises, you can confidently exchange currency.",
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
];
function page() {
  return (
    <div className="">
      <div className="container relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Travel &
              <span className="relative">
                <span className="relative z-10"> Forex</span>
                <br />
                <span className="relative z-10"> Assistance</span>
                {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Expert guidance through your travel & forex assistance process. We
              make immigration simple, efficient, and stress-free.
            </p>
            <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
              Free Expert Consultation
            </button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex-1 absolute justify-center flex bottom-0 right-0">
            <Image
              src="/images/v0.png"
              alt="Professional visa consultant"
              width={800}
              height={800}
              //   className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="text-center py-12">
        <div className="space-y-6">
          <p className="text-5xl font-bold">Travel Assistance</p>
          <p className="max-w-6xl items-center mx-auto">
            Edwise has a dedicated team to assist you at every step of the way,
            from booking your flight tickets to providing valuable insights
            about your destination country. With years of experience in the
            education and travel industry, we have established strong
            partnerships with travel partners and accommodation providers,
            allowing us to offer you the best deals and discounts on flights and
            accommodations.
          </p>
        </div>

        {travelAssistanceData.map((item, index) => (
          <div
            key={item.id}
            className="h-full  flex items-center justify-center p-8 py-20 lg:py-40"
          >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Images Section */}
              <div
                className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="rounded-3xl overflow-hidden transform rotate-[-5deg]">
                    <img
                      src={item.image1}
                      alt="Hands holding organic soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden transform rotate-[5deg]">
                    <img
                      src={item.image2}
                      alt="Natural soap with herbs"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`space-y-6 text-left ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                {/* <div className="uppercase text-[#FF6B6B] font-medium tracking-wider text-sm">
              Commitment and values
            </div> */}
                <h2 className="text-[#8A0206] text-4xl md:text-5xl font-semibold leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
                {/* <button className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#ff5252] transition-colors">
              DISCOVER NOW
              <ArrowRight className="w-5 h-5" />
            </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 text-center">
        <p className="text-5xl font-bold">Forex Assistance</p>
        <p className="max-w-6xl items-center mx-auto">
          Studying abroad requires careful financial planning, including
          managing currency exchange. Edwise's extensive Forex services aim to
          assist you in obtaining the most advantageous currency exchange rates
          available. Whether you're exchanging currency for tuition fees,
          accommodation, or daily expenses, we'll help you secure the best rates
          and minimize unnecessary fees.
        </p>
      </div>
      {forexAssistanceData.map((item, index) => (
        <div
          key={item.id}
          className="h-full  flex items-center justify-center p-8 py-20 md:py-40"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Images Section */}
            <div className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden transform rotate-[-5deg]">
                  <img
                    src={item.image1}
                    alt="Hands holding organic soap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden transform rotate-[5deg]">
                  <img
                    src={item.image2}
                    alt="Natural soap with herbs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`space-y-6 text-left ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              {/* <div className="uppercase text-[#FF6B6B] font-medium tracking-wider text-sm">
              Commitment and values
            </div> */}
              <h2 className="text-[#8A0206] text-4xl md:text-5xl font-semibold leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
              {/* <button className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#ff5252] transition-colors">
              DISCOVER NOW
              <ArrowRight className="w-5 h-5" />
            </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
