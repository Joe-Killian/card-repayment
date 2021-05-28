const balance = document.querySelector(".balance");
const interest = document.querySelector(".interest");
const minpaypercent = document.querySelector(".minpaypercent");
const minpayamount = document.querySelector(".minpayamount");
const fixedamount = document.querySelector(".fixedamount");
const output = document.querySelector(".paidoff");
const button = document.querySelector(".submit");
const clearbut = document.querySelector(".clearbut");

button.addEventListener("click", calculate);


function calculate(event) {
    event.preventDefault();
    let total = breakdown();
    console.log(total)
    let years = Math.floor(total/12);
    let months = total - (years*12);
    output.innerText = years + " Years & " + months + " Months"
}

function breakdown() {
let fullpayout = parseFloat(balance.value) + (parseFloat(balance.value) * parseFloat(interest.value)/1200);
console.log(fullpayout);
let months = 0;



for (i = 0; fullpayout > 0; i++) {
    if (parseFloat(fixedamount.value) > parseFloat(minpayamount.value) && parseFloat(fixedamount.value) > (fullpayout * parseFloat(minpaypercent.value)/100)) {
        let newbalance = fullpayout - parseFloat(fixedamount.value);
        fullpayout = newbalance + (newbalance * parseFloat(interest.value)/1200);
        months++;
        // console.log(newbalance, fullpayout, months)
    } else if (parseFloat(minpayamount.value) > parseFloat(fixedamount.value) && parseFloat(minpayamount.value) > (fullpayout * parseFloat(minpaypercent.value)/100)) {
        let newbalance = fullpayout - minpayamount;
        fullpayout = newbalance + (newbalance * parseFloat(interest.value)/1200);
        months++;
        // console.log(newbalance, fullpayout, months)
    } else if ((fullpayout * parseFloat(minpaypercent.value)/100) > parseFloat(minpayamount.value) && (fullpayout * parseFloat(minpaypercent.value)/100) > parseFloat(fixedamount.value)){
        let newbalance = fullpayout - (fullpayout * parseFloat(minpaypercent.value)/100);
        fullpayout = newbalance + (newbalance * parseFloat(interest.value)/1200);
        months++;
        // console.log(newbalance, fullpayout, months)
    } else {
        console.log("error", months);
    }
    
    
 }
return months;
}

function clearall() {
    output.innertext = "";
};