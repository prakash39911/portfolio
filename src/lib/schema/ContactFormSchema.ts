import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Please Enter Valid Name" }),
  email: z.string().email(),
  message: z.string().min(5, { message: "Please Enter valid Message" }),
});

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;
