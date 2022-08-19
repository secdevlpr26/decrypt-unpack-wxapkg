var e, t = getApp().globalData.httpUrl;

Page({
    data: {
        code: "",
        id: "",
        couponType: "",
        couponName: "",
        favourDetail: "",
        useNotice: "",
        validityType: "",
        validityBegin: "",
        validityEnd: "",
        dcdj: !0,
        displayy: "none"
    },
    onLoad: function(t) {
        e = this, wx.getStorage({
            key: "codee",
            success: function(t) {
                var a = t.data;
                e.setData({
                    code: a
                });
            }
        }), wx.removeStorage({
            key: "codee",
            success: function(e) {}
        }), wx.getStorage({
            key: "id",
            success: function(t) {
                var a = t.data;
                e.setData({
                    id: a
                }), "" != a && e.details();
            }
        });
    },
    details: function() {
        var a = e.data.id;
        wx.request({
            url: t + "skcouponmodel/selCouponInfoOnlyWX",
            data: {
                id: a
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = t.data.couponType, o = t.data.couponName, n = t.data.favourDetail, c = t.data.useNotice, d = t.data.validityType, s = t.data.validityBegin, i = t.data.validityEnd;
                e.setData({
                    couponType: a,
                    couponName: o,
                    favourDetail: n,
                    useNotice: c,
                    validityType: d,
                    validityBegin: s,
                    validityEnd: i
                });
            }
        });
    },
    lqyh: function() {
        e = this, wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        console.log("zhezala+++++++", a, o), wx.request({
                            url: t + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: o.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                "v" == a.data.wechatUserStoreIdentity ? e.data.dcdj && (e.setData({
                                    dcdj: !1
                                }), wx.getStorage({
                                    key: "userId",
                                    success: function(a) {
                                        wx.getStorage({
                                            key: "putId",
                                            success: function(o) {
                                                wx.getStorage({
                                                    key: "cardId",
                                                    success: function(n) {
                                                        wx.getStorage({
                                                            key: "storeId",
                                                            success: function(c) {
                                                                wx.getStorage({
                                                                    key: "formId",
                                                                    success: function(d) {
                                                                        wx.request({
                                                                            url: t + "skcouponmodel/voucher",
                                                                            data: {
                                                                                userId: a.data,
                                                                                putId: o.data,
                                                                                cardId: n.data,
                                                                                storeId: c.data,
                                                                                formId: d
                                                                            },
                                                                            method: "POST",
                                                                            header: {
                                                                                "content-type": "application/x-www-form-urlencoded"
                                                                            },
                                                                            success: function(t) {
                                                                                e.setData({
                                                                                    displayy: "block",
                                                                                    titlename: "恭喜",
                                                                                    carname: "已领取一张优惠券"
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })) : e.setData({
                                    displayy: "block",
                                    carname: "请先领卡",
                                    carbtn: "1"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    chkOrder0_1: function() {
        wx.navigateBack({});
    },
    chkOrder1_1: function() {
        wx.navigateBack({});
    },
    resumee: function() {
        e.setData({
            displayy: "none"
        });
    },
    chkOrder0: function() {
        wx.getStorage({
            key: "vipCard",
            success: function(t) {
                console.log(t, "++++++++++这是啥"), 1 == t.data.isExistence ? (wx.redirectTo({
                    url: "../myCard/myCard"
                }), e.setData({
                    displayy: "none"
                })) : e.setData({
                    displayy: "block",
                    carname: "暂无会员卡可领",
                    carbtn: "2"
                });
            }
        });
    },
    chkOrderr: function() {
        e.setData({
            displayy: "none"
        });
    },
    fh: function() {
        wx.navigateBack({});
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});