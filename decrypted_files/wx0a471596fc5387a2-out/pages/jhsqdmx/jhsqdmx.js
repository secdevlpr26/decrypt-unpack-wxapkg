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
    selectzrzxbm: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=ZRZXBM&index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmmxbh: function(t) {
        wx.navigateTo({
            url: "../selectspbm/selectspbm?nf=" + this.data.nf + "&lcbm=" + this.data.lcbm + "&zrzxbm=" + t.currentTarget.dataset.zrzxbm + "&ysxmbm=" + t.currentTarget.dataset.ysxmbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    getAddressList: function() {
        var a = this, s = a.data.page + 1;
        wx.request({
            url: e.globalData.apiUrl,
            data: t({
                opt: "getjhsqdmxList",
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
                opt: "addjhsqdmx",
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
        var a = this, s = t.currentTarget.dataset.id, r = t.currentTarget.dataset.bh;
        wx.showModal({
            title: "删除明细",
            content: "单号：" + s + "明细：" + r + ",请确认？",
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
                        bh: r,
                        table: "cggl_sgd_mx",
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
    tijiao: function(t) {
        var a = this, s = (t.currentTarget.dataset.index, t.currentTarget.dataset.id), r = t.currentTarget.dataset.bh, n = t.currentTarget.dataset.zrzxbm, o = t.currentTarget.dataset.ysxmbm, i = (t.currentTarget.dataset.ysxmmxbh, 
        t.currentTarget.dataset.ysxmmxmc), d = t.currentTarget.dataset.gg, c = t.currentTarget.dataset.xh, u = t.currentTarget.dataset.sqje, l = t.currentTarget.dataset.czje, g = t.currentTarget.dataset.zy, h = t.currentTarget.dataset.bz, x = t.currentTarget.dataset.ywrq;
        null != o && "" != o ? 0 != u && null != u ? 1 != a.data.ls_tj ? wx.showModal({
            title: "保存明细",
            content: "单号：" + s + "编号：" + r + ",请确认？",
            success: function(t) {
                t.confirm && (a.setData({
                    ls_tj: 1
                }), wx.showToast({
                    title: "保存中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "updatejhsqmx",
                        id: s,
                        lx: "cg",
                        bh: r,
                        zrzxbm: n,
                        ysxmbm: o,
                        ysxmmxmc: i,
                        sqje: u,
                        czje: l,
                        zy: g,
                        bz: h,
                        gg: d,
                        xh: c,
                        ywrq: x,
                        userId: wx.getStorageSync("userId")
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        var e = getCurrentPages();
                        e[e.length - 1];
                        e[e.length - 2].getAddressList(), console.log(t.data.status), 0 == t.data.status ? wx.showToast({
                            title: "保存成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                a.getAddressList(), a.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 1 == t.data.status && wx.showToast({
                            title: "保存失败!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                a.getAddressList(), a.setData({
                                    ls_tj: 0
                                });
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
            title: "数量为0",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "请选择存货",
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
    inputgg: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].GG";
        this.setData(t({}, a, e.detail.value));
    },
    inputxh: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].XH";
        this.setData(t({}, a, e.detail.value));
    },
    inputbz: function(e) {
        var a = "addressList[" + e.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, a, e.detail.value));
    },
    onReady: function() {},
    bindChooiceProduct: function() {
        var t = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a && wx.chooseImage({
            count: 10,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(s) {
                var r = s.tempFilePaths;
                wx.showToast({
                    title: "正在上传...",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                }), console.log(r);
                for (var n = 0, o = t.data.id, i = 0, d = r.length; i < d; i++) wx.uploadFile({
                    url: e.globalData.uploadUrl1,
                    filePath: r[i],
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
                        n++, t.getOrderFj(o), n == r.length && wx.hideToast();
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
        var a = this, s = a.data.getOrderFj, r = a.data.id, n = t.currentTarget.dataset.index;
        console.log(t.currentTarget.dataset), console.log(n), console.log(s[n].SEQ), wx.showModal({
            title: "提示",
            content: "确定要删除此图片吗？",
            success: function(t) {
                if (t.confirm) wx.request({
                    url: e.globalData.apiUrl,
                    data: {
                        opt: "deletetp",
                        userId: wx.getStorageSync("userId"),
                        seq: s[n].SEQ,
                        id: r
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
                                console.log(r), a.getOrderFj(r);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), a.getOrderFj(r));
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