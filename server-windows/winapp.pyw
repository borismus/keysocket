import os, sys, imp

# Twisted and autobahn imports.
try:
  from twisted.internet import _threadedselect as threadedselectreactor
except:
  from twisted.internet import threadedselectreactor
try:
  threadedselectreactor.install()
except:
  pass
from twisted.internet import reactor
from broadcast import BroadcastServerFactory

# Windows API modules.
from win32api import *
from win32gui import *
import win32con
import pyHook 

KEY_TO_MESSAGE = {
  'Media_Prev_Track': '20',
  'Media_Play_Pause': '16',
  'Media_Next_Track': '19'
}
TASKBAR_NOTIFY = win32con.WM_USER + 20

def isFrozen():
   return (hasattr(sys, "frozen") or # new py2exe
           hasattr(sys, "importers") # old py2exe
           or imp.is_frozen("__main__")) # tools/freeze

class MediaKeysWindow(object):
  def __init__(self):
    msg_TaskbarRestart = RegisterWindowMessage('TaskbarCreated');
    message_map = {
      msg_TaskbarRestart: self.OnRestart,
      win32con.WM_DESTROY: self.OnDestroy,
      win32con.WM_COMMAND: self.OnCommand,
      TASKBAR_NOTIFY: self.OnTaskbarNotify,
    }

    # Register the Window class.
    wc = WNDCLASS()
    hinst = wc.hInstance = GetModuleHandle(None)
    wc.lpszClassName = "KeySocketMediaKeys"
    wc.style = win32con.CS_VREDRAW | win32con.CS_HREDRAW;
    wc.hCursor = LoadCursor(0, win32con.IDC_ARROW)
    wc.hbrBackground = win32con.COLOR_WINDOW
    wc.lpfnWndProc = message_map
    classAtom = RegisterClass(wc)

    # Create the Window.
    style = win32con.WS_OVERLAPPED | win32con.WS_SYSMENU
    self.hwnd = CreateWindow(
        classAtom, "Key Socket Media Keys", style,
        0, 0, win32con.CW_USEDEFAULT, win32con.CW_USEDEFAULT,
        0, 0, hinst, None)
    UpdateWindow(self.hwnd)
    self._DoCreateIcons()

  def _DoCreateIcons(self):
    appPath = sys.executable if isFrozen() else __file__
    if os.path.isfile(appPath):
      hicon = LoadImage(GetModuleHandle(None),
                        os.path.join(os.path.dirname(appPath), "icon.ico" ),
                        win32con.IMAGE_ICON,
                        0,
                        0,
                        win32con.LR_LOADFROMFILE | win32con.LR_DEFAULTSIZE)
    else:
      hicon = LoadIcon(0, win32con.IDI_APPLICATION)
    flags = NIF_ICON | NIF_MESSAGE | NIF_TIP
    nid = (self.hwnd, 0, flags, TASKBAR_NOTIFY, hicon, "Key Socket Media Keys")
    Shell_NotifyIcon(NIM_ADD, nid)

  def OnRestart(self, unused_hwnd, unused_msg, unused_wparam, unused_lparam):
    self._DoCreateIcons()

  def Destroy(self):
    self.OnDestroy(self.hwnd, None, None, None)

  def OnDestroy(self, hwnd, unused_msg, unused_wparam, unused_lparam):
    try:
      Shell_NotifyIcon(NIM_DELETE, (self.hwnd, 0))
    except Exception, e:
      pass
    PostQuitMessage(0)

  def OnTaskbarNotify(self, hwnd, msg, wparam, lparam):
    if lparam in (win32con.WM_LBUTTONUP, win32con.WM_RBUTTONUP):
      menu = CreatePopupMenu()
      AppendMenu(menu, win32con.MF_STRING, 1042, "Quit")
      pos = GetCursorPos()
      SetForegroundWindow(self.hwnd)
      TrackPopupMenu(
          menu, win32con.TPM_LEFTALIGN, pos[0], pos[1], 0, self.hwnd, None)
      PostMessage(self.hwnd, win32con.WM_NULL, 0, 0)
    return 1

  def OnCommand(self, hwnd, unused_msg, wparam, unused_lparam):
    if LOWORD(wparam) == 1042: DestroyWindow(self.hwnd)

if __name__ == '__main__':
  # Create Windows app.
  window = MediaKeysWindow()

  # Create server.
  factory = BroadcastServerFactory("ws://localhost:1337")
  reactor.listenTCP(1337, factory)

  # Install hook.
  def handleEvent(event):
    if event.Key in KEY_TO_MESSAGE:
      factory.broadcast(KEY_TO_MESSAGE[event.Key])
    # Pass the event to other handlers
    return True
  hm = pyHook.HookManager()
  hm.KeyUp = handleEvent
  hm.HookKeyboard()

  # Start twisted.
  reactor.interleave(lambda next: next())
  reactor.addSystemEventTrigger('after', 'shutdown', window.Destroy)

  # Run Windows  main loop.
  PumpMessages()

  # Kill twisted if it's still alive.
  if reactor.running:
    reactor.stop()
