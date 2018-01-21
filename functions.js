function loanTermSliderVal() {
    var sliderValue = document.getElementById("loanTermSlider").value;
    var text = document.getElementById("loanTerm");
    text.value = sliderValue;
}

function carPriceSliderVal() {
    var sliderValue = document.getElementById("carPriceSlider").value;
    var text = document.getElementById("carPrice");
    text.value = sliderValue;
}

function anInitialFeeSliderVal() {
    var sliderValue = document.getElementById("anInitialFeeSlider").value;
    var text = document.getElementById("anInitialFee");
    text.value = sliderValue;
}

function credit() {
    var loanTerm = document.getElementById('loanTerm').value;
    var interestRate = 11.83/1200;
    var creditSum = document.getElementById('carPrice').value - document.getElementById('anInitialFee').value;
    var annuityCoeff = interestRate * Math.pow(1+interestRate, loanTerm) / (Math.pow(1+interestRate, loanTerm)-1);

    if (creditSum < 0) {
        alert("Цена автомобиля должна быть больше первоначального взноса!")
    } else {
        var monthlyPayment = (annuityCoeff * creditSum).toFixed(0);
        document.getElementById('monthlyPayment').innerHTML = "Ваш ежемесячный платеж: " + monthlyPayment;
        document.getElementById('monthlyPaymentInput').value = monthlyPayment;
        document.getElementById('sent').style.visibility = "visible";
    }
}