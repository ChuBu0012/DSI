const bath = document.getElementById("bath")
const dollar = document.getElementById("dollar")
const btnthtousd = document.getElementById("thtousd")
const btnusdtoth = document.getElementById("usdtoth")

function BathToDollar() {
    dollar.value = (bath.value * 33.07).toFixed(2);
    console.log(bath.value);
}

function DollarToBath() {
    bath.value = (dollar.value / 33.07).toFixed(2);
}

btnthtousd.addEventListener("click",BathToDollar)
btnusdtoth.addEventListener("click",DollarToBath)
