var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        productList: [],
        page: 0,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0,
        typeId: "",
        switchTabOne: !0,
        switchTabTwo: !1,
        switchTabThree: !1,
        switchTabFour: !1,
        switchTabFive: !1,
        word: t.globalData.word
    },
    onLoad: function(a) {
        a.typeId && (t.globalData.typeId = a.typeId);
    },
    onReady: function() {},
    onShow: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                var e = t.windowHeight * (750 / t.windowWidth) - 180;
                a.setData({
                    winHeight: e,
                    scrollHeight: t.windowHeight,
                    page: 0,
                    productList: []
                });
            }
        }), this.getProductList();
    },
    getProductList: function() {
        var a = this, e = a.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        });
        var i = "1=1 ";
        "" != t.globalData.word && (i = i + " and name like '%" + t.globalData.word + "%'"), 
        "" != t.globalData.typeId && (i = i + "and typeId =" + t.globalData.typeId);
        var s = "";
        a.data.switchTabOne && (s = " "), a.data.switchTabTwo && (s = ""), a.data.switchTabThree && (s += " price asc,"), 
        a.data.switchTabFour && (s += "sales desc,"), a.data.switchTabFive && (s += "createdTime desc,"), 
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getProductPageList",
                orderBy: s,
                where: i,
                page: e,
                size: 8
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var i = a.data.productList, s = t.data.rows;
                    if (s.length > 0) {
                        for (var o in s) i.push(s[o]);
                        a.setData({
                            productList: i,
                            isGet: !0,
                            hidden: !0,
                            page: e
                        });
                    }
                } else a.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    bindDownLoad: function() {
        this.data.isGet && this.getProductList();
    },
    searchActiveChangeinput: function(a) {
        var e = a.detail.value;
        t.globalData.word = e;
    },
    searchSubmit: function() {
        wx.navigateTo({
            url: "/pages/goods_list/goods_list"
        });
    },
    switchTab: function(t) {
        var a = this;
        1 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            productList: [],
            switchTabOne: !0,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !1,
            switchTabFive: !1
        }, function() {
            a.getProductList();
        }) : 2 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            productList: [],
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            switchTabFour: !1,
            switchTabFive: !1
        }, function() {
            a.getProductList();
        }) : 3 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            productList: [],
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0,
            switchTabFour: !1,
            switchTabFive: !1
        }, function() {
            a.getProductList();
        }) : 4 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            productList: [],
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !0,
            switchTabFive: !1
        }, function() {
            a.getProductList();
        }) : 5 == t.currentTarget.dataset.order && a.setData({
            page: 0,
            productList: [],
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !1,
            switchTabFour: !1,
            switchTabFive: !0
        }, function() {
            a.getProductList();
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});