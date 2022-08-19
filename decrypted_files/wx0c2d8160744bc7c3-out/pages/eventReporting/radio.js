var e = require("../../util/util.js");

Page({
    data: {
        radioPath: "",
        recording: !1,
        playing: !1,
        hasRecord: !1,
        recordTime: 0,
        playTime: 0,
        formatedRecordTime: "00:00:00",
        formatedPlayTime: "00:00:00"
    },
    onHide: function() {
        this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly();
    },
    startRecord: function() {
        this.setData({
            recording: !0
        });
        var a = this;
        recordTimeInterval = setInterval(function() {
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
                }), clearInterval(recordTimeInterval);
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
                console.log("stop record success"), clearInterval(recordTimeInterval), a.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: e.formatTime(0)
                });
            }
        });
    },
    playVoice: function() {
        var a = this;
        playTimeInterval = setInterval(function() {
            var t = a.data.playTime + 1;
            console.log("update playTime", t), a.setData({
                playing: !0,
                formatedPlayTime: e.formatTime(t),
                playTime: t
            });
        }, 1e3), wx.playVoice({
            filePath: this.data.tempFilePath,
            success: function() {
                clearInterval(playTimeInterval);
                console.log("play voice finished"), a.setData({
                    playing: !1,
                    formatedPlayTime: e.formatTime(0),
                    playTime: 0
                });
            }
        });
    },
    pauseVoice: function() {
        clearInterval(playTimeInterval), wx.pauseVoice(), this.setData({
            playing: !1
        });
    },
    stopVoice: function() {
        clearInterval(playTimeInterval), this.setData({
            playing: !1,
            formatedPlayTime: e.formatTime(0),
            playTime: 0
        }), wx.stopVoice();
    },
    clear: function() {
        clearInterval(playTimeInterval), wx.stopVoice(), this.setData({
            playing: !1,
            hasRecord: !1,
            tempFilePath: "",
            formatedRecordTime: e.formatTime(0),
            recordTime: 0,
            playTime: 0
        });
    }
});