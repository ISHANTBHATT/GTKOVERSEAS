// import Image from "next/image";
// import React from "react";
// import { ArrowRight } from "lucide-react";

// const travelAssistanceData = [
//   {
//     id: 1,
//     title: "Hassle-free Flight Bookings",
//     description:
//       "Say goodbye to the hassle of searching for the best flight deals. Our experienced travel consultants will help you find the most convenient and cost-effective flights to your destination.",
//     image1: "/images/t1.jpg",
//     image2: "/images/t2.jpg",
//   },
//   {
//     id: 2,
//     title: "Expert Advice",
//     description:
//       "Our team of experts will provide you with valuable information about preparing for life in your destination country, including cultural norms, local customs, and travel tips, ensuring that you arrive fully prepared.",
//     image1: "/images/t3.jpg",
//     image2: "/images/t4.jpg",
//   },
// ];
// const forexAssistanceData = [
//   {
//     id: 1,
//     title: "Competitive Exchange Rates",
//     description:
//       "We work closely with trusted currency exchange partners to offer you competitive rates that beat those offered by banks and traditional currency exchange outlets. By leveraging our extensive network, we ensure that you get the most value for your money.",
//     image1:
//       "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
//     image2:
//       "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
//   },
//   {
//     id: 2,
//     title: "Transparent Pricing",
//     description:
//       "We believe in transparency, which is why we provide clear and concise information about exchange rates and fees upfront. With no hidden charges or surprises, you can confidently exchange currency.",
//     image1:
//       "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
//     image2:
//       "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
//   },
// ];
// function page() {
//   return (
//     <div className="">
//       <div className="relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
//           <div className="flex-1 space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Travel &
//               <span className="relative">
//                 <span className="relative z-10"> Forex</span>
//                 {/* <br /> */}
//                 <span className="relative z-10"> Assistance</span>
//                 {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl font-semibold text-gray-700 leading-tight">
//               Smooth Transitions: Travel and Forex Support
//             </p>
//             <p className="text-lg text-gray-600 max-w-xl">
//               Embarking on your international education journey should be
//               exciting - not overwhelming. Our Travel and Forex Assistance
//               services are designed to take the stress out of your travel and
//               financial preparations so you can focus on what really matters:
//               your future.
//             </p>
//             <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
//               Free Expert Consultation
//             </button>
//           </div>

//           {/* Right Column - Hero Image */}
//           <div className="flex-1 absolute justify-center flex bottom-0 right-0">
//             <Image
//               src="/images/v0.png"
//               alt="Professional visa consultant"
//               width={800}
//               height={800}
//               //   className="rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="text-center py-12">
//         <div className="space-y-6">
//           <p className="text-5xl font-bold">Travel Assistance</p>
//           <p className="max-w-6xl items-center mx-auto">
//             Edwise has a dedicated team to assist you at every step of the way,
//             from booking your flight tickets to providing valuable insights
//             about your destination country. With years of experience in the
//             education and travel industry, we have established strong
//             partnerships with travel partners and accommodation providers,
//             allowing us to offer you the best deals and discounts on flights and
//             accommodations.
//           </p>
//         </div>

