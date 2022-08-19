var e = "", t = require("../../utils/util.js"), a = getApp(), s = require("../../config.js");

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        jbColor1: " #6294A6",
        jbColor2: "#3B4B81",
        shade1: "rgba(39,42,52,0.00)",
        despage: "huxingye",
        shade2: "#272A34",
        list: [],
        active: 0,
        houseList: [],
        currentName: ""
    },
    getList: function() {
        var e = this;
        wx.request({
            url: t.newUrl() + "elab-marketing-content/layout/listBuilding",
            method: "POST",
            data: {
                houseId: s.houseId
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log("楼栋数据", t), 200 == t.statusCode && (t.data.success ? t.data.list && t.data.list.length > 0 && (e.setData({
                    list: t.data.list || []
                }), e.getHouseList(t.data.list[0].id, t.data.list[0].name)) : wx.showToast({
                    title: t.data.message + "[" + t.data.errorCode + "]",
                    icon: "warn",
                    duration: 1500
                })), wx.hideLoading();
            },
            fail: function(e) {
                wx.showToast({
                    title: e.errMsg,
                    icon: "warn",
                    duration: 1500
                }), wx.hideLoading();
            }
        });
    },
    getHouseList: function(e, a) {
        this.setData({
            currentName: a
        });
        var i = this;
        wx.request({
            url: t.newUrl() + "elab-marketing-content/layout/pageListLayoutByBuilding",
            method: "POST",
            data: {
                houseId: s.houseId,
                buildingId: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log("楼栋户型数据", e), e.data.success && e.data.pageModel.resultSet.length > 0 ? i.setData({
                    houseList: e.data.pageModel.resultSet
                }) : (i.setData({
                    houseList: []
                }), wx.showToast({
                    title: e.data.message + "[" + e.data.errorCode + "]",
                    icon: "warn",
                    duration: 1500
                }));
            },
            fail: function(e) {
                wx.showToast({
                    title: e.errMsg,
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    checkOutHouse: function(s) {
        var i = {
            clkId: "clk_2cmina_29",
            clkDesPage: "",
            clkName: "loudongxuanze",
            type: "CLK",
            clkParams: {
                buildingId: s.currentTarget.dataset.name
            },
            pvCurPageName: "huxingye",
            pvCurPageParams: e
        };
        t.trackRequest(i, a), this.setData({
            active: s.target.id
        }), this.getHouseList(s.currentTarget.dataset.id, s.currentTarget.dataset.name);
    },
    goDetail: function(s) {
        var i = s.currentTarget.dataset.id, o = s.currentTarget.dataset.index, n = {
            houseList: this.data.houseList,
            currentName: this.data.currentName,
            id: i,
            index: o
        }, r = {
            clkId: "clk_2cmina_30",
            clkName: "huxingxuanze",
            clkDesPage: "huxingtupian",
            type: "CLK",
            clkParams: {
                houseType: i
            },
            pvCurPageName: "huxingye",
            pvCurPageParams: e
        };
        console.log(n, "detail"), t.trackRequest(r, a), a.globalData.houseTypeDetail = n, 
        wx.navigateTo({
            url: "../houseTypeDetail/houseTypeDetail"
        });
    },
    goChatList: function(e) {
        wx.getStorageSync("isSend" + s.houseId) ? wx.navigateTo({
            url: "../messagesList/messagesList"
        }) : wx.navigateTo({
            url: "../counselorList/counselorList"
        });
    },
    proto_getLoginInfo: function() {
        wx.request({
            url: t.newUrl() + "elab-marketing-authentication/tencent/signature",
            method: "POST",
            data: {
                identifier: a.globalData.identifier,
                appId: s.sdkAppID
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
                console.log("获取usersig登录信息成功", e), a.globalData.userSig = e.data.single.signature;
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
    onShow: function(s) {
        wx.setStorageSync("loadTime", new Date().getTime());
        var i = {
            pvId: "P_2cMINA_9",
            type: "PV",
            pvCurPageName: "huxingye",
            pvLastPageName: "zhuye",
            pvCurPageParams: e,
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
        };
        t.trackRequest(i, a);
    },
    onReady: function() {
        wx.setNavigationBarTitle({
            title: "户型"
        });
    },
    onUnload: function() {
        t.stopTrackEventTimeObj();
    },
    onHide: function() {
        t.stopTrackEventTimeObj();
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "正在加载"
        }), t && t.shareToken && "null" != t.shareToken && "undefined" != t.shareToken && (a.globalData.fromChannel = t.shareToken), 
        e = JSON.stringify(t), this.getList();
    }
});