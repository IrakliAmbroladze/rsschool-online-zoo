async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  const res = await fetch(url);
  const html = await res.text();

  el.innerHTML = html;
}

loadComponent("#header", "/components/header.html");
