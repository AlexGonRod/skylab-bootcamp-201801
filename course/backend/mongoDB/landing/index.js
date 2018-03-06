require ('dotenv').config()
const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()


MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err;

    const db = conn.db('bootcamp')
    
    app.get('/', (req, res) => {
        const query = req.query.q || req.query.query 

        const regEx = new RegExp(query, 'i')

        db.collection('staff').find({ name: regEx, email: regEx }).toArray((err, data) => {
            if (err) throw err

            res.json(data)

            console.log(res)


        })

    })

    const port = process.env.PORT
    
    app.listen(port,()=>  console.log(`Server connected on port ${port}`))

    process.on('SIGNINT', () => {
        console.log('stopping server')
         conn.close()

         process.exit()
    })
})


