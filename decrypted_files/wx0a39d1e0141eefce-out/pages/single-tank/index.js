var a, t, e = require("../../utils/requestApi.js"), i = getApp(), n = !1, l = !0, o = "N-T1罐区N-T101", r = "N-T1罐区N-T102", d = "N-T1罐区N-T103", s = "N-T1罐区N-T104", u = "N-T1罐区N-T105", g = "N-T1罐区N-T106";

Page({
    data: {
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        list: [],
        hiddenModal: !0,
        alarmDescribe: "",
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"
    },
    onLoad: function(a) {},
    getOilTankList: function() {
        var a = this;
        e.request({
            url: e.apiGetOilTanktUrl,
            complete: function(t) {
                console.log(t.data.data), a.setData({
                    list: t.data.data
                });
                for (var e = t.data.data, i = 0; i < e.length; i++) {
                    var n = "";
                    l && (1 == e[i].levelStatus && (n += "低液位!"), 2 == e[i].levelStatus && (n += "高液位!"), 
                    3 == e[i].levelStatus && (n += "高高液位!"), 1 == e[i].status && (n += "液位异常!"), a.alarmShowOrHidden(e[i].areaName + e[i].name, n, i));
                }
            }
        });
    },
    alarmShowOrHidden: function(a, t, e) {
        var i = this, n = a + t;
        if (0 == e && n != o) {
            if (n.length >= o.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), o = n, void (l = !1);
            o = n;
        }
        if (1 == e && n != r) {
            if (n.length >= r.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), r = n, void (l = !1);
            r = n;
        }
        if (2 == e && n != d) {
            if (n.length >= d.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), d = n, void (l = !1);
            d = n;
        }
        if (3 == e && n != s) {
            if (n.length >= s.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), s = n, void (l = !1);
            s = n;
        }
        if (4 == e && n != u) {
            if (n.length >= u.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), u = n, void (l = !1);
            u = n;
        }
        if (5 == e && n != g) {
            if (n.length >= g.length) return i.setData({
                hiddenModal: !1,
                alarmDescribe: n
            }), i.audioCtx.play(), g = n, void (l = !1);
            g = n;
        }
    },
    confirmModal: function() {
        this.setData({
            hiddenModal: !0
        }), l = !0, this.audioCtx.pause();
    },
    onReady: function() {
        this.audioCtx = wx.createAudioContext("audio");
    },
    onShow: function() {
        var e = this;
        (n = !0) && (a = setInterval(function() {
            var a = i.globalData.alarmAreaList;
            if (a.length > 0) {
                for (var t = "", n = 0; n < a.length; n++) t += "," + a[n];
                t.substring(1) != i.globalData.confirmedAlarm && (t.substring(1).length >= i.globalData.confirmedAlarm.length ? (e.setData({
                    modalHidden: !1,
                    areaName: t.substring(1)
                }), e.audioCtx.play()) : i.globalData.confirmedAlarm = t.substring(1));
            } else i.globalData.confirmedAlarm = "";
        }, 1e3), t = setInterval(function() {
            e.getOilTankList();
        }, 1e3));
    },
    onHide: function() {
        n = !1, clearInterval(a), clearInterval(t);
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    gotoSingleData: function(a) {
        0 == a.currentTarget.id && wx.navigateTo({
            url: "../single-tank-data/index"
        });
    },
    gotoTankArea: function() {
        wx.redirectTo({
            url: "../tank-area/index"
        });
    },
    modalConfirm: function() {
        this.setData({
            modalHidden: !0
        }), i.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
    }
});