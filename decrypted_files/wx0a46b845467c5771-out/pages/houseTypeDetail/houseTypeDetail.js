var e = "", a = require("../../utils/util.js"), t = getApp(), i = require("../../config.js");

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        jbColor1: " #6294A6",
        jbColor2: "#3B4B81",
        dataList: [],
        list: [ "123", "123", "123", "123", "123" ],
        picList: [],
        houseType: "",
        despage: "huxingtupian",
        previewFlag: !1,
        houseDetail: "",
        active: 0,
        current: 0,
        detail: "",
        currentIndex: 0,
        defaultImagePath: "../../image/wepy_pro/loading1.gif"
    },
    onShareAppMessage: function(i) {
        var o = {
            clkId: "clk_2cmina_31",
            clkDesPage: "huxingfenxiang",
            clkName: "huxingfenxiang",
            type: "CLK",
            pvCurPageName: "huxingtupian",
            clkParams: {
                houseType: this.data.active
            },
            expand: "",
            pvCurPageParams: e
        };
        return a.trackRequest(o, t), console.log("***houseTypeDetail-onShareAppMessage***", t.globalData.shareToken), 
        {
            imageUrl: t.globalData.shareImage || "",
            title: this.data.title || t.globalData.projectName,
            path: "/pages/houseTypeDetail/houseTypeDetail?shareToken=" + t.globalData.shareToken + "&detail=" + JSON.stringify(this.data.detail)
        };
    },
    pre: function() {
        this.setData({
            current: this.data.current - 1
        });
    },
    next: function() {
        this.setData({
            current: this.data.current + 1
        });
    },
    checkOutHouse: function(i) {
        var o = {
            clkId: "clk_2cmina_30",
            clkName: "huxingxuanze",
            clkDesPage: "huxingtupian",
            type: "CLK",
            clkParams: {
                houseType: i.currentTarget.dataset.id
            },
            pvCurPageName: "huxingye",
            pvCurPageParams: e
        };
        a.trackRequest(o, t), this.setData({
            active: i.target.dataset.id,
            current: 0
        });
        var s = i.target.dataset.index, n = this.data.dataList;
        this.data.currentIndex = s;
        for (var r = 0; r < n[s].layoutImageResponseList.length; r++) null !== n[s].layoutImageResponseList[r].loadComplete && void 0 !== n[s].layoutImageResponseList[r].loadComplete || (n[s].layoutImageResponseList[r].loadComplete = !1);
        this.setData({
            houseType: (n[s].room ? n[s].room + "室" : "") + (n[s].hall ? n[s].hall + "厅" : "") + (n[s].kitchen ? n[s].kitchen + "厨" : "") + (n[s].toilet ? n[s].toilet + "卫" : ""),
            houseDetail: n[s].propertyType + " | " + n[s].floorHeight + "M | " + n[s].orientation,
            picList: n[s].layoutImageResponseList
        });
    },
    bindchange: function(e) {
        this.setData({
            current: e.detail.current
        });
    },
    priviewPic1: function(e) {
        var a = this.data.picList[e.currentTarget.dataset.index].imageUrl, t = this.data.picList.map(function(e) {
            return e.imageUrl;
        });
        this.data.previewFlag = !0, console.log(t), wx.previewImage({
            current: a,
            urls: t
        });
    },
    goChatList: function(o) {
        if (wx.getStorageSync("isSend" + i.houseId)) {
            s = {
                clkId: "clk_2cmina_32",
                clkDesPage: "xiaoxiliebiao",
                clkName: "huxingzaixianzixun",
                type: "CLK",
                pvCurPageName: "huxingtupian",
                pvCurPageParams: e
            };
            a.trackRequest(s, t), wx.navigateTo({
                url: "../messagesList/messagesList"
            });
        } else {
            var s = {
                clkId: "clk_2cmina_32",
                clkDesPage: "xuanzeguwenliebiao",
                clkName: "huxingzaixianzixun",
                type: "CLK",
                pvCurPageName: "huxingtupian",
                pvCurPageParams: e
            };
            a.trackRequest(s, t), wx.navigateTo({
                url: "../counselorList/counselorList"
            });
        }
    },
    load: function(e) {
        console.log("houseTypeDetail", e), this.data.picList[e.currentTarget.dataset.index].loadComplete = !0, 
        this.data.dataList[this.data.currentIndex].layoutImageResponseList[e.currentTarget.dataset.index].loadComplete = !0, 
        this.setData({
            picList: this.data.picList
        });
    },
    error: function(e) {
        console.log("houseTypeDetail", e);
    },
    onShow: function(e) {
        console.log("onshow");
        var i = this;
        wx.setStorageSync("loadTime", new Date().getTime()), t.login(function() {
            if (i.data.previewFlag) i.data.previewFlag = !1; else {
                var e = {
                    pvId: "P_2cMINA_10",
                    type: "PV",
                    pvCurPageParams: {
                        houseType: i.data.active
                    },
                    pvCurPageName: "huxingtupian",
                    pvLastPageName: "huxingye",
                    pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
                };
                a.trackRequest(e, t), console.log("已发送埋点");
            }
        });
    },
    onReady: function() {
        wx.hideLoading();
    },
    onUnload: function() {
        a.stopTrackEventTimeObj();
    },
    onHide: function() {
        a.stopTrackEventTimeObj();
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "正在加载"
        }), e = JSON.stringify(a), console.log("****houseTypeDetail-onload**", e, a.detail);
        var i = t.globalData.houseTypeDetail || JSON.parse(a.detail), o = i.houseList, s = i.index;
        this.data.currentIndex = s, a && a.shareToken && "null" != a.shareToken && "undefined" != a.shareToken && (t.globalData.fromChannel = a.shareToken);
        for (var n = 0; n < o[s].layoutImageResponseList.length; n++) o[s].layoutImageResponseList[n].loadComplete = !1;
        wx.setNavigationBarTitle({
            title: i.currentName
        }), this.setData({
            dataList: o,
            detail: i,
            active: i.id,
            houseType: (o[s].room ? o[s].room + "室" : "") + (o[s].hall ? o[s].hall + "厅" : "") + (o[s].kitchen ? o[s].kitchen + "厨" : "") + (o[s].toilet ? o[s].toilet + "卫" : ""),
            houseDetail: o[s].propertyType + " | " + o[s].floorHeight + "M | " + o[s].orientation,
            picList: o[s].layoutImageResponseList
        });
    }
});