//firstClass Increase ticket count event function

const fClassPlusBtn = document.getElementById('fClassPlusBtn');
fClassPlusBtn.addEventListener('click', function () {
    updateCount('firstClass', 1)
    updateSubTotal()
    totalTax()
    totalPrice()
})

//firstClass Decrease ticket count event function

const fClassMinusBtn = document.getElementById('fClassMinusBtn');
fClassMinusBtn.addEventListener('click', function () {
    updateCount('firstClass', -1)
    updateSubTotal()
    totalTax()
    totalPrice()
})

////Economy Class Increase ticket count event function

const economyPlusBtn = document.getElementById('eClassPlusBtn');
economyPlusBtn.addEventListener('click', function () {
    updateCount('economyClass', 1)
    updateSubTotal()
    totalTax()
    totalPrice()
})

//Economy Class Decrease ticket count event function

const economyMinusBtn = document.getElementById('eClassMinusBtn');
economyMinusBtn.addEventListener('click', function () {
    updateCount('economyClass', -1)
    updateSubTotal()
    totalTax()
    totalPrice()
})

//Book Now button redirecting to another page Function

const bookBtn = document.getElementById('bookNow');
bookBtn.addEventListener('click', function () {
    const congrats = document.getElementById('secondPart');
    const mainPart = document.getElementById('mainPart');
    mainPart.style.display = "none";
    document.getElementById('amount').innerText = totalCostCalculate();
    congrats.style.display = 'block';
    document.getElementById('from').innerText = document.getElementById('fromPlace').placeholder;
    document.getElementById('to').innerText = document.getElementById('toPlace').placeholder;
    document.getElementById('dateTime').innerText = Date();
    document.getElementById('FirstClassFinal').innerText = document.getElementById('firstClass').value;
    document.getElementById('EconomyClassFinal').innerText = document.getElementById('economyClass').value;
    document.getElementById('subTotalFare').innerText = document.getElementById('subTotal').innerText;
    document.getElementById('taxFare').innerText = document.getElementById('tax').innerText;
})

//Ticket Confirmation Button event Function

const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', function () {
    const finalPage = document.getElementById('finalPart');
    const hideSecondPage = document.getElementById('secondPart');
    hideSecondPage.style.display = 'none';
    finalPage.style.display = 'block';
})

//Updating ticket count Function

function updateCount(id, k) {
    const cnt = document.getElementById(id).value;
    const cntNum = parseInt(cnt);
    var currentCnt = cntNum + k;
    var finalCnt;
    if (currentCnt >= 0) {
        finalCnt = currentCnt;
    }
    else {
        finalCnt = 0;
    }
    document.getElementById(id).value = finalCnt;

}

//Subtotal Price calculation Function

function subTotalPrice() {
    const firstClassFinal = document.getElementById('firstClass').value;
    const firstClassFinalNum = parseInt(firstClassFinal);
    const firstClassCost = 150 * firstClassFinalNum;
    const economyFinal = document.getElementById('economyClass').value;
    const economyFinalNum = parseInt(economyFinal);
    const economyClassCost = 100 * economyFinalNum
    const subTotalCost = firstClassCost + economyClassCost
    return subTotalCost
}

//Subtotal price updating and showing Function

function updateSubTotal() {
    document.getElementById('subTotal').innerHTML = subTotalPrice();
}

//Tax Calculation Function

function taxAmount() {
    const taxCost = subTotalPrice() * 0.1;
    return taxCost
}

//Tax amount update and showing Function

function totalTax() {
    document.getElementById('tax').innerText = taxAmount()
}

//Total Cost calculation Function

function totalCostCalculate() {
    const totalAmount = subTotalPrice() + taxAmount();
    return totalAmount
}

// Total Cost Updating And Showing Function

function totalPrice() {
    document.getElementById('total').innerText = totalCostCalculate();
}