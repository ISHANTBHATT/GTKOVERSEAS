// import Image from "next/image";
// import { Check, BookOpen, Award, BarChart, GraduationCap } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export default function TestPreparationPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 py-20 text-white">
//         <div className="absolute inset-0 overflow-hidden">
//           {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
//           <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
//           <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
//         </div>
//         <div className="container relative mx-auto px-4 text-center">
//           <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
//             Test Preparation
//           </Badge>
//           <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
//             Get Test-Ready for a World of Opportunities
//           </h1>
//           <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80 sm:text-xl">
//             Planning to study abroad? Success starts with strong test scores. We
//             provide expert-led test preparation tailored for the most in-demand
//             exams required by top international universities.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button
//               size="lg"
//               className="bg-white text-purple-700 hover:bg-white/90"
//             >
//               Schedule a Free Consultation
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white/10"
//             >
//               Explore Our Programs
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Tests We Cover Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
//               Tests We Cover
//             </h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               We offer comprehensive preparation for all major international
//               exams required by top universities worldwide.
//             </p>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-20">
//             {tests.map((test, index) => (
//               <Card
//                 key={index}
//                 className="overflow-hidden transition-all hover:shadow-lg py-0"
//               >
//                 <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 py-6 ">
//                   <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
//                     {test.icon}
//                   </div>
//                   <CardTitle className="text-xl">{test.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="py-6">
//                   <CardDescription className="text-base">
//                     {test.description}
//                   </CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-slate-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
//               Why Choose Us
//             </h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               Our proven methodology and expert instructors ensure you achieve
//               your target scores.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex gap-4">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
//                   <Check className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="mb-2 text-xl font-medium">{benefit.title}</h3>
//                   <p className="text-muted-foreground">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
//               Success Stories
//             </h2>
//             <p className="mx-auto max-w-2xl text-muted-foreground">
//               Our students consistently achieve their target scores and gain
//               admission to top universities worldwide.
//             </p>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {successStories.map((story, index) => (
//               <Card key={index} className="overflow-hidden">
//                 <CardContent className="p-6">
//                   <div className="mb-4 flex items-center gap-4">
//                     <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                       <Image
//                         src={`/placeholder.svg?height=48&width=48&text=${story.name.charAt(
//                           0
//                         )}`}
//                         alt={story.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-medium">{story.name}</h3>
//                       <p className="text-sm text-muted-foreground">
//                         {story.university}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="italic text-muted-foreground">
//                     "{story.testimonial}"
//                   </p>
//                   <div className="mt-4 flex items-center gap-2">
//                     <Badge variant="outline" className="bg-purple-50">
//                       {story.test}
//                     </Badge>
//                     <Badge variant="outline" className="bg-purple-50">
//                       Score: {story.score}
//                     </Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-16 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
//             Score High. Study Anywhere.
//           </h2>
//           <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
//             Whether you're aiming for Ivy League universities or global tech
//             schools, we help you build the foundation for success with
//             comprehensive test prep and ongoing guidance.
//           </p>
//           <Button
//             size="lg"
//             className="bg-white text-purple-700 hover:bg-white/90"
//           >
//             Start Your Journey Today
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }

// const tests = [
//   {
//     name: "IELTS",
//     description:
//       "Master English proficiency for UK, Australia, Canada & more with our comprehensive IELTS preparation.",
//     icon: <BookOpen className="h-6 w-6 text-purple-700" />,
//   },
//   {
//     name: "TOEFL",
//     description:
//       "Boost your score for U.S. and global institutions with our specialized TOEFL coaching.",
//     icon: <GraduationCap className="h-6 w-6 text-purple-700" />,
//   },
//   {
//     name: "PTE",
//     description:
//       "Fast, computer-based testing for English fluency with personalized PTE preparation.",
//     icon: <Award className="h-6 w-6 text-purple-700" />,
//   },
//   {
//     name: "GRE",
//     description:
//       "Get into top graduate schools with powerful quantitative & verbal prep for the GRE.",
//     icon: <BarChart className="h-6 w-6 text-purple-700" />,
//   },
//   {
//     name: "GMAT",
//     description:
//       "Crack the business school code with expert coaching tailored for GMAT success.",
//     icon: <Award className="h-6 w-6 text-purple-700" />,
//   },
//   {
//     name: "SAT/ACT",
//     description:
//       "Aim high for U.S. undergraduate admissions with our comprehensive SAT/ACT preparation.",
//     icon: <GraduationCap className="h-6 w-6 text-purple-700" />,
//   },
// ];

// const benefits = [
//   {
//     title: "Customized Study Plans",
//     description:
//       "Personalized study plans based on your strengths & target score to maximize your preparation.",
//   },
//   {
//     title: "Expert Trainers",
//     description:
//       "Live and recorded sessions with certified trainers who specialize in each exam.",
//   },
//   {
//     title: "Realistic Mock Tests",
//     description:
//       "Practice with realistic mock tests and get detailed performance tracking and analysis.",
//   },
//   {
//     title: "Test-Taking Strategies",
//     description:
//       "Learn proven test-taking strategies and time management tips to boost your score.",
//   },
//   {
//     title: "Flexible Schedules",
//     description:
//       "Choose between online or in-person sessions that fit your schedule and learning style.",
//   },
//   {
//     title: "Comprehensive Materials",
//     description:
//       "Access to extensive study materials, practice questions, and resources for thorough preparation.",
//   },
// ];

