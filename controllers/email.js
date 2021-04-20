const { response, request } = require('express');
const nodemailer = require('nodemailer');
require ('dotenv').config();

const emailPost = async(req, res = response) => {

    const { name, email, subject, message } = req.body;

    console.log(req.body);

    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>Subject: ${subject}</li>
    </ul>
    <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 465,
        secure: true,
        auth: {
            user: process.env.nodemailerUser,
            pass: process.env.nodemailerPass
        }
    });

    let mailOptions = {
        from: "Correo origen",
        to: process.env.CorreoDestino,
        subject: 'Asunto del correo',
        html: contentHTML
    }

    const info = transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            res.status(500).send(error.message);
        } else {
            console.log('Email enviado', info.messageId);
            res.status(200).jsonp(req.body);
        }
    });

    res.redirect('/exito.html')

}

module.exports = { emailPost }