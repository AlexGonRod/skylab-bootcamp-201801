const express = require('express')
const moment = require('moment')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req, res) => res.send('Hello GET')) //Recibo

app.post('/', (req, res) => {res.send('Hello POST')}) // Lanzo

app.put('/', (req, res) => res.send('Hello PUT')) //Actualizo


app.get('/api/parsetime', (req, res) => {
    const date = moment(req.query.iso)
    
    const data = { // crea objeto fecha
        hour: date.hours(),
        minute: date.minutes(),
        second: date.seconds()
    }
//    res.writeHead(200, { 'ContentType': 'application/json' }) // Si hay conexxion, envia los datos como JSON
//    res.end(JSON.stringify(data)) // Transforma la fecha en formato JSON en String

    res.json(data) //Version iguall que antes pero con el stringify
})

    const textBodyParser = bodyParser.text()

    app.get('/helloworld', textBodyParser, (req, res)=> { //Recibe y parsea a texto desde postman (BreackPoint de devtool en res.send)
        res.send(req.body) // reenvia el msg
    })

    const jsonBodyParser = bodyParser.json()

    app.post('/helloworld/json', jsonBodyParser,  (req, res) => {
        res.json(req.body)
    })

    const urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.post('/login', urlencodedParser, (req, res) => {
        res.send(`${req.body.username}: ${req.body.password}`)
    })

    

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))