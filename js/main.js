const track = document.getElementById("carousel-track");
if (track) {
  const slides = track.children.length;
  let carouselIndex = 0;

  function showSlide(i) {
    track.style.transform = `translateX(-${i * 15}%)`;
  }

  const nextCarousel = document.getElementById("next");
  const prevCarousel = document.getElementById("prev");

  if (nextCarousel) {
    nextCarousel.onclick = () => {
      carouselIndex = (carouselIndex + 1);
      showSlide(carouselIndex);
    };
  }

  if (prevCarousel) {
    prevCarousel.onclick = () => {
      carouselIndex = (carouselIndex - 1 + slides) % slides;
      showSlide(carouselIndex);
    };
  }

  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % slides;
    showSlide(carouselIndex);
  }, 7000);
}

const slider = document.getElementById("videoSlider");
if (slider) {
  const videos = slider.querySelectorAll("video");
  const total = videos.length;
  const btns = [window.btn1, window.btn2, window.btn3].filter(Boolean);
  const mainHeading = document.getElementById("mainHeading");
  const subHeading = document.getElementById("subHeading");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const textData = [
    {
      h2: "Fast & Secure Logistics",
      h3: "For All Your Needs",
    },
    {
      h2: "Delivering Excellence with",
      h3: "Passion and Innovation",
    },
    {
      h2: "Multimodal Warehousing Solution",
      h3: "Seamless. Faster. Safer.",
    },
  ];

  let index = 0;
  let timer;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    videos.forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
    if (videos[index]) videos[index].play();
    if (mainHeading) mainHeading.textContent = textData[index].h2;
    if (subHeading) subHeading.textContent = textData[index].h3;
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
    }, 15000);
  }

  btns.forEach((b, i) => {
    b.addEventListener("click", () => {
      index = i;
      updateSlider();
      startAutoPlay();
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      updateSlider();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      updateSlider();
      startAutoPlay();
    });
  }

  updateSlider();
  startAutoPlay();
}

document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initContactForm();
  initSmoothScrolling();
  initAnimations();
  initPhoneFormatting();
  initLazyLoading();
  initBackToTop();
  initIndustryCarousel();
  initIndustryStack();
});

function initNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .nav-home");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });

    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
    });
  }

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

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    if (validateForm(data)) {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        showMessage("Thank you for your inquiry! We will get back to you within 24 hours.", "success");
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }
  });

  const inputs = contactForm.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });
    input.addEventListener("input", function () {
      this.classList.remove("error");
      const errorMsg = this.parentNode.querySelector(".error-message");
      if (errorMsg) errorMsg.remove();
    });
  });
}

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

  const email = document.getElementById("email");
  if (email && data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      isValid = false;
      showFieldError(email, "Please enter a valid email address");
    }
  }

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

  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required";
  }

  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
  }

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
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) existingError.remove();

  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
  field.classList.remove("error");
  const errorMsg = field.parentNode.querySelector(".error-message");
  if (errorMsg) errorMsg.remove();
}

