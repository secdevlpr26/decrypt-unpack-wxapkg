var e = getApp(), a = e.globalData.config.base;

Page({
    data: {},
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    savedata: function(e) {
        var a = e.detail.value + "";
        this.setData({
            phone: a.trim()
        });
    },
    jump: function() {
        var e = this.data.phone;
        e && /^1[34578]\d{9}$/.test(e) ? wx.navigateTo({
            url: "../agent/agent?phone=" + e
        }) : wx.showToast({
            title: "请填写手机号",
            icon: "loading"
        });
    },
    onShow: function() {
        var t = this;
        wx.request({
            url: a + "Mobile/UserApi/isupper",
            data: {
                userkey: e.globalData.userKey
            },
            success: function(o) {
                var s = !1;
                0 == o.data.error && o.data.data && o.data.data.id ? t.setData({
                    isBind: !0
                }) : t.setData({
                    isBind: !1
                }), o.data && o.data.data && 0 === o.data.data.status && (s = !0), t.setData({
                    unuse: s,
                    userInfo: e.globalData.userInfo.userInfo,
                    config: e.globalData.config,
                    code: a + "Mobile/UserApi/getwxcode?userkey=" + e.globalData.userKey
                });
            },
            fail: function() {
                t.setData({
                    unuse: unuse,
                    isBind: !1,
                    userInfo: e.globalData.userInfo.userInfo,
                    config: e.globalData.config,
                    code: a + "Mobile/UserApi/getwxcode?userkey=" + e.globalData.userKey
                });
            }
        });
    },
    saveimg: function() {
        wx.getImageInfo({
            src: a + "Mobile/UserApi/getwxcode?userkey=" + e.globalData.userKey,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function() {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function() {
                        wx.previewImage({
                            urls: [ a + "Mobile/UserApi/getwxcode?userkey=" + e.globalData.userKey ]
                        });
                    }
                });
            },
            fail: function() {
                wx.previewImage({
                    urls: [ a + "Mobile/UserApi/getwxcode?userkey=" + e.globalData.userKey ]
                });
            }
        }), wx.saveImageToPhotosAlbum();
    },
    renderPage: function() {}
});