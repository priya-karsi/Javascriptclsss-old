// // console.warn("hi")

// const headingsTN = document.getElementsByTagName('h1');
// console.log(headingsTN)

// Array.from(headingsTN).forEach(element => {
//     console.log(element)
// });


// const headingsCN = document.getElementsByClassName('title');
// console.log(headingsCN)

// Array.from(headingsCN).forEach(element => {
//     console.log(element)
// });

// const elemT = document.getElementById('first-title')
// console.log(elemT)

// const elemID = document.querySelector('.title')
// console.warn(elemID)


// const elemsClass = document.querySelectorAll('.title')
// console.log(elemsClass)

// elemsClass.forEach(val=>console.log(val))

// const ft = document.querySelector('#first-title')
// // setTimeout(()=>{
// //     ft.className = 'red'
// //     console.log(ft.classList)
// // }, 4000)


// const elemstn = document.querySelectorAll('h1')
// elemstn[3].setAttribute('id', 'fourth-title')
// elemstn[3].setAttribute('class', 'title')
// elemstn[3].classList.add('red')

// // setTimeout(()=>{
// //     elemstn[3].textContent = 'helllllooo'
// // }, 4000)


// setTimeout(()=>{
//     elemstn[3].innerHTML = `<i>helllloooo</i>`
    
// }, 4000)

// setTimeout(()=>{
//     document.body.innerHTML = ''

// }, 8000)


const clcikbtn = document.querySelector('.clcikbtn');
// clcikbtn.addEventListener('click',(e)=>{
// const elemstn = document.querySelectorAll('h1')
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.textContent)
// })

// function print(){
//     console.log("hello")
// }


clcikbtn.addEventListener('click',(e)=>{
    const ip = document.querySelector('#name')
        console.log(ip.value) 
    })

    const ip = document.querySelector('#name')
    ip.addEventListener('change',(e)=>{
        const para = document.querySelector('#para')
        para.innerHTML = e.target.value
    })