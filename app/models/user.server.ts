import bcrypt from 'bcryptjs';
import type {User} from '@prisma/client';

import {db} from '~/db.server';

export async function login(email: User['email'], password: User['passwordHash']) {
  const user = await db.user.findUnique({
    where: {email},
  });

  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) return null;

  const {passwordHash: _, ...userWithoutPassword} = user;
  return userWithoutPassword;
}
