(function(t) {
    t && t.__esModule;
})(require("../../utils/api")), getApp();

Page({
    data: {},
    onLoad: function() {
        var t = wx.getStorageSync("openCitys");
        this.setData({
            openCitys: t
        });
    },
    changeCity: function(t) {
        wx.setStorageSync("currCity", t.currentTarget.dataset.name), wx.navigateBack();
    }
});