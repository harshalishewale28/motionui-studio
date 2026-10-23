
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuButton.textContent =
        nav.classList.contains("open") ? "×" : "☰";
    });
  }

  // Current year in every footer
  document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // Contact form: browser-side validation only
  const form = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");

  if (form && formMessage) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name = form.querySelector('[name="name"]').value.trim();
      formMessage.textContent =
        `Thank you, ${name}! Your form is valid. This demo does not send email yet.`;

      form.reset();
    });
  }
});
