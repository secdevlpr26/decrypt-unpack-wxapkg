var e, o = require("../../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        displayy_0: "none",
        chengedColor: "#666",
        cardName: "至尊七折卡",
        storeName: "",
        cardStatus: "已开通",
        httpUrl: a,
        cardNumber: "",
        date: "",
        time: "",
        userName: "",
        tele: "",
        age: 0,
        quxiao: !0
    },
    ohShitfadeOut: function() {
        var o = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(o);
        }, 3e3);
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(t) {
        console.error("---------options----", t), 0 == t.saoma && this.setData({
            saoma: !0
        }), e = this, o.getShareInfos(e, a), o.setCompanyId(e, t), o.setStoreId(e), o.setStoreInfo(e), 
        o.setStoreName(e), wx.getStorage({
            key: "userId",
            success: function(o) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: a + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: o.data,
                                storeId: t.data
                            },
                            success: function(o) {
                                e.setData({
                                    prerogative: o.data.vipcardPrerogativeBeanList
                                });
                                var a = o.data.color;
                                e.chengeColor(a), "0" == o.data.state ? e.setData({
                                    cardName: o.data.vipCardName,
                                    cardInfos: o.data,
                                    forceCardId: o.data.id,
                                    status: "已开通",
                                    state: !0,
                                    cardCode: o.data.equityCardCode,
                                    activateTime: o.data.activateTime,
                                    overTime: o.data.overTime
                                }) : (e.setData({
                                    cardName: o.data.vipCardName,
                                    cardInfos: o.data,
                                    forceCardId: o.data.id,
                                    status: "已过期",
                                    state: !1,
                                    cardCode: o.data.equityCardCode,
                                    activateTime: o.data.activateTime,
                                    overTime: o.data.overTime
                                }), e.setData({
                                    displayy_0: "block",
                                    carname_0: "请重新购买权益卡",
                                    titlename_0: "权益卡已过期"
                                }));
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), o.getTkInfos(e, a), 
            o.playMusic(e, a);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    o.conSocket(e.data, a);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        o.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
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
    receiveForceCard: function() {
        wx.redirectTo({
            url: "../receiveForceCard/receiveForceCard"
        });
    },
    chkOrder_0: function() {
        e.receiveForceCard();
    },
    chengeColor: function(o) {
        "Color010" == o && e.setData({
            chengedColor: "#63b359"
        }), "Color020" == o && e.setData({
            chengedColor: "#2c9f67"
        }), "Color030" == o && e.setData({
            chengedColor: "#509fc9"
        }), "Color040" == o && e.setData({
            chengedColor: "#5885cf"
        }), "Color050" == o && e.setData({
            chengedColor: "#9062c0"
        }), "Color060" == o && e.setData({
            chengedColor: "#d09a45"
        }), "Color070" == o && e.setData({
            chengedColor: "#e4b138"
        }), "Color080" == o && e.setData({
            chengedColor: "#ee903c"
        }), "Color081" == o && e.setData({
            chengedColor: "#f08500"
        }), "Color082" == o && e.setData({
            chengedColor: "#a9d92d"
        }), "Color090" == o && e.setData({
            chengedColor: "#dd6549"
        }), "Color100" == o && e.setData({
            chengedColor: "#cc463d"
        }), "Color101" == o && e.setData({
            chengedColor: "#cf3e36"
        }), "Color102" == o && e.setData({
            chengedColor: "#5E6671"
        });
    },
    quxiao: function(o) {
        e.setData({
            quxiao: !1
        });
    }
});