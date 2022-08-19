var e = require("../../../util/util"), t = require("../../../comm/script/fetch"), o = require("../../../comm/script/config"), i = (require("../../../component/message/message.js"), 
getApp()), a = require("../../../utils/server");

Page({
    data: {
        authorizeUrl: "https://xcx006.ycdongxu.com/imgs/shouquan.png",
        itemList: [],
        itemList2: [],
        showList: [ {
            content: "维修保障",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxzl.png"
        }, {
            content: "极速优质服务",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/jsyz.png"
        }, {
            content: "价格公开透明",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/jgtm.png"
        } ],
        isShow: !1,
        pageName: "home",
        hasLogin: !1,
        indicatorDots: !1,
        vertical: !1,
        autoplay: !0,
        interval: 3e3,
        duration: 500,
        active_color: "#ffffff",
        userInfo: {},
        bannerList: [],
        hotFixList: {},
        selectedDevice: {},
        showRefresher: !1,
        goToChooseDevice: !0,
        bannerOk: !1,
        faultOk: !1,
        hotFixOk: !1,
        bannerActive: 0,
        listBox: []
    },
    center: function() {
        wx.navigateTo({
            url: "/pages/activitiy/couponHome/couponHome"
        });
    },
    coupon: function() {
        wx.navigateTo({
            url: "../../coupon/index"
        });
    },
    news: function() {
        wx.navigateTo({
            url: "/pages/member/aboutus/index"
        });
    },
    onLoad: function() {
        this.setData({
            showRefresher: !1
        }), wx.startAccelerometer(function(e) {
            console.log(e);
        }, function(e) {
            console.log(e);
        }), wx.showLoading || wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法正常使用小程序，请升级到最新微信版本后重试。",
            complete: function() {
                wx.navigateBack();
            }
        }), wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中",
            mask: !0
        }), this.loadBanner(), console.log(i.globalData.wxDeviceInfo);
        var e = getApp();
        e.getOpenId(function() {
            var t = getApp().globalData.openid;
            a.getJSON("/User/validateOpenid", {
                openid: t
            }, function(t) {
                200 == t.data.code ? getApp().globalData.userInfo = t.data.data : "400" == t.data.code && (console.log("need register"), 
                e.register(function() {}));
            });
        });
    },
    loadBanner: function() {
        var e = this;
        a.getJSON("/Index/home", function(t) {
            var o = t.data.result.ad;
            wx.hideLoading(), wx.hideNavigationBarLoading(), e.setData({
                isShow: !0
            }), e.setData({
                hots: t.data.result.hots,
                banner: o,
                article: t.data.article,
                spec: t.data.result.goodsTypeList,
                navigations: t.data.result.navigations
            });
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.loadBanner();
    },
    onShareAppMessage: function(e) {
        var t = getApp().globalData.userInfo.user_id;
        return console.log("/pages/user_center/user_center?user_id=" + t), {
            title: "享收技术支持",
            path: "/pages/user_center/user_center?user_id=" + t,
            success: function(e) {},
            fail: function(e) {}
        };
    },
    getListBox: function() {
        var e = this;
        t.getListBox(function(t) {
            e.setData({
                listBox: t
            });
        }, function(e) {});
    },
    getIcons: function() {
        var e = this, o = [], i = [], a = [];
        t.getAllFaults(function(t) {
            t.forEach(function(e, t, n) {
                var s = {};
                if (s.id = e.Id, s.content = e.Name, s.imgUrl = e.imgurl, s.bind = "bindIcon", 1 == e.jump_type && (s.bind = "goToMemoryUp"), 
                t < 8) o.push(s); else {
                    if (i.push(s), t == n.length - 1) return void a.push(i);
                    t % 2 && (a.push(i), i = []);
                }
            }), e.setData({
                itemList: o,
                itemList2: a,
                faultOk: !0
            }), e.ifShowPage();
        }, function(t) {
            e.showRefresher();
        });
    },
    getNowTime: function() {
        var e = this;
        t.getNowtime.call(e, function(t) {
            var o = parseInt(new Date().getTime() / 1e3), a = t.now_time, n = Number(a) - Number(o);
            i.setTimeDifference(n), e.getBannerList(), e.getConfigLists(), e.getListBox(), e.getIcons(), 
            e.getHotFix(), e.getHwxDeviceInfo();
        }, function(t) {
            e.showRefresher();
        });
    },
    getConfigLists: function() {
        var e = this;
        t.configList(function(t) {
            i.setConfigLists(t), e.setData({
                bannerActive: t.bannerActive
            }), e.addVersion();
        }, function(e) {});
    },
    getHwxDeviceInfo: function() {
        var e = this;
        t.getHwxDeviceInfo(i.globalData.wxDeviceInfo.model, function(t) {
            e.setData({
                selectedDevice: t
            }), e.setData({
                goToChooseDevice: !1
            }), i.setHiDeviceInfo(t), e.setSelectedDeviceInfo();
        }, function(e) {});
    },
    getBannerList: function() {
        var e = this;
        t.getBannerList.call(e, function(t) {
            e.setData({
                bannerList: t,
                bannerOk: !0
            }), t.length > 1 && e.setData({
                indicatorDots: !0
            }), e.ifShowPage();
        }, function(t) {
            e.showRefresher();
        });
    },
    getHotFix: function() {
        var e = this;
        t.getHotFix.call(e, function(t) {
            e.setData({
                hotFixList: t,
                hotFixOk: !0
            }), e.ifShowPage();
        }, function(t) {
            e.showRefresher();
        });
    },
    bindIcon: function(e) {
        var t = e.currentTarget.dataset;
        if (this.data.goToChooseDevice) this.goToChooseDevice(e); else {
            this.data.selectedDevice.faultid = t.faultid, this.data.selectedDevice.faultname = t.faultname;
            var o = JSON.stringify(this.data.selectedDevice);
            this.goToFaultDetail(o);
        }
    },
    navication: function(e) {
        var t = e.currentTarget.dataset.url;
        console.log(t), wx.navigateTo({
            url: t,
            fail: function() {
                wx.switchTab({
                    url: t
                });
            }
        });
    },
    faultDetail1: function(e) {
        wx.navigateTo({
            url: "../memoryUp/memoryUp"
        });
    },
    faultDetail: function(e) {
        var t = e.currentTarget.dataset, o = getApp().globalData.wxDeviceInfo.model, i = t.type, a = e.currentTarget.dataset.id;
        if (-1 != i.indexOf("2,3") || -1 != i.indexOf("2") || -1 != i.indexOf("3")) wx.navigateTo({
            url: "../faultDetail/faultDetail?faultInfo=" + a + "&model=" + o + "&type=2"
        }); else {
            var n = "/pages/repair/chooseDevice/chooseDevice?faultInfo=" + a + "&id=" + i;
            wx.navigateTo({
                url: n
            });
        }
    },
    goToFaultDetail: function(e) {
        e.currentTarget.dataset;
        var t = e.currentTarget.dataset.id, o = e.currentTarget.dataset.type, i = e.currentTarget.dataset.spec;
        wx.navigateTo({
            url: "../faultDetail/faultDetail?faultInfo=" + o + "&phone=" + t + "&spec=" + i + "&type=2"
        });
    },
    goToOrderSubmitted: function(e) {
        wx.navigateTo({
            url: "../orderSubmitted/orderSubmitted"
        });
    },
    goToChooseDevice: function(e) {
        var t = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../chooseDevice/chooseDevice?faultInfo=" + JSON.stringify(t)
        });
    },
    goToVisitRepair: function(t) {
        var o = this;
        if ("0" === t.currentTarget.dataset.isfromhotfix) e.isExist(i.globalData.hwxDeviceInfo) ? (JSON.stringify(i.globalData.hwxDeviceInfo), 
        wx.navigateTo({
            url: "../visitRepair/visitRepair?isFromHotfix=0&selectMould=" + JSON.stringify(i.globalData.hwxDeviceInfo)
        })) : o.goToChooseDevice(); else if ("1" === t.currentTarget.dataset.isfromhotfix) {
            var a = JSON.stringify(o.data.hotfixList[t.currentTarget.dataset.idx]);
            wx.navigateTo({
                url: "../visitRepair/visitRepair?isFromHotfix=1&hotfix=" + a
            });
        }
    },
    goToOneKeyOrder: function() {
        wx.navigateTo({
            url: "../oneKeyOrder/oneKeyOrder"
        });
    },
    goToTestHome: function() {
        wx.navigateTo({
            url: "../../testPages/testHome/testHome"
        });
    },
    goToMemoryUp: function() {
        wx.navigateTo({
            url: "../memoryUp/memoryUp"
        });
    },
    goToBrandAuthor: function() {
        wx.navigateTo({
            url: "../brandAuthor/brandAuthor"
        });
    },
    goToAboutus: function() {
        wx.navigateTo({
            url: "../aboutusWeb/aboutusWeb"
        });
    },
    goToServiceFlow: function() {
        wx.navigateTo({
            url: "../serviceFlowWeb/serviceFlowWeb"
        });
    },
    goToUserAgreement: function() {
        wx.navigateTo({
            url: "../userAgreementWeb/userAgreementWeb"
        });
    },
    goToRecycle: function() {
        wx.switchTab({
            url: "../../recycle/home/home"
        });
    },
    goToSelectFault: function(e) {
        wx.navigateTo({
            url: "../selectFault/selectFault"
        });
    },
    goToStoreAddress: function() {
        wx.navigateTo({
            url: "../../storeAddress/storeAddress"
        });
    },
    bigIconJump: function(e) {
        var t = e.currentTarget.dataset.type;
        "1" == t ? this.goToSelectFault() : "2" == t ? wx.navigateTo({
            url: "../selectFault/selectFault?toPad=true"
        }) : "4" == t ? this.goToRecycle() : "3" == t && this.goToStoreAddress();
    },
    checkLoginStatus: function() {
        var t = this;
        e.isExist(i.globalData.hwxUserInfo) ? t.setData({
            phoneNum: i.globalData.hwxUserInfo.UserName,
            hasLogin: !0
        }) : t.setData({
            phoneNum: "",
            hasLogin: !1
        });
    },
    setSelectedDeviceInfo: function() {
        try {
            wx.setStorageSync(o.storageKeys.selectedDevice, i.globalData.hwxDeviceInfo);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e);
        }
    },
    ifShowPage: function() {
        var e = this;
        this.data.bannerOk && this.data.faultOk && this.data.hotFixOk && (wx.hideLoading(), 
        wx.stopPullDownRefresh(), e.hideRefresher());
    },
    showRefresher: function() {
        this.setData({
            isShow: !1,
            showRefresher: !0
        }), wx.hideLoading(), wx.hideNavigationBarLoading();
    },
    hideRefresher: function() {
        this.setData({
            isShow: !0,
            showRefresher: !1
        }), wx, wx.hideLoading(), wx.hideNavigationBarLoading();
    },
    bannerJump: function(e) {
        "active" == e.currentTarget.dataset.jump && this.toCouponHome();
    },
    toJichuandijia: function() {
        wx.navigateTo({
            url: "../../bannerLink/jichuandijia/jichuandijia"
        });
    },
    toCouponHome: function() {
        wx.navigateTo({
            url: "../../activitiy/couponHome/couponHome"
        });
    },
    addVersion: function() {
        var e = this.data.authorizeUrl.split("?")[0];
        e += "?v=" + i.globalData.configLists.version, this.setData({
            authorizeUrl: e
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {},
    take: function() {
        wx.makePhoneCall({
            phoneNumber: getApp().globalData.userInfo.mobile1 + ""
        });
    }
});