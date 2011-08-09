#!/usr/bin/env python
#
from threading import Thread
import logging

import app
import websocket

KEY_UP = 11

class KeySocket(websocket.WebSocket):
    pass


class KeySocketServer(Thread):
    def __init__(self):
        self.server = websocket.WebSocketServer('localhost', 1337, KeySocket)
        Thread.__init__(self)

    def run(self):
        self.server.listen()

    def sendKey(self, keyCode):
        for socket in self.server.connections.values():
            socket.send(keyCode)

if __name__ == "__main__":
    # Start the websocket server in a separate thread
    server = KeySocketServer()
    server.start()

    def sendKeyCommand(code, state):
        # When there's a keyup
        if state is KEY_UP:
            # Send the code to the websocket
            server.sendKey(code)
            logging.info('Sent code %s to clients.' % code)


    # Launch the cocoa app
    app.initialize(sendKeyCommand);
