const { app, Menu, MenuItem, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow( {
    width: 600,
    height: 400
  });
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
        {type: 'separator'},
        {label: 'Quit', click: ()=>{
          console.log('Quit menu.');
          app.quit();
        }}
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

