import Card from '@/app/components/Card'
import { profile } from '@/app/api/profile/route'

export default function ProfilePage() {
  return (
    <Card title="Profile Saya">
      <form
        action={profile}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <input
          name="nama"
          placeholder="Nama Lengkap"
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="alamat"
          placeholder="Alamat"
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="no_ktp"
          placeholder="No KTP"
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="foto"
          type="file"
          accept="image/*"
          className="w-full"
        />

        <button
          type="submit"
          className="w-full rounded bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          Simpan Data
        </button>
      </form>
    </Card>
  )
}
