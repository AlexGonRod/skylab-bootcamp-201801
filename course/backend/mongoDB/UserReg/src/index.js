const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectID;

require('dotenv').config()


const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })


MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    let _id = ''
    let result = ''
    let result2 = ''
    let obj = {}

    const db = conn.db('usersDb')


    app.get('/', (req, res) => {
        if (err) throw err
        db.collection('users').find().toArray((err, data) => {


            res.render('index', { data, _id, result, result2 , obj})
        })


    })

    app.post('/register', formBodyParser, (req, res) => {
        if (err) throw err

        const { name, surname, email, username, password } = req.body
        obj = { name : name, surname : surname }

        if (password.length < 10) {

            result = "Password muy corto"
        } else {
            db.collection('users').insert({ user: name, surname: surname, email: email, username: username, password: password })
            obj = {}
        }
        res.redirect('/')
    })


    app.get('/delete/:id', (req, res) => {
        if (err) throw err
        const { id } = req.params

        db.collection('users').remove({ "_id": ObjectId(id) })
        res.redirect('/')

    })

    app.get('/edit/:id', (req, res) => {
        if (err) throw err
        const { id } = req.params

        if (_id == id) {
            _id = ''

        } else {
            _id = id

        }

        res.redirect('/')
    })

    app.post('/update', formBodyParser, (req, res) => {
        if (err) throw err

        const { name, surname, id } = req.body
        console.log(id)

        db.collection('users').update({ "_id": ObjectId(id) }, { user: name, surname: surname }).then(response => {
            result2 = 'Updated'
            res.redirect('/')
        }).catch(error => {
        })
    })

    const port = process.env.PORT
    app.listen(port, () => console.log(`Server listening on port ${port}`))


    process.on('SIGNINT', () => {
        console.log('Conect Out')
        conn.close()

        process.exit()
    })
})