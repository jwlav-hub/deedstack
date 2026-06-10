import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const code = generateCode();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Invalidate any previous unused codes for this email
    await supabase
      .from('investor_otps')
      .update({ used: true })
      .eq('email', email.toLowerCase())
      .eq('used', false);

    // Store new OTP
    const { error: dbError } = await supabase.from('investor_otps').insert({
      email: email.toLowerCase(),
      code,
      expires_at: expiresAt.toISOString(),
    });

    if (dbError) {
      console.error('DB error:', dbError);
      return NextResponse.json({ error: 'Failed to generate code.' }, { status: 500 });
    }

    // Send email via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'DeedStack Investor Access <noreply@deedriver.com>',
      to: email,
      subject: 'Your DeedStack investor access code',
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px; background: #0d1117; color: #ffffff;">
          <div style="margin-bottom: 32px;">
            <span style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #ffffff;">Deed</span><span style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #52B788;">Stack</span>
          </div>
          <h1 style="font-family: Georgia, serif; font-size: 24px; font-weight: 700; color: #ffffff; margin-bottom: 8px; line-height: 1.2;">
            Investor access code
          </h1>
          <p style="font-size: 15px; color: rgba(255,255,255,0.55); margin-bottom: 32px; line-height: 1.6;">
            Enter the code below to access DeedStack investor materials. This code expires in 10 minutes.
          </p>
          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 28px; text-align: center; margin-bottom: 32px;">
            <p style="font-family: 'Courier New', monospace; font-size: 42px; font-weight: 700; color: #B08A26; letter-spacing: 10px; margin: 0;">
              ${code}
            </p>
          </div>
          <p style="font-size: 12px; color: rgba(255,255,255,0.25); line-height: 1.6;">
            If you did not request this code, you can safely ignore this email. This code is valid for one use only.<br><br>
            By accessing investor materials you confirm you are an accredited investor as defined under SEC Rule 501(a). Materials are for informational purposes only and do not constitute an offer to sell securities.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Email error:', emailError);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('send-otp error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
