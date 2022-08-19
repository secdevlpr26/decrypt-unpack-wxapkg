function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), o = e.globalData.config.base;

Page((a = {
    data: {
        isload: !0,
        page: 1,
        commentList: []
    },
    onLoad: function(t) {
        this.setData({
            goodsid: t.id
        }), this.getComment(this.data.page);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    }
}, t(a, "onShareAppMessage", function() {}), t(a, "getComment", function(t) {
    var a = this;
    this.data.isload && (wx.showNavigationBarLoading(), a.setData({
        isload: !1
    }), wx.request({
        url: o + "Mobile/goods/getComment",
        method: "GET",
        header: {
            "content-type": "application"
        },
        data: {
            goods_id: a.data.goodsid,
            commentType: 1,
            p: t
        },
        success: function(e) {
            console.log(e.data.list);
            var o = 0 != e.data.orderStatus, n = [];
            1 != t && (n = a.data.goodsList), o && t++, a.setData({
                commentList: n.concat(e.data.list),
                page: t,
                isload: o
            }), wx.hideNavigationBarLoading();
        }
    }));
}), t(a, "chooseImage", function(t) {
    var a = t.currentTarget.dataset.images;
    wx.previewImage({
        current: "",
        urls: a
    });
}), t(a, "loadMore", function() {
    this.getComment(this.data.page);
}), a));