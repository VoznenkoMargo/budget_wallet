export default function fetchCurrency() {
  const BASE_URL = 'https://api.privatbank.ua/p24api';

  return fetch(`${BASE_URL}/pubinfo?exchange&json&coursid=11`)
    .then(response => {
      return response.json()})
}
