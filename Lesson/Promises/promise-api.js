// Promise.all
let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 is resolved")
    }, 2000)
})
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 is rejected")
    }, 1000);
})

// So Promise.all only console out when all the related promises is resolved
// If any one of the promises is not resolved the whole thing won't console out
// Also not go into the .then() but the .catch() for error
Promise.all ([promiseOne, promiseTwo])
    .then(valueCanBeAnything => console.log(valueCanBeAnything))
    .catch(error => console.log("Error: ", error))
// If all promise is rejected, the fastest one will be console out because technically your promises are doomed
// which the console ended it right there by showing you "The fastest promise is already rejected, my job is done here"
