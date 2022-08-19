Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("/api")), n = require("rd.js");

exports.default = {
    wxAouth: function() {
        return new Promise(function(o, t) {
            wx.login({
                success: function(t) {
                    e.default.getOpenid("/user/miniSession", {
                        jscode: t.code
                    }).then(function(e) {
                        console.log(e), console.log("ttttt");
                        var t = new n("wx0b1cae82af0a0be7", e.result.session_key);
                        wx.getUserInfo({
                            success: function(e) {
                                console.log("uuuuuu");
                                var n = t.decryptData(e.encryptedData, e.iv);
                                console.log(n), wx.setStorageSync("oauthInfo", {
                                    open_id: n.openId,
                                    uuid: n.unionId,
                                    nickname: n.nickName,
                                    img_head: n.avatarUrl,
                                    sex: n.gender
                                }), o(n.unionId);
                            },
                            fail: function(e) {
                                console.log("iiiiii", e), wx.openSetting({
                                    success: function(e) {
                                        console.log(e);
                                    }
                                });
                            }
                        });
                    });
                }
            });
        });
    }
};