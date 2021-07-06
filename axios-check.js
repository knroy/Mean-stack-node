const axios = require('axios');

let axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

let anotherAxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// axiosInstance.get('/promise-a', {method: 'GET'}).then(response => {
//     console.log('resolved a')
//     console.log(response.data);
// }).catch(error => {
//     console.log(error)
// })
//
// axiosInstance.get('/promise-b', {method: 'GET'}).then(response => {
//     console.log('resolved b')
//     console.log(response.data);
// }).catch(error => {
//     console.log(error)
// })

async function asyncTesting() {
    try {
        let response = await axiosInstance.get('/promise-a', {method: 'GET'});
        console.log(response.data);
        let response2 = await axiosInstance.get('/promise-b', {method: 'GET'});
        console.log(response2.data);
        let response3 = await anotherAxiosInstance.get('/post');
        console.log(response3.data);
        return "yes";
    } catch (e) {
        throw "an error occurred";
    }
}


asyncTesting().then((response) => {
    console.log(response);
}).catch((reason) => {
    console.log(reason);
})
