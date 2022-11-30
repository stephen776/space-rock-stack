import {PrismaClient} from '@prisma/client';

const db = new PrismaClient();

async function seed() {
  console.log('Seeding DB!');

  await db.user.upsert({
    where: {email: 'stephenjacobs86@gmail.com'},
    update: {
      firstName: 'Stephen',
      lastName: 'Jacobs',
    },
    create: {
      id: 'abcde12345',
      email: 'stephenjacobs86@gmail.com',
      firstName: 'Stephen',
      lastName: 'Jacobs',
    },
  });

  await db.user.upsert({
    where: {email: 'stephenjacobs86+michaelgmail.com'},
    update: {
      firstName: 'Michael',
      lastName: 'Scott',
    },
    create: {
      id: 'abcde12346',
      email: 'stephenjacobs86+michaelgmail.com',
      firstName: 'Michael',
      lastName: 'Scott',
    },
  });

  await db.user.upsert({
    where: {email: 'stephenjacobs86+dwight.com'},
    update: {
      firstName: 'Dwight',
      lastName: 'Schrute',
    },
    create: {
      id: 'abcde12347',
      email: 'stephenjacobs86+dwight.com',
      firstName: 'Dwight',
      lastName: 'Schrute',
    },
  });
}

// Run it
seed();
