import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import ContactEmail from "../../../components/contact_template";
    // import { render } from "@react-email/render";
import { FormData } from "@/components/contact";

const { render } = require("@react-email/render");

export async function POST(request: NextRequest) {

    const { company, position, department, email, phone, country, message, name } = await request.json();

    const emailPayload: FormData = {
        company,
        position,
        department,
        email,
        phone,
        country,
        message,
        name
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
    
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD
        }
    });
    
    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: 'alexlueng@icloud.com',
        subject: 'Olintek Contact Information',
        html: render(ContactEmail(emailPayload))
    };
    
    const sendMailPromise = () => new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error sending email: ", error);
                reject(error);
            } else {
                resolve(info);
            }
        });
    });

    // return NextResponse.json('Hello olintek')
    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent successfully', status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Email sent failed', status: 500 });
    }
}