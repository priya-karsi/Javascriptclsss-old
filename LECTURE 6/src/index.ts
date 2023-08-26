let arr = [1,2]
const [elem1, elem2] = arr
console.log(elem1,elem2)



let arr1 =[32,4,45,4,55]
let arr2 = [...arr1]
arr2[3] = 0
console.log(arr1, arr2)

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    inobj:{
        name:"Gunjan"
    }
  }
// let { width, height, area } = rectangle
const rectangle2 = {
    ...rectangle
}
rectangle2.width = 100
rectangle2.inobj.name ="changed"
console.log(rectangle2, rectangle)


const numarray =[1,2,3,4,5]
let [num1, num2 , ...r] = numarray
console.log(num1, num2, r)

function hello (...args : any[]){
console.log(args)
}
hello(1,2,3,4,5)


const dbvalue = {
    name:"Gunjan",
    rollno:1
}
const screenvalue = {
    name:"Disha",
    std:"6",
    address:"fjdfkfk"
}
const toSendValue = {
    ...dbvalue,
    ...screenvalue,
    check:"extra"
}
console.log(toSendValue)
