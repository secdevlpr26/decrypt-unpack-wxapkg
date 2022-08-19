function t(t, a, n) {
    return a in t ? Object.defineProperty(t, a, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = n, t;
}

var a, n = require("../../C09CF681668F5ADFA6FA9E864D4911A5.js"), e = getApp(), i = new Array(), s = (new Array(), 
null), o = null, r = null, l = null, c = {
    main: {
        categories: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ]
    }
};

Page({
    data: (a = {
        array: [ "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029" ],
        jg: [ {
            data: 4879.5,
            name: "清洁用品"
        }, {
            data: 4879.5,
            name: "清洁用品"
        } ],
        hostUrl: e.globalData.hostUrl,
        list: [],
        zrzxmc: [],
        gsmc: [],
        nf: "2019",
        lx: "1",
        xs1: "1",
        gsname: "",
        deptname: "",
        yf: "",
        page: 0,
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3
    }, t(a, "list", []), t(a, "winHeight", ""), t(a, "currentTab", 0), t(a, "scrollLeft", 0), 
    t(a, "isGet", !0), t(a, "hidden", !0), t(a, "isMainChartDisplay", !0), a),
    bindPickerChange: function(t) {
        console.log("picker发送选择改变，携带值为", this.data.array[t.detail.value]), this.setData({
            nf: this.data.array[t.detail.value],
            index: t.detail.value
        }), this.getgsList();
    },
    switch1Change: function(t) {
        console.log("switch1 发生 change 事件，携带值为", t.detail.value), t.detail.value ? this.setData({
            lx: "1"
        }) : this.setData({
            lx: "0"
        }), this.getgsList();
    },
    touchHandler: function(t) {
        s.scrollStart(t);
        var a = s.getCurrentDataIndex(t);
        console.log(this.data.zrzxmc[a]), this.setData({
            gsname: this.data.gsmc[a]
        }), this.getbmList();
    },
    moveHandler: function(t) {
        s.scroll(t);
    },
    touchEndHandler: function(t) {
        s.scrollEnd(t), s.showToolTip(t, {
            format: function(t, a) {
                return a + " " + t.name + ":" + t.data;
            }
        });
    },
    touchHandler1: function(t) {
        o.scrollStart(t);
        var a = o.getCurrentDataIndex(t);
        this.setData({
            deptname: this.data.zrzxmc[a]
        }), this.getbmyfList();
    },
    moveHandler1: function(t) {
        o.scroll(t);
    },
    touchEndHandler1: function(t) {
        o.scrollEnd(t), o.showToolTip(t, {
            format: function(t, a) {
                return a + " " + t.name + ":" + t.data;
            }
        });
    },
    touchHandler2: function(t) {
        r.scrollStart(t);
        var a = r.getCurrentDataIndex(t);
        this.setData({
            yf: a
        }), this.getbmyfjgList();
    },
    moveHandler2: function(t) {
        r.scroll(t);
    },
    touchEndHandler2: function(t) {
        r.scrollEnd(t), r.showToolTip(t, {
            format: function(t, a) {
                return a + " " + t.name + ":" + t.data;
            }
        });
    },
    touchHandler3: function(t) {
        l.scrollStart(t);
        l.getCurrentDataIndex(t);
        this.setData({});
    },
    moveHandler3: function(t) {
        l.scroll(t);
    },
    touchEndHandler3: function(t) {
        l.scrollEnd(t), l.showToolTip(t, {
            format: function(t, a) {
                return a + " " + t.name + ":" + t.data;
            }
        });
    },
    onReady: function(t) {
        this.getgsList();
    },
    getgsList: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "Show_Compare1",
                userId: wx.getStorageSync("userId"),
                ls_nf: this.data.nf,
                ls_lx: this.data.lx
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data) {
                    i = a.data.split("**"), console.log(i[1].split(",")), t.setData({
                        gsmc: i[0].split(","),
                        xs1: "1"
                    });
                    var e = 320;
                    try {
                        e = (a = wx.getSystemInfoSync()).windowWidth;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.error("getSystemInfoSync failed!");
                    }
                    s = new n({
                        canvasId: "lineCanvas",
                        type: "column",
                        animation: !0,
                        categories: i[0].split(","),
                        series: [ {
                            name: "预算值",
                            data: i[1].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "实际值",
                            data: i[2].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "调整值",
                            data: i[3].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        } ],
                        yAxis: {
                            format: function(t) {
                                return t + "万";
                            },
                            min: 0
                        },
                        xAxis: {
                            disableGrid: !1,
                            type: "calibration"
                        },
                        width: e,
                        height: 280,
                        dataLabel: !0,
                        dataPointShape: !0,
                        enableScroll: !0,
                        extra: {
                            lineStyle: "curve"
                        }
                    });
                } else t.setData({
                    xs1: "0"
                });
            }
        });
    },
    getbmList: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "Show_Compare2",
                userId: wx.getStorageSync("userId"),
                ls_nf: this.data.nf,
                ls_lx: this.data.lx,
                ls_name: this.data.gsname
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data) {
                    i = a.data.split("**"), console.log(i[1].split(",")), t.setData({
                        zrzxmc: i[0].split(",")
                    });
                    var e = 320;
                    try {
                        e = (a = wx.getSystemInfoSync()).windowWidth;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.error("getSystemInfoSync failed!");
                    }
                    o = new n({
                        canvasId: "lineCanvas1",
                        type: "line",
                        animation: !0,
                        categories: i[0].split(","),
                        series: [ {
                            name: "预算值",
                            data: i[1].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "实际值",
                            data: i[2].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "调整值",
                            data: i[3].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        } ],
                        yAxis: {
                            format: function(t) {
                                return t + "万";
                            },
                            min: 0
                        },
                        xAxis: {
                            disableGrid: !1,
                            type: "calibration"
                        },
                        width: e,
                        height: 200,
                        dataLabel: !0,
                        dataPointShape: !0,
                        enableScroll: !0,
                        extra: {
                            lineStyle: "curve"
                        }
                    });
                }
            }
        });
    },
    getbmyfList: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "Show_Compare3",
                userId: wx.getStorageSync("userId"),
                ls_nf: this.data.nf,
                ls_lx: this.data.lx,
                ls_name: this.data.deptname,
                ls_gsmc: this.data.gsname
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data) {
                    i = a.data.split("**"), console.log(i[1].split(",")), t.setData({});
                    var e = 320;
                    try {
                        e = (a = wx.getSystemInfoSync()).windowWidth;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.error("getSystemInfoSync failed!");
                    }
                    r = new n({
                        canvasId: "lineCanvas2",
                        type: "line",
                        animation: !0,
                        categories: c.main.categories,
                        series: [ {
                            name: "预算值",
                            data: i[1].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "实际值",
                            data: i[2].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "调整值",
                            data: i[3].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        } ],
                        yAxis: {
                            format: function(t) {
                                return t + "万";
                            },
                            min: 0
                        },
                        xAxis: {
                            disableGrid: !1,
                            type: "calibration"
                        },
                        width: e,
                        height: 200,
                        dataLabel: !0,
                        dataPointShape: !0,
                        enableScroll: !0,
                        extra: {
                            lineStyle: "curve"
                        }
                    });
                }
            }
        });
    },
    getbmyfjgList: function() {
        var t = this;
        wx.request({
            url: e.globalData.apiUrl,
            data: {
                opt: "Show_Compare4",
                userId: wx.getStorageSync("userId"),
                ls_nf: this.data.nf,
                ls_yf: this.data.yf,
                ls_lx: this.data.lx,
                ls_name: this.data.deptname,
                ls_gsmc: this.data.gsname
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data) {
                    i = a.data.split("**"), console.log(i[1].split(",")), t.setData({});
                    var e = 320;
                    try {
                        e = (a = wx.getSystemInfoSync()).windowWidth;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        console.error("getSystemInfoSync failed!");
                    }
                    l = new n({
                        canvasId: "lineCanvas3",
                        type: "line",
                        animation: !0,
                        categories: i[0].split(","),
                        series: [ {
                            name: "预算值",
                            data: i[1].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "实际值",
                            data: i[2].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        }, {
                            name: "调整值",
                            data: i[3].split(","),
                            format: function(t, a) {
                                return t + "万";
                            }
                        } ],
                        yAxis: {
                            format: function(t) {
                                return t + "万";
                            },
                            min: 0
                        },
                        xAxis: {
                            disableGrid: !1,
                            type: "calibration"
                        },
                        width: e,
                        height: 200,
                        dataLabel: !0,
                        dataPointShape: !0,
                        enableScroll: !0,
                        extra: {
                            lineStyle: "curve"
                        }
                    });
                }
            }
        });
    },
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
                var n = a.windowHeight * (750 / a.windowWidth) - 180;
                t.setData({
                    winHeight: n,
                    scrollHeight: a.windowHeight,
                    page: 0,
                    list: [],
                    index: 0
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    bindDownLoad: function() {
        this.data.isGet;
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});