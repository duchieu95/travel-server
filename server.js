// #!/usr/bin/env node
var debug = require('debug')('app');
var server = require('./app');

var net = require('net');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
server.get("port",server_port);
server.get("ip",server_ip_address);

server.listen(server.get('port'),server.get('ip'), function() {
    // var socketIO = require('./socketio')(server);
    // debug('Express server listening on port ' + server.address().port);
    console.log('Express server listening on  IP: ' + server.get('ip') + ' and port ' + server.get('port'));
});
