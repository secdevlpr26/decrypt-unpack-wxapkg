require("../../../util/util");

var e = require("../../../comm/script/fetch");

require("../../../comm/script/config"), require("../../../component/message/message.js"), 
getApp();

require("../../../util/md5"), require("../../../util/jwt.js");

var t = require("../../../utils/server");

Page({
    data: {
        bannerUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/huishoubanner.png",
        showList: [ {
            content: "隐私保护",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/wxbz.png"
        }, {
            content: "优质服务",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/hylx-.png"
        }, {
            content: "当日到账",
            imgUrl: "https://pic.hiweixiu.com/hiweixiu-mobile/img/jsyz.png"
        } ],
        isShow: !1,
        hotDevice: []
    },
    loadBanner: function() {
        var e = this;
        t.getJSON("/Index/rhome", function(t) {
            var i = t.data.result.ad;
            wx.hideLoading(), wx.hideNavigationBarLoading(), e.setData({
                isShow: !0
            }), e.setData({
                hots: t.data.result.hots,
                banner: i,
                spec: t.data.result.goodsTypeList,
                navigations: t.data.result.navigations
            });
        });
    },
    onLoad: function() {
        var e = getApp().globalData.wxDeviceInfo.model;
        console.log(e), this.setData({
            model: e
        });
        var i = this;
        t.getJSON("/Goods/getRepair1", {
            model: e
        }, function(e) {
            -1 != e.data.status ? i.setData({
                model: e.data.model,
                goods: e.data.goods
            }) : i.setData({
                model: ""
            });
        }), this.loadBanner();
        var o = getApp();
        return void o.getOpenId(function() {
            var e = getApp().globalData.openid;
            t.getJSON("/User/validateOpenid", {
                openid: e
            }, function(e) {
                200 == e.data.code ? getApp().globalData.userInfo = e.data.data : "400" == e.data.code && (console.log("need register"), 
                o.register(function() {}));
            });
        });
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.getHotDevice();
    },
    onShareAppMessage: function(e) {
        return {
            path: "/pages/user_center/user_center",
            success: function(e) {},
            fail: function(e) {}
        };
    },
    getHotDevice: function() {
        var t = this;
        e.getHotRecycle(function(e) {
            t.setData({
                hotDevice: e,
                isShow: !0
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        }, function(e) {
            wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), t.setData({
                showRefresher: !0
            });
        });
    },
    goToChooseDevice: function(e) {
        var t = e.currentTarget.dataset.pid;
        wx.navigateTo({
            url: "../chooseDevice/chooseDevice?pid=" + t
        });
    },
    goToChooseFault: function(e) {
        var t = e.currentTarget.dataset.bid;
        wx.navigateTo({
            url: "../selectInfo/selectInfo?goods_id=" + t
        });
    },
    toCart: function() {
        wx.navigateTo({
            url: "../recycleCart/recycleCart"
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});