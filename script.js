// ─── SMOOTH SCROLL (JS-based, lebih reliable dari CSS) ───
document.querySelectorAll('a.scroll-link[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector("nav").offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ─── FADE-UP ON SCROLL ───
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ─── ACTIVE NAV HIGHLIGHT ───
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAs.forEach((a) => {
    a.style.color = "";
    if (a.getAttribute("href") === "#" + current) {
      a.style.color = "var(--text)";
    }
  });
});

// ─── FORM SUBMIT ───
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.style.display = "block";
  status.textContent = "✓ Pesan terkirim! Gue balas secepatnya.";
  e.target.reset();
}
