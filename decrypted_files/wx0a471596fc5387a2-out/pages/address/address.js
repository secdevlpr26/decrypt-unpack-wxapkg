var e = getApp();

Page({
    data: {
        hostUrl: e.globalData.hostUrl,
        consignee: "",
        cellphone: "",
        address: "",
        id: 0
    },
    onLoad: function(e) {
        var t = this;
        e.id > 0 && t.getAddress(e.id);
    },
    getAddress: function(t) {
        var a = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getAddress",
                userId: wx.getStorageSync("userId"),
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                "" != e.data && a.setData({
                    CONSIGNEE: e.data.rows[0].CONSIGNEE,
                    CELLPHONE: e.data.rows[0].CELLPHONE,
                    ADDRESS: e.data.rows[0].ADDRESS,
                    ID: e.data.rows[0].ID
                });
            }
        });
    },
    formSubmit: function(t) {
        0 == t.detail.value.consignee.length || 0 == t.detail.value.cellphone.length ? wx.showToast({
            title: "不得为空!",
            icon: "loading",
            duration: 1500
        }) : wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "addAddress",
                userId: wx.getStorageSync("userId"),
                id: t.detail.value.id,
                consignee: t.detail.value.consignee,
                cellphone: t.detail.value.cellphone,
                address: t.detail.value.address,
                is_default: 0
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                0 == e.data.status ? wx.showToast({
                    title: "提交成功!",
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