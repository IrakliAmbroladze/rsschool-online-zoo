import { slider } from "./utils/slider.js";
async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  el.innerHTML = await res.text();

  el.querySelector(".burger-menu")?.addEventListener("click", toggleMenu);
  el.querySelector(".close-modal")?.addEventListener("click", toggleMenu);
  setActiveNavLink();
}

function toggleMenu() {
  const modal = document.querySelector("#header .burger-modal");
  modal?.classList.toggle("show-burger-modal");
}
function setActiveNavLink() {
  const normalize = (path) => path.replace(/\/$/, "") || "/";

  const currentPath = normalize(window.location.pathname);

  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const linkPath = normalize(new URL(link.href).pathname);

    link.classList.toggle("highlight", linkPath === currentPath);
  });
}

loadComponent("#header", "/components/header.html");
loadComponent("#footer", "/components/footer.html");
const left_arrow = document.getElementById("sldr_left_arr");
const right_arrow = document.getElementById("sldr_right_arr");
const slider_container = document.getElementById("slider");

const container = document.getElementById("pets-container");
const viewport = container.offsetWidth - 80; //deducting padding
slider({
  prev_btn: left_arrow,
  next_btn: right_arrow,
  slider: slider_container,
  viewport,
  cardSelector: ".animals-card",
});
