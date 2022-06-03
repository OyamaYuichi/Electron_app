const { app, BrowserWindow } = require('electron');

const html = '<html><head>'
  + '<title>HTML STRING</title>'
  + '</head><body>'
  + '<h1>HTML STRING</h1>'
  + '<p>This is string content.</p>'
  + '</body></html>';

function createWindow () {
  let win = new BrowserWindow( {
    width: 400,
    height: 250
  });
  let webc = win.webContents;
  webc.on('new-window', ()=>{
    console.log('new-window.');
  });
  webc.on('did-finish-load', ()=>{
    console.log('did-finish-load.');
  });
  webc.on('dom-ready', ()=>{
    console.log('dom-ready.');
  });
  webc.on('will-navigate', ()=>{
    console.log('will-navigate.');
  });
  webc.on('did-navigate', ()=>{
    console.log('did-navigate.');
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

