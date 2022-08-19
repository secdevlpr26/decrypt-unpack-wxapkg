var a, n = require("../../utils/requestApi.js"), t = (require("../../utils/wxcharts.js"), 
getApp()), e = getApp(), o = 0, r = !1;

Page({
    data: {
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        list: [],
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3",
        normal: !0
    },
    onLoad: function(a) {
        this.getTankAreaList();
        var t = this;
        setInterval(function() {
            n.request({
                url: n.apiGetStatustUrl,
                complete: function(a) {
                    console.log(a.data.data), 0 != a.data.data ? t.setData({
                        normal: !1
                    }) : t.setData({
                        normal: !0
                    });
                }
            });
        }, 1e3);
    },
    getTankAreaList: function() {
        var a = this;
        n.request({
            url: n.apiGetTankAreatUrl,
            complete: function(n) {
                a.setData({
                    list: n.data.data
                }), a.runCanvas0 = a.selectComponent("#runCanvas0"), a.runCanvas0.showCanvasRing("#3BD1D9"), 
                a.runCanvas1 = a.selectComponent("#runCanvas1"), a.runCanvas1.showCanvasRing("#E6BC17"), 
                a.runCanvas2 = a.selectComponent("#runCanvas2"), a.runCanvas2.showCanvasRing("#34CD69"), 
                a.runCanvas3 = a.selectComponent("#runCanvas3"), a.runCanvas3.showCanvasRing("#07B2F2"), 
                a.runCanvas4 = a.selectComponent("#runCanvas4"), a.runCanvas4.showCanvasRing("#265CFF"), 
                a.runCanvas5 = a.selectComponent("#runCanvas5"), a.runCanvas5.showCanvasRing("#DE8318"), 
                a.runCanvas6 = a.selectComponent("#runCanvas6"), a.runCanvas6.showCanvasRing("#630AE8");
            }
        });
    },
    onReady: function() {
        this.audioCtx = wx.createAudioContext("audio");
    },
    onShow: function() {
        r = !0, console.log(r);
        var n = this;
        t.globalData.openid;
        r && (o = setInterval(function() {
            var a = e.globalData.alarmAreaList;
            if (a.length > 0) {
                for (var t = "", o = 0; o < a.length; o++) t += "," + a[o];
                t.substring(1) != e.globalData.confirmedAlarm && (t.substring(1).length >= e.globalData.confirmedAlarm.length ? (n.setData({
                    modalHidden: !1,
                    areaName: t.substring(1)
                }), n.audioCtx.play()) : e.globalData.confirmedAlarm = t.substring(1));
            } else e.globalData.confirmedAlarm = "";
        }, 1e3), a = setInterval(function() {
            n.getTankAreaList();
        }, 1e3));
    },
    onHide: function() {
        r = !1, console.log(r), clearInterval(o), clearInterval(a);
    },
    onPullDownRefresh: function() {},
    gotoSingleTank: function(a) {
        0 == a.currentTarget.id && wx.navigateTo({
            url: "../single-tank/index"
        });
    },
    gotoNet: function() {
        wx.navigateTo({
            url: "../net-monitor/index"
        });
    },
    gotoData: function() {
        wx.navigateTo({
            url: "../data-retrieval/index"
        });
    },
    modalConfirm: function() {
        this.setData({
            modalHidden: !0
        }), e.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
        var a = this;
        n.request({
            url: n.apiSendServiceMessageUrl,
            data: {
                keyWord: a.data.areaName
            },
            complete: function(a) {}
        });
    },
    sendFormId: function(a) {
        var e = t.globalData.openid;
        n.request({
            url: n.apiPostNeedMessageUrl,
            data: {
                formId: a.detail.formId,
                openId: e
            },
            complete: function(a) {}
        });
    }
});