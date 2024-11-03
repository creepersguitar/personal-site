// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup (Use your email service credentials)
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to your email provider (e.g., Outlook, Yahoo, etc.)
    auth: {
        user: 'your-email@example.com', // Your email
        pass: 'your-email-password' // Your email password (or app password)
    }
});

// POST endpoint for sending emails
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'gsrr201@gmail.com', // Your email to receive messages
        subject: `New contact form submission from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ error: 'Error sending email' });
        }
        res.status(200).send({ success: 'Email sent successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
