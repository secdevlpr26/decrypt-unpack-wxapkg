var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        page: 0,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0,
        list: []
    },
    onLoad: function(t) {
        var e = this, a = t.index;
        e.setData({
            list: [],
            index: a,
            page: 0
        });
        var n = wx.getStorageSync("userId");
        null != n && n > 0 && "" != n ? e.getAddressList() : wx.showModal({
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
        var e = this, a = e.data.page + 1;
        this.setData({
            hidden: !0,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getKq",
                userId: wx.getStorageSync("userId"),
                where: "",
                page: a,
                size: 20
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t), "" != t.data) {
                    var n = e.data.list, s = t.data.rows;
                    if (s.length > 0) {
                        for (var i in s) n.push(s[i]);
                        e.setData({
                            list: n,
                            isGet: !0,
                            hidden: !0,
                            page: a
                        });
                    }
                } else e.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    toDetail: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.x, a = t.currentTarget.dataset.y, n = t.currentTarget.dataset.name, s = t.currentTarget.dataset.desc;
        wx.openLocation({
            latitude: e,
            longitude: a,
            scale: 18,
            name: n,
            address: s
        });
    },
    addAddress: function() {
        wx.redirectTo({
            url: "/pages/timecard_mx/timecard_mx?id=0"
        });
    },
    onReady: function() {},
    bindDownLoad: function() {
        this.data.isGet && this.getAddressList();
    },
    onReachBottom: function() {
        this.getAddressList();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {}
});