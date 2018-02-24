const express = require('express')

const app = express()

const messages = { hello: 'hello', goodbye: 'goodbye' }

app.get('/hello/:id', (req, res) => {
   
    const {params: id} = req
    res.send(messages.hello + ' ' + req.params.id)
})

app.get('/goodbye/:id', (req, res) => {
    const { params: id } = req
    res.send(messages.goodbye + ' ' + req.params.id)
    res.end(server.close())
})

const port = 5000

const server = app.listen(port, () => console.log(`Listening on port ${port}`))