var t = getApp(), a = require("../../utils/util.js");

Page({
    data: {
        imgUrls: [ "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" ],
        showshop: !1,
        showtime: !1,
        listData: [],
        showbtn: !0,
        shopnamelist: [],
        page: 1,
        pagesize: 8,
        year: 2e3,
        condition: null,
        conditionmonth: "0" + (new Date().getMonth() + 1),
        conditionname: "商品名称",
        month: [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
    },
    onLoad: function(o) {
        var e = this, s = a.formatTime(new Date()).substring(0, 4);
        console.log(o), e.setData({
            year: s
        });
        var n = t.globalData.operator, i = o.time, l = o.shopid;
        i && e.setData({
            conditionmonth: i.substr(5, 2)
        }), wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/stock-logs",
            data: {
                key: n.key,
                datetime: i || "",
                commodity: l || "",
                page: 1,
                pagesize: e.data.pagesize
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                console.log("获取库存列表成功"), console.log(t), 1 == t.data.state && t.data.list && t.data.list.length > 0 && (t.data.list.forEach(function(t) {
                    t.operation_stock = t.operation_stock.substring(0, 8);
                }), e.setData({
                    listData: t.data.list
                }));
            },
            fail: function(t) {
                console.log(t);
            }
        }), wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/customer-commodity",
            data: {
                key: n.key
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                if (console.log("获取商品名称成功"), console.log(t), 1 == t.data.state && t.data.list && t.data.list.length > 0) {
                    if (l) for (var a = 0; a < t.data.list.length; a++) t.data.list[a].name = t.data.list[a].name.substring(0, 8), 
                    console.log(t.data.list[a].name), t.data.list[a].id == l && e.setData({
                        conditionname: t.data.list[a].name
                    });
                    t.data.list.forEach(function(t) {
                        t.name = t.name.substring(0, 8);
                    }), e.setData({
                        shopnamelist: t.data.list
                    });
                }
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    changetime: function() {
        var t = this;
        t.setData({
            showtime: !t.data.showtime
        });
    },
    changeshop: function() {
        var t = this;
        t.setData({
            showshop: !t.data.showshop
        });
    },
    mbyc: function() {
        var t = this;
        console.log(123), (t.data.showshop || t.data.showshop) && t.setData({
            showshop: !1,
            showtime: !1
        });
    },
    click: function() {
        var a = this, o = t.globalData.operator, e = a.data.page + 1;
        if (console.log(a.data.condition), a.data.condition) var s = a.data.condition.time, n = a.data.condition.shopid; else var s = "", n = "";
        a.setData({
            page: e
        }), wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/stock-logs",
            data: {
                key: o.key,
                datetime: s || "",
                commodity: n || "",
                page: e,
                pagesize: a.data.pagesize
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                if (console.log(t), console.log(e), 1 == t.data.state && t.data.list && t.data.list.length > 0) {
                    var o = a.data.listData.concat(t.data.list);
                    console.log(o), t.data.list.forEach(function(t) {
                        t.operation_stock = t.operation_stock.substring(0, 8);
                    }), a.setData({
                        listData: o
                    });
                } else console.log(t), a.setData({
                    showbtn: !1
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});