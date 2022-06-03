const { app, BrowserWindow } = require('electron');

const html = '<html><head>'
  + '<title>HTML STRING</title>'
  + '</head><body>'
  + '<h1>HTML STRING</h1>'
  + '<p>This is string content.</p>'
  + '</body></html>';

function createWindow () {
  var fn = (event) => {
    console.log('focus: ' + event.sender.id);
  };
  let win1 = new BrowserWindow( {
    width: 400,
    height: 200
  });
  win1.loadFile('index.html');
  win1.on('focus', fn);
  let win2 = new BrowserWindow( {
    width: 400,
    height: 200
  });
  win2.loadFile('index.html');
  win2.on('focus', fn);
  // let win = new BrowserWindow( {
  //   width: 1200,
  //   height: 800,
  //   show: false
  // });
  // win.loadURL('http://www.tuyano.com');
  // win.on('ready-to-show', ()=>{
  //   win.show();
  // });
  // win.on('show', ()=>{
  //   console.log('show browser-window.');
  // });
  // win.loadFile('index.html');

  // let win2 = new BrowserWindow({
  //   width: 400,
  //   height: 200
  // });
  // win2.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// app.on('will-finish-launching', () => {
//   console.log('will-finish-launching');
// }).whenReady().then(createWindow);

// app.on('browser-window-focus', (event) => {
//   console.log('browser-window-focus: '
//     + event.sender.id);
// });

// app.on('browser-window-blur', (event) => {
//   console.log('browser-window-blur: '
//     + event.sender.id);
// });

// app.on('browser-window-created', (event) => {
//   console.log('browser-window-created');
// });

// app.on('web-contents-created', (event) => {
//   console.log('web-contents-created');
// });

