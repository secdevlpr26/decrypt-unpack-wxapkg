var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl
    },
    onLoad: function(t) {
        var e = this, s = wx.getStorageSync("userId");
        null != s && s > 0 && "" != s ? e.getAddressList() : wx.showModal({
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
                opt: "getAddressList",
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
    select: function(t) {
        t.currentTarget.dataset.id;
        var e = getCurrentPages(), s = e[e.length - 1];
        e[e.length - 2].setData({
            recommended_code: s.data.addressList[0].CELLPHONE,
            address: s.data.addressList[0].ADDRESS
        }), wx.navigateBack();
    },
    addAddress: function() {
        wx.redirectTo({
            url: "/pages/address/address?id=0"
        });
    },
    edit: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/address/address?id=" + e
        });
    },
    delete: function(e) {
        var s = this, a = e.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "deleteAddress",
                id: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        s.getAddressList();
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    radio: function(e) {
        var s = e.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "defaultAddress",
                id: s,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/selectAddress/selectAddress"
                        });
                    }
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