import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    }: ContactRequest = await request.json();

    // Validation
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
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
      return NextResponse.json(
        { error: "Email service not configured" },
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

    // Send contact form email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
New Contact Form Submission:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

Submitted on: ${new Date().toLocaleDateString()}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #012D12; padding-bottom: 10px;">📧 New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${subject}</td>
              </tr>
            </table>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #012D12; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line; line-height: 1.6; margin: 0;">${message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
            This message was sent from your website's contact form on 
            ${new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      `,
    });

    console.log("Contact form submission sent from:", email);
    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully! We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Error sending contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
