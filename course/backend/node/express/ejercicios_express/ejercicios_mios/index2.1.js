const express = require('express')
require ('dotenv').config()

const app = express()
const num1= process.env.N1
const num2 = process.env.N2

app.get('/sum', (req, res) => {
    const sum = +num1 + +num2
    res.send(console.log(sum))
})

app.get('/subs', (req, res) => {
    const subs = num1 - num2
    res.send(console.log(subs))
})

app.get('/mult', (req, res) => {
    const mult = num1 * num2
    res.send(console.log(mult))
})

app.get('/div', (req, res) => {
    const div = num1 / num2
    res.send(console.log(div.toFixed(2)))
})




const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))