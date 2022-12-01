import type {LoaderArgs} from '@remix-run/node';
import {typedjson, useTypedLoaderData} from 'remix-typedjson';

import {listUsers} from '~/domain/user.server';

export async function loader({request}: LoaderArgs) {
  const users = await listUsers();
  return typedjson({users});
}

export default function Index() {
  const {users} = useTypedLoaderData<typeof loader>();

  return (
    <div>
      <h1>Welcome to Remix</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.firstName} | {u.lastName} | {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
