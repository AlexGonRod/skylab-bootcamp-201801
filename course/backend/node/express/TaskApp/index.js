const express = require('express')
require('dotenv').config()

const app = express()
const bodyParser = require('body-parser')

const jsonBodyParser = bodyParser.json()

let tasks = []
let ids = 1

app.post('/api/tasks', jsonBodyParser, (req, res) => {
    const { text } = req.body
    if(!text < 0) return res.json('Invalid task registration')
    if(tasks.length !== 0){ tasks[tasks.length -1].id = ids++ }
    tasks.push({id: ids, text, done: false})
    res.json('PUT ok')
})

app.get('/api/tasks', (req, res) => {
     const allTasks = tasks.map(task => {
         return task.text
     })
    res.json(allTasks)
})

app.get('/api/tasks/done', (req, res) => {
   
   const tasksDone = tasks.filter(task => {
       return task.done === true
   })
   
    res.json(tasksDone.map(({text})=>({text})))
})

app.get('/api/tasks/todo', (req, res) => {
    const todo = tasks.filter(task => {
        return task.done === false
    })
    res.json(todo.map(({text}) => ({text})))
})

app.put('/api/tasks/:id', (req, res) => {
   const {id } = req.params
   const find = tasks.find(task => {
      return task.id === parseInt(id)
   })
   find.done = true
    res.send('OK')
})

app.delete('/api/tasks/:id', (req, res) => {
   const { id } = req.params
   const find = tasks.findIndex(task => {
       return task.id = parseInt(id)
   })
   tasks.splice(find, 1)
    res.send('Deletion OK')
})

app.delete('/api/tasks', (req, res)=> {
    tasks = []
    res.send('All deleted')
})

app.patch('/api/tasks/:id', jsonBodyParser, (req, res) => {
    const { id } = req.params
    const { text } = req.body
    const find = tasks.find(task => {
        return task.text = text
    })
    res.json(find)
})

const port = process.env.PORT 

app.listen(port, () => console.log(`Server listening on port ${port}`))