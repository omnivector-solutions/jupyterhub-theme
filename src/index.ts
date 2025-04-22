import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the omnivector-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'omnivector-theme',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    // console.log('JupyterLab extension omnivector-theme is activated!');
    const style = 'omnivector-theme/index.css';

    manager.register({
      name: 'omnivector-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
