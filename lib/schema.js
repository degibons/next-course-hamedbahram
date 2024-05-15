import { z } from 'zod'

export const GuestEntrySchema = z.object({
  name: z.string().min(1, { message: 'name is required' }),
  message: z.string().min(1, { message: 'message is required' })
})

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  message: z.string().min(1, { message: 'Message is required' })
})

export const EmailLoginFormData = z.object({
  email: z.string().email({ message: 'Некорректный емейл' })
})
