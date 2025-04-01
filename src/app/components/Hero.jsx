import React from "react";

function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              The Best Platform To
              <br />
              Your Special Courses
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                Learn more
              </button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Student"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-yellow-400 rounded-full -z-10"></div>
            <div className="absolute -left-4 top-1/2 w-16 h-16 bg-blue-500 rounded-full -z-10"></div>
            <div className="absolute right-1/4 -top-4 w-24 h-24 bg-pink-400 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
