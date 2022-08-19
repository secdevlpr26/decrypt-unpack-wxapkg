function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js");

var e = getApp();

Page({
    data: {
        hostUrl: e.globalData.hostUrl,
        isRefresh: !1,
        ls_tj: 0
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            djlx: t.djlx,
            djmc: t.djmc,
            lcbm: t.lcbm,
            nf: t.nf,
            zrzxbm: t.zrzxbm,
            zrzxmc: t.zrzxmc,
            ztbm: t.ztbm,
            ls_tj: 0,
            list: [],
            page: 0,
            id: t.id,
            ls_lr: !1,
            hj: t.sqje
        });
        var a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? (e.getAddressList(), e.getOrderFj(t.id), e.getOrderZh(t.id, t.ztbm)) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getOrderZh: function(t, a) {
        var s = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "getOrderZh",
                userId: wx.getStorageSync("userId"),
                ztbm: a,
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), "" != t.data ? s.setData({
                    orderzhList: t.data.rows
                }) : s.setData({
                    orderzhList: ""
                });
            }
        });
    },
    selectzh: function(t) {
        wx.navigateTo({
            url: "/pages/selectFpxx/selectFpxx?index=" + t.currentTarget.dataset.index
        });
    },
    selectzrzxbm: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=ZRZXBM&index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmbm: function(t) {
        wx.navigateTo({
            url: "../ysxmbm/ysxmbm?nf=" + this.data.nf + "&lx1=1&lcbm=" + this.data.lcbm + "&zrzxbm=" + t.currentTarget.dataset.zrzxbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmmxbh: function(t) {
        wx.navigateTo({
            url: "../ysxmmxbh/ysxmmxbh?nf=" + this.data.nf + "&lcbm=" + this.data.lcbm + "&zrzxbm=" + t.currentTarget.dataset.zrzxbm + "&ysxmbm=" + t.currentTarget.dataset.ysxmbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    getAddressList: function() {
        var a = this, s = a.data.page + 1;
        wx.request({
            url: e.globalData.apiUrl,
            data: t({
                opt: "getyssydmxList",
                userId: wx.getStorageSync("userId"),
                where: "",
                page: s,
                size: 6,
                lx: a.data.lcbm,
                id: a.data.id
            }, "userId", wx.getStorageSync("userId")),
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? (a.setData({
                    addressList: t.data.rows
                }), a.sethj()) : (a.setData({
                    addressList: ""
                }), a.sethj());
            }
        });
    },
    addAddress: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "addyssydmx",
                userId: wx.getStorageSync("userId"),
                id: t.data.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e.data.status), 0 == e.data.status && (t.getAddressList(), wx.showToast({
                    title: "新增了一条",
                    icon: "loading",
                    duration: 1e3
                }));
            }
        });
    },
    delete: function(t) {
        var a = this, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.bh;
        wx.showModal({
            title: "删除明细",
            content: "单号：" + s + "明细：" + n + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "deleteyssydmx",
                        id: s,
                        bh: n,
                        table: "yssy_mx",
                        userId: wx.getStorageSync("userId")
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
                                a.getAddressList();
                            }
                        }) : wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        });
                    }
                }));
            }
        });
    },
    tijiao: function(a) {
        var s = this, n = "addressList[" + a.currentTarget.dataset.index + "].CZJE", r = a.currentTarget.dataset.id, o = a.currentTarget.dataset.bh, i = a.currentTarget.dataset.zrzxbm, d = a.currentTarget.dataset.ysxmbm, c = a.currentTarget.dataset.ysxmmxbh, u = a.currentTarget.dataset.ysxmmxmc, l = a.currentTarget.dataset.sqje, g = a.currentTarget.dataset.czje, h = a.currentTarget.dataset.zy, x = a.currentTarget.dataset.bz, w = a.currentTarget.dataset.ywrq;
        null != d && "" != d ? null != c && "" != c ? 0 != l && null != l ? 1 != s.data.ls_tj ? wx.showModal({
            title: "保存明细",
            content: "单号：" + r + "编号：" + o + ",请确认？",
            success: function(a) {
                a.confirm && (s.setData({
                    ls_tj: 1
                }), wx.showToast({
                    title: "保存中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "updateyssymx",
                        id: r,
                        lx: "cg",
                        bh: o,
                        zrzxbm: i,
                        ysxmbm: d,
                        ysxmmxbh: c,
                        ysxmmxmc: u,
                        sqje: l,
                        czje: g,
                        zy: h,
                        bz: x,
                        ywrq: w,
                        userId: wx.getStorageSync("userId")
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        var a = getCurrentPages();
                        a[a.length - 1];
                        a[a.length - 2].getAddressList(), console.log(e.data.status), 0 == e.data.status ? wx.showToast({
                            title: "保存成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 1 == e.data.status ? wx.showToast({
                            title: "保存失败!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 2 == e.data.status ? wx.showToast({
                            title: "预算不足已清0!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 3 == e.data.status ? wx.showToast({
                            title: "启用了准备金!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 4 == e.data.status ? wx.showToast({
                            title: "预算不足，调整了金额!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 5 == e.data.status && wx.showToast({
                            title: "冲帐金额错误",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.setData(t({
                                    ls_tj: 0
                                }, n, 0));
                            }
                        });
                    }
                }));
            }
        }) : wx.showToast({
            title: "亲，请等等",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "金额为0",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "请选择预算明细",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "请选择预算项目",
            icon: "loading",
            duration: 1500
        });
    },
    sethj: function() {
        var t = 0;
        if (this.data.addressList.length > 0) for (var e = 0; e < this.data.addressList.length; e++) t += parseFloat(this.data.addressList[e].SQJE);
        this.setData({
            hj: t.toFixed(2)
        });
    },
    inputsqje: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].SQJE";
        this.setData(t({}, a, e.detail.value));
    },
    inputczje: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].CZJE";
        this.setData(t({}, a, e.detail.value));
    },
    inputbz: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, a, e.detail.value));
    },
    inputzy: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].ZY";
        this.setData(t({}, a, e.detail.value));
    },
    inputskr: function(e) {
        var a = "orderzhList[" + e.currentTarget.dataset.index + "].SKR";
        this.setData(t({}, a, e.detail.value));
    },
    inputkhh: function(e) {
        var a = "orderzhList[" + e.currentTarget.dataset.index + "].KHH";
        this.setData(t({}, a, e.detail.value));
    },
    inputzh: function(e) {
        var a = "orderzhList[" + e.currentTarget.dataset.index + "].ZH";
        this.setData(t({}, a, e.detail.value));
    },
    inputje: function(e) {
        var a = "orderzhList[" + e.currentTarget.dataset.index + "].JE";
        this.setData(t({}, a, e.detail.value));
    },
    savezf: function(t) {
        var a = t.currentTarget.dataset.id, s = t.currentTarget.dataset.khh, n = t.currentTarget.dataset.skr, r = t.currentTarget.dataset.zh, o = t.currentTarget.dataset.je;
        console.log(r), 0 != o && null != o ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "savezhzf",
                id: a,
                skr: n,
                khh: s,
                zh: r,
                je: o,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "保存成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {}
                }) : wx.showToast({
                    title: "保存失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        })) : wx.showToast({
            title: "金额为0",
            icon: "loading",
            duration: 1500
        });
    },
    addzf: function(t) {
        var a = this, s = a.data.id;
        console.log(s), wx.showToast({
            title: "新增中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "addzhzf",
                id: s,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "新增成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        a.getOrderZh(a.data.id, a.data.ztbm);
                    }
                }) : wx.showToast({
                    title: "新增失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    deletezf: function(t) {
        var a = this, s = t.currentTarget.dataset.id;
        wx.showModal({
            title: "删除明细",
            content: "单号：" + a.data.id + "明细：" + s + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "deletezhzf",
                        id: s,
                        userId: wx.getStorageSync("userId")
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
                                a.getOrderZh(a.data.id, a.data.ztbm);
                            }
                        }) : wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        });
                    }
                }));
            }
        });
    },
    onReady: function() {},
    bindChooiceProduct: function() {
        var t = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a && wx.chooseImage({
            count: 10,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(s) {
                var n = s.tempFilePaths;
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                }), console.log(n);
                for (var r = 0, o = t.data.id, i = 0, d = n.length; i < d; i++) wx.uploadFile({
                    url: e.globalData.uploadUrl1,
                    filePath: n[i],
                    name: "uploadfile_ant",
                    userId: wx.getStorageSync("userId"),
                    formData: {
                        imgIndex: i,
                        userId: JSON.stringify(a),
                        id: o
                    },
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(e) {
                        r++, t.getOrderFj(o), r == n.length && wx.hideToast();
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
        var a = this, s = a.data.getOrderFj, n = a.data.id, r = t.currentTarget.dataset.index;
        console.log(t.currentTarget.dataset), console.log(r), console.log(s[r].SEQ), wx.showModal({
            title: "提示",
            content: "确定要删除此图片吗？",
            success: function(t) {
                if (t.confirm) wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "deletetp",
                        userId: wx.getStorageSync("userId"),
                        seq: s[r].SEQ,
                        id: n
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
                                console.log(n), a.getOrderFj(n);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), a.getOrderFj(n));
                    }
                }); else if (t.cancel) return !1;
                a.setData({
                    images: s
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
    imgYu: function(t) {
        var e = t.currentTarget.dataset.src;
        t.currentTarget.dataset.list;
        wx.previewImage({
            current: e,
            urls: this.data.pictures
        });
    },
    onShow: function(t) {
        var e = this;
        1 == this.data.isRefresh && e.getAddressList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});