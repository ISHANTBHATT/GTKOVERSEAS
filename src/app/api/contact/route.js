// app/api/contact/route.js
import nodemailer from "nodemailer";

// Read creds from environment
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL } =
  process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      destination,
      level,
      course,
      studyDate,
      university,
    } = data;

    const mailOptions = {
      from: SMTP_USER,
      to: SMTP_USER,
      subject: `New enquiry from ${firstName} ${lastName}`,
      //       text: `
      // You’ve received a new enquiry:

      // Name: ${firstName} ${lastName}
      // Email: ${email}
      // Phone: ${phone}
      // Destination: ${destination}
      // Degree: ${level}
      // Course: ${course}
      // Study Date: ${studyDate}
      // University: ${university || "N/A"}
      // Consent Given: ${consent ? "Yes" : "No"}
      //       `,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Degree:</strong> ${level}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Study Date:</strong> ${studyDate}</p>
        <p><strong>University:</strong> ${university || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
