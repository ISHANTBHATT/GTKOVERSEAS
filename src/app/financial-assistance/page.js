// import Image from "next/image";
// import React from "react";
// import StudyLoanInfo from "../components/study-loan-info";

// function Page() {
//   return (
//     <div>
//       <div className="relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
//           <div className="flex-1 space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Financial
//               <span className="relative">
//                 <span className="relative z-10"> Assistance</span>
//                 {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl font-semibold text-gray-700 leading-tight">
//               Minimizing Financial Obstacles to Achieve Your Academic Goals
//             </p>
//             <p className="text-lg text-gray-600 max-w-xl">
//               Financing your international education can be a major concern, but
//               it doesn’t have to be a roadblock. Our dedicated team is here to
//               guide you through the various financial assistance options
//               available, ensuring your dream of studying abroad becomes a
//               reality.
//             </p>
//             <button className="bg-[#8A0206] text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors">
//               Free Expert Consultation
//             </button>
//           </div>

//           {/* Right Column - Hero Image */}
//           <div className="flex-1 absolute justify-center hidden lg:flex bottom-0 right-0">
//             <Image
//               src="/images/v0.png"
//               alt="Professional travel and forex consultant"
//               width={800}
//               height={800}
//               priority
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       <div className=" py-12">
//         <div className="space-y-6">
//           <p className="max-w-6xl mx-auto text-5xl font-bold">
//             Financial Assistance
//           </p>
//           <p className="max-w-6xl items-center mx-auto">
//             You can easily achieve your dream of studying abroad even if you
//             have limited funds. Education loans for studying abroad can be a
//             crucial part of your overall funding strategy. At Edwise, we provide
//             you the opportunity to avail of an education loan for overseas
//             studies that covers all aspects of higher education including
//             college fees, cost of books and accommodation.
//           </p>
//           <p className="max-w-6xl items-center mx-auto">
//             We partner with Nationalized & Co-Operative Banks that offer student
//             loans for studying abroad at reasonable interest rates and we also
//             have association with well-known financial institutions. We help you
//             with the complete procedure for an overseas education loan, starting
//             from selecting banks, producing the required documentation, meeting
//             the eligibility criteria, interest rates and repayment period, etc.
//             The whole process for securing a student education loan for study
//             abroad is simplified and made easy with the help of Edwise’s
//             expertise, backed by over three decades of industry experience.
//           </p>
//         </div>
//         <StudyLoanInfo />
//       </div>
//     </div>
//   );
// }

// export default Page;

