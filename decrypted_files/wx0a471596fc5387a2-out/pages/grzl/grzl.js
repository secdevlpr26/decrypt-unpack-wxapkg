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
                opt: "getGrxx_changchang",
                userId: wx.getStorageSync("userId"),
                where: ""
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && "" != t.data && e.setData({
                    YSXMBM: t.data.rows[0].BJCODE,
                    YSXMMC: t.data.rows[0].BJNAME,
                    YSXMMXBH: t.data.rows[0].STCODE,
                    YSXMMXMC: t.data.rows[0].STNAME,
                    username: t.data.rows[0].USERNAME
                });
            }
        });
    },
    selectysxmbm: function(t) {
        wx.navigateTo({
            url: "../ysxmbm/ysxmbm?index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmmxbh: function(t) {
        wx.navigateTo({
            url: "../ysxmmxbh/ysxmmxbh?ysxmbm=" + t.currentTarget.dataset.ysxmbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    formSubmit: function(e) {
        var a = this;
        console.log(a.data.ysxmbm), 1 == e.detail.value.ysxmbm.length || 1 == e.detail.value.ysxmmxbh.length || 0 == e.detail.value.username.length ? wx.showToast({
            title: "不得为空!",
            icon: "loading",
            duration: 1500
        }) : wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "bdst",
                userId: wx.getStorageSync("userId"),
                shopcode: e.detail.value.ysxmbm,
                username: e.detail.value.username,
                password: e.detail.value.ysxmmxbh
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status && wx.showToast({
                    title: "提交成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/user/user"
                        });
                    }
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