var t = getApp();

Page({
    data: {
        videoPlay: null,
        imgUrls: [],
        imgBanner: [],
        hostUrl: t.globalData.hostUrl,
        word: t.globalData.word,
        indicatorDots: !0,
        autoplay: !0,
        interval: 3e3,
        duration: 500
    },
    videoPlay: function(e) {
        var a = this, n = wx.getStorageSync("userId");
        null != n && n > 0 && "" != n ? wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getUser",
                userId: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                if ("" == o.data || null != o.data.rows[0].SHOPCODE) {
                    var i = e.currentTarget.id;
                    wx.request({
                        url: t.globalData.apiUrl,
                        data: {
                            opt: "addvideo",
                            userId: n,
                            title: e.currentTarget.dataset.title,
                            vvid: e.currentTarget.dataset.vvid
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(t) {}
                    }), a.setData({
                        _index: i
                    }), wx.createVideoContext(a.data._index).stop(), setTimeout(function() {
                        wx.createVideoContext(i).play();
                    }, 500);
                } else wx.showToast({
                    title: "您不是学员!",
                    icon: "loading",
                    duration: 1500
                });
            }
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    bindTextAreaBlur: function(t) {
        this.setData({});
    },
    formSubmit: function(e) {
        var a = this;
        console.log(e.detail.value.mobile), console.log(e.detail.value.txtname), console.log(e.detail.value.desc);
        var n = wx.getStorageSync("userId");
        null != n && n > 0 && "" != n ? 0 == e.detail.value.mobile.length || 0 == e.detail.value.txtname.length ? (wx.showToast({
            title: "输入不得为空!",
            icon: "loading",
            duration: 1500
        }), setTimeout(function() {
            wx.hideToast();
        }, 2e3)) : 11 != e.detail.value.mobile.length ? (wx.showToast({
            title: "请输入11位手机号码!",
            icon: "loading",
            duration: 1500
        }), setTimeout(function() {
            wx.hideToast();
        }, 2e3)) : wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "postMessage",
                txtname: e.detail.value.txtname,
                mobile: e.detail.value.mobile,
                desc: "描述：" + e.detail.value.desc + ",性别：" + e.detail.value.sex,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? (a.setData({
                    txtname: "",
                    mobile: "",
                    desc: "",
                    details: ""
                }), wx.showToast({
                    title: "提交成功！",
                    icon: "success",
                    duration: 1e3
                })) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        }) : wx.showModal({
            title: "温馨提示",
            content: "请先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    formReset: function() {
        console.log("form发生了reset事件");
    },
    onShow: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.windowHeight * (750 / e.windowWidth) - 180;
                t.setData({
                    winHeight: a,
                    scrollHeight: e.windowHeight,
                    page: 0,
                    merchants: []
                });
            }
        }), t.getBanner(1), t.getBannerType(2), t.getArticlePage(), t.getArticlePage1(), 
        t.getArticlePage2();
    },
    getBanner: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getBanner",
                typeId: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && ((e = 1) ? a.setData({
                    imgUrls: t.data.rows
                }) : (e = 2) && a.setData({
                    imgBanner: t.data.rows
                }));
            }
        });
    },
    getBannerType: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getBanner",
                typeId: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    imgBanner: t.data.rows
                });
            }
        });
    },
    getArticlePage: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 93,
                page: 1,
                size: 46
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    newList: t.data.rows
                });
            }
        });
    },
    getArticlePage1: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 1,
                page: 1,
                size: 6
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    article: t.data.rows
                });
            }
        });
    },
    getArticlePage2: function(e) {
        var a = this, n = wx.getStorageSync("userId");
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getArticlePage",
                classId: 4,
                page: 1,
                size: 6,
                userId: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    videoList: t.data.rows
                });
            }
        });
    },
    searchActiveChangeinput: function(e) {
        var a = e.detail.value;
        t.globalData.word = a;
    },
    searchSubmit: function() {
        wx.navigateTo({
            url: "/pages/goods_list/goods_list"
        });
    },
    changeIndicatorDots: function(t) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    changeAutoplay: function(t) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    intervalChange: function(t) {
        this.setData({
            interval: t.detail.value
        });
    },
    durationChange: function(t) {
        this.setData({
            duration: t.detail.value
        });
    },
    onLoad: function() {
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(t) {}
                });
            }
        });
    },
    onShareAppMessage: function() {
        return "button" === res.from && console.log(res.target), {
            title: "OBS实训平台",
            path: "/pages/index/index",
            success: function(t) {},
            fail: function(t) {}
        };
    }
});