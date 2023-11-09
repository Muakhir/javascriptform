//addition button
const btnadd = 
document.querySelector('[data-submit]')
const lboutput = document.querySelector('#output')

function addition(){ 
    let numb1 = document.getElementById('numb1').value
    let numb2 = document.getElementById('numb2').value
    let sum = +numb1 + +numb2
    lboutput.textContent = sum

}
    btnadd.addEventListener('click', addition)