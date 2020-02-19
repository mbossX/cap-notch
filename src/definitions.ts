declare module '@capacitor/core' {
  interface PluginRegistry {
    NotchPlugin: NotchPluginPlugin;
  }
}

/**
 * 刘海屏判断结果
 */
export interface NotchResult {
  /**
   * 是否为刘海屏
   */
  value: boolean;
}

/**
 * 刘海屏判断插件
 */
export interface NotchPluginPlugin {
  /**
   * 是否为刘海屏
   */
  isNotch(): Promise<NotchResult>;
}
