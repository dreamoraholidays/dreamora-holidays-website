const WHATSAPP_NUMBER = "919699983437";
const whatsappText = "Hello Dreamora Holidays! I want to know more about your Thailand tour packages.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});
