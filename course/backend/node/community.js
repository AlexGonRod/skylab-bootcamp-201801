
//Escuchador(Servidor)

// const net = require('net')

// const server = net.createServer(socket => {
//     socket.on('data', data => console.log(data.toString()))
// })

// const port = process.argv[2]
// server.listen(port, () => console.log(`Chat server running on port ${port}`))



//Cliente

var net = require('net');

var client = new net.Socket();
client.connect(3000, '192.168.0.16', function () {
    console.log('Connected'); //Msg avisador de conexión
    client.write('') // El msg que se envia al conectarse
});

client.on('data', data => console.log(data.toString())) //Cuando recives un dato, lo transformas a string 