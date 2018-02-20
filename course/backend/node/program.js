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


// const http = require('http')
// const url = process.argv[2]

// http.get(url, res => {
//     res.setEncoding('utf-8')

//     let info = ''
    
//     res.on( 'data', chunk => 
//             info += chunk)
    
//         res.on('end', () => {
//             console.log(info.length)
//             console.log(info)
//         })
//         res.on('error', console.error)
//     })
        // |
        // |
        // \/
    
// const http = require('http')
// const url = process.argv[2]
// const bl = require('bl')

// http.get(url, res => {
    // res.setEncoding('utf-8')
    // res.pipe(bl, ((err, data) => {
    //     if (err) throw err
        
//         console.log(data.toString())
//     }))
//     res.on('error', concole.error)
// })




// const http = require('http')
// const url = process.argv[2]
// const url2 = process.argv[3]
// const url3 = process.argv[4]
// const concatStream = require ('concat-stream')

// http.get(url, res => {
//     res.setEncoding('utf-8')
//     res.pipe(concatStream(data => {
//         console.log(data)

//         http.get(url2, res => {
//             res.setEncoding('utf-8')
//             res.pipe(concatStream(data => {
//                 console.log(data)

//                 http.get(url3, res => {
//                     res.setEncoding('utf-8')
//                     res.pipe(concatStream(data => {
//                         console.log(data)
//                     }))
//                 })
//             }))
//         })
//     }))
//     })

// const http = require('http')
// const concatStream = require('concat-stream')

// const urlNumber = process.argv.length -2
// let n = 0

// getResults = () => {
//     const url = process.argv[n+2]
//     http.get(url, res => {
//         res.setEncoding('utf-8')
//         res.pipe(concatStream(data => {
//             console.log(data)

//         if(n < urlNumber -1){
//             n++
//             getResults()
//             console.log("lalala")
//         }
// })
// )})
// }
// getResults() 

//Probar a hacer una constante array con n urls y hacer una function con un if(hay lenght), ejecuta el codigo

// const net = require('net')


// function getTimeDigits(number){
//    return number < 10 ? '0' + number : number
// }

// const server = net.createServer(socket => {
//     const date = new Date()

//     const formattedTime = `${date.getFullYear()}-${getTimeDigits(date.getMonth() +1 )}-${getTimeDigits(date.getDay())} ${getTimeDigits(date.getHours())}:${getTimeDigits(date.getMinutes())}\n`


//     socket.write(formattedTime)
//     socket.on('close', () => console.log('closing socket'))
    
// })
// server.listen(process.argv[2])


// const http = require('http')
// const fs = require('fs')
// var file = process.argv[3]

// const server = http.createServer((req, res) => {

//     fs.createReadStream(file).pipe(res)
// })


// const port = process.argv[2]

// server.listen(port)

const http = ('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
    if (req.method === 'POST')
    req.pipe(map(chunk => { 
    return chunk.toString().toUpperCase().pipe(res)
    }))
})



const port = process.argv[2]

server.listen(port)