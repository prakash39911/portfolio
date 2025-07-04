"use client";

import { sendMail } from "@/app/actions/mailActions";
import {
  contactFormSchema,
  contactFormSchemaType,
} from "@/lib/schema/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GithubIcon, LucideLinkedin, Mail } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const actualSubmit = async (data: contactFormSchemaType) => {
    setisLoading(true);
    try {
      const result = await sendMail(data);

      if (!result || result?.status === "error")
        throw new Error("Message is not sent! Please try again");

      setIsSuccess(true);
      reset();
      setTimeout(() => {
        setIsSuccess(false);
      }, 8000);
    } catch (error) {
      console.log("Error while sending message", error);
      setIsError("Unable to Send Message.. Please try again..");
      setTimeout(() => {
        setIsError(null);
      }, 5000);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:john@example.com"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>prakash39911@gmail.com</span>
              </a>
            </div>
            <div className="space-y-5 flex items-center gap-3 text-gray-300">
              <span className="mt-[17px]">
                <LucideLinkedin size={20} />
              </span>
              <a
                href="https://www.linkedin.com/in/chandra-prakash-132094328"
                target="_blank"
                className="text-blue-400"
              >
                LinkedIn
              </a>
            </div>
            <div className="space-y-5 flex items-center gap-3 text-gray-300">
              <span className="mt-[19px]">
                <GithubIcon size={20} />
              </span>
              <a
                href="https://github.com/prakash39911"
                target="_blank"
                className="text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(actualSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Your name"
              />
              {errors.name && (
                <div className="text-red-600">{errors.name.message}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="text-red-600">{errors.email.message}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <div className="text-red-600">{errors.message.message}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isLoading ? "Processing...Please Wait" : "Send message"}
            </button>
            {isError && (
              <div className="text-xl text-red-500 font-semibold">
                {isError}
              </div>
            )}
            {isSuccess && (
              <div className="text-xl text-gray-300 font-semibold">
                You message is received Successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