import Image from "next/image";
import {
  GraduationCap,
  Landmark,
  Calculator,
  Award,
  Briefcase,
  FileText,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FinancialAssistancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-[#8A0206] to-[#6A0104] py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-[#B80308] opacity-20 blur-3xl"></div>
          <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-[#5A0103] opacity-20 blur-3xl"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Financial Assistance
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80 sm:text-xl">
            Minimizing Financial Obstacles to Achieve Your Academic Goals
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Financing your international education can be a major concern, but
            it doesn't have to be a roadblock. Our dedicated team is here to
            guide you through the various financial assistance options
            available, ensuring your dream of studying abroad becomes a reality.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8A0206] hover:bg-white/90"
          >
            Schedule a Financial Consultation
          </Button>
        </div>
      </section> */}

      <div className="relative px-4 py-12 md:py-36 bg-gradient-to-r from-[#8A0206] to-[#6A0104] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-auto max-w-7xl px-4">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Financial Assistance
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white/80 leading-tight">
              Minimizing Financial Obstacles to Achieve Your Academic Goals
            </p>
            <p className="text-lg text-white/80 max-w-xl">
              Financing your international education can be a major concern, but
              it doesn't have to be a roadblock. Our dedicated team is here to
              guide you through the various financial assistance options
              available, ensuring your dream of studying abroad becomes a
              reality.
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

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our comprehensive financial assistance services help you navigate
              the complexities of funding your international education.
            </p>
          </div>

          <Tabs defaultValue="scholarships" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="loans">Education Loans</TabsTrigger>
              <TabsTrigger value="planning">Financial Planning</TabsTrigger>
              <TabsTrigger value="grants">Grants</TabsTrigger>
              <TabsTrigger value="work">Part-Time Work</TabsTrigger>
              <TabsTrigger value="waivers">Fee Waivers</TabsTrigger>
            </TabsList>

            {financialServices.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-6">
                <Card className="py-0">
                  <CardHeader className="bg-gradient-to-r from-[#FDE8E8] to-[#FAD1D1] rounded-t-lg py-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FDE8E8] text-[#8A0206]">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p>{service.description}</p>
                    <div className="mt-6 space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-[#FDE8E8] p-1 text-[#8A0206]">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                          <p>{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pb-6">
                    <Button className="bg-[#8A0206] hover:bg-[#6A0104]">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#8A0206] to-[#6A0104] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ready to Explore Your Financial Options?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            From finding the right scholarships and securing education loans to
            planning your budget and exploring work opportunities, we ensure
            that financial obstacles are minimized, allowing you to focus on
            achieving your academic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#8A0206] hover:bg-white/90"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const financialServices = [
  {
    id: "scholarships",
    title: "Scholarship Guidance",
    shortDescription: "Find and apply for scholarships worldwide",
    icon: <Award className="h-6 w-6" />,
    description:
      "We help identify and apply for scholarships offered by universities, governments, and private organizations around the world. From merit-based to need-based scholarships, we match opportunities that suit your academic profile and background.",
    benefits: [
      "Personalized scholarship matching based on your profile",
      "Application assistance and document preparation",
      "Interview preparation for scholarship committees",
      "Access to exclusive scholarship databases",
      "Guidance on scholarship renewal requirements",
    ],
  },
  {
    id: "loans",
    title: "Education Loans",
    shortDescription: "Navigate the education loan process",
    icon: <Landmark className="h-6 w-6" />,
    description:
      "We assist you in navigating the education loan process, connecting you with trusted banks and financial institutions that offer competitive interest rates, flexible repayment terms, and quick approvals.",
    benefits: [
      "Comparison of loan options from multiple lenders",
      "Assistance with loan application documentation",
      "Guidance on collateral and guarantor requirements",
      "Information on interest rates and repayment terms",
      "Support throughout the loan approval process",
    ],
  },
  {
    id: "planning",
    title: "Financial Planning Assistance",
    shortDescription: "Develop a realistic budget for your studies",
    icon: <Calculator className="h-6 w-6" />,
    description:
      "Our counselors work with you and your family to develop a realistic budget, including tuition, living expenses, insurance, travel, and contingency funds—ensuring you're financially prepared throughout your studies.",
    benefits: [
      "Comprehensive budget planning for your entire program",
      "Cost of living analysis for different destinations",
      "Currency exchange and international money transfer advice",
      "Emergency fund planning and management",
      "Regular financial check-ins throughout your studies",
    ],
  },
  {
    id: "grants",
    title: "Grants and Fellowships",
    shortDescription: "Find specialized funding opportunities",
    icon: <GraduationCap className="h-6 w-6" />,
    description:
      "We provide information on specialized grants and fellowships for research, postgraduate studies, and specific fields of study, especially for destinations like the USA, UK, Canada, Australia, and Europe.",
    benefits: [
      "Field-specific grant opportunities for your area of study",
      "Research fellowship application assistance",
      "Guidance on proposal writing for grants",
      "Information on government-sponsored programs",
      "Post-doctoral and advanced degree funding options",
    ],
  },
  {
    id: "work",
    title: "Part-Time Work and Internships",
    shortDescription: "Explore work opportunities while studying",
    icon: <Briefcase className="h-6 w-6" />,
    description:
      "Get guidance on countries that allow international students to work part-time while studying. We also assist with internship placement opportunities that can help ease financial burdens and boost your resume.",
    benefits: [
      "Information on work regulations for international students",
      "On-campus employment opportunities guidance",
      "Internship placement assistance in your field",
      "Resume and interview preparation for part-time jobs",
      "Balancing work and study responsibilities advice",
    ],
  },
  {
    id: "waivers",
    title: "Application Fee Waivers",
    shortDescription: "Save money during the application process",
    icon: <FileText className="h-6 w-6" />,
    description:
      "We help you apply to institutions that offer application fee waivers or reduced costs, saving you money during the application process.",
    benefits: [
      "Identification of universities offering fee waivers",
      "Assistance with fee waiver request documentation",
      "Information on financial need-based application discounts",
      "Early application fee reduction opportunities",
      "Multiple application cost-saving strategies",
    ],
  },
];

const successStories = [
  {
    name: "Raj Patel",
    university: "University of Melbourne",
    assistance: "Scholarship + Part-time Work",
    testimonial:
      "With the scholarship guidance and part-time work advice, I was able to fund my entire Master's program without taking any loans.",
  },
  {
    name: "Elena Rodriguez",
    university: "McGill University",
    assistance: "Education Loan",
    testimonial:
      "The team helped me secure an education loan with favorable terms that made my dream of studying in Canada possible.",
  },
  {
    name: "David Kim",
    university: "ETH Zurich",
    assistance: "Research Grant",
    testimonial:
      "Thanks to the specialized grant they helped me find, I was able to pursue my research in Switzerland fully funded.",
  },
];
