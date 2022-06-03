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

  win.on('focus', (event)=>{
    var p = event.sender.getPosition();
    var s = event.sender.getSize();
    p[0] += 10;
    p[1] += 10;
    s[0] += 10;
    s[1] += 10;
    event.sender.setPosition(p[0], p[1], true);
    event.sender.setSize(s[0], s[1], true);
    var b = event.sender.getBounds();
    console.log('new bounds: ' + '['
      + b.x + ', ' + b.y + ', '
      + b.width + ', ' + b.height + ']');
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

