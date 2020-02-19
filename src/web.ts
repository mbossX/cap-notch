import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { NotchPluginPlugin, NotchResult } from './definitions';

export class NotchPluginWeb extends WebPlugin implements NotchPluginPlugin {
  constructor () {
    super({
      name: 'NotchPlugin',
      platforms: ['web']
    });
  }

  async isNotch (): Promise<NotchResult> {
    return { value: false };
  }
}

const NotchPlugin = new NotchPluginWeb();

export { NotchPlugin };
registerWebPlugin(NotchPlugin);
