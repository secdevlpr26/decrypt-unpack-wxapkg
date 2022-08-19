function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t, o = require("../../utils/util.js"), a = require("../../config.js");

getApp();

Page({
    data: (t = {
        source: "",
        videoLength: !0,
        dateTime: "",
        time: "",
        city: "",
        temperature: "",
        weather: "",
        videoContext: null,
        appFlag: !1,
        queit: !1,
        showInfoModel: !1,
        title: "",
        momentId: "",
        videoFlag: !0,
        videoList: [],
        touchDot: 0
    }, e(t, "time", 0), e(t, "videoLeft", -12.5), e(t, "interval", ""), e(t, "windowHeight", 0), 
    e(t, "currentFlag", 0), e(t, "linkUrl", ""), e(t, "id", ""), e(t, "showInfo", !1), 
    t),
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
        t = this;
        console.log("***Video onLoad***", e, "啦啦啦", e.shareToken, e.linkUrl, e.id), wx.getSystemInfo({
            success: function(e) {
                "ios" == e.platform && t.setData({
                    appFlag: !0
                });
            }
        });
        var t = this;
        this.setData({
            linkUrl: e.linkUrl || "",
            id: e.id || "",
            dateTime: o.timesData(new Date().getTime()),
            time: o.timestampToTime(new Date().getTime())
        }), wx.request({
            url: o.newUrl() + "elab-marketing-content/moment/queryMomentCurrent",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            success: function(e) {
                console.log("获取视频信息", e), t.setData({
                    source: e.data.single.videoUrl,
                    title: e.data.single.title
                }), console.log(t.data.source, "标题设置"), wx.setNavigationBarTitle({
                    title: t.data.title
                });
            }
        }), wx.request({
            url: o.newUrl() + "elab-marketing-authentication/house/detail",
            method: "POST",
            data: {
                id: a.houseId
            },
            success: function(e) {
                console.log(e, "获取项目明细信息"), t.setData({
                    city: e.data.single.city
                }), t.getWeather(), console.log("获取项目明细信息", t.data.city);
            }
        }), wx.getSystemInfo({
            success: function(e) {
                "ios" == e.platform && t.setData({
                    currentFlag: -1
                }), t.setData({
                    windowHeight: e.windowWidth
                }), console.log("可视区宽度", e.windowWidth), console.log("可视区高度", e.windowHeight);
            }
        });
    },
    getWeather: function() {
        var e = this;
        wx.request({
            url: o.newUrl() + "elab-marketing-content/module/queryWeather",
            method: "POST",
            data: {
                city: e.data.city
            },
            success: function(t) {
                console.log(t, "列表返回");
                try {
                    e.setData({
                        city: t.data.single.data.city,
                        temperature: t.data.single.data.forecast[0].low.substring(3),
                        weather: t.data.single.data.forecast[0].type
                    }), console.log(e.data.temperature, e.data.city, e.data.weather, "////////");
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e.setData({
                        temperature: "",
                        weather: ""
                    });
                }
            },
            fail: function(e) {
                console.log(e, "获取天气信息失败ggggggggggg");
            }
        });
    },
    moveLeft: function() {
        var e = this, t = e.data.videoLeft, o = 20 * (e.data.videoList.length - 1);
        47.5 != e.data.videoLeft ? (t += 20, e.setData({
            videoLeft: t
        }), console.log("向左滑动", e.data.videoLeft, "==", o)) : t = o;
    },
    moveRight: function() {
        var e = this, t = e.data.videoLeft, o = 20 * (e.data.videoList.length - 1);
        92.5 != Math.abs(e.data.videoLeft) ? (t -= 20, e.setData({
            videoLeft: t
        }), console.log("向右滑动", e.data.videoLeft, "=====", o)) : t = o;
    },
    switchVideo: function(e) {
        var t = this;
        e.currentTarget.dataset.video;
        console.log(e.currentTarget), wx.getSystemInfo({
            success: function(o) {
                console.log("手机判断", o), "ios" == o.platform ? t.setData({
                    currentFlag: -1
                }) : "android" == o.platform && (t.setData({
                    currentFlag: e.currentTarget.dataset.id
                }), console.log("安卓手机", t.data.currentFlag));
            }
        }), t.setData({
            source: e.currentTarget.dataset.video.videoUrl
        }), console.log("索引", t.data.currentFlag, e.currentTarget.dataset.id);
    },
    onShow: function(e) {
        console.log("***video.js-onShow***");
        this.videoContext = wx.createVideoContext("myVideo"), wx.hideShareMenu();
    },
    onUnload: function() {
        console.log("***video.js-onUnload***");
        var e = this;
        e.setData({
            momentId: wx.getStorageSync("momentId")
        }), wx.request({
            url: o.newUrl() + "elab-marketing-content/module/modifyMomentView",
            method: "POST",
            data: {
                id: e.data.momentId,
                viewNumber: -1
            },
            success: function(t) {
                console.log(t, "返回首页", e.data.momentId), wx.navigateBack({
                    url: "../index/index"
                });
            }
        });
    },
    goback: function() {
        console.log("返回首页", this.data.momentId), wx.navigateBack({
            url: "../index/index"
        });
    },
    moreVideo: function() {
        var e = this;
        wx.request({
            url: o.newUrl() + "elab-marketing-content/moment/queryMomentCurrentList",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            success: function(t) {
                console.log(t, "视频列表返回"), e.setData({
                    videoList: t.data.list
                }), t.data.list.length <= 4 && e.setData({
                    videoLength: !1
                }), console.log("返回数据", e.data.videoLength, t.data.list.length);
            }
        }), this.setData({
            videoFlag: !1
        }), console.log(this.data.videoFlag, "下雪了");
    },
    hideVideo: function() {
        this.setData({
            videoFlag: !0
        });
    },
    play: function() {
        var e = this;
        setTimeout(function() {
            e.videoContext.requestFullScreen(90), e.setData({
                showInfo: !0
            });
        }, 1e3);
    },
    queitFull: function(e) {
        e.detail.fullScreen ? (this.setData({
            queit: !1
        }), console.log("进入全屏", this.data.queit)) : (this.setData({
            queit: !0
        }), console.log("退出全屏", this.data.queit));
    },
    onReady: function() {
        wx.hideLoading();
    },
    onHide: function() {
        console.log("***video.js-onHide***");
    }
});