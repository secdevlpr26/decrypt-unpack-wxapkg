var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        gsname: "",
        tell: "",
        address: "",
        username: "",
        zc: "",
        zw: "",
        id: 0
    },
    onLoad: function(t) {
        var e = this, a = t.index;
        e.setData({
            index: a
        }), e.getOrderFj(t.id), 1 == a && wx.setNavigationBarTitle({
            title: "实训报名表"
        }), 2 == a && wx.setNavigationBarTitle({
            title: "申请考试"
        }), 3 == a && wx.setNavigationBarTitle({
            title: "申请预算专员证书"
        }), 4 == a && wx.setNavigationBarTitle({
            title: "申请标准版"
        }), t.id > 0 && (e.getAddress(t.id), e.getAddress(t.id));
    },
    getAddress: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getsqsx",
                userId: wx.getStorageSync("userId"),
                id: e,
                lx: a.data.index
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    gsname: t.data.rows[0].GSNAME,
                    username: t.data.rows[0].USERNAME,
                    tell: t.data.rows[0].TELL,
                    address: t.data.rows[0].ADDRESS,
                    zw: t.data.rows[0].ZW,
                    zc: t.data.rows[0].ZC,
                    id: t.data.rows[0].ID
                });
            }
        });
    },
    formSubmit: function(e) {
        var a = this;
        0 == e.detail.value.username.length || 0 == e.detail.value.zw.length || 0 == e.detail.value.tell.length ? wx.showToast({
            title: "不得为空!",
            icon: "loading",
            duration: 1500
        }) : wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "addsqsx",
                userId: wx.getStorageSync("userId"),
                id: e.detail.value.id,
                gsname: e.detail.value.gsname,
                username: e.detail.value.username,
                address: e.detail.value.address,
                tell: e.detail.value.tell,
                zw: e.detail.value.zw,
                zc: e.detail.value.zc,
                is_default: 0,
                lx: a.data.index
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                2 != t.data.status ? 0 == t.data.status ? wx.showToast({
                    title: "提交成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.redirectTo({
                            url: "/pages/sqsx/sqsx?index=" + a.data.index
                        });
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                }) : wx.showToast({
                    title: "还不是学员！",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    imgYu: function(t) {
        var e = t.currentTarget.dataset.src;
        t.currentTarget.dataset.list;
        wx.previewImage({
            current: e,
            urls: this.data.pictures
        });
    },
    imgYu1: function(t) {
        wx.downloadFile({
            url: "https://www.e-zksx.com:444/预算专员证书注册表.docx",
            success: function(t) {
                var e = t.tempFilePath;
                wx.openDocument({
                    filePath: e,
                    success: function(t) {
                        console.log("打开文档成功");
                    }
                });
            }
        });
    },
    onReady: function() {},
    bindChooiceProduct: function() {
        var e = this, a = e.data.id;
        if (console.log(a), "undefined" == a || "" == a || null == a) wx.showToast({
            title: "先提交再上传!",
            icon: "loading",
            duration: 1500
        }); else {
            var s = wx.getStorageSync("userId");
            null != s && s > 0 && "" != s && "undefined" != a && wx.chooseImage({
                count: 10,
                sizeType: [ "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(a) {
                    var o = a.tempFilePaths;
                    wx.showToast({
                        title: "正在上传...",
                        icon: "loading",
                        mask: !0,
                        duration: 2e3
                    }), console.log(o);
                    for (var n = 0, i = e.data.id, d = 0, r = o.length; d < r; d++) wx.uploadFile({
                        url: t.globalData.uploadUrl1,
                        filePath: o[d],
                        name: "uploadfile_ant",
                        userId: wx.getStorageSync("userId"),
                        formData: {
                            imgIndex: d,
                            userId: JSON.stringify(s),
                            id: i
                        },
                        header: {
                            "Content-Type": "multipart/form-data"
                        },
                        success: function(t) {
                            n++, e.getOrderFj(i), n == o.length && wx.hideToast();
                        },
                        fail: function(t) {
                            wx.hideToast(), wx.showModal({
                                title: "错误提示",
                                content: "上传图片失败",
                                showCancel: !1,
                                success: function(t) {}
                            });
                        }
                    });
                }
            });
        }
    },
    deleteImage: function(e) {
        var a = this, s = a.data.getOrderFj, o = a.data.id, n = e.currentTarget.dataset.index;
        console.log(e.currentTarget.dataset), console.log(n), console.log(s[n].SEQ), wx.showModal({
            title: "提示",
            content: "确定要删除此图片吗？",
            success: function(e) {
                if (e.confirm) wx.request({
                    url: t.globalData.apiUrl,
                    data: {
                        opt: "deletetp",
                        userId: wx.getStorageSync("userId"),
                        seq: s[n].SEQ,
                        id: o
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        0 == t.data.status ? wx.showToast({
                            title: "删除成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                console.log(o), a.getOrderFj(o);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), a.getOrderFj(o));
                    }
                }); else if (e.cancel) return !1;
                a.setData({
                    images: s
                });
            }
        });
    },
    getOrderFj: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderFj",
                userId: wx.getStorageSync("userId"),
                id: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if ("" != t.data) {
                    for (var e = [], s = 0; s < t.data.rows.length; s++) "jpg" != t.data.rows[s].LX && "bmp" != t.data.rows[s].LX && "png" != t.data.rows[s].LX && "gif" != t.data.rows[s].LX || (e = e.concat((t.data.rows[s].WEB + "/upload/Annex/" + t.data.rows[s].FILENAME).split(",")));
                    a.setData({
                        getOrderFj: t.data.rows,
                        pictures: e
                    });
                } else a.setData({
                    getOrderFj: ""
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});