var t = getApp(), e = t.globalData.config.base, o = require("../../wxParse/wxParse"), a = require("../../utils/util.js");

Page({
    data: {
        appId: t.globalData.config.appid,
        SERVER_BASE: t.globalData.config.base,
        currentTab: 1,
        count: 1,
        isshow: !1,
        typeIndex: 0,
        showPrice: 0,
        choicelist: [],
        choicename: "",
        commentList: [],
        commentCount: 0,
        iscollect: !0,
        isload: !0,
        time: new Date().getTime(),
        selectImg: ""
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    showCart: function() {
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
                t && t.data && t.data.total_price && a.setData({
                    cartNum: t.data.total_price.num
                });
            }
        });
    },
    getGoodsList: function(o, a) {
        var s = this, i = this.data.isload;
        wx.getStorageSync("city").id, t.globalData.userKey;
        i && (s.setData({
            isload: !1
        }), wx.request({
            url: e + "Mobile/Api/goodsRecom",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                id: a
            },
            success: function(t) {
                console.log("=========="), console.log(t);
                var e = 0 != t.data.goodStatus, a = [];
                1 == o && (a = []), 1 != o && (a = s.data.goodsList), e && o++, s.setData({
                    goodsList: a.concat(t.data.goods),
                    storeList: t.data.shop,
                    page: o,
                    isload: e
                }), wx.hideNavigationBarLoading();
            }
        }));
    },
    toToGoods: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "../goods/goods?id=" + e
        });
    },
    onLoad: function(t) {
        console.log(t);
        var e = t.id, s = this;
        this.getGoodsInfo(e, function(t) {
            console.log(t.data.filter_spec), t.data.filter_spec = t.data.filter_spec || {}, 
            t.data.show_spec = [];
            for (var i in t.data.filter_spec) t.data.show_spec.push({
                name: i,
                value: t.data.filter_spec[i],
                selected: t.data.filter_spec[i][0].item_id
            });
            o.wxParse("imageText", "html", t.data.goods_content, s, 0), s.setData({
                goods: t.data,
                goodsid: e
            }), s.setSelectedName(), s.isCollectAlready(t.data);
            var c = t.data.filter_spec;
            a.isEmptyObject(c) || (s.setChoice(c), s.choicePrice(s.data.choicelist[0].item_id));
        }), this.getGoodsList(1, e), this.showCart(), this.getComment(e, function(t) {
            s.setData({
                commentList: t.data.list.slice(0, 2),
                commentCount: t.data.count
            });
        });
    },
    chooseImage: function(t) {
        var e = t.currentTarget.dataset.images;
        wx.previewImage({
            current: "",
            urls: e
        });
    },
    bigImage: function(t) {
        var e = t.currentTarget.dataset.images + "", o = [ e ];
        wx.previewImage({
            current: e,
            urls: o
        });
    },
    getComment: function(t, o) {
        wx.request({
            url: e + "Mobile/goods/getComment",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                goods_id: t,
                commentType: 1,
                p: 1
            },
            success: function(t) {
                console.log(t), o && o(t);
            }
        });
    },
    showBuy: function() {
        this.setData({
            isshow: !0
        });
    },
    getGoodsInfo: function(t, o) {
        wx.request({
            url: e + "Mobile/Api/goodsInfo",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                id: t
            },
            success: function(t) {
                o && o(t);
            }
        });
    },
    getSpecParam: function() {
        for (var t, e = [], o = this.data.goods.show_spec, a = 0; t = o[a]; ++a) {
            e.push(t.name + ",");
            for (var s, i = 0; s = t.value[i]; ++i) s.item_id == t.selected && (console.log(s), 
            e.push(s.item_id));
            a != o.length - 1 && e.push("|");
        }
        return e.join("");
    },
    buyShow: function() {
        if (this.data.isshow) {
            var o = t.globalData.userKey, a = this, s = this.data.choicelist, i = a.data.count, c = this.data.goodsid, n = (s.length > 0 && (a.data.choicename, 
            s[a.data.typeIndex].item_id), a.getSpecParam());
            i >= 1 ? wx.request({
                url: e + "Mobile/Order/AddCarts",
                method: "GET",
                header: {
                    "content-type": "application"
                },
                data: {
                    userkey: o,
                    goods_id: c,
                    goods_num: i,
                    goods_spec: n
                },
                success: function(t) {
                    console.log(t), 1 * t.data.error == 0 ? (wx.showToast({
                        title: "添加成功",
                        icon: "success",
                        duration: 1e3
                    }), a.showCart(), a.setData({
                        isBuy: !0
                    })) : -401 != t.data.status && "商品库存不足" != t.data.msg || wx.showModal({
                        title: "提示",
                        content: "商品库存不足",
                        showCancel: !1,
                        success: function(t) {}
                    }), a.setData({
                        isshow: !1
                    });
                },
                fail: function(t) {}
            }) : wx.showModal({
                title: "提示",
                content: "请选择购买数量",
                showCancel: !1,
                success: function(t) {}
            });
        } else this.setData({
            isshow: !0
        });
    },
    nowBuy: function() {
        var o = this.data.isshow;
        if (console.log(o), o) {
            var a = t.globalData.userKey, s = this, i = (this.data.choicelist, s.data.count), c = this.data.goodsid, n = s.getSpecParam();
            i >= 1 ? wx.request({
                url: e + "Mobile/Order/confirmOrderNow",
                method: "GET",
                header: {
                    "content-type": "application"
                },
                data: {
                    userkey: a,
                    goods_id: c,
                    goods_num: i,
                    goods_spec: n
                },
                success: function(t) {
                    console.log(t), 0 == t.data.error ? wx.navigateTo({
                        url: "../orderform/orderform?goodsid=" + c + "&num=" + i + "&spec=" + n
                    }) : -401 == t.data.status || "商品库存不足" == t.data.s ? wx.showModal({
                        title: "提示",
                        content: "商品库存不足",
                        showCancel: !1,
                        success: function(t) {}
                    }) : -101 != t.data.status && -122 != t.data.status || wx.navigateTo({
                        url: "../address/address?first=yes"
                    }), s.setData({
                        isshow: !1
                    });
                }
            }) : wx.showModal({
                title: "提示",
                content: "请选择购买数量",
                showCancel: !1,
                success: function(t) {}
            });
        } else this.setData({
            isshow: !0
        });
    },
    changeTab: function(t) {
        this.setData({
            currentTab: t.target.dataset.tab || 1
        });
    },
    buyHide: function() {
        this.setData({
            isshow: !1
        });
    },
    goodsReduce: function() {
        var t = this.data.count;
        t = --t < 0 ? 0 : t, this.setData({
            count: t
        });
    },
    goodsIncrease: function() {
        var t = this.data.count;
        t++, this.setData({
            count: t
        });
    },
    setChoice: function(t) {
        var e = {
            name: [],
            list: []
        };
        if (t) for (var o in t) e.name.push(o), e.list.push(t[o]);
        this.setData({
            choicename: e.name[0],
            choicelist: e.list[0]
        });
    },
    choiceType: function(t) {
        var e = t.currentTarget.dataset.itemid, o = t.currentTarget.dataset.itemname, a = this.data.goods.show_spec, s = t.currentTarget.dataset.img;
        console.log(s.length, "img"), console.log(t, "e");
        var i = this;
        s.length >= 45 && i.setData({
            selectImg: s
        });
        for (var c, n = 0; c = a[n]; ++n) c.name == o && (a[n].selected = e);
        this.setData(this.data), this.choicePrice(), this.setSelectedName();
    },
    setSelectedName: function() {
        for (var t, e = this.data.goods.show_spec, o = [], a = 0; t = e[a]; ++a) {
            o.push(t.name + ":");
            for (var s, i = 0; s = t.value[i]; ++i) s.item_id == t.selected && (console.log(s), 
            o.push(s.item));
            o.push("; ");
        }
        this.setData({
            selectedName: o.join("")
        });
    },
    choicePrice: function() {
        for (var t, e = JSON.parse(this.data.goods.spec_goods_price), o = 0, a = this.data.goods.show_spec, s = [], i = 0; t = a[i]; ++i) s.push(t.selected);
        o = 1 * e[s = s.join("_")].price, console.log(e), console.log(o), this.setData({
            showPrice: o
        });
    },
    toCart: function() {
        wx.switchTab({
            url: "../cart/cart"
        });
    },
    toCommentList: function() {
        var t = this.data.goodsid;
        wx.navigateTo({
            url: "../commentinfo/commentinfo?id=" + t
        });
    },
    isCollectAlready: function(t) {
        var e = this, o = wx.getStorageSync("record_list") || [], a = t;
        o.length > 0 && o.some(function(t, e) {
            return t.goods_id == a.goods_id;
        }) && (e.addCollect(), console.log(e.data.iscollect));
    },
    setRecord: function(t) {
        var e = wx.getStorageSync("record_list") || [], o = t;
        e.length > 0 ? e.some(function(t, e) {
            return t.goods_id == o.goods_id;
        }) || e.push(o) : e.push(o), wx.setStorageSync("record_list", e);
    },
    delRecord: function(t) {
        var e = this, o = wx.getStorageSync("record_list") || [], a = t;
        o.length > 0 && o.some(function(t, e) {
            return t.goods_id == a.goods_id;
        }) && (o.pop(a), e.delCollect()), wx.setStorageSync("record_list", o);
    },
    tocollect: function() {
        var t = this, e = this.data.iscollect;
        e ? (t.setRecord(t.data.goods), t.setData({
            iscollect: !1
        }), wx.showToast({
            title: "收藏成功",
            icon: "success",
            duration: 2e3
        })) : e || (t.setData({
            iscollect: !0
        }), t.delRecord(t.data.goods), wx.showToast({
            title: "取消收藏",
            icon: "success",
            duration: 2e3
        }));
    },
    addCollect: function() {
        this.setData({
            iscollect: !1
        });
    },
    delCollect: function() {
        this.setData({
            iscollect: !0
        });
    }
});