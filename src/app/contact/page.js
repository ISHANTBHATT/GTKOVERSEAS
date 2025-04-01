"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios";
import data from "../components/data.js";
// import { Toaster, toast } from "react-hot-toast";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  destination: "",
  course: "",
  studyDate: "",
  preferredYear: "",
  consent: false,
};

function PAGE() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [availableUniversities, setAvailableUniversities] = useState([]);

  //   const handleChange = (e) => {
  //     const { name, value, type } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: type === "checkbox" ? e.target.checked : value,
  //     }));
  //   };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "destination") {
      // Find the selected country in data
      const selectedCountry = data.find(
        (country) => country.cn.toLowerCase() === value.toLowerCase()
      );

      if (selectedCountry) {
        setAvailableCourses(selectedCountry.cr);
        setAvailableUniversities(selectedCountry.un);
      } else {
        setAvailableCourses([]);
        setAvailableUniversities([]);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("", formData);
      //   toast.success("Message sent successfully!");
      setFormData(initialFormData);
    } catch (error) {
      //   toast.error("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#8A0206]" />
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">
                    contact@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#8A0206]" />
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-900 font-medium">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#8A0206]" />
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-900 font-medium">
                    123 Education Street, Learning City, ED 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Study Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Destination</option>
                    {data.map((country, index) => (
                      <option key={index} value={country.cn}>
                        {country.cn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    list="course-suggestions"
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <datalist id="course-suggestions">
                    {availableCourses.map((course, index) => (
                      <option key={index} value={course} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    When do you plan to study?
                  </label>
                  <select
                    name="studyDate"
                    value={formData.studyDate}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="immediate">Immediately</option>
                    <option value="3months">Within 3 months</option>
                    <option value="6months">Within 6 months</option>
                    <option value="1year">Within 1 year</option>
                  </select>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Year
                  </label>
                  <select
                    name="preferredYear"
                    value={formData.preferredYear}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div> */}
                {/* Add this after the Course input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    University (optional)
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    list="university-suggestions"
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                  />
                  <datalist id="university-suggestions">
                    {availableUniversities.map((uni, index) => {
                      const universityName = uni
                        .split(",")[0]
                        .replace(/^\d+\.\s*/, "");
                      return <option key={index} value={universityName} />;
                    })}
                  </datalist>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 h-4 w-4 rounded border-gray-300 text-[#8A0206] focus:ring-red-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I consent to receiving calls, WhatsApp, email from GTK
                  Overseas to assist with this enquiry.
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8A0206] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Toaster position="top-right" /> */}
    </div>
  );
}

export default PAGE;
