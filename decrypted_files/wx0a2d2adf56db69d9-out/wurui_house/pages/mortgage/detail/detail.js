var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
}, e = require("../../../resource/js/calculatorForHouseLoan.js");

Page({
    data: {
        tabs: [ "等额本息", "等额本金", "本息/本金" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        hiddenDetail: !0,
        parentActiveIndex: 0,
        commercialTotal: 0,
        gjjTotal: 0,
        interestRatePerMou0: 0,
        interestRatePerMou1: 0,
        totalMouths: 0,
        loanTotal: 0,
        totalInterestAi: 0,
        totalRepayAi: 0,
        repayPerMouAi: 0,
        totalInterestAp: 0,
        totalRepayPriceAp: 0,
        repayPerMouthAp: 0,
        decreasePerMouAp: 0,
        repayPerMouObjAi: {},
        repayPerMouObjAp: {}
    },
    showDetail: function() {
        this.data.hiddenDetail = !this.data.hiddenDetail, this.setData({
            hiddenDetail: this.data.hiddenDetail
        });
    },
    onLoad: function(a) {
        wx.showLoading({
            title: "数据加载中...",
            mask: !0
        });
        var o;
        if (0 == a.parentActiveIndex) o = e.calculate(+a.commercialTotal, +a.interestRatePerMou0 / 12, +a.totalMouths); else if (1 == a.parentActiveIndex) o = e.calculate(+a.gjjTotal, +a.interestRatePerMou1 / 12, +a.totalMouths); else {
            var i = e.calculate(+a.commercialTotal, +a.interestRatePerMou0 / 12, +a.totalMouths);
            o = e.calculate(+a.gjjTotal, +a.interestRatePerMou1 / 12, +a.totalMouths);
            for (var n in o) if (o.hasOwnProperty(n)) if ("string" == typeof o[n]) o[n] = (+o[n] + +i[n]).toFixed(2); else for (var r in o[n]) if (o[n].hasOwnProperty(r)) for (var s = 0; s < o[n][r].length; s++) o[n][r][s] = (+o[n][r][s] + +i[n][r][s]).toFixed(2);
        }
        console.log(o), this.setData(t({}, a, o), function() {
            wx.hideLoading();
        });
        var l = this;
        wx.getSystemInfo({
            success: function(t) {
                l.setData({
                    sliderLeft: (t.windowWidth / l.data.tabs.length - 96) / 2,
                    sliderOffset: t.windowWidth / l.data.tabs.length * l.data.activeIndex
                });
            }
        });
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});