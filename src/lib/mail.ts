"use server";

import { Resend } from "resend";
import { contactFormSchemaType } from "./schema/ContactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const email = process.env.MY_EMAIL_ID as string;

export async function sendNotificationAlertToMyEmail(
  data: contactFormSchemaType
) {
  return resend.emails.send({
    from: "portfolio@resend.dev",
    to: email,
    subject: "JOB ALERT! EMERGENCY!",
    html: `
            <h2>You have got job related query on ${baseUrl}</h2>
            <p><span>Name - ${data.name}</span></p>
            <p><span>Email - ${data.email}</span></p>
            <p><span>Message - ${data.message}</span></p>
        `,
  });
}
