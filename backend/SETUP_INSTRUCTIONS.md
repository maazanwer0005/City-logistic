# CityLinx Backend Setup Instructions

## Email Configuration

To make the contact form work properly, you need to set up email credentials:

### 1. Create a .env file in the backend folder

Create a file named `.env` in the `backend` folder with the following content:

```
# Email Configuration for CityLinx Contact Form
EMAIL_USER=citylinxlogistics@gmail.com
EMAIL_PASS=your-gmail-app-password
TO_EMAIL=476kyhbbwq@cmhvzylmfc.com
PORT=5000
```

### 2. Gmail Setup Instructions

1. **Use a Gmail account** for sending emails
2. **Enable 2-Factor Authentication** on your Gmail account
3. **Generate an App Password**:
   - Go to Google Account settings
   - Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 3. Update the .env file

Replace the following values:
- `your-email@gmail.com` → Your actual Gmail address
- `your-app-password` → Your Gmail App Password
- `clark@citylinx.com` → Email where you want to receive contact form submissions

### 4. Start the Server

```bash
cd backend
npm install
npm start
```

The server will run on `http://localhost:5000`

### 5. Test the Contact Form

1. Open `contact.html` in your browser
2. Fill out the contact form
3. Click Submit
4. Check your email for the contact form submission

## Troubleshooting

- **"Failed to send email"**: Check your Gmail credentials and App Password
- **"Connection refused"**: Make sure the backend server is running on port 5000
- **CORS errors**: The server is configured to allow all origins for development

## Features

- ✅ Contact form sends emails to specified address
- ✅ Carrier application form sends detailed emails
- ✅ Form validation on both frontend and backend
- ✅ Loading states and success messages
- ✅ Error handling and user feedback
