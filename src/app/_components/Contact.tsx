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
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    <section id="contact" className="bg-background py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto font-lexend mt-4">
        <div className="text-center mb-8 md:mb-10 ">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 md:mb-3 tracking-tight">
            <Highlighter
              action="underline"
              color="#ec4e0c"
              strokeWidth={2}
              iterations={2}
              isView
            >
              Contact
            </Highlighter>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Let's start a conversation. We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-2 flex">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 flex-1 transition hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50">
              <h2 className="text-lg md:text-xl font-semibold mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-sm sm:text-base font-medium">
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm sm:text-base font-medium">
                    Email
                  </label>
                  <input
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm sm:text-base font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm sm:text-base font-semibold transition hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/40 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 transition hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50">
              <h2 className="text-lg md:text-xl font-semibold mb-8">
                Get in touch
              </h2>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group transition hover:translate-x-1"
                  >
                    <div className="p-3 sm:p-4 bg-secondary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-medium group-hover:text-primary transition">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 transition hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50">
              <h2 className="text-lg md:text-xl font-semibold mb-8">
                Follow us
              </h2>

              <div className="flex flex-wrap gap-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-3 sm:p-4 bg-secondary rounded-xl transition
                      hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </a>
                ))}
              </div>

              <p className="text-sm sm:text-base text-muted-foreground">
                Stay connected with our latest updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
