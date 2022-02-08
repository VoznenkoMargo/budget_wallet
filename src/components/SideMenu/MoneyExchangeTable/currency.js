const moneyDisplay = (money) => {
  money = Number(money);
  if (!Number.isNaN(money)) {
    return money.toFixed(2);
  }
};

export const getCurrencyFromStorage = (updateCurrencyStates) => {
  const expiresData = localStorage.getItem('expire');
  const currentTime = Date.now();

  if (expiresData && currentTime - expiresData < 3600000) {
    updateCurrencyStates(JSON.parse(localStorage.getItem('currency')));
    return 1;
  }
};

export const updateCurrency = ({
  data: currency,
  setError,
  availableCurrency,
  updateCurrencyStates,
}) => {
  const receivedCurrency = currency.filter((currency) =>
    availableCurrency.includes(currency.ccy)
  );
  const newCurrency = [];

  receivedCurrency.forEach((elem) => {
    elem.buy = moneyDisplay(elem.buy) || setError('Unexpected value received');
    elem.sale =
      moneyDisplay(elem.sale) || setError('Unexpected value received');
    const { ccy: currency, buy: purchase, sale } = elem;
    newCurrency.push({ currency, purchase, sale });
  });

  localStorage.setItem('currency', JSON.stringify(newCurrency));
  localStorage.setItem('expire', `${Date.now()}`);

  updateCurrencyStates(newCurrency);
};
