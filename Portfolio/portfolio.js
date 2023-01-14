const btnAdd = document.querySelector("#btn-add");
const wrapper = document.querySelector("#wrapper");
const form = document.querySelector("#form");
const searchCrypto = document.querySelector("#search-crypto");
const closeForm = document.querySelector("#close");
const closeContent = document.querySelector("#close-content");

const ul = document.querySelector("#list");

const mode = document.querySelector("#nav__mode");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

// const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector(".nav");
const footer = document.querySelector(".copyright");

const darkMode = () => {
  moon.style.display = "none";
  sun.style.display = "block";
  wrapper.classList.add("activeMode");
  nav.classList.add("activeMode");
  footer.style.backgroundColor = "#141a1c";
};

const lightMode = () => {
  sun.style.display = "none";
  moon.style.display = "block";
  wrapper.classList.remove("activeMode");
  nav.classList.remove("activeMode");
  footer.style.backgroundColor = "#253136";
};

moon.addEventListener("click", darkMode);
sun.addEventListener("click", lightMode);
const addCoin = () => {
  wrapper.classList.add("active");
  form.style.display = "block";
  wrapper.after(form);
};

const exit = () => {
  wrapper.classList.remove("active");
  form.style.display = "none";
};

const getCrypto = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d";
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("Error");
      } else {
        return response.json();
      }
    })
    .then((json) => showTable(json))
    .catch((err) => console.log(err));
};

const showTable = (list) => {
  const ul = document.querySelector("#list");
  list.forEach((list) => {
    // console.log(list);
    const li = document.createElement("li");
    const image = document.createElement("img");
    const crypto = document.createElement("span");
    const id = document.createElement("span");
    const price = document.createElement("span");
    // const container = document.createElement("div");

    crypto.innerHTML = `${list.name}`;
    image.src = `${list.image}`;
    id.innerHTML = `${list.symbol}`;
    price.textContent = `${list.current_price}`;

    li.value = `${list.current_price}`;
    crypto.value = `${list.current_price}`;
    id.value = `${list.current_price}`;
    image.value = `${list.current_price}`;

    li.className = "list__item";
    li.id = "list__item";
    image.className = "list__img";
    crypto.className = "list__name";
    id.className = "list__id";

    ul.append(li);
    li.append(image);
    li.append(crypto);
    li.append(id);
  });
};

