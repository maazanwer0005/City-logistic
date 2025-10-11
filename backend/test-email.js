// Email Test Script for CityLinx
// Run this to test email configuration

const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER || 'citylinxlogistics@gmail.com');
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');
  console.log('TO_EMAIL:', process.env.TO_EMAIL || '476kyhbbwq@cmhvzylmfc.com');
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "citylinxlogistics@gmail.com",
      pass: process.env.EMAIL_PASS || "your-gmail-app-password",
    },
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    const result = await transporter.sendMail({
      from: `"CityLinx Test" <${process.env.EMAIL_USER || "citylinxlogistics@gmail.com"}>`,
      to: process.env.TO_EMAIL || "476kyhbbwq@cmhvzylmfc.com",
      subject: "Test Email from CityLinx",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email from CityLinx website.</p>
        <p>If you receive this, the email configuration is working correctly!</p>
        <p>Time: ${new Date().toISOString()}</p>
      `
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 AUTHENTICATION ERROR:');
      console.log('1. Make sure you have enabled 2-Factor Authentication on Gmail');
      console.log('2. Generate an App Password for Gmail');
      console.log('3. Use the App Password (not your regular password) in EMAIL_PASS');
    }
    
    if (error.code === 'ECONNECTION') {
      console.log('\n🔧 CONNECTION ERROR:');
      console.log('1. Check your internet connection');
      console.log('2. Make sure Gmail SMTP is not blocked by firewall');
    }
  }
}

testEmail();
