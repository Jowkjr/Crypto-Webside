const select = document.querySelector(".mid__coin-pick");
const convertCoins = [...document.querySelectorAll("#coinPick")];
const selectCrypto = document.querySelector("#coin");
const selectCurrency = document.querySelector("#currency");
let quantityCrypto = document.querySelector("#quantity-crypto");
let quantityMoney = document.querySelector("#quantity-money");
const btnConvert = document.querySelector("#covert-button");
const searchCrypto = document.querySelector("#search-crypto");
const arrowRotate = document.querySelector("#arrow-rotate");

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

const choiceCrypto = () => {
  let worth = parseFloat(selectCrypto.value);
  return worth;
};

const changeQualityCrypto = () => {
  let amountCrypto = parseFloat(quantityCrypto.value);
  return amountCrypto;
};

const result = () => {
  if (!(flag % 2 == 0)) {
    let end = changeQualityCrypto() / choiceCrypto() / choiceCurrency();
    quantityMoney.value = end;
  }
  if (changeQualityCrypto() > 0 && flag % 2 == 0) {
    let end = (
      changeQualityCrypto() *
      choiceCrypto() *
      choiceCurrency()
    ).toFixed(3);
    quantityMoney.value = end;
    // return;
  } else if (quantityMoney.value > 0 && flag % 2 == 0) {
    let end = (
      (quantityMoney.value / choiceCrypto()) *
      choiceCurrency()
    ).toFixed(3);
    quantityCrypto.value = end;
    quantityCrypto.value = 0;
    // return;
  }
};

const choiceCurrency = (e) => {
  let how = selectCurrency.value;
  return how;
};

const currency = (fiat) => {
  const allFiat = document.querySelector("#currency");
  const arr = Object.values(fiat.conversion_rates);
  const usd = document.createElement("option");
  const euro = document.createElement("option");
  const chf = document.createElement("option");
  const gbp = document.createElement("option");
  const pln = document.createElement("option");

  usd.textContent = "USD";
  euro.textContent = "EUR";
  chf.textContent = "CHF";
  gbp.textContent = "GBP";
  pln.textContent = "PLN";

  usd.value = 1;
  euro.value = arr[43];
  chf.value = arr[28];
  gbp.value = arr[47];
  pln.value = arr[113];

  allFiat.append(usd);
  allFiat.append(euro);
  allFiat.append(chf);
  allFiat.append(gbp);
  allFiat.append(pln);
};

const getFiat = () => {
  // const currentlyFiat = selectCurrency.name;
  const url = `https://v6.exchangerate-api.com/v6/4967d4eb39bc3da9f378170d/latest/USD`;
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("Error");
      } else {
        return response.json();
      }
    })
    .then((json) => currency(json));
};

const allFiat = document.querySelector("#currency");

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

const showTable = (lists) => {
  const allCrypto = document.querySelector("#all-crypto");

  lists.forEach((list) => {
    const options = document.createElement("option");
    const container = document.createElement("div");
    const image = document.createElement("img");
    const crypto = document.createElement("span");
    const id = document.createElement("span");
    const cost = document.createElement("span");
    const procents = document.createElement("div");
    const priceChange1h = document.createElement("span");
    const priceChange24 = document.createElement("span");

    options.className = "mid__coin-list";
    container.className = "mid__crypto";
    crypto.className = "mid__crypto-name";
    image.className = "mid__icon";
    id.className = "mid__shortcut";
    cost.className = "mid__crypto-price";
    procents.className = "mid__crypto-procents";
    priceChange1h.className = "mid__percent";
    priceChange24.className = "mid__percent";
    crypto.innerHTML = `${list.name}`;

    image.src = `${list.image}`;
    id.innerHTML = `${list.symbol}`;
    cost.textContent = `${list.current_price.toFixed(3)}`;
    priceChange1h.textContent = `${list.price_change_percentage_1h_in_currency.toFixed(
      2
    )}`;
    priceChange24.textContent = `${list.price_change_percentage_24h.toFixed(
      2
    )}`;

    options.value = `${list.current_price}`;
    options.innerHTML = `${list.name}`;

    select.appendChild(options);
    options.appendChild(crypto);
    allCrypto.appendChild(container);
    container.appendChild(image);
    container.appendChild(crypto);
    container.appendChild(id);
    container.appendChild(cost);

    if (priceChange1h.textContent > 0) {
      priceChange1h.style.color = "green";
      container.appendChild(priceChange1h);
    } else if (priceChange1h.innerHTML < 0) {
      priceChange1h.style.color = "red";
      container.appendChild(priceChange1h);
    } else {
      priceChange1h.style.color = "gray";
      container.appendChild(priceChange1h);
    }
    if (priceChange24.textContent > 0) {
      priceChange24.style.color = "green";
      container.appendChild(priceChange24);
    } else if (priceChange24.innerHTML < 0) {
      priceChange24.style.color = "red";
      container.appendChild(priceChange24);
    } else {
      priceChange24.style.color = "gray";
      container.appendChild(priceChange24);
    }

    cost.textContent += "$";
    priceChange1h.textContent += "%";
    priceChange24.textContent += "%";
  });
};

const searchWord = (e) => {
  const midCrypto = [...document.querySelectorAll(".mid__crypto")];
  const value = e.target.value.toLowerCase();

  midCrypto.forEach((item) => {
    let text = item.textContent;
    if (text.toLocaleLowerCase().includes(value)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};

let flag = 0;

// const coinList = [...document.querySelectorAll("#coin")];

const rotate = () => {
  // selectCrypto.length = 100;
  // selectCurrency.length = 5;
  // const midCoinsList = [...document.querySelectorAll("#currency")];
  // const coinList = [...document.querySelectorAll("#coin")];
  selectCrypto.length = 100;
  selectCurrency.length = 100;
  // midCoinsList[0].textContent = ;

  for (i = 0; i < selectCrypto.length; i++) {
    let tempCode = selectCrypto[i].innerHTML;
    selectCrypto[i].innerHTML = selectCurrency[i].innerHTML;
    selectCurrency[i].innerHTML = tempCode;
    let temp = selectCrypto[i].value;
    selectCrypto[i].value = selectCurrency[i].value;
    selectCurrency[i].value = temp;
  }

  // selectCurrency[i].innerHTML.appendChild(selectCrypto);
  // } else {
  //   selectCrypto.length = 100;
  //   selectCurrency.length = 5;
  // }
  flag++;
  // for{} (i < 4; (i = selectCurrency.length); i++) {
  //   selectCurrency[i].textContent = "jooo";
  // }

  // selectCurrency[5].textContent = "jooo";
  // for (i = 4; i < selectCurrency.length; i++) {
  //   let tempCode = selectCrypto[i].innerHTML;
  //   selectCrypto[i].innerHTML = selectCurrency[i].innerHTML;
  //   selectCurrency[i].innerHTML = tempCode;
  // }
};

getFiat();
getCrypto();

searchCrypto.addEventListener("input", searchWord);
selectCrypto.addEventListener("change", choiceCrypto);
// selectCurrency.addEventListener("change", choiceCurrency);
quantityCrypto.addEventListener("input", changeQualityCrypto);
btnConvert.addEventListener("click", result);
arrowRotate.addEventListener("click", rotate);
