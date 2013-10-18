from setuptools import setup

OPTIONS = {
    'iconfile': 'res/icon.icns',
    'resources': ['res/icon.png', 'res/icon-hi.png'],
    'plist': {
        'CFBundleVersion': "0.1",
        'LSUIElement': True
    }
}

setup(
    name="Key Socket",
    app=["app.py"],
    options={'py2app': OPTIONS},
    setup_requires=["py2app"],
)

