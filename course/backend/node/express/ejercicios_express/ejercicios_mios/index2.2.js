const express = require('express')
require('dotenv').config()

const app = express()


app.get('/sum/:num1/:num2', (req,res) => {
    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)
    res.send('La suma de los dos parametros es: ' + sum(param1, param2))
})

app.get('/subs/:num1/:num2', (req, res) => {
    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)
        res.send('La rest de los dos parametros es: ' + subs(param1, param2))

})

app.get('/mult/:num1/:num2', (req, res) => {
    let param1 = parseInt(req.params.num1)
    let param2 = parseInt(req.params.num2)
        res.send('La mult de los dos parametros es: ' + mult(param1, param2))

})

function sum(param1, param2) {
 return param1+param2
}

function subs(param1, param2) {
    return param1-param2
}

function mult(param1, param2) {
    return param1*param2
}


const port = process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}`))