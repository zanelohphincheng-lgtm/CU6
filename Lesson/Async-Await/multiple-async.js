async function asyncFunction() {
    let promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 1 is resolved");
        }, 2000);
    });
    let promiseTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise 2 is rejected");
        }, 1000);
    });

    // YOU CAN USE THE AWAIT IN TWO WAYS
    // 1.
    // // "await" can be used multiple times in an async function
    // let resultOne = await promiseOne
    // let resultTwo = await promiseTwo

    // console.log(resultOne)  // "Promise 1 is resolved"
    // console.log(resultTwo)  // "Promise 2 is resolved"

    // 2.
    let results = await Promise.all([promiseOne, promiseTwo])

    console.log(results)
}

asyncFunction();
