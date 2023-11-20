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
 //return the last element .at
 //portion would be .slice instead of .at
 //push add element from the right
// data.push('Matthew')
 // console.log(data.at(-1))
// data.push('Shawn', 'Simamkele')
 //adds element from the beginning of the list
// data.unshift('Jay-donn')
 //pop remove the last element
// let RemoveLastElement = data.pop()
// console.log(data);
// console.log(RemoveLastElement);
 //to add 2 arrays together
 //console.log(data.concat(RemoveLastElement));
 //.shift removes the first array value
// data.shift()
// console.log(data);
 //reverse order but index number stay in numeric order
//slice from one index to the next used by comma so from 1 to 4 index 1,2,3 and 4
// console.log(data.slice(1, 4))
// console.log(data)
 // 0- adding
 // 1- remove an element from postion
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
// let data = [7,3,'Abc',1,'abc']
// console.log(numbers);
// console.log(numbers.reverse());
//sorting from lowest to highest
// console.log(numbers.sort());
// let numbers = data.filter(onlyNumbers)
// named function or function declaration
// function onlyNumbers(a){
//     return typeof a == 'number'
// }
//  console.log(numbers)
// 2nd v
// let number = data.filter(a=> typeof a== 'number')
// console.log(numbers)
// let person ={
//     surname: 'shawn',
//     age: 30,
//     subjects: ['HTML','CSS3','JavaScript']
// }

// loops

// for(let i=0; i <=20; i++){
//     if(i % 2 ==0)console.log(i)
// else
//     console.log(`${i} is an odd number`);
// }

// for(let i=0; i<=20;i++){
//     console.log( i % 2 == 0 ? i : 'odd')
// }

// for(let i=0; i <=20; i+=2){
//     console.log(i);
// }

// for(let i=0; i<=10;i++){
//     console.log(i)
//     if(i==5){
            // skip
//         continue
//     }
// }

// let numbers = [12, 18, 11, 5, 8, 2];
  


// while loop

// let cnt =0
// while(cnt<=10){
//     console.log(cnt);
    // If we dont have the below code it will produce an infinite loop
//     cnt++;
// }

// let numbers = [12,18,12,11,5,18,2,8,2];
// for(let i =0; i<numbers.length; i++){
//     console.log
//     (`${i} => ${numbers[i]}`);
// }
// numbers.forEach((number)=>{
//     console.log(number);
// })

// numbers.forEach(display)
// function display(number){
//     console.log(number)
// }
// numbers.forEach((number,i)=>{
//     console.log(number,i);
// })
// evan number with for each
// numbers.forEach((numbers,i) =>{
//     if(numbers % 2 ==0)
//     console.log(numbers,i);
// })

// for in
// for(let i in numbers){
//     console.log(i);
// }

// for of
// for(let number of numbers){
//     console.log(number)
// }

// challenge
// let unique =[]
// numbers.forEach((number)=>{
//     if(!unique.includes(number)){
//         unique.push(number)
//     }
// })
// console.log(unique)

// console.log(Array.from(new Set(numbers)));


// function constName(Firstname){
//     console.log(`First name is ${Firstname || `Al-Mu'akhir`}`)
// }
// constName()
// constName("Damon")

// anonymous function or function 
// let test=function(numb1, numb2){
//     return numb1 +numb2
// }
// console.log(test(2,8))

(function (numb1, numb2){
    console.log(numb1 + numb2)
})(3,4)

// function challenge

function repeat(limit) {
    let cnt = 1;
    while (cnt <= limit) {
      console.log(cnt);
      cnt++;
    }
  }
  repeat(10);

//   Challenge

let greeting = " Hello World "
console.log(greeting.trim().split(``))

// Literal object
// console.log("Object literal");
// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// console.log("Object.create()");
// let smartPhone = Object.create(
//     {
//         make: "Samsung",
//         model: "A 51"
//     }
// )
// console.log(smartPhone);
// console.log("new keyword | Object constructor");
// let computer = new Object({
//     brand: "Dell",
//     amount: 18000
// })
// console.log(computer);

// Factory function
/* All variables and functions names must be in camelCase, except for the constructor function, and class names will be PascalCase or UpperCamelCase.
======
A factory function allow us to create and return an object.
*/
// function person(firstName, lastName, age, hrs, rate) {
//   return {
//       firstName, lastName, age, hrs, rate
//   }
// }
// let person1 = person('Peter', 'Mukanya', 3, 60, 500)
// let person2 = person('John', 'Mukanya', 1, 20, 350)
// console.log(person1);
// console.log(person2);

// dynamic nature of an object



// functions objects
// let person ={
//   firstName :'John',
//   lastName:'Bruce',
//   fullName:function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(person);
// console.log(person.fullName());

// let person ={
//   firstName :'John',
//   lastName:'Bruce',
//   hrs: 120,
//   rate: 500,
//   salary:function(){
//     return this.hrs * this.rate
//   }
// }
// console.log(person.salary())
// person.salary()

// // looping through objects

// let laptop ={
//   make:'Dell',
//   cpu:'3ghz',
//   ram: '16gb'
// }
// console.log(laptop);
// for(let keyName in laptop){
//   console.log(laptop[keyName]);
// }
// console.log(Object.keys(laptop))
// console.log(Object.values(laptop))

// Object.keys(laptop).forEach((key)=>{
//   console.log(`${key} -> ${laptop[key]}`)
// })
// Object.values(laptop).forEach((value)=>{
//   console.log(`${value}`)
// })


// cloning an objects using (spread op, object.assign(),jsoon.parse(),)

let Car1 ={
  make: 'Toyota',
  year: 2023
}
// let Car2 = Car1
// console.log("==car1==");
// console.log(Car1);
// console.log("==car2==");
// console.log(Car2);
// console.log("change the value of car2");
// Car2.year = 2024
// console.log(Car1,Car2);

// spread op

let Car2 = {...Car1}
console.log(Car1,Car2);
console.log("change the value of car2");
Car2.year = 2024
console.log(Car1,Car2);

//object.assign() 

let car3 =Object.assign({},Car1)
console.log("===car3===");
console.log(car3);

// json.parse()

let car4 = JSON.parse(JSON.stringify(Car2))
console.log("===car4===");
console.log(car4);



// math methods
//  let rIdx = Math.floor(math.random() * (numbers.length - 1))
//  console.log(numbers)
//  console.log(rIdx)
//  crossOriginIsolated.log(numbers[rIdx])

// string methods

// - charAt()
 let name = "muakhir"
  console.log(name.charAt(3))
// - endsWith()
  let text = "i come from a place far away"
  console.log(text.endsWith("ay"));
// - includes()
let tex = "my name is muakhir jones"
console.log(tex.includes(name))
// - lastIndexOf()
// - indexOf()
// - replace()
// - repeat()
// - startWith()
// - subString()
// - trim()
// - trimEnd()
// - trimStart()
// - slice()
// - split()


// map and reduce
let numbers = [2,4,8,11,1]
let modify = numbers.map( (x)=>{
  return x*2
})
console.log(modify)
// reduce
let sum =numbers.reduce((a,b)=> a+b)
console.log(sum)