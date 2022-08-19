var t = getApp();

Page({
    data: {
        content: "",
        ruleNull: !1
    },
    onLoad: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "dis_getRecruitionByAppId.action",
            data: {
                appId: t.globalData.projectInfo.appId
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                console.log(o), wx.setNavigationBarTitle({
                    title: o.title
                }), a.setData({
                    content: o.description,
                    ruleNull: "" == o.description
                });
            }
        });
    }
});