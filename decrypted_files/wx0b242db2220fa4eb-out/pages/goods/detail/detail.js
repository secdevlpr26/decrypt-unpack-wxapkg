var o = require("../../../utils/server"), t = require("../../../wxParse/wxParse.js");

Page({
    data: {
        goods: {},
        current: 0,
        tabStates: [ !0, !1, !1 ],
        tabClasss: [ "text-select", "text-normal", "text-normal" ],
        galleryHeight: getApp().screenWidth,
        tab: 0,
        goods_num: 1,
        textStates: [ "view-btns-text-normal", "view-btns-text-select" ]
    },
    propClick: function(o) {
        for (var t = o.currentTarget.dataset.pos, s = o.currentTarget.dataset.index, e = this.data.goods, a = 0; a < e.goods.goods_spec_list[s].length; a++) a == t ? e.goods.goods_spec_list[s][t].isClick = 1 : e.goods.goods_spec_list[s][a].isClick = 0;
        this.setData({
            goods: e
        }), this.checkPrice();
    },
    addCollect: function(t) {
        var s = t.currentTarget.dataset.id;
        console.log(s);
        var e = getApp().globalData.userInfo.user_id;
        o.getJSON("/Goods/collectGoods/user_id/" + e + "/goods_id/" + s + "/type/0", function(o) {
            wx.showToast({
                title: o.data.msg,
                icon: "success",
                duration: 2e3
            });
        });
    },
    bindMinus: function(o) {
        var t = this.data.goods_num;
        t > 1 && t--, this.setData({
            goods_num: t
        });
    },
    bindManual: function(o) {
        parseInt(o.currentTarget.dataset.index);
        var t = o.detail.value;
        this.setData({
            goods_num: t
        });
    },
    bindPlus: function(o) {
        var t = this.data.goods_num;
        t++, this.setData({
            goods_num: t
        });
    },
    onLoad: function(o) {
        var t = o.objectId;
        this.getGoodsById(t);
    },
    tabClick: function(o) {
        var t = o.currentTarget.dataset.index, s = [ "text-normal", "text-normal", "text-normal" ];
        s[t] = "text-select", this.setData({
            tabClasss: s,
            tab: t
        });
    },
    getGoodsById: function(s) {
        var e = this;
        o.getJSON("/Goods/goodsInfo/id/" + s, function(o) {
            var s = o.data.result, a = o.data.result.goods.goods_content;
            t.wxParse("content", "html", a, e, 5), e.setData({
                goods: s
            }), e.checkPrice();
        });
    },
    checkPrice: function() {
        var o = this.data.goods, t = "";
        this.setData({
            price: o.goods.shop_price
        });
        for (a = 0; a < o.goods.goods_spec_list.length; a++) for (var s = 0; s < o.goods.goods_spec_list[a].length; s++) 1 == o.goods.goods_spec_list[a][s].isClick && (t = "" == t ? o.goods.goods_spec_list[a][s].item_id : t + "_" + o.goods.goods_spec_list[a][s].item_id);
        console.log(t);
        for (var e = t.split("_"), a = 0; a < e.length; a++) e[a] = parseInt(e[a]);
        e.sort(function(o, t) {
            return o - t;
        }), t = "";
        for (a = 0; a < e.length; a++) t = "" == t ? e[a] : t + "_" + e[a];
        console.log(t);
        var d = o.spec_goods_price[t].price;
        console.log(d), this.setData({
            price: d
        });
    },
    bug: function() {
        var t = this.data.goods, s = "";
        if (null != t.goods.goods_spec_list) for (var e = 0; e < t.goods.goods_spec_list.length; e++) for (var a = 0; a < t.goods.goods_spec_list[e].length; a++) 1 == t.goods.goods_spec_list[e][a].isClick && (s = "" == s ? t.goods.goods_spec_list[e][a].item_id : s + "_" + t.goods.goods_spec_list[e][a].item_id);
        var d = getApp(), i = this, g = i.data.goods.goods.goods_id, r = s, n = d.globalData.openid, c = i.data.goods_num, l = "0";
        d.globalData.login && (l = d.globalData.userInfo.user_id), o.getJSON("/Cart/addCart", {
            goods_id: g,
            goods_spec: r,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(o) {
            1 == o.data.status ? (wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 2e3
            }), wx.switchTab({
                url: "../../cart/cart"
            })) : wx.showToast({
                title: o.data.msg,
                icon: "error",
                duration: 2e3
            });
        });
    },
    addCart: function() {
        var t = this.data.goods, s = "";
        if (null != t.goods.goods_spec_list) for (var e = 0; e < t.goods.goods_spec_list.length; e++) for (var a = 0; a < t.goods.goods_spec_list[e].length; a++) 1 == t.goods.goods_spec_list[e][a].isClick && (s = "" == s ? t.goods.goods_spec_list[e][a].item_id : s + "_" + t.goods.goods_spec_list[e][a].item_id);
        var d = getApp(), i = this, g = i.data.goods.goods.goods_id, r = s, n = d.globalData.openid, c = i.data.goods_num, l = "0";
        d.globalData.login && (l = d.globalData.userInfo.user_id), o.getJSON("/Cart/addCart", {
            goods_id: g,
            goods_spec: r,
            session_id: n,
            goods_num: c,
            user_id: l
        }, function(o) {
            1 == o.data.status ? wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 1e3
            }) : wx.showToast({
                title: o.data.msg,
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
    previewImage: function(o) {
        wx.previewImage({
            current: this.data.goods.get("images")[parseInt(o.currentTarget.dataset.current)],
            urls: this.data.goods.get("images")
        });
    }
});