let http = require('http');
let server = http.createServer()

var serialport = require('serialport');
var portName = process.argv[2];

var myPort = new serialport(portName, {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\r\n')
});

server.on('request', function(request, response) {

    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })

    myPort.on('open', onOpen);
    myPort.on('data', onData);

    function onOpen(){
        console.log('Open connections!');
    }

    function onData(data){
        response.end('data : ' + data);
        //console.log('data : ' + data);
    }
});

server.listen(8080);


