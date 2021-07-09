const MyExpress = require('./myexpress');

const app = new MyExpress();

app.get('/', (req, res) => {
    res.write('Welcome to customized my express node server');
    res.end();
})

app.get('/welcome', (req, res) => {
    res.write('Welcome to customized my express node server /welcome route');
    res.end();
})

app.listen(3000, () => {
    console.log(`http server is running on http://localhost:${3000}`)
})
