const express = require('express')

const app = express()

const n1 = 2
const n2 = 4

app.get('/sum', (req,res) => {
    const sum =  n1 + n2
    res.send(console.log(sum))
})

app.get('/subs', (req, res) => {
    const subs = n1 - n2
    res.send(console.log(subs))
})

app.get('/mult', (req,res) => {
    const mult = n1*n2
    res.send(console.log(mult))
})

app.get('/div', (req, res) => {
    const div = n1/n2
    res.send(console.log(div.toFixed(2)))
})

app.get('/all', (req, res) => {
    const all = (+n1)+(+n2) + ',' + (n1-n2) + ',' + n1 * n2+ ',' +n1 / n2 
    res.send(console.log(all))
})


const port = 5000
const server = app.listen(port, () => console.log(`Server listening on port ${port}`))