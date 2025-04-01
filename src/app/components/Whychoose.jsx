import React from "react";
// import {
//   UserGroupIcon,
//   ShieldCheckIcon,
//   AcademicCapIcon,
//   ChartBarIcon,
//   UserIcon,
//   ClockIcon,
// } from "@heroicons/react/24/outline";

function WhyChoose() {
  const features = [
    {
      //   icon: UserGroupIcon,
      title: "Experience",
      description:
        "All that matters is having more than 9+ years of experience in education consulting.",
    },
    {
      //   icon: ShieldCheckIcon,
      title: "Transparency",
      description:
        "Straight Talk is Good Business! Our services are our commitments to you.",
    },
    {
      //   icon: AcademicCapIcon,
      title: "Pastoral Care",
      description:
        "We look at the consultancy differently. We are highly ethical to take care of your problems.",
    },
    {
      //   icon: ChartBarIcon,
      title: "Authorized Agent",
      description:
        "Our excellent network with the Universities helps us to deliver supportive services.",
    },
    {
      //   icon: UserIcon,
      title: "Intelligency and skill",
      description:
        "Practical wisdom backed advice! Our success rate with visa applications.",
    },
    {
      //   icon: ClockIcon,
      title: "Long Term Relationship",
      description:
        "Our excellent network with the Universities helps us to deliver supportive services.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              {/* <feature.icon className="h-8 w-8 text-blue-500 mb-4" /> */}
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
