//addition button
// const btnadd = 
// document.querySelector('[data-submit]')
// const lboutput = document.querySelector('#output')

// function addition(){ 
//     let numb1 = document.getElementById('numb1').value
//     let numb2 = document.getElementById('numb2').value
//     let sum = +numb1 + +numb2
//     lboutput.textContent = sum

// }
//     btnadd.addEventListener('click', addition)
// console.log(window)
// let data = [3, 8, 5, 'Veronique', 'Carl']
// console.log(data)
// console.log(`Array's size: ${data.length}`)
// console.log(`Element at postion 3: ${data[3]}`)
// //return the last element .at
// //portion would be .slice instead of .at
// //push add element from the right
// data.push('Matthew')
// // console.log(data.at(-1))
// data.push('Shawn', 'Simamkele')
// //adds element from the beginning of the list
// data.unshift('Jay-donn')
// //pop remove the last element
// let RemoveLastElement = data.pop()
// console.log(data);
// console.log(RemoveLastElement);
// //to add 2 arrays together
// //console.log(data.concat(RemoveLastElement));
// //.shift removes the first array value
// data.shift()
// console.log(data);
// //reverse order but index number stay in numeric order
// //slice from one index to the next used by comma so from 1 to 4 index 1,2,3 and 4
// console.log(data.slice(1, 4))
// console.log(data)
// // 0- adding
// // 1- remove an element from postion
// data.splice(2, 0, 'Joel')
// console.log(data)
//exercise
// let numbers = [1,3,5]
// numbers.splice(1,0,2)
// console.log(numbers)
// numbers.splice(3,0,12,30)
// console.log(numbers)
// numbers.splice(4,2)
// console.log(numbers)
//reverse
let data = [7,3,'Abc',1,'abc']
// console.log(numbers);
// console.log(numbers.reverse());
//sorting from lowest to highest
// console.log(numbers.sort());
let numbers = data.filter(onlyNumbers)
// named function or function declaration
function onlyNumbers(a){
    return typeof a == 'number'
}
 console.log(numbers)
// 2nd v
// let number = data.filter(a=> typeof a== 'number')
// console.log(numbers)
let person ={
    surname: 'shawn',
    age: 30,
    subjects: ['HTML','CSS3','JavaScript']
}