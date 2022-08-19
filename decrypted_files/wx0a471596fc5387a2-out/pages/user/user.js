var e = getApp();

Page({
    data: {
        user: {
            HEADIMGURL: e.globalData.hostUrl + "/images/touxiang.png",
            username: "昵称",
            userMoney: "",
            userscore: ""
        },
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        isPay: 0,
        isDelivery: 0,
        hostUrl: e.globalData.hostUrl,
        isReceiving: 0,
        isTransaction: 0,
        photos: "",
        hidden: !0,
        productInfo: {},
        lx: ""
    },
    update: function() {
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(t) {
                console.log(t.hasUpdate), t.hasUpdate && (e.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "有新的功能发布，请手工升级？",
                        success: function(t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    },
    bindChooiceProduct: function() {
        var t = this, o = wx.getStorageSync("userId");
        console.log("用户ID：" + o), null != o && o > 0 && "" != o && wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(n) {
                var a = n.tempFilePaths;
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                }), console.log(a);
                for (var s = 0, c = 0, i = a.length; c < i; c++) console.log(c), console.log(a[c]), 
                wx.uploadFile({
                    url: e.globalData.uploadUrl,
                    filePath: a[c],
                    name: "uploadfile_ant",
                    userId: wx.getStorageSync("userId"),
                    formData: {
                        imgIndex: c,
                        userId: JSON.stringify(o)
                    },
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(e) {
                        s++, t.getUser(o), s == a.length && wx.hideToast();
                    },
                    fail: function(e) {
                        wx.hideToast(), wx.showModal({
                            title: "错误提示",
                            content: "上传图片失败",
                            showCancel: !1,
                            success: function(e) {}
                        });
                    }
                });
            }
        });
    },
    onLoad: function(e) {
        var t = this;
        t.update(1);
        var o = wx.getStorageSync("userId");
        null != o && o > 0 && "" != o && t.getUser(o);
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.getStorageSync("userId");
        e.getArticlePage1();
    },
    getUser: function(t) {
        var o = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getUser",
                userId: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                "" != e.data && o.setData({
                    user: e.data.rows[0],
                    canIUse: !1
                });
            }
        });
    },
    getArticlePage1: function(t) {
        var o = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 61,
                page: 1,
                size: 40
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                "" != e.data && o.setData({
                    article: e.data.rows
                });
            }
        });
    },
    calling: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.mobile,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.getStorageSync("userId");
        wx.stopPullDownRefresh();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindGetUserInfo: function(t) {
        var o = this;
        t && e.getUserLogin(function(e) {
            console.log(e), e && (o.getUser(e), o.getYsdRed(e), o.setData({
                canIUse: !1
            }));
        });
    }
});