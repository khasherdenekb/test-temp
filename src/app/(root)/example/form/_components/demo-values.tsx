import * as z from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .max(255, { message: "Username must be less than 255 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" })
    .max(255, { message: "Email must be less than 255 characters" }),
  securityEmails: z.boolean().default(false),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  dateRange: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error: "Please select a date range",
    },
  ),
  notify: z.enum(["all", "dm", "none"], {
    required_error: "Notification preference is required",
  }),
  selectMe: z.enum(["branch1", "branch2", "branch3"], {
    required_error: "Branch is required",
  }),
});
