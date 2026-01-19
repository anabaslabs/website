"use server";

import {
  contactFormSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

const WEBHOOK_URL = process.env.WEBHOOK_URL;
const SPAM_WEBHOOK_URL = process.env.SPAM_WEBHOOK_URL;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const honeypot = formData.get("website");
  const isSpam = honeypot && honeypot.toString().trim().length > 0;

  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        message: fieldErrors.message,
      },
    };
  }

  const { name, email, message } = validationResult.data;

  const targetWebhook = isSpam ? SPAM_WEBHOOK_URL : WEBHOOK_URL;

  if (!targetWebhook) {
    if (isSpam) {
      console.warn(
        "Spam detected but SPAM_WEBHOOK_URL not configured - discarding"
      );
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      };
    }

    console.error("Discord Webhook URL is not configured");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  try {
    const discordEmbed = {
      embeds: [
        {
          title: isSpam
            ? "🚨 [SPAM] Contact Form Submission"
            : "📬 New Contact Form Submission",
          color: isSpam ? 0xff0000 : 0xec4e0c,
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
            {
              name: "💬 Message",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Anabas Labs Contact Form",
          },
        },
      ],
    };

    const response = await fetch(targetWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordEmbed),
    });

    if (!response.ok) {
      console.error(
        "Discord webhook error:",
        response.status,
        response.statusText
      );
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Error sending to Discord:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
