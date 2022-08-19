var e, t = getApp();

Page({
    data: {
        result: null,
        head: "https://api.jiyun58.com/views/images/peo.png"
    },
    onLoad: function(a) {
        t.isOpenId(), e = this, wx.request({
            url: t.data.lost + "/index/queryUsreInfo",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                avatarUrl: wx.getStorageSync("userInfo").avatarUrl
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                1 == a.msg && (a.result.at_code ? "1" == a.result.status ? e.setData({
                    result: a.result,
                    head: wx.getStorageSync("userInfo").avatarUrl
                }) : wx.navigateTo({
                    url: "../frozen/frozen"
                }) : wx.navigateTo({
                    url: "../activation/activation"
                }));
            }
        });
    },
    onPullDownRefresh: function() {
        t.isOpenId(), e = this, wx.request({
            url: t.data.lost + "/index/queryUsreInfo",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                avatarUrl: wx.getStorageSync("userInfo").avatarUrl
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                1 == a.msg && e.setData({
                    result: a.result,
                    head: wx.getStorageSync("userInfo").avatarUrl
                });
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    onBillDetail: function(e) {
        wx.navigateTo({
            url: "../billlist/billlist"
        });
    },
    bindGetUserInfo: function(e) {
        e.detail.userInfo ? this.queryUsreInfo() : wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
            showCancel: !1,
            confirmText: "返回授权",
            success: function(e) {
                e.confirm && console.log("用户点击了“返回授权”");
            }
        });
    },
    queryUsreInfo: function() {
        wx.getUserInfo({
            success: function(e) {
                t.globalData;
                wx.setStorageSync("userInfo", e.userInfo);
                var a = e.userInfo.avatarUrl;
                wx.login({
                    success: function(e) {
                        wx.request({
                            url: t.data.lost + "/index/queryUsreInfo2",
                            method: "GET",
                            dataType: "html",
                            data: {
                                code: e.code,
                                avatarUrl: a
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                var t = JSON.parse(e.data);
                                wx.setStorageSync("openid", t.openid), t.result.at_code ? "1" == t.result.status ? wx.switchTab({
                                    url: "../index/index"
                                }) : wx.navigateTo({
                                    url: "../frozen/frozen"
                                }) : wx.navigateTo({
                                    url: "../activation/activation"
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});