const fs = require('fs')

fs.createReadStream('cp.js').pipe(fs.createWriteStream('cp2.js'));