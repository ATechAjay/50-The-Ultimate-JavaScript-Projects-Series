import { API_KEY } from "./utils.js";

const fetchData = async (currencyCode) => {
  console.log(currencyCode);
  const JSONData = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyCode}`
  );
  const data = await JSONData.json();
  return data.conversion_rates;
};

export default fetchData;
