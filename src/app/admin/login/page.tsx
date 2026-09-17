import { login } from "../actions";

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto pt-20 h-screen">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={login}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Admin Login</h2>
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white/10 border border-white/20 mb-6 text-white"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white/10 border border-white/20 mb-6 text-white"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-600 rounded-md px-4 py-2 text-white mb-2 hover:bg-green-500 transition-colors">
          Sign In
        </button>
        {params?.message && (
          <p className="mt-4 p-4 bg-red-900/50 border border-red-500 text-white text-center rounded-md">
            {params.message}
          </p>
        )}
      </form>
    </div>
  );
}