//         {travelAssistanceData.map((item, index) => (
//           <div
//             key={item.id}
//             className="h-full  flex items-center justify-center p-8 py-20 lg:py-40"
//           >
//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//               {/* Images Section */}
//               <div
//                 className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
//               >
//                 <div className="grid grid-cols-2 gap-4 ">
//                   <div className="rounded-3xl overflow-hidden transform rotate-[-5deg]">
//                     <img
//                       src={item.image1}
//                       alt="Hands holding organic soap"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="rounded-3xl overflow-hidden transform rotate-[5deg]">
//                     <img
//                       src={item.image2}
//                       alt="Natural soap with herbs"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div
//                 className={`space-y-6 text-left ${
//                   index % 2 !== 0 ? "md:order-1" : ""
//                 }`}
//               >
//                 {/* <div className="uppercase text-[#FF6B6B] font-medium tracking-wider text-sm">
//               Commitment and values
//             </div> */}
//                 <h2 className="text-[#8A0206] text-4xl md:text-5xl font-semibold leading-tight">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   {item.description}
//                 </p>
//                 {/* <button className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#ff5252] transition-colors">
//               DISCOVER NOW
//               <ArrowRight className="w-5 h-5" />
//             </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="space-y-6 text-center">
//         <p className="text-5xl font-bold">Forex Assistance</p>
//         <p className="max-w-6xl items-center mx-auto">
//           Studying abroad requires careful financial planning, including
//           managing currency exchange. Edwise&apos;s extensive Forex services aim
//           to assist you in obtaining the most advantageous currency exchange
//           rates available. Whether you&apos;re exchanging currency for tuition
//           fees, accommodation, or daily expenses, we&apos;ll help you secure the
//           best rates and minimize unnecessary fees.
//         </p>
//       </div>
//       {forexAssistanceData.map((item, index) => (
//         <div
//           key={item.id}
//           className="h-full  flex items-center justify-center p-8 py-20 md:py-40"
//         >
//           <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//             {/* Images Section */}
//             <div className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="rounded-3xl overflow-hidden transform rotate-[-5deg]">
//                   <img
//                     src={item.image1}
//                     alt="Hands holding organic soap"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="rounded-3xl overflow-hidden transform rotate-[5deg]">
//                   <img
//                     src={item.image2}
//                     alt="Natural soap with herbs"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div
//               className={`space-y-6 text-left ${
//                 index % 2 !== 0 ? "md:order-1" : ""
//               }`}
//             >
//               {/* <div className="uppercase text-[#FF6B6B] font-medium tracking-wider text-sm">
//               Commitment and values
//             </div> */}
//               <h2 className="text-[#8A0206] text-4xl md:text-5xl font-semibold leading-tight">
//                 {item.title}
//               </h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {item.description}
//               </p>
//               {/* <button className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#ff5252] transition-colors">
//               DISCOVER NOW
//               <ArrowRight className="w-5 h-5" />
//             </button> */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default page;

import Image from "next/image";
import React from "react";
import {
  ArrowRight,
  Plane,
  CreditCard,
  MapPin,
  Shield,
  DollarSign,
  Wallet,
  Globe,
  Clock,
} from "lucide-react";

const travelAssistanceData = [
  {
    id: 1,
    title: "Flight Booking",
    description:
      "Get access to student discounts and flexible ticket options. Our experienced travel consultants will help you find the most convenient and cost-effective flights to your destination.",
    icon: <Plane className="w-10 h-10 text-[#8A0206]" />,
    image1: "/images/t1.jpg",
    image2: "/images/t2.jpg",
  },
  {
    id: 2,
    title: "Airport Pickup",
    description:
      "Reliable airport transfers to ensure a smooth arrival abroad. Our team will be waiting for you at your destination airport, ready to take you to your accommodation.",
    icon: <MapPin className="w-10 h-10 text-[#8A0206]" />,
    image1: "/images/t3.jpg",
    image2: "/images/t4.jpg",
  },
  {
    id: 3,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage that meets visa and university requirements. We'll help you select the right insurance plan that provides adequate protection during your stay abroad.",
    icon: <Shield className="w-10 h-10 text-[#8A0206]" />,
    image1: "/images/t1.jpg",
    image2: "/images/t4.jpg",
  },
  {
    id: 4,
    title: "Visa-Ready Itineraries",
    description:
      "Customized travel plans that comply with embassy regulations.",
    icon: <Shield className="w-10 h-10 text-[#8A0206]" />,
    image1: "/images/t1.jpg",
    image2: "/images/t4.jpg",
  },
];

