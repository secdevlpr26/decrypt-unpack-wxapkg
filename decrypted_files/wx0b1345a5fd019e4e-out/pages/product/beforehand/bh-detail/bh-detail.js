var t = getApp();

Page({
    data: {
        detailList: [],
        styleConfig: t.globalData.styleConfig
    },
    onLoad: function(t) {
        this.getBookingDetail(t.id);
    },
    getBookingDetail: function(a) {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getFlexiFormDetail.action",
            data: {
                id: a,
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                console.log(e), i.setData({
                    detailList: e.flexiFormVoList
                });
            }
        });
    },
    toHome: function() {
        wx.switchTab({
            url: "../../../index/index"
        });
    }
});