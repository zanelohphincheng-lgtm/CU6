async function asyncFunction() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('Promise resolved');
                reject("Promise rejected");
            }, 2000);
        });
        // The "await" keyword WAITS for the promise to be resolved
        let result = await promise;
        console.log(result); // 'Promise resolved'
    } catch (error) {
        // If the promise is rejected, the error can be caught and handled with a try-catch block like this
        console.log(error); // 'Promise rejected'
    }
}

asyncFunction();