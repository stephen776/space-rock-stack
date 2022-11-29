import {PrismaClient} from '@prisma/client';

const db = new PrismaClient();

async function seed() {
  console.log('Seeding DB!');
  await db.user.create({data: {email: 'stephenjacobs86@gmail.com', name: 'Stephen Jacobs'}});
  await db.user.create({data: {email: 'stephenjacobs86+michaelgmail.com', name: 'Michael Scott'}});
  await db.user.create({data: {email: 'stephenjacobs86+dwight.com', name: 'Dwight Schrute'}});
}

// Run it
seed();
