function e(e, a, t, o) {
    wx.request({
        url: e,
        method: "GET",
        data: a,
        header: {
            Accept: "application/json"
        },
        success: function(e) {
            wx.hideLoading(), t(e);
        },
        error: function() {
            wx.hideLoading(), wx.showToast({
                title: "数据加载失败",
                duration: "2000",
                mask: !0
            }), o();
        }
    });
}

var a = getApp(), t = a.globalData.config.base, o = (a.globalData.config.appid, 
a.globalData.config.appsecret);

module.exports = {
    wxPost: function(e, a, t, o) {
        wx.request({
            url: e,
            method: "POST",
            data: a,
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
            },
            success: function(e) {
                t(e);
            },
            error: function() {
                o();
            }
        });
    },
    wxGet: e,
    getOpenId: function() {
        var n = a.globalData.appid;
        a.globalData.appsecret;
        return new Promise(function(a, c) {
            wx.login({
                success: function(i) {
                    var p = i.code;
                    e(t + "/base/get_openid?appid=" + n + "&appsecret=" + o + "&code=" + p, a, c);
                }
            });
        });
    }
};