from setuptools import setup

OPTIONS = {
    'resources': ['icon.png', 'icon-hi.png']
}

setup(
   app = ["keysocket.py"],
   options={'py2app': OPTIONS},
   setup_requires=["py2app"],
)

