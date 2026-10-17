const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const crypto = require("crypto");
require("dotenv").config();

const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Frontend connection
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

// Rate limits
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    success: false,
    message: "Too many enquiries. Please try again later.",
  },
});

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    success: false,
    message: "Too many OTP requests. Please try again later.",
  },
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Temporary OTP storage for local development.
// Use persistent, shared storage for production.
const pendingOtps = new Map();

const OTP_SECRET = process.env.OTP_SECRET || process.env.SMTP_PASS;

// Basic routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "KSquare Softtech Backend is running!",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working correctly!",
  });
});

// Helpers
function escapeHtml(value = "") {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return String(value).replace(/[&<>"']/g, (char) => entities[char]);
}

function isValidEmail(email) {
  return (
    typeof email === "string" &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

const courseReplies = {
  "Full Stack Development":
    "Thank you for your interest in our Full Stack Development course. Our team will contact you soon.",
  "Data Science":
    "Thank you for your interest in our Data Science course. Our team will contact you soon.",
  "Data Analytics":
    "Thank you for your interest in our Data Analytics course. Our team will contact you soon.",
  Python:
    "Thank you for your interest in our Python course. Our team will contact you soon.",
  "Digital Marketing":
    "Thank you for your interest in our Digital Marketing course. Our team will contact you soon.",
  "Website Development":
    "Thank you for your interest in our Website Development service. Our team will contact you soon.",
  "App Development":
    "Thank you for your interest in our App Development service. Our team will contact you soon.",
  Internship:
    "Thank you for your interest in our internship program. Our team will contact you soon.",
  Other:
    "Thank you for contacting KSquare Softtech. Our team will contact you soon.",
};

// Existing enquiry API
app.post("/api/enquiry", enquiryLimiter, async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof course !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !course.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const studentName = name.trim();
    const studentEmail = email.trim();
    const studentPhone = phone.trim();
    const selectedCourse = course.trim();
    const studentMessage =
      typeof message === "string" ? message.trim() : "";

    if (
      studentName.length > 100 ||
      studentEmail.length > 254 ||
      studentPhone.length > 30 ||
      selectedCourse.length > 100 ||
      studentMessage.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields are too long.",
      });
    }

    if (!isValidEmail(studentEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Save enquiry to MySQL
    const [result] = await db.execute(
      `INSERT INTO enquiries
        (name, email, phone, course, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        studentName,
        studentEmail,
        studentPhone,
        selectedCourse,
        studentMessage || null,
      ]
    );

    let adminEmailSent = false;
    let autoReplySent = false;

    // Notify admin
    try {
      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS ||
        !process.env.ADMIN_EMAIL
      ) {
        throw new Error("SMTP configuration is incomplete.");
      }

      await transporter.sendMail({
        from: `"KSquare Softtech Website" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: studentEmail,
        subject: `New Website Enquiry - ${selectedCourse}`,
        text: [
          `Name: ${studentName}`,
          `Email: ${studentEmail}`,
          `Phone: ${studentPhone}`,
          `Course/Service: ${selectedCourse}`,
          `Message: ${studentMessage || "No message provided."}`,
        ].join("\n"),
        html: `
          <h2>New Website Enquiry</h2>
          <p><b>Name:</b> ${escapeHtml(studentName)}</p>
          <p><b>Email:</b> ${escapeHtml(studentEmail)}</p>
          <p><b>Phone:</b> ${escapeHtml(studentPhone)}</p>
          <p><b>Course/Service:</b> ${escapeHtml(selectedCourse)}</p>
          <p><b>Message:</b> ${escapeHtml(studentMessage || "No message provided.")}</p>
        `,
      });

      adminEmailSent = true;
    } catch (error) {
      console.error("Admin email failed:", error.message);
    }

    // Automatic reply to student
    try {
      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS
      ) {
        throw new Error("SMTP configuration is incomplete.");
      }

      const replyText =
        courseReplies[selectedCourse] ||
        "Thank you for contacting KSquare Softtech. Our team will contact you soon.";

      await transporter.sendMail({
        from: `"KSquare Softtech" <${process.env.SMTP_USER}>`,
        to: studentEmail,
        subject: `We received your enquiry - ${selectedCourse}`,
        text: `Hi ${studentName},\n\n${replyText}\n\nRegards,\nKSquare Softtech\nLearn Skills. Build Careers.`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.7;color:#222">
            <h2>Thank you for contacting KSquare Softtech!</h2>
            <p>Hi ${escapeHtml(studentName)},</p>
            <p>${escapeHtml(replyText)}</p>
            <p>Regards,<br><b>KSquare Softtech</b><br>Learn Skills. Build Careers.</p>
          </div>
        `,
      });

      autoReplySent = true;
    } catch (error) {
      console.error("Student auto-reply failed:", error.message);
    }

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been saved successfully.",
      enquiryId: result.insertId,
      adminEmailSent,
      autoReplySent,
    });
  } catch (error) {
    console.error("Enquiry processing failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save your enquiry right now.",
    });
  }
});

// Send email OTP
app.post("/api/student/send-otp", otpLimiter, async (req, res) => {
  try {
    const email =
      typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    if (!OTP_SECRET) {
      return res.status(500).json({
        success: false,
        message: "OTP security is not configured.",
      });
    }

    // Invalidate any previous OTP for this email.
    pendingOtps.delete(email);

    const otp = crypto.randomInt(100000, 1000000).toString();

    const otpHash = crypto
      .createHmac("sha256", OTP_SECRET)
      .update(otp)
      .digest("hex");

    // OTP expires in 5 minutes.
    pendingOtps.set(email, {
      hash: otpHash,
      expiresAt: Date.now() + 5 * 60 * 1000,
      attempts: 0,
    });

    try {
      await transporter.sendMail({
        from: `"KSquare Softtech" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Your KSquare Softtech verification code",
        text: `Your verification code is ${otp}. It expires in 5 minutes. Do not share this code with anyone.`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.7">
            <h2>Email Verification</h2>
            <p>Your KSquare Softtech verification code is:</p>
            <h1 style="letter-spacing:6px">${otp}</h1>
            <p>This code expires in 5 minutes. Do not share it with anyone.</p>
          </div>
        `,
      });
    } catch (emailError) {
      pendingOtps.delete(email);
      throw emailError;
    }

    return res.json({
      success: true,
      message: "OTP sent to your email. Check your inbox.",
    });
  } catch (error) {
    console.error("OTP email failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to send OTP. Please try again later.",
    });
  }
});

// Verify email OTP
app.post("/api/student/verify-otp", otpLimiter, async (req, res) => {
  try {
    const email =
      typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    const otp =
      typeof req.body?.otp === "string" ? req.body.otp.trim() : "";

    if (!isValidEmail(email) || !/^\d{6}$/.test(otp)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email and six-digit OTP.",
      });
    }

    const record = pendingOtps.get(email);

    if (!record || Date.now() > record.expiresAt) {
      pendingOtps.delete(email);

      return res.status(400).json({
        success: false,
        message: "OTP expired or not found. Request a new OTP.",
      });
    }

    record.attempts += 1;

    if (record.attempts > 5) {
      pendingOtps.delete(email);

      return res.status(429).json({
        success: false,
        message: "Too many incorrect attempts. Request a new OTP.",
      });
    }

    const submittedHash = crypto
      .createHmac("sha256", OTP_SECRET)
      .update(otp)
      .digest("hex");

    const matches = crypto.timingSafeEqual(
      Buffer.from(submittedHash, "hex"),
      Buffer.from(record.hash, "hex")
    );

    if (!matches) {
      return res.status(400).json({
        success: false,
        message: "Incorrect OTP.",
      });
    }

    // OTP is single-use.
    pendingOtps.delete(email);

    return res.json({
      success: true,
      emailVerified: true,
      message: "Email verified successfully.",
    });
  } catch (error) {
    console.error("OTP verification failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to verify OTP right now.",
    });
  }
});

// Start backend after checking MySQL
// Student registration API
app.post("/api/student/register", async (req, res) => {
  try {
    const {
      fullName,
      phone,
      whatsapp,
      email,
      college,
      department,
      year,
      interestType,
      course,
      learningMode,
      joiningTimeline,
      contactConsent,
      marketingConsent,
    } = req.body || {};

    if (
      !fullName?.trim() ||
      !/^[6-9]\d{9}$/.test(phone || "") ||
      !college?.trim() ||
      !department?.trim() ||
      !year ||
      !interestType ||
      !course ||
      contactConsent !== true
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Do not trust the frontend's phoneVerified flag.
    // MSG91 server-side access-token verification must be added
    // before enabling registration saves.
    return res.status(501).json({
      success: false,
      message: "Mobile OTP verification integration is not finished yet.",
    });
  } catch (error) {
    console.error("Student registration error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Registration failed.",
    });
  }
});

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();

    console.log("MySQL database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Backend running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
