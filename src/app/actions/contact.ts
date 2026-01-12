"use server";

import {
  contactFormSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Parse form data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // Validate with Zod
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

  // Check if webhook URL is configured
  if (!DISCORD_WEBHOOK_URL) {
    console.error("Discord webhook URL is not configured");
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
  }

  // Send to Discord webhook
  try {
    const discordEmbed = {
      embeds: [
        {
          title: "📬 New Contact Form Submission",
          color: 0xec4e0c, // Orange color matching the brand
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

    const response = await fetch(DISCORD_WEBHOOK_URL, {
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
