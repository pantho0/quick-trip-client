import { z } from "zod";

export const carAddSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  isElectric: z.boolean({ required_error: "Is Electric is required" }),
  pricePerHour: z.string({ required_error: "Price per hour is required" }),
  color: z.string({ required_error: "Color is required" }),
  features: z.array(z.string({ required_error: "Features are required" })),
});
