const { app, BrowserWindow, Menu, Tray } = require('electron')

Menu.setApplicationMenu(null)
Tray

function createWindow() {
  const appIcon = new Tray(__dirname + '/icon/temporizador-icon.png')

  const win = new BrowserWindow({
    width: 600,
    height: 400,
    show: false,
    icon: __dirname + '/icon/temporizador-icon.png',
    resizable: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.once("ready-to-show", () => {
    win.show();
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.etAllWindows().length === 0) {
    createWindow()
  }
})
