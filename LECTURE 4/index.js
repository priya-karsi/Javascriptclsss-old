// const genButton = document.querySelector('#generate')

// function getFactorial(input){
//     let factorial = 1;

//   for(let i = 1; i <= input; i++) {
//     factorial *= i;
//   }

//   return factorial;
// }

// genButton.addEventListener('click',()=>{
//     const ans = getFactorial(document.querySelector('#quota').value)
//     console.log(ans)
//     console.log("hiiiii")
//     document.querySelector('#output').textContent = ans
// })

// setTimeout(()=>{
//     console.log("inside timeout")
// }, 4000)

// console.log("calllingggggg")

// document.querySelector("#xhr").addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("loadend", () =>
//     console.log("ended request with status ", xhr.status)
//   );

//   xhr.open("GET", "https://api.publicapis.org/categories");
//   xhr.send();

//   console.log("started with the request");

  
// });

function fecthUser(result, callback1){
    result +=1;
    callback1(result)
}

function fetchSupervisor(result, callback2){
    result +=2;
    callback2(result)
}

function fetchProfile(result, callback){
    result+=3;
    callback(result)
}

function callOperation(){
    fecthUser(1,(result)=>{
        fetchSupervisor(result,(result)=>{
            fetchProfile(result,(result)=>{
                console.log(result)
            })
        })
    })
}



callOperation()


