function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

require("../../utils/requestApi.js");

var e, t, r = require("../../utils/wxcharts.js"), n = null, o = getApp(), l = !1;

Page((e = {
    data: {
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"
    },
    onLoad: function(a) {},
    onReady: function() {
        this.audioCtx = wx.createAudioContext("audio");
    },
    oilReservesCanvasScrollStart: function(a) {
        n.scrollStart(a);
    },
    oilReservesCanvasScroll: function(a) {
        n.scroll(a);
    },
    oilReservesCanvasScrollEnd: function(a) {
        n.scrollEnd(a);
    }
}, a(e, "oilReservesCanvasScrollStart", function(a) {
    n.scrollStart(a);
}), a(e, "oilReservesCanvasScroll", function(a) {
    n.scroll(a);
}), a(e, "oilReservesCanvasScrollEnd", function(a) {
    n.scrollEnd(a);
}), a(e, "showOilReservesDayCharts", function() {
    var a = 320;
    try {
        a = wx.getSystemInfoSync().windowWidth;
    } catch (a) {
        a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
        console.error("getSystemInfoSync failed!");
    }
    n = new r({
        canvasId: "oilReservesCanvas",
        type: "line",
        categories: [ 11, 12, 13, 14, 15, 16, 17 ],
        legend: !1,
        series: [ {
            data: [ 5.8, 4.4, 6.6, 6.2, 4.2, 6.4, 6.8 ],
            color: "#156DD5",
            format: function(a) {
                return a;
            }
        } ],
        yAxis: {
            format: function(a) {
                return a;
            },
            min: 2,
            max: 8,
            gridColor: "#EDEDF2"
        },
        width: a,
        height: 110,
        dataPointShape: !1
    });
}), a(e, "modalConfirm", function() {
    this.setData({
        modalHidden: !0
    }), o.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
}), a(e, "onShow", function() {
    l = !0, this.showOilReservesDayCharts();
    var a = this;
    l && (t = setInterval(function() {
        var e = o.globalData.alarmAreaList;
        if (e.length > 0) {
            for (var t = "", r = 0; r < e.length; r++) t += "," + e[r];
            t.substring(1) != o.globalData.confirmedAlarm && (t.substring(1).length >= o.globalData.confirmedAlarm.length ? a.setData({
                modalHidden: !1,
                areaName: t.substring(1)
            }) : o.globalData.confirmedAlarm = t.substring(1));
        } else o.globalData.confirmedAlarm = "";
    }, 1e3));
}), a(e, "onHide", function() {
    l = !1, clearInterval(t);
}), e));