"use client";

import { useState } from "react";
import {
  GraduationCap,
  DollarSign,
  UserCheck,
  Scale,
  Clock,
  Percent,
  Users,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function StudyLoanInfo() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1 text-emerald-600 bg-emerald-50 border-emerald-200"
        >
          Student Financial Guide
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
          Important Information About Study Loans
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Everything you need to know about eligibility, expenses, collateral,
          and repayment terms for educational loans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button
          onClick={() => setActiveTab("all")}
          className={`p-4 rounded-lg transition-all ${
            activeTab === "all"
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
        >
          All Information
        </button>
        <button
          onClick={() => setActiveTab("eligibility")}
          className={`p-4 rounded-lg transition-all ${
            activeTab === "eligibility"
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
        >
          Eligibility & Requirements
        </button>
        <button
          onClick={() => setActiveTab("financial")}
          className={`p-4 rounded-lg transition-all ${
            activeTab === "financial"
              ? "bg-emerald-600 text-white"
              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
          }`}
        >
          Financial Details
        </button>
      </div>

      {(activeTab === "all" || activeTab === "eligibility") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-xl text-slate-800">
                  Eligible Courses
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 mt-1"></div>
                  <span>
                    All recognized courses having employment prospects
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 mt-1"></div>
                  <span>
                    Graduation / Post Graduation / Diploma Courses /
                    Professional Courses
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-xl text-slate-800">
                  Eligibility
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-100 border border-blue-300 mt-1"></div>
                  <span>The applicant should be a resident of India</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-100 border border-blue-300 mt-1"></div>
                  <span>
                    He should have secured admission to a professional/technical
                    courses abroad
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 h-4 rounded-full bg-blue-100 border border-blue-300 mt-1"></div>
                  <span>Age of the student should be between 18-35 years</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {(activeTab === "all" || activeTab === "financial") && (
        <div className="grid grid-cols-1 gap-6 mb-8">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-xl text-slate-800">
                  Quantum Of Loan
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-50 rounded-lg text-purple-800 font-medium">
                Loans can be availed for amounts ranging from Rs 4 Lakh upto
                maximum amount of Rs 1.5 Crore
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Accordion type="single" collapsible className="w-full">
        {(activeTab === "all" || activeTab === "eligibility") && (
          <AccordionItem value="expenses">
            <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Expenses Which Constitute The Student Loan
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-slate-700 pl-7">
                <li className="list-disc">Air fare / Travel expenses</li>
                <li className="list-disc">Admission / Tuition Fees</li>
                <li className="list-disc">Boarding and Lodging expenses</li>
                <li className="list-disc">Books and Stationery expenses</li>
                <li className="list-disc">
                  Instruments/Equipments etc. required to complete the course
                </li>
                <li className="list-disc">
                  Examination / Library / Laboratory fee or any other expense
                  required to complete the course like study tours, project
                  work, thesis etc.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        )}

        {(activeTab === "all" || activeTab === "financial") && (
          <>
            <AccordionItem value="security">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Security / Collateral
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    Upto Rs.4 lakhs - No Security (Nationalized banks)
                  </li>
                  <li className="list-disc">
                    Above Rs.4 lakhs & upto Rs. 7.5 lakhs-Collateral in the form
                    of satisfactory third party guarantee (Blood Relative)
                  </li>
                  <li className="list-disc">
                    For loans above Rs.7.5 lakhs, one can deposit (Fixed Deposit
                    / LIC) 50 % of the required loan sanction amount as
                    collateral.
                  </li>
                  <li className="list-disc">
                    Above Rs.7.5 lakhs - Co-obligation of parents/guardian
                    together with tangible collateral security of suitable value
                    along with assignment of future income of the student for
                    payment of instalments.
                  </li>
                  <li className="list-disc">
                    Partial collateral is accepted by some financial
                    institutions and banks.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="acceptable-collateral">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Acceptable Collateral
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    Residential / Commercial property
                  </li>
                  <li className="list-disc">
                    Fixed Deposit of the total loan value with bank
                  </li>
                  <li className="list-disc">
                    NSC / LIC policies (Surrender Value taken into
                    consideration)
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="applicant">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Applicant And Co-Applicant
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    Documents should be executed both by the student &
                    parents/guardian as joint borrower.
                  </li>
                  <li className="list-disc">
                    The applicant is the student pursuing studies abroad.
                  </li>
                  <li className="list-disc">
                    A co-applicant could be the parent/guardian.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tenure">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Tenure
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    Repayment period will be 5-10 years.
                  </li>
                  <li className="list-disc">
                    Interest plus principal amount is to be paid every month
                    after the first disbursement made by few financial
                    institutions even if student has not yet traveled.
                  </li>
                  <li className="list-disc">
                    Repayment of the principal amount to commence from 6-12
                    months after the completion of the course or immediately
                    upon getting a job placement whichever is earlier.
                  </li>
                  <li className="list-disc">
                    Interest repayment is frozen in the moratorium period by few
                    banks.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="margin">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5" />
                  Margin
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    15% of the loan amount is borne by the student on loans
                    above Rs.4 Lakhs.
                  </li>
                  <li className="list-disc">
                    85% of the loan amount is sanctioned by the bank.
                  </li>
                  <li className="list-disc">
                    100% sanction is given by some financial institutions.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="co-applicant">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Who can be a co-applicant?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-slate-700 pl-7">
                  <li className="list-disc">
                    Any earning member in the family such as
                    Father/Mother/Brother/Sister/Spouse
                    <br />
                    OR
                  </li>
                  <li className="list-disc">
                    Father-in-law/
                    Mother-in-law/Sister-in-law/Brother-in-law/Paternal/Maternal
                    Uncle/Aunt
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tax">
              <AccordionTrigger className="text-lg font-medium text-slate-800 hover:text-emerald-600">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Tax Deduction
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 bg-amber-50 rounded-lg text-amber-800">
                  Students and or parents who borrow directly are eligible for
                  tax deductions as per the Income Tax Act under Section 80E.
                </div>
              </AccordionContent>
            </AccordionItem>
          </>
        )}
      </Accordion>

      <div className="mt-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Need More Information?
        </h3>
        <p className="text-slate-600 mb-4">
          Contact our financial advisors for personalized guidance on study
          loans and application process.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
}
