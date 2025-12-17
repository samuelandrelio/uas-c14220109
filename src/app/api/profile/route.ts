'use server'


import { createClient } from "@/lib/supabaseClient";
const supabaseServer = await createClient()

export async function profile(formData: FormData) {
const id = formData.get('id') as string
const nama = formData.get('nama') as string
const alamat = formData.get('alamat') as string
const no_nik = formData.get('no_nik') as string
const foto = formData.get('foto') as File


let fotoUrl = null


if (foto && foto.size > 0) {
const { data } = await supabaseServer.storage
.from('photos')
.upload(`${id}.jpg`, foto, { upsert: true })


fotoUrl = data?.path
}


await supabaseServer
.from('profiles')
.update({ nama, alamat, no_nik, foto_url: fotoUrl })
.eq('id', id)
}