/* eslint import/no-extraneous-dependencies: off */
import { dialog, Menu } from 'electron';

import translations from './locales/ru.json';

const getTranslation = translationId => translations[`taxics.menu.${translationId}`];

const editMenuTemplateItems = [
  { label: getTranslation('edit.undo'), accelerator: 'CmdOrCtrl+Z', role: 'undo' },
  { label: getTranslation('edit.redo'), accelerator: 'CmdOrCtrl+Y', role: 'redo' },
  { type: 'separator' },
  { label: getTranslation('edit.cut'), accelerator: 'CmdOrCtrl+X', role: 'cut' },
  { label: getTranslation('edit.copy'), accelerator: 'CmdOrCtrl+C', role: 'copy' },
  { label: getTranslation('edit.paste'), accelerator: 'CmdOrCtrl+V', role: 'paste' },
  { label: getTranslation('edit.selectAll'), accelerator: 'CmdOrCtrl+A', role: 'selectAll' },
];

const editMenuTemplate = {
  label: getTranslation('edit'),
  submenu: editMenuTemplateItems,
};

const getMenuTemplate = () => [
  {
    label: getTranslation('file'),
    submenu: [
      {
        label: getTranslation('file.quit'),
        role: 'quit',
      },
    ],
  },
  editMenuTemplate,
  {
    label: getTranslation('help'),
    submenu: [
      {
        label: getTranslation('help.about'),
        click: () => {
          dialog.showMessageBox({ type: 'info', buttons: ['OK'], message: getTranslation('title') }, console.log);
        },
      },
    ],
  },
];

class MenuBuilder {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
      this.setupDevelopmentEnvironment();
    } else {
      this.mainWindow.webContents.on('context-menu', () => {
        Menu.buildFromTemplate(editMenuTemplateItems).popup(this.mainWindow);
      });
    }

    const menu = Menu.buildFromTemplate(getMenuTemplate());
    Menu.setApplicationMenu(menu);
    return menu;
  }

  setupDevelopmentEnvironment() {
    this.mainWindow.openDevTools();
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.inspectElement(x, y);
          },
        },
      ]).popup(this.mainWindow);
    });
  }
}

export default MenuBuilder;
