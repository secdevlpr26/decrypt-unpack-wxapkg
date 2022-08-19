var a = getApp(), t = "";

Page({
    data: {
        rule: ""
    },
    onShow: function() {},
    onLoad: function() {
        t = a.globalData.projectInfo;
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "mctab_getPreExisting.action",
            data: {
                appId: t.appId,
                webApp: 1
            },
            success: function(t) {
                var o = a.getJsonData(t.data);
                e.setData({
                    rule: o.preMoneyRule
                });
            }
        });
    }
});