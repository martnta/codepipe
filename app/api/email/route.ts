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
            <title>Exciting New Message!</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
              body {
                font-family: 'Poppins', sans-serif;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                color: #333333;
                padding: 40px;
                margin: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                padding: 40px;
                position: relative;
                overflow: hidden;
              }
              .container::before {
                content: '';
                position: absolute;
                top: -50px;
                left: -50px;
                width: 100px;
                height: 100px;
                background: #7A1CAC;
                border-radius: 50%;
                opacity: 0.1;
              }
              .container::after {
                content: '';
                position: absolute;
                bottom: -50px;
                right: -50px;
                width: 100px;
                height: 100px;
                background: #7A1CAC;
                border-radius: 50%;
                opacity: 0.1;
              }
              h1 {
                color: #7A1CAC;
                font-size: 32px;
                margin-bottom: 30px;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
              }
              p {
                margin-bottom: 20px;
                line-height: 1.8;
                position: relative;
                padding-left: 30px;
              }
              .field {
                font-weight: 600;
                color: #7A1CAC;
                display: block;
                margin-bottom: 5px;
              }
              .field::before {
                content: '✦';
                position: absolute;
                left: 0;
                color: #7A1CAC;
              }
              .message {
                white-space: pre-line;
                font-size: 16px;
                line-height: 1.8;
                color: #555555;
                background-color: #f8f8f8;
                padding: 25px;
                border-radius: 8px;
                border-left: 4px solid #7A1CAC;
                margin-top: 20px;
              }
              @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
              }
              .container:hover {
                animation: pulse 2s infinite;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>✨ Exciting New Message! ✨</h1>
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

