import { Mail } from "lucide-react";
import React from "react";

export default function ContactSection() {
  const handleMessage = async (e: React.MouseEvent) => {
    e.preventDefault();
    await fetch("/api/sendNotification", {
      method: "POST",
      body: JSON.stringify({
        fcmToken: "USER_FCM_TOKEN",
        title: "Hello!",
        body: "This is a test notification.",
      }),
      headers: { "Content-Type": "application/json" },
    });
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
          </div>
          <form className="space-y-4">
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
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Your name"
              />
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
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="your@email.com"
              />
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
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={(e: React.MouseEvent) => handleMessage(e)}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
