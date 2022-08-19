var t = getApp(), a = 1, o = 1;

Page({
    data: {
        bookingList: [],
        styleConfig: t.globalData.styleConfig
    },
    onLoad: function(t) {
        this.getBookingList();
    },
    onShow: function() {},
    getBookingList: function() {
        var i = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getFlexiFormValueList.action",
            data: {
                customizeTabId: t.globalData.customizeTabId["Flexi-Form-Booking"],
                current: o,
                memberId: t.getMemberId()
            },
            success: function(o) {
                var e = t.getJsonData(o.data);
                a = e.pages, e.pageList.shift(), console.log(e.pageList), i.setData({
                    bookingList: i.data.bookingList.concat(e.pageList)
                });
            }
        });
    },
    bhtap: function(t) {
        wx.navigateTo({
            url: "../../product/beforehand/bh-detail/bh-detail?id=" + t.currentTarget.dataset.id
        });
    },
    onReachBottom: function() {
        o < a && (o++, this.getBookingList());
    }
});