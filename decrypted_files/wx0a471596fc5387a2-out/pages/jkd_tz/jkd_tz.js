var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        typeId: 0,
        switchTabOne: !0,
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
        lx: 1,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    onLoad: function(t) {
        this.setData({
            list1: [],
            list2: [],
            list3: [],
            page1: 0,
            page2: 0,
            page3: 0
        });
    },
    getOrderList: function() {
        var e = this, a = e.data.page1 + 1, s = new Date().getFullYear();
        this.setData({
            hidden: !0,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getJktaizhangPage",
                userId: wx.getStorageSync("userId"),
                page: a,
                size: 20,
                year: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var s = e.data.list1, i = t.data.rows;
                    if (i.length > 0) {
                        for (var n in i) s.push(i[n]);
                        e.setData({
                            list1: s,
                            isGet: !0,
                            jkje: t.data.rows[0].JKJE,
                            czje: t.data.rows[0].CZJE,
                            hkje: t.data.rows[0].HKJE,
                            sykx: t.data.rows[0].SYKX,
                            hidden: !0,
                            page1: a
                        });
                    }
                } else e.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    getOrderList2: function(e) {
        console.log(e + "hahah");
        var a = this, s = a.data.page3 + 1, i = new Date().getFullYear();
        this.setData({
            list3: [],
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getJktaizhangPage2",
                userId: wx.getStorageSync("userId"),
                page: s,
                size: 20,
                year: i,
                djlx: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var e = a.data.list3, i = t.data.rows;
                    if (i.length > 0) {
                        for (var n in i) e.push(i[n]);
                        a.setData({
                            list3: e,
                            isGet: !0,
                            hidden: !0,
                            page: s
                        });
                    }
                } else a.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    onItemClickEvent: function(t) {
        var e = this, a = t.currentTarget.dataset, s = t.currentTarget.dataset.djlx;
        console.log(t.currentTarget.dataset.djlx), e.data.switchTabOne ? (e.setData({
            switchTabOne: !1,
            switchTabThree: !0
        }), e.getOrderList2(s)) : e.data.switchTabThree && (e.setData({
            switchTabOne: !1,
            switchTabThree: !0
        }), wx.navigateTo({
            url: "/pages/ysd_details/ysd_details?id=" + a.item.ID + "&lx=" + a.item.LX
        }));
    },
    switchTab: function(t) {
        var e = this;
        1 == t.currentTarget.dataset.order ? e.setData({
            switchTabOne: !0,
            switchTabThree: !1,
            lx: 1
        }) : 3 == t.currentTarget.dataset.order && e.setData({
            switchTabOne: !1,
            switchTabThree: !0,
            lx: 3
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
        this.data.isGet && this.getOrderList();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrderList();
    },
    onShareAppMessage: function() {}
});