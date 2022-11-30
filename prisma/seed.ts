import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function seed() {
  console.log('Seeding DB!');

  const passwordHash = await bcrypt.hash('Truefit1!', 10);

  await db.user.upsert({
    where: {email: 'stephenjacobs86@gmail.com'},
    update: {passwordHash},
    create: {
      email: 'stephenjacobs86@gmail.com',
      name: 'Stephen Jacobs',
      // this is a hashed version of "twixrox"
      passwordHash,
    },
  });

  await db.user.upsert({
    where: {email: 'stephenjacobs86+michaelgmail.com'},
    update: {passwordHash},
    create: {
      email: 'stephenjacobs86+michaelgmail.com',
      name: 'Michael Scott',
      passwordHash,
    },
  });

  await db.user.upsert({
    where: {email: 'stephenjacobs86+dwight.com'},
    update: {passwordHash},
    create: {
      email: 'stephenjacobs86+dwight.com',
      name: 'Dwight Schrute',
      passwordHash,
    },
  });
}

// Run it
seed();
