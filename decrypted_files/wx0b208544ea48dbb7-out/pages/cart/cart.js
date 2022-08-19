var t = getApp(), e = t.globalData.config.base;

Page({
    data: {
        goodsList: [],
        checkAll: !0
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {
        this.getGoodsInfo();
    },
    onReady: function() {},
    onShow: function() {
        this.getGoodsInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toOrderform: function() {
        this.data.goodsList.every(function(t, e) {
            return 0 == t.selected;
        }) ? wx.showModal({
            title: "提示",
            content: "请选择商品",
            showCancel: !1,
            success: function(t) {}
        }) : wx.navigateTo({
            url: "../orderform/orderform"
        });
    },
    getGoodsInfo: function() {
        var o = t.globalData.userKey, a = this;
        wx.request({
            url: e + "Mobile/Order/getCartList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o
            },
            success: function(t) {
                var e = t.data.cartList.every(function(t, e) {
                    return 1 == t.selected;
                });
                a.setData({
                    checkAll: e,
                    goodsList: t.data.cartList
                }), a.totalGoods();
            }
        });
    },
    selected: function(o) {
        var a = t.globalData.userKey, s = this, d = o.currentTarget.dataset.index, i = this.data.goodsList, n = 1 == i[d].selected ? 0 : 1, r = void 0;
        i[d].selected = n, r = i.every(function(t, e) {
            return 1 == t.selected;
        }), s.setData({
            goodsList: i,
            checkAll: r
        }), wx.request({
            url: e + "Mobile/Order/ajaxDealCart",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a,
                id: s.data.goodsList[d].id,
                goods_num: s.data.goodsList[d].goods_num,
                selected: s.data.goodsList[d].selected,
                isall: 0
            },
            success: function(t) {
                0 == t.data.error && (s.setData({
                    goodsList: i,
                    checkAll: r
                }), s.totalGoods());
            }
        });
    },
    increase: function(o) {
        var a = t.globalData.userKey, s = this, d = o.currentTarget.dataset.index, i = this.data.goodsList, n = i[d].goods_num;
        ++n >= 99 && (n = 99), i[d].goods_num = n, wx.request({
            url: e + "Mobile/Order/ajaxDealCart",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a,
                id: s.data.goodsList[d].id,
                goods_num: s.data.goodsList[d].goods_num,
                selected: s.data.goodsList[d].selected,
                isall: 0
            },
            success: function(t) {
                0 == t.data.error && (s.setData({
                    goodsList: i
                }), s.totalGoods());
            }
        });
    },
    reduce: function(o) {
        var a = t.globalData.userKey, s = this, d = o.currentTarget.dataset.index, i = this.data.goodsList, n = i[d].goods_num;
        --n <= 0 && (n = 1), i[d].goods_num = n, s.setData({
            goodsList: i
        }), wx.request({
            url: e + "Mobile/Order/ajaxDealCart",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a,
                id: s.data.goodsList[d].id,
                goods_num: s.data.goodsList[d].goods_num,
                selected: s.data.goodsList[d].selected,
                isall: 0
            },
            success: function(t) {
                0 == t.data.error && (s.setData({
                    goodsList: i
                }), s.totalGoods());
            }
        });
    },
    checkGoodsList: function() {
        var o = t.globalData.userKey, a = this.data.goodsList, s = [], d = this, i = this.data.checkAll;
        a.forEach(function(t, e) {
            s.push(t.id);
        }), i ? a.forEach(function(t) {
            t.selected = 0;
        }) : a.forEach(function(t) {
            t.selected = 1;
        }), wx.request({
            url: e + "Mobile/Order/ajaxDealCart",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o,
                id: s.join(","),
                selected: i ? 0 : 1,
                isall: 1
            },
            success: function(t) {
                d.setData({
                    checkAll: !i,
                    goodsList: a
                }), d.totalGoods();
            }
        });
    },
    deleteGoods: function(o) {
        var a = this, s = o.currentTarget.dataset.index, d = t.globalData.userKey, i = this.data.goodsList, n = i[s].id;
        wx.showActionSheet({
            itemList: [ "确定" ],
            success: function(t) {
                0 == t.tapIndex && wx.request({
                    url: e + "Mobile/Order/ajaxRmCart",
                    method: "GET",
                    header: {
                        "content-type": "application"
                    },
                    data: {
                        userkey: d,
                        ids: n
                    },
                    success: function(t) {
                        0 != t.data.error && "删除成功" != t.data.data || (i.splice(s, 1), a.setData({
                            goodsList: i
                        }));
                    }
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    totalGoods: function() {
        var t = 0, e = 0;
        this.data.goodsList.forEach(function(o, a) {
            1 == o.selected && (t += o.goods_num, e += o.goods_price * o.goods_num);
        }), this.setData({
            total: {
                count: t,
                price: e.toFixed(2)
            }
        });
    }
});