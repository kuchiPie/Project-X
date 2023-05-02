import axios from "axios";
// import { generateConfig } from "../utility/emailUtils";
import nodemailer from "nodemailer";
import { auth, mailoptions } from "../constants/constant.js";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail(req, res) {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      // console.log(accessToken)
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "20bds050@iiitdwd.ac.in",
          accessToken: accessToken,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
        }
      });
  
      const mailOptions = {
        from: "Shreyas &lt;20bds050@iiitdwd.ac.in>",
        to: req.body.receiver,
        subject: req.body.subject,
        text: req.body.text
      };
  
      const result = await transport.sendMail(mailOptions);
      res.send(result);
      console.log(result, "sent successfully");
    } catch (error) {
      console.log(error, "email not sent");
      res.send(error);
    }
  }

export {
  sendMail
};