var t, s, e, o = require("../../utils/server"), a = 0, i = "shop_price", d = "desc", r = [ [ "highlight", "", "", "", "" ], [ "", "" ], [ "", "", "" ], [] ];

Page({
    data: {
        menu: [ "highlight", "", "", "" ],
        subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ],
        subMenuHighLight: r,
        sort: [ [ "shop_price-desc", "shop_price-asc" ], [ "sales_sum-desc", "sales_sum-asc" ], [ "is_new-desc", "is_new-asc" ], "comment_count-asc" ],
        goods: [],
        empty: !1,
        storeTitle: ""
    },
    search: function(t) {
        s = this.data.keywords, a = 0, this.data.goods = [], this.getGoodsByKeywords(s, a, i + "-" + d);
    },
    bindChange: function(t) {
        var s = t.detail.value;
        this.setData({
            keywords: s
        });
    },
    onLoad: function(o) {
        var a = o.storeTitle;
        wx.setNavigationBarTitle({
            title: a
        }), this.setData({
            storeTitle: a
        }), t = o.categoryId, e = o.id, (s = o.keywords) ? this.getGoodsByKeywords(s, 0, this.data.sort[0][1]) : this.getGoods(t, 0, this.data.sort[0][1]);
    },
    getGoodsByKeywords: function(t, s, a) {
        var r = this, n = a.split("-");
        i = n[0], d = n[1], o.getJSON("/Store/storeGoods", {
            store_id: e,
            p: s,
            sort: n[0],
            sort_asc: n[1],
            key: t
        }, function(t) {
            var s = t.data.result.goods_list, e = r.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? r.setData({
                empty: !0
            }) : r.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), r.setData({
                goods: e
            });
        });
    },
    getGoods: function(t, s, a) {
        var r = this, n = a.split("-");
        i = n[0], d = n[1], o.getJSON("/Store/storeGoods", {
            store_id: e,
            p: s,
            sort: n[0],
            sort_asc: n[1]
        }, function(t) {
            var s = t.data.result.goods_list, e = r.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? r.setData({
                empty: !0
            }) : r.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), r.setData({
                goods: e
            });
        });
    },
    tapGoods: function(t) {
        var s = t.currentTarget.dataset.objectId, e = t.currentTarget.dataset.storeTitle;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + s + "&storeTitle=" + e
        });
    },
    tapMainMenu: function(e) {
        var o = parseInt(e.currentTarget.dataset.index), i = [ "hidden", "hidden", "hidden", "hidden" ];
        "hidden" == this.data.subMenuDisplay[o] ? i[o] = "show" : i[o] = "hidden";
        var d = [ "", "", "", "" ];
        d[o] = "highlight", 3 == o && (this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[o]) : this.getGoods(t, 0, this.data.sort[o])), 
        this.setData({
            menu: d,
            subMenuDisplay: i
        });
    },
    tapSubMenu: function(e) {
        this.setData({
            subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ]
        });
        for (var o = e.currentTarget.dataset.index.split("-"), i = 0; i < r.length; i++) for (var d = 0; d < r[i].length; d++) r[i][d] = "";
        this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[o[0]][o[1]]) : this.getGoods(t, 0, this.data.sort[o[0]][o[1]]), 
        r[o[0]][o[1]] = "highlight", this.setData({
            subMenuHighLight: r
        });
    },
    onReachBottom: function() {
        s ? this.getGoodsByKeywords(s, ++a, i + "-" + d) : this.getGoods(t, ++a, i + "-" + d), 
        wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, a, i + "-" + d) : this.getGoods(t, a, i + "-" + d);
    }
});