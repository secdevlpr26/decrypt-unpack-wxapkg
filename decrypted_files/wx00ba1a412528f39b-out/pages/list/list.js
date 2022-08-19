getApp();

var t = require("../../utils/api/cgi.js");

Page({
    data: {
        end: !1,
        loading: !1,
        pageStatus: 1,
        sort_type: "",
        gname: "",
        sort_key: "",
        total: 0,
        scrollHeight: 0,
        gid: "",
        list: []
    },
    onLoad: function(t) {
        var a = t.sort_type, e = t.sort_key, s = t.gid, i = t.gname, o = wx.getSystemInfoSync();
        this.setData({
            gid: s,
            gname: i,
            scrollHeight: o.windowHeight - 45,
            sort_type: a,
            sort_key: e
        }), wx.setNavigationBarTitle({
            title: i || "全部商品"
        }), this.loadList(!0);
    },
    onShareAppMessage: function() {
        var t = this.data, a = t.sort_type, e = t.sort_key;
        return {
            title: "商品列表",
            path: "/pages/list/list?gid=" + t.gid + "&gname=" + t.gname + "&sort_key=" + e + "&sort_type=" + a,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    sortByPriceHandler: function() {
        return this.loadTab("price");
    },
    sortBySaleHandler: function() {
        return this.loadTab("sale");
    },
    sortBySaleTimeHandler: function() {
        return this.loadTab("sale_time");
    },
    loadTab: function(t) {
        var a = this.data, e = (a.gid, a.sort_key), s = a.sort_type;
        s = "asc" == s ? "desc" : "desc" == s ? "" : "asc", e != t && (s = "asc"), "sale_time" != t && "sale" != t || (s = "");
        var i = {};
        i.sort_type = s, i.sort_key = t, i.list = [], i.pageStatus = 1, this.setData(i), 
        this.loadList(!0);
    },
    loadMoreHandler: function() {
        this.data.end || this.loadList();
    },
    reloadHandler: function() {
        this.setData({
            pageStatus: 1
        }), this.loadList(!0);
    },
    loadList: function(a) {
        if (!this.data.loading) {
            var e = this;
            e.setData({
                loading: !0
            });
            var s = "/bizmall/wxopen_mallproducts";
            e.data.gid && (s = "/bizmall/wxopen_mallgroup"), t.get({
                url: s,
                hideLoading: !0,
                data: {
                    group_id: e.data.gid,
                    begin: e.data.list.length,
                    sort_type: e.data.sort_type,
                    sort_key: e.data.sort_key,
                    count: 5
                },
                success: function(t) {
                    e.data.total = t.total, t.products.forEach(function(t) {
                        t.low_priceStr = (t.low_price / 100).toFixed(2);
                    }), e.data.list = e.data.list.concat(t.products), e.setData({
                        gname: t.group_name || "",
                        list: e.data.list,
                        pageStatus: 0,
                        end: e.data.list.length >= t.total
                    }), wx.setNavigationBarTitle({
                        title: t.group_name ? t.group_name : "全部商品"
                    });
                },
                fail: function() {
                    a && e.setData({
                        pageStatus: 2
                    });
                },
                error: function() {
                    a && e.setData({
                        pageStatus: 2
                    });
                },
                complete: function() {
                    e.setData({
                        loading: !1
                    });
                }
            });
        }
    }
});