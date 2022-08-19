var t = getApp(), a = require("../../../utils/util.js"), e = require("../../template-cart/template-navbar/template-navbar.js");

Page({
    data: {
        navbar: {
            list: [ "收入", "提现", "提成", "消费" ],
            current: 0
        },
        order: []
    },
    navbarTap: function(t) {
        var a = this;
        e.tap(this, t, function(t) {
            a.data.order[t] || a.getDetailList(!0);
        });
    },
    getDetailList: function(e) {
        if (t.globalData.session_login_id) {
            var o = this, n = o.data.navbar.current, i = o.data.order, s = i[n] = e ? {} : i[n];
            s.page = e ? 0 : s.page, s.list = e ? [] : s.list, s.end && !e || (s.loadState = 0, 
            o.setData({
                order: i
            }), wx.request({
                url: t.globalData.url + t.globalData.parameter,
                data: {
                    do: "cost",
                    cost_type: n + 1,
                    page: s.page + 1,
                    psize: 10
                },
                header: {
                    Cookie: t.globalData.session_login_id,
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    if (1 == t.data.status) {
                        var e = t.data.result.cost;
                        e.forEach(function(t, e, o) {
                            t.cost_time = a.timestampToDate(1e3 * t.cost_time), t.cost_money = a.formatFloat(t.cost_money, 2);
                        }), s.list = s.list.concat(e), s.end = !e.length, ++s.page, s.loadState = s.end ? 2 : 1, 
                        o.setData({
                            order: i
                        });
                    }
                },
                fail: function() {
                    s.loadState = 3, o.setData({
                        order: i
                    });
                },
                complete: function() {
                    wx.stopPullDownRefresh();
                }
            }));
        }
    },
    onLoad: function(t) {
        e.init(this);
    },
    onReady: function() {},
    onShow: function() {
        this.getDetailList(!0);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getDetailList(!0);
    },
    onReachBottom: function() {
        this.getDetailList();
    }
});