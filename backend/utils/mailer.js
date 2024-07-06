import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready for our messages');
    // console.log(success);
  }
});

export default transporter;
