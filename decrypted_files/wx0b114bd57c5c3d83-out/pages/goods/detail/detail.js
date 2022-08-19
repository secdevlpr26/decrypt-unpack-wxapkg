var t = require("../../../utils/server"), o = require("../../../wxParse/wxParse.js");

Page({
    data: {
        goods: {},
        market_price: 0,
        current: 0,
        tabStates: [ !0, !1, !1 ],
        tabClasss: [ "text-select", "text-normal", "text-normal" ],
        galleryHeight: getApp().screenWidth,
        tab: 0,
        goods_num: 1,
        textStates: [ "view-btns-text-normal", "view-btns-text-select" ],
        article: "<div>我是HTML代码</div>"
    },
    propClick: function(t) {
        for (var o = t.currentTarget.dataset.pos, s = t.currentTarget.dataset.index, e = this.data.goods, a = 0; a < e.goods.goods_spec_list[s].length; a++) a == o ? e.goods.goods_spec_list[s][o].isClick = 1 : e.goods.goods_spec_list[s][a].isClick = 0;
        this.setData({
            goods: e
        }), this.checkPrice();
    },
    addCollect: function(o) {
        var s = o.currentTarget.dataset.id, e = getApp().globalData.userInfo.user_id;
        t.getJSON("/Goods/collectGoods/user_id/" + e + "/goods_id/" + s + "/type/0", function(t) {
            wx.showToast({
                title: t.data.msg,
                icon: "success",
                duration: 2e3
            });
        });
    },
    bindMinus: function(t) {
        var o = this.data.goods_num;
        o > 1 && o--, this.setData({
            goods_num: o
        });
    },
    bindManual: function(t) {
        parseInt(t.currentTarget.dataset.index);
        var o = t.detail.value;
        this.setData({
            goods_num: o
        });
    },
    bindPlus: function(t) {
        var o = this.data.goods_num;
        o++, this.setData({
            goods_num: o
        });
    },
    onLoad: function(t) {
        var o = t.objectId;
        this.getGoodsById(o);
        var s = t.storeTitle;
        wx.setNavigationBarTitle({
            title: s
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    tabClick: function(t) {
        var o = t.currentTarget.dataset.index, s = [ "text-normal", "text-normal", "text-normal" ];
        s[o] = "text-select", this.setData({
            tabClasss: s,
            tab: o
        });
    },
    getGoodsById: function(s) {
        var e = this;
        t.getJSON("/Goods/goodsInfo/id/" + s, function(t) {
            var s = t.data.result;
            e.setData({
                goods: s
            }), e.checkPrice(), o.wxParse("article", "html", e.data.goods.goods.goods_content.replace(/\/users\/mbz\/\.\./g, "https://mp.qq.kfy.cn/users/mbz/.."), e, 5);
        });
    },
    checkPrice: function() {
        var t = this.data.goods, o = "";
        this.setData({
            price: t.goods.shop_price,
            market_price: t.goods.market_price
        });
        for (a = 0; a < t.goods.goods_spec_list.length; a++) for (var s = 0; s < t.goods.goods_spec_list[a].length; s++) 1 == t.goods.goods_spec_list[a][s].isClick && (o = "" == o ? t.goods.goods_spec_list[a][s].item_id : o + "_" + t.goods.goods_spec_list[a][s].item_id);
        for (var e = o.split("_"), a = 0; a < e.length; a++) e[a] = parseInt(e[a]);
        e.sort(function(t, o) {
            return t - o;
        }), o = "";
        for (a = 0; a < e.length; a++) o = "" == o ? e[a] : o + "_" + e[a];
        var i = t.spec_goods_price[o].price, d = t.spec_goods_price[o].cost_price;
        this.setData({
            price: i,
            market_price: d
        });
    },
    bug: function() {
        var o = this.data.goods, s = "";
        if (null != o.goods.goods_spec_list) for (var e = 0; e < o.goods.goods_spec_list.length; e++) for (var a = 0; a < o.goods.goods_spec_list[e].length; a++) 1 == o.goods.goods_spec_list[e][a].isClick && (s = "" == s ? o.goods.goods_spec_list[e][a].item_id : s + "_" + o.goods.goods_spec_list[e][a].item_id);
        var i = getApp(), d = this, r = d.data.goods.goods.goods_id, g = s, n = i.globalData.openid, c = d.data.goods_num, l = "0";
        i.globalData.login && (l = i.globalData.userInfo.user_id), t.getJSON("/Cart/addCart", {
            goods_id: r,
            goods_spec: g,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(t) {
            1 == t.data.status ? (wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 2e3
            }), wx.switchTab({
                url: "../../cart/cart"
            })) : wx.showToast({
                title: t.data.msg,
                icon: "error",
                duration: 2e3
            });
        });
    },
    addCart: function() {
        var o = this.data.goods, s = "";
        if (null != o.goods.goods_spec_list) for (var e = 0; e < o.goods.goods_spec_list.length; e++) for (var a = 0; a < o.goods.goods_spec_list[e].length; a++) 1 == o.goods.goods_spec_list[e][a].isClick && (s = "" == s ? o.goods.goods_spec_list[e][a].item_id : s + "_" + o.goods.goods_spec_list[e][a].item_id);
        var i = getApp(), d = this, r = d.data.goods.goods.goods_id, g = s, n = i.globalData.openid, c = d.data.goods_num, l = "0";
        i.globalData.login && (l = i.globalData.userInfo.user_id), t.getJSON("/Cart/addCart", {
            goods_id: r,
            goods_spec: g,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(t) {
            1 == t.data.status ? wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 1e3
            }) : wx.showToast({
                title: t.data.msg,
                icon: "error",
                duration: 1e3
            });
        });
    },
    showCartToast: function() {
        wx.showToast({
            title: "已加入购物车",
            icon: "success",
            duration: 1e3
        }), wx.navigateTo({
            url: "../../../../../../cart/cart"
        });
    },
    previewImage: function(t) {
        wx.previewImage({
            current: this.data.goods.get("images")[parseInt(t.currentTarget.dataset.current)],
            urls: this.data.goods.get("images")
        });
    }
});