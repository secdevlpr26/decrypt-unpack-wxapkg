var t = require("../../utils/city.js");

Page({
    data: {
        searchLetter: [],
        showLetter: "",
        winHeight: 0,
        tHeight: 0,
        bHeight: 0,
        startPageY: 0,
        cityList: [],
        isShowLetter: !1,
        scrollTop: 0,
        city: "",
        cityid: ""
    },
    onLoad: function(e) {
        var i = t.searchLetter, a = t.cityList(), o = wx.getSystemInfoSync();
        console.log(o);
        for (var n = o.windowHeight, s = n / i.length, r = [], c = 0; c < i.length; c++) {
            var h = {};
            h.name = i[c], h.tHeight = c * s, h.bHeight = (c + 1) * s, r.push(h);
        }
        this.setData({
            winHeight: n,
            itemH: s,
            searchLetter: r,
            cityList: a
        }), console.log(this.data.cityInfo);
    },
    onReady: function() {},
    onShow: function() {
        var t = wx.getStorageSync("city");
        if (t) {
            var e = t;
            this.setData({
                city: e
            });
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "title",
            desc: "desc",
            path: "path"
        };
    },
    searchStart: function(t) {
        var e = t.currentTarget.dataset.letter, i = t.touches[0].pageY;
        this.setScrollTop(this, e), this.nowLetter(i, this), this.setData({
            showLetter: e,
            startPageY: i,
            isShowLetter: !0
        });
    },
    searchMove: function(t) {
        var e = t.touches[0].pageY, i = this.data.startPageY, a = this.data.tHeight, o = this.data.bHeight;
        console.log(e), i - e > 0 ? e < a && this.nowLetter(e, this) : e > o && this.nowLetter(e, this);
    },
    searchEnd: function(t) {
        var e = this;
        setTimeout(function() {
            e.setData({
                isShowLetter: !1
            });
        }, 1e3);
    },
    nowLetter: function(t, e) {
        for (var i = this.data.searchLetter, a = 0, o = 0, n = "", s = 0; s < i.length; s++) if (i[s].tHeight <= t && t <= i[s].bHeight) {
            a = i[s].bHeight, o = i[s].tHeight, n = i[s].name;
            break;
        }
        this.setScrollTop(e, n), e.setData({
            bHeight: a,
            tHeight: o,
            showLetter: n,
            startPageY: t
        });
    },
    bindScroll: function(t) {
        console.log(t.detail);
    },
    setScrollTop: function(t, e) {
        for (var i = 0, a = t.data.cityList, o = 0, n = 0, s = 0; s < a.length; s++) {
            if (e == a[s].initial) {
                i = 30 * n + 41 * o;
                break;
            }
            n++, o += a[s].cityInfo.length;
        }
        t.setData({
            scrollTop: i
        });
    },
    clickCity: function(t) {
        var e = t.currentTarget.dataset.city;
        wx.setStorage({
            key: "city",
            data: e
        });
        var i = t.currentTarget.dataset.id;
        wx.setStorage({
            key: "cityid",
            data: i
        }), wx.switchTab({
            url: "../index/index"
        });
    }
});