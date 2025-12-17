"use server";

import { createClient } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      throw new Error(error.message);
    }

    redirect('/profile');
  } catch (error) {
    throw error;
  }
}

export async function POST(request: Request) {
    try {
        const supabase = await createClient();

        const { email, password } = await request.json();

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: "Signed in successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}