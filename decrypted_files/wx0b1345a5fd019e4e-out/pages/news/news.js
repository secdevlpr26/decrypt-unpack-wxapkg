var e = getApp();

Page({
    data: {
        projectType: e.globalData.projectInfo.projectType
    },
    onLoad: function(e) {
        var o = {
            enterprise: "layout-meirong",
            meirong: "layout-meirong"
        }[this.data.projectType] || "layout-o2o", r = [];
        for (var t in e) r.push(t + "=" + e[t]);
        "layout-meirong" == o ? wx.switchTab({
            url: o + "/news",
            fail: function() {
                wx.redirectTo({
                    url: o + "/news"
                });
            }
        }) : wx.redirectTo({
            url: o + "/news?" + r.join("&")
        });
    }
});