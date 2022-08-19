var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        typeId: 0,
        switchTab: !0,
        switchTabOne: !1,
        switchTabTwo: !1,
        switchTabThree: !1,
        switchTabFour: !1,
        keyWord: "",
        page: 0
    },
    onLoad: function(t) {},
    getOrderList: function() {
        var a = this, e = "", r = a.data.page + 1;
        a.data.switchTab && (e = ""), a.data.switchTabOne && (e = "is_payment=0 and "), 
        a.data.switchTabTwo && (e = "is_payment=1 and is_transaction=0 and "), a.data.switchTabThree && (e = "is_payment=1 and is_transaction=1 and "), 
        a.data.switchTabFour && (e = "order_status=1 and "), a.data.keyWord.length > 0 && (e = e + " order_num like '%" + a.data.keyWord + "%' and "), 
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderList",
                userId: wx.getStorageSync("userId"),
                where: e,
                page: r,
                size: 6
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? a.setData({
                    orderList: t.data.rows
                }) : a.setData({
                    orderList: ""
                });
            }
        });
    },
    switchTab: function(t) {
        var a = this;
        0 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            orderList: [],
            switchTab: !0,
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !1
        }, function() {
            a.getOrderList();
        }) : 1 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            orderList: [],
            switchTab: !1,
            switchTabOne: !0,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !1
        }, function() {
            a.getOrderList();
        }) : 2 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            orderList: [],
            switchTab: !1,
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            switchTabFour: !1
        }, function() {
            a.getOrderList();
        }) : 3 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            orderList: [],
            switchTab: !1,
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0,
            switchTabFour: !1
        }, function() {
            a.getOrderList();
        }) : 4 == t.currentTarget.dataset.order && a.setData({
            page: 0,
            orderList: [],
            switchTab: !1,
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !0
        }, function() {
            a.getOrderList();
        });
    },
    searchActiveChangeinput: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            keyWord: e
        }, function() {});
    },
    searchSubmit: function() {
        this.getOrderList();
    },
    onReady: function() {},
    onShow: function() {
        var t = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? t.getOrderList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});