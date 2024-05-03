import { PrismaClient } from '@prisma/client'
import { cache } from 'react'

const prisma = new PrismaClient()

export const getGuestbookEntries = cache(async () => {
  try {
    const entries = await prisma.guestbook.findMany()
    await prisma.$disconnect()
    return { entries }
  } catch (error) {
    return { error: 'Failed to fetch guestbook' }
  }
})

export async function createGuestbookEntry({ name, message }) {
  try {
    const entry = await prisma.guestbook.create({
      data: {
        name,
        message,
        updatedAt: new Date()
      }
    })
    await prisma.$disconnect()
    return { entry }
  } catch (error) {
    return { error: 'Failed to create guestbook entry' }
  }
}
