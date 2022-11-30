# Welcome to Remix Space Rock Stack!

- [Remix Docs](https://remix.run/docs)

## What's in the stack

Fully Serverless deployment + opinionated styling w/ tailwind+radix

- Deployment to Cloudflare Pages
- Styling with Tailwind/DaisyUI/RadixUI
- Prisma/CockroachDB
- TODO: Auth? remix-auth? auth0?
- TODO: QStash for Background/CRON Jobs
- TODO: Github Actions For Deployment
- TODO: Vitest + Testing Library
- ESLint/Prettier
- Typescript
- remix-flat-routes
- remix-typed-json
- Forms: remix-validated-form with zod-form-data and @remix-validated-form/with-zod validation
- utils: date-fns, clsx, tailwind-merge, tailwind-radix, remix-utils

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Migrations

While prototyping in dev we can use `prisma db push` to sync changes with a dev DB.

`npx prisma db push`

Once we are satisfied, we can generate a migration file to preserve the changes and push to other environments

To create a new database migration run:

`npx prisma migrate dev --name <MIGRATION NAME>`

## Deployment

This template gets deployed to Vercel... TODO
