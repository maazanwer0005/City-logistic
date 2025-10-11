import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('../'));

// Create global transporter for email sending
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "m.maazcodezyra@gmail.com",
    pass: process.env.EMAIL_PASS || "jhsl urcs mfey fexo",
  },
});

// Contact form endpoint
app.post("/sendMail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Name, email, and message are required" 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: "Please enter a valid email address" 
    });
  }

  try {
    console.log("Attempting to send email...");
    console.log("From:", process.env.EMAIL_USER || "citylinxlogistics@gmail.com");
    console.log("To:", process.env.TO_EMAIL || "476kyhbbwq@cmhvzylmfc.com");
    
    const mailOptions = {
      from: `"CityLinx Logistics" <${process.env.EMAIL_USER || "citylinxlogistics@gmail.com"}>`,
      to: process.env.TO_EMAIL || "476kyhbbwq@cmhvzylmfc.com",
      subject: "New Contact Form Submission - CityLinx Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ed1e28;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from the CityLinx website contact form.
          </p>
        </div>
      `,
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);

    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully" 
    });
  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send email. Please try again later." 
    });
  }
});

// Carrier application endpoint
app.post("/submitCarrierApplication", async (req, res) => {
  const carrierData = req.body;

  // Validate required fields
  const requiredFields = ['firstName', 'lastName', 'carrierName', 'primaryPhone', 'email'];
  const missingFields = requiredFields.filter(field => !carrierData[field]);
  
  if (missingFields.length > 0) {
    return res.status(400).json({ 
      success: false, 
      message: `Missing required fields: ${missingFields.join(', ')}` 
    });
  }

  try {
    console.log("Attempting to send carrier application email...");
    console.log("From:", process.env.EMAIL_USER || "citylinxlogistics@gmail.com");
    console.log("To:", process.env.TO_EMAIL || "476kyhbbwq@cmhvzylmfc.com");
    
    const mailOptions = {
      from: `"CityLinx Logistics" <${process.env.EMAIL_USER || "citylinxlogistics@gmail.com"}>`,
      to: process.env.TO_EMAIL || "476kyhbbwq@cmhvzylmfc.com",
      subject: "New Carrier Application - CityLinx",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ed1e28;">New Carrier Application</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${carrierData.firstName} ${carrierData.middleName || ''} ${carrierData.lastName} ${carrierData.suffix || ''}</p>
            <p><strong>Address:</strong> ${carrierData.address}, ${carrierData.city}, ${carrierData.state} ${carrierData.zipCode}, ${carrierData.country}</p>
            
            <h3>Carrier Information</h3>
            <p><strong>Carrier Name:</strong> ${carrierData.carrierName}</p>
            <p><strong>Contact Person:</strong> ${carrierData.contactPerson}</p>
            <p><strong>EIN:</strong> ${carrierData.ein || 'Not provided'}</p>
            
            <h3>Contact Details</h3>
            <p><strong>Primary Phone:</strong> ${carrierData.primaryPhone}</p>
            <p><strong>Cell Phone:</strong> ${carrierData.cellPhone || 'Not provided'}</p>
            <p><strong>Email:</strong> ${carrierData.email}</p>
            <p><strong>Confirm Email:</strong> ${carrierData.confirmEmail || 'Not provided'}</p>
            <p><strong>Preferred Contact Method:</strong> ${carrierData.preferredContact || 'Not specified'}</p>
            <p><strong>Best Time to Contact:</strong> ${carrierData.bestTimeToContact || 'Not specified'}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This application was submitted through the CityLinx website.
          </p>
        </div>
      `,
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log("Carrier application email sent successfully:", result.messageId);

    res.status(200).json({ 
      success: true, 
      message: "Carrier application submitted successfully" 
    });
  } catch (err) {
    console.error("Carrier application error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Failed to submit application. Please try again later." 
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "CityLinx backend server is running",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ 
    success: false, 
    message: "Internal server error" 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: "Endpoint not found" 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ CityLinx server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER || "clark@citylinx.com"}`);
});