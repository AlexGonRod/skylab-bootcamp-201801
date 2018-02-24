require ('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

let users = {}

const urlencoderParser = bodyParser.urlencoded({extended: false})

app.post('/api/users', urlencoderParser, (req, res) => {

    const user = {
        username: req.body.username,

        password: req.body.password

        
    }

    res.send(`You are logged`)
})

const port = process.env.PORT
app.listen(port, () => console.log(`Server running in port ${port}`))



