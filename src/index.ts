import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jh-vantage-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jh-vantage-theme:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jh-vantage-theme is activated!');
    const style = 'jh-vantage-theme/index.css';

    manager.register({
      name: 'jh-vantage-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
