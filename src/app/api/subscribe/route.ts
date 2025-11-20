import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface SubscribeRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email }: SubscribeRequest = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send subscription email
    await transporter.sendMail({
      from: `"SumoGo Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Newsletter Subscription - ${email}`,
      text: `
New newsletter subscription!

Email: ${email}

Subscribe date: ${new Date().toLocaleDateString()}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">🎉 New Newsletter Subscription!</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #012D12;">
            <p style="margin: 0 0 10px 0;"><strong>Email Address:</strong></p>
            <p style="margin: 0; font-size: 18px; color: #012D12; font-weight: bold;">${email}</p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
              Subscribed on: ${new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was generated from your website's newsletter subscription form.
          </p>
        </div>
      `,
    });

    console.log("Subscription email sent for:", email);
    return NextResponse.json({
      success: true,
      message: "Successfully subscribed! Thank you for joining our community.",
    });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

// Optional: Add other HTTP methods if needed
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
