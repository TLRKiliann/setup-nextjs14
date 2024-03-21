# setup-nextjs14

$ pnpm init

$ pnpm i prisma -D

$ prisma migrate dev

$ pnpm i prisma@latest -D

$ pnpm i @prisma/client@latest

$ pnpm install next-auth

$ pnpm install @auth/prisma-adapter

/src/lib/prisma.ts
/src/lib/auth.ts

/app/api/[...nextauth]/route.ts

