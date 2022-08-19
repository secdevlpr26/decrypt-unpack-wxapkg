var t = require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js"), a = getApp();

Page({
    data: {
        hostUrl: a.globalData.hostUrl,
        ssdw: "",
        zh: "",
        khh: "",
        fkzt: "",
        sh: "",
        sqje: 0,
        id: 0,
        bz: "",
        ywrq: "",
        lcbm: "",
        djlx: ""
    },
    onLoad: function(e) {
        var s = this;
        console.log(e), s.setData({
            sqje: 0,
            lcbm: e.lcbm,
            zrzxbm: e.zrzxbm,
            zrzxmc: e.zrzxmc,
            djlx: e.djlx,
            ywrq: t.formatdata(new Date())
        }), "0" != e.id ? (s.getAddress(e.id), s.getOrderFj(e.id)) : (wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getId",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if ("" != t.data) {
                    var a = t.data.split(",");
                    s.setData({
                        id: a[0],
                        lrr: a[1],
                        lrrmc: a[2]
                    });
                }
            }
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getmorenzh",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && s.setData({
                    ssdw: t.data.rows[0].GSNAME,
                    zh: t.data.rows[0].ZH,
                    sh: t.data.rows[0].GSXH,
                    khh: t.data.rows[0].BANK
                });
            }
        }));
    },
    getOrderFj: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getOrderFj",
                userId: wx.getStorageSync("userId"),
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if ("" != t.data) {
                    for (var a = [], s = 0; s < t.data.rows.length; s++) "jpg" != t.data.rows[s].LX && "bmp" != t.data.rows[s].LX && "png" != t.data.rows[s].LX && "gif" != t.data.rows[s].LX || (a = a.concat((t.data.rows[s].WEB + "/upload/Annex/" + t.data.rows[s].FILENAME).split(",")));
                    e.setData({
                        getOrderFj: t.data.rows,
                        pictures: a
                    });
                } else e.setData({
                    getOrderFj: ""
                });
            }
        });
    },
    imgYu: function(t) {
        var a = t.currentTarget.dataset.src;
        t.currentTarget.dataset.list;
        wx.previewImage({
            current: a,
            urls: this.data.pictures
        });
    },
    getAddress: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getjkd",
                userId: wx.getStorageSync("userId"),
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), "" != t.data && e.setData({
                    ssdw: t.data.rows[0].SSDW,
                    fkzt: t.data.rows[0].FKZT,
                    zh: t.data.rows[0].ZH,
                    sh: t.data.rows[0].SH,
                    khh: t.data.rows[0].KHH,
                    sqje: t.data.rows[0].SQJE,
                    bz: t.data.rows[0].BZ,
                    id: t.data.rows[0].ID,
                    lrr: t.data.rows[0].LRR,
                    lrrmc: t.data.rows[0].LRRMC,
                    zrzxbm: t.data.rows[0].ZRZXBM,
                    zrzxmc: t.data.rows[0].ZRZXMC,
                    ywrq: t.data.rows[0].YWRQ
                });
            }
        });
    },
    datePickerBindchange: function(t) {
        this.setData({
            ywrq: t.detail.value
        });
    },
    formSubmit: function(t) {
        var e = this;
        0 == t.detail.value.sqje.length || 0 == t.detail.value.fkzt.length || 0 == t.detail.value.sqje ? wx.showToast({
            title: "不得为空!",
            icon: "loading",
            duration: 1500
        }) : (console.log(e.data.djlx), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "addjkd",
                userId: wx.getStorageSync("userId"),
                id: t.detail.value.id,
                ssdw: t.detail.value.ssdw,
                zh: t.detail.value.zh,
                sh: t.detail.value.sh,
                khh: t.detail.value.khh,
                lrr: t.detail.value.lrr,
                lrrmc: t.detail.value.lrrmc,
                zrzxbm: e.data.zrzxbm,
                zrzxmc: e.data.zrzxmc,
                sqje: t.detail.value.sqje,
                bz: t.detail.value.bz,
                fkzt: t.detail.value.fkzt,
                ywrq: e.data.ywrq,
                is_default: 0,
                lcbm: e.data.lcbm,
                lx: e.data.djlx
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
                        var t = getCurrentPages();
                        t[t.length - 2].setData({
                            isRefresh: !0
                        }), wx.navigateBack({
                            url: "/pages/jkd/jkd"
                        });
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                }) : wx.showToast({
                    title: "余额不足:" + t.data.message,
                    icon: "loading",
                    duration: 1500
                });
            }
        }));
    },
    addAddress: function() {
        wx.navigateTo({
            url: "/pages/selectFpxx/selectFpxx"
        });
    },
    bindChooiceProduct: function() {
        var t = this, e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e && wx.chooseImage({
            count: 10,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(s) {
                var o = s.tempFilePaths;
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                }), console.log(o);
                for (var r = 0, d = t.data.id, n = 0, l = o.length; n < l; n++) wx.uploadFile({
                    url: a.globalData.uploadUrl1,
                    filePath: o[n],
                    name: "uploadfile_ant",
                    userId: wx.getStorageSync("userId"),
                    formData: {
                        imgIndex: n,
                        userId: JSON.stringify(e),
                        id: d
                    },
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(a) {
                        r++, t.getOrderFj(d), r == o.length && wx.hideToast();
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
    },
    deleteImage: function(t) {
        var e = this, s = e.data.getOrderFj, o = e.data.id, r = t.currentTarget.dataset.index;
        console.log(t.currentTarget.dataset), console.log(r), console.log(s[r].SEQ), wx.showModal({
            title: "提示",
            content: "确定要删除此图片吗？",
            success: function(t) {
                if (t.confirm) wx.request({
                    url: a.globalData.apiUrl,
                    data: {
                        opt: "deletetp",
                        userId: wx.getStorageSync("userId"),
                        seq: s[r].SEQ,
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
                                console.log(o), e.getOrderFj(o);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), e.getOrderFj(o));
                    }
                }); else if (t.cancel) return !1;
                e.setData({
                    images: s
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