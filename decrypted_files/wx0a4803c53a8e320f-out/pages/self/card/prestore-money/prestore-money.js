var e = getApp(), t = "", a = "";

Page({
    data: {
        preMoney: 0
    },
    onShow: function() {
        a = e.globalData.customizeTabId, t = e.globalData.projectInfo, this.getUserInfo();
    },
    onLoad: function() {},
    getUserInfo: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getMember.action",
            data: {
                memberId: e.getMemberId(),
                customizetabId: a.LynxApplyFor_About_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    preMoney: o.preMoney
                }), wx.hideToast();
            },
            fail: function() {
                e.hint();
            }
        });
    },
    toRecharge: function() {
        wx.navigateTo({
            url: "../recharge/recharge"
        });
    },
    toDetail: function() {
        wx.navigateTo({
            url: "../prestore-detail/prestore-detail"
        });
    }
});