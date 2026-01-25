import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("im here 2");
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

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 ${subject}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
