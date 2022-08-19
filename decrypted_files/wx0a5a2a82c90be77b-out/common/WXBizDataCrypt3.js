var e = require("./crypotojs/cryptojs.js").Crypto;

module.exports = {
    decryptData: function(t, s, r) {
        t = e.util.base64ToBytes(t), s = e.util.base64ToBytes(s), r = e.util.base64ToBytes(r);
        var o = new e.mode.CBC(e.pad.pkcs7);
        try {
            var a = e.AES.decrypt(t, s, {
                asBpytes: !0,
                iv: r,
                mode: o
            }), c = JSON.parse(a);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e);
        }
        return c;
    }
};