"use client";
import { assets } from "@/assets/assets";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Message sent successfully! We will get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  // Contact information with active links
  const contactInfo = [
    {
      icon: assets.icons.mails.src,
      alt: "email",
      title: "Email address",
      detail: "info@sumogo.com",
      href: "mailto:info@sumogo.com",
      description: "Send us an email",
    },
    {
      icon: assets.icons.call.src,
      alt: "phone",
      title: "Phone",
      detail: "+234-8130-4669-95",
      href: "tel:+2348130466995",
      description: "Call us directly",
    },
    {
      icon: assets.icons.location.src,
      alt: "location",
      title: "Office Address",
      detail: "Idu Industrial Layout, Citec, Abuja",
      href: "https://maps.google.com/?q=Idu+Industrial+Layout,Citec,Abuja,Nigeria",
      description: "View on Google Maps",
    },
  ];

  return (
    <>
      <div
        className="min-h-[500px] p-6 pt-10 w-full bg-[#012D12] flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.images.map.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full px-3">
          <div className="text-center flex flex-col justify-center items-center ">
            <Button className="py-3 px-3 h-6 flex items-center justify-center">
              Partner with us
            </Button>
            <h1 className="font-bold text-white text-2xl md:text-4xl mt-3">
              Contact / Partner <span className="text-[#04AA42]">With Us</span>
            </h1>
            <p className="text-white max-w-[800px] mt-6">
              {`Let's grow together. Whether you're a distributor, importer, retailer, or investor, Sumogo is your trusted link to Africa's thriving fresh and processed agro-export sector.`}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-between items-center w-full max-w-[1000px] mt-8 mx-auto px-3">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={
                  item.href.includes("maps.google.com") ? "_blank" : "_self"
                }
                rel={
                  item.href.includes("maps.google.com")
                    ? "noopener noreferrer"
                    : ""
                }
                className="flex flex-col justify-center items-center group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0d3a26] bg-opacity-60 backdrop-blur-sm border border-white/30 group-hover:bg-[#0f452c] group-hover:bg-opacity-80 transition-colors">
                  <Image
                    width={30}
                    height={30}
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>
                <div className="text-center mt-3 text-white">
                  <h1 className="font-medium text-sm">{item.title}</h1>
                  <p className="text-sm mt-1 group-hover:text-[#04AA42] transition-colors">
                    {item.detail}
                  </p>
                  <p className="text-xs text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col items-center py-16 px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#002E12] text-center">
          Send Us a Message
        </h2>
        <p className="text-[#474747] mt-2 text-center">
          We are going to get back to you within 24 hours
        </p>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mt-6 w-full max-w-3xl p-4 rounded-lg text-center ${
              status.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Form container */}
        <div className="mt-10 w-full max-w-3xl bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  disabled={isLoading}
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#414141] outline-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  disabled={isLoading}
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#414141] outline-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  disabled={isLoading}
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#414141] outline-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  disabled={isLoading}
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#414141] outline-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[#414141]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                disabled={isLoading}
                className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#414141] outline-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#414141]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter message"
                disabled={isLoading}
                className="mt-1 w-full rounded-xl border border-gray-200 py-3 px-4 text-[#414141] outline-none resize-none focus:ring-2 focus:ring-green-600/50 disabled:opacity-50"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white font-medium py-3 rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
