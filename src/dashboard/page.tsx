import { createClient } from '@/lib/supabaseClient'
import { redirect } from 'next/navigation'
export default async function DashboardPage() {
const supabase = await createClient()
5
const { data: { user }, error } = await supabase.auth.getUser()
if (error || !user) redirect('/login')
const { data: announcements } = await supabase
.from('announcements')
.select('*')
.order('created_at', { ascending: false })
return (
<div className="p-8 space-y-4">
<h1 className="text-xl font-bold">Welcome, {user.email}</h1>
{announcements?.map(a => (
<div key={a.id} className="border p-4 rounded">
<h2 className="font-semibold">{a.title}</h2>
<p>{a.content}</p>
</div>
))}
</div>
)
}