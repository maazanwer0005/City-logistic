// const slider = document.getElementById("videoSlider");
// const videos = slider.querySelectorAll("video");
// const total = videos.length;
// const btns = [btn1, btn2, btn3];
// const mainHeading = document.getElementById("mainHeading");
// const subHeading = document.getElementById("subHeading");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// // Text content for each slide
// const textData = [
//   { h2: "Fast & Secure Logistics", h3: "For All Your Needs" },
//   { h2: "Delivering Excellence with", h3: "Passion and Innovation" },
//   { h2: "Multimodal Warehousing Solution", h3: "Seamless. Faster. Safer." },
// ];

// let index = 0;
// let timer;

// function updateSlider() {
//   // slide move
//   slider.style.transform = `translateX(-${index * 100}%)`;
//   // pause all videos
//   videos.forEach((v) => {
//     v.pause();
//     v.currentTime = 0;
//   });
//   // play active video
//   videos[index].play();
//   // update text
//   mainHeading.textContent = textData[index].h2;
//   subHeading.textContent = textData[index].h3;
//   // underline active button
//   btns.forEach((b, i) => {
//     b.classList.remove("border-b-4", "border-yellow-400");
//     b.classList.add("border-b-2", "border-transparent");
//     if (i === index) {
//       b.classList.remove("border-b-2", "border-transparent");
//       b.classList.add("border-b-4", "border-yellow-400");
//     }
//   });
// }

// function startAutoPlay() {
//   clearInterval(timer);
//   timer = setInterval(() => {
//     index = (index + 1) % total;
//     updateSlider();
//   }, 15000); // 15 seconds
// }

// // Buttons click
// btns.forEach((b, i) => {
//   b.addEventListener("click", () => {
//     index = i;
//     updateSlider();
//     startAutoPlay();
//   });
// });

// // Arrows click
// nextBtn.addEventListener("click", () => {
//   index = (index + 1) % total;
//   updateSlider();
//   startAutoPlay();
// });

// prevBtn.addEventListener("click", () => {
//   index = (index - 1 + total) % total;
//   updateSlider();
//   startAutoPlay();
// });

// // init
// updateSlider();
// startAutoPlay(); // Main JavaScript for Prime Logistics Solutions Website

const slider = document.getElementById("videoSlider");
const videos = slider.querySelectorAll("video");
const total = videos.length;
const btns = [btn1, btn2, btn3];
const mainHeading = document.getElementById("mainHeading");
const subHeading = document.getElementById("subHeading");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Text content for each slide
const textData = [
  { h2: "Fast & Secure Logistics", h3: "For All Your Needs" , h2size: "text-[40px]" },
  { h2: "Delivering Excellence with", h3: "Passion and Innovation" , h2size: "text-[80px]" },
  { h2: "Multimodal Warehousing Solution" , h3: "Seamless. Faster. Safer." , h2size: "text-[10px]" },
];

let index = 0;
let timer;

function updateSlider() {
  // slide move
  slider.style.transform = `translateX(-${index * 100}%)`;
  // pause all videos
  videos.forEach((v) => {
    v.pause();
    v.currentTime = 0;
  });
  // play active video
  videos[index].play();
  // update text
  mainHeading.textContent = textData[index].h2;
  subHeading.textContent = textData[index].h3;
  // underline active button
  btns.forEach((b, i) => {
    b.classList.remove("border-b-4", "border-yellow-400");
    b.classList.add("border-b-2", "border-transparent");
    if (i === index) {
      b.classList.remove("border-b-2", "border-transparent");
      b.classList.add("border-b-4", "border-yellow-400");
    }
  });
}

function startAutoPlay() {
  clearInterval(timer);
  timer = setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
  }, 15000); // 15 seconds
}

// Buttons click
btns.forEach((b, i) => {
  b.addEventListener("click", () => {
    index = i;
    updateSlider();
    startAutoPlay();
  });
});

// Arrows click
nextBtn.addEventListener("click", () => {
  index = (index + 1) % total;
  updateSlider();
  startAutoPlay();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateSlider();
  startAutoPlay();
});

// init
updateSlider();
startAutoPlay();

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavigation();
  initContactForm();
  initSmoothScrolling();
  initAnimations();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .nav-home");

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
    });
  }

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.backdropFilter = "none";
      }
    }
  });
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Validate form
      if (validateForm(data)) {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        contactForm.classList.add("loading");

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
          // Reset form
          contactForm.reset();

          // Show success message
          showMessage(
            "Thank you for your inquiry! We will get back to you within 24 hours.",
            "success"
          );

          // Reset button
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          contactForm.classList.remove("loading");
        }, 2000);
      }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        // Remove error state on input
        this.classList.remove("error");
        const errorMsg = this.parentNode.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  }
}

// Form validation
function validateForm(data) {
  let isValid = true;
  const requiredFields = ["name", "email", "phone"];

  requiredFields.forEach((field) => {
    const input = document.getElementById(field);
    if (input && !data[field].trim()) {
      isValid = false;
      showFieldError(input, "This field is required");
    }
  });

  // Email validation
  const email = document.getElementById("email");
  if (email && data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      isValid = false;
      showFieldError(email, "Please enter a valid email address");
    }
  }

  // Phone validation
  const phone = document.getElementById("phone");
  if (phone && data.phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(data.phone.replace(/[\s\-\(\)]/g, ""))) {
      isValid = false;
      showFieldError(phone, "Please enter a valid phone number");
    }
  }

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Required field validation
  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required";
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
  }

  // Phone validation
  if (field.type === "tel" && value) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
      isValid = false;
      errorMessage = "Please enter a valid phone number";
    }
  }

  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError(field);
  }
}

function showFieldError(field, message) {
  field.classList.add("error");

  // Remove existing error message
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
  field.classList.remove("error");
  const errorMsg = field.parentNode.querySelector(".error-message");
  if (errorMsg) {
    errorMsg.remove();
  }
}

function showMessage(message, type = "info") {
  // Remove existing messages
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}-message`;
  messageDiv.textContent = message;

  // Insert message
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.insertBefore(messageDiv, contactForm.firstChild);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize animations
function initAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .service-card, .mv-card, .value-card, .team-member, .industry-card, .step, .faq-item"
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Utility functions
function formatPhoneNumber(input) {
  // Remove all non-numeric characters
  let value = input.value.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX
  if (value.length >= 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  } else if (value.length >= 3) {
    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
    value = `(${value}`;
  }

  input.value = value;
}

// Add phone formatting to phone inputs
document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function () {
      formatPhoneNumber(this);
    });
  });
});

// Lazy loading for images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function () {
  // Navbar scroll effect (already handled above)

  // Back to top button visibility
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (backToTopBtn) {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
      backToTopBtn.style.opacity = "1";
    } else {
      backToTopBtn.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopBtn.style.display = "none";
        }
      }, 300);
    }
  }
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Error handling for missing elements
function safeQuerySelector(selector) {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.warn(`Element not found: ${selector}`);
    return null;
  }
}

// Console message for developers
console.log(
  "%cCityLinx Logistics",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cWebsite loaded successfully!",
  "color: #059669; font-size: 14px;"
);

const map = L.map("leaflet-map").setView([42.8666, -106.3131], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const marker = L.marker([42.8666, -106.3131])
  .addTo(map)
  .bindPopup("<b>CITYLINX LLC</b><br>Casper, WY 82601")
  .openPopup();
