# generic Python imports
import datetime
import os
import sched
import sys
import tempfile
import threading
import time

# need PyObjC on sys.path...:
for d in sys.path:
  if 'Extras' in d:
    sys.path.append(d + '/PyObjC')
    break

# objc-related imports
import objc
from Foundation import *
from AppKit import *
from PyObjCTools import AppHelper

# all stuff related to the repeating-action
thesched = sched.scheduler(time.time, time.sleep)

def tick(n, writer):
  writer(n)
  thesched.enter(20.0, 10, tick, (n+1, writer))
  fd, name = tempfile.mkstemp('.txt', 'hello', '/tmp');
  print 'writing %r' % name
  f = os.fdopen(fd, 'w')
  f.write(datetime.datetime.now().isoformat())
  f.write('\n')
  f.close()

def schedule(writer):
  pool = NSAutoreleasePool.alloc().init()
  thesched.enter(0.0, 10, tick, (1, writer))
  thesched.run()
  # normally you'd want pool.drain() here, but since this function never
  # ends until end of program (thesched.run never returns since each tick
  # schedules a new one) that pool.drain would never execute here;-).

# objc-related stuff
class TheDelegate(NSObject):

  statusbar = None
  state = 'idle'

  def applicationDidFinishLaunching_(self, notification):
    statusbar = NSStatusBar.systemStatusBar()
    self.statusitem = statusbar.statusItemWithLength_(
        NSVariableStatusItemLength)
    self.statusitem.setHighlightMode_(1)
    self.statusitem.setToolTip_('Example')
    self.statusitem.setTitle_('Example')

    self.menu = NSMenu.alloc().init()
    menuitem = NSMenuItem.alloc().initWithTitle_action_keyEquivalent_(
        'Quit', 'terminate:', '')
    self.menu.addItem_(menuitem)
    self.statusitem.setMenu_(self.menu)

  def writer(self, s):
    self.badge.setBadgeLabel_(str(s))


if __name__ == "__main__":
  # prepare and set our delegate
  app = NSApplication.sharedApplication()
  delegate = TheDelegate.alloc().init()
  app.setDelegate_(delegate)
  delegate.badge = app.dockTile()
  delegate.writer(0)

  # on a separate thread, run the scheduler
  t = threading.Thread(target=schedule, args=(delegate.writer,))
  t.setDaemon(1)
  t.start()

  # let her rip!-)
  AppHelper.runEventLoop()
