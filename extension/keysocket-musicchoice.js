var connection = null;
var isConnected = false;

function controlMC(key) {
    if(key === PLAY) {
        simulateClick(document.querySelector('#audiomute'));
    }
}

console.log("keysocket: Loading Music Choice extension");
reconnect(controlMC, connection, isConnected);
