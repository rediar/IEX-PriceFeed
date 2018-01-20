const url = 'https://ws-api.iextrading.com/1.0/last';
const socket = require('socket.io-client')(url);

function logScreen(text) {
    console.log('message: ' + text);
}

socket.on('connect', function () {
    socket.emit('subscribe', 'SPY');
    socket.on('message', logScreen);
});