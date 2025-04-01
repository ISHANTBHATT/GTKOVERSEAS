import React from "react";

function Categories() {
  const categories = [
    { name: "Business", icon: "💼" },
    { name: "English", icon: "📚" },
    { name: "Finance", icon: "💰" },
    { name: "Content", icon: "✍️" },
    { name: "Development", icon: "💻" },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Explore Our Categories</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-full border-2 border-gray-200 hover:border-blue-500 transition duration-200 cursor-pointer"
            >
              <span className="text-4xl mb-4">{category.icon}</span>
              <h3 className="text-lg font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
