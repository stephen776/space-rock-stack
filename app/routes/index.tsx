import type {LoaderArgs} from '@remix-run/node';
import {typedjson, useTypedLoaderData} from 'remix-typedjson';

import {db} from '~/db.server';

export async function loader({request}: LoaderArgs) {
  const users = await db.user.findMany();

  return typedjson({users});
}

export default function Index() {
  const {users} = useTypedLoaderData<typeof loader>();

  return (
    <div>
      <h1>Welcome to Remix</h1>

      <ul>
        {users.map((u) => (
          <li key={u.email}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
