function e(e, r) {
    this.appId = e, this.sessionKey = r;
}

var r = require("crypto");

e.prototype.decryptData = function(e, t) {
    var a = new Buffer(this.sessionKey, "base64");
    e = new Buffer(e, "base64"), t = new Buffer(t, "base64");
    try {
        var s = r.createDecipheriv("aes-128-cbc", a, t);
        s.setAutoPadding(!0);
        var i = s.update(e, "binary", "utf8");
        i += s.final("utf8"), i = JSON.parse(i);
    } catch (e) {
        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
        throw new Error("Illegal Buffer");
    }
    if (i.watermark.appid !== this.appId) throw new Error("Illegal Buffer");
    return i;
}, module.exports = e;