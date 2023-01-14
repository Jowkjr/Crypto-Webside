const imageSlider = document.querySelector("#slider");
const textSlider = document.querySelector("#textSlider");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
// const banerImages = [...document.querySelectorAll("#banerImages")];
const linkArticule = document.querySelector("#linkArticule");
let dots = [...document.querySelectorAll("#dot")];
const news = document.querySelector("#news");

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

// news.addEventListener("click", () => {});

const slideList = [
  // {
  //   img: "images/image1.png",
  //   text: "Bitcoin, Ethereum crash continues as US 10-year Treasury yield surpasses June high."
  // },
  {
    img: "images/image2.jpg",
    text: "  Bitcoin price loses $20K, ETH price drops 8% after monumental Ethereum Merge.",
    link: "Articule/articule.html"
  },
  {
    img: "images/image3.jpg",
    text: "El Salvador's pro-Bitcoin president Nayib Bukele announces reelection bid.",
    link: "Articule/articule_2.html"
  },

  {
    img: "images/image4.jpg",
    text: "Bitcoin better than physical property for commoners, says Michael Saylor",
    link: "Articule/articule_3.html"
  }
];

const time = 3000;
let active = 0;

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  imageSlider.src = slideList[active].img;
  textSlider.textContent = slideList[active].text;
  linkArticule.href = slideList[active].link;
  changeDots();
};

let stopInterval = setInterval(changeSlide, time);

const nextSlide = () => {
  active++;
  clearInterval(stopInterval);
  if (active === slideList.length) {
    active = 0;
  }
  imageSlider.src = slideList[active].img;
  textSlider.textContent = slideList[active].text;
  linkArticule.href = slideList[active].link;
  stopInterval = setInterval(changeSlide, time);
  changeDots();
};

const pervSlide = () => {
  active--;
  clearInterval(stopInterval);
  if (active < 0) {
    active = slideList.length - 1;
  }
  imageSlider.src = slideList[active].img;
  textSlider.textContent = slideList[active].text;
  linkArticule.href = slideList[active].link;
  stopInterval = setInterval(changeSlide, time);
  changeDots();
};

const showArticule = () => {
  banerImages.addEventListener("click", showArticule);
  const banerImages = [...document.querySelectorAll("#banerImages")];
};

const changeDots = () => {
  dots.forEach((dot) => {
    dot.classList.contains("active");
    dot.classList.remove("active");
  });
  dots[active].classList.add("active");
};

moon.addEventListener("click", darkMode);
sun.addEventListener("click", lightMode);
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", pervSlide);
