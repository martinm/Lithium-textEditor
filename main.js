const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

createWindow = () => {
  mainWindow = new BrowserWindow({
    // frame: false,
    width: 1280, height: 720,
    minWidth: 640, minHeight: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')    }
  })

  mainWindow.loadFile('index.html')

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})