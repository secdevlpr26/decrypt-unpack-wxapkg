var e = require("./crypto-js.js");

module.exports = {
    decryptData: function(r, t, s) {
        var a = e.Base64.parse(t), o = e.Base64.parse(s), d = e.Base64.parse(r), i = e.Base64.stringify(d), n = new e.AES().decrypt(i, a, {
            iv: o,
            mode: e.Mode.CBC,
            padding: e.Padding.Pkcs7
        }), p = JSON.parse(n.toString(e.Utf8));
        return console.log("decrypt:", n.toString(e.Utf8)), p;
    }
};