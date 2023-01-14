const mode = document.querySelector("#nav__mode");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector(".nav");
const mid = document.querySelector(".mid");
const midTittle = document.querySelectorAll(".mid__articule-title");
const footer = document.querySelector(".copyright");

const darkMode = () => {
  moon.style.display = "none";
  sun.style.display = "block";
  wrapper.classList.add("activeMode");
  nav.classList.add("activeMode");
  mid.classList.add("activeMode");
  midTittle.forEach((item) => {
    item.style.color = "rgb(242, 234, 234)";
  });
  footer.style.backgroundColor = "#141a1c";
};

const lightMode = () => {
  sun.style.display = "none";
  moon.style.display = "block";
  wrapper.classList.remove("activeMode");
  nav.classList.remove("activeMode");
  mid.classList.remove("activeMode");
  midTittle.forEach((item) => {
    item.style.color = "black";
  });
  footer.style.backgroundColor = "#253136";
};

moon.addEventListener("click", darkMode);
sun.addEventListener("click", lightMode);
