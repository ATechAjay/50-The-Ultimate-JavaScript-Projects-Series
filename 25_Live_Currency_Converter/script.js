"use strict";

import fetchData from "./fetchData.js";

const fromElement = document.getElementById("from");
const toElement = document.getElementById("to");
const oneUnitValue = document.querySelector(".oneUnit");
const currencyUserInputValue = document.querySelector(".currencyValue");
const finalResult = document.querySelector(".totalResult");

let value = 0;

const fetchingData = async (fromCurrencyCode, _, value) => {
  const currencyList = await fetchData(fromCurrencyCode);

  // Changing the ONE UNIT values according to the users input
  oneUnitValue.textContent = `1 ${fromElement.value} = ${currencyList[
    toElement.value
  ].toFixed(3)} ${toElement.value}`;

  // Final result
  finalResult.textContent = `${value ? value : 1} ${fromElement.value} = ${(
    currencyList[toElement.value] * (value ? value : 1)
  ).toFixed(3)} ${toElement.value}`;

  for (const currency in currencyList) {
    currencyToList(fromElement, currency);
    currencyToList(toElement, currency);
  }
};

function currencyToList(element, currency) {
  const option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  element.appendChild(option);
}

fromElement.addEventListener("change", function (e) {
  fetchingData(e.target.value, toElement.value, value);
});

toElement.addEventListener("change", function (e) {
  fetchingData(fromElement.value, e.target.value, value);
});

currencyUserInputValue.addEventListener("input", function (e) {
  value = e.target.value;
  fetchingData(fromElement.value, toElement.value, value);
});

window.onload = fetchingData("USD");
