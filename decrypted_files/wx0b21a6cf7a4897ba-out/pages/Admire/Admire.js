var t = getApp();

Page({
    data: {
        url: ""
    },
    onLoad: function() {
        this.getAppreciateUrl();
    },
    getAppreciateUrl: function() {
        var a = this;
        t.apiRequestGet({
            urlMethod: "api/Users/getAppreciateUrl",
            data: {},
            success: function(t) {
                null != t.data && a.setData({
                    url: t.data.url
                });
            },
            fail: function(t) {}
        });
    },
    getScanCode: function() {
        wx.previewImage({
            urls: this.data.url.split(",")
        });
    },
    toZan: function() {
        this.getScanCode();
    }
});