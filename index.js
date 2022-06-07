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
        {label: 'New'},
        {label: 'File'},
        {type: 'separator'},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {label: 'Cut' },
        {label: 'Copy' },
        {label: 'Paste'}
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

