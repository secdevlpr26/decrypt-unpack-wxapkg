var e, t, a = getApp();

Page({
    data: {
        tempFilePaths: [],
        tempFilePath1: [],
        tempFilePath2: [],
        tempFilePath3: [],
        tempFilePath4: [],
        tempFilePath5: [],
        mobile: "",
        certification: ""
    },
    onLoad: function(i) {
        e = this, t = wx.getStorageSync("mobile");
        var o = wx.getStorageSync("jy_user_id");
        e.setData({
            jy_user_id: o
        }), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: t
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                0 == a.userinfo.certification ? e.setData({
                    certification: "未认证"
                }) : 1 == a.userinfo.certification ? e.setData({
                    certification: "已认证"
                }) : -1 == a.userinfo.certification && e.setData({
                    certification: "待审核"
                });
                var i = new Array();
                i[0] = a.userinfo.identification, e.setData({
                    tempFilePath1: i
                }), i[0] = a.userinfo.identification_2, e.setData({
                    tempFilePath2: i
                }), i[0] = a.userinfo.driving_licence, e.setData({
                    tempFilePath3: i
                }), i[0] = a.userinfo.travel_licence, e.setData({
                    tempFilePath4: i
                }), i[0] = a.userinfo.travel_licence_2, e.setData({
                    tempFilePath5: i
                }), e.setData({
                    mobile: a.userinfo.mobile
                });
            }
        });
    },
    upload1: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var i = t.tempFilePaths;
                e.setData({
                    tempFilePaths1: i
                }), wx.uploadFile({
                    url: a.data.lost + "/index/certimg",
                    filePath: i[0],
                    name: "file",
                    formData: {
                        type: "1",
                        jy_user_id: e.data.jy_user_id
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            e.onLoad();
                        }, 2e3);
                    }
                });
            }
        });
    },
    upload2: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var i = t.tempFilePaths;
                e.setData({
                    tempFilePath2: i
                }), wx.uploadFile({
                    url: a.data.lost + "/index/certimg",
                    filePath: i[0],
                    name: "file",
                    formData: {
                        type: "2",
                        jy_user_id: e.data.jy_user_id
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            e.onLoad();
                        }, 2e3);
                    }
                });
            }
        });
    },
    upload3: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var i = t.tempFilePaths;
                e.setData({
                    tempFilePath3: i
                }), wx.uploadFile({
                    url: a.data.lost + "/index/certimg",
                    filePath: i[0],
                    name: "file",
                    formData: {
                        type: "3",
                        jy_user_id: e.data.jy_user_id
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            e.onLoad();
                        }, 2e3);
                    }
                });
            }
        });
    },
    upload4: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var i = t.tempFilePaths;
                e.setData({
                    tempFilePath4: i
                }), wx.uploadFile({
                    url: a.data.lost + "/index/certimg",
                    filePath: i[0],
                    name: "file",
                    formData: {
                        type: "4",
                        jy_user_id: e.data.jy_user_id
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            e.onLoad();
                        }, 2e3);
                    }
                });
            }
        });
    },
    upload5: function() {
        wx.chooseImage({
            count: 9,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 1e3
                });
                var i = t.tempFilePaths;
                e.setData({
                    tempFilePath5: i
                }), wx.uploadFile({
                    url: a.data.lost + "/index/certimg",
                    filePath: i[0],
                    name: "file",
                    formData: {
                        type: "5",
                        jy_user_id: e.data.jy_user_id
                    },
                    success: function(t) {
                        wx.showToast({
                            title: "上传成功",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            e.onLoad();
                        }, 2e3);
                    }
                });
            }
        });
    },
    listenerButtonPreviewImage1: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePath1[t],
            urls: a.data.tempFilePath1
        });
    },
    listenerButtonPreviewImage2: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePath2[t],
            urls: a.data.tempFilePath2
        });
    },
    listenerButtonPreviewImage3: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePath3[t],
            urls: a.data.tempFilePath3
        });
    },
    listenerButtonPreviewImage4: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePath4[t],
            urls: a.data.tempFilePath4
        });
    },
    listenerButtonPreviewImage5: function(e) {
        var t = e.target.dataset.index, a = this;
        wx.previewImage({
            current: a.data.tempFilePath5[t],
            urls: a.data.tempFilePath5
        });
    },
    onenter: function(e) {
        wx.switchTab({
            url: "../info/info"
        });
    }
});