// This is just show the concept of "resolve" & "clear" and also delays status for 2 seconds as the 2000 suggest
// But changing the resolve and clear in the function will cause a small error in the console
// Resolve : It fulfills the Promise and sends back data => value
// Clear : It can stops a background process or clears stored data => value
// Reject : Promise failed => error
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("MISSION COMPLETED");
        // reject("MISSION FAILED");
    }, 2000);
});

let anotherPromise = new Promise((clear, reject) => {
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
    .then(resolvedResult => console.log("You Won: ", resolvedResult))
    .catch(error => console.log("You Failed: ", error))
    .finally(() => console.log("Return to menu?"))
// .finally() just console out whatever you've put in the console brackets