import { auth } from "@/src/lib/auth";

export default async function Home() {
  const session = await auth;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      {session?.user ? (
        <p>{session?.user.username}</p>
        ) : null
      }
    </main>
  );
}
