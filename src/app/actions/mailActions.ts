"use server";

import { sendNotificationAlertToMyEmail } from "@/lib/mail";
import {
  contactFormSchema,
  contactFormSchemaType,
} from "@/lib/schema/ContactFormSchema";

export async function sendMail(data: contactFormSchemaType) {
  try {
    const validate = contactFormSchema.safeParse(data);

    if (!validate.success)
      return { status: "error", message: "Validation Error" };

    const dataToBeSentToEmail = validate.data;

    await sendNotificationAlertToMyEmail(dataToBeSentToEmail);

    return { status: "success", message: "Email Sent Successfully" };
  } catch (error) {
    console.log(error);
  }
}
