//request url data for top 10 crypto coins
const request_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export let data: any;

fetch(request_url)
  .then(response => response.json())
  .then(fetchedData => {
    data = fetchedData;
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });