var t, s, e = require("../../../utils/server"), o = 0, a = "shop_price", i = "desc", d = [ [ "highlight", "", "", "", "" ], [ "", "" ], [ "", "", "" ], [] ];

Page({
    data: {
        menu: [ "highlight", "", "", "" ],
        subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ],
        subMenuHighLight: d,
        sort: [ [ "shop_price-desc", "shop_price-asc" ], [ "sales_sum-desc", "sales_sum-asc" ], [ "is_new-desc", "is_new-asc" ], "comment_count-asc" ],
        goods: [],
        empty: !1
    },
    search: function(t) {
        s = this.data.keywords, o = 0, this.data.goods = [], this.getGoodsByKeywords(s, o, a + "-" + i);
    },
    bindChange: function(t) {
        var s = t.detail.value;
        this.setData({
            keywords: s
        });
    },
    onLoad: function(e) {
        t = e.categoryId, (s = e.keywords) ? this.getGoodsByKeywords(s, 0, this.data.sort[0][0]) : this.getGoods(t, 0, this.data.sort[0][0]);
    },
    getGoodsByKeywords: function(t, s, o) {
        var d = this, h = o.split("-");
        a = h[0], i = h[1], e.getJSON("/Goods/search/keywords/" + t + "/p/" + s + "/sort/" + a + "/sort_asc/" + i, function(t) {
            var s = t.data.result.goods_list, e = d.data.goods;
            for (var o in s) e.push(s[o]);
            wx.stopPullDownRefresh(), 0 == e.length ? d.setData({
                empty: !0
            }) : d.setData({
                empty: !1
            }), d.setData({
                goods: e
            });
        });
    },
    getGoods: function(t, s, o) {
        var d = this, h = o.split("-");
        a = h[0], i = h[1], e.getJSON("/Activity/group_list/p/" + s, function(t) {
            var s = t.data.result, e = d.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? d.setData({
                empty: !0
            }) : d.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), d.setData({
                goods: s
            });
        });
    },
    tapGoods: function(t) {
        var s = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../../../../../groupDetail/detail?objectId=" + s
        });
    },
    tapMainMenu: function(e) {
        var a = parseInt(e.currentTarget.dataset.index), i = [ "hidden", "hidden", "hidden", "hidden" ];
        "hidden" == this.data.subMenuDisplay[a] ? i[a] = "show" : i[a] = "hidden";
        var d = [ "", "", "", "" ];
        d[a] = "highlight", 3 == a && (this.setData({
            goods: []
        }), o = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a]) : this.getGoods(t, 0, this.data.sort[a])), 
        this.setData({
            menu: d,
            subMenuDisplay: i
        });
    },
    tapSubMenu: function(e) {
        this.setData({
            subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ]
        });
        for (var a = e.currentTarget.dataset.index.split("-"), i = 0; i < d.length; i++) for (var h = 0; h < d[i].length; h++) d[i][h] = "";
        this.setData({
            goods: []
        }), o = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a[0]][a[1]]) : this.getGoods(t, 0, this.data.sort[a[0]][a[1]]), 
        d[a[0]][a[1]] = "highlight", this.setData({
            subMenuHighLight: d
        });
    },
    onReachBottom: function() {
        s ? this.getGoodsByKeywords(s, ++o, a + "-" + i) : this.getGoods(t, ++o, a + "-" + i), 
        wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            goods: []
        }), o = 0, s ? this.getGoodsByKeywords(s, o, a + "-" + i) : this.getGoods(t, o, a + "-" + i);
    }
});