const searchWord = (e) => {
  const li = [...document.querySelectorAll(".list__item")];

  const value = e.target.value.toLowerCase();
  const ul = document.querySelector("#list");
  // ul.style.display = "flex";
  li.forEach((item) => {
    let text = item.textContent;
    if (text.toLocaleLowerCase().includes(value)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};
const content = document.querySelector("#content");
const formCoin = document.querySelector(".formCoin");

const specificationCoin = (e) => {
  const form = document.querySelector("#form");
  // const coin = e.target.textContent;
  // console.log(e.target.name);
  // const name = [...document.querySelectorAll(".list__name")];
  if (e.target) {
    // console.log(e.target.value);
    // console.log(e.currentTarget);
    const listItem = document.querySelector("#list__item");

    // console.log(e.path[0].children[1]);
    // console.log(e.path[1].appendChild());
    e.target.value === listItem.value;

    // console.log(e.target.textContent);
    const container = document.createElement("div");
    const coin = e.path[1];

    // for (let i = 0; i < container.length; i++) {
    //   coin[i] = e.path[i];
    //   container.appendChild(coin[i]);
    // }

    // const midCrypto = document.createElement(".mid__crypto-name");
    const crypto = document.createElement("span");
    const close = document.createElement("i");

    container.className = "mid__crypto";
    // crypto.className = "mid__crypto-name";
    coin.className = "mid__crypto-name";
    close.className = "fa-solid fa-xmark remove";

    close.id = "remove";

    // crypto.textContent = e.target.textContent;

    midCoins.appendChild(container);
    container.appendChild(coin);
    container.appendChild(close);

    // e.target.textContent =
    // midCrypto.textContent = "ETH";
    // const nameCrypto = document.createElement("span");
    // nameCrypto.textContent = coin;
    // container.appendChild(nameCrypto);
    // console.log(e.target.innerHTML);
    // console.log(e.target.textContent);
    // console.log(e.target.value);
    content.style.display = "flex";
    form.insertBefore(content, formCoin);
    inputValue.value = e.target.value;
    formCoin.style.display = "none";
  }
  // return coin;
  //
  // return inputValue.value;
};

const inputValue = document.querySelector("#crypto-value");
const cryptoValue = () => {
  const value = inputValue.value;

  return value;
};

const qualityValue = document.querySelector("#quality-value");

const quality = () => {
  // console.log(e.target.value);
  const quality = qualityValue.value;

  return quality;
};

const buyContent = document.querySelector("#buy");
const sellContent = document.querySelector("#sell");
const submitInput = document.querySelector("#submit-input");
const contentTitle = document.querySelector("#content-title");

const changeContentSell = () => {
  buyContent.classList.remove("open");
  sellContent.classList.add("open");
  contentTitle.textContent = "Sell your coin in your portfolio";
  submitInput.textContent = "Sell";
};

const changeContentBuy = () => {
  sellContent.classList.remove("open");
  buyContent.classList.add("open");
  contentTitle.textContent = "Add transaction to your portfolio";
  submitInput.textContent = "Buy";
};

const midCoins = document.querySelector("#all-crypto");

const portfolioChange = (e) => {
  e.preventDefault();
  // const options = document.createElement("option");

  const container = [...document.querySelectorAll(".mid__crypto")];
  // const container = document.createElement("div");
  // const image = document.createElement("img");

  // const crypto = document.createElement("span");

  // const id = document.createElement("span");
  // const cost = document.createElement("span");
  // const procents = document.createElement("div");
  // const priceChange1h = document.createElement("span");
  // const priceChange24 = document.createElement("span");

  // options.className = "mid__coin-list";
  // container.className = "mid__crypto";

  // crypto.className = "mid__crypto-name";

  // image.className = "mid__icon";
  // id.className = "mid__shortcut";
  // cost.className = "mid__crypto-price";
  // procents.className = "mid__crypto-procents";
  // priceChange1h.className = "mid__percent";
  // priceChange24.className = "mid__percent";

  const worthCrypto = document.createElement("span");
  const qualityCrypto = document.createElement("span");

  // container.className = "mid__crypto";

  worthCrypto.className = "mid__crypto-price";
  qualityCrypto.className = "mid__crypto-worth";
  worthCrypto.textContent = cryptoValue();
  qualityCrypto.textContent = quality();
  // balance.textContent = (cryptoValue() * quality()).toFixed(2);
  // worthCrypto.textContent = cryptoValue() + "$";
  for (let i = 0; i < container.length; i++) {
    container[i].appendChild(worthCrypto);
    container[i].appendChild(qualityCrypto);
  }

  // const name = [...document.querySelectorAll(".list__name")];

  // coinName = (e) => {
  //   crypto.textContent = name.e.target.textContent;
  // };

  // for (let i = 0; i < name.length; i++) {
  //   crypto.textContent = name[i].textContent;
  // }
  // crypto.textContent = "Bitcoin22";

  // // worthCrypto.className =

  // midCoins.appendChild(container);
  // container.appendChild(crypto);

  //

  // console.log(removeCoin);
  // container.remove();
  // totalBalance();
  // deleteCoin();
  // coinName();
  totalBalance();
  exitContent();
  exit();
};

const exitContent = () => {
  formCoin.style.display = "flex";
  content.style.display = "none";
};

const balance = document.querySelector("#total-balance");

// balance.textContent = ;
//

const totalBalance = () => {
  const qualityCrypto = [...document.querySelectorAll(".mid__crypto-price")];
  let result = [];
  let result1 = [];
  const worthCrypto = [...document.querySelectorAll(".mid__crypto-worth")];

  for (i = 0; i < worthCrypto.length; i++) {
    result[i] = parseFloat(worthCrypto[i].textContent);
  }

  for (i = 0; i < qualityCrypto.length; i++) {
    result1[i] = parseFloat(qualityCrypto[i].textContent);
  }

  let all = 0;

  for (i = 0; i < worthCrypto.length; i++) {
    all += result[i] * result1[i];
  }

  const removeCoin = [...document.querySelectorAll("#remove")];
  for (let i = 0; i < removeCoin.length; i++) {
    removeCoin[i].addEventListener("click", () => {
      // console.log(removeCoin[i].value);
      result.splice([i], 1);
      result1.splice([i], 1);
      result[i] = parseFloat(worthCrypto[i].textContent);
      result1[i] = parseFloat(qualityCrypto[i].textContent);
      all -= result[i] * result1[i];
      removeCoin[i].parentElement.style.display = "none";
      balance.textContent = all.toFixed(2);
    });
  }

  balance.textContent = all.toFixed(2);
};

// totalBalance();
// deleteCoin();
getCrypto();

closeForm.addEventListener("click", exit);
btnAdd.addEventListener("click", addCoin);
searchCrypto.addEventListener("input", searchWord);
ul.addEventListener("click", specificationCoin);
sellContent.addEventListener("click", changeContentSell);
buyContent.addEventListener("click", changeContentBuy);
inputValue.addEventListener("input", cryptoValue);
qualityValue.addEventListener("input", quality);
submitInput.addEventListener("click", portfolioChange);
closeContent.addEventListener("click", exitContent);
