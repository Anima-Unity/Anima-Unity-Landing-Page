import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Authors
  await prisma.author.createMany({
    data: [
      { name: 'Dian Sastro' },
      { name: 'Admin' }
    ],
    skipDuplicates: true,
  })

  // Seed Categories
  await prisma.category.createMany({
    data: [
      { name: 'Behavior' },
      { name: 'Kucing' },
      { name: 'Kesehatan' },
      { name: 'Perawatan' },
      { name: 'Makanan' }
    ],
    skipDuplicates: true,
  })

  // Seed Tags
  await prisma.tag.createMany({
    data: [
      { name: 'Kucing' },
      { name: 'Behavior' },
      { name: 'Perilaku' },
      { name: 'Hilang' },
      { name: 'Tips' }
    ],
    skipDuplicates: true,
  })

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// Export untuk memenuhi persyaratan ES Module
export {}