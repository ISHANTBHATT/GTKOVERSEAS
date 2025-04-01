import React from "react";

function WhyDifferent() {
  const stats = [
    { label: "Satisfied Students", value: "70%" },
    { label: "Success Ratio", value: "80%" },
    { label: "Free Advice", value: "100%" },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Why we are <span className="text-orange-500">different</span>?
            </h2>
            <p className="text-xl mb-6">
              What makes us different makes us better.
            </p>
            <p className="text-gray-600 mb-8">
              We are distinctive in the quality of our services and stand out of
              the crowd. Unlike other consultancy firms in Bangladesh, we really
              care for our students. We always strive to give the best possible
              guidance and solutions that a student may require.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#FFA500"
                        strokeWidth="3"
                        strokeDasharray={`${parseInt(stat.value)} 100`}
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Student thinking"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDifferent;
