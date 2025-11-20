'use client'

import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import Image from "next/image";

function CommunityForm() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Successfully subscribed! Thank you for joining our community.",
        });
        setEmail(""); // Clear the input
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to subscribe. Please try again.",
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear status when user starts typing again
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  return (
    <section className="w-full p-5">
      <div
        className="w-full overflow-hidden relative px-5 py-10 md:px-10 md:py-20 max-w-[1200px] mx-auto rounded-2xl"
        style={{
          backgroundImage: `url(${assets.images.field.src})`,
          backgroundSize: "cover",
          backgroundPositionY: "-300px",
        }}
      >
        <div className="absolute inset-0 bg-[#012D12] opacity-70"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-3">
          <div className="flex-1">
            <h1 className="text-white text-xl md:text-3xl font-semibold">
              Stay Fresh with Sumogo
            </h1>
            <p className="text-white">
              Join our community for product launches, healthy tips, and farmer
              stories.
            </p>
          </div>
          <div className="flex-1">
            <form
              className="p-2 md:p-3 backdrop-blur-md flex flex-col rounded-2xl gap-3 bg-white/10"
              onSubmit={handleSubmit}
            >
              <div className="bg-white rounded-full w-full flex items-center p-1 md:p-3 gap-3">
                <Image
                  src={assets.icons.mail}
                  width={20}
                  height={20}
                  alt="Email icon"
                  className="shrink-0"
                />
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full placeholder:text-[#A4A4A4] outline-none bg-transparent"
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                varient="green"
                className="px-3 rounded-full"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            {/* Status Message */}
            {status.message && (
              <div
                className={`mt-3 p-3 rounded-lg text-center text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityForm;
