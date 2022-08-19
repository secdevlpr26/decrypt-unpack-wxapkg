var e, t = getApp();

Page({
    data: {
        tempFilePaths: [],
        tempFilePaths1: [],
        orderid: "",
        result: ""
    },
    onLoad: function(a) {
        (e = this).setData({
            orderid: a.id
        }), wx.request({
            url: t.data.lost + "/index/orderUpload2",
            method: "GET",
            dataType: "html",
            data: {
                id: e.data.orderid,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                if ("0" == a.result) wx.showToast({
                    title: "操作异常",
                    icon: "none",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "../orderIntro/orderIntro?id=" + e.data.orderid
                    });
                }, 1800); else {
                    e.setData({
                        result: a.result
                    });
                    var o = new Array();
                    o[0] = a.result.box_image, e.setData({
                        tempFilePaths: o
                    }), o[0] = a.result.seal_image, e.setData({
                        tempFilePaths1: o
                    });
                }
            }
        });
    },
    formSubmit: function(a) {
        a.detail.value.id = e.data.orderid, wx.request({
            url: t.data.lost + "/index/ckno2",
            method: "GET",
            dataType: "html",
            data: {
                cntrno: a.detail.value.box_num,
                id: a.detail.value.id
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                "1" == o.data ? wx.request({
                    url: t.data.lost + "/index/orderUploadForm",
                    method: "POST",
                    dataType: "html",
                    data: a.detail.value,
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        "1" == t.data ? (wx.showToast({
                            title: "提交成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateTo({
                                url: "../orderIntro/orderIntro?id=" + e.data.orderid
                            });
                        }, 1500)) : wx.showToast({
                            title: "提交失败",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                }) : "2" == o.data ? wx.showToast({
                    title: "箱号已被使用，请核对",
                    icon: "none",
                    duration: 2e3
                }) : wx.showToast({
                    title: "箱号格式不对",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    upload: function() {
        var e = this;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var o = a.tempFilePaths;
                e.setData({
                    tempFilePaths: o
                }), wx.uploadFile({
                    url: t.data.lost + "/index/orderuploads",
                    filePath: o[0],
                    name: "file",
                    formData: {
                        type: "1",
                        jy_user_id: e.data.jy_user_id,
                        id: e.data.orderid
                    },
                    success: function(e) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    upload1: function() {
        var e = this;
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var o = a.tempFilePaths;
                e.setData({
                    tempFilePaths1: o
                }), wx.uploadFile({
                    url: t.data.lost + "/index/orderuploads",
                    filePath: o[0],
                    name: "file",
                    formData: {
                        type: "2",
                        jy_user_id: e.data.jy_user_id,
                        id: e.data.orderid
                    },
                    success: function(e) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        });
                    }
                });
            }
        });
    },
    listenerButtonPreviewImage: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePaths[t],
            urls: a.data.tempFilePaths
        });
    },
    listenerButtonPreviewImage1: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePaths1[t],
            urls: a.data.tempFilePaths1
        });
    }
});