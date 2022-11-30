import type {User} from '@prisma/client';

import {db} from '~/db.server';

export async function listUsers() {
  return db.user.findMany();
}

export async function getUserById(id: User['id']) {
  return db.user.findFirst({where: {id}});
}

export async function createUser(
  id: User['id'],
  email: User['email'],
  firstName: User['firstName'],
  lastName: User['lastName'],
) {
  return db.user.create({
    data: {id, email, firstName, lastName},
    select: {email: true, firstName: true, lastName: true},
  });
}
