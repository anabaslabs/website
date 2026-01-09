"use client";

import type React from "react";
import { useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      href: "https://www.instagram.com/anabaslabs",
      color: "hover:text-[#e4405f]",
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/anabaslabs",
      color: "hover:text-[#6e5494]",
    },
    {
      name: "X",
      icon: IconBrandX,
      href: "https://x.com/anabaslabs",
      color: "hover:text-[#1da1f2]",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/company/anabaslabs",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "YouTube",
      icon: IconBrandYoutube,
      href: "https://www.youtube.com/@anabaslabs",
      color: "hover:text-[#ff0000]",
    },
  ];

  const contactInfo = [
    {
      icon: IconMail,
      label: "General inquiries",
      value: "hello@anabaslabs.com",
      href: "mailto:hello@anabaslabs.com",
    },
    {
      icon: IconMail,
      label: "Business inquiries",
      value: "contact@anabaslabs.com",
      href: "mailto:contact@anabaslabs.com",
    },
    {
      icon: IconMail,
      label: "Support inquiries",
      value: "support@anabaslabs.com",
      href: "mailto:support@anabaslabs.com",
    },
  ];

  return (
    <section
      id="contact"
      className="h-dvh bg-background flex flex-col overflow-hidden"
    >
      <div className="flex-1 py-3 md:py-6 px-4 md:px-8 flex flex-col min-h-0">
        <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
          <div className="text-center mb-2 md:mb-6 shrink-0">
            <div className="text-center text-3xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight">
              <Highlighter
                action="underline"
                color="#ec4e0c"
                strokeWidth={2}
                iterations={2}
                isView={true}
              >
                Contact
              </Highlighter>
            </div>
            <p className="text-md md:text-lg mx-auto leading-relaxed text-muted-foreground">
              Let's start a conversation. We're here to help and answer any
              questions you might have.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-3 md:gap-6 flex-1 min-h-0">
            <div className="md:col-span-3 flex flex-col min-h-0">
              <div className="bg-card border border-border rounded-lg p-3 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 flex-1 flex flex-col min-h-0">
                <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-4 shrink-0">
                  {"Send us a message"}
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-2 md:space-y-4 flex-1 flex flex-col min-h-0"
                >
                  <div className="space-y-0.5 shrink-0">
                    <label
                      htmlFor="name"
                      className="text-[10px] md:text-sm font-medium text-foreground"
                    >
                      {"Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-0.5 shrink-0">
                    <label
                      htmlFor="email"
                      className="text-[10px] md:text-sm font-medium text-foreground"
                    >
                      {"Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-0.5 flex-1 flex flex-col min-h-0">
                    <label
                      htmlFor="message"
                      className="text-[10px] md:text-sm font-medium text-foreground shrink-0"
                    >
                      {"Message"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full flex-1 px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary/50 resize-none min-h-0"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-3 py-1.5 md:px-4 md:py-3 text-[10px] md:text-sm bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50 hover:cursor-pointer shrink-0"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 md:gap-6 min-h-0">
              <div className="bg-card border border-border rounded-lg p-3 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 flex-1">
                <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-4">
                  {"Get in touch"}
                </h2>
                <div className="space-y-2 md:space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-2 md:gap-3 group transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="p-1.5 md:p-2.5 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-[10px] md:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-3 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 flex-1">
                <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-4">
                  Follow us
                </h2>
                <div className="flex flex-wrap gap-1.5 md:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 md:p-3 bg-secondary rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
                <p className="text-[10px] md:text-sm text-muted-foreground mt-2 md:mt-4 leading-relaxed">
                  Connect with us on social media to stay updated with our
                  latest news and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
