require("../../utils/requestApi.js");

var e, t = getApp(), a = "", s = "", f = !1, n = !1;

Page({
    data: {
        open: !1,
        modalHidden: !0,
        areaName: "",
        imageUrl: "../../images/alarm-pop-fire.png",
        selecting: !1,
        shade: "none",
        areaBg: "#ffffff",
        areaLine: "#ffffff",
        selectArea: !1,
        area_name: "N-T1罐区",
        tankBg: "#ffffff",
        tankLine: "#ffffff",
        selectTank: !1,
        tank_name: "全部油罐",
        statusBg: "#ffffff",
        statusLine: "#ffffff",
        selectStatus: !1,
        status_name: "全部动态",
        timeBg: "#ffffff",
        timeLine: "#ffffff",
        selectTime: !1,
        time_name: "时间选择",
        starttime: "日期选择",
        endtime: "2019-05-13",
        dateTime: "2019.04.13-2019.05.13",
        src: "https://wp1.springbutton.com/ytkjnt/audio/alarm-audio.mp3"
    },
    onLoad: function(e) {},
    onReady: function() {
        this.audioCtx = wx.createAudioContext("audio");
    },
    onShow: function() {
        var a = this;
        (n = !0) && (e = setInterval(function() {
            var e = t.globalData.alarmAreaList;
            if (e.length > 0) {
                for (var s = "", f = 0; f < e.length; f++) s += "," + e[f];
                s.substring(1) != t.globalData.confirmedAlarm && (s.substring(1).length >= t.globalData.confirmedAlarm.length ? (a.setData({
                    modalHidden: !1,
                    areaName: s.substring(1)
                }), a.audioCtx.play()) : t.globalData.confirmedAlarm = s.substring(1));
            } else t.globalData.confirmedAlarm = "";
        }, 1e3));
    },
    onHide: function() {
        n = !1, clearInterval(e);
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showOrHideList: function() {
        this.data.open ? this.setData({
            open: !1
        }) : this.setData({
            open: !0
        });
    },
    hideList: function() {
        this.setData({
            open: !1
        });
    },
    modalConfirm: function() {
        this.setData({
            modalHidden: !0
        }), t.globalData.confirmedAlarm = this.data.areaName, this.audioCtx.pause();
    },
    bindShowAreaMsg: function() {
        var e = this.data.selectArea, t = this.data.area_name;
        this.data.selecting ? this.data.selectArea && this.setData({
            area_name: t,
            selectArea: !1,
            shade: "none",
            areaBg: "#ffffff",
            areaLine: "#ffffff",
            selecting: !1
        }) : e ? this.setData({
            area_name: t,
            selectArea: !1,
            shade: "none",
            areaBg: "#ffffff",
            areaLine: "#ffffff",
            selecting: !1
        }) : this.setData({
            selectArea: !this.data.selectArea,
            shade: "block",
            areaBg: "#EDEDF2",
            areaLine: "#DCDDDF",
            selecting: !0
        });
    },
    mySelectArea: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.name;
        this.setData({
            area_name: t,
            selectArea: !1,
            shade: "none",
            areaBg: "#ffffff",
            areaLine: "#ffffff",
            selecting: !1
        });
    },
    bindShowTankMsg: function() {
        var e = this.data.selectTank, t = this.data.tank_name;
        this.data.selecting ? this.data.selectTank && this.setData({
            tank_name: t,
            selectTank: !1,
            shade: "none",
            tankBg: "#ffffff",
            tankLine: "#ffffff",
            selecting: !1
        }) : e ? this.setData({
            tank_name: t,
            selectTank: !1,
            shade: "none",
            tankBg: "#ffffff",
            tankLine: "#ffffff",
            selecting: !1
        }) : this.setData({
            selectTank: !this.data.selectTank,
            shade: "block",
            tankBg: "#EDEDF2",
            tankLine: "#DCDDDF",
            selecting: !0
        });
    },
    mySelectTank: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.name;
        this.setData({
            tank_name: t,
            selectTank: !1,
            shade: "none",
            tankBg: "#ffffff",
            tankLine: "#ffffff",
            selecting: !1
        });
    },
    bindShowStatusMsg: function() {
        var e = this.data.selectStatus, t = this.data.status_name;
        this.data.selecting ? this.data.selectStatus && this.setData({
            status_name: t,
            selectStatus: !1,
            shade: "none",
            statusBg: "#ffffff",
            statusLine: "#ffffff",
            selecting: !1
        }) : e ? this.setData({
            status_name: t,
            selectStatus: !1,
            shade: "none",
            statusBg: "#ffffff",
            statusLine: "#ffffff",
            selecting: !1
        }) : this.setData({
            selectStatus: !this.data.selectStatus,
            shade: "block",
            statusBg: "#EDEDF2",
            statusLine: "#DCDDDF",
            selecting: !0
        });
    },
    mySelectStatus: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.name;
        this.setData({
            status_name: t,
            selectStatus: !1,
            shade: "none",
            statusBg: "#ffffff",
            statusLine: "#ffffff",
            selecting: !1
        });
    },
    bindShowTimeMsg: function() {
        var e = this.data.selectTime, t = this.data.time_name;
        this.data.selecting ? this.data.selectTime && this.setData({
            time_name: t,
            selectTime: !1,
            shade: "none",
            timeBg: "#ffffff",
            timeLine: "#ffffff",
            selecting: !1
        }) : e ? this.setData({
            time_name: t,
            selectTime: !1,
            shade: "none",
            timeBg: "#ffffff",
            timeLine: "#ffffff",
            selecting: !1
        }) : this.setData({
            selectTime: !this.data.selectTime,
            shade: "block",
            timeBg: "#EDEDF2",
            timeLine: "#DCDDDF",
            selecting: !0
        });
    },
    mySelectTime: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.name;
        this.setData({
            time_name: t,
            selectTime: !1,
            shade: "none",
            timeBg: "#ffffff",
            timeLine: "#ffffff",
            selecting: !1
        });
    },
    changeStarttime: function(e) {
        this.setData({
            starttime: e.detail.value,
            dateTime: e.detail.value.replace(/-/g, ".") + "-" + this.data.endtime.replace(/-/g, ".")
        });
    },
    changeEndtime: function(e) {
        this.setData({
            endtime: e.detail.value,
            dateTime: this.data.starttime.replace(/-/g, ".") + "-" + e.detail.value.replace(/-/g, ".")
        });
    },
    submittime: function(e) {
        a = e.detail.value.starttime, s = e.detail.value.endtime, a > s ? (wx.showModal({
            title: "提示",
            content: "开始时间不能晚于结束时间",
            showCancel: !1
        }), f = !1) : f = !0;
    },
    mySelectTimeDate: function(e) {
        if (console.log(e), f) {
            this.setData({
                dateTime: this.data.starttime.replace(/-/g, ".") + "-" + this.data.endtime.replace(/-/g, ".")
            });
            var t = e.currentTarget.dataset.name;
            console.log(t), this.setData({
                time_name: t,
                selectTime: !1,
                shade: "none",
                timeBg: "#ffffff",
                timeLine: "#ffffff",
                selecting: !1
            });
        }
    }
});