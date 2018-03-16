const { app, BrowserWindow } = require('electron')
const path = require('path')

const WINDOW_WIDTH = 1280
const WINDOW_HEIGHT = 720

// Useful for debugging websocket connections, 
// don't use in production environments
app.commandLine.appendSwitch('ignore-certificate-errors')

app.once('ready', () => {
  // Create window
  const mainWindow = new BrowserWindow({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    preload: true
  })

  // Load index.html
  mainWindow.loadURL(`file://${path.join(__dirname, 'html', 'index.html')}`)
})