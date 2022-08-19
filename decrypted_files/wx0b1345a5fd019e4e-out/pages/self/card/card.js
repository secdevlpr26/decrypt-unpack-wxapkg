var a = getApp(), e = "", t = "";

Page({
    data: {
        isShowGetCard: !0,
        cardImage: "",
        cardNo: "",
        preMoney: "",
        isloading: !0
    },
    onLoad: function(o) {
        e = a.globalData.projectInfo, t = a.globalData.customizeTabId, this.getRechargeDetail();
        var r = this;
        wx.request({
            url: a.globalData.comUrl + "mctab_getElectronicsCard.action",
            data: {
                appId: e.appId,
                webApp: "1"
            },
            success: function(e) {
                var t = a.getJsonData(e.data);
                r.setData({
                    cardImage: t.background
                });
            }
        });
    },
    onShow: function() {
        t = a.globalData.customizeTabId, this.getUserInfo();
    },
    getRechargeDetail: function() {
        wx.request({
            url: a.globalData.comUrl + "mctab_getMoneyRecord.action",
            data: {
                memberId: a.getMemberId(),
                type: "1",
                current: "1"
            },
            success: function(a) {
                console.log(a.data);
            }
        });
    },
    getUserInfo: function() {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: a.getMemberId(),
                customizetabId: t.LynxApplyFor_About_Merchant
            },
            success: function(t) {
                var o = a.getJsonData(t.data);
                e.setData({
                    preMoney: o.preMoney,
                    isloading: !1
                }), o.cardNo && e.setData({
                    isShowGetCard: !1,
                    cardNo: o.cardNo
                }), wx.hideToast();
            },
            fail: function() {
                a.hint();
            }
        });
    },
    toPrestoreMoney: function() {
        wx.navigateTo({
            url: "prestore-money/prestore-money"
        });
    },
    toPrestoreRule: function() {
        wx.navigateTo({
            url: "prestore-rule/prestore-rule"
        });
    },
    getCard: function() {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "mctab_regElectronicsMember.action",
            data: {
                memberId: a.getMemberId()
            },
            success: function(t) {
                var o = a.getJsonData(t.data);
                wx.showToast({
                    title: "领取成功",
                    icon: "success"
                }), e.setData({
                    cardNo: o.cardNo,
                    isShowGetCard: !1
                });
            }
        });
    }
});