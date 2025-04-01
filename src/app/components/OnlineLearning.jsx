import React from "react";

function OnlineLearning() {
  const features = [
    {
      title: "Online Degree",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Short Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "Training From Experts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "1.5K+ Video Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              From Our Online Learning
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Student learning"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Student studying"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-500 rounded-full"></div>
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineLearning;
