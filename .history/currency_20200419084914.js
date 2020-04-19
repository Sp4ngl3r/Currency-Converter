const from_initial_currency = document.getElementById("from_currency");
const from_initial_amount = document.getElementById("from_amount");
const to_expected_currency = document.getElementById("to_currency");
const to_expected_amount = document.getElementById("to_amount");
const rateEl = document.getElementById("rate");
const exchange = document.getElementById("exchange");

from_initial_currency.addEventListener("change", calculate);
from_initial_amount.addEventListener("input", calculate);
to_expected_currency.addEventListener("change", calculate);
to_expected_amount.addEventListener("input", calculate);

exchange.addEventListener("click", () => {
  const temp = from_initial_currency.value;
  from_initial_currency.value = to_expected_currency.value;
  to_expected_currency.value = temp;
  calculate();
});

function calculate() {
  const from_currency = from_initial_currency.value;
  const to_currency = to_expected_currency.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[to_currency];
      rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
      to_expected_amount.value = (from_initial_amount.value * rate).toFixed(2);
    });
}

calculate();
