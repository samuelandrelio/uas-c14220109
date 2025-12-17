import Card from '@/app/components/Card'
import { login } from '@/app/api/login/route'

export default function LoginPage() {
  return (
    <Card title="Login">
      <form action={login} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full rounded border px-3 py-2"
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center text-sm">
          Belum punya akun?{' '}
          <a href="/register" className="text-blue-600 underline">
            Register
          </a>
        </p>
      </form>
    </Card>
  )
}