// const successStories = [
//   {
//     name: "Sarah Johnson",
//     university: "University of Oxford",
//     test: "IELTS",
//     score: "8.5",
//     testimonial:
//       "The customized study plan and mock tests helped me achieve my target score and secure admission to Oxford.",
//   },
//   {
//     name: "Michael Chen",
//     university: "Stanford University",
//     test: "GRE",
//     score: "335",
//     testimonial:
//       "The quantitative strategies I learned were invaluable. I exceeded my target score and got into my dream program.",
//   },
//   {
//     name: "Priya Sharma",
//     university: "University of Toronto",
//     test: "TOEFL",
//     score: "115",
//     testimonial:
//       "The instructors were incredibly supportive and the practice sessions boosted my confidence tremendously.",
//   },
// ];

import Image from "next/image";
import {
  Check,
  BookOpen,
  Award,
  BarChart,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestPreparationPage() {
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
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Test Preparation
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Get Test-Ready for a World of Opportunities
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/80 sm:text-xl">
            Planning to study abroad? Success starts with strong test scores. We
            provide expert-led test preparation tailored for the most in-demand
            exams required by top international universities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#8A0206] hover:bg-white/90"
            >
              Schedule a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section> */}

      <div className="relative  px-4 py-12 md:py-36 bg-gradient-to-r from-[#8A0206] to-[#6A0104] text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-auto max-w-7xl px-4">
          <div className="flex-1 space-y-6">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 py-1">
              Test Preparation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold  leading-tight">
              Get Test-Ready for a
              <br />
              World of Opportunities
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              Planning to study abroad? Success starts with strong test scores.
              We provide expert-led test preparation tailored for the most
              in-demand exams required by top international universities.
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

      {/* Tests We Cover Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tests We Cover
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer comprehensive preparation for all major international
              exams required by top universities worldwide.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:px-20">
            {tests.map((test, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all hover:shadow-lg py-0"
              >
                <CardHeader className="bg-gradient-to-br from-[#8A0206] to-[#B33A2F] py-6">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FEF4EF]">
                    <div className="text-[#8A0206]">{test.icon}</div>
                  </div>
                  <CardTitle className="text-xl text-white">
                    {test.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">
                    {test.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our proven methodology and expert instructors ensure you achieve
              your target scores.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FDE8E8] text-[#8A0206]">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our students consistently achieve their target scores and gain
              admission to top universities worldwide.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {story.university}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    &quot;{story.testimonial}&quot;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-purple-50">
                      {story.test}
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50">
                      Score: {story.score}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#8A0206] to-[#6A0104] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Score High. Study Anywhere.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Whether you&apos;re aiming for Ivy League universities or global
            tech schools, we help you build the foundation for success with
            comprehensive test prep and ongoing guidance.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8A0206] hover:bg-white/90"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </div>
  );
}

const tests = [
  {
    name: "IELTS",
    description:
      "Master English proficiency for UK, Australia, Canada & more with our comprehensive IELTS preparation.",
    icon: <BookOpen className="h-6 w-6 text-[#8A0206]" />,
  },
  {
    name: "TOEFL",
    description:
      "Boost your score for U.S. and global institutions with our specialized TOEFL coaching.",
    icon: <GraduationCap className="h-6 w-6 text-[#8A0206]" />,
  },
  {
    name: "PTE",
    description:
      "Fast, computer-based testing for English fluency with personalized PTE preparation.",
    icon: <Award className="h-6 w-6 text-[#8A0206]" />,
  },
  {
    name: "GRE",
    description:
      "Get into top graduate schools with powerful quantitative & verbal prep for the GRE.",
    icon: <BarChart className="h-6 w-6 text-[#8A0206]" />,
  },
  {
    name: "GMAT",
    description:
      "Crack the business school code with expert coaching tailored for GMAT success.",
    icon: <Award className="h-6 w-6 text-[#8A0206]" />,
  },
  {
    name: "SAT/ACT",
    description:
      "Aim high for U.S. undergraduate admissions with our comprehensive SAT/ACT preparation.",
    icon: <GraduationCap className="h-6 w-6 text-[#8A0206]" />,
  },
];

const benefits = [
  {
    title: "Customized Study Plans",
    description:
      "Personalized study plans based on your strengths & target score to maximize your preparation.",
  },
  {
    title: "Expert Trainers",
    description:
      "Live and recorded sessions with certified trainers who specialize in each exam.",
  },
  {
    title: "Realistic Mock Tests",
    description:
      "Practice with realistic mock tests and get detailed performance tracking and analysis.",
  },
  {
    title: "Test-Taking Strategies",
    description:
      "Learn proven test-taking strategies and time management tips to boost your score.",
  },
  {
    title: "Flexible Schedules",
    description:
      "Choose between online or in-person sessions that fit your schedule and learning style.",
  },
  {
    title: "Comprehensive Materials",
    description:
      "Access to extensive study materials, practice questions, and resources for thorough preparation.",
  },
];

const successStories = [
  {
    name: "Sarah Johnson",
    university: "University of Oxford",
    image: "/images/profile1.jpg",
    test: "IELTS",
    score: "8.5",
    testimonial:
      "The customized study plan and mock tests helped me achieve my target score and secure admission to Oxford.",
  },
  {
    name: "Michael Chen",
    university: "Stanford University",
    image: "/images/profile2.jpg",
    test: "GRE",
    score: "335",
    testimonial:
      "The quantitative strategies I learned were invaluable. I exceeded my target score and got into my dream program.",
  },
  {
    name: "Priya Sharma",
    university: "University of Toronto",
    image: "/images/profile3.jpg",
    test: "TOEFL",
    score: "115",
    testimonial:
      "The instructors were incredibly supportive and the practice sessions boosted my confidence tremendously.",
  },
];
