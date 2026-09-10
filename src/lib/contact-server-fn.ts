import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export type ContactSubmission = {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  marketplace: string;
  storeUrl: string;
  message: string;
  /** Hidden field — a human never fills this in. Non-empty means a bot. */
  honeypot: string;
  /** Client timestamp (ms) when the form first rendered, for a minimum-fill-time spam check. */
  startedAt: number;
};

export type ContactResult = { ok: true } | { ok: false; reason: string };

const MIN_FILL_TIME_MS = 2500;
const MAX_LENGTHS = {
  name: 120,
  email: 200,
  whatsapp: 40,
  service: 120,
  marketplace: 120,
  storeUrl: 300,
  message: 4000,
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalPhone(value: string): boolean {
  if (!value) return true;
  return /^[+()0-9\s-]{6,40}$/.test(value);
}

function isValidOptionalUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validate(input: ContactSubmission): string | null {
  if (input.honeypot) return "spam_honeypot";
  if (!Number.isFinite(input.startedAt) || Date.now() - input.startedAt < MIN_FILL_TIME_MS) {
    return "spam_timing";
  }
  if (!input.name.trim() || input.name.length > MAX_LENGTHS.name) return "invalid_name";
  if (!isValidEmail(input.email) || input.email.length > MAX_LENGTHS.email) return "invalid_email";
  if (!isValidOptionalPhone(input.whatsapp) || input.whatsapp.length > MAX_LENGTHS.whatsapp) {
    return "invalid_whatsapp";
  }
  if (input.message.trim().length < 10 || input.message.length > MAX_LENGTHS.message) {
    return "invalid_message";
  }
  if (input.service.length > MAX_LENGTHS.service) return "invalid_service";
  if (input.marketplace.length > MAX_LENGTHS.marketplace) return "invalid_marketplace";
  if (!isValidOptionalUrl(input.storeUrl) || input.storeUrl.length > MAX_LENGTHS.storeUrl) {
    return "invalid_url";
  }
  return null;
}

// Sends directly via Gmail SMTP using nodemailer. This runs as a Netlify
// Function (real Node.js), so nodemailer's standard SMTP transport (Node's
// net/tls modules) works natively here — unlike Cloudflare Workers, which
// has no raw TCP socket support for Node's net module.
//
// Requires GMAIL_USER (the sending Gmail address) and GMAIL_APP_PASSWORD (a
// 16-character Google App Password, not the account password — requires
// 2-Step Verification enabled on the Google account) configured as
// environment variables in the Netlify site settings. See .env.example.
//
// Kept out of a directory literally named "server" — TanStack Start's
// import-protection plugin denies **/server/** from client code even for
// createServerFn exports meant to be called from the client.
export const submitContact = createServerFn({ method: "POST" })
  .validator((data: ContactSubmission) => data)
  .handler(async ({ data }): Promise<ContactResult> => {
    const validationError = validate(data);
    if (validationError) {
      console.warn("[contact] rejected submission:", validationError);
      return { ok: false, reason: validationError };
    }

    const gmailUser = process.env["GMAIL_USER"];
    const gmailAppPassword = process.env["GMAIL_APP_PASSWORD"];
    const toAddress = process.env["CONTACT_NOTIFY_EMAIL"] || "mr.ecomtik@gmail.com";

    if (!gmailUser || !gmailAppPassword) {
      console.error(
        "[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not configured — enquiry was validated but not sent"
      );
      return { ok: false, reason: "not_configured" };
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailAppPassword },
      });

      await transporter.sendMail({
        from: `"Ecomtik Enquiries" <${gmailUser}>`,
        to: toAddress,
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `New enquiry — ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `WhatsApp/phone: ${data.whatsapp || "Not provided"}`,
          `Service required: ${data.service || "Not specified"}`,
          `Target marketplace: ${data.marketplace || "Not specified"}`,
          `Product/store link: ${data.storeUrl || "Not provided"}`,
          "",
          data.message,
        ].join("\n"),
      });

      return { ok: true };
    } catch (error) {
      console.error("[contact] Gmail SMTP send failed", error);
      return { ok: false, reason: "network_error" };
    }
  });
