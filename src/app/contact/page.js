// "use client";
// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import axios from "axios";
// import data from "../components/data.js";
// // import { Toaster, toast } from "react-hot-toast";

// const initialFormData = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   destination: "",
//   course: "",
//   studyDate: "",
//   preferredYear: "",
//   consent: false,
// };

// function PAGE() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [loading, setLoading] = useState(false);
//   const [availableCourses, setAvailableCourses] = useState([]);
//   const [availableUniversities, setAvailableUniversities] = useState([]);

//   //   const handleChange = (e) => {
//   //     const { name, value, type } = e.target;
//   //     setFormData((prev) => ({
//   //       ...prev,
//   //       [name]: type === "checkbox" ? e.target.checked : value,
//   //     }));
//   //   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     if (name === "destination") {
//       // Find the selected country in data
//       const selectedCountry = data.find(
//         (country) => country.cn.toLowerCase() === value.toLowerCase()
//       );

//       if (selectedCountry) {
//         setAvailableCourses(selectedCountry.cr);
//         setAvailableUniversities(selectedCountry.un);
//       } else {
//         setAvailableCourses([]);
//         setAvailableUniversities([]);
//       }
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? e.target.checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post("", formData);
//       //   toast.success("Message sent successfully!");
//       setFormData(initialFormData);
//     } catch (error) {
//       //   toast.error("Failed to send message. Please try again.");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Get in Touch
//           </h1>
//           <p className="text-lg text-gray-600">
//             We&#39;d love to hear from you. Please fill out this form.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8">
//             <div className="space-y-8">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                 Contact Information
//               </h2>

//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Email</p>
//                   <p className="text-gray-900 font-medium">
//                     info@gtkoverseas.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Phone</p>
//                   <p className="text-gray-900 font-medium">011 49596950</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Address</p>
//                   <p className="text-gray-900 font-medium">
//                     F-25, Bhagat Singh Market, Gole Market, New Delhi-110001
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Study Destination
//                   </label>
//                   <select
//                     name="destination"
//                     value={formData.destination}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Select Destination</option>
//                     {data.map((country, index) => (
//                       <option key={index} value={country.cn}>
//                         {country.cn}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Course
//                   </label>
//                   <input
//                     type="text"
//                     name="course"
//                     value={formData.course}
//                     onChange={handleChange}
//                     list="course-suggestions"
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                   <datalist id="course-suggestions">
//                     {availableCourses.map((course, index) => (
//                       <option key={index} value={course} />
//                     ))}
//                   </datalist>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     When do you plan to study?
//                   </label>
//                   <select
//                     name="studyDate"
//                     value={formData.studyDate}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Please Select</option>
//                     <option value="immediate">Immediately</option>
//                     <option value="3months">Within 3 months</option>
//                     <option value="6months">Within 6 months</option>
//                     <option value="1year">Within 1 year</option>
//                   </select>
//                 </div>

//                 {/* <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Preferred Year
//                   </label>
//                   <select
//                     name="preferredYear"
//                     value={formData.preferredYear}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Select Year</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                   </select>
//                 </div> */}
//                 {/* Add this after the Course input */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     University (optional)
//                   </label>
//                   <input
//                     type="text"
//                     name="university"
//                     value={formData.university}
//                     onChange={handleChange}
//                     list="university-suggestions"
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                   />
//                   <datalist id="university-suggestions">
//                     {availableUniversities.map((uni, index) => {
//                       const universityName = uni
//                         .split(",")[0]
//                         .replace(/^\d+\.\s*/, "");
//                       return <option key={index} value={universityName} />;
//                     })}
//                   </datalist>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   checked={formData.consent}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 p-3 h-4 w-4 rounded border-gray-300 text-[#8A0206] focus:ring-red-500"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700">
//                   I consent to receiving calls, WhatsApp, email from GTK
//                   Overseas to assist with this enquiry.
//                 </label>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8A0206] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
//                 >
//                   {loading ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Submit
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* <Toaster position="top-right" /> */}
//     </div>
//   );
// }

// export default PAGE;

//current code
// "use client";
// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import axios from "axios";
// import data from "../components/data.js";
// // import { Toaster, toast } from "react-hot-toast";

