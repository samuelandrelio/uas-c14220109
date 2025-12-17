import Card from '@/app/components/Card'
import { register } from '@/app/api/register/route'

export default function RegisterPage() {
  const handleSubmit = async (formData: FormData) => {
	await register(formData)
  }
return (
<form action={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
<h1 className="text-2xl font-bold">Register</h1>
<input name="email" type="email" required className="input"
placeholder="Email" />
<input name="password" type="password" required className="input"
placeholder="Password" />
<button className="btn w-full">Register</button>
</form>
)
}