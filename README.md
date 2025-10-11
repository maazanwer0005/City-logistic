# CityLinx Logistics Website

A complete logistics website for CityLinx LLC, featuring responsive design, contact forms, carrier applications, and backend email functionality.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Forms**: Working contact form with email notifications
- **Carrier Applications**: Complete carrier application form with validation
- **Mobile Navigation**: Smooth mobile menu with hamburger toggle
- **Back to Top**: Convenient back-to-top button on all pages
- **Interactive Maps**: Location maps with markers
- **Email Integration**: Backend email service for form submissions

## Pages

1. **Home** (`index.html`) - Landing page with services overview
2. **About Us** (`about.html`) - Company information and mission
3. **Services** (`services.html`) - Service offerings overview
4. **Contact** (`contact.html`) - Contact form and company details
5. **Become a Carrier** (`become-a-carrier.html`) - Carrier application form
6. **Service Details**:
   - Drayage (`drayage.html`)
   - OTR Over the Road (`otr-over-the-road.html`)
   - Warehousing and Transloading (`warehousing-and-transloading.html`)

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the backend directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   TO_EMAIL=clark@citylinx.com
   PORT=5000
   NODE_ENV=development
   ```

   **Note**: For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an App Password (not your regular password)
   - Use the App Password in the `EMAIL_PASS` field

5. **Start the backend server**:
   ```bash
   npm start
   ```

6. **Open the website**:
   - Navigate to the project root directory
   - Open `index.html` in your web browser
   - Or use a local server like Live Server extension in VS Code

## Project Structure

```
City-logistic/
├── index.html                 # Homepage
├── about.html                 # About page
├── services.html              # Services page
├── contact.html               # Contact page
├── become-a-carrier.html      # Carrier application
├── drayage.html              # Drayage service details
├── otr-over-the-road.html    # OTR service details
├── warehousing-and-transloading.html # Warehousing service details
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── main.js               # JavaScript functionality
├── images/                   # All website images
└── backend/
    ├── server.js             # Node.js backend server
    ├── package.json          # Backend dependencies
    └── .env                  # Environment variables (create this)
```

## Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript (ES6+)**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Nodemailer**: Email service
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Key Features Implementation

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-close on link click or outside click

### Form Validation
- Client-side validation for required fields
- Email format validation
- Real-time error feedback
- Server-side validation and error handling

### Email Integration
- Contact form submissions sent via email
- Carrier applications sent via email
- Professional HTML email templates
- Error handling and success notifications

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Responsive images and typography
- Touch-friendly interface elements

## Customization

### Company Information
To update company information, modify the following in all HTML files:
- Company name: Search for "CityLinx" and replace
- Address: Search for "Casper, WY 82601" and replace
- Phone: Search for "(757) 356-6404" and replace
- Email: Search for "clark@citylinx.com" and replace

### Colors
The main brand colors are defined in Tailwind CSS classes:
- Primary Red: `#ed1e28` (`bg-[#ed1e28]`)
- Dark Blue: `#2C3674` (`bg-[#2C3674]`)
- Light Gray: `#E8EAF0` (`bg-[#E8EAF0]`)

### Images
Replace images in the `images/` directory:
- Logo: `city_Linx_Logo_Photo-removebg-preview.png`
- Service images: `service1.jpg`, `service2.jpg`, `service3.jpg`
- Hero images: `banner1.jpg`, `new.jpg`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images
- Minified CSS and JavaScript
- Lazy loading for images
- Efficient animations
- Mobile-optimized loading

## Security

- Form validation (client and server-side)
- Email sanitization
- CORS protection
- Environment variable protection

## Support

For technical support or customization requests, contact the development team.

---

**CityLinx LLC** - Professional Logistics Solutions
© 2025 CityLinx LLC. All rights reserved.
