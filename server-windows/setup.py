"""A distutils script to build KeySocket on Windows.

Build into an exe with:
  setup.py build
Build into an installer with:
  setup.py bdist_msi
"""

from cx_Freeze import setup, Executable


if __name__ == '__main__':
  exe = Executable(script='winapp.pyw',
                   base='Win32GUI',
                   targetName='KeySocket.exe',
                   icon='icon.ico',
                   copyDependentFiles=True,
                   shortcutDir='ProgramMenuFolder',
                   shortcutName='KeySocket')
  setup(name='KeySocket',
        version='1.0',
        author='Max Shawabkeh',
        description='A local web socket server for media keys.',
        executables=[exe],
        data_files=[('', ['icon.ico'])])
