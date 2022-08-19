function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = require("../common/SearchBar/SearchBar.js");

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
        lx: "",
        ls_opt: ""
    },
    onReady: function(t) {
        var e = this;
        console.log(t), a.init("代码/名称", e), e.getsearchList("");
    },
    onLoad: function(t) {
        this.setData({
            index: t.index,
            lx: t.lx
        });
    },
    getsearchList: function(t) {
        var a = this, i = a.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        });
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getddList",
                userId: wx.getStorageSync("userId"),
                where: t,
                page: i,
                size: 15
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
        var e = this;
        a.onSearchBarClearEvent(t, e), e.getsearchList("");
    },
    onSearchBarChangedEvent: function(t) {
        var e = this;
        a.onSearchBarChangedEvent(t, e), t.detail.value.length > 0 ? (console.log(t.detail.value), 
        this.setData({
            list: [],
            page: 0,
            size: 15
        }), e.getsearchList(t.detail.value)) : e.getsearchList("");
    },
    bindDownLoad: function() {
        this.data.isGet && this.getsearchList("");
    },
    onReachBottom: function() {
        this.getsearchList("");
    },
    onShowStockDetail: function(e) {
        var a = this;
        if (e.detail.x < 315) {
            var i = e.currentTarget.dataset.stock, s = getCurrentPages(), n = (s[s.length - 1], 
            s[s.length - 2]);
            if ("bz" == a.data.lx) {
                var r, o = "bzList[" + this.data.index + "].DD", d = "bzList[" + this.data.index + "].DDSX";
                n.setData((r = {}, t(r, o, i.NAME), t(r, d, i.CODE), r));
            }
            if ("zs" == a.data.lx) {
                var l, h = "zsList[" + this.data.index + "].DD", c = "zsList[" + this.data.index + "].DDSXMC";
                n.setData((l = {}, t(l, h, i.NAME), t(l, c, i.CODE), l));
            }
            wx.navigateBack();
        }
    }
});