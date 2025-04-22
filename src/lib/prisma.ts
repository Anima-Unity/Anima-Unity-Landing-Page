import { PrismaClient } from '@prisma/client'

// Type declaration for global prisma instance
declare global {
  // Using var here specifically for global declaration
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Create or reuse the existing PrismaClient instance
const prisma = global.prisma || new PrismaClient()

// In development, store the PrismaClient on globalThis to prevent
// hot-reload from creating new instances
if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}

export default prisma