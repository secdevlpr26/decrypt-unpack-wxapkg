var t = getApp(), e = require("../common/SearchBar/SearchBar.js");

require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js");

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list: [],
        page: 0,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0,
        ls_flag: "",
        index: 0,
        ls_opt: ""
    },
    onReady: function(t) {
        var a = this;
        console.log(t), e.init("代码/名称", a), a.getsearchList("");
    },
    onLoad: function(t) {
        this.setData({
            index: t.index,
            nf: t.nf,
            zrzxbm: t.zrzxbm,
            ysxmbm: t.ysxmbm,
            lcbm: t.lcbm
        });
    },
    getsearchList: function(e) {
        var a = this, i = a.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getysxmmxbhList_changchang",
                userId: wx.getStorageSync("userId"),
                where: e,
                page: i,
                size: 15,
                ysxmbm: a.data.ysxmbm
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var e = a.data.list, s = t.data.rows;
                    if (s.length > 0) {
                        for (var n in s) e.push(s[n]);
                        a.setData({
                            list: e,
                            isGet: !0,
                            hidden: !0,
                            page: i
                        });
                    }
                } else a.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    onSearchBarClearEvent: function(t) {
        var a = this;
        e.onSearchBarClearEvent(t, a), a.getsearchList("");
    },
    onSearchBarChangedEvent: function(t) {
        var a = this;
        e.onSearchBarChangedEvent(t, a), t.detail.value.length > 0 ? (console.log(t.detail.value), 
        this.setData({
            list: [],
            page: 0,
            size: 32
        }), a.getsearchList(t.detail.value)) : a.getsearchList("");
    },
    bindDownLoad: function() {
        this.data.isGet && this.getsearchList("");
    },
    onReachBottom: function() {
        this.getsearchList("");
    },
    onShowStockDetail: function(t) {
        if (t.detail.x < 315) {
            var e = t.currentTarget.dataset.stock, a = getCurrentPages();
            a[a.length - 1];
            a[a.length - 2].setData({
                YSXMMXBH: e.CODE,
                YSXMMXMC: e.NAME
            }), wx.navigateBack();
        }
    }
});