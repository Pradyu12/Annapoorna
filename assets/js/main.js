const FORM_ENDPOINT = ""; // TODO: Set your form backend endpoint, e.g. "https://api.example.com/contact"

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initNavClose();
  initReveal();
  initYear();
  initBackToTop();
  initForms();
  initWaLinks();
  initHeroParallax();
});

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initNavClose() {
  const toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;
  const syncBody = () => {
    document.body.classList.toggle("nav-open", toggle.checked);
  };
  toggle.addEventListener("change", syncBody);
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.checked = false;
      document.body.classList.remove("nav-open");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      document.body.classList.remove("nav-open");
    }
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((item) => observer.observe(item));
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initBackToTop() {
  const button = document.querySelector(".to-top");
  if (!button) return;
  const onScroll = () => {
    button.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initWaLinks() {
  const number = document.body.getAttribute("data-wa-number") || "";
  document.querySelectorAll("a[data-wa]").forEach((link) => {
    const message = link.getAttribute("data-wa") || "Hello Annapoorna,";
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  });
}

function initHeroParallax() {
  const art = document.querySelector(".hero-art");
  if (!art) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const hero = document.querySelector(".hero");
  if (!hero) return;
  let raf = null;
  hero.addEventListener("mousemove", (event) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      art.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 0)`;
      raf = null;
    });
  });
  hero.addEventListener("mouseleave", () => {
    art.style.transform = "";
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s0-9]{7,18}$/;

function initForms() {
  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.addEventListener("submit", (event) => handleSubmit(event, form));
    form.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("input", () => clearFieldError(input));
      input.addEventListener("change", () => clearFieldError(input));
    });
  });
}

function clearFieldError(input) {
  const field = input.closest(".field");
  if (field) field.classList.remove("invalid");
  const status = document.querySelector(".form-status");
  if (status) status.textContent = "";
}

function setFieldError(input, message) {
  const field = input.closest(".field");
  if (!field) return;
  field.classList.add("invalid");
  const error = field.querySelector(".field-error");
  if (error) error.textContent = message;
}

function showStatus(form, message, type) {
  const status = form.querySelector(".form-status");
  if (!status) return;
  status.textContent = message;
  status.classList.remove("success", "error");
  status.classList.add(type);
}

function handleSubmit(event, form) {
  event.preventDefault();
  const honeypot = form.querySelector(".hp");
  if (honeypot && honeypot.value) {
    showStatus(form, "Something went wrong. Please try again.", "error");
    return;
  }
  let firstInvalid = null;
  const fields = form.querySelectorAll("input[required], select[required], textarea[required]");
  fields.forEach((field) => {
    const value = field.value.trim();
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (field.type === "email" && !EMAIL_RE.test(value)) {
      error = "Please enter a valid email address.";
    } else if (field.type === "tel" && !PHONE_RE.test(value)) {
      error = "Please enter a valid phone number.";
    }
    if (error && !firstInvalid) firstInvalid = field;
    if (error) setFieldError(field, error);
    else clearFieldError(field);
  });
  const consent = form.querySelector('input[type="checkbox"][required]');
  if (consent && !consent.checked) {
    if (!firstInvalid) firstInvalid = consent;
    showStatus(form, "Please accept the consent checkbox.", "error");
    return;
  }
  if (firstInvalid) {
    showStatus(form, "Please correct the highlighted fields.", "error");
    firstInvalid.focus();
    return;
  }
  const submit = form.querySelector('button[type="submit"]');
  const originalLabel = submit ? submit.textContent : "";
  if (submit) {
    submit.disabled = true;
    submit.textContent = "Sending…";
  }
  const payload = Object.fromEntries(new FormData(form).entries());
  if (!FORM_ENDPOINT) {
    showStatus(
      form,
      "The enquiry form is not connected yet. Please call us on +91 91086 53934 / +91 98450 06172 or email sales@annapoornaentp.com.",
      "error"
    );
    if (submit) {
      submit.disabled = false;
      submit.textContent = originalLabel;
    }
    return;
  }

  fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      showStatus(form, "Thank you! Your enquiry has been received. Our team will get back to you shortly.", "success");
      form.reset();
    })
    .catch(() => {
      showStatus(form, "Something went wrong while sending. Please call or WhatsApp us instead.", "error");
    })
    .finally(() => {
      if (submit) {
        submit.disabled = false;
        submit.textContent = originalLabel;
      }
    });
}
