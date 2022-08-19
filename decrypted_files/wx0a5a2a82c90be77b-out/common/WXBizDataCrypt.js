var e = require("./crypto-js.js");

module.exports = {
    decryptData: function(r, t, a) {
        t = e.enc.Utf8.parse(t), a = e.enc.Utf8.parse(a);
        var c = e.AES.encrypt("你好", "leiming", {
            mode: e.mode.CBC,
            padding: e.pad.Pkcs7
        }), d = c.ciphertext.toString(), n = e.enc.Hex.parse(d);
        e.enc.Base64.stringify(n), e.AES.decrypt(c, "leiming", {
            mode: e.mode.CBC,
            padding: e.pad.Pkcs7
        }).toString(e.enc.Utf8);
        try {
            var p = e.AES.decrypt(r, t, {
                iv: a,
                mode: e.mode.CBC,
                padding: e.pad.Pkcs7
            }), i = (p.toString(e.enc.Utf8), JSON.parse(p));
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e);
        }
        return i.watermark.appid !== this.appId && console.log(err), i;
    }
};