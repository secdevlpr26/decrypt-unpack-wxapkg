var s = getApp();

Page({
    data: {
        domain: "https://shop.hlwjrd.cn",
        sessionKey: "",
        schoolId: "",
        webviewRoute: ""
    },
    onLoad: function(e) {
        var o = s.globalData.sessionKey, t = s.globalData.schoolId, a = this.data.domain;
        a = "9" == e.type ? a + "/takeOrder?type=1&clientId=" + e.clientId + "&orderNumber=" + e.orderNumber + "&sessionKey=" + o + "&schoolId=" + t : "10" == e.type ? a + "/orderList?sessionKey=" + o + "&schoolId=" + t : a + "/?sessionKey=" + o + "&schoolId=" + t, 
        this.setData({
            sessionKey: o,
            schoolId: t,
            webviewRoute: a + "#wechat_redirect"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    wxPayJump: function(s) {
        console.log("sessionKey", this.data.sessionKey), console.log("schoolId", this.data.schoolId);
        var e = new Date().getTime();
        "success" == s ? this.setData({
            webviewRoute: this.data.domain + "/paySuccess?sessionKey=" + this.data.sessionKey + "&schoolId=" + this.data.schoolId + "&timestamp=" + e + "#wechat_redirect"
        }) : this.setData({
            webviewRoute: this.data.domain + "/payFail?sessionKey=" + this.data.sessionKey + "&schoolId=" + this.data.schoolId + "&timestamp=" + e + "#wechat_redirect"
        });
    },
    webMessages: function(s) {
        console.log("网页传递参数", s);
    }
});