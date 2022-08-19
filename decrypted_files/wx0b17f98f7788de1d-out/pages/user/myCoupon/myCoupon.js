var t, e = require("../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        coupones: [],
        nowData: e.formatDate(new Date())
    },
    trimString: function(t) {
        var e = t.split("")[0].split("-");
        return e[0] + e[1] + e[2];
    },
    trimString1: function(t) {
        var e = t.split("年"), a = e[1].split("月"), o = a[1].split("日");
        return e[0] + a[0] + o[0];
    },
    trimString2: function(t) {
        var e = t.split("/"), a = e[2].split(" ");
        return e[0] + e[1] + a[0];
    },
    onLoad: function(o) {
        t = this, e.getShareInfos(t, a), e.setStoreInfo(t), wx.getStorage({
            key: "userId",
            success: function(o) {
                wx.getStorage({
                    key: "companyId",
                    success: function(n) {
                        t.setData({
                            companyId: n.data
                        }), wx.getStorage({
                            key: "storeId",
                            success: function(s) {
                                t.setData({
                                    storeId: s.data
                                }), wx.request({
                                    url: a + "skcouponmodel/selCouponByReceive",
                                    data: {
                                        userId: o.data,
                                        companyId: n.data,
                                        applyStoreId: s.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(a) {
                                        console.log(a.data);
                                        var o = a.data;
                                        for (var n in o) if ("DATE_TYPE_FIX_TERM" == o[n].validityType) {
                                            var s = o[n].receiveTime.split(" ")[0], i = new Date(s), c = new Date(s);
                                            c.setDate(i.getDate() + 1 * o[n].validityBegin), o[n].validityBegin = e.formatDate(c);
                                            var r = new Date(c);
                                            r.setDate(c.getDate() + 1 * o[n].validityEnd), o[n].validityEnd = e.formatDate(r);
                                        }
                                        t.setData({
                                            coupones: a.data
                                        });
                                    }
                                });
                            }
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
        t = this, wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), e.getTkInfos(t, a), 
            e.playMusic(t, a);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(t) {
                    e.conSocket(t.data, a);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        e.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t = this, setTimeout(function() {
            t.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    xq: function(e) {
        var a = e.currentTarget.dataset.idx, o = t.data.coupones[a].id;
        wx.setStorage({
            key: "id",
            data: o
        });
        var n = t.data.coupones[a].code;
        wx.setStorage({
            key: "codee",
            data: n
        }), wx.navigateTo({
            url: "../cardDetail/cardDetail"
        });
    },
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