var a = getApp(), t = a.globalData.config.base;

Page({
    data: {
        address: {},
        goodsList: []
    },
    onShareAppMessage: function() {
        return {
            title: a.globalData.config.title,
            path: "/pages/orderform/orderform",
            data: {
                data: data
            },
            success: function(a) {},
            fail: function(a) {}
        };
    },
    onLoad: function(a) {
        if (a.goodsid) {
            var t = {
                goodsid: a.goodsid,
                num: a.num,
                spec: a.spec
            };
            this.setData({
                buyInfo: t
            });
        }
    },
    onReady: function() {},
    toaddressbook: function() {
        wx.navigateTo({
            url: "../addressbook/addressbook?first=yes"
        });
    },
    onShow: function() {
        var a = this, t = this.data.buyInfo;
        t ? a.getBuyinfo(t.goodsid, t.num, t.spec, function(t) {
            var e = t.data.address, s = [], o = t.data.shipping_fee, d = t.data.total_price.total_fee + t.data.shipping_fee, r = t.data.total_price;
            s.push(t.data.cartList);
            for (var i = 0; i < e.length; i++) if (1 == e[i].is_default) {
                a.setData({
                    totalPrice: r,
                    goodsList: s,
                    address: e[i],
                    freight: o,
                    sum: d
                });
                break;
            }
        }) : this.getOrderform();
    },
    onHide: function() {},
    onUnload: function() {},
    getOrderform: function() {
        var e = a.globalData.userKey, s = this;
        wx.request({
            url: t + "Mobile/Order/confirmOrder",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: e,
                Address_id: ""
            },
            success: function(a) {
                if (console.log("duoge", a), 1 == a.data.error || -122 == a.data.status) wx.navigateTo({
                    url: "../address/address?first=yes"
                }); else {
                    var t = a.data.cartList;
                    t.forEach(function(a, e) {
                        0 == a.selected && t.splice(e, 1);
                    }), s.setData({
                        address: a.data.address[0],
                        goodsList: t,
                        totalPrice: a.data.total_price,
                        freight: a.data.shipping_fee,
                        sum: a.data.total_price.total_fee + a.data.shipping_fee
                    });
                }
            }
        });
    },
    submit: function() {
        var e = this, s = a.globalData.userKey, o = this.data.buyInfo;
        o ? wx.request({
            url: t + "Mobile/Order/cartnow3",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: s,
                act: "submit_order",
                t: Math.random(),
                address_id: e.data.address.address_id,
                shipping_code: "shentong",
                goods_id: o.goodsid,
                goods_num: o.num,
                goods_spec: o.spec
            },
            success: function(a) {
                if (console.log(a), 1 == a.data.status && a.data.result) {
                    var t = a.data.result;
                    wx.redirectTo({
                        url: "../pay/pay?id=" + t
                    });
                }
            }
        }) : wx.request({
            url: t + "Mobile/Order/cart3",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: s,
                act: "submit_order",
                t: Math.random(),
                address_id: e.data.address.address_id,
                shipping_code: "shentong"
            },
            success: function(a) {
                if (console.log(a), 1 == a.data.status && a.data.result) {
                    var t = a.data.result;
                    wx.redirectTo({
                        url: "../pay/pay?id=" + t
                    });
                }
            }
        });
    },
    getBuyinfo: function(e, s, o, d) {
        var r = a.globalData.userKey;
        wx.request({
            url: t + "Mobile/Order/confirmOrderNow",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: r,
                goods_id: e,
                goods_num: s,
                goods_spec: o
            },
            success: function(a) {
                0 == a.data.error && d && d(a);
            }
        });
    }
});