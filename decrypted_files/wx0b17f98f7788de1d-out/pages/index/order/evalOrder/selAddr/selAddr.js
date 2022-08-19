var e, t = require("../../../../../utils/util.js"), s = getApp().globalData.httpUrl;

Page({
    data: {
        receivingAddresses: [],
        onshow: !1,
        takeOutDispatchType: "",
        ddj: !0
    },
    onLoad: function(a) {
        e = this, wx.getStorage({
            key: "takeOutDispatchType",
            success: function(t) {
                e.setData({
                    takeOutDispatchType: t.data
                });
            }
        }), t.getShareInfos(e, s), t.setCompanyId(e, a), t.setStoreId(e);
        var o = a.addressType;
        console.log("addressType" + o);
        var d = a.selId;
        e.setData({
            addressType: o,
            checkId: d
        }), console.log("checkId ==>" + d), e.getAddressInfo(d);
    },
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(s) {
            console.log("===========接收到服务器信息=============="), console.log(s.data), t.getTkInfos(e, s), 
            t.playMusic(e, s);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, s);
                }
            });
        }), wx.getStorage({
            key: "onshow",
            success: function(t) {
                1 == t.data && (wx.setStorage({
                    key: "onshow",
                    data: !1
                }), console.log("我进来啦啊啊啊"), wx.getStorage({
                    key: "addressType",
                    success: function(t) {
                        wx.getStorage({
                            key: "checkId",
                            success: function(s) {
                                t.data;
                                var a = s.data;
                                console.log("一次还是两次=====>" + a), e.getAddressInfo(a);
                            }
                        });
                    }
                }));
            }
        });
    },
    onUnload: function() {
        t.closeSock();
    },
    onShareAppMessage: function() {
        return {
            title: e.data.shareTitle,
            desc: "",
            imageUrl: e.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    getAddressInfo: function(t) {
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        wx.request({
                            url: s + "skmembermodel/getAddress",
                            data: {
                                wechatUserAddressWechatUserId: a.data,
                                storeId: o.data,
                                identification: 1,
                                dispatching: e.data.takeOutDispatchType
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(s) {
                                console.log("res-----", s.data), console.log("why=====>" + t), console.log("为啥呢" + s.data[t]), 
                                e.setData({
                                    receivingAddresses: s.data[t]
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    tianJaDizhi: function() {
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                var s = t;
                wx.setStorage({
                    key: "jwd",
                    data: s
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../../../../user/shippingAddress/addAddress/addAddress?type=" + e.data.addressType + "&selId=" + e.data.checkId
                    });
                }, 100), console.log(t);
            },
            fail: function(e) {
                console.log("为嘛获取不到经纬===》", e);
            }
        });
    },
    goDetail: function(t) {
        if (e.data.ddj) {
            e.setData({
                ddj: !1
            });
            var a = t.currentTarget.dataset.clickIndex, o = e.data.receivingAddresses;
            console.log(a), console.log(o);
            var d = o[a].wechatUserAddressReceiverName, r = o[a].wechatUserAddressReceiverPhoneNum, c = o[a].wechatUserAddressFullAddress, n = o[a].wechatUserAddressAddress, i = o[a].deliveryPrice;
            console.log("地址的省市区======>" + n);
            var u = o[a].wechatUserAddressId;
            wx.setStorage({
                key: "weAddressId",
                data: u
            }), 0 == e.data.takeOutDispatchType ? wx.getStorage({
                key: "orderId",
                success: function(t) {
                    wx.getStorage({
                        key: "beizhu",
                        success: function(a) {
                            console.log("=======地址获取111=========", t, a), wx.request({
                                url: s + "skordermodel/updTakeOutOrder",
                                data: {
                                    addressId: u,
                                    orderRemarke: a.data,
                                    id: t.data,
                                    distributionFee: i
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    console.log("=====地址获取=====", t), wx.setStorage({
                                        key: "deliveryPrice",
                                        data: i
                                    }), setTimeout(function() {
                                        e.setData({
                                            ddj: !1
                                        });
                                        var t = getCurrentPages();
                                        t[t.length - 2].setData({
                                            peisongfei: i
                                        }), wx.navigateBack({
                                            delta: "1"
                                        });
                                    }, 100);
                                }
                            });
                        }
                    });
                }
            }) : wx.getStorage({
                key: "storeId",
                success: function(t) {
                    wx.request({
                        url: s + "skordermodel/selDistributionFee",
                        data: {
                            addressId: u,
                            storeId: t.data
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            var a = t.data.result, o = a;
                            wx.getStorage({
                                key: "orderId",
                                success: function(t) {
                                    wx.getStorage({
                                        key: "beizhu",
                                        success: function(d) {
                                            console.log("=======地址获取111=========", t, d), wx.request({
                                                url: s + "skordermodel/updTakeOutOrder",
                                                data: {
                                                    addressId: u,
                                                    orderRemarke: d.data,
                                                    id: t.data,
                                                    distributionFee: o
                                                },
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                success: function(t) {
                                                    console.log("=====地址获取=====", t), wx.setStorage({
                                                        key: "deliveryPrice",
                                                        data: a
                                                    }), setTimeout(function() {
                                                        e.setData({
                                                            ddj: !1
                                                        });
                                                        var t = getCurrentPages();
                                                        t[t.length - 2].setData({
                                                            peisongfei: a
                                                        }), wx.navigateBack({
                                                            delta: "1"
                                                        });
                                                    }, 100);
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }), wx.setStorage({
                key: "receiverNotes",
                data: {
                    wechatUserAddressReceiverName: d,
                    wechatUserAddressReceiverPhoneNum: r,
                    wechatUserAddressFullAddress: c,
                    wechatUserAddressAddress: n,
                    addressId: u
                }
            });
        }
    }
});