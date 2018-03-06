require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
const axios = require('axios')
const { MongoClient } = require('mongodb')

const host = process.env.MONGO_HOST
const mongoPort = process.env.MONGO_PORT

MongoClient.connect(`mongodb://${host}:${port}`, () => {

    let _id = ''
    app.use('/api', router)
    app.set('view engine', 'pug')


    router.get('/list', (req, res) => {
        axios.get('http://localhost:5000/api/list')
            .then(obj => res.render('index', { users: obj.data.item, _id }))

    })
    const formBodyParser = bodyParser.urlencoded({ extended: false })

    router.post('/create', formBodyParser, (req, res) => {
        const { name, password } = req.body
        axios.post('http://localhost:5000/api/create', { name: name, password: password })
            .then(res.redirect('/api/list'))
    })

    router.get('/edit/:id', (req, res) => {
        const { id } = req.params

        if (_id == id) {
            _id = ''

        } else {
            _id = id

        }
        res.redirect('/api/list')
    })

    router.post('/update/:id', formBodyParser, (req, res) => {
        const { id } = req.params
        const { name, password, newName, newPassword } = req.body

        axios.put(`http://localhost/api/update/${id}`, { newName: newName, newPassword: newPassword })
            .then(res.redirect('/api/list'))

    })

    router.post('/delete/:id', formBodyParser, (req, res) => {
        const { id } = req.params
        const { name, password } = req.body

        axios.delete(`http://localhost:5000/api/delete/${id}`, { data: { name: name, password: password } })
            .then(res.redirect('/api/list'))

    })

    function ok(message, data) {
        const res = { status: 'ok', message }
        if (data) res.data = data
        return res
    }

    function ko(message, err) {
        const res = { status: 'ko', message }
        if (err) res.err = err
        return res
    }

    const port = process.env.PORT
    app.listen(port, () => console.log(`Client on port ${port}`))

})


//.catch(err => {
//     res.redirect(url.format({
//         pathname:'/'
//         query: {error:err.message}
//     }))
// })