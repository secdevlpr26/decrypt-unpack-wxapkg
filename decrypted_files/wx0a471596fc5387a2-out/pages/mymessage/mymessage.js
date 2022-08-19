var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? e.getAddressList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getAddressList: function() {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getMessageList",
                userId: wx.getStorageSync("userId"),
                where: ""
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && e.setData({
                    addressList: t.data.rows
                });
            }
        });
    },
    delete: function(e) {
        var a = e.currentTarget.dataset.id, s = wx.getStorageSync("userId");
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "deleteMessage",
                id: a,
                userId: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? (wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3
                }), wx.redirectTo({
                    url: "/pages/mymessage/mymessage"
                })) : 2 == t.data.status ? wx.showToast({
                    title: "已回复不能删除!",
                    icon: "loading",
                    duration: 1500
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});