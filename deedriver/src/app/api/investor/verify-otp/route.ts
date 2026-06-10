import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: 'Email and code required.' }, { status: 400 });
    }

    // Find a valid, unused, unexpired OTP
    const { data: otps, error: fetchError } = await supabase
      .from('investor_otps')
      .select('*')
      .eq('email', email.toLowerCase())
      .eq('code', code.trim())
      .eq('used', false)
      .gt('expires_at', new Date().toISOString())
      .limit(1);

    if (fetchError || !otps || otps.length === 0) {
      return NextResponse.json({ error: 'Invalid or expired code. Please request a new one.' }, { status: 401 });
    }

    // Mark OTP as used
    await supabase
      .from('investor_otps')
      .update({ used: true })
      .eq('id', otps[0].id);

    // Log access — capture IP if available
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    await supabase.from('investor_access').insert({
      email: email.toLowerCase(),
      ip,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('verify-otp error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
