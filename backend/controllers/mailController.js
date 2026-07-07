import { sendEmail } from "../services/mailService.js";

export const testMail = async (req, res) => {
  try {
    await sendEmail({
      to: "salina.mainali@thamescollege.edu.np",
      subject: "Testing Mailjet",
      html: "<h1>Hello from Medicare</h1>",
    });

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
};