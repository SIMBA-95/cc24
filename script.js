const rates = {
    USD: 0.012,
    EUR: 0.011,
    KRW: 15.91,
    PKR: 3.31,
    JPY: 1.65
};

let enteredAmountStr = "";

// Create number buttons dynamically
for (let i = 0; i <= 9; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = () => {
        enteredAmountStr += i;
        document.getElementById('amount').value = enteredAmountStr;
    };
    document.getElementById('buttons').appendChild(button);
}

document.getElementById('convert').onclick = () => {
    const selectedCurrency = document.getElementById('currency').value;
    const enteredAmount = parseInt(enteredAmountStr) || 0;
    const convertedAmount = (enteredAmount * rates[selectedCurrency]).toFixed(2);
    document.getElementById('result').textContent = `${convertedAmount} ${selectedCurrency}`;
};

document.getElementById('clear').onclick = () => {
    enteredAmountStr = "";
    document.getElementById('amount').value = "";
    document.getElementById('result').textContent = "";
};

document.getElementById('exit').onclick = () => {
    window.close(); // Note: This may not work in all browsers
};
