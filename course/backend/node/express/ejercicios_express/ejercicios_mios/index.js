const express = require('express')

const app = express()

app.get('/hello', (req,res) => {
    res.send(console.log('Hello'))
})

app.get('/goodbye', (req, res) => {
    res.end(() => {
        console.log('Goodbye')
    server.close()
    })
})

const port = 8000

const server = app.listen(port, () => console.log(`Port listening in port ${port}`))