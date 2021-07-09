const express = require('express');

const app = express();

const port = 4000;

app.use('*', (req, res, next) => {
    console.log('all * middleware passed');
    next();
})

app.use('/we*', (req, res, next) => {
    res.send('bad request from /we*');
})

app.get('/', (req, res) => {
    let mailDetails = {
        subject: 'Account registration',
        body: 'welcome onboard, thank you for your registration',
        to: 'rax.komol@gmail.com, mujammal.salman@gmail.com'
    }
    res.json(mailDetails);
})

app.get('/welcome', (req, res) => {
    res.send('welcome again to express js');
})

app.post('/posts', (req, res) => {

})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
