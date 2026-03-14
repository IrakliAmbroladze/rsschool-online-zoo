import { createModal } from "../utils/createModal";

type User = {
  name: string;
  email: string;
};

export const Header = (): void => {
  const usernameEl = document.getElementById("user-name");
  if (!usernameEl) return;
  const user: User = {
    name: "Irakli",
    email: "ambroladzeirakli@gmail.com",
  };
  const isLoggedIn = true;
  if (isLoggedIn) {
    usernameEl.innerHTML = user.name;
  }
  createModal({
    triggerSelector: ".user",
    modalSelector: "#user-modal",
    activeClass: "show-user-modal",
  });
  const loggedIn = document.querySelector<HTMLElement>(
    "#user-modal .logged-in",
  );
  const notLoggedIn = document.querySelector<HTMLElement>(
    "#user-modal .non-logged-in",
  );

  if (loggedIn) loggedIn.style.display = isLoggedIn ? "flex" : "none";
  if (notLoggedIn) notLoggedIn.style.display = isLoggedIn ? "none" : "flex";
  const elUserLogged = document.querySelector(".logged-in");
  if (elUserLogged) {
    elUserLogged.innerHTML = `
          <div>name: ${user.name}</div>
          <div>${user.email}</div>
          <button id="btn-sign-in" class="btn btn--orange">
              Sign&nbspOut
           </button>
`;
  }
};