const forexAssistanceData = [
  {
    id: 1,
    title: "Currency Exchange",
    description:
      "Competitive rates for major currencies with no hidden fees. We work closely with trusted currency exchange partners to offer you rates that beat those offered by banks and traditional currency exchange outlets.",
    icon: <DollarSign className="w-10 h-10 text-[#8A0206]" />,
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Prepaid Forex Cards",
    description:
      "Safe, reloadable cards accepted worldwide—ideal for daily expenses abroad. These cards offer security, convenience, and help you manage your budget effectively while studying overseas.",
    icon: <CreditCard className="w-10 h-10 text-[#8A0206]" />,
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Wire Transfers",
    description:
      "Fast and reliable money transfers for tuition fees and living expenses. Our partnerships with financial institutions ensure that your money reaches its destination quickly and securely.",
    icon: <Wallet className="w-10 h-10 text-[#8A0206]" />,
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Expert Guidance",
    description:
      "Personalized advice on how to manage currency conversions, budget abroad, and avoid high transaction costs.",
    icon: <Wallet className="w-10 h-10 text-[#8A0206]" />,
    image1:
      "https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&q=80&w=600",
    image2:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600",
  },
];

const benefits = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Partnerships with top banks and travel providers",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 support during your initial travel period",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Transparent pricing and student-friendly services",
  },
];

function Page() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-[#8A0206] to-[#6A0104] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-auto max-w-7xl px-4">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smooth Transitions:
              <span className="relative">
                <span className="relative z-10"> Travel & Forex</span>
                {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white/80 leading-tight">
              Travel and Forex Support
            </p>
            <p className="text-lg text-white/80 max-w-xl">
              Embarking on your international education journey should be
              exciting - not overwhelming. Our Travel and Forex Assistance
              services are designed to take the stress out of your travel and
              financial preparations so you can focus on what really matters:
              your future.
            </p>
            <button className="text-[#8A0206] bg-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 hover:text-white transition-colors flex items-center gap-2">
              Free Expert Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex-1 absolute justify-center hidden lg:flex bottom-0 right-0">
            <Image
              src="/images/v0.png"
              alt="Professional travel and forex consultant"
              width={800}
              height={800}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Travel Assistance Section */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">
              Travel Assistance
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We help you plan and book your entire travel itinerary with care
              and precision. With years of experience in the education and
              travel industry, we have established strong partnerships with
              travel providers, allowing us to offer you the best deals and
              discounts.
            </p>
          </div>

          {travelAssistanceData.map((item, index) => (
            <div key={item.id} className="py-16">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Images Section */}
                <div
                  className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="grid grid-cols-2 gap-4 ">
                    <div className="rounded-3xl overflow-hidden transform rotate-[-5deg] shadow-xl">
                      <img
                        src={item.image1 || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-3xl overflow-hidden transform rotate-[5deg] shadow-xl">
                      <img
                        src={item.image2 || "/placeholder.svg"}
                        alt={item.title}
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
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h2 className="text-[#8A0206] text-3xl md:text-4xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forex Assistance Section */}
      <div className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">
              Forex Assistance
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Secure and hassle-free foreign exchange solutions. Whether you're
              exchanging currency for tuition fees, accommodation, or daily
              expenses, we'll help you secure the best rates and minimize
              unnecessary fees.
            </p>
          </div>

          {forexAssistanceData.map((item, index) => (
            <div key={item.id} className="py-16">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Images Section */}
                <div
                  className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl overflow-hidden transform rotate-[-5deg] shadow-xl">
                      <img
                        src={item.image1 || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-3xl overflow-hidden transform rotate-[5deg] shadow-xl">
                      <img
                        src={item.image2 || "/placeholder.svg"}
                        alt={item.title}
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
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h2 className="text-[#8A0206] text-3xl md:text-4xl font-semibold leading-tight">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {React.cloneElement(benefit.icon, {
                    className: "w-8 h-8 text-[#8A0206]",
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-red-50 p-8 rounded-xl">
            <p className="text-xl font-medium text-gray-800 italic">
              "Let us handle the logistics while you prepare for takeoff. With
              our Travel and Forex Assistance, you're never far from help—even
              thousands of miles away."
            </p>
          </div>

          <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
