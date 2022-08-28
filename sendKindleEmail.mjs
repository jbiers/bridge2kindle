import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

async function main() {
    // process.argv[0] -> node
    // process.argv[1] -> sendEmail.mjs
    // process.argv[2] -> filepath

    const filepath = process.argv[2].replace("\\", "");

    dotenv.config();

    const message = {
        from: process.env.USER_EMAIL,
        to: process.env.KINDLE_EMAIL,
        subject: "New file",
        text: "New book",
        attachments: [
            {
                path: filepath,
            }
        ]
    }
    

    const transporter = nodemailer.createTransport({
        host: process.env.USER_EMAIL_HOST,
        port: process.env.USER_EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_EMAIL_PASSWORD,
        }
    })

    const info = await transporter.sendMail(message);
}

main().catch(console.error);