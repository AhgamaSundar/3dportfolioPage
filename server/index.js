import express from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors'
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/sde", (req, res) => {
    res.json("hello mortals");
})

app.listen(PORT, ()=> {
    console.log("server is online")
})
