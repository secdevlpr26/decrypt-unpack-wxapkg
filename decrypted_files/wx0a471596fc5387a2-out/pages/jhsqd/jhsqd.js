var t = require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js"), a = getApp();

Page({
    data: {
        hostUrl: a.globalData.hostUrl,
        isRefresh: !1,
        ls_tj: 0
    },
    onLoad: function(a) {
        var s = this;
        s.setData({
            djlx: a.djlx,
            djmc: a.djmc,
            lcbm: a.lcbm,
            nf: a.nf,
            zrzxbm: a.zrzxbm,
            zrzxmc: a.zrzxmc,
            ztbm: a.ztbm,
            ls_tj: 0,
            ywrq: t.formatdata(new Date())
        });
        var e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e ? s.getAddressList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    datePickerBindchange: function(t) {
        this.setData({
            ywrq: t.detail.value
        });
    },
    getAddressList: function() {
        var t = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "getjhsqdList",
                userId: wx.getStorageSync("userId"),
                where: "",
                lx: t.data.lcbm
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                "" != a.data ? t.setData({
                    addressList: a.data.rows
                }) : t.setData({
                    addressList: ""
                });
            }
        });
    },
    addAddress: function() {
        var t = this;
        wx.request({
            url: a.globalData.apiUrl,
            data: {
                opt: "addjhsqd",
                userId: wx.getStorageSync("userId"),
                ywrq: t.data.ywrq,
                lcbm: t.data.lcbm,
                mblx: "1"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (console.log(a.data.status), 1 == a.data.status) wx.showToast({
                    title: "月份:" + a.data.log,
                    icon: "loading",
                    duration: 1e3
                }); else if (2 == a.data.status) wx.showToast({
                    title: "部门非末级!",
                    icon: "loading",
                    duration: 1e3
                }); else {
                    console.log(a.data), console.log(a.data.status);
                    var s = t.zeroFill(String(a.data.status), 10);
                    console.log(s), t.getAddressList(), wx.navigateTo({
                        url: "/pages/jhsqdmx/jhsqdmx?id=OBS" + s + "&lcbm=" + t.data.lcbm + "&ztbm=" + t.data.ztbm + "&djlx=" + t.data.djlx + "&djmc=" + t.data.djmc + "&nf=" + t.data.nf + "&zrzxbm=" + t.data.zrzxbm + "&zrzxmc=" + t.data.zrzxmc + "&sqje=0"
                    });
                }
            }
        });
    },
    zeroFill: function(t, a) {
        for (var s = 0; s < 10; ++s) t.length < a && (t = "0" + t);
        return t;
    },
    delete: function(t) {
        var s = this, e = t.currentTarget.dataset.id;
        1 != s.data.ls_tj ? wx.showModal({
            title: "删除申请单",
            content: "单号：" + e + ",请确认？",
            success: function(t) {
                t.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
                    data: {
                        opt: "deletejhsqd",
                        id: e,
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
                                s.getAddressList();
                            }
                        }) : wx.showToast({
                            title: "删除失败!",
                            icon: "loading",
                            duration: 1500
                        });
                    }
                }));
            }
        }) : wx.showToast({
            title: "亲，在提交中...",
            icon: "loading",
            duration: 1500
        });
    },
    tijiao: function(t) {
        var s = this, e = t.currentTarget.dataset.id;
        1 != s.data.ls_tj ? wx.showModal({
            title: "提交申请单",
            content: "单号：" + e + ",请确认？",
            success: function(t) {
                t.confirm && (s.setData({
                    ls_tj: 1
                }), wx.showToast({
                    title: "提交中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: a.globalData.apiUrl,
                    data: {
                        opt: "tj_yes",
                        id: e,
                        lx: "SGD",
                        table: "cggl_sgd_Zb",
                        userId: wx.getStorageSync("userId")
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(t) {
                        console.log(t.data.status), 0 == t.data.status ? wx.showToast({
                            title: "提交成功!",
                            icon: "success",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 1 == t.data.status ? wx.showToast({
                            title: "提交失败!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 2 == t.data.status ? wx.showToast({
                            title: "亲，已提交过!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
                                    ls_tj: 0
                                });
                            }
                        }) : 3 == t.data.status && wx.showToast({
                            title: "亲，流程异常!",
                            icon: "loading",
                            duration: 1e3,
                            success: function() {
                                s.getAddressList(), s.setData({
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
        });
    },
    onReady: function() {},
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