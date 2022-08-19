var a = getApp();

Page({
    data: {
        photo_url: a.globalData.fileimg,
        parents: [],
        children: [],
        curIndex: 0,
        display: "block",
        hiddenLoading: !1
    },
    onPullDownRefresh: function(a) {
        this.onLoad();
    },
    onLoad: function() {
        var t = this;
        t.setData({
            hiddenLoading: !1
        });
        a.globalData.merchid;
        var e = a.globalData.url + a.globalData.parameter + "&r=shop.abc";
        wx.request({
            url: e,
            method: "GET",
            data: {},
            header: {
                Accept: "application/json"
            },
            success: function(a) {
                1 == a.data.status && t.setData({
                    hiddenLoading: !0,
                    parents: a.data.result.parent[0],
                    children: a.data.result.children,
                    grandchildren: a.data.result.grandchildren,
                    curNav: "" != a.data.result.parent ? a.data.result.parent[0][0].id : ""
                });
            },
            complete: function(a) {
                wx.stopPullDownRefresh(), wx.hideLoading && wx.hideLoading();
            }
        });
    },
    onShow: function() {},
    switchRightTab: function(a) {
        var t = a.target.dataset.id, e = parseInt(a.target.dataset.index);
        this.setData({
            curNav: t,
            curIndex: e,
            display: "block"
        });
    }
});