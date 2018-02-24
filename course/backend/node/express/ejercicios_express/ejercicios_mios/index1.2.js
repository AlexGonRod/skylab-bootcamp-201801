const express = require('express')

const app = express()

let messages = { hello: 'hello', goodbye: 'goodbye' }

app.get('/hello', (req, res)=> {
    res.send(messages.hello)
})

app.get('/goodbye', (req, res) => {
    res.send(messages.goodbye)
    res.end(server.close())
})


const port = 8000
const server = app.listen(port, () => console.log(`listening on port ${port}`))