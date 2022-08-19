function a(a, t, n) {
    return t in a ? Object.defineProperty(a, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = n, a;
}

var t, n, e = require("../../utils/requestApi.js"), i = require("../../utils/wxcharts.js"), o = null, r = getApp(), l = !1;

Page((t = {
    data: {
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        animationData1: "",
        animationData2: "",
        animationData3: "",
        animationData4: "",
        animationData5: "",
        animationData6: "",
        list: [],
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"
    },
    onLoad: function(a) {
        var t = this;
        setInterval(function() {
            e.request({
                url: e.apiGetOilTanktUrl,
                complete: function(a) {
                    console.log(a.data.data), t.setData({
                        list: a.data.data
                    });
                }
            });
        }, 1e3);
    },
    onReady: function() {
        this.showOilReservesDayCharts(), this.audioCtx = wx.createAudioContext("audio");
    },
    oilReservesCanvasScrollStart: function(a) {
        o.scrollStart(a);
    },
    oilReservesCanvasScroll: function(a) {
        o.scroll(a);
    },
    oilReservesCanvasScrollEnd: function(a) {
        o.scrollEnd(a);
    }
}, a(t, "oilReservesCanvasScrollStart", function(a) {
    o.scrollStart(a);
}), a(t, "oilReservesCanvasScroll", function(a) {
    o.scroll(a);
}), a(t, "oilReservesCanvasScrollEnd", function(a) {
    o.scrollEnd(a);
}), a(t, "showOilReservesDayCharts", function() {
    var a = 320;
    try {
        a = wx.getSystemInfoSync().windowWidth;
    } catch (a) {
        a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
        console.error("getSystemInfoSync failed!");
    }
    o = new i({
        canvasId: "oilReservesCanvas",
        type: "line",
        categories: [ 11, 12, 13, 14, 15, 16, 17 ],
        legend: !1,
        series: [ {
            data: [ 40.1, 35, 43.2, 41.4, 36, 40.6, 40.8 ],
            color: "#156DD5",
            format: function(a) {
                return a;
            }
        } ],
        yAxis: {
            format: function(a) {
                return a;
            },
            min: 0,
            max: 60,
            gridColor: "#EDEDF2"
        },
        width: a,
        height: 110,
        dataPointShape: !1
    });
}), a(t, "singleMonitor", function() {
    wx.redirectTo({
        url: "../single-tank/index"
    });
}), a(t, "gotoSingleTankData", function() {
    wx.navigateTo({
        url: "../single-tank-data/index"
    });
}), a(t, "modalConfirm", function() {
    this.setData({
        modalHidden: !0
    }), r.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
}), a(t, "onShow", function() {
    var a = this;
    (l = !0) && (n = setInterval(function() {
        var t = r.globalData.alarmAreaList;
        if (t.length > 0) {
            for (var n = "", e = 0; e < t.length; e++) n += "," + t[e];
            n.substring(1) != r.globalData.confirmedAlarm && (n.substring(1).length >= r.globalData.confirmedAlarm.length ? (a.setData({
                modalHidden: !1,
                areaName: n.substring(1)
            }), a.audioCtx.play()) : r.globalData.confirmedAlarm = n.substring(1));
        } else r.globalData.confirmedAlarm = "";
    }, 1e3));
}), a(t, "onHide", function() {
    l = !1, clearInterval(n);
}), t));