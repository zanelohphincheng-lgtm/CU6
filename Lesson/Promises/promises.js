// This is just show the concept of "resolve" & "clear" and also delays status for 2 seconds as the 2000 suggest
// But changing the resolve and clear in the function will cause a small error in the console
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved!");
    }, 2000);
});

let anotherPromise = new Promise((clear, rejected) => {
    setTimeout(() => {
        clear("Promise is cleared");
    }, 2000);
});

console.log(promise);
console.log(anotherPromise);

// Promises .then and .catch
// putting "promise" here suggest that you're using the value (Which is the "Promise is resolved") and the error is when you changed the resolve to reject
// Using .then(), you can get the value of whatever you resolve
// Similarly, using .catch(), you get the value of whatever you reject
promise
    .then(value => console.log(value))
    .catch(error => console.log("Error: ", error))
    .finally(() => console.log("Promise is settled!"))
// .finally() just console out whatever you've put in the console brackets