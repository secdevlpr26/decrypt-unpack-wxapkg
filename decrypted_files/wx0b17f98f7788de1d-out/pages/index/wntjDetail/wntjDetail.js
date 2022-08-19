var t, a = require("../../../utils/util.js"), e = getApp(), o = e.globalData.httpUrl, n = e.globalData.tuhttpUrl;

Page({
    data: {
        infos: [],
        httpUrl: o,
        tuhttpUrl: n,
        noMessage: !1
    },
    onLoad: function(e) {
        t = this, a.getShareInfos(t, o), a.setCompanyId(t, e), a.setStoreId(t), a.setStoreInfo(t), 
        wx.getStorage({
            key: "specialitiesId",
            success: function(a) {
                wx.request({
                    url: o + "skfoodmodel/selFoodByspecialitiesId",
                    data: {
                        specialitiesId: a.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        t.setData({
                            infos: a.data
                        }), console.log(a.data), "" != a.data && null != a.data ? ("" == a.data.foodName || null == a.data.foodName ? t.setData({
                            noFood: !0
                        }) : t.setData({
                            noFoodName: !1
                        }), "" == a.data.introduce || null == a.data.introduce ? t.setData({
                            noIntroduce: !0
                        }) : t.setData({
                            noIntroduce: !1
                        }), "" == a.data.masterials || null == a.data.masterials ? t.setData({
                            noMasterials: !0
                        }) : t.setData({
                            noMasterials: !1
                        }), "" == a.data.imgName || null == a.data.imgName ? t.setData({
                            noImgName: !0
                        }) : t.setData({
                            noImgName: !1
                        }), t.data.noFoodName && t.data.noIntroduce && t.data.noMasterials && t.data.noImgName ? t.setData({
                            noMessage: !0
                        }) : t.setData({
                            noMessage: !1
                        })) : t.setData({
                            noMessage: !0
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        t.setData({
            displa: !1
        });
    },
    onShow: function() {
        t = this, wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), console.log(e.data), a.getTkInfos(t, e), 
            a.playMusic(t, e);
        }), t = this, wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(t) {
                    a.conSocket(t.data, o);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        a.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t = this, setTimeout(function() {
            t.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.data.shareTitle,
            desc: "",
            imageUrl: t.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + t.data.storeId + "&companyId=" + t.data.companyId,
            success: function(t) {
                console.log("转发成功");
            },
            fail: function(t) {
                console.log("转发失败");
            }
        };
    }
});