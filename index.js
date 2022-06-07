const { app, Menu, MenuItem, BrowserWindow } = require('electron');

function createWindow () {
  win = new BrowserWindow( {
    width: 600,
    height: 400
  });
  win.loadFile('index.html');
}

function createMenu () {
  let menu_temp = [
    {
      label: 'File',
      submenu: [
        {label: 'New', click: ()=>{
          console.log('New menu.');
          createWindow();
        }},
        {label: 'File', click: ()=>{
          console.log('File menu.');
          createWindow();
        }},
        {type: 'separator'},
        {role: 'quit'}
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'}
      ]
    }
  ];
  let menu = Menu.buildFromTemplate(menu_temp);

  Menu.setApplicationMenu(menu);
}

createMenu();
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

