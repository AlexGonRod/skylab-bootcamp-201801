require ('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const tasks = []
let ids = 0


app.get('/api/tasks', (req, res) => res.json(ok('Task list succeded', tasks.map(({text}) => ({text})))))

const jsonBodyParser = bodyParser.json()
app.post('/api/tasks', jsonBodyParser,  (req, res) => {
    const { id, text } = req.body

    tasks.push({ text })
    ids ++
    res.json('OK, Task registration succedeed')
})

function ok(message, data) {
    const res = { status: 'OK', message}
    if (data) res.data = data
     
    return res
}





// SRVER listener
const port = process.env.PORT

app.listen(port, () => console.log(`Port listening on port ${port}`))