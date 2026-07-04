import { z } from "zod";

export const doctorSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  gender: z.string().min(1, "Gender is required"),
  department: z.string().min(2, "Department is required"),
  experience: z
    .string()
    .refine((val) => Number(val) >= 0, "Experience must be 0 or more"),
  qualification: z.string().min(2, "Qualification is required"),
  consultationFee: z
    .string()
    .refine((val) => Number(val) > 0, "Fee must be greater than 0"),
  address: z.string().min(5, "Address is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
