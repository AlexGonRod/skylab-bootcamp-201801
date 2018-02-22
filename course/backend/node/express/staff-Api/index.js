require('dotenv').config()
const express = require('express')

const dataPath = process.env.DATA_PATH
const staff = require('./data/staff.json')

const app = express()


app.get('/api/staff', (req, res) => {
    const query = req.query.q || req.query.query // la url puede ser ?q o ?query
    
    if(query) {
        const results = staff.filter(person => person.name.includes(query) || person.surname.includes(query) || person.email.includes(query))
            res.json(results)
        
        
    }else 
        res.json(staff) // si no especifican un filtro, envia todo el texto
    
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`) )