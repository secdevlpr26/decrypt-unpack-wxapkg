function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a, i = getApp().globalData.domain;

Page((a = {
    data: {
        attachment: [],
        action: !0
    },
    onLoad: function(e) {
        var t = e.eventId;
        "false" == e.handle ? this.setData({
            handle: !1
        }) : this.setData({
            handle: !0
        }), this.setData({
            eventId: t
        }), this.selectEventDetail(t);
    },
    selectEventDetail: function(e) {
        var t = this;
        wx.request({
            url: i + "/watch/selectEventDetailById",
            data: {
                eventId: e
            },
            success: function(e) {
                for (var a = e.data, i = a.enterAttachments, n = new Array(), o = 0; o < i.length; o++) n[n.length] = i[o].attachment_url;
                for (o = 0; o < i.length; o++) "图片" == i[o].dic_type ? i[o].dic_type = 0 : i[o].dic_type = 2;
                t.setData({
                    fileImgs: n,
                    event: a.eventDetails[0],
                    record: a.eventFlow,
                    attachment: i,
                    processedAttachment: a.processedAttachments
                });
            },
            fail: function(e) {}
        });
    },
    setFinance: function(e) {
        var t = this, a = e.detail.value;
        "true" == a ? t.setData({
            hasfinancing: a
        }) : wx.showModal({
            title: "",
            content: "是否确定该事件为无效事件！",
            success: function(e) {
                e.confirm ? t.invalidEventSubmit() : e.cancel && t.setData({
                    checke: "checked"
                });
            }
        });
    },
    setIsorg: function() {
        this.setData({
            isorg: e.detail.value
        });
    },
    applySubmit: function(e) {
        var t = this, a = t.data.eventId;
        wx.getStorage({
            key: "userId",
            success: function(n) {
                t.setData({
                    action: !1
                });
                var o = {
                    userId: n.data,
                    event_id: a,
                    handleState: "已处理"
                }, r = t.JsonObj(o, e.detail.value);
                wx.request({
                    url: i + "/watch/addEventHandleState",
                    data: r,
                    success: function(e) {
                        "1" == e.data.code ? (t.setData({
                            action: !1
                        }), wx.showToast({
                            title: "上报成功！",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                url: "../eventQuery/eventQuery"
                            });
                        }, 2e3)) : (t.setData({
                            action: !1
                        }), wx.showToast({
                            title: "处理结果提交失败！",
                            icon: "warn",
                            duration: 2e3
                        }));
                    },
                    fail: function(e) {}
                });
            }
        });
    },
    JsonObj: function(e, t) {
        var a = {};
        for (var i in e) a[i] = e[i];
        for (var i in t) a[i] = t[i];
        return a;
    },
    invalidEventSubmit: function() {
        var e = this.data.eventId;
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: i + "/watch/addEventHandleState",
                    data: {
                        userId: t.data,
                        event_id: e,
                        handleState: "无效"
                    },
                    success: function(e) {
                        "1" == e.data.code ? (wx.showToast({
                            title: "上报成功！",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                url: "../eventQuery/eventQuery"
                            });
                        }, 2e3)) : wx.showToast({
                            title: "处理结果提交失败！",
                            icon: "warn",
                            duration: 2e3
                        });
                    },
                    fail: function(e) {}
                });
            }
        });
    },
    playVoice: function(e) {
        var t = e.target.dataset.src;
        wx.getSavedFileList({
            success: function(e) {
                console.log(e.fileList);
            }
        }), wx.downloadFile({
            url: t,
            success: function(e) {
                wx.playVoice({
                    filePath: e.tempFilePath
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "下载失败"
                });
            }
        });
    },
    previewImage: function(e) {
        var t = this, a = e.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: t.data.fileImgs
        });
    },
    chooseImage: function() {
        var e = this;
        wx.chooseImage({
            sourceType: [ "camera", "album" ],
            sizeType: [ "compressed" ],
            count: 9,
            success: function(t) {
                e.setData({
                    imageList: t.tempFilePaths
                });
            }
        });
    },
    validateData: function(e) {
        var t = this, a = !0, i = e.detail.value;
        return console.log(i), "" == i.event_type_id || null == i.event_type_id ? a = t.errorMsg("请选择事件类别！") : "" == i.area_id ? a = t.errorMsg("请选择事件上报地址！") : "" == i.location ? a = t.errorMsg("请输入事发地祥址！") : "" == i.detail && 0 == t.data.imageList.length && "" == t.data.radioPath && (a = t.errorMsg("请输入事件描述！")), 
        a;
    },
    errorMsg: function(e) {
        return wx.showToast({
            title: e,
            icon: "warn",
            duration: 2e3
        }), !1;
    },
    getEventLocation: function() {
        var e = this;
        wx.chooseLocation({
            success: function(t) {
                e.setData({
                    address: t.address,
                    latitude: t.latitude,
                    longitude: t.longitude
                });
            }
        });
    },
    onHide: function() {
        this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly();
    },
    startRecord: function() {
        this.setData({
            recording: !0
        });
        var e = this;
        recordTimeInterval = setInterval(function() {
            var t = e.data.recordTime += 1;
            e.setData({
                formatedRecordTime: util.formatTime(e.data.recordTime),
                recordTime: t
            });
        }, 1e3), wx.startRecord({
            success: function(t) {
                e.setData({
                    hasRecord: !0,
                    radioPath: t.tempFilePath,
                    formatedPlayTime: util.formatTime(e.data.playTime)
                });
            },
            complete: function() {
                e.setData({
                    recording: !1
                }), clearInterval(recordTimeInterval);
            }
        });
    },
    stopRecord: function() {
        wx.stopRecord();
    },
    stopRecordUnexpectedly: function() {
        var e = this;
        wx.stopRecord({
            success: function() {
                clearInterval(recordTimeInterval), e.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: util.formatTime(0)
                });
            }
        });
    }
}, t(a, "playVoice", function() {
    var e = this;
    playTimeInterval = setInterval(function() {
        var t = e.data.playTime + 1;
        e.setData({
            playing: !0,
            formatedPlayTime: util.formatTime(t),
            playTime: t
        });
    }, 1e3), wx.playVoice({
        filePath: this.data.radioPath,
        success: function() {
            clearInterval(playTimeInterval);
            e.setData({
                playing: !1,
                formatedPlayTime: util.formatTime(0),
                playTime: 0
            });
        }
    });
}), t(a, "pauseVoice", function() {
    clearInterval(playTimeInterval), wx.pauseVoice(), this.setData({
        playing: !1
    });
}), t(a, "stopVoice", function() {
    clearInterval(playTimeInterval), this.setData({
        playing: !1,
        formatedPlayTime: util.formatTime(0),
        playTime: 0
    }), wx.stopVoice();
}), t(a, "clear", function() {
    clearInterval(playTimeInterval), wx.stopVoice(), this.setData({
        playing: !1,
        hasRecord: !1,
        radioPath: "",
        formatedRecordTime: util.formatTime(0),
        recordTime: 0,
        playTime: 0
    });
}), a));