# Welcome to Remix Space Rock Stack!

- [Remix Docs](https://remix.run/docs)

## What's in the stack

Fully Serverless deployment + opinionated styling w/ tailwind+radix

- Deployment to Cloudflare Pages
- Styling with Tailwind/DaisyUI/RadixUI
- Prisma/CockroachDB
- TODO: Auth? remix-auth?
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

To create a new database migration run:

`npx prisma migrate dev --name <MIGRATION NAME>`

## Deployment

This template gets deployed to Vercel... TODO
