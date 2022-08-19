var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        typeId: 0,
        switchTabTwo: !0,
        switchTabThree: !1,
        keyWord: "",
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list: [],
        page: 0,
        lx: 3,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    onLoad: function(t) {},
    getOrderList: function() {
        var e = this, a = "", i = e.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        }), e.data.switchTabOne && (a = "   and b.lc='N'  "), e.data.switchTabTwo && (a = "   and b.lc='Y'  "), 
        e.data.switchTabThree && (a = "  and b.lc='S'  "), e.data.keyWord.length > 0 && (a = a + " and b.id like '%" + e.data.keyWord + "%'   "), 
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getYsdgrList",
                userId: wx.getStorageSync("userId"),
                where: a,
                page: i,
                size: 6
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t.data), t.data) {
                    console.log("1111111111111111111111");
                    var a = e.data.list, s = t.data.rows;
                    if (s.length > 0) {
                        for (var n in s) a.push(s[n]);
                        e.setData({
                            list: a,
                            isGet: !0,
                            hidden: !0,
                            page: i
                        });
                    }
                } else console.log("222222222222222222"), e.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    switchTab: function(t) {
        var e = this;
        1 == t.currentTarget.dataset.order ? e.setData({
            page: 0,
            size: 6,
            list: [],
            switchTabOne: !0,
            switchTabTwo: !1,
            switchTabThree: !1,
            lx: 3
        }, function() {
            e.getOrderList();
        }) : 2 == t.currentTarget.dataset.order ? e.setData({
            page: 0,
            size: 6,
            list: [],
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            lx: 4
        }, function() {
            e.getOrderList();
        }) : 3 == t.currentTarget.dataset.order && e.setData({
            page: 0,
            size: 6,
            list: [],
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0,
            lx: 5
        }, function() {
            e.getOrderList();
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
    searchSubmit: function() {
        this.getOrderList();
    },
    onReady: function() {},
    onShow: function() {
        var t = this, e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e || wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        }), wx.getSystemInfo({
            success: function(e) {
                var a = e.windowHeight * (750 / e.windowWidth) - 180;
                t.setData({
                    winHeight: a,
                    scrollHeight: e.windowHeight,
                    page: 0,
                    list: []
                });
            }
        }), this.getOrderList();
    },
    onHide: function() {},
    onUnload: function() {},
    bindDownLoad: function() {
        this.data.isGet && this.getOrderList();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrderList();
    },
    onShareAppMessage: function() {}
});