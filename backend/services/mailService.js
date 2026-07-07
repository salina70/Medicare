import Mailjet from "node-mailjet";

export const sendEmail = async ({ to, subject, html }) => {
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
  });
  

  const val=  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAIL_FROM,
          Name: "Medicare",
        },
        To: [{ Email: to }],
        Subject: subject,
        HTMLPart: html,
      },
    ],
  });
console.log(val, 'ascacs')
  return val;
  
};