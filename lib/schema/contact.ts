import { z } from "zod";

export const contactFormValidationSchema = z.object({
  firstName: z.string().min(4, "First name is required"),
  lastName: z.string().min(4, "Last name is required"),
  email: z.string().email("Email is required"),
  companyName: z.string().min(1, "Company name is required"),
  websiteUrl: z.string().min(1, "Website url is required"),
  message: z.string().min(1, "message is required"),
});

export type ContactSalesFormValues = z.infer<
  typeof contactFormValidationSchema
>;
