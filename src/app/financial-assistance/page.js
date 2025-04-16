import Image from "next/image";
import React from "react";
import StudyLoanInfo from "../components/study-loan-info";

function Page() {
  return (
    <div>
      <div className="container relative mx-auto px-4 py-12 md:py-36 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Financial
              <span className="relative">
                <span className="relative z-10"> Assistance</span>
                {/* <span className="absolute bottom-2 left-0 w-full h-3 bg-red-200 -rotate-1 z-0"></span> */}
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Expert guidance through your financial assistance process. We make
              immigration simple, efficient, and stress-free.
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
      <div className=" py-12">
        <div className="space-y-6">
          <p className="max-w-6xl mx-auto text-5xl font-bold">
            Financial Assistance
          </p>
          <p className="max-w-6xl items-center mx-auto">
            You can easily achieve your dream of studying abroad even if you
            have limited funds. Education loans for studying abroad can be a
            crucial part of your overall funding strategy. At Edwise, we provide
            you the opportunity to avail of an education loan for overseas
            studies that covers all aspects of higher education including
            college fees, cost of books and accommodation.
          </p>
          <p className="max-w-6xl items-center mx-auto">
            We partner with Nationalized & Co-Operative Banks that offer student
            loans for studying abroad at reasonable interest rates and we also
            have association with well-known financial institutions. We help you
            with the complete procedure for an overseas education loan, starting
            from selecting banks, producing the required documentation, meeting
            the eligibility criteria, interest rates and repayment period, etc.
            The whole process for securing a student education loan for study
            abroad is simplified and made easy with the help of Edwise’s
            expertise, backed by over three decades of industry experience.
          </p>
        </div>
        <StudyLoanInfo />
      </div>
    </div>
  );
}

export default Page;