// const initialFormData = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   destination: "",
//   course: "",
//   studyDate: "",
//   preferredYear: "",
//   consent: false,
// };

// function PAGE() {
//   const [formData, setFormData] = useState(initialFormData);
//   const [loading, setLoading] = useState(false);
//   const [availableCourses, setAvailableCourses] = useState([]);
//   const [availableUniversities, setAvailableUniversities] = useState([]);

//   //   const handleChange = (e) => {
//   //     const { name, value, type } = e.target;
//   //     setFormData((prev) => ({
//   //       ...prev,
//   //       [name]: type === "checkbox" ? e.target.checked : value,
//   //     }));
//   //   };

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     if (name === "destination") {
//       const selectedCountry = data.find(
//         (c) => c.country.toLowerCase() === value.toLowerCase()
//       );

//       if (selectedCountry) {
//         const unis = selectedCountry.universities;
//         const uniNames = Object.keys(unis);
//         setAvailableUniversities(uniNames);

//         // Collect all courses (master + bachelors) across universities in this country
//         const courseSet = new Set();
//         uniNames.forEach((uniName) => {
//           const { master = {}, bachelors = {} } = unis[uniName];
//           Object.keys(master).forEach((c) => courseSet.add(c));
//           Object.keys(bachelors).forEach((c) => courseSet.add(c));
//         });
//         setAvailableCourses(Array.from(courseSet));
//       } else {
//         setAvailableUniversities([]);
//         setAvailableCourses([]);
//       }
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? e.target.checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post("", formData);
//       //   toast.success("Message sent successfully!");
//       setFormData(initialFormData);
//     } catch (error) {
//       //   toast.error("Failed to send message. Please try again.");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Get in Touch
//           </h1>
//           <p className="text-lg text-gray-600">
//             We&#39;d love to hear from you. Please fill out this form.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8">
//             <div className="space-y-8">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                 Contact Information
//               </h2>

//               <div className="flex items-center space-x-4">
//                 <Mail className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Email</p>
//                   <p className="text-gray-900 font-medium">
//                     info@gtkoverseas.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <Phone className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Phone</p>
//                   <p className="text-gray-900 font-medium">011 49596950</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <MapPin className="w-6 h-6 text-[#8A0206]" />
//                 <div>
//                   <p className="text-gray-600">Address</p>
//                   <p className="text-gray-900 font-medium">
//                     F-25, Bhagat Singh Market, Gole Market, New Delhi-110001
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Study Destination
//                   </label>
//                   <select
//                     name="destination"
//                     value={formData.destination}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Select Destination</option>
//                     {data.map((c, i) => (
//                       <option key={i} value={c.country}>
//                         {c.country}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Course
//                   </label>
//                   <input
//                     type="text"
//                     name="course"
//                     value={formData.course}
//                     onChange={handleChange}
//                     list="course-suggestions"
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   />
//                   <datalist id="course-suggestions">
//                     {availableCourses.map((c, i) => (
//                       <option key={i} value={c} />
//                     ))}
//                   </datalist>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     When do you plan to study?
//                   </label>
//                   <select
//                     name="studyDate"
//                     value={formData.studyDate}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Please Select</option>
//                     <option value="immediate">Immediately</option>
//                     <option value="3months">Within 3 months</option>
//                     <option value="6months">Within 6 months</option>
//                     <option value="1year">Within 1 year</option>
//                   </select>
//                 </div>

//                 {/* <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Preferred Year
//                   </label>
//                   <select
//                     name="preferredYear"
//                     value={formData.preferredYear}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   >
//                     <option value="">Select Year</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                   </select>
//                 </div> */}
//                 {/* Add this after the Course input */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     University (optional)
//                   </label>
//                   <input
//                     type="text"
//                     name="university"
//                     value={formData.university}
//                     onChange={handleChange}
//                     list="university-suggestions"
//                     className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                   />
//                   <datalist id="university-suggestions">
//                     {availableUniversities.map((u, i) => (
//                       <option key={i} value={u} />
//                     ))}
//                   </datalist>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   checked={formData.consent}
//                   onChange={handleChange}
//                   required
//                   className="mt-1 p-3 h-4 w-4 rounded border-gray-300 text-[#8A0206] focus:ring-red-500"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700">
//                   I consent to receiving calls, WhatsApp, email from GTK
//                   Overseas to assist with this enquiry.
//                 </label>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8A0206] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
//                 >
//                   {loading ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 mr-2" />
//                       Submit
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* <Toaster position="top-right" /> */}
//     </div>
//   );
// }

