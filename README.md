# Welcome to Remix Space Rock Stack!

- [Remix Docs](https://remix.run/docs)

## What's in the stack

Fully Serverless deployment + opinionated styling w/ tailwind+radix

- Deployment to Cloudflare Pages
- Styling with Tailwind/RadixUI
- TODO: Auth? remix-auth?
- TODO: Prisma/CockroachDB
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

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.
