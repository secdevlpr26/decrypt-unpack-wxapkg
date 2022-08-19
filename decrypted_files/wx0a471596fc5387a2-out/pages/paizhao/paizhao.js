require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js");

var e = getApp();

Page({
    data: {
        hostUrl: e.globalData.hostUrl,
        isRefresh: !1,
        ls_tj: 0
    },
    onLoad: function(e) {
        var t = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? wx.scanCode({
            onlyFromCamera: !0,
            success: function(e) {
                console.log(e), t.setData({
                    scanCodeMsg: e.result,
                    id: e.result
                }), t.getOrderFj(e.result);
            }
        }) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(e) {
                e.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : e.cancel;
            }
        });
    },
    onReady: function() {},
    bindChooiceProduct: function() {
        var t = this, a = t.data.id;
        if (console.log(a), "undefined" == a || "" == a || null == a) wx.showToast({
            title: "单号为空!",
            icon: "loading",
            duration: 1500
        }), wx.scanCode({
            onlyFromCamera: !0,
            success: function(e) {
                console.log(e), t.setData({
                    scanCodeMsg: e.result,
                    id: e.result
                }), t.getOrderFj(e.result);
            }
        }); else {
            var o = wx.getStorageSync("userId");
            null != o && o > 0 && "" != o && "undefined" != a && wx.chooseImage({
                count: 10,
                sizeType: [ "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(a) {
                    var s = a.tempFilePaths;
                    wx.showToast({
                        title: "正在上传...",
                        icon: "loading",
                        mask: !0,
                        duration: 2e3
                    }), console.log(s);
                    for (var n = 0, r = t.data.id, i = 0, c = s.length; i < c; i++) wx.uploadFile({
                        url: e.globalData.uploadUrl1,
                        filePath: s[i],
                        name: "uploadfile_ant",
                        userId: wx.getStorageSync("userId"),
                        formData: {
                            imgIndex: i,
                            userId: JSON.stringify(o),
                            id: r
                        },
                        header: {
                            "Content-Type": "multipart/form-data"
                        },
                        success: function(e) {
                            n++, t.getOrderFj(r), n == s.length && wx.hideToast();
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
        }
    },
    deleteImage: function(t) {
        var a = this, o = a.data.getOrderFj, s = a.data.id, n = t.currentTarget.dataset.index;
        console.log(t.currentTarget.dataset), console.log(n), console.log(o[n].SEQ), wx.showModal({
            title: "提示",
            content: "确定要删除此图片吗？",
            success: function(t) {
                if (t.confirm) wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "deletetp",
                        userId: wx.getStorageSync("userId"),
                        seq: o[n].SEQ,
                        id: s
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        0 == e.data.status ? wx.showToast({
                            title: "删除成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                console.log(s), a.getOrderFj(s);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), a.getOrderFj(s));
                    }
                }); else if (t.cancel) return !1;
                a.setData({
                    images: o
                });
            }
        });
    },
    getOrderFj: function(t) {
        var a = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getOrderFj",
                userId: wx.getStorageSync("userId"),
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if ("" != e.data) {
                    for (var t = [], o = 0; o < e.data.rows.length; o++) "jpg" != e.data.rows[o].LX && "bmp" != e.data.rows[o].LX && "png" != e.data.rows[o].LX && "gif" != e.data.rows[o].LX || (t = t.concat((e.data.rows[o].WEB + "/upload/Annex/" + e.data.rows[o].FILENAME).split(",")));
                    a.setData({
                        getOrderFj: e.data.rows,
                        pictures: t
                    });
                } else a.setData({
                    getOrderFj: ""
                });
            }
        });
    },
    imgYu: function(e) {
        var t = e.currentTarget.dataset.src;
        e.currentTarget.dataset.list;
        wx.previewImage({
            current: t,
            urls: this.data.pictures
        });
    },
    onShow: function(e) {
        var t = this;
        1 == this.data.isRefresh && t.getAddressList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});