// This goes to show that the value in promise can be chained to the next .then() to change the value
// The first .then() has the original value console out first, and it return the new value as the original value plus 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject("Promise is rejected");
    }, 1000);
});

promise
    .then((value) => {
        console.log(value); // 1
        return value + 1; // Pass it to the next .then()
    })
    .then((value) => {
        console.log(value); // 2
        return value + 1; // Pass it to the next .then()
    })
    .then((value) => {
        console.log(value); // 3
        return value;
    })
    .then((value) => {
        console.log(value); // 3
    })
    .catch((error) => console.log(error))
    // When it's reject it will go to .catch() and skipped the .then() because they're only used when it's resolved
    .finally(() => console.log("Finally for you to clean up actions"));