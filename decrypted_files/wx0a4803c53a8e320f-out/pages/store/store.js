var o = getApp();

Page({
    data: {
        projectType: o.globalData.projectInfo.projectType,
        isPerson: o.globalData.isPerson
    },
    onLoad: function() {
        var o = {
            education: "layout-o2o",
            meirong: "layout-meirong",
            o2o: "layout-o2o",
            "o2o-shop": "layout-o2o",
            restaurant: "",
            "restaurant-multi": "layout-meirong",
            tmall: "layout-o2o"
        }[this.data.projectType] || "layout-o2o";
        "tmall" == this.data.projectType || this.data.isPerson ? wx.redirectTo({
            url: o + "/store"
        }) : wx.switchTab({
            url: o + "/store",
            fail: function() {
                wx.redirectTo({
                    url: o + "/store"
                });
            }
        });
    }
});