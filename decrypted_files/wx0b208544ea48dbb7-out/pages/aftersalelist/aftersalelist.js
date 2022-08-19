var t = getApp(), a = t.globalData.config.base;

Page({
    data: {
        isLoad: !0,
        orderList: [],
        page: 1,
        orderType: ""
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getList(1);
    },
    onHide: function() {},
    onUnload: function() {},
    getList: function(e) {
        var n = t.globalData.userKey, i = this;
        wx.showNavigationBarLoading(), wx.request({
            url: a + "index.php/Mobile/UserApi/return_list",
            method: "GET",
            data: {
                userkey: n,
                page: 1
            },
            header: {
                "content-type": "application"
            },
            success: function(t) {
                console.log("============="), console.log(t);
                var a = [];
                1 == e ? (a = t.data.data, e++) : (a = i.data.list.concat(t.data.data), e++), i.setData({
                    list: a,
                    page: e
                }), wx.hideNavigationBarLoading();
            }
        });
    },
    toInfo: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../aftersaledetail/aftersaledetail?id=" + a
        });
    },
    toComment: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../comment/comment?orderId=" + a
        });
    },
    handoverType: function(t) {
        var a = t.currentTarget.dataset.type;
        this.setData({
            orderType: a,
            isLoad: !0,
            page: 1
        }), this.getOrderList(1);
    },
    loadMore: function() {
        var t = this.data.page;
        this.getOrderList(t);
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    }
});