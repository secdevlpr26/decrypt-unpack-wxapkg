function t(t, e) {
    this.appId = t, this.sessionKey = e;
}

var e = require("cryptojs/cryptojs.js").Crypto;

getApp();

t.prototype.decryptData = function(t, s) {
    var t = e.util.base64ToBytes(t), p = e.util.base64ToBytes(this.sessionKey), s = e.util.base64ToBytes(s), r = new e.mode.CBC(e.pad.pkcs7);
    try {
        var a = e.AES.decrypt(t, p, {
            asBpytes: !0,
            iv: s,
            mode: r
        }), o = JSON.parse(a);
    } catch (t) {}
    return o.watermark.appid, this.appId, o;
}, module.exports = t;