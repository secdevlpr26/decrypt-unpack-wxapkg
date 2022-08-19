var t = require("../../utils/city.js");

getApp();

Page({
    data: {
        searchLetter: [],
        showLetter: "",
        winHeight: 0,
        cityList: [],
        isShowLetter: !1,
        scrollTop: 0,
        scrollTopId: "",
        hotcityList: [ {
            cityCode: 11e4,
            city: "北京市"
        }, {
            cityCode: 31e4,
            city: "上海市"
        }, {
            cityCode: 440100,
            city: "广州市"
        }, {
            cityCode: 440300,
            city: "深圳市"
        }, {
            cityCode: 330100,
            city: "杭州市"
        }, {
            cityCode: 320100,
            city: "南京市"
        }, {
            cityCode: 420100,
            city: "武汉市"
        }, {
            cityCode: 410100,
            city: "郑州市"
        }, {
            cityCode: 12e4,
            city: "天津市"
        }, {
            cityCode: 610100,
            city: "西安市"
        }, {
            cityCode: 510100,
            city: "成都市"
        }, {
            cityCode: 5e5,
            city: "重庆市"
        } ]
    },
    onLoad: function() {
        for (var e = t.searchLetter, i = t.cityList(), c = wx.getSystemInfoSync().windowHeight, o = c / e.length, n = [], a = 0; a < e.length; a++) {
            var r = {};
            r.name = e[a], r.tHeight = a * o, r.bHeight = (a + 1) * o, n.push(r);
        }
        this.setData({
            winHeight: c,
            itemH: o,
            searchLetter: n,
            cityList: i
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getStorageSync("city");
        console.log(t), this.setData({
            city: t
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    clickLetter: function(t) {
        console.log(t.currentTarget.dataset.letter);
        var e = t.currentTarget.dataset.letter;
        this.setData({
            showLetter: e,
            isShowLetter: !0,
            scrollTopId: e
        });
        var i = this;
        setTimeout(function() {
            i.setData({
                isShowLetter: !1
            });
        }, 1e3);
    },
    bindCity: function(t) {
        console.log("bindCity"), this.setData({
            city: t.currentTarget.dataset.city
        }), wx.setStorageSync("city", t.currentTarget.dataset.city);
    },
    bindHotCity: function(t) {
        console.log("bindHotCity"), this.setData({
            city: t.currentTarget.dataset.city
        }), wx.setStorageSync("city", t.currentTarget.dataset.city);
    },
    hotCity: function() {
        this.setData({
            scrollTop: 0
        });
    }
});