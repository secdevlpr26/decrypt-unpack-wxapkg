var a = getApp();

Page({
    data: {
        hostUrl: a.globalData.hostUrl,
        gsname: "",
        tell: "",
        address: "",
        gsxh: "",
        bank: "",
        zh: "",
        id: 0
    },
    onLoad: function(a) {
        var t = this;
        a.id > 0 && t.getAddress(a.id);
    },
    getAddress: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getGrzh",
                userId: wx.getStorageSync("userId"),
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                "" != a.data && e.setData({
                    gsname: a.data.rows[0].GSNAME,
                    gsxh: a.data.rows[0].GSXH,
                    tell: a.data.rows[0].TELL,
                    address: a.data.rows[0].ADDRESS,
                    bank: a.data.rows[0].BANK,
                    zh: a.data.rows[0].ZH,
                    id: a.data.rows[0].ID
                });
            }
        });
    },
    formSubmit: function(t) {
        0 == t.detail.value.gsname.length || 0 == t.detail.value.bank.length || 0 == t.detail.value.zh.length ? wx.showToast({
            title: "不得为空!",
            icon: "loading",
            duration: 1500
        }) : wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "addGrzh",
                userId: wx.getStorageSync("userId"),
                id: t.detail.value.id,
                gsname: t.detail.value.gsname,
                gsxh: t.detail.value.gsxh,
                address: t.detail.value.address,
                tell: t.detail.value.tell,
                bank: t.detail.value.bank,
                zh: t.detail.value.zh,
                is_default: 0
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                0 == a.data.status ? wx.showToast({
                    title: "提交成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/selectGrzh/selectGrzh"
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