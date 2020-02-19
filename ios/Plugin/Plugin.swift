import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(NotchPlugin)
public class NotchPlugin: CAPPlugin {
    
    @objc func isNotch(_ call: CAPPluginCall) {
        let result = true
        call.success([value: result])
    }
}
