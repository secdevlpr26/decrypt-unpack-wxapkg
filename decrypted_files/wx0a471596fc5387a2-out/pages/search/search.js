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
        ls_index: 0,
        ls_opt: ""
    },
    onReady: function(t) {
        var a = this;
        console.log(t), e.init("代码/名称", a), a.getsearchList("");
    },
    onLoad: function(t) {
        this.setData({
            ls_flag: t.ls_flag,
            ls_index: t.index
        });
    },
    getsearchList: function(t) {
        var e = this;
        "BB" == e.data.ls_flag ? this.setData({
            ls_opt: "getSearchList"
        }) : this.setData({
            ls_opt: "getKbmList"
        });
        var s = e.data.page + 1;
        this.setData({
            hidden: !1,
            isGet: !1
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: e.data.ls_opt,
                userId: wx.getStorageSync("userId"),
                where: t,
                page: s,
                size: 15
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.data) {
                    var a = e.data.list, i = t.data.rows;
                    if (i.length > 0) {
                        for (var n in i) a.push(i[n]);
                        e.setData({
                            list: a,
                            isGet: !0,
                            hidden: !0,
                            page: s
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
        if (a.detail.x < 315) {
            var e = a.currentTarget.dataset.stock;
            if ("N" == e.SFMJ) wx.showToast({
                title: "请选未级项目!",
                icon: "loading",
                duration: 1500
            }); else {
                if ("BB" == this.data.ls_flag && wx.reLaunch({
                    url: "../bb/bb?page=search&ls_zrzxbm=" + e.CODE
                }), "ZRZXBM" == this.data.ls_flag) {
                    (c = getCurrentPages())[c.length - 1];
                    var s, i = c[c.length - 2], n = "addressList[" + this.data.ls_index + "].ZRZXBM", r = "addressList[" + this.data.ls_index + "].ZRZXMC", l = "addressList[" + this.data.ls_index + "].YSXMBM", d = "addressList[" + this.data.ls_index + "].YSXMMC", o = "addressList[" + this.data.ls_index + "].YSXMMXBH", h = "addressList[" + this.data.ls_index + "].YSXMMXMC";
                    i.setData((s = {}, t(s, n, e.CODE), t(s, r, e.NAME), t(s, l, ""), t(s, d, ""), t(s, o, ""), 
                    t(s, h, ""), s)), wx.navigateBack();
                }
                if ("YIHSHI" == this.data.ls_flag) {
                    var c = getCurrentPages(), i = c[c.length - 2];
                    console.log("11111" + e.CODE + e.NAME), i.setData({
                        ZRZXBM: e.CODE,
                        ZRZXMC: e.NAME
                    }), wx.navigateBack();
                }
            }
        }
    }
});