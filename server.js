const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/*
* Classic server
*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/', function (req, res) {
   res.sendFile('index.html', { root: __dirname })
})

app.get('/json', function (req, res) {
   res.status(200).json({"message":"ok"})
})

/*
* Socket IO
*/
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', (socket) =>{
    console.log(`Connecté au client ${socket.id}`)
})


/*
* Port reading
*/
var serialport = require('serialport');
var portName = process.argv[2];

// var myPort = new serialport(portName, {
//     baudRate: 9600,
//     parser: new serialport.parsers.Readline('\r\n')
// })

// setInterval(_ => {
//     onData({'now': Date.now()})
// }, 1000)

myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen(){
    console.log('Open connections!');
}

function onData(data){
    io.emit('newDataFromInput', data)
    //console.log('data : ' + data);
}

// App launching
server.listen(3000, function () {
    console.log('Votre app est disponible sur localhost:3000 !')
})