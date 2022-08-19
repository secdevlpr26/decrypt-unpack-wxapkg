var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        typeId: 0,
        switchTabOne: !0,
        switchTabTwo: !1,
        keyWord: "",
        select_all: !1,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        list: [],
        page: 0,
        lx: 1,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        isGet: !0,
        hidden: !0,
        batchIds: "",
        ls_tj: 0
    },
    onLoad: function(t) {
        this.setData({
            ls_tj: 0
        });
    },
    getOrderList: function() {
        var a = this, e = "", s = a.data.page + 1;
        this.setData({
            hidden: !0,
            isGet: !1
        }), a.data.switchTabOne && (e = " AND a.zt='N'  and b.lc='Y'  "), a.data.switchTabTwo && (e = " AND a.zt='Y'  and b.lc<>'N'  "), 
        a.data.keyWord.length > 0 && (e = e + " and a.id like '%" + a.data.keyWord + "%'   "), 
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getYsdList",
                userId: wx.getStorageSync("userId"),
                where: e,
                page: s,
                size: 6
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t.data), t.data) {
                    var e = a.data.list, i = t.data.rows;
                    if (i.length > 0) {
                        for (var n in i) e.push(i[n]);
                        a.setData({
                            list: e,
                            isGet: !0,
                            hidden: !0,
                            page: s
                        });
                    }
                } else console.log("222222222222222222"), a.setData({
                    isGet: !1,
                    hidden: !0
                });
            }
        });
    },
    selectall: function(t) {
        console.log(t);
        for (var a = this, e = [], s = 0; s < a.data.list.length; s++) a.data.list[s].checked = !a.data.select_all, 
        1 == a.data.list[s].checked && (e = e.concat(a.data.list[s].ID.split(",")));
        console.log(e), a.setData({
            list: a.data.list,
            select_all: !a.data.select_all,
            batchIds: e
        });
    },
    checkboxChange: function(t) {
        console.log(t.detail.value), this.setData({
            batchIds: t.detail.value
        });
    },
    sp_yes: function(a) {
        var e = a.currentTarget.dataset.id, s = a.currentTarget.dataset.ztbm, i = this;
        1 != i.data.ls_tj ? (wx.showToast({
            title: "提交中",
            icon: "loading",
            duration: 2e3
        }), i.setData({
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
                0 == t.data.status ? wx.showToast({
                    title: "审核成功",
                    icon: "success",
                    duration: 2e3,
                    success: function() {
                        setTimeout(function() {
                            i.setData({
                                ls_tj: 0
                            }), wx.navigateTo({
                                url: "/pages/ysd/ysd"
                            });
                        }, 2e3);
                    }
                }) : (i.setData({
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
    sp_yes_pl: function(a) {
        var e = this, s = e.data.batchIds;
        "" == s ? wx.showToast({
            title: "没有选择单据！",
            icon: "success"
        }) : wx.showModal({
            title: "批量审批",
            content: "共选择：" + s.length + "个单据,确认？",
            success: function(a) {
                if (a.confirm) {
                    if (1 == e.data.ls_tj) return void wx.showToast({
                        title: "亲，请等等",
                        icon: "loading",
                        duration: 1500
                    });
                    wx.showToast({
                        title: "提交中",
                        icon: "loading",
                        duration: 2e3
                    }), e.setData({
                        ls_tj: 1
                    }), wx.request({
                        url: t.globalData.apiUrl,
                        data: {
                            opt: "sp_yes_pl",
                            userId: wx.getStorageSync("userId"),
                            id: s,
                            typeId: 1
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(t) {
                            0 == t.data.status ? wx.showToast({
                                title: s.length + "条单据审核成功！",
                                icon: "success",
                                duration: 2e3,
                                success: function() {
                                    setTimeout(function() {
                                        e.setData({
                                            ls_tj: 0
                                        }), wx.navigateTo({
                                            url: "/pages/ysd/ysd"
                                        });
                                    }, 2e3);
                                }
                            }) : (e.setData({
                                ls_tj: 0
                            }), wx.showToast({
                                title: "审核失败",
                                icon: "loading",
                                duration: 2e3
                            }));
                        }
                    });
                }
            }
        });
    },
    switchTab: function(t) {
        var a = this;
        1 == t.currentTarget.dataset.order ? a.setData({
            page: 0,
            size: 6,
            list: [],
            batchIds: "",
            select_all: !1,
            switchTabOne: !0,
            switchTabTwo: !1,
            lx: 1
        }, function() {
            a.getOrderList();
        }) : 2 == t.currentTarget.dataset.order && a.setData({
            page: 0,
            size: 6,
            list: [],
            batchIds: "",
            select_all: !1,
            switchTabOne: !1,
            switchTabTwo: !0,
            lx: 2
        }, function() {
            a.getOrderList();
        });
    },
    searchActiveChangeinput: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            keyWord: e
        }, function() {
            page = 0;
        });
    },
    searchSubmit: function() {
        this.getOrderList();
    },
    onReady: function() {},
    onShow: function() {
        var t = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a || wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        }), wx.getSystemInfo({
            success: function(a) {
                var e = a.windowHeight * (750 / a.windowWidth) - 180;
                t.setData({
                    winHeight: e,
                    scrollHeight: a.windowHeight,
                    page: 0,
                    list: []
                });
            }
        }), this.getOrderList();
    },
    onHide: function() {},
    onUnload: function() {},
    bindDownLoad: function() {
        this.data.isGet && this.getOrderList();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.getOrderList();
    },
    onShareAppMessage: function() {}
});