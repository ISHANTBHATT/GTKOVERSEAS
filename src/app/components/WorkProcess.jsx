// export default function WorkProcess() {
//   const steps = [
//     {
//       number: "01",
//       title: "Initial Consultation",
//       description:
//         "Begin with a personalized session to understand the student's academic background, career goals, and interests. This helps in determining the best countries, universities, and courses suited to their aspirations.",
//     },
//     {
//       number: "02",
//       title: "Research and Selection",
//       description:
//         "Provide a curated list of universities and programs that align with the student's objectives. Discuss each option's pros and cons, including location, cost, curriculum, and potential career opportunities.",
//     },
//     {
//       number: "03",
//       title: "Application Process",
//       description:
//         "Guide students through the application requirements for their chosen universities. This includes assistance with filling out forms, drafting personal statements or essays, and gathering necessary documents like transcripts and letters of recommendation.",
//     },
//     {
//       number: "04",
//       title: "Exam Preparation",
//       description:
//         "Offer resources and support for standardized tests such as the TOEFL, IELTS, GRE, or GMAT, depending on the student's destination and program requirements.",
//     },
//     // {
//     //   number: "05",
//     //   title: "Financial Planning",
//     //   description:
//     //     "Help students explore scholarships, grants, and financial aid options. Assist in creating a budget that covers tuition, living expenses, and travel costs.",
//     // },
//     // {
//     //   number: "06",
//     //   title: "Visa Application",
//     //   description:
//     //     "Provide step-by-step guidance on the visa application process, ensuring students understand the documentation required and any interviews they might need to attend.",
//     // },
//     // {
//     //   number: "07",
//     //   title: "Pre-Departure Orientation",
//     //   description:
//     //     "Conduct sessions to prepare students for their international journey. Topics can include cultural differences, accommodation arrangements, healthcare, and safety tips.",
//     // },
//     // {
//     //   number: "08",
//     //   title: "Career Counseling",
//     //   description:
//     //     "Provide advice on internships, part-time work opportunities, and post-graduation employment prospects to help students make the most of their international education experience.",
//     // },
//   ];

//   return (
//     <section className="relative w-full bg-white text-black py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 grid grid-cols-2 gap-4">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="bg-[#FFF5F2] text-white rounded-lg p-6 relative"
//               >
//                 <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
//                   <span className="text-2xl font-bold text-[#8A0206]">
//                     {step.number}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-[#8A0206]">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-700">{step.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Step-by-Step Guide to Student Success
//             </h2>
//             <p className="text-gray-700 mb-8">
//               By following these steps, study abroad consultancies can ensure a
//               smooth and successful journey for students embarking on their
//               educational adventures abroad.
//             </p>
//             <button className="bg-[#8A0206] hover:bg-[#9e3329] text-white rounded-full py-3 px-6 w-fit transition-all">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "Begin with a personalized session to understand the student's academic background, career goals, and interests. This helps in determining the best countries, universities, and courses suited to their aspirations.",
    },
    {
      number: "02",
      title: "Research and Selection",
      description:
        "Provide a curated list of universities and programs that align with the student's objectives. Discuss each option's pros and cons, including location, cost, curriculum, and potential career opportunities.",
    },
    {
      number: "03",
      title: "Application Process",
      description:
        "Guide students through the application requirements for their chosen universities. This includes assistance with filling out forms, drafting personal statements or essays, and gathering necessary documents like transcripts and letters of recommendation.",
    },
    {
      number: "04",
      title: "Exam Preparation",
      description:
        "Offer resources and support for standardized tests such as the TOEFL, IELTS, GRE, or GMAT, depending on the student's destination and program requirements.",
    },
  ];

  return (
    <section className="relative w-full bg-white text-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#FFF5F2] text-white rounded-lg p-6 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.1 + 0.2,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4"
                >
                  <span className="text-2xl font-bold text-[#8A0206]">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#8A0206]">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-xs md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Step-by-Step Guide to Student Success
            </h2>
            <p className="text-gray-700 mb-8">
              By following these steps, study abroad consultancies can ensure a
              smooth and successful journey for students embarking on their
              educational adventures abroad.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8A0206] hover:bg-[#9e3329] text-white rounded-full py-3 px-6 w-fit transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
