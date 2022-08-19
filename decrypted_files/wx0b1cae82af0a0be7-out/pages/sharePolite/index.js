var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        page: 1,
        page_size: 1e5,
        invitedList: [],
        inviterId: null,
        code: ""
    },
    onLoad: function(t) {
        var a = this;
        e.default.myShared("/user/myShared").then(function(e) {
            e.result.list.forEach(function(e) {
                e.nickName = e.nickName || "新用户", e.headImage = e.headImage || "/images/avatar-default.png";
            }), a.data.inviterId = e.result.inviterId, a.setData({
                invitedList: e.result.list
            });
        });
    },
    wxCode: function() {
        var e = this;
        this.getAccessToken().then(function(t) {
            wx.request({
                url: "https://api.weixin.qq.com/wxa/getwxacode?access_token=" + t,
                method: "POST",
                data: {
                    path: "/pages/getCoupons/index?inviterId=" + e.data.inviterId,
                    width: 300,
                    auto_color: !0,
                    line_color: {
                        r: "6",
                        g: "110",
                        b: "208"
                    }
                },
                header: {
                    Accept: "application/json"
                },
                success: function(e) {}
            });
        });
    },
    getAccessToken: function() {
        return new Promise(function(e, t) {
            wx.request({
                url: "https://api.weixin.qq.com/cgi-bin/token",
                method: "GET",
                data: {
                    appid: "wx0b1cae82af0a0be7",
                    secret: "8c1624fc41467f7edf77a52046c3c09e",
                    grant_type: "client_credential"
                },
                header: {
                    Accept: "application/json"
                },
                success: function(t) {
                    e(t.data.access_token);
                }
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: "全城家政大放价",
            path: "/pages/getCoupons/index?inviterId=" + this.data.inviterId,
            imageUrl: "/images/logo.png"
        };
    }
});