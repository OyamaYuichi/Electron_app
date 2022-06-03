const { app, BrowserView, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow( {
    width: 600,
    height: 400
  });
  win.loadFile('index.html');

  const view = new BrowserView();
  view.webContents.loadURL('https://google.com');

  win.setBrowserView(view);
  view.setBounds({ x: 200, y: 150, width: 300, height: 150 });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

