const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const urlEncodedBodyParser = bodyParser.urlencoded({extended: false})

app.get('/sum', urlEncodedBodyParser, (req, res) => {
    let param1 = parseInt(req.body.num1)
    let param2 = parseInt(req.body.num2)
    //const {body: num1} = req

    let result = param1+param2
    res.send(`El resultado es: ${param1}+${param2}`)
})


const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))