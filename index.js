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
  win.loadFile('index.html');

  win.flag = true;
  win.on('focus', (event)=>{
    event.sender.flag = !event.sender.flag;
    console.log('flag: ' + event.sender.flag);
  });
  win.on('will-move', (event)=>{
    if (event.sender.flag) {
      event.preventDefault();
    }
  });
  win.on('move', (event)=>{
      console.log(event.sender.getPosition());
  });
  win.on('will-resize', (event)=>{
    if (!event.sender.flag) {
      event.preventDefault();
    }
  });
  win.on('resize', (event) => {
    console.log(event.sender.getSize());
  });

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

