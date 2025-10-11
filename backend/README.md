# CityLinx Backend Server

This is the backend server for the CityLinx website that handles form submissions and email sending.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the backend directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Recipient Email
TO_EMAIL=clark@citylinx.com

# Server Port
PORT=5000
```

### 3. Gmail App Password Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings > Security > App passwords
3. Generate an app password for "Mail"
4. Use this app password in the `EMAIL_PASS` variable

### 4. Start the Server
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Contact Form Submission
- **POST** `/sendMail`
- **Body**: `{ name, email, phone, message }`
- **Response**: `{ success: boolean, message: string }`

### Carrier Application Submission
- **POST** `/submitCarrierApplication`
- **Body**: Carrier application data
- **Response**: `{ success: boolean, message: string }`

### Health Check
- **GET** `/health`
- **Response**: `{ status: "OK", message: "CityLinx backend server is running" }`

## Features

- ✅ Contact form email sending
- ✅ Carrier application processing
- ✅ Form validation
- ✅ Error handling
- ✅ Professional email templates
- ✅ CORS enabled for frontend integration

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check Gmail app password and 2FA settings
2. **CORS errors**: Ensure frontend is calling the correct backend URL
3. **Port conflicts**: Change PORT in .env file if 5000 is occupied

### Testing the Backend:

You can test the endpoints using curl:

```bash
# Test contact form
curl -X POST http://localhost:5000/sendMail \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'

# Test health check
curl http://localhost:5000/health
```

## Production Deployment

For production deployment:

1. Use a proper email service (SendGrid, Mailgun, etc.)
2. Set up environment variables on your hosting platform
3. Use HTTPS for secure communication
4. Implement rate limiting for form submissions
5. Add logging and monitoring
