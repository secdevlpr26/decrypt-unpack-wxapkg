var t = require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js"), e = getApp();

Page({
    data: {
        hostUrl: e.globalData.hostUrl,
        typeId: 0,
        switchTabOne: !0,
        switchTabTwo: !1,
        switchTabThree: !1,
        keyWord: "",
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list1: [],
        list2: [],
        list3: [],
        page1: 0,
        page2: 0,
        page3: 0,
        ls_zrzxbm: "",
        lx: 1,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    onLoad: function(e) {
        this.setData({
            list1: [],
            list2: [],
            list3: [],
            page1: 0,
            page2: 0,
            page3: 0,
            ywrq: t.formatdata(new Date())
        });
    },
    datePickerBindchange: function(t) {
        this.setData({
            ywrq: t.detail.value,
            list1: [],
            page1: 0
        }), this.getOrderList();
    },
    getOrderList: function() {
        var t = this, a = t.data.page1 + 1;
        this.setData({
            hidden: !0,
            isGet: !1
        }), wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getkqlist",
                userId: wx.getStorageSync("userId"),
                ywrq: t.data.ywrq,
                page: a,
                size: 25
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.data) {
                    var i = t.data.list1, n = e.data.rows;
                    if (n.length > 0) {
                        for (var s in n) i.push(n[s]);
                        t.setData({
                            list1: i,
                            isGet: !0,
                            hidden: !0,
                            page1: a
                        });
                    }
                } else t.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    onItemClickEvent: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.x, a = t.currentTarget.dataset.y, i = t.currentTarget.dataset.name, n = t.currentTarget.dataset.desc;
        wx.openLocation({
            latitude: parseFloat(e),
            longitude: parseFloat(a),
            scale: 18,
            name: i,
            address: n
        });
    },
    onStockSearchEvent: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=BB"
        });
    },
    searchActiveChangeinput: function(t) {
        var e = this, a = t.detail.value;
        e.setData({
            keyWord: a
        }, function() {
            page = 0;
        });
    },
    searchSubmit: function() {},
    onReady: function() {},
    onShow: function(t) {
        var e = this, a = wx.getStorageSync("userId");
        this.data.ls_zrzxbm;
        null != a && a > 0 && "" != a || wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        }), wx.getSystemInfo({
            success: function(t) {
                var a = t.windowHeight * (750 / t.windowWidth) - 180;
                e.setData({
                    winHeight: a,
                    scrollHeight: t.windowHeight
                });
            }
        }), this.getOrderList();
    },
    onHide: function() {},
    onUnload: function() {},
    bindDownLoad: function() {
        this.data.ls_zrzxbm;
        this.data.isGet && this.getOrderList();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrderList();
    },
    onShareAppMessage: function() {}
});