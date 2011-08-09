#
#
# @author Jean-Lou Dupont
#
#
all:
	@echo "Options for Keysocket:"
	@echo " release_osx"
	
release:
	@rm -rf build
	@install -d build/osx/keysocket.app/Contents
	@install -d build/osx/keysocket.app/Contents/MacOs
	@install -d build/osx/keysocket.app/Contents/Resources
	
	@install server/osx/Info.plist build/osx/keysocket.app/Contents
	
	@install server/keysocket.py build/osx/keysocket.app/Contents/MacOs
	@install server/websocket.py build/osx/keysocket.app/Contents/MacOs
	@install server/app.py       build/osx/keysocket.app/Contents/MacOs

	@install server/icon.icns   build/osx/keysocket.app/Contents/Resources
	@install server/icon.png    build/osx/keysocket.app/Contents/Resources
	@install server/icon-hi.png build/osx/keysocket.app/Contents/Resources
	
	@echo "Finished building OSX .app"