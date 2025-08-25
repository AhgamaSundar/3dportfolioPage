import path from 'path'
import express from 'express';
import { fileURLToPath } from "url";
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"dist")))
app.get("/sde", (req, res) => {
    res.json("hello mortals");
})

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS
    }
});
contactEmail.verify((e) => {
    console.log(e ? e :"email can be sent")
})
app.post("/api/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    }
    contactEmail.sendMail(mail,  (error) => {
        if(error) {
            res.json(error);
        }
        else {
            res.json({code:200,status:"Message Sent"})
        }
    })
})
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist","index.html"));
});
app.listen(PORT, ()=> {
    console.log("server is online")
})
