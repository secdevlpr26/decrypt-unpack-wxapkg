function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js");

var a = getApp();

Page({
    data: {
        hostUrl: a.globalData.hostUrl,
        isRefresh: !1,
        ls_tj: 0,
        tp0: 0,
        tp1: 1,
        tp2: 1,
        tp3: 1,
        tp4: 1
    },
    showFrom: function(t) {
        var a = this, e = t.target.dataset.param, s = t.target.dataset.tp0, n = t.target.dataset.tp1, r = t.target.dataset.tp2, i = t.target.dataset.tp3, d = t.target.dataset.tp4;
        1 == e && 0 == n && a.setData({
            tp1: 1
        }), 1 == e && 1 == n && a.setData({
            tp1: 0
        }), 2 == e && 0 == r && a.setData({
            tp2: 1
        }), 2 == e && 1 == r && a.setData({
            tp2: 0
        }), 3 == e && 0 == i && a.setData({
            tp3: 1
        }), 3 == e && 1 == i && a.setData({
            tp3: 0
        }), 4 == e && 0 == d && a.setData({
            tp4: 1
        }), 4 == e && 1 == d && a.setData({
            tp4: 0
        }), 0 == e && 0 == s && a.setData({
            tp0: 1
        }), 0 == e && 1 == s && a.setData({
            tp0: 0
        });
    },
    onLoad: function(t) {
        var a = this;
        a.setData({
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
        var e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e ? (a.getAddressList(), a.getOrderFj(t.id), a.getOrderZh(t.id, t.ztbm), 
        a.getcl_qt(t.id), a.getcl_jt(t.id), a.getcl_bz(t.id), a.getcl_zs(t.id)) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getcl_qt: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getcl_qt",
                userId: wx.getStorageSync("userId"),
                id: t,
                table: "yssy_cc_qt"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? e.setData({
                    qtList: t.data.rows
                }) : e.setData({
                    qtList: ""
                });
            }
        });
    },
    datePickerBindchange: function(a) {
        var e = "jtList[" + a.currentTarget.dataset.index + "].RQ";
        this.setData(t({}, e, a.detail.value));
    },
    bzKSRQ: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].KSRQ";
        this.setData(t({}, e, a.detail.value));
    },
    bzKSSJ: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].KSSJ";
        this.setData(t({}, e, a.detail.value));
    },
    bzJSRQ: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].JSRQ";
        this.setData(t({}, e, a.detail.value));
    },
    bzJSSJ: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].JSSJ";
        this.setData(t({}, e, a.detail.value));
    },
    zsKSRQ: function(a) {
        var e = "zsList[" + a.currentTarget.dataset.index + "].KSRQ";
        this.setData(t({}, e, a.detail.value));
    },
    zsJSRQ: function(a) {
        var e = "zsList[" + a.currentTarget.dataset.index + "].JSRQ";
        this.setData(t({}, e, a.detail.value));
    },
    getcl_jt: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getcl_jt",
                userId: wx.getStorageSync("userId"),
                id: t,
                table: "yssy_cc_jt"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? e.setData({
                    jtList: t.data.rows
                }) : e.setData({
                    jtList: ""
                });
            }
        });
    },
    getcl_bz: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getcl_bz",
                userId: wx.getStorageSync("userId"),
                id: t,
                table: "yssy_cc_bz",
                ztbm: e.data.ztbm
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? e.setData({
                    bzList: t.data.rows
                }) : e.setData({
                    bzList: ""
                });
            }
        });
    },
    getcl_zs: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getcl_zs",
                userId: wx.getStorageSync("userId"),
                id: t,
                table: "yssy_cc_zs",
                ztbm: e.data.ztbm
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? e.setData({
                    zsList: t.data.rows
                }) : e.setData({
                    zsList: ""
                });
            }
        });
    },
    getOrderZh: function(t, e) {
        var s = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getOrderZh",
                userId: wx.getStorageSync("userId"),
                ztbm: e,
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
    selectbzzysx: function(t) {
        wx.navigateTo({
            url: "/pages/selectzysx/selectzysx?index=" + t.currentTarget.dataset.index + "&ztbm=" + t.currentTarget.dataset.ztbm + "&table=" + t.currentTarget.dataset.table
        });
    },
    selectzszysx: function(t) {
        wx.navigateTo({
            url: "/pages/selectzysx/selectzysx?index=" + t.currentTarget.dataset.index + "&ztbm=" + t.currentTarget.dataset.ztbm + "&table=" + t.currentTarget.dataset.table
        });
    },
    bzje_ts: function(t) {
        wx.showToast({
            title: "保存后自动计算",
            icon: "loading",
            duration: 1e3
        });
    },
    selectbzdd: function(t) {
        wx.navigateTo({
            url: "/pages/selectdd/selectdd?index=" + t.currentTarget.dataset.index + "&lx=bz"
        });
    },
    selectzsdd: function(t) {
        wx.navigateTo({
            url: "/pages/selectdd/selectdd?index=" + t.currentTarget.dataset.index + "&lx=zs"
        });
    },
    selectzh: function(t) {
        wx.navigateTo({
            url: "/pages/selectFpxx/selectFpxx?index=" + t.currentTarget.dataset.index
        });
    },
    selectjtgj: function(t) {
        wx.navigateTo({
            url: "../jtgj/jtgj?index=" + t.currentTarget.dataset.index
        });
    },
    selectzrzxbm: function(t) {
        wx.navigateTo({
            url: "../search/search?ls_lx=1&ls_flag=ZRZXBM&index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmbm: function(t) {
        wx.navigateTo({
            url: "../ysxmbm/ysxmbm?nf=" + this.data.nf + "&lx1=4&lcbm=" + this.data.lcbm + "&zrzxbm=" + t.currentTarget.dataset.zrzxbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    selectysxmmxbh: function(t) {
        wx.navigateTo({
            url: "../ysxmmxbh/ysxmmxbh?nf=" + this.data.nf + "&lcbm=" + this.data.lcbm + "&zrzxbm=" + t.currentTarget.dataset.zrzxbm + "&ysxmbm=" + t.currentTarget.dataset.ysxmbm + "&index=" + t.currentTarget.dataset.index
        });
    },
    getAddressList: function() {
        var e = this, s = e.data.page + 1;
        wx.request({
            url: a.globalData.apiUrl,
            data: t({
                opt: "getyssydmxList",
                userId: wx.getStorageSync("userId"),
                where: "",
                page: s,
                size: 6,
                lx: e.data.lcbm,
                id: e.data.id
            }, "userId", wx.getStorageSync("userId")),
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? (e.setData({
                    addressList: t.data.rows
                }), e.sethj()) : (e.setData({
                    addressList: ""
                }), e.sethj());
            }
        });
    },
    addAddress: function() {
        var t = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "addyssydmx",
                userId: wx.getStorageSync("userId"),
                id: t.data.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a.data.status), 0 == a.data.status && (t.getAddressList(), wx.showToast({
                    title: "新增了一条",
                    icon: "loading",
                    duration: 1e3
                }));
            }
        });
    },
    delete: function(t) {
        var e = this, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.bh;
        wx.showModal({
            title: "删除明细",
            content: "单号：" + s + "明细：" + n + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
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
                                e.getAddressList();
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
    tijiao: function(e) {
        var s = this, n = "addressList[" + e.currentTarget.dataset.index + "].CZJE", r = e.currentTarget.dataset.id, i = e.currentTarget.dataset.bh, d = e.currentTarget.dataset.zrzxbm, o = e.currentTarget.dataset.ysxmbm, c = e.currentTarget.dataset.ysxmmxbh, u = e.currentTarget.dataset.ysxmmxmc, l = e.currentTarget.dataset.sqje, g = e.currentTarget.dataset.czje, x = e.currentTarget.dataset.zy, h = e.currentTarget.dataset.bz, w = e.currentTarget.dataset.ywrq;
        null != o && "" != o ? null != c && "" != c ? 0 != l ? 1 != s.data.ls_tj ? wx.showModal({
            title: "保存明细",
            content: "单号：" + r + "编号：" + i + ",请确认？",
            success: function(e) {
                e.confirm && (s.setData({
                    ls_tj: 1
                }), wx.showToast({
                    title: "保存中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
                    data: {
                        opt: "updateyssymx",
                        id: r,
                        lx: "cg",
                        bh: i,
                        zrzxbm: d,
                        ysxmbm: o,
                        ysxmmxbh: c,
                        ysxmmxmc: u,
                        sqje: l,
                        czje: g,
                        zy: x,
                        bz: h,
                        ywrq: w,
                        userId: wx.getStorageSync("userId")
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(a) {
                        var e = getCurrentPages();
                        e[e.length - 1];
                        e[e.length - 2].getAddressList(), console.log(a.data.status), 0 == a.data.status ? wx.showToast({
                            title: "保存成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 1 == a.data.status ? wx.showToast({
                            title: "保存失败!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 2 == a.data.status ? wx.showToast({
                            title: "预算不足已清0!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 3 == a.data.status ? wx.showToast({
                            title: "启用了准备金!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 4 == a.data.status ? wx.showToast({
                            title: "预算不足，调整了金额!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 5 == a.data.status && wx.showToast({
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
        if (this.data.addressList.length > 0) for (var a = 0; a < this.data.addressList.length; a++) t += parseFloat(this.data.addressList[a].SQJE);
        this.setData({
            hj: t.toFixed(2)
        });
    },
    inputsqje: function(a) {
        var e = "addressList[" + a.currentTarget.dataset.index + "].SQJE";
        this.setData(t({}, e, a.detail.value));
    },
    inputczje: function(a) {
        var e = "addressList[" + a.currentTarget.dataset.index + "].CZJE";
        this.setData(t({}, e, a.detail.value));
    },
    inputbz: function(a) {
        var e = "addressList[" + a.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, e, a.detail.value));
    },
    inputzy: function(a) {
        var e = "addressList[" + a.currentTarget.dataset.index + "].ZY";
        this.setData(t({}, e, a.detail.value));
    },
    inputskr: function(a) {
        var e = "orderzhList[" + a.currentTarget.dataset.index + "].SKR";
        this.setData(t({}, e, a.detail.value));
    },
    inputkhh: function(a) {
        var e = "orderzhList[" + a.currentTarget.dataset.index + "].KHH";
        this.setData(t({}, e, a.detail.value));
    },
    inputzh: function(a) {
        var e = "orderzhList[" + a.currentTarget.dataset.index + "].ZH";
        this.setData(t({}, e, a.detail.value));
    },
    inputje: function(a) {
        var e = "orderzhList[" + a.currentTarget.dataset.index + "].JE";
        this.setData(t({}, e, a.detail.value));
    },
    inputqtje: function(a) {
        var e = "qtList[" + a.currentTarget.dataset.index + "].JE";
        this.setData(t({}, e, a.detail.value));
    },
    inputqtbz: function(a) {
        var e = "qtList[" + a.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, e, a.detail.value));
    },
    inputqtmc: function(a) {
        var e = "qtList[" + a.currentTarget.dataset.index + "].MC";
        this.setData(t({}, e, a.detail.value));
    },
    inputjtksdd: function(a) {
        var e = "jtList[" + a.currentTarget.dataset.index + "].KSDD";
        this.setData(t({}, e, a.detail.value));
    },
    inputjtjsdd: function(a) {
        var e = "jtList[" + a.currentTarget.dataset.index + "].JSDD";
        this.setData(t({}, e, a.detail.value));
    },
    inputjtsjje: function(a) {
        var e = "jtList[" + a.currentTarget.dataset.index + "].SJJE";
        this.setData(t({}, e, a.detail.value));
    },
    inputjtbz: function(a) {
        var e = "jtList[" + a.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, e, a.detail.value));
    },
    inputbzbz: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, e, a.detail.value));
    },
    inputzsbz: function(a) {
        var e = "zsList[" + a.currentTarget.dataset.index + "].BZ";
        this.setData(t({}, e, a.detail.value));
    },
    inputzssjje: function(a) {
        var e = "zsList[" + a.currentTarget.dataset.index + "].SJJE";
        this.setData(t({}, e, a.detail.value));
    },
    inputbzewje: function(a) {
        var e = "bzList[" + a.currentTarget.dataset.index + "].EWJE";
        this.setData(t({}, e, a.detail.value));
    },
    savezf: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.khh, n = t.currentTarget.dataset.skr, r = t.currentTarget.dataset.zh, i = t.currentTarget.dataset.je;
        console.log(r), 0 != i && null != i ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "savezhzf",
                id: e,
                skr: n,
                khh: s,
                zh: r,
                je: i,
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
    addqt: function(t) {
        var e = this, s = e.data.id, n = t.currentTarget.dataset.table;
        console.log(s), wx.showToast({
            title: "新增中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "addclqt",
                id: s,
                table: n,
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
                        "yssy_cc_qt" == n && (e.getcl_qt(e.data.id), e.setData({
                            tp3: 0
                        })), "yssy_cc_jt" == n && (e.getcl_jt(e.data.id), e.setData({
                            tp2: 0
                        })), "yssy_cc_bz" == n && (e.getcl_bz(e.data.id), e.setData({
                            tp1: 0
                        })), "yssy_cc_zs" == n && (e.getcl_zs(e.data.id), e.setData({
                            tp4: 0
                        }));
                    }
                }) : wx.showToast({
                    title: "新增失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    saveqt: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.bh, n = t.currentTarget.dataset.mc, r = t.currentTarget.dataset.bz, i = t.currentTarget.dataset.je;
        0 != i && null != i ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "saveclqt",
                id: e,
                bh: s,
                mc: n,
                bz: r,
                je: i,
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
    savejt: function(t) {
        var e = t.currentTarget.dataset.id, s = t.currentTarget.dataset.bh, n = t.currentTarget.dataset.ksdd, r = t.currentTarget.dataset.jsdd, i = t.currentTarget.dataset.lx, d = t.currentTarget.dataset.rq, o = t.currentTarget.dataset.sjgj, c = t.currentTarget.dataset.bz, u = t.currentTarget.dataset.sjje;
        "" != d && null != d ? "" != n && null != n ? "" != r && null != r ? "" != o && null != o ? 0 != u && null != u ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "savecljt",
                id: e,
                bh: s,
                ksdd: n,
                jsdd: r,
                sjgj: o,
                bz: c,
                lx: i,
                rq: d,
                sjje: u,
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
        }) : wx.showToast({
            title: "交通工具为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "终点为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "起点为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "日期为空",
            icon: "loading",
            duration: 1500
        });
    },
    savebz: function(t) {
        var e = this, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.bh, r = t.currentTarget.dataset.ksrq, i = t.currentTarget.dataset.jsrq, d = t.currentTarget.dataset.kssj, o = t.currentTarget.dataset.jssj, c = t.currentTarget.dataset.dd, u = t.currentTarget.dataset.ddsx, l = t.currentTarget.dataset.zysx, g = t.currentTarget.dataset.bz, x = (t.currentTarget.dataset.bzje, 
        t.currentTarget.dataset.ewje);
        "" != r && "" != i && "" != d && "" != o && null != r && null != i && null != d && null != o ? "" != c && null != c ? "" != l && null != l ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "saveclbz",
                id: s,
                bh: n,
                ksrq: r,
                jsrq: i,
                kssj: d,
                jssj: o,
                dd: c,
                bz: g,
                ddsx: u,
                zysx: l,
                ewje: x,
                zrzxbm: e.data.zrzxbm,
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
                    success: function() {
                        e.getcl_bz(s);
                    }
                }) : wx.showToast({
                    title: "保存失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        })) : wx.showToast({
            title: "职员为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "城市为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "日期或时间为空",
            icon: "loading",
            duration: 1500
        });
    },
    savezs: function(t) {
        var e = this, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.bh, r = t.currentTarget.dataset.ksrq, i = t.currentTarget.dataset.jsrq, d = t.currentTarget.dataset.dd, o = t.currentTarget.dataset.ddsx, c = t.currentTarget.dataset.ddsxmc, u = t.currentTarget.dataset.zysxmc, l = t.currentTarget.dataset.zysx, g = t.currentTarget.dataset.sjje, x = t.currentTarget.dataset.bz;
        "" != r && "" != i && null != r && null != i ? "" != d && null != d ? "" != l && null != l ? (wx.showToast({
            title: "保存中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "saveclzs",
                id: s,
                bh: n,
                ksrq: r,
                jsrq: i,
                ddsxmc: c,
                dd: d,
                bz: x,
                ddsx: o,
                zysx: l,
                zysxmc: u,
                sjje: g,
                zrzxbm: e.data.zrzxbm,
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
                    success: function() {
                        e.getcl_zs(s);
                    }
                }) : wx.showToast({
                    title: "保存失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        })) : wx.showToast({
            title: "职员级别为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "城市为空",
            icon: "loading",
            duration: 1500
        }) : wx.showToast({
            title: "日期为空",
            icon: "loading",
            duration: 1500
        });
    },
    addzf: function(t) {
        var e = this, s = e.data.id;
        console.log(s), wx.showToast({
            title: "新增中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: a.globalData.apiUrl,
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
                        e.getOrderZh(e.data.id, e.data.ztbm);
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
        var e = this, s = t.currentTarget.dataset.id;
        wx.showModal({
            title: "删除明细",
            content: "单号：" + e.data.id + "明细：" + s + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
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
                                e.getOrderZh(e.data.id, e.data.ztbm);
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
    deleteqt: function(t) {
        var e = this, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.bh, r = t.currentTarget.dataset.lx, i = t.currentTarget.dataset.table;
        wx.showModal({
            title: "删除" + r + "明细",
            content: "单号：" + e.data.id + "明细：" + n + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
                    data: {
                        opt: "deleteclqt",
                        id: s,
                        bh: n,
                        table: i,
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
                                "其他费用" == r && e.getcl_qt(e.data.id), "交通费用" == r && e.getcl_jt(e.data.id), "补贴费用" == r && e.getcl_bz(e.data.id), 
                                "住宿费用" == r && e.getcl_zs(e.data.id);
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
        var t = this, e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e && wx.chooseImage({
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
                for (var r = 0, i = t.data.id, d = 0, o = n.length; d < o; d++) wx.uploadFile({
                    url: a.globalData.uploadUrl1,
                    filePath: n[d],
                    name: "uploadfile_ant",
                    userId: wx.getStorageSync("userId"),
                    formData: {
                        imgIndex: d,
                        userId: JSON.stringify(e),
                        id: i
                    },
                    header: {
                        "Content-Type": "multipart/form-data"
                    },
                    success: function(a) {
                        r++, t.getOrderFj(i), r == n.length && wx.hideToast();
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
        var e = this, s = e.data.getOrderFj, n = e.data.id, r = t.currentTarget.dataset.index;
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
                                console.log(n), e.getOrderFj(n);
                            }
                        }) : (wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        }), e.getOrderFj(n));
                    }
                }); else if (t.cancel) return !1;
                e.setData({
                    images: s
                });
            }
        });
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
    onShow: function(t) {
        var a = this;
        1 == this.data.isRefresh && a.getAddressList();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});