// export default PAGE;

"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios";
import data from "../components/data.js";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  destination: "",
  level: "", // masters or bachelors
  course: "",
  studyDate: "",
  preferredYear: "",
  university: "",
  location: "",
  consent: false,
};

function PAGE() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [availableUniversities, setAvailableUniversities] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // When changing destination or level, recalculate courses
    if (name === "destination" || name === "level") {
      const countryObj = data.find(
        (c) =>
          c.country.toLowerCase() ===
          (name === "destination"
            ? value.toLowerCase()
            : formData.destination.toLowerCase())
      );
      if (countryObj) {
        // Universities list always all keys
        const uniNames = Object.keys(countryObj.universities);
        setAvailableUniversities(uniNames);

        // Filter courses by selected level
        const lvl = name === "level" ? value : formData.level;
        const courseSet = new Set();
        uniNames.forEach((uniName) => {
          const levelData = countryObj.universities[uniName][lvl] || {};
          Object.keys(levelData).forEach((c) => courseSet.add(c));
        });
        setAvailableCourses(Array.from(courseSet));
      } else {
        setAvailableUniversities([]);
        setAvailableCourses([]);
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
      await axios.post("/api/contact", formData);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We&#39;d love to hear from you. Please fill out this form.
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
                    info@gtkoverseas.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#8A0206]" />
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-900 font-medium">011 49596950</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#8A0206]" />
                <div>
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-900 font-medium">
                    F-25, Bhagat Singh Market, Gole Market, New Delhi-110001
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
                    {data.map((c, i) => (
                      <option key={i} value={c.country}>
                        {c.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  {/* <div className="mt-1 flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value="master"
                        checked={formData.level === "master"}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      Masters
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value="bachelors"
                        checked={formData.level === "bachelors"}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      Bachelors
                    </label>
                  </div> */}
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Destination</option>
                    <option value="master">Masters</option>
                    <option value="bachelors">Bachelors</option>
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
                    {availableCourses.map((c, i) => (
                      <option key={i} value={c} />
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
                    <option value="immediate">January</option>
                    <option value="3months">April</option>
                    <option value="6months">September</option>
                  </select>
                </div>
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
                    {availableUniversities.map((u, i) => (
                      <option key={i} value={u} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Our Office
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Select Destination</option>
                    <option value="new delhi">New Delhi</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                  </select>
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

      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Office Locations
          </h2>
          <p className="text-lg text-gray-600">
            Visit us at any of our convenient locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* New Delhi Office */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-[#8A0206] mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">New Delhi</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                F-25, Bhagat Singh Market, Gole Market, New Delhi-110001
              </p>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">011 49596950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">delhi@gtkoverseas.com</span>
              </div>
            </div>
          </div>

          {/* Punjab Office */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-[#8A0206] mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Punjab</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                SCO 45-46, Second Floor, Sector 34-A, Chandigarh-160022
              </p>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">0172 4646464</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">punjab@gtkoverseas.com</span>
              </div>
            </div>
          </div>

          {/* Rajasthan Office */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-[#8A0206] mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Rajasthan</h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600">
                301, Third Floor, Apex Tower, Lal Kothi, Jaipur-302015
              </p>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">0141 4040404</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#8A0206] mr-2" />
                <span className="text-gray-700">rajasthan@gtkoverseas.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Head Office Map */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Our Head Office
          </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of New Delhi
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.2351422273291!2d77.20754403890655!3d28.6330060182386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02338c6aab47%3A0xb95bdf13d1b9912!2sGTK%20Group%20INC!5e0!3m2!1sen!2sin!4v1748334243033!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GTK Overseas Head Office Location"
            ></iframe>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Head Office
                </h3>
                <p className="text-gray-600">
                  F-25, Bhagat Singh Market, Gole Market, New Delhi-110001
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Business Hours</p>
                <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Toaster position="top-right" /> */}
    </div>
  );
}

export default PAGE;
