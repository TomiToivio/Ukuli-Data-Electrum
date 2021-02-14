const { Menu, shell } = require('electron');

      const template = [
        {
          role: 'help',
          submenu: [
            {
              label: 'About Editor Component',
              click() {
                  shell.openExternal('https://simplemde.com/');
              }
            }
          ]
        },
        {
          label: 'Debugging',
          submenu: [
            {
              label: 'Dev Tools',
              role: 'toggleDevTools'
            },
      
            { type: 'separator' },
            { role: 'reload' }
          ]
      }
      ];

      const menu = Menu.buildFromTemplate(template);

      module.exports = menu;
