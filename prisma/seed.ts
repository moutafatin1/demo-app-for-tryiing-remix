import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.note.create({
    data: {
      title: "Productivity",
      content:
        "Planning  your next day before you sleep help you stay accountable",
    },
  });

  await prisma.note.create({
    data: {
      title: "Good habits",
      content: `Reading
        Learning new Things everyday
        Surrounding yourself with smart people
        Exercises...
        `,
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
