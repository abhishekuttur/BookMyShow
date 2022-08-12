const express = require('express');
const app = express();
const hbs=require('hbs')

app.set("view engine", "hbs")
app.set('views', 'views1')

hbs.registerPartials('./views1/components')



app.get('/', (req, res) => {

    let db = [{ name: 'abc', age: 26 },
    { name: 'xyz', age: 27 },
    { name: 'asd', age: 28 }]
    res.render('home', { heading: 'Welcome to HBS home page',db })
})

app.listen(3000, () => {
    console.log("listening to server at port 3000");
})