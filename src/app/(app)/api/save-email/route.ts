// app/api/save-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { email } = (await req.json()) as { email?: string };
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Extract client IP safely
    const forwarded = req.headers.get('x-forwarded-for') || '';
    const ip = forwarded.split(',')[0] || 'unknown';

    // Perform the insert and return the new record
    const { data, error, status, statusText } = await supabase
      .from('user_emails')
      .insert([{ email, ip }])
      .select()    // get the inserted row back
      .single();  // since we're inserting one record

    console.log('Supabase insert:', { data, error, status, statusText });

    if (error) {
      return NextResponse.json(
        { message: 'Database insert failed', details: error.message },
        { status: status || 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email saved successfully', record: data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { message: 'Internal server error', details: err.message },
      { status: 500 }
    );
  }
}