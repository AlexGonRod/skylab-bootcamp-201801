const express = require('express')
require ('dotenv').config()
const bodyParser = require('body-parser')
const router = express.Router()

const app = express()

const jsonBodyParser = bodyParser.json()

app.use('/api', router)

const users=[]


router.get('/list', (req, res) => {
    res.json(ok('Todo bien', users.map(({id,  name})=> ({id, name}))))
})

router.post('/create', jsonBodyParser, (req, res) => {

    const{name, password} = req.body

    const id = new Date().getTime().toString()

    if(!name || !password)
       throw res.json(ko('Faltan datos')) 
    
    
    users.push({id:id, name, password})

    res.json(ok('Todo bien'))
})

router.put('/update/:id', jsonBodyParser, (req, res) => {
    const {id} = req.params
    const {name, password, newPassword} = req.body
    const user = users.find(user => user.id == id)

    if(!user)
        return res.json(ko('User doesn not exist'))

    if (user.password != password || users[index].name != name)
        res.json(ko('Invalid user or password'))

    user.name = name
    user.password = newPassword    

    res.json(ok('Todo bien')) 
})

router.delete('/delete/:id', jsonBodyParser, (req, res) => {
    const {id} = req.params
    const {name, password} =req.body

    const index = users.findIndex(user => user.id == id)

    

    if(!index === -1) 
        return res.json(ko('User does not exist'))
    
    if(users[index].password != password || users[index].name !=name)
        return res.json(ko('Invalid name or password'))

    users.splice(index, 1)

    res.json(ok('Todo bien'))
})



const port = process.env.PORT

app.listen(port, () => console.log(`server listening on port ${port}`))
    
function ok(message, item) {
        const res = {status:'ok', message}
    
        if (item) res.item = item
        return res
    }
    
 function ko(message, err){
        const res = {status:'ko', message}
    
        if (err) res.err = err
        return res
    }