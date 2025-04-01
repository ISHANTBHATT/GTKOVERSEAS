import React from "react";

function Inquiry() {
  return (
    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">General Inquiry</h2>
      <p className="text-gray-600 mb-6">
        If you wish to make a query, please complete the form below and submit.
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Enter Your Message Here"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
        >
          Send Us
        </button>
      </form>
    </div>
  );
}

export default Inquiry;
