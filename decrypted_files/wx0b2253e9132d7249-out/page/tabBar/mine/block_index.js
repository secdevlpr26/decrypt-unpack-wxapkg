var e = getApp();

Page({
    data: {
        photo_url: e.globalData.fileimg,
        userInfo: null,
        over: !1,
        grant: !0,
        userLocation: !1,
        projectSource: "https://github.com/liuxuanqiang/wechat-weapp-mall",
        orderoption: [ {
            icon: e.globalData.fileimg + "images/orderstatus/topay.png",
            text: "待付款",
            pagePath: "../../shop/pages/order-list/index",
            pathId: 1,
            orderNav: "cartList",
            goodsNum: 0
        }, {
            icon: e.globalData.fileimg + "images/orderstatus/wait.png",
            text: "待发货",
            pagePath: "../../shop/pages/order-list/index",
            pathId: 2,
            orderNav: "cartList",
            goodsNum: 0
        }, {
            icon: e.globalData.fileimg + "images/orderstatus/toreceive.png",
            text: "待收货",
            pagePath: "../../shop/pages/order-list/index",
            pathId: 3,
            orderNav: "cartList",
            goodsNum: 0
        }, {
            icon: e.globalData.fileimg + "images/orderstatus/tuihuo.png",
            text: "退/换货",
            pathId: 1,
            pagePath: "../../shop/pages/returns/index",
            orderNav: "cartList",
            goodsNum: 0
        } ],
        userListInfo: [],
        my_service: [ {
            bindNav: "cartList",
            icon: "/images/doctor.png",
            text: "我的订单",
            pagePath: "/page/shop/pages/order-list/index"
        }, {
            bindNav: "cartList",
            icon: "/images/my_address.png",
            text: "我的地址",
            pagePath: "../../shop/pages/select-address/index"
        }, {
            bindNav: "cartList",
            icon: "/images/coupon.png",
            text: "优惠券",
            pagePath: "../../shop/pages/my-coupon/my-coupon"
        }, {
            bindNav: "cartList",
            icon: "/images/lists.png",
            text: "充值记录",
            pagePath: "../../shop/pages/prepaid/index"
        }, {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/iconfont-heart.png",
            text: "我的关注",
            focusNum: "",
            focusText: "focus_num",
            pagePath: "../../shop/pages/focus/focus"
        }, {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/iconfont-foot.png",
            text: "我的足迹",
            pagePath: "../../shop/pages/footprint/footprint"
        } ],
        Platform_service: [ {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/aboutme.png",
            text: "关于我们",
            pagePath: "../../shop/pages/aboutme/aboutme"
        } ],
        shop_service: []
    },
    cartList: function(t) {
        if (null != e.globalData.session_login_id && "" != e.globalData.session_login_id && void 0 != e.globalData.session_login_id) {
            "/page/shop/pages/order-list/index" == t.currentTarget.dataset.url && wx.navigateTo({
                url: "/page/shop/pages/order-list/index?id=0"
            });
            var a = t.currentTarget.dataset.url + "?id=" + t.currentTarget.dataset.id;
            wx.navigateTo({
                url: a
            });
        } else wx.showModal({
            title: "提示",
            content: "请先授权!",
            showCancel: !1
        });
    },
    set: function() {
        wx.navigateTo({
            url: "../../shop/pages/set-member/index"
        });
    },
    onLoad: function() {
        this.setData({
            copyright: wx.getStorageSync("copyright")
        });
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    windowHeight: e.windowHeight
                });
            }
        }), wx.showLoading({
            title: "正在加载",
            mask: !0,
            success: function() {
                e.getUserInfo(t);
            },
            complete: function() {
                setTimeout(function() {
                    wx.hideLoading();
                }, 1500);
            }
        });
    },
    onShow: function(e) {
        var t = this;
        wx.getSetting({
            success: function(e) {
                0 == e.authSetting["scope.userLocation"] ? t.setData({
                    userLocation: !1
                }) : t.setData({
                    userLocation: !0
                });
            }
        });
        wx.getStorageSync("userInfo");
        this.userListInfo();
    },
    isInArray: function(e, t) {
        for (var a = 0; a < e.length; a++) if (t === e[a].text) return !0;
        return !1;
    },
    deleteInfo: function(e) {
        if ("计次卡" == e || "商户入驻" == e || "分销中心" == e) t = this.data.shop_service; else if ("帮助中心" == e || "积分签到" == e || "关于我们" == e) t = this.data.Platform_service; else var t = this.data.userListInfo;
        for (var a in t) t[a].text == e && t.splice(a, 1);
    },
    userListInfo: function() {
        for (var t = this, a = t.data.orderoption, s = 0; s < a.length; s++) a[s].goodsNum = 0;
        t.data.userListInfo;
        setTimeout(function() {
            wx.showLoading({
                title: "正在加载"
            }), wx.request({
                url: e.globalData.url + e.globalData.parameter + "&r=member.wxapp_getmember",
                header: {
                    Cookie: e.globalData.session_login_id
                },
                success: function(s) {
                    var o = s.data.result.member;
                    if (0 == s.data.result.member) return t.setData({
                        grant: !1
                    }), !1;
                    t.setData({
                        grant: !0
                    }), "" != o.realname && "" != o.mobile && "" != o.weixin ? t.setData({
                        over: !0
                    }) : t.setData({
                        over: !1
                    });
                    var i = s.data.result.statics;
                    a[0].goodsNum = i.order_0, a[0].goodsNum > 99 && (a[0].goodsNum = "99+"), a[3].goodsNum = i.order_4, 
                    a[3].goodsNum > 99 && (a[3].goodsNum = "99+"), a[1].goodsNum = i.order_1, a[1].goodsNum > 99 && (a[1].goodsNum = "99+"), 
                    a[2].goodsNum = i.order_2, a[2].goodsNum > 99 && (a[2].goodsNum = "99+");
                    var n = t.data.userListInfo;
                    if (s.data.result.open_commission) {
                        var r = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/fenxiao.png",
                            text: "分销中心",
                            pagePath: "../../shop/pages/distribution/index"
                        };
                        t.isInArray(t.data.shop_service, "分销中心") || t.data.shop_service.unshift(r);
                    } else t.deleteInfo("分销中心");
                    if (s.data.result.open_diyreserve) {
                        var g = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/icon-signColor.png",
                            text: "我的预约",
                            pagePath: "../../shop/pages/diyreserve/my-reserve/index"
                        };
                        t.isInArray(n, "我的预约") || n.unshift(g);
                    } else t.deleteInfo("我的预约");
                    if (s.data.result.open_groups) {
                        var c = {
                            bindNav: "cartList",
                            icon: "/images/my_teams.png",
                            text: "我的团",
                            pagePath: "../../groups/pages/my_teams/index"
                        }, d = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/pintuan-order.png",
                            text: "拼团订单",
                            pagePath: "../../groups/pages/pintuan-order-list/index"
                        };
                        t.isInArray(t.data.my_service, "我的团") || t.data.my_service.unshift(c), t.isInArray(t.data.my_service, "拼团订单") || t.data.my_service.unshift(d);
                    } else t.deleteInfo("我的团"), t.deleteInfo("拼团订单");
                    if (s.data.result.apply_openmobile) {
                        var l = {
                            bindNav: "cartList",
                            icon: "/images/agent.png",
                            text: "商户入驻",
                            phoneNum: "",
                            pagePath: "../../shop/pages/applyForMulti-business/index"
                        };
                        t.isInArray(t.data.shop_service, "商户入驻") || t.data.shop_service.unshift(l);
                    } else t.deleteInfo("商户入驻");
                    if (s.data.result.open_vpscard) {
                        var u = {
                            bindNav: "cartList",
                            icon: "/images/ic_card.png",
                            text: "计次卡",
                            phoneNum: "",
                            pagePath: "/page/shop/pages/countingcard_list/index"
                        };
                        t.isInArray(t.data.shop_service, "计次卡") || t.data.shop_service.unshift(u);
                    } else t.deleteInfo("计次卡");
                    if (s.data.result.open_sign) {
                        var p = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/icon-signColor.png",
                            text: "积分签到",
                            pagePath: "../../shop/pages/credit-sign/credit-sign"
                        };
                        t.isInArray(t.data.Platform_service, "积分签到") || t.data.Platform_service.unshift(p);
                    } else t.deleteInfo("积分签到");
                    if (s.data.result.open_help) {
                        var h = {
                            bindNav: "cartList",
                            icon: "/images/help-center.png",
                            text: "帮助中心",
                            pagePath: "../../shop/pages/help-cen/index"
                        };
                        t.isInArray(t.data.Platform_service, "帮助中心") || t.data.Platform_service.unshift(h);
                    } else t.deleteInfo("帮助中心");
                    t.setData({
                        orderoption: a,
                        member: s.data.result.member,
                        closerecharge: s.data.result.closerecharge,
                        closeexchange: s.data.result.closeexchange,
                        userListInfo: n,
                        my_service: t.data.my_service,
                        Platform_service: t.data.Platform_service,
                        shop_service: t.data.shop_service,
                        level: s.data.result.level
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            });
        }, 1e3);
    },
    onReady: function() {},
    addAddress: function() {
        wx.navigateTo({
            url: "../../shop/pages/recharge/recharge"
        });
    },
    onPullDownRefresh: function(t) {
        var a = this, s = wx.getStorageSync("userInfo");
        null == s && e.userLogin(), wx.showLoading({
            title: "正在加载",
            mask: !0,
            success: function() {
                wx.checkSession({
                    success: function() {},
                    fail: function() {
                        a.userLogin(a);
                    }
                }), e.getUserInfo(a);
            },
            complete: function() {
                setTimeout(function() {
                    wx.hideLoading(), wx.stopPullDownRefresh();
                }, 1e3);
            }
        }), e.mobileBind(a, s.openId, 1), a.userListInfo();
    },
    toCredit: function(e) {
        wx.navigateTo({
            url: "../../shop/pages/credit-index/credit-index"
        });
    },
    getUserInfo: function(t) {
        var a = this, s = this;
        console.log("+++++"), "getUserInfo:ok" == t.detail.errMsg && (s.setData({
            grant: !0
        }), wx.getSetting({
            success: function(s) {
                1 == s.authSetting["scope.userInfo"] && e.userLogin(t.detail, {
                    success: function() {
                        a.setData({
                            typestatus: "location",
                            loading: !1
                        }), wx.reLaunch({
                            url: e.globalData.pages.mine_index
                        });
                    }
                });
            }
        }));
    },
    success: function() {
        wx.reLaunch({
            url: e.globalData.pages.index,
            success: function() {}
        });
    }
});