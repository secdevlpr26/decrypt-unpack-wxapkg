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
        userListInfo: [ {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/home.png",
            text: "收货地址管理",
            pagePath: "../../shop/pages/select-address/index"
        }, {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/iconfont-card.png",
            text: "我的优惠券",
            pagePath: "../../shop/pages/my-coupon/my-coupon"
        }, {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/lists.png",
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
        }, {
            bindNav: "cartList",
            icon: e.globalData.fileimg + "images/aboutme.png",
            text: "关于我们",
            pagePath: "../../shop/pages/aboutme/aboutme"
        } ]
    },
    cartList: function(t) {
        if (null != e.globalData.session_login_id && "" != e.globalData.session_login_id && void 0 != e.globalData.session_login_id) {
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
        wx.showLoading({
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
        var t = this.data.userListInfo;
        for (var a in t) t[a].text == e && t.splice(a, 1);
    },
    userListInfo: function() {
        for (var t = this, a = t.data.orderoption, o = 0; o < a.length; o++) a[o].goodsNum = 0;
        var s = t.data.userListInfo;
        setTimeout(function() {
            wx.showLoading({
                title: "正在加载"
            }), wx.request({
                url: e.globalData.url + e.globalData.parameter + "&r=member.wxapp_getmember",
                header: {
                    Cookie: e.globalData.session_login_id
                },
                success: function(o) {
                    var s = o.data.result.member;
                    if (0 == o.data.result.member) return t.setData({
                        grant: !1
                    }), !1;
                    t.setData({
                        grant: !0
                    }), "" != s.realname && "" != s.mobile && "" != s.weixin ? t.setData({
                        over: !0
                    }) : t.setData({
                        over: !1
                    });
                    var i = o.data.result.statics;
                    a[0].goodsNum = i.order_0, a[0].goodsNum > 99 && (a[0].goodsNum = "99+"), a[3].goodsNum = i.order_4, 
                    a[3].goodsNum > 99 && (a[3].goodsNum = "99+"), a[1].goodsNum = i.order_1, a[1].goodsNum > 99 && (a[1].goodsNum = "99+"), 
                    a[2].goodsNum = i.order_2, a[2].goodsNum > 99 && (a[2].goodsNum = "99+");
                    var n = t.data.userListInfo;
                    if (o.data.result.open_commission) {
                        var r = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/fenxiao.png",
                            text: "分销中心",
                            pagePath: "../../shop/pages/distribution/index"
                        };
                        t.isInArray(n, "分销中心") || n.unshift(r);
                    } else t.deleteInfo("分销中心");
                    if (o.data.result.open_diyreserve) {
                        var g = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/icon-signColor.png",
                            text: "我的预约",
                            pagePath: "../../shop/pages/diyreserve/my-reserve/index"
                        };
                        t.isInArray(n, "我的预约") || n.unshift(g);
                    } else t.deleteInfo("我的预约");
                    if (o.data.result.open_groups) {
                        var l = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/my_teams.png",
                            text: "我的团",
                            pagePath: "../../groups/pages/my_teams/index"
                        }, u = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/pintuan-order.png",
                            text: "拼团订单",
                            pagePath: "../../groups/pages/pintuan-order-list/index"
                        };
                        t.isInArray(n, "我的团") || n.unshift(l), t.isInArray(n, "拼团订单") || n.unshift(u);
                    } else t.deleteInfo("我的团"), t.deleteInfo("拼团订单");
                    if (o.data.result.apply_openmobile) {
                        var c = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/agent.png",
                            text: "商户入驻中心",
                            phoneNum: "",
                            pagePath: "../../shop/pages/applyForMulti-business/index"
                        };
                        t.isInArray(n, "商户入驻中心") || n.unshift(c);
                    } else t.deleteInfo("商户入驻中心");
                    if (o.data.result.open_vpscard) {
                        var d = {
                            bindNav: "cartList",
                            icon: "/images/ic_card.png",
                            text: "计次卡",
                            phoneNum: "",
                            pagePath: "/page/shop/pages/countingcard_list/index"
                        };
                        t.isInArray(n, "计次卡") || n.unshift(d);
                    } else t.deleteInfo("计次卡");
                    if (o.data.result.open_sign) {
                        var p = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/icon-signColor.png",
                            text: "积分签到",
                            pagePath: "../../shop/pages/credit-sign/credit-sign"
                        };
                        t.isInArray(n, "积分签到") || n.unshift(p);
                    } else t.deleteInfo("积分签到");
                    if (o.data.result.open_help) {
                        var f = {
                            bindNav: "cartList",
                            icon: e.globalData.fileimg + "images/help-center.png",
                            text: "帮助中心",
                            pagePath: "../../shop/pages/help-cen/index"
                        };
                        t.isInArray(n, "帮助中心") || n.push(f);
                    } else t.deleteInfo("帮助中心");
                    t.setData({
                        orderoption: a,
                        member: o.data.result.member,
                        closerecharge: o.data.result.closerecharge,
                        closeexchange: o.data.result.closeexchange,
                        userListInfo: n,
                        level: o.data.result.level
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            }), wx.request({
                url: e.globalData.url + e.globalData.parameter + "&r=member.favorite.get_list&page=1&_=1498182482647",
                header: {
                    Cookie: e.globalData.session_login_id
                },
                success: function(e) {
                    s[2].focusNum = e.data.result.list.length, 0 == s[2].focusNum ? (s[2].focusNum = "", 
                    t.setData({
                        userListInfo: s
                    })) : t.setData({
                        userListInfo: s
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
        var a = this, o = wx.getStorageSync("userInfo");
        null == o && e.userLogin(), wx.showLoading({
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
        }), e.mobileBind(a, o.openId, 1), a.userListInfo();
    },
    toCredit: function(e) {
        wx.navigateTo({
            url: "../../shop/pages/credit-index/credit-index"
        });
    },
    getUserInfo: function(t) {
        var a = this, o = this;
        console.log("+++++"), "getUserInfo:ok" == t.detail.errMsg && (o.setData({
            grant: !0
        }), wx.getSetting({
            success: function(o) {
                1 == o.authSetting["scope.userInfo"] && e.userLogin(t.detail, {
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