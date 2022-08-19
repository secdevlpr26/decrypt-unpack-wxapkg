var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        shnr: "",
        obsid: "",
        pictures: "",
        ls_tj: 0,
        tp0: 1,
        tp1: 1,
        tp2: 1,
        tp3: 1,
        tp4: 1,
        ztbm: ""
    },
    showFrom: function(t) {
        var a = this, e = t.target.dataset.param, s = t.target.dataset.tp0, o = t.target.dataset.tp1, r = t.target.dataset.tp2, n = t.target.dataset.tp3, i = t.target.dataset.tp4;
        1 == e && 0 == o && a.setData({
            tp1: 1
        }), 1 == e && 1 == o && a.setData({
            tp1: 0
        }), 2 == e && 0 == r && a.setData({
            tp2: 1
        }), 2 == e && 1 == r && a.setData({
            tp2: 0
        }), 3 == e && 0 == n && a.setData({
            tp3: 1
        }), 3 == e && 1 == n && a.setData({
            tp3: 0
        }), 4 == e && 0 == i && a.setData({
            tp4: 1
        }), 4 == e && 1 == i && a.setData({
            tp4: 0
        }), 0 == e && 0 == s && a.setData({
            tp0: 1
        }), 0 == e && 1 == s && a.setData({
            tp0: 0
        });
    },
    getcl_jt: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getcl_jt",
                userId: wx.getStorageSync("userId"),
                id: a,
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
    getcl_bz: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getcl_bz",
                userId: wx.getStorageSync("userId"),
                id: a,
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
    getcl_zs: function(a) {
        var e = this;
        console.log(e.data.ztbm), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getcl_zs",
                userId: wx.getStorageSync("userId"),
                id: a,
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
    getcl_qt: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getcl_qt",
                userId: wx.getStorageSync("userId"),
                id: a,
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
    onLoad: function(t) {
        var a = this, e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e ? (a.getOrderSubList(t.id, t.ztbm), a.getOrder(t.id, t.ztbm, t.lx), 
        a.getOrderLc(t.id, t.ztbm), a.getOrderFj(t.id), a.getwordFj(t.id), a.getOrderZh(t.id, t.ztbm), 
        a.setData({
            ls_tj: 0,
            ztbm: t.ztbm
        })) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    imgYu: function(t) {
        var a = t.currentTarget.dataset.src, e = t.currentTarget.dataset.list;
        console.log(e), wx.previewImage({
            current: a,
            urls: this.data.pictures
        });
    },
    getOrder: function(a, e, s) {
        var o = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getYsd",
                id: a,
                userId: wx.getStorageSync("userId"),
                ztbm: e,
                lx: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && (o.setData({
                    order: t.data.rows[0]
                }), "4" == t.data.rows[0].ZCMC && (o.getcl_qt(a), o.getcl_jt(a), o.getcl_bz(a), 
                o.getcl_zs(a)));
            }
        });
    },
    getOrderSubList: function(a, e) {
        var s = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getYsdmx",
                userId: wx.getStorageSync("userId"),
                id: a,
                ztbm: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && s.setData({
                    orderSubList: t.data.rows
                });
            }
        });
    },
    getOrderLc: function(a, e) {
        var s = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderLc",
                userId: wx.getStorageSync("userId"),
                ztbm: e,
                id: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && s.setData({
                    orderLcList: t.data.rows
                });
            }
        });
    },
    getOrderZh: function(a, e) {
        var s = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderZh",
                userId: wx.getStorageSync("userId"),
                ztbm: e,
                id: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && s.setData({
                    orderzhList: t.data.rows
                });
            }
        });
    },
    getOrderFj: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderFj",
                userId: wx.getStorageSync("userId"),
                id: a
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
                }
            }
        });
    },
    getwordFj: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderFj",
                userId: wx.getStorageSync("userId"),
                id: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && e.setData({
                    getFjList: t.data.rows
                });
            }
        });
    },
    downloadFile: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.url;
        wx.downloadFile({
            url: a,
            header: {},
            success: function(t) {
                var a = t.tempFilePath;
                console.log(a), wx.openDocument({
                    filePath: a,
                    success: function(t) {
                        console.log("打开文档成功");
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function(t) {
                        console.log(t);
                    }
                });
            },
            fail: function(t) {
                console.log("文件下载失败");
            },
            complete: function(t) {}
        });
    },
    sp_yes: function(a) {
        var e = a.currentTarget.dataset.id, s = a.currentTarget.dataset.ztbm, o = this;
        1 != o.data.ls_tj ? (wx.showToast({
            title: "提交中",
            icon: "loading",
            duration: 2e3
        }), o.setData({
            ls_tj: 1
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "sp_yes",
                userId: wx.getStorageSync("userId"),
                id: e,
                ztbm: s,
                typeId: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data.status), 0 == t.data.status && wx.showToast({
                    title: "审核成功",
                    icon: "success",
                    duration: 2e3,
                    success: function() {
                        setTimeout(function() {
                            o.getOrder(e, s, "true"), o.getOrderLc(e, s), wx.navigateBack({
                                url: "/pages/ysd/ysd"
                            });
                        }, 2e3);
                    }
                }), 3 == t.data.status && (o.setData({
                    ls_tj: 0
                }), wx.showToast({
                    title: "您已审核过！",
                    icon: "loading",
                    duration: 2e3
                })), 2 == t.data.status && (o.setData({
                    ls_tj: 0
                }), wx.showToast({
                    title: "你无权审核！",
                    icon: "loading",
                    duration: 2e3
                })), 1 == t.data.status && (o.setData({
                    ls_tj: 0
                }), wx.showToast({
                    title: "审核失败",
                    icon: "loading",
                    duration: 2e3
                }));
            }
        })) : wx.showToast({
            title: "亲，请等等",
            icon: "loading",
            duration: 1500
        });
    },
    tj_yes: function(a) {
        var e = a.currentTarget.dataset.id, s = a.currentTarget.dataset.ztbm, o = this;
        wx.showToast({
            title: "提交中",
            icon: "loading",
            duration: 2e3
        }), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "tj_yes",
                userId: wx.getStorageSync("userId"),
                id: e,
                ztbm: s,
                typeId: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), o.getOrder(e, s, "true"), o.getOrderLc(e, s), wx.navigateBack({
                    url: "/pages/ysd_gr/ysd_gr"
                })) : wx.showToast({
                    title: "提交失败",
                    icon: "error",
                    duration: 2e3
                });
            }
        });
    },
    showDialogBtn: function(t) {
        this.setData({
            showModal: !0,
            id: t.currentTarget.dataset.id
        });
    },
    preventTouchMove: function() {},
    hideModal: function() {
        this.setData({
            showModal: !1
        });
    },
    onCancel: function() {
        this.hideModal();
    },
    onConfirm: function(t) {},
    bindTextAreaBlur: function(a) {
        var e = this;
        if (e.setData({
            concent: a.detail.value
        }), "" == a.detail.value) wx.showToast({
            title: "意见不能为空！",
            icon: "loading",
            duration: 2e3
        }); else {
            var s = a.currentTarget.dataset.id, o = a.currentTarget.dataset.ztbm;
            if (1 == e.data.ls_tj) return void wx.showToast({
                title: "亲，请等等",
                icon: "loading",
                duration: 1500
            });
            wx.showToast({
                title: "退回中",
                icon: "loading",
                duration: 2e3
            }), e.setData({
                ls_tj: 1
            }), wx.request({
                url: t.globalData.apiUrl,
                data: {
                    opt: "sp_yes",
                    userId: wx.getStorageSync("userId"),
                    id: s,
                    ztbm: o,
                    typeId: 2,
                    nr: a.detail.value
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    0 == t.data.status ? (e.setData({
                        ls_tj: 0
                    }), wx.showToast({
                        title: "退回成功",
                        icon: "success",
                        duration: 2e3
                    }), e.getOrder(s, o, "true"), e.getOrderLc(s, o), wx.navigateBack({
                        url: "/pages/ysd/ysd"
                    })) : (e.setData({
                        ls_tj: 0
                    }), wx.showToast({
                        title: "退回失败",
                        icon: "loading",
                        duration: 2e3
                    }));
                }
            });
        }
    },
    formReset: function() {
        console.log("form发生了reset事件");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});