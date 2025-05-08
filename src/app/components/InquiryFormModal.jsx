"use client";

import React from "react";

import { useState, useEffect } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InquiryFormModal({
  isOpen,
  onClose,
  courseData,
  degreeType,
  destinations,
}) {
  // Initial form state
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: courseData?.country || "",
    level: degreeType || "master",
    course: courseData?.name || "",
    university: courseData?.university || "",
    studyDate: "",
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Update form data when courseData changes
  useEffect(() => {
    if (courseData) {
      setFormData((prev) => ({
        ...prev,
        destination: courseData.country || prev.destination,
        course: courseData.name || prev.course,
        university: courseData.university || prev.university,
        level: degreeType || prev.level,
      }));
    }
  }, [courseData, degreeType]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      consent: checked,
    }));
  };

  // Handle select change
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      // Reset form after successful submission
      setFormData(initialFormData);

      // Close the modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Request Information
          </DialogTitle>
          <DialogDescription>
            Fill out this form to get more details about this course and speak
            with a counselor.
          </DialogDescription>
        </DialogHeader>

        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {success ? (
          <div className="p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Inquiry Submitted Successfully!
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for your interest. One of our counselors will contact
              you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Study Destination</Label>
                <Select
                  value={formData.destination}
                  onValueChange={(value) =>
                    handleSelectChange("destination", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((dest, i) => (
                      <SelectItem
                        key={i}
                        value={dest.country}
                        className="w-full"
                      >
                        {dest.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">Degree</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => handleSelectChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="master">Master's</SelectItem>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="studyDate">When do you plan to study?</Label>
                <Select
                  value={formData.studyDate}
                  onValueChange={(value) =>
                    handleSelectChange("studyDate", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="6months">Within 6 months</SelectItem>
                    <SelectItem value="1year">Within 1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label htmlFor="consent" className="text-sm font-normal">
                I consent to receiving calls, WhatsApp, email from GTK Overseas
                to assist with this enquiry.
              </Label>
            </div>

            {error && (
              <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#8A0206] hover:bg-red-800"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
