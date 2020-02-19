package com.jdjinsui.cap.notch;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class NotchPlugin extends Plugin {

    @PluginMethod()
    public void isNotch(PluginCall call) {
        Boolean value = true;

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}
