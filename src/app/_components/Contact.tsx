"use client";

import type React from "react";
import { useActionState, useEffect, useState, useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconLoader2,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { submitContactForm } from "@/app/actions/contact";
import {
  contactFormSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

type ButtonStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [clientErrors, setClientErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>("idle");
  const statusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        setButtonStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setClientErrors({});
      } else {
        setButtonStatus("error");
      }

      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }

      statusTimeoutRef.current = setTimeout(() => {
        setButtonStatus("idle");
      }, 3000);
    }

    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, [state]);

  useEffect(() => {
    if (isPending) {
      setButtonStatus("loading");
    }
  }, [isPending]);

  const validateField = (name: string, value: string) => {
    const fieldSchema =
      contactFormSchema.shape[name as keyof typeof contactFormSchema.shape];
    const result = fieldSchema.safeParse(value);

    if (!result.success) {
      return result.error.issues[0]?.message;
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (clientErrors[name as keyof typeof clientErrors]) {
      setClientErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value.trim()) {
      const error = validateField(name, value);
      setClientErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const getFieldError = (field: "name" | "email" | "message") => {
    return clientErrors[field] || state.errors?.[field]?.[0];
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

              <form action={formAction} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    height: 0,
                    width: 0,
                    overflow: "hidden",
                  }}
                />
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isPending}
                    aria-invalid={!!getFieldError("name")}
                    className={`w-full mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                      getFieldError("name")
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border"
                    }`}
                  />
                  {getFieldError("name") && (
                    <div className="absolute right-3 top-9.5 text-red-500 cursor-help group/tooltip">
                      <IconX className="w-5 h-5" />
                      <span className="pointer-events-none absolute right-0 top-full mt-1 z-50 w-max max-w-xs rounded-lg bg-red-500 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover/tooltip:opacity-100">
                        {getFieldError("name")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="text-sm sm:text-base font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isPending}
                    aria-invalid={!!getFieldError("email")}
                    className={`w-full mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                      getFieldError("email")
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border"
                    }`}
                  />
                  {getFieldError("email") && (
                    <div className="absolute right-3 top-9.5 text-red-500 cursor-help group/tooltip">
                      <IconX className="w-5 h-5" />
                      <span className="pointer-events-none absolute right-0 top-full mt-1 z-50 w-max max-w-xs rounded-lg bg-red-500 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover/tooltip:opacity-100">
                        {getFieldError("email")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="text-sm sm:text-base font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isPending}
                    aria-invalid={!!getFieldError("message")}
                    rows={5}
                    className={`w-full resize-none mt-1 px-4 py-3 bg-secondary border rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                      getFieldError("message")
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border"
                    }`}
                  />
                  {getFieldError("message") && (
                    <div className="absolute right-3 top-9.5 text-red-500 cursor-help group/tooltip">
                      <IconX className="w-5 h-5" />
                      <span className="pointer-events-none absolute right-0 top-full mt-1 z-50 w-max max-w-xs rounded-lg bg-red-500 px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover/tooltip:opacity-100">
                        {getFieldError("message")}
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={buttonStatus === "loading"}
                  className={`mt-6 px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-45 ${
                    buttonStatus === "success"
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : buttonStatus === "error"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/40 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                  }`}
                >
                  {buttonStatus === "loading" ? (
                    <>
                      <IconLoader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : buttonStatus === "success" ? (
                    <>
                      <IconCheck className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : buttonStatus === "error" ? (
                    <>
                      <IconX className="w-5 h-5" />
                      Failed to Send
                    </>
                  ) : (
                    "Send Message"
                  )}
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
