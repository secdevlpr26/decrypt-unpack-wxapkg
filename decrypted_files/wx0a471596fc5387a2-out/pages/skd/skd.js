var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        isRefresh: !1,
        ls_tj: 0
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
            ls_tj: 0
        });
        var s = wx.getStorageSync("userId");
        null != s && s > 0 && "" != s ? a.getAddressList() : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getAddressList: function() {
        var a = this, s = "";
        s = "57" == a.data.djlx ? "10" : "9", wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getjkdList",
                userId: wx.getStorageSync("userId"),
                where: "",
                lx: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data ? a.setData({
                    addressList: t.data.rows
                }) : a.setData({
                    addressList: ""
                });
            }
        });
    },
    addAddress: function() {
        var t = this;
        console.log(t.data.zrzxbm), wx.navigateTo({
            url: "/pages/skdmx/skdmx?id=0&lcbm=" + t.data.lcbm + "&nf=" + t.data.nf + "&zrzxbm=" + t.data.zrzxbm + "&zrzxmc=" + t.data.zrzxmc + "&ztbm=" + t.data.ztbm + "&djlx=" + t.data.djlx + "&djmc=" + t.data.djmc
        });
    },
    edit: function(t) {
        var a = this;
        console.log(a.data.djlx);
        var s = wx.getStorageSync("userId"), e = t.currentTarget.dataset.id;
        console.log(e + s), wx.navigateTo({
            url: "/pages/skdmx/skdmx?id=" + e + "&userId=" + s + "&djlx=" + a.data.djlx + "&lcbm=" + a.data.lcbm + "&zrzxbm=" + a.data.zrzxbm + "&zrzxmc=" + a.data.zrzxmc
        });
    },
    delete: function(a) {
        var s = this, e = a.currentTarget.dataset.id;
        1 != s.data.ls_tj && 1 != s.data.ls_tj ? wx.showModal({
            title: "删除单据",
            content: "单号：" + e + ",请确认？",
            success: function(a) {
                a.confirm && (wx.showToast({
                    title: "删除中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: t.globalData.apiUrl,
                    data: {
                        opt: "deletejkd",
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
            title: "亲，请等等",
            icon: "loading",
            duration: 1500
        });
    },
    tijiao: function(a) {
        var s = this, e = "", o = a.currentTarget.dataset.id;
        e = "57" == s.data.djlx ? "SKD" : "FKD", 1 != s.data.ls_tj ? wx.showModal({
            title: "提交单据",
            content: "单号：" + o + ",请确认？",
            success: function(a) {
                a.confirm && (s.setData({
                    ls_tj: 1
                }), wx.showToast({
                    title: "提交中",
                    icon: "loading",
                    duration: 2e3
                }), wx.request({
                    url: t.globalData.apiUrl,
                    data: {
                        opt: "tj_yes",
                        id: o,
                        lx: e,
                        table: "yf_zb",
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