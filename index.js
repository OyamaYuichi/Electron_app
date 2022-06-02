const { app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow( {
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}).whenReady().then(createWindow);