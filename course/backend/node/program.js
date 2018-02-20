// var result = 0;
// for (i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i]);
// }

// console.log(result);


// var fs = require('fs');

// var variable = fs.readFileSync(process.argv[2]);

// var results = (variable.toString().split('\n').length -1);

// console.log(results)


// var fs = require('fs');

// var second = fs.readFile(process.argv[2], callback = (err, data) => 
// {
//    err ? console.warn('error') : console.log(data.toString().split('\n').length - 1)
// })


// const fs = require('fs')
// const path = require('path')

// let _path = process.argv[2]
// let ext = '.' + process.argv[3]

// fs.readdir(_path, (err , data) => {
//     if (err) throw err
//     data.forEach(file => {
//         if(path.extname (file) === ext) console.log(file)
    
//     })
//     })


// const fs = require('fs')
// const path = require('path')

// module.exports = function (_path, ext, callback){
// fs.readdir(_path, (err, data) => {
//     if (err) throw err

//     const filtered = files.filter(file => {
//         if (path.extname(file) === ext) console.log(file)

//     })
//     callback(filtered)
// })
// }


// const http = require('http')

// const argmnt = process.argv[2]

// http.get(argmnt, (response) => {
//     response.setEncoding('utf-8')
//     response.on("data", console.log)
//     response.on("error", console.log)
// })

// http.get(argmnt, (res) => {
//     response.setEncoding('utf-8')
//     response.on("data", console.log)

//     res.on('error', console.error)
//     res.on('end', () => console.log('ending...'))

// })


const http = require('http')
const url = process.argv[2]
const bl = require('bl')


http.get(url, (res) => {
    res.setEncoding('utf-8')
    res.pipe('data', bl => {

    res.pipe('error', console.error)
    })

        
    })


