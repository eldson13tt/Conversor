const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')


function createWindow () {


  const mainWindow = new BrowserWindow({
    width: 600,
    height: 565,
    resizable: false,
    icon: __dirname + '/icon.png',
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') 
    },
    webPreferences: {
      devTools:false
    }
  })

  mainWindow.loadFile('index.html')
  //mainWindow.setMenu(null)

}


app.whenReady().then(() => {
  createWindow()

  const template = []
  teat.buildFromTemplate(template)


  app.on('activate', function () {
    
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})




app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') app.quit()
})


