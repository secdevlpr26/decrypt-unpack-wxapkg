var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
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
        page: 0,
        page1: 0,
        page2: 0,
        page3: 0,
        ls_zrzxbm: "",
        ls_ztbm: "",
        ls_nf: "",
        ls_yf: "",
        lx: 1,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    onLoad: function(t) {
        this.setData({
            ls_zrzxbm: t.ls_zrzxbm,
            list1: [],
            list2: [],
            list3: [],
            page1: 0,
            page2: 0,
            page3: 0
        });
    },
    getOrderList: function(a) {
        var e = this;
        this.setData({
            list1: [],
            hidden: !0,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getZbj1",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = e.data.list1, s = t.data.rows;
                    if (s.length > 0) {
                        for (var i in s) a.push(s[i]);
                        e.setData({
                            list1: a,
                            isGet: !0,
                            hidden: !0
                        });
                    }
                } else e.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    getOrderList1: function(a, e, s) {
        var i = this, n = i.data.page2 + 1;
        console.log(n), this.setData({
            list2: [],
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getZbj2",
                userId: wx.getStorageSync("userId"),
                page: n,
                size: 20,
                nf: e,
                yf: s,
                ztbm: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = i.data.list2, e = t.data.rows;
                    if (e.length > 0) {
                        for (var s in e) a.push(e[s]);
                        i.setData({
                            list2: a,
                            isGet: !0,
                            hidden: !0,
                            page2: n
                        });
                    }
                } else i.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    getOrderList2: function(a, e, s) {
        var i = this, n = i.data.page3 + 1;
        this.setData({
            list3: [],
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getZbj3",
                userId: wx.getStorageSync("userId"),
                page: n,
                size: 20,
                nf: e,
                yf: s,
                ztbm: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = i.data.list3, e = t.data.rows;
                    if (e.length > 0) {
                        for (var s in e) a.push(e[s]);
                        i.setData({
                            list3: a,
                            isGet: !0,
                            hidden: !0,
                            page3: n
                        });
                    }
                } else i.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    onItemClickEvent: function(t) {
        var a = this, e = t.currentTarget.dataset;
        a.data.switchTabOne ? "13" == e.item.YF ? wx.showToast({
            title: "请选择1-12月!",
            icon: "loading",
            duration: 1500
        }) : (a.setData({
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            ls_ztbm: e.item.ZTBM,
            ls_nf: e.item.NF,
            ls_yf: e.item.YF,
            page: 0,
            page1: 0,
            page2: 0,
            page3: 0,
            list2: [],
            list3: []
        }), a.getOrderList1(e.item.ZTBM, e.item.NF, e.item.YF), a.getOrderList2(e.item.ZTBM, e.item.NF, e.item.YF)) : a.data.switchTabTwo ? (a.setData({
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0
        }), a.getOrderList2(e.item.ZTBM, e.item.NF, e.item.YF)) : a.data.switchTabThree && (a.setData({
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0
        }), wx.navigateTo({
            url: "/pages/ysd_details/ysd_details?id=" + e.item.ID + "&lx=3"
        }));
    },
    onStockSearchEvent: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=BB"
        });
    },
    switchTab: function(t) {
        var a = this;
        1 == t.currentTarget.dataset.order ? a.setData({
            switchTabOne: !0,
            switchTabTwo: !1,
            switchTabThree: !1,
            lx: 1
        }) : 2 == t.currentTarget.dataset.order ? a.setData({
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            lx: 2
        }) : 3 == t.currentTarget.dataset.order && a.setData({
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0,
            lx: 3
        });
    },
    onReady: function() {},
    onShow: function(t) {
        var a = this, e = wx.getStorageSync("userId"), s = this.data.ls_zrzxbm;
        null != e && e > 0 && "" != e || wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        }), wx.getSystemInfo({
            success: function(t) {
                var e = t.windowHeight * (750 / t.windowWidth) - 180;
                a.setData({
                    winHeight: e,
                    scrollHeight: t.windowHeight
                });
            }
        }), this.getOrderList(s);
    },
    onHide: function() {},
    onUnload: function() {},
    bindDownLoad: function() {
        var t = this;
        this.data.ls_zrzxbm;
        this.data.isGet && (t.data.switchTabTwo && this.getOrderList1(this.data.ls_ztbm, this.data.ls_nf, this.data.ls_yf), 
        t.data.switchTabThree && this.getOrderList2(this.data.ls_ztbm, this.data.ls_nf, this.data.ls_yf));
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var t = this;
        this.data.ls_zrzxbm;
        t.data.switchTabTwo && this.getOrderList1(this.data.ls_ztbm, this.data.ls_nf, this.data.ls_yf), 
        t.data.switchTabThree && this.getOrderList2(this.data.ls_ztbm, this.data.ls_nf, this.data.ls_yf);
    },
    onShareAppMessage: function() {}
});