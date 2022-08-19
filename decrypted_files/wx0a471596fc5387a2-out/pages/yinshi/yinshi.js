new Array();

var t = getApp();

Page({
    data: {
        array: [ "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029" ],
        hostUrl: t.globalData.hostUrl,
        typeId: 0,
        switchTabTwo: !0,
        switchTabThree: !1,
        keyWord: "",
        nf: "2019",
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list: [],
        lx: 1,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0
    },
    bindPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", this.data.array[t.detail.value]), this.setData({
            nf: this.data.array[t.detail.value],
            index: t.detail.value,
            list: []
        }), this.getOrderList();
    },
    selectzrzxbm: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=YIHSHI&index=" + t.currentTarget.dataset.index
        });
    },
    onLoad: function(t) {
        this.getType();
    },
    getOrderList: function() {
        var e = this;
        this.setData({
            hidden: !1,
            isGet: !1,
            list: []
        });
        var a = this.data.ZRZXBM;
        console.log("ls_zrzxbm" + a), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getYinshi",
                userId: wx.getStorageSync("userId"),
                lx: e.data.lx,
                nf: e.data.nf,
                zrzxbm: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t.data), t.data) {
                    var a = e.data.list, i = t.data.rows;
                    if (i.length > 0) {
                        for (var n in i) a.push(i[n]);
                        e.setData({
                            list: a,
                            isGet: !0,
                            hidden: !0
                        });
                    }
                } else e.setData({
                    isGet: !1,
                    list: [],
                    hidden: !0
                });
            }
        });
    },
    switchTab: function(t) {
        var e = this;
        2 == t.currentTarget.dataset.order ? e.setData({
            list: [],
            switchTabOne: !1,
            switchTabTwo: !0,
            switchTabThree: !1,
            lx: 1
        }, function() {
            e.getOrderList();
        }) : 3 == t.currentTarget.dataset.order && e.setData({
            list: [],
            switchTabOne: !1,
            switchTabTwo: !1,
            switchTabThree: !0,
            lx: 2
        }, function() {
            e.getOrderList();
        });
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
                    list: [],
                    index: 0
                });
            }
        }), t.getOrderList();
    },
    getType: function() {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getType",
                parentId: 0,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && e.setData({
                    ZRZXMC: t.data.rows[0].ZRZXMC,
                    ZRZXBM: t.data.rows[0].ZRZXBM
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {}
});