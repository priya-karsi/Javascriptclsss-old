const start = document.querySelector(".start");
function startRequest() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", () => {
    console.log("endeed wioth cat request");
    const xhr2 = new XMLHttpRequest();
    xhr2.addEventListener("loadend", () => {
      console.log("ended with final request");
    });
    xhr2.open("GET", "https://ipinfo.io/161.185.160.93/geo");
    xhr2.send();
    console.log("started with last request");
  });
  xhr.open("GET", "https://catfact.ninja/fact");
  xhr.send();
  console.log("started with cat request");
}
start.addEventListener("click", startRequest);

// let ans;
// function getValue(){
//     setTimeout(()=>{
//         ans=55;
//         console.warn(ans)
//     }, 5000)
//     console.warn(ans)
// }

// getValue();

// promisess

const promiseResponse = fetch(
  "https://api.ipify.org/?format=json"
);
console.log(promiseResponse);

// promiseResponse.then((response)=>{
//     console.log(response)
//     console.log(promiseResponse)
//     response.json().then((res)=> console.log(res))
// })

promiseResponse
  .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
    // throw new Error(`HTTP error: ${response.status}`);
    console.log("inside then")
    return response.json()})
  .then((result) => console.log(result))
  .catch((error)=>console.log("error", error));

function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 4000);
  });
}




const obj = returnPromise();
console.log(obj);
obj.then((result) => console.log(result));
