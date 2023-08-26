let arr = [1,2,3,4,5]
console.log(arr)
arr[2] = 50
console.log(arr)
// let arr2 = [1,2,3,4,5]
let arr2 = arr
console.log(arr == arr2)

let obj1 = {
    name:"ABC",
    rollno: 12
}

// let obj2 = {
//     name:"ABC",
//     rollno: 12
// }

let obj2 = obj1 
console.log(obj1 == obj2)
obj2.name = "Gunjan"
console.log(obj1, obj2)

let check = "hello \"world\" "
console.log(check)

// template string
console.log(`The sum of 2 and 3`)              
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b}`)
// console.log("the  value "+a)



let a = "checking"
console.log(a.length)
console.log(a[2])



let str = "hello world welcome to the"
console.log(str.includes("World"))


let abc = '5'
// let abcInt = parseInt(abc)
// console.log(typeof abcInt)


// abcInt = Number(abc)
// console.log(typeof abcInt)

let abcInt  = +abc
console.log(typeof abcInt)


// understanding truthy falsy values
// let blog = select * from blogs where id = 3
// if(blog){
//     (blog.name)
// }

// blog?.name

// == !=
// === !==

5>3 ? console.log("hi"):console.log("world")
//   null colaecing operator

// const arr = [1,2,3,4]
// arr[0] =2;

const numbers = [1, 2, 3, 4, 5]

for (let num of numbers) {
  console.log(num)
}



function print(param1){
    console.log(`hi ${param1}`);
    return 3;
}

let returnedVariable = print(5)
console.warn(returnedVariable)

//  square = 

// console.log(square())

// btn.addEventListener('click', function() {
//     return 3;
//   })


//   const square = () => {

//   }

// const square = n => {
// return n*n;
// }

// const square = n => n*n;

// console.log(square(5));

// btn.addEventListener('click',() =>3)

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('Priya','Karsi'))

const exp = (base, power) => base**power;
console.log(exp(5,3))


const sag = function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
const array = [1,2,3,4,5]
console.log(sag(array))

//  numbers=[1,2,3,4,5]
// let sum = number=>{
//     let sum1=0;
//     number.forEach(element => {
//         sum1=sum1+element
//     });
//     return sum1
// }
// console.log(sum(numbers))

rr=[1,2,3,4,5]

let sumssss =0;
rr.forEach(elem => sumssss+=elem)
console.log(sumssss)

sagstr = ['hello','sagar','hi','gunjan']
console.warn(sagstr.join(" "))


// function square(n){
//     return n*n;
// }
// function add(n){
//     return n+n;
// }
// function cube(n,callback){
//     return n * callback(n)
// }
// console.log(cube(5,square))
// console.log(cube(6, add))

function hello(){
    console.log('hello')
}

// setInterval(()=>console.log('hello'), 1000)


// setTimeout(()=>console.log('hello'), 3000)


function checkScopes(){
    let i=3
    if(true){
        let i = 8
        console.log(i)
    }
    console.log(i)
}
checkScopes()