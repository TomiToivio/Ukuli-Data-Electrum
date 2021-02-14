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
              role: 'toggleDevTools'
            }
          ]
        }
      ];

      const menu = Menu.buildFromTemplate(template);

      module.exports = menu;
