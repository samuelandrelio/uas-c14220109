"use server";

import { createClient } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function regist(formData: FormData) {
const email = formData.get('email') as string
const password = formData.get('password') as string

try {
const supabaseServer = await createClient()
const { data, error } = await supabaseServer.auth.admin.createUser({
email,
password
})
if (error) {
      throw new Error(error.message);
    }
    await supabaseServer.from('profiles').insert({ id: data.user.id })

    redirect('/login');
  } catch (error) {
    throw error;
  }
}

export async function register(formData: FormData) {
const email = String(formData.get('email'))
const password = String(formData.get('password'))
const supabase = await createClient()

const { error } = await supabase.auth.signUp({ email, password })
if (error) {
return { error: error.message }
}
redirect('/login')
}

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient();

        const { email, password } = await request.json();

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 })
        }

        return NextResponse.json({ message: "Account created successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }

}