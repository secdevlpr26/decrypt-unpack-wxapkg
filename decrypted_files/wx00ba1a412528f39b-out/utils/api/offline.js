Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("./cgi.js");

exports.getUserName = function(t, i, n, o, r) {
    e.get({
        url: "https://mp.weixin.qq.com/wxatrade/api/open/getMpUserNameOfWxa?wxaAppid=" + wx.getAccountInfoSync().miniProgram.appId,
        hideLoading: !0,
        success: function(e) {
            i && i(e);
        },
        fail: function(e) {
            n && n(e);
        },
        error: function() {
            o && o();
        },
        complete: function() {
            r && r();
        }
    });
};