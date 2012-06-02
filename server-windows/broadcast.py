from twisted.internet import reactor
from autobahn.websocket import WebSocketServerFactory, WebSocketServerProtocol

class BroadcastServerProtocol(WebSocketServerProtocol):
  def onOpen(self):
    self.factory.register(self)

  def onMessage(self, msg, binary):
    print "Received message '%s' from %s" % (msg, self.peerstr)

  def connectionLost(self, reason):
    WebSocketServerProtocol.connectionLost(self, reason)
    self.factory.unregister(self)
 
 
class BroadcastServerFactory(WebSocketServerFactory):
  protocol = BroadcastServerProtocol

  def __init__(self, url):
    WebSocketServerFactory.__init__(self, url)
    self.clients = []

  def register(self, client):
    if not client in self.clients:
      print 'Registered', client.peerstr
      self.clients.append(client)

  def unregister(self, client):
    if client in self.clients:
      print 'Unregistered', client.peerstr
      self.clients.remove(client)

  def broadcast(self, msg):
    print 'Broadcasting:', msg
    for c in self.clients:
      print '  Send to ' + c.peerstr
      c.sendMessage(msg)
