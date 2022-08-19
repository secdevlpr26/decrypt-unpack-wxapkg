Page({
    data: {
        xsinfo: {},
        isshowrf: 0,
        list: [],
        dialog: 0,
        xstxt: ""
    },
    onLoad: function(t) {
        this.loadXSinfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        this.setData({
            dialog: 0
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    submit: function(t) {
        console.log(t.detail.formId), this.saveUserFormid(t.detail.formId);
    },
    clickTap: function(t) {
        console.log(t.currentTarget.dataset.ss), this.addUserInter(t.currentTarget.dataset.ss);
    },
    saveUserFormid: function(t) {
        console.log("saveUserFormid");
        var a = getApp().globalData.BaseHost, e = getApp().globalData.appid;
        wx.request({
            url: a + "mini01/setGVuserFormidServlet",
            method: "POST",
            data: {
                openid: wx.getStorageSync("openid"),
                appid: e,
                formid: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {}
        });
    },
    loadXSinfo: function() {
        var t = this, a = getApp().globalData.BaseHost, e = getApp().globalData.appid;
        wx.request({
            url: a + "xs/getXSListByAppidServlet",
            method: "POST",
            data: {
                appid: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a);
                var e = a.data[0].reviewcontent.replace(/<img\s/g, '<img width="100%" ');
                if (t.setData({
                    xsinfo: a.data[0],
                    xstxt: e
                }), "1" == a.data[0].isrf) {
                    var o = a.data[0].copytxt;
                    wx.setClipboardData({
                        data: o,
                        success: function(t) {
                            wx.getClipboardData({
                                success: function(t) {
                                    wx.showToast({
                                        title: "加载成功！"
                                    });
                                }
                            });
                        }
                    }), t.loadXSList(1);
                }
            }
        });
    },
    loadXSList: function(t) {
        var a = this, e = getApp().globalData.BaseHost;
        getApp().globalData.appid;
        wx.request({
            url: e + "xs/getXSListServlet",
            method: "POST",
            data: {
                page: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var e = t.data;
                a.shuffle(e), a.setData({
                    list: e,
                    isshowrf: 1
                });
            }
        });
    },
    addUserInter: function(t) {
        var a = this, e = getApp().globalData.BaseHost, o = getApp().globalData.appid;
        wx.request({
            url: e + "xs/addXSUserInterfaceServlet",
            method: "POST",
            data: {
                appid: o,
                xsid: t,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t), a.setData({
                    dialog: 1
                });
            }
        });
    },
    shuffle: function(t) {
        for (var a = t.length, e = 0; e < a - 1; e++) {
            var o = parseInt(Math.random() * (a - e)), s = t[o];
            t[o] = t[a - e - 1], t[a - e - 1] = s;
        }
    }
});