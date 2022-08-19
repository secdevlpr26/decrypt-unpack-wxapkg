var t = require("../../../comm/script/fetch"), e = (require("../../../comm/script/config"), 
require("../../../util/util"), require("../../../util/jwt.js")), a = (require("../../../util/md5"), 
require("../../../component/message/message.js")), i = require("../../../utils/server");

getApp(), Page({
    data: {
        promiseList: [ {
            imgUrl: "https://pic.hiweixiu.com/images/mrecy.hiweixiu.com/bjwy.png",
            content: "保价无忧"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mrecy.hiweixiu.com/jsfk.png",
            content: "极速返款"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mrecy.hiweixiu.com/yzfw.png",
            content: "优质服务"
        }, {
            imgUrl: "https://pic.hiweixiu.com/images/mrecy.hiweixiu.com/ysbh.png",
            content: "隐私保护"
        } ],
        mid: "",
        mname: "",
        mpic: "",
        bname: "",
        bid: "",
        price: "",
        attr_fault_data: "",
        recycler_id: "",
        selectInfo: [],
        cartNum: 0,
        adding: !1
    },
    onLoad: function(t) {
        o = this;
        i.getJSON("/Goods/goodsInfo", {
            id: t.goods_id
        }, function(e) {
            o.setData({
                goods: e.data.result.goods
            }), o.setData({
                spec: e.data.result.goods.goods_spec_list
            }), o.setData({
                info: e.data.result.goods.goods_spec_list
            }), o.setData({
                other: e.data.result.goods.other
            }), o.setData({
                price: e.data.result.spec_goods_price
            }), o.setData({
                editId: e.data.result.goods.goods_spec_list[0].id
            }), o.setData({
                progressRate: 100 / e.data.result.goods.goods_spec_list.length
            });
            var a = parseFloat(e.data.result.goods.shop_price) - parseFloat(t.price);
            a < e.data.result.goods.market_price && (a = e.data.result.goods.market_price), 
            o.setData({
                shop_price: a
            }), e.data.result.goods.other.count;
        });
        var e = JSON.parse(t.otherFaultList), a = JSON.parse(t.faultList);
        return this.setData({
            otherFaultList: e
        }), void this.setData({
            faultList: a
        });
        var o;
    },
    onShow: function() {
        e.jwtToken() && this.getCartNum();
    },
    reAssess: function() {
        return void wx.navigateBack({});
    },
    toCreateOrder: function() {
        var t = JSON.stringify(this.data.otherFaultList), e = JSON.stringify(this.data.faultList);
        return void wx.navigateTo({
            url: "../createOrder/createOrder?goods_id=" + this.data.goods.goods_id + "&otherFaultList=" + t + "&faultList=" + e + "&price=" + this.data.shop_price
        });
    },
    getCartNum: function() {
        var a = this;
        e.jwtToken() && t.getCartNum(function(t) {
            a.setData({
                cartNum: t
            });
        }, function(t) {});
    },
    addToCart: function() {
        var i = this;
        if (!this.data.adding) if (e.jwtToken()) {
            this.setData({
                adding: !0
            });
            var o = this.data.attr_fault_data, s = this.data.price, r = this.data.mid, n = this.data.bid;
            t.addToCart(o, n, s, r, function(t) {
                setTimeout(function() {
                    i.setData({
                        adding: !1
                    });
                }, 1500), a.show.call(i, {
                    icon: "ok",
                    content: "添加成功"
                }), i.setData({
                    cartNum: Number(i.data.cartNum) + 1
                });
            }, function(t) {});
        } else i.showToLoginMould();
    },
    toRecycleCart: function() {
        var t = getApp().globalData.userInfo;
        this.setData({
            userInfo: t
        }), wx.makePhoneCall({
            phoneNumber: "" + t.mobile1
        });
    },
    showToLoginMould: function() {
        wx.showModal({
            title: "小提示",
            content: "只有登录用户可以使用回收车功能，点击登录跳转登录界面，或者直接下单",
            confirmText: "登录",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "../../personal/login/login"
                });
            }
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});