import z, { email } from "zod";


export const CustomerSchema = z.object({
    name: z.string().min(1, 'name field is required'),
    email: z.string().min(1, 'email field is required').email('email field is invalid'),

})