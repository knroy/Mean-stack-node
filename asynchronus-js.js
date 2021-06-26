let promise = fetch('http://localhost:3000/check-request');
promise.then((response) => {
    return response.json();
}).then((result) => {
    console.log(result);
})
