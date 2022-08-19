var a, t = require("../../utils/requestApi.js"), e = getApp(), n = !1, o = [];

Page({
    data: {
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3",
        list: []
    },
    onLoad: function(a) {},
    onReady: function() {
        this.audioCtx = wx.createAudioContext("audio");
        var a = this;
        setInterval(function() {
            t.request({
                url: t.apiGetNetStatustUrl,
                complete: function(t) {
                    console.log(t.data.data);
                    var e = a.data.list;
                    if (a.data.list = [], o = [], t && t.data && 200 === t.data.state && t.data.data) for (l = 0; l < t.data.data.length; l++) {
                        var n = t.data.data[l];
                        o.push(n);
                    } else wx.showModal({
                        title: "提示",
                        content: "无法获取网络监控信息,请尝试重新登录",
                        showCancel: !1,
                        confirmText: "确定"
                    });
                    for (var i = o, l = 0; l < i.length; l++) {
                        var r = i[l], s = null;
                        l < e.length && (s = e[l], r.open = s.open);
                    }
                    a.setData({
                        list: i
                    });
                }
            });
        }, 1e3);
    },
    onShow: function() {
        var t = this;
        (n = !0) && (a = setInterval(function() {
            var a = e.globalData.alarmAreaList;
            if (a.length > 0) {
                for (var n = "", o = 0; o < a.length; o++) n += "," + a[o];
                n.substring(1) != e.globalData.confirmedAlarm && (n.substring(1).length >= e.globalData.confirmedAlarm.length ? (t.setData({
                    modalHidden: !1,
                    areaName: n.substring(1)
                }), t.audioCtx.play()) : e.globalData.confirmedAlarm = n.substring(1));
            } else e.globalData.confirmedAlarm = "";
        }, 1e3));
    },
    onHide: function() {
        n = !1, clearInterval(a);
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        var a = this;
        t.request({
            url: t.apiGetNetStatustUrl,
            complete: function(t) {
                console.log(t.data.data), a.setData({
                    list: t.data.data
                });
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showOrHideList: function(a) {
        var t = a.currentTarget.id, e = this.data.list, n = e[t];
        n.open ? n.open = !n.open : n.open = !0, this.setData({
            list: e
        });
    },
    modalConfirm: function() {
        this.setData({
            modalHidden: !0
        }), e.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
    }
});