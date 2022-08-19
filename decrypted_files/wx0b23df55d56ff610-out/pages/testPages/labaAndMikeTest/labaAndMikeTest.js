var a, t, e = require("../../../util/util.js");

wx.getRecorderManager(), Page({
    data: {
        recording: !1,
        playing: !1,
        hasRecord: !1,
        recordTime: 0,
        playTime: 0,
        formatedRecordTime: "00:00:00",
        formatedPlayTime: "00:00:00",
        faultArr: [],
        dataArr: [],
        showErr: !1
    },
    onHide: function() {
        this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly();
    },
    startRecord: function() {
        this.setData({
            recording: !0
        });
        var a = this;
        t = setInterval(function() {
            var t = a.data.recordTime += 1;
            a.setData({
                formatedRecordTime: e.formatTime(a.data.recordTime),
                recordTime: t
            });
        }, 1e3), wx.startRecord({
            success: function(t) {
                a.setData({
                    hasRecord: !0,
                    tempFilePath: t.tempFilePath,
                    formatedPlayTime: e.formatTime(a.data.playTime)
                });
            },
            complete: function() {
                a.setData({
                    recording: !1
                }), clearInterval(t);
            }
        });
    },
    stopRecord: function() {
        wx.stopRecord();
    },
    stopRecordUnexpectedly: function() {
        var a = this;
        wx.stopRecord({
            success: function() {
                console.log("stop record success"), clearInterval(t), a.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: e.formatTime(0)
                });
            }
        });
    },
    playVoice: function() {
        var t = this;
        a = setInterval(function() {
            var a = t.data.playTime + 1;
            console.log("update playTime", a), t.setData({
                playing: !0,
                formatedPlayTime: e.formatTime(a),
                playTime: a
            });
        }, 1e3), wx.playVoice({
            filePath: this.data.tempFilePath,
            success: function() {
                clearInterval(a), console.log("play voice finished"), t.setData({
                    playing: !1,
                    formatedPlayTime: e.formatTime(0),
                    playTime: 0
                });
            }
        });
    },
    pauseVoice: function() {
        clearInterval(a), wx.pauseVoice(), this.setData({
            playing: !1
        });
    },
    stopVoice: function() {
        clearInterval(a), this.setData({
            playing: !1,
            formatedPlayTime: e.formatTime(0),
            playTime: 0
        }), wx.stopVoice();
    },
    clear: function() {
        clearInterval(a), wx.stopVoice(), this.setData({
            playing: !1,
            hasRecord: !1,
            tempFilePath: "",
            formatedRecordTime: e.formatTime(0),
            recordTime: 0,
            playTime: 0
        });
    },
    playMusic: function() {
        wx.showLoading({
            title: "加载音乐中",
            duration: 1500,
            mask: !0
        }), wx.playBackgroundAudio({
            dataUrl: "https://pic.hiweixiu.com/media/app/test.m4a",
            success: function(a) {
                wx.showToast({
                    title: "音乐加载完毕",
                    duration: 1500,
                    mask: !0
                });
            },
            fail: function(a) {
                wx.showToast({
                    title: "音乐加载失败",
                    duration: 1500,
                    mask: !0
                });
            },
            complete: function(a) {}
        });
    },
    stopPlay: function() {
        wx.showToast({
            title: "音乐已停止",
            duration: 1500,
            mask: !0
        }), wx.stopBackgroundAudio();
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
    },
    setResult: function() {
        var a = this.data.dataArr;
        a.push(JSON.stringify({
            name: "扬声器",
            val: "0"
        }), JSON.stringify({
            name: "麦克风",
            val: "0"
        }));
        var t = a.join("，");
        wx.redirectTo({
            url: "../cameraTest/cameraTest?dataArr=" + t
        });
    },
    checkboxChange: function(a) {
        var t = [ {
            name: "扬声器",
            val: 0
        }, {
            name: "麦克风",
            val: 0
        } ];
        a.detail.value.forEach(function(a, e, r) {
            t.map(function(t, e, r) {
                e == a && (t.val = 1);
            });
        }), this.setData({
            faultArr: t
        });
    },
    submitErr: function() {
        if (wx.stopBackgroundAudio(), 0 != this.data.faultArr.length) {
            var a = this.data.dataArr, t = this.data.faultArr;
            t.map(function(a, e, r) {
                t[e] = JSON.stringify(a);
            });
            var e = (a = a.concat(t)).join("，");
            wx.redirectTo({
                url: "../cameraTest/cameraTest?dataArr=" + e
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    },
    errItemBind: function(a) {
        var t = a.currentTarget.dataset.index, e = "[]" === JSON.stringify(this.data.faultArr) ? [ {
            name: "扬声器",
            val: "0"
        }, {
            name: "麦克风",
            val: "0"
        } ] : this.data.faultArr;
        e.map(function(a, r, i) {
            r == t && (a.val = "0" == a.val ? "1" : "0", e[r] = a, console.log(e));
        }), this.setData({
            faultArr: e
        });
    },
    errBtnBind: function() {
        wx.stopBackgroundAudio();
        var a = !1, t = this.data.faultArr;
        if (t.map(function(t, e, r) {
            1 == t.val && (a = !0);
        }), a) {
            var e = this.data.dataArr;
            t.map(function(a, e, r) {
                t[e] = JSON.stringify(a);
            });
            var r = (e = e.concat(t)).join("，");
            wx.redirectTo({
                url: "../cameraTest/cameraTest?dataArr=" + r
            });
        } else wx.showModal({
            title: "提示",
            content: "请至少选择一项",
            showCancel: !1
        });
    },
    showErr: function() {
        this.setData({
            showErr: !0
        });
    }
});