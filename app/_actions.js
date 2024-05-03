'use server'

import { createGuestbookEntry } from '@/lib/guestbook'
import { GuestEntrySchema } from '@/lib/schema'
import { revalidatePath } from 'next/cache'

export async function addEntry(data) {
  const { name, message } = Object.fromEntries(data)

  // if (!name || !message) {
  //   throw new Error('Invalid input')
  // }

  const { error: zodError } = GuestEntrySchema.safeParse({ name, message })

  if (zodError) {
    return { error: zodError.format() }
  }

  const { error } = await createGuestbookEntry({ name, message })

  if (error) {
    throw new Error(error)
  }

  revalidatePath('/guestbook')
}
