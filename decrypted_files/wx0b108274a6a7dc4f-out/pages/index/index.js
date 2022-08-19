var t = require("../../request/api.js"), e = getApp();

Page({
    data: {
        imgurl: t.API_IMG,
        show: !0,
        showFujin: !1
    },
    getClass: function() {
        var e = this;
        wx.request({
            url: t.getClass(),
            success: function(t) {
                e.setData({
                    jishikan: t.data.re[0],
                    zhudake: t.data.re[1],
                    shenlin: t.data.re[2]
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a), a.detail.rawData ? (wx.setStorage({
            key: "userInfo",
            data: a.detail.userInfo
        }), this.setData({
            userInfo: !0
        }), wx.request({
            url: t.saveUser(e.globalData.openid, a.detail.userInfo.nickName, a.detail.userInfo.avatarUrl),
            success: function(t) {}
        })) : this.setData({
            userInfo: !1
        });
    },
    getBanner: function() {
        var e = this;
        wx.request({
            url: t.getBanner(),
            success: function(t) {
                e.setData({
                    bannerList: t.data.re
                });
            }
        });
    },
    toGoodsDetail: function(t) {
        wx.navigateTo({
            url: "/pages/goods_detail/goods_detail?id=" + t.currentTarget.dataset.id
        });
    },
    look: function() {
        wx.navigateTo({
            url: "/pages/everyday/everyday"
        });
    },
    tokc: function(t) {
        wx.navigateTo({
            url: "../video_list/video_list?status=" + t.currentTarget.dataset.status
        });
    },
    toslqj: function(t) {
        wx.navigateTo({
            url: "../video_list/video_list?status=" + t.currentTarget.dataset.status
        });
    },
    toPintuan: function() {
        wx.request({
            url: t.hasPin(),
            success: function(t) {
                1 == t.data.re.pin ? wx.navigateToMiniProgram({
                    appId: "wx3950a029465d5070",
                    extraData: {
                        admin_id: 85
                    },
                    envVersion: "release",
                    success: function(t) {},
                    fail: function(t) {}
                }) : wx.showToast({
                    title: "暂无优惠活动",
                    image: "../../icon/cry.png"
                });
            }
        });
    },
    togame: function() {
        wx.navigateTo({
            url: "../gameDetail/gameDetail"
        });
    },
    tonear: function() {
        var e = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userLocation"] ? wx.navigateTo({
                    url: "../near/near?lat=" + e.data.lat + "&lon=" + e.data.lon
                }) : wx.openSetting({
                    success: function(a) {
                        wx.getLocation({
                            success: function(a) {
                                e.setData({
                                    lat: a.latitude,
                                    lon: a.longitude
                                }), wx.navigateTo({
                                    url: "../near/near?lat=" + a.latitude + "&lon=" + a.longitude
                                }), wx.request({
                                    url: t.nearList(a.latitude, a.longitude),
                                    success: function(t) {
                                        e.setData({
                                            near: t.data
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    tologin: function() {
        this.data.userInfo && wx.navigateTo({
            url: "../login/login"
        });
    },
    fujin: function() {
        var e = this;
        wx.request({
            url: t.fujin(),
            success: function(t) {
                console.log(t), 0 == t.data.re.show_fujin ? (console.log("不显示附近商家"), e.setData({
                    showFujin: !1
                })) : (console.log("显示附近商家"), e.setData({
                    showFujin: !0
                }));
            }
        });
    },
    onLoad: function(a) {
        var n = this;
        this.fujin(), this.getClass(), wx.request({
            url: t.hasPin(),
            success: function(t) {}
        }), wx.request({
            url: t.getBanner2(),
            success: function(t) {
                n.setData({
                    groupList: t.data.re
                });
            }
        }), this.getBanner(), wx.getLocation({
            success: function(e) {
                n.setData({
                    lat: e.latitude,
                    lon: e.longitude
                }), wx.request({
                    url: t.nearList(e.latitude, e.longitude),
                    success: function(t) {
                        n.setData({
                            list: t.data.re.slice(0, 4)
                        });
                    }
                });
            }
        }), wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    Height: t.screenHeight
                }), e.globalData.Height = t.screenHeight;
            }
        }), wx.request({
            url: t.newP(),
            success: function(t) {
                n.setData({
                    msg: t.data.re.title
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                t.setData({
                    userInfo: !0
                });
            },
            fail: function(e) {
                t.setData({
                    userInfo: !1
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = this;
        wx.showLoading({
            title: "努力加载中...",
            success: function() {
                t.getBanner(), t.getClass(), t.fujin(), setTimeout(function() {
                    wx.hideLoading(), wx.stopPullDownRefresh();
                }, 1e3);
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});