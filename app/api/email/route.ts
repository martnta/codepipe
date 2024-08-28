// api/send-email/route.js
const nodemailer = require("nodemailer");

export async function POST(req: any) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Message</title>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f8f8f8;
                color: #333333;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: 40px;
              }
              h1 {
                color: #7A1CAC;
                font-size: 24px;
                margin-bottom: 20px;
              }
              p {
                margin-bottom: 10px;
                line-height: 1.6;
              }
              .field {
                font-weight: bold;
                color: #555555;
              }
              .message {
                white-space: pre-line;
                font-size: 14px;
                line-height: 1.8;
                color: #555555;
                background-color: #f8f8f8;
                padding: 20px;
                border-radius: 4px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>✨New Message!✨</h1>
              <p><span class="field">From:</span> ${name}</p>
              <p><span class="field">Email:</span> ${email}</p>
              <p><span class="field">Subject:</span> ${subject}</p>
              <p><span class="field">Message:</span></p>
              <div class="message">${message}</div>
            </div>
          </body>
          </html>
        `,
      };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response('Email sent successfully', { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Error sending email', { status: 500 });
  }
}

