function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = getApp(), e = require("../common/SearchBar/SearchBar.js");

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
        table: "",
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
            ztbm: t.ztbm,
            table: t.table
        });
    },
    getsearchList: function(t) {
        var e = this, i = e.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        });
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getzysxList",
                userId: wx.getStorageSync("userId"),
                where: t,
                page: i,
                size: 15,
                ztbm: e.data.ztbm,
                table: e.data.table
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
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
                } else e.setData({
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
            size: 15
        }), a.getsearchList(t.detail.value)) : a.getsearchList("");
    },
    bindDownLoad: function() {
        this.data.isGet && this.getsearchList("");
    },
    onReachBottom: function() {
        this.getsearchList("");
    },
    onShowStockDetail: function(a) {
        var e = this;
        if (a.detail.x < 315) {
            var i = a.currentTarget.dataset.stock, s = getCurrentPages(), n = (s[s.length - 1], 
            s[s.length - 2]);
            if ("CODE_BT_BZ" == e.data.table) {
                var r, o = "bzList[" + this.data.index + "].ZYSX", d = "bzList[" + this.data.index + "].ZYSXMC";
                n.setData((r = {}, t(r, o, i.CODE), t(r, d, i.NAME), r));
            }
            if ("code_zs_bz" == e.data.table) {
                var l, o = "zsList[" + this.data.index + "].ZYSX", d = "zsList[" + this.data.index + "].ZYSXMC";
                n.setData((l = {}, t(l, o, i.CODE), t(l, d, i.NAME), l));
            }
            wx.navigateBack();
        }
    }
});