function showMessage(message, type = "info") {
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) existingMessage.remove();

  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message ${type}-message`;
  messageDiv.textContent = message;

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    setTimeout(() => {
      if (messageDiv.parentNode) messageDiv.remove();
    }, 5000);
  }
}

function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

function initAnimations() {
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

  const animatedElements = document.querySelectorAll(
    ".feature-card, .service-card, .mv-card, .value-card, .team-member, .industry-card, .step, .faq-item"
  );

  animatedElements.forEach((el) => observer.observe(el));
}

function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "");
  if (value.length >= 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  } else if (value.length >= 3) {
    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
    value = `(${value}`;
  }
  input.value = value;
}

function initPhoneFormatting() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach((input) => {
    input.addEventListener("input", function () {
      formatPhoneNumber(this);
    });
  });
}

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

function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
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
    });
  }
}

// Vertical, one-at-a-time Industry Carousel
function initIndustryCarousel() {
  const container = document.getElementById("industry-carousel");
  if (!container) return;

  const viewport = container.querySelector(".ic-viewport");
  const track = container.querySelector(".ic-track");
  if (!viewport || !track) return;

  const slides = Array.from(track.children);
  let index = 0;
  let timer;

  function getSlideHeight(i) {
    const el = slides[i];
    if (!el) return 0;
    // Temporarily ensure it's measurable
    const prev = el.style.display;
    el.style.display = "block";
    const h = el.getBoundingClientRect().height;
    el.style.display = prev;
    return h;
  }

  function getOffsetTo(indexTo) {
    let offset = 0;
    for (let i = 0; i < indexTo; i++) {
      offset += slides[i].getBoundingClientRect().height;
    }
    return offset;
  }

  function setViewportHeight(h) {
    viewport.style.height = `${h}px`;
  }

  function update(toIndex) {
    const total = slides.length;
    index = ((toIndex % total) + total) % total;
    // Ensure track uses current measured heights (responsive)
    const currentHeight = getSlideHeight(index);
    setViewportHeight(currentHeight);
    const offset = getOffsetTo(index);
    track.style.transform = `translateY(-${offset}px)`;
  }

  function onResize() {
    // Recalculate height and transform when viewport changes
    update(index);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => {
      update(index + 1);
    }, 7000);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  window.addEventListener("resize", onResize);
  // Initial layout after images load to avoid 0 heights
  const imgs = track.querySelectorAll("img");
  let loaded = 0;
  if (imgs.length) {
    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === imgs.length) {
          update(0);
          startAuto();
        }
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === imgs.length) {
            update(0);
            startAuto();
          }
        });
        img.addEventListener("error", () => {
          loaded++;
          if (loaded === imgs.length) {
            update(0);
            startAuto();
          }
        });
      }
    });
  } else {
    update(0);
    startAuto();
  }
}

// Tailwind flex-col vertical stack that keeps 6 visible items and appends a random clone every 7s
function initIndustryStack() {
  const container = document.getElementById("industry-stack");
  const track = document.getElementById("industry-track");
  if (!container || !track) return;

  const VISIBLE_COUNT = 6;
  let itemHeight = 0;
  let animating = false;
  let timer = null;

  function measure() {
    const first = track.children[0];
    if (!first) return;
    itemHeight = first.getBoundingClientRect().height;
    container.style.height = `${itemHeight * VISIBLE_COUNT}px`;
  }

  function pickRandomVisibleIndex() {
    const count = Math.min(VISIBLE_COUNT, track.children.length);
    return Math.floor(Math.random() * count);
  }

  function step() {
    if (animating || itemHeight === 0) return;
    animating = true;
    const idx = pickRandomVisibleIndex();
    const node = track.children[idx] || track.children[0];
    const clone = node.cloneNode(true);
    track.appendChild(clone);

    // Animate up by one item height
    track.style.transform = `translateY(-${itemHeight}px)`;

    const onDone = () => {
      track.removeEventListener("transitionend", onDone);
      if (track.children.length > VISIBLE_COUNT) {
        track.removeChild(track.firstElementChild);
      }
      // Reset transform without jump
      track.style.transition = "none";
      track.style.transform = "translateY(0)";
      void track.offsetHeight; // reflow
      track.style.transition = "transform 500ms ease-in-out";
      animating = false;
    };
    track.addEventListener("transitionend", onDone, { once: true });
  }

  function start() {
    stop();
    timer = setInterval(() => {
      measure();
      step();
    }, 7000);
  }

  function stop() {
    if (timer) clearInterval(timer);
  }

  // Prepare initial transition to match Tailwind classes
  track.style.transition = "transform 500ms ease-in-out";

  // Wait for images to ensure correct height
  const imgs = track.querySelectorAll("img");
  let loaded = 0;
  if (imgs.length === 0) {
    measure();
    start();
  } else {
    imgs.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === imgs.length) {
          measure();
          start();
        }
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === imgs.length) {
            measure();
            start();
          }
        });
        img.addEventListener("error", () => {
          loaded++;
          if (loaded === imgs.length) {
            measure();
            start();
          }
        });
      }
    });
  }

  window.addEventListener("resize", measure);
}

if (document.getElementById("leaflet-map")) {
  const map = L.map("leaflet-map").setView([42.8666, -106.3131], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  L.marker([42.8666, -106.3131])
    .addTo(map)
    .bindPopup("<b>CITYLINX LLC</b><br>Casper, WY 82601")
    .openPopup();
}
