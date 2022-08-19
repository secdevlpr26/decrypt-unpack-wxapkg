var e, a, t = getApp(), o = t.globalData.config.base;

Page({
    data: {},
    onLoad: function(e) {
        a = e;
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || a.upperuid)
        };
    },
    onShow: function() {
        if (a && a.phone) {
            var i = this;
            this.setData({
                userInfo: t.globalData.userInfo.userInfo,
                config: t.globalData.config
            }), wx.showLoading(), wx.request({
                url: o + "Mobile/UserApi/agent_apply",
                data: {
                    userkey: t.globalData.userKey,
                    mobile: a.phone
                },
                success: function(s) {
                    wx.request({
                        url: o + "Mobile/UserApi/getupperuid",
                        data: {
                            userkey: t.globalData.userKey,
                            mobile: a.phone
                        },
                        success: function(a) {
                            wx.hideLoading(), a && a.data && 0 === a.data.error ? (e.saveUpperKey(a.data), wx.showToast({
                                title: "申请成功"
                            }), i.renderPage()) : wx.showToast({
                                title: "申请失败，请重试。"
                            });
                        },
                        fail: function() {
                            wx.hideLoading(), wx.showToast({
                                title: "申请分销失败，请重试。"
                            });
                        }
                    });
                },
                fail: function() {
                    wx.hideLoading(), wx.showToast({
                        title: "申请分销失败，请重试。"
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "缺少必要的参数",
            showCancel: !1,
            complete: function() {
                wx.navigateBack();
            }
        });
    },
    saveimg: function() {
        wx.getImageInfo({
            src: o + "Mobile/UserApi/getwxcode?userkey=" + t.globalData.userKey,
            success: function(e) {
                wx.saveImageToPhotosAlbum({
                    filePath: e.path,
                    success: function() {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function() {
                        wx.previewImage({
                            urls: [ o + "Mobile/UserApi/getwxcode?userkey=" + t.globalData.userKey ]
                        });
                    }
                });
            },
            fail: function() {
                wx.previewImage({
                    urls: [ o + "Mobile/UserApi/getwxcode?userkey=" + t.globalData.userKey ]
                });
            }
        }), wx.saveImageToPhotosAlbum();
    },
    renderPage: function() {
        this.setData({
            code: o + "Mobile/UserApi/getwxcode?userkey=" + t.globalData.userKey
        });
    }
}), e = {
    saveUpperKey: function(e) {
        var a, t = e.user_info || {};
        for (a in t) if (a) break;
        a && wx.setStorageSync("myuid", a);
    }
};