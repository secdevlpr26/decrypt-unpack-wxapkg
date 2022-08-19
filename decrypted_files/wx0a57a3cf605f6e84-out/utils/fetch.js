var e = getApp();

module.exports.sendRequest = function(a, t, o) {
    t || (t = "GET");
    var n = e.globalData.userInfo ? {
        "auth-token": e.globalData.userInfo.token
    } : {};
    return new Promise(function(r, s) {
        wx.request({
            url: e.globalData.doMain + a,
            data: o,
            header: n,
            method: t,
            success: r,
            fail: s
        });
    });
};