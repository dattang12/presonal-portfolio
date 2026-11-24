'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// light / dark theme toggle
const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");

const updateThemeLabel = function () {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  const label = "Switch to " + next + " mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
}

themeToggle.addEventListener("click", function () {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) { }
  updateThemeLabel();
});

updateThemeLabel();



// page navigation (nav buttons and pages must be in the same order)
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.textContent.trim().toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}
