function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp();

Page({
    data: {
        hostUrl: e.globalData.hostUrl
    },
    onLoad: function(t) {
        var e = this, a = t.index;
        e.setData({
            index: a
        });
        var s = wx.getStorageSync("userId");
        null != s && s > 0 && "" != s ? e.getAddressList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getAddressList: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getFpxxList",
                userId: wx.getStorageSync("userId"),
                where: ""
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                "" != e.data && t.setData({
                    addressList: e.data.rows
                });
            }
        });
    },
    select: function(e) {
        var a = this, s = e.currentTarget.dataset.id, n = a.data.index;
        console.log(s);
        var r = getCurrentPages(), o = r[r.length - 1], i = r[r.length - 2];
        if (n >= 0) {
            var d, c = "orderzhList[" + n + "].SKR", u = "orderzhList[" + n + "].KHH", l = "orderzhList[" + n + "].ZH";
            i.setData((d = {}, t(d, c, o.data.addressList[s].GSNAME), t(d, u, o.data.addressList[s].BANK), 
            t(d, l, o.data.addressList[s].ZH), d));
        } else i.setData({
            ssdw: o.data.addressList[s].GSNAME,
            zh: o.data.addressList[s].ZH,
            sh: o.data.addressList[s].GSXH,
            khh: o.data.addressList[s].BANK
        });
        wx.navigateBack();
    },
    addAddress: function() {
        wx.redirectTo({
            url: "/pages/fpxx/fpxx?id=0"
        });
    },
    edit: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/fpxx/fpxx?id=" + e
        });
    },
    delete: function(t) {
        var a = this, s = t.currentTarget.dataset.id;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "deleteFpxx",
                id: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        a.getAddressList();
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    radio: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "defaultFpxx",
                id: a,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/selectFpxx/selectFpxx"
                        });
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});