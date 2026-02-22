import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- 1. EMAIL TO THE OWNER (The Homestay Owner) ---
    await transporter.sendMail({
      from: `"Abhinay Natural Homestay" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `📩 New Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2D3E40;">New Booking enquiry</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</div>
          <p style="font-size: 12px; color: #888; margin-top: 20px;">Click 'Reply' to respond directly to the guest.</p>
        </div>
      `,
    });

    // --- 2. AUTO-RESPONDER TO THE CUSTOMER (The Guest) ---
    await transporter.sendMail({
      from: `"Abhinay Natural Homestay" <${process.env.EMAIL_USER}>`,
      to: email, // Sending TO the user who filled the form
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #fdfdfd; border: 1px solid #e8e8e8; text-align: center;">
          <h1 style="color: #2D3E40; font-size: 24px;">We've received your message</h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Hello ${name},<br><br>
            Thank you for contacting <strong>Natural Retreat</strong>. We've received your inquiry regarding <em>"${subject}"</em> and our team is currently reviewing it.
          </p>
          <div style="margin: 30px 0; padding: 20px; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
            <p style="font-style: italic; color: #777; margin: 0;">"In every walk with nature, one receives far more than he seeks."</p>
          </div>
          <p style="color: #555; font-size: 14px;">
            We usually respond within 24 hours. In the meantime, feel free to explore our gallery or check our latest forest experiences.
          </p>
          <br>
          <p style="font-weight: bold; color: #2D3E40; margin-bottom: 5px;">Abhinay Natural Homestay Team</p>
          <p style="font-size: 12px; color: #aaa;">This is an automated confirmation of your inquiry.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
