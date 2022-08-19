var n = require("./constants.js"), e = function(n) {
    return (n = n.toString())[1] ? n : "0" + n;
};

module.exports = {
    formatTime: function(n) {
        var t = n.getFullYear(), r = n.getMonth() + 1, o = n.getDate(), i = n.getHours(), a = n.getMinutes(), u = n.getSeconds();
        return [ t, r, o ].map(e).join("/") + " " + [ i, a, u ].map(e).join(":");
    },
    noop: function() {},
    extend: function(n) {
        for (var e = Array.prototype.slice.call(arguments, 1), t = 0; t < e.length; t += 1) {
            var r = e[t];
            for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
        }
        return n;
    },
    showToast: function(n) {
        wx.showToast({
            title: n || "网络异常",
            icon: "none",
            duration: 2e3
        });
    },
    urlFormat: function(e) {
        var t = wx.getStorageSync("_user"), r = t && t.cid;
        console.log();
        var o = "minimp=" + t.phone + "&aid=" + n.MIN_AID + "&openId=" + t.openid + "&cid=" + r + "&source=miniProgram";
        return e + (-1 == e.indexOf("?") ? "?" : "&") + o;
    },
    getUrlParam: function(n, e) {
        var t = new RegExp("(^|&)" + n + "=([^&]*)(&|$)", "i"), r = e.split("qrcode/?")[1] && e.split("qrcode/?")[1].match(t);
        return null != r ? unescape(r[2]) : null;
    }
};