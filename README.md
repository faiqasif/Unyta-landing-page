This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Admin panel

The internal dashboard lives at [`/admin`](http://localhost:3000/admin): a submissions
dashboard, tables for creator applications, brand applications and demo requests, and
account settings. It authenticates with Firebase Auth and authorises against the
`adminUsers` Firestore collection — an account can only reach `/admin` if it has a
record there.

### One-time Firebase setup

1. **Firebase Console → Authentication → Sign-in method** — enable **Email/Password**.
2. **Firebase Console → Firestore → Rules** — publish the contents of `firestore.rules`.
   The rules add an `isAdmin()` check that lets admins read the three form collections,
   and pin `adminUsers` creation to the seed address so no other account can promote
   itself.

### Seed the admin user

```bash
npm run seed:admin
```

Creates the Firebase Auth account `admin@unyta.com` / `password` (or reuses it if it
already exists) and writes the matching `adminUsers/{uid}` record. Override with
`SEED_ADMIN_EMAIL`, `SEED_ADMIN_PASSWORD` and `SEED_ADMIN_NAME`; a different email also
needs the pinned address in `firestore.rules` updated.

Sign in at `/admin/login`, then change the password from `/admin/settings`. Name, email
and password are all editable there (email and password changes ask for the current
password).

### Notes

- The admin panel never reads or renders the `password` field that the public application
  forms write — it is stripped as the documents are loaded.
- Routing: marketing pages live in `src/app/(site)/` (navbar + footer + smooth scroll);
  `src/app/admin/` has its own chrome.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
