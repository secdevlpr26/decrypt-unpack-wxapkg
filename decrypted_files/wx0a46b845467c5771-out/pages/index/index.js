function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = require("../../utils/util.js"), a = require("../../config.js"), o = getApp(), n = t.getImgUrl(), i = null;

new Date().getTime();

Page({
    data: {
        color1: a.color1,
        color2: a.color2,
        color3: a.color3,
        color4: a.color4,
        InitFlag: "0",
        homeLocation: {},
        home3D: {},
        initData: {},
        newsModule: [],
        operationModule: [],
        featureModule: {},
        editControl: {},
        parameterModule: {},
        momentModule: {},
        viewModule: {},
        valueModule: {},
        areaModule: {},
        layoutModule: {},
        effectModule: {},
        sampleModule: {},
        realityModule: {},
        watchModule: {},
        matchModule: {},
        scrollFlag: !0,
        shangjuModel: [],
        despageForChat: "xuanzeguwenliebiao",
        despage: "zhuye",
        title: o.globalData.projectName,
        quanjinUrl: n + "wepy_pro/v1-2/720bg.png",
        mask1: "rgba(135,189,190,0.00)",
        mask2: "#212C2C",
        defaultBanner: [ {
            coverUrl: n + "wepy_pro/v1-2/head.jpg",
            jumpUrl: ""
        } ],
        bannerUrl: n + "wepy_pro/v1-2/banner-1.png",
        rightButtonUrl: n + "wepy_pro/v1-2/right-button.png",
        notificationUrl: n + "wepy_pro/v1-2/notification.png",
        projectFeatureUrl: n + "wepy_pro/v1-2/projectFeature.png",
        statisticsUrl: n + "wepy_pro/v1-2/statistics.png",
        investmentUrl: n + "wepy_pro/v1-2/investment.png",
        locationUrl: n + "wepy_pro/v1-2/location.png",
        neighborUrl: n + "wepy_pro/v1-2/neighbor.png",
        liveUrl: n + "wepy_pro/v1-2/live.png",
        quanjinIconUrl: n + "wepy_pro/v1-2/720icon.png",
        renderUrl: n + "wepy_pro/v1-2/renderings.png",
        typesUrl: n + "wepy_pro/v1-2/types.png",
        threeDUrl: n + "wepy_pro/v1-2/houseType/3D.png",
        showroomsUrl: n + "wepy_pro/v1-2/showrooms.png",
        photographyUrl: n + "wepy_pro/v1-2/photography.png",
        scrollMsg: {
            msgList: []
        },
        homeMoment: {},
        homeBanner: [ {
            coverUrl: n + "wepy_pro/v1-2/head.jpg",
            jumpUrl: ""
        } ],
        Height: "1070",
        showAdmit: !1,
        toView: "",
        gradient1: "#3A4A80",
        gradient2: "#6294A6",
        showPhoneModel: !1,
        swiperCurrent: 0,
        showInfoModel: !1,
        isSend: !1,
        showPhoneAuth: !1,
        showAgree: !1,
        indexLiudian: !1,
        showAuth: !0,
        maidinData: [],
        phoneFun: null,
        phoneFailFun: null,
        infoFun: null,
        infoFailFun: null,
        appid: "",
        flag: !1,
        name: "",
        motto: "Hello World",
        currentTab: "0",
        userInfo: {},
        verifyText: "完成",
        verifyCode: "",
        tel: "",
        setInter: null,
        defaultImagePath: "../../image/wepy_pro/loading.gif",
        loadComplete: !1
    },
    scrollMsg: function() {},
    onUnload: function() {
        console.log("关闭小程序-onUnload");
    },
    onHide: function() {
        console.log("隐藏首页小程序-onHide");
    },
    onShareAppMessage: function(e) {
        var a = {
            clkId: "clk_2cMINA_1",
            type: "CLK",
            clkName: "fenxiang",
            pvCurPageName: this.data.despage || "",
            pvCurPageParams: i
        };
        return t.trackRequest(a, o), {
            imageUrl: o.globalData.shareImage || "",
            title: this.data.title || o.globalData.projectName,
            path: "/pages/index/index?shareToken=" + o.globalData.shareToken
        };
    },
    goToShare: function() {
        var e = {
            clkId: "clk_2cmina_18",
            clkDesPage: "woyaofenxiang",
            clkName: "woyaofenxiang",
            type: "CLK",
            pvCurPageName: "zhuye",
            pvCurPageParams: i
        };
        t.trackRequest(e, o);
    },
    bindChange: function(e) {
        var t = this;
        if ("autoplay" == e.detail.source) return !1;
        var a = "";
        "1" == e.detail.current ? a = "600" : (a = "0" == this.data.homePapa.isShow ? "700" : "1070", 
        console.log("this.data.homePapa.isShow,", this.data.homePapa.isShow, a)), t.setData({
            Height: a,
            currentTab: e.detail.current
        });
    },
    swiperChange: function(e) {
        this.setData({
            swiperCurrent: e.detail.current
        });
    },
    asd: function(e) {
        console.log(e);
    },
    imageLoad: function(e) {
        this.setData({
            loadComplete: !0
        });
    },
    swichNav: function(e) {
        console.log("滑动切换", e);
        var t = this, a = "";
        "1" == e.target.dataset.current ? a = "600" : (a = "0" == this.data.homePapa.isShow ? "700" : "1070", 
        console.log("this.data.homePapa.isShow,", this.data.homePapa.isShow, a)), t.setData({
            Height: a,
            currentTab: e.target.dataset.current
        });
    },
    goImgSwip: function(e) {
        var n = e.currentTarget.dataset.type;
        wx.request({
            url: t.newUrl() + "elab-marketing-content/atlas/listGroup",
            method: "post",
            data: {
                appVersion: "",
                authToken: "",
                environment: "",
                type: n,
                houseId: a.houseId,
                openId: o.globalData.openid,
                uid: ""
            },
            success: function(a) {
                if (a.data.list && a.data.list[0]) {
                    var l = {
                        clkId: e.currentTarget.dataset.clkid || "",
                        clkDesPage: "tupianku",
                        clkName: e.currentTarget.dataset.despage || "",
                        type: "CLK",
                        pvCurPageName: "zhuye",
                        pvCurPageParams: i
                    };
                    t.trackRequest(l, o), wx.navigateTo({
                        url: "../scaleImg/scaleImage?type=" + n
                    });
                }
            }
        });
    },
    goToShareProgram: function() {
        wx.getStorageSync("shareProgram") ? wx.getSetting({
            success: function(e) {
                console.log("***rtcroomCom.onLoad***getSetting", e), e.authSetting["scope.writePhotosAlbum"] ? wx.navigateTo({
                    url: "../shareProgram/shareProgram"
                }) : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.navigateTo({
                            url: "../shareProgram/shareProgram"
                        });
                    }
                });
            }
        }) : wx.showToast({
            title: "暂时无法获取分享图，请稍后再试",
            icon: "none",
            duration: 1500
        });
    },
    shareNoLink: function() {
        return wx.showToast({
            title: "敬请期待...",
            icon: "warn",
            duration: 1500
        }), !1;
    },
    goWebView: function(e) {
        var a = this, n = e.currentTarget.dataset.url;
        if (n.includes("/layout")) return wx.showToast({
            title: "敬请期待...",
            icon: "warn",
            duration: 1500
        }), !1;
        var i = e.currentTarget.dataset.srcurl, l = e.currentTarget.dataset.img, r = encodeURIComponent(n);
        if (null == n || 0 != n.indexOf("http")) return !1;
        if (console.log("***linkUrl***", i), i) {
            var s = {
                houseId: o.globalData.houseid,
                picUrl: i,
                numberType: "2",
                status: "1",
                uniqueId: o.globalData.openid
            };
            wx.request({
                url: t.url(),
                method: "POST",
                data: t.reformParam(t.likeUrl, s),
                header: {
                    "content-type": "application/json"
                },
                success: function(e) {
                    if (e.data.success && e.data.single) {
                        console.log("***like***", e.data.single);
                        var t = a.data.home3D;
                        t.viewCount = Number(t.viewCount) + 1, a.setData({
                            home3D: t
                        });
                    } else console.log("***Scale-setLike***", e);
                }
            });
        }
        e.currentTarget.dataset.pageid, e.currentTarget.dataset.key;
        wx.navigateTo({
            url: "../webView/webView?view=" + r + "&linkUrl=" + i + "&imgUrl=" + l
        });
    },
    goVideo: function(e) {
        var a = this, n = e.currentTarget.dataset.srcurl;
        console.log("/////////////linkUrl/////////////", e);
        var i = {
            houseId: o.globalData.houseid,
            picUrl: n,
            numberType: "2",
            status: "1",
            uniqueId: o.globalData.openid
        };
        wx.request({
            url: t.url(),
            method: "POST",
            data: t.reformParam(t.likeUrl, i),
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.data.success && e.data.single) {
                    console.log("***like-homeMoment.viewCount***", e.data.single), a.reqVideoInfo(n, e.data.single.id);
                    var t = a.data.homeMoment;
                    t.viewCount = Number(t.viewCount) + 1, a.setData({
                        homeMoment: t
                    });
                } else console.log("***Scale-setLike***", e);
            }
        });
    },
    reqVideoInfo: function(e, a) {
        var n = {
            houseid: o.globalData.houseid
        };
        wx.request({
            url: t.url(),
            method: "POST",
            data: t.reformParam(t.videoInfo, n),
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                t.data.success && t.data.list ? (console.log("***like***", t.data.list), wx.navigateTo({
                    url: "../video/video?source=" + encodeURI(decodeURI(t.data.list[0].video_url)) + "&linkUrl=" + e + "&id=" + a
                })) : (console.log("***reqVideoInfo***", t), wx.showToast({
                    title: t.data.message,
                    icon: "none",
                    duration: 1e3
                }));
            }
        });
    },
    userCheck: function(e) {
        console.log(e.target.dataset.name), wx.navigateTo({
            url: "../detail/detail?id=" + e.target.dataset.name
        });
    },
    log: function(e) {
        this.data.userInfo.nickName;
        wx.navigateTo({
            url: "../multiroom/roomlist/roomlist"
        });
    },
    agree: function(e) {
        var a = {
            clkId: "clk_2cmina_20",
            clkDesPage: "",
            clkName: "tongyi",
            type: "CLK",
            pvCurPageName: "zhuye",
            pvCurPageParams: i
        };
        t.trackRequest(a, o), this.setData({
            showAgree: !0
        });
    },
    noagree: function(e) {
        this.setData({
            showAgree: !1
        });
    },
    goHouseType: function() {
        var e = {
            clkId: "clk_2cmina_12",
            clkDesPage: "huxingye",
            clkName: "huxing",
            type: "CLK",
            pvCurPageName: "zhuye",
            pvCurPageParams: i
        };
        t.trackRequest(e, o), wx.navigateTo({
            url: "../houseType/houseType"
        });
    },
    goToNoticeList: function() {
        var e = {
            clkId: "clk_2cMINA_0",
            clkDesPage: "xiaoxitongzhi",
            clkName: "xiaoxitongzhi",
            type: "CLK",
            pvCurPageName: "zhuye",
            pvCurPageParams: i
        };
        t.trackRequest(e, o), wx.navigateTo({
            url: "../noticeList/noticeList"
        });
    },
    goToShareFriend: function() {
        var e = {
            clkId: "clk_2cmina_19",
            clkDesPage: "wodetuijian",
            clkName: "wofenxiangdehaoyou",
            type: "CLK",
            pvCurPageName: "zhuye",
            pvCurPageParams: i
        };
        t.trackRequest(e, o), console.log("***goToShareFriend-authorizePhone***", o.globalData.phone), 
        wx.navigateTo({
            url: "../shareFriend/shareFriend"
        });
    },
    video: function(e) {
        this.data.userInfo.nickName;
        wx.navigateTo({
            url: "../multiroom/chatlist/chatList"
        });
    },
    goChatList: function(e) {
        if (!o.globalData.openid) return !1;
        if (wx.getStorageSync("isSend" + a.houseId)) {
            n = {
                clkId: "clk_2cmina_23",
                clkDesPage: "xiaoxiliebiao",
                clkName: "zaixianzixun",
                type: "CLK",
                pvCurPageName: "zhuye",
                pvCurPageParams: i
            };
            t.trackRequest(n, o), wx.navigateTo({
                url: "../messagesList/messagesList"
            });
        } else {
            var n = {
                clkId: "clk_2cmina_23",
                clkDesPage: "xuanzeguwenliebiao",
                clkName: "zaixianzixun",
                type: "CLK",
                pvCurPageName: "zhuye",
                pvCurPageParams: i
            };
            t.trackRequest(n, o), wx.navigateTo({
                url: "../counselorList/counselorList"
            });
        }
    },
    goxzs: function(e) {
        console.log(e.detail.rawData), o.globalData.userInfo = e.detail.userInfo, wx.setStorageSync("userInfo", e.detail.userInfo), 
        wx.navigateTo({
            url: "../multiroom/aide/aide"
        });
    },
    onLoad: function(e) {
        i = JSON.stringify(e);
        var t = this;
        console.log("***onLoad***", e, e.shareToken), e && e.shareToken && "null" != e.shareToken && "undefined" != e.shareToken && (o.globalData.fromChannel = e.shareToken), 
        t.authorizeIndexPhone();
    },
    onReady: function() {
        wx.setNavigationBarTitle({
            title: o.globalData.projectName
        });
    },
    proto_getLoginInfo: function() {
        wx.request({
            url: t.newUrl() + "elab-marketing-authentication/tencent/signature",
            method: "POST",
            data: {
                identifier: o.globalData.identifier,
                appId: a.sdkAppID
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.data.code) return console.log("获取登录信息失败，调试期间请点击右上角三个点按钮，选择打开调试"), void wx.showToast({
                    title: e.data.message + "[" + e.data.code + "]",
                    icon: "warn",
                    duration: 1500
                });
                console.log("获取usersig登录信息成功", e), o.globalData.userSig = e.data.single.signature;
            },
            fail: function(e) {
                console.log("获取IM信息失败: ", e), "request:fail timeout" == e.errMsg ? wx.showToast({
                    title: "网络请求超时，请检查网络状态",
                    icon: "warn",
                    duration: 1500
                }) : wx.showToast({
                    title: e.errMsg,
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    onShow: function(e) {
        this.setData({
            maidinData: [ {
                id: "#jingcaishijiao",
                eventId: "exp_2cmina_0",
                flag: !0
            }, {
                id: "#liaojiexiangmu",
                eventId: "exp_2cmina_1",
                flag: !0
            }, {
                id: "#jingcaitupian",
                eventId: "exp_2cmina_2",
                flag: !0
            }, {
                id: "#fenxianggeipengyou",
                eventId: "exp_2cmina_3",
                flag: !0
            } ]
        }), wx.setStorageSync("loadTime", new Date().getTime()), this.getInitData(), console.log("***onShow***", this.data.name), 
        wx.showShareMenu({
            withShareTicket: !0
        }), wx.getStorageSync("phone") ? this.setData({
            showPhoneAuth: !0
        }) : this.setData({
            showPhoneAuth: !1
        }), wx.getStorageSync("indexLiudian") && this.setData({
            indexLiudian: !0
        }), o.login(function() {
            var e = {
                ip: o.globalData.ip,
                type: "PV",
                pvId: "P_2cMINA_1",
                pvCurPageName: "zhuye",
                pvCurPageParams: i,
                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
                pvLastPageParams: "",
                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
            };
            console.log(e, "埋点*app.globalData.userInfo*", o.globalData.userInfo), t.trackRequest(e, o);
        });
    },
    scrollExp: function(e) {
        var a = this, n = this;
        if (o.globalData.openid && this.data.scrollFlag) {
            if (this.data.scrollFlag = !1, setTimeout(function() {
                a.data.scrollFlag = !0;
            }, 1e3), console.log(this.data.maidinData), this.data.maidinData.length < 1) return;
            this.data.maidinData.forEach(function(e, l) {
                a.getTop(e.id, function() {
                    console.log(e, "ooooo");
                    var a = {
                        type: "EXP",
                        eventId: e.eventId,
                        pvCurPageName: "zhuye",
                        pvCurPageParams: i,
                        eventModuleDes: e.id.slice(1),
                        eventName: e.id.slice(1),
                        eventInnerModuleId: ""
                    };
                    t.trackRequest(a, o), console.log(e.id, l), n.data.maidinData[l].id = 0, console.log(n.data.maidinData);
                });
            });
        }
    },
    getTop: function(e, t) {
        if (e) {
            var a = wx.createSelectorQuery();
            return a.select(e).boundingClientRect(), a.selectViewport().scrollOffset(), a.exec(function(e) {
                if (!e[0]) return !1;
                console.log(e[0].top), e[0].top < 550 && e[0].top > 100 && t();
            });
        }
    },
    goBearVideo: function(e) {
        var t = e.currentTarget.dataset.jump, a = e.currentTarget.dataset.item.title || "";
        console.log("/////////////goBearVideo/////////////", e), t && wx.navigateTo({
            url: "../bearVideo/bearVideo?source=" + t + "&title=" + a
        });
    },
    goJump: function(e) {
        if (console.log(e.currentTarget.dataset), e.currentTarget.dataset.jump) {
            var a = {
                type: "CLK",
                pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
                expand: "",
                clkDesPage: e.currentTarget.dataset.despage || "",
                clkName: e.currentTarget.dataset.despage || "",
                pvCurPageName: "zhuye",
                pvCurPageParams: i,
                clkId: e.currentTarget.dataset.clkid,
                clkParams: "clk_2cmina_4" == e.currentTarget.dataset.clkid ? {
                    trendId: e.currentTarget.dataset.item.id,
                    title: e.currentTarget.dataset.item.title || "",
                    jumpUrl: e.currentTarget.dataset.jump
                } : {
                    linkParam: "view=" + encodeURIComponent(e.currentTarget.dataset.jump) + "&title=" + e.currentTarget.dataset.title,
                    imageCode: e.currentTarget.dataset.item && e.currentTarget.dataset.item.id ? e.currentTarget.dataset.item.id : "",
                    jumpUrl: e.currentTarget.dataset.jump || ""
                }
            };
            e.currentTarget.dataset.clkid && t.trackRequest(a, o), o.globalData.currDespage = e.currentTarget.dataset.despage || "", 
            wx.navigateTo({
                url: "../webView/webView?view=" + encodeURIComponent(e.currentTarget.dataset.jump) + "&title=" + e.currentTarget.dataset.title,
                success: function() {},
                fail: function(e) {
                    console.log(e);
                }
            });
        }
    },
    goHealthCenter: function() {
        wx.navigateTo({
            url: "../healthCenter/healthCenter",
            success: function() {},
            fail: function(e) {
                console.log(e);
            }
        });
    },
    goDreamHabitat: function() {
        wx.navigateTo({
            url: "../dreamHabitat/dreamHabitat",
            success: function() {},
            fail: function(e) {
                console.log(e);
            }
        });
    },
    goMoment: function(e) {
        var n = this;
        console.log("此时此刻", e), wx.request({
            url: t.newUrl() + "elab-marketing-content/moment/queryMomentCurrent",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            success: function(a) {
                console.log("获取视频信息", a), null != a.data.single ? e.currentTarget.dataset.id && (wx.setStorageSync("momentId", e.currentTarget.dataset.id), 
                wx.request({
                    url: t.newUrl() + "elab-marketing-content/module/modifyMomentView",
                    method: "POST",
                    data: {
                        id: e.currentTarget.dataset.id,
                        viewNumber: 1
                    },
                    success: function(e) {
                        var a = {
                            clkDesPage: "shishishijing",
                            clkName: "shishishijing",
                            clkId: "clk_2cmina_8",
                            clkParams: {
                                lookNum: n.data.momentModule.viewCount || "0"
                            },
                            type: "CLK"
                        };
                        t.trackRequest(a, o), wx.navigateTo({
                            url: "../video/video"
                        });
                    }
                })) : wx.showToast({
                    title: "暂未直播"
                });
            }
        });
    },
    getInitData: function() {
        var o = this;
        wx.request({
            url: t.newUrl() + "elab-marketing-content/module/queryPositionHome",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                if (n.data.success) {
                    if (n.data.single) {
                        var i = n.data.single;
                        if (o.setData({
                            InitFlag: "1",
                            initData: i,
                            homeBanner: i.focusModule.contentList,
                            newsModule: i.newsModule ? i.newsModule : {},
                            operationModule: i.operationModule.contentList && i.operationModule.contentList ? i.operationModule.contentList : [],
                            featureModule: i.featureModule.contentList && i.featureModule.contentList[0] ? i.featureModule.contentList[0] : {},
                            editControl: i.editControl ? i.editControl : {},
                            parameterModule: i.parameterModule.contentList && i.parameterModule.contentList[0] ? i.parameterModule.contentList[0] : {},
                            momentModule: i.momentModule ? i.momentModule : {},
                            viewModule: i.viewModule.contentList && i.viewModule.contentList[0] ? i.viewModule.contentList[0] : {},
                            valueModule: i.valueModule.contentList && i.valueModule.contentList[0] ? i.valueModule.contentList[0] : {},
                            areaModule: i.areaModule.contentList && i.areaModule.contentList[0] ? i.areaModule.contentList[0] : {},
                            layoutModule: i.layoutModule.contentList && i.layoutModule.contentList[0] ? i.layoutModule.contentList[0] : {},
                            effectModule: i.effectModule.contentList && i.effectModule.contentList[0] ? i.effectModule.contentList[0] : {},
                            sampleModule: i.sampleModule.contentList && i.sampleModule.contentList[0] ? i.sampleModule.contentList[0] : {},
                            realityModule: i.realityModule.contentList && i.realityModule.contentList[0] ? i.realityModule.contentList[0] : {},
                            watchModule: i.watchModule.contentList && i.watchModule.contentList[0] ? i.watchModule.contentList[0] : {},
                            matchModule: i.matchModule.contentList && i.matchModule.contentList[0] ? i.matchModule.contentList[0] : {}
                        }), o.data.parameterModule.jumpUrl || wx.request({
                            url: t.newUrl() + "elab-marketing-authentication/house/selectHouseParameter",
                            method: "POST",
                            data: {
                                id: a.houseId
                            },
                            success: function(t) {
                                200 == t.statusCode && t.data.single && t.data.single.catalogs && (o.setData(e({}, "parameterModule.jumpUrl", a.parameterUrl + a.houseId)), 
                                console.log(o.data.parameterModule.jumpUrl, a.parameterUrl, a.houseId));
                            }
                        }), !o.data.watchModule.jumpUrl) {
                            var l = !1;
                            wx.request({
                                url: t.newUrl() + "elab-marketing-authentication/layoutVr/house",
                                method: "POST",
                                data: {
                                    houseId: a.houseId,
                                    pageNo: 1,
                                    pageSize: 10
                                },
                                success: function(t) {
                                    200 == t.statusCode && t.data.success && t.data.list && t.data.list.length > 0 && (t.data.list.forEach(function(e) {
                                        2 == e.catalog && (l = !0);
                                    }), l && o.setData(e({}, "watchModule.jumpUrl", a.tdviewUrl + a.houseId)), console.log(o.data.watchModule.jumpUrl, "watch"));
                                }
                            });
                        }
                    }
                    console.log(o.data.initData, "oooooooooooooo"), wx.hideLoading();
                }
            },
            fail: function(e) {
                console.log(e, "ghghgg"), wx.hideLoading();
            }
        }), wx.request({
            url: t.newUrl() + "elab-marketing-authentication/banner/pageList",
            method: "POST",
            data: {
                houseId: a.houseId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (200 == e.statusCode && e.data.success) {
                    var t = [];
                    e.data.pageModel.resultSet && e.data.pageModel.resultSet.forEach(function(e) {
                        1 == e.onlineStatus && t.push(e);
                    }), o.setData({
                        shangjuModel: t
                    }), console.log(o.data.shangjuModel);
                }
            }
        });
    },
    getUserInfo: function(e) {
        var t = this;
        if (wx.setStorageSync("ISauthorizeInfo", !0), console.log(e.detail, "kkkkkkkkkkkkkkkkkkkk"), 
        this.setData({
            showInfoModel: !1
        }), e.detail.errMsg.includes("fail")) wx.showModal({
            title: "提示",
            showCancel: !1,
            content: "您点击了拒绝授权,部分功能将无法向您开放",
            success: function(e) {
                "function" == typeof t.data.infoFailFun && t.data.infoFailFun();
            }
        }); else {
            o.globalData.userInfo = e.detail.userInfo;
            this.data.userInfo.nickName;
            wx.setStorageSync("userInfo", e.detail.userInfo), "function" == typeof t.data.infoFun && t.data.infoFun();
        }
    },
    getPhoneNumber: function(e) {
        var t = this;
        this.setData({
            showPhoneModel: !1
        }), wx.setStorageSync("ISauthorizePhone", !0);
        var a = e.detail.iv, n = (e.detail.errMsg, o.globalData.houseid, o.globalData.tonken || ""), i = e.detail.encryptedData, l = o.globalData.sessionKey, r = o.globalData.appid;
        console.log("***token***", n), o.globalData.tmpPhone = !0, console.log("****getPhoneNumber****"), 
        e.detail.errMsg.includes("fail") ? "function" == typeof t.data.phoneFailFun && t.data.phoneFailFun() : (i && l && a || wx.showToast({
            title: "系统提示:授权信息错误",
            icon: "warn",
            duration: 1500
        }), o.globalData.single ? t.getPhone(i, l, r, a, n) : t.data.setInter = setInterval(function() {
            o.globalData.single && (t.getPhone(i, l, r, a, n), clearInterval(t.data.setInter));
        }, 200));
    },
    getPhone: function(e, n, i, l, r) {
        var s = this, u = {
            encryptedData: e,
            sessionKey: n,
            appId: i,
            customerId: o.globalData.single && o.globalData.single.id ? o.globalData.single.id : "",
            houseId: a.houseId,
            shareParam: o.globalData.fromChannel,
            iv: l
        };
        wx.request({
            url: t.newUrl() + "elab-marketing-authentication/position/queryPositionPhone",
            method: "POST",
            data: u,
            header: {
                "content-type": "application/json",
                token: r
            },
            success: function(e) {
                console.log("解密后 data: ", e), e.data.success && e.data.single && (console.log(e.data.single), 
                o.globalData.phone = e.data.single.phone, wx.setStorageSync("phone", e.data.single.phone), 
                s.setData({
                    showPhoneModel: !1,
                    showPhoneAuth: !0
                }), "function" == typeof s.data.phoneFun && s.data.phoneFun());
            },
            fail: function(e) {
                "function" == typeof s.data.phoneFailFun && s.data.phoneFailFun(), console.log(e, "解密手机号失败ggggggggggg");
            }
        });
    },
    authorizePhone: function(e, t) {
        var a = this;
        console.log("***authorizePhone***", o.globalData.phone, wx.getStorageSync("phone")), 
        wx.getStorageSync("ISauthorizePhone") ? (a.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : a.setData({
            showPhoneModel: !0,
            phoneFun: e,
            phoneFailFun: t || null
        });
    },
    authorizeIndexPhone: function(e, t) {
        var a = this;
        wx.getStorageSync("ISauthorizePhone") || (o.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", o.globalData.phone, wx.getStorageSync("phone")), 
        wx.getStorageSync("ISauthorizePhone") ? (a.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : a.setData({
            showPhoneModel: !0,
            phoneFun: e || null,
            phoneFailFun: t || null
        }));
    },
    authorizeInfo: function(e, t) {
        var a = this;
        o.globalData.userInfo = wx.getStorageSync("userInfo"), wx.getSetting({
            success: function(o) {
                console.log("getSetting", o), o.authSetting["scope.userInfo"] ? (a.setData({
                    showInfoModel: !1
                }), "function" == typeof e && e()) : a.setData({
                    showInfoModel: !0,
                    infoFun: e,
                    infoFailFun: t || null
                });
            },
            fail: function() {
                wx.showToast({
                    title: "系统提示:网络错误",
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    authorizeIndexInfo: function(e, t) {
        var a = this;
        wx.getStorageSync("ISauthorizeInfo") ? "function" == typeof e && e() : (o.globalData.userInfo = wx.getStorageSync("userInfo"), 
        wx.getSetting({
            success: function(o) {
                console.log("getSetting", o), o.authSetting["scope.userInfo"] ? (a.setData({
                    showInfoModel: !1
                }), "function" == typeof e && e()) : a.setData({
                    showInfoModel: !0,
                    infoFun: e,
                    infoFailFun: t || null
                });
            },
            fail: function() {
                wx.showToast({
                    title: "系统提示:网络错误",
                    icon: "warn",
                    duration: 1500
                });
            }
        }));
    },
    userPhone: function(e) {
        console.log(e, "寂静欢喜"), this.setData({
            tel: e.detail.value
        });
    },
    verifyCode: function(e) {
        console.log(e, "yuan"), this.setData({
            verifyCode: e.detail.value
        });
    },
    getVerifyCode: function() {
        var e = this;
        e.data.isSend || (/^1\d{10}$/.test(e.data.tel) ? wx.request({
            url: t.newUrl() + "elab-marketing-authentication/vcode/verifyCodeForLeavePhone/send",
            method: "POST",
            data: {
                phoneNumber: e.data.tel
            },
            header: {
                "content-type": "application/json",
                tonken: o.globalData.tonken
            },
            success: function() {
                e.setData({
                    isSend: !0,
                    showAdmit: !0,
                    toView: "empty-box"
                });
                var t = 60, a = setInterval(function() {
                    t > 0 ? (t -= 1, e.setData({
                        verifyText: t + "秒后获取"
                    })) : (e.setData({
                        verifyText: "完成",
                        isSend: !1
                    }), clearInterval(a));
                }, 1e3);
            },
            fail: function() {
                wx.showToast({
                    title: "网络连接出现问题，请稍后再试！",
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.showToast({
            title: "输入的手机号不合法",
            icon: "none",
            duration: 2e3
        }));
    },
    sendTel: function() {
        var e = this;
        if (!e.data.flag) {
            if (e.setData({
                flag: !0
            }), !/^1\d{10}$/.test(e.data.tel)) return wx.showToast({
                title: "请输入正确的手机号",
                icon: "none",
                duration: 2e3
            }), void e.setData({
                flag: !1
            });
            if (console.log(e.data.verifyCode.length), e.data.verifyCode.length < 1) return wx.showToast({
                title: "验证码不能为空",
                icon: "none",
                duration: 2e3
            }), void e.setData({
                flag: !1
            });
            wx.request({
                url: t.newUrl() + "elab-marketing-authentication/contact/leavephone/miniapp/insert",
                method: "POST",
                data: {
                    houseId: a.houseId,
                    leavePhoneCustomerId: o.globalData.single && o.globalData.single.id ? o.globalData.single.id : "",
                    shareParam: o.globalData.fromChannel,
                    mobile: e.data.tel,
                    code: e.data.verifyCode,
                    source: "3"
                },
                header: {
                    "content-type": "application/json",
                    tonken: o.globalData.tonken
                },
                success: function(a) {
                    if (console.log(a, "//////"), a.data.success) {
                        wx.setStorageSync("phone", e.data.tel), wx.setStorageSync("indexLiudian", !0), e.setData({
                            showPhoneAuth: !0,
                            showAgree: !0
                        }), e.setData({
                            dialog: !0
                        });
                        var n = {
                            clkId: "clk_2cmina22",
                            clkDesPage: "zhuye",
                            clkName: "zaixianliudian",
                            type: "CLK",
                            pvCurPageName: "zhuye",
                            clkParams: {
                                mobile: e.data.tel
                            },
                            pvCurPageParams: i
                        };
                        t.trackRequest(n, o), setTimeout(function() {
                            e.setData({
                                dialog: !1
                            });
                        }, 2e3);
                    } else wx.showToast({
                        title: a.data.message,
                        icon: "none",
                        duration: 2e3
                    }), e.setData({
                        flag: !1
                    });
                },
                fail: function(t) {
                    wx.showToast({
                        title: res.data.message,
                        icon: "none",
                        duration: 2e3
                    }), e.setData({
                        flag: !1
                    });
                }
            });
        }
    },
    telData: function() {
        var e = this, a = o.globalData.houseid, n = getCurrentPages(), i = n[n.length - 1], l = i.route;
        console.log("当前页面链接", i.route), wx.request({
            url: t.url(),
            method: "POST",
            data: t.reformParam(t.savephone, {
                houseid: a,
                name: o.globalData.loginid,
                channel: o.globalData.fromChannel,
                mobile: e.data.tel,
                platform: "3",
                refer: l
            }),
            success: function() {
                wx.setStorageSync("indexLiudian", !0), e.setData({
                    showPhoneAuth: !0,
                    showAgree: !0
                });
            },
            fail: function(e) {}
        });
    }
});