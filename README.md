# Welcome to Remix Space Rock Stack!

- [Remix Docs](https://remix.run/docs)

## What's in the stack

Fully Serverless deployment + opinionated styling w/ tailwind+radix

- Deployment to Cloudflare Pages
- TODO: Github Actions For Deployment
- TODO: Auth?
- TODO: Prisma/CockroachDB
- TODO: Styling with Tailwind/RadixUI
- TODO: QStash for Background/CRON Jobs
- TODO: ESLint/Prettier
- TODO: Vitest + Testing Library
- Typescript
- TODO: zod
- TODO: remix-validated-form/zod-form-data/@remix-validated-form/with-zod
- TODO: remix-auth
- TODO: remix-typed-json
- TODO: remix-flat-routes
- TODO: husky/lint-staged & run eslint+prettier in CI?
- TODO: utils - date-fns, clsx, tailwind-merge, tailwind-radix

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
