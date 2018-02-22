const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello GET'))

app.post('/', (req, res) => res.send('Hello POST'))

app.put('/', (req, res) => res.send('Hello PUT'))

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port ${port}`))