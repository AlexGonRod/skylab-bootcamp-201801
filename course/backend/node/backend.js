// var fs = require('fs')

// let variable = fs.readFileSync(process.argv[2]) 
    
//     console.log(variable.toString().split('\n').length -1)

// const fs = require('fs')
// var file = process.argv[2]

//  fs.readFile(file, 'utf8', callback = (err, data) => {
//     if (err) throw err
    
//     console.log(data.toString().split('\n').length -1)
// })


var fs = require('fs')

var path = process.argv[2]

fs.readdir(path, callback = (err, list) => {
    if (err) throw err
    console.log(list)
})