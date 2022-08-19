function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a, n, i = require("../../util/util.js"), s = getApp().globalData.domain;

Page((t = {
    data: {
        eventLevel: [ "一般", "较大", "重大" ],
        levelIndex: 0,
        bEventTypeNameArr: [ "请选择" ],
        bEventTypeArr: [ "" ],
        bEventTypeIndx: 0,
        sEventTypeNameArr: [ "请选择" ],
        sEventTypeArr: [ "" ],
        sEventTypeIndx: 0,
        sex: [ "女", "男" ],
        sexIndex: 0,
        areaIndex: [ 0, 0, 0 ],
        condition: !1,
        area_id: "",
        addr: "请选择上报地址",
        openNum: 0,
        action: !0,
        imageList: [],
        radioPath: "",
        recording: !1,
        playing: !1,
        hasRecord: !1,
        recordTime: 0,
        playTime: 0,
        formatedRecordTime: "00:00:00",
        formatedPlayTime: "00:00:00"
    },
    selectEventBigType: function() {
        var e = this;
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: s + "/watch/selectEventType?user_id=" + t.data,
                    success: function(t) {
                        for (var a = t.data, n = new Array(), i = new Array(), s = 0; s < a.length; s++) n[n.length] = a[s].type_name, 
                        i[i.length] = a[s].event_type_id;
                        0 == a.length && (n[0] = "请选择"), e.setData({
                            bEventTypeNameArr: n,
                            bEventTypeArr: i
                        });
                    },
                    fail: function(e) {},
                    complete: function(t) {
                        var a = e.data.bEventTypeArr[0];
                        "" != a && e.selectEventSmallType(a);
                    }
                });
            },
            fail: function(e) {}
        });
    },
    selectEventSmallType: function(e) {
        var t = this;
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.request({
                    url: s + "/watch/selectEventType?upper_type_id=" + e + "&user_id=" + a.data,
                    success: function(e) {
                        for (var a = e.data, n = new Array(), i = new Array(), s = 0; s < a.length; s++) n[n.length] = a[s].type_name, 
                        i[i.length] = a[s].event_type_id;
                        0 == a.length && (n[0] = "请选择"), t.setData({
                            sEventTypeIndx: 0,
                            sEventTypeNameArr: n,
                            sEventTypeArr: i
                        });
                    },
                    fail: function(e) {}
                });
            },
            fail: function(e) {}
        });
    },
    selectArea: function(e, t) {
        var a = this;
        wx.request({
            url: s + "/applet/selectArea?latitude=" + e + "&longitude=" + t,
            method: "GET",
            success: function(e) {
                var t = e.data, n = new Array(), i = new Array();
                n[n.length] = "", i[i.length] = "请选择";
                for (var s = 0; s < t.length; s++) n[n.length] = t[s].area_id, i[i.length] = t[s].area_name;
                a.setData({
                    areaIds: n,
                    areaNames: i,
                    addr: i[0],
                    area_id: n[0]
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    selectAreaStreet: function(e) {
        var t = this;
        wx.request({
            url: s + "/applet/selectArea?upper_area_id=" + e,
            method: "GET",
            success: function(e) {
                var a = e.data, n = new Array(), i = new Array();
                n[n.length] = "", i[i.length] = "请选择";
                for (var s = 0; s < a.length; s++) n[n.length] = a[s].area_id, i[i.length] = a[s].area_name;
                t.setData({
                    streetIds: n,
                    streetNames: i
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    selectAreaCommunity: function(e) {
        var t = this;
        wx.request({
            url: s + "/applet/selectArea?upper_area_id=" + e,
            method: "GET",
            success: function(e) {
                var a = e.data, n = new Array(), i = new Array();
                n[n.length] = "", i[i.length] = "请选择";
                for (var s = 0; s < a.length; s++) n[n.length] = a[s].area_id, i[i.length] = a[s].area_name;
                t.setData({
                    communityIds: n,
                    communityNames: i
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    selectUserInfo: function() {
        var e = this;
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: s + "/watch/selectUserInfo?user_id=" + t.data,
                    success: function(t) {
                        var a = 0;
                        a = "true" == t.data.sex ? 1 : 0, e.setData({
                            name: t.data.name,
                            sexIndex: a,
                            phone: t.data.phone
                        });
                    },
                    fail: function(e) {}
                });
            },
            fail: function(e) {}
        });
    },
    changeBType: function(e) {
        this.setData({
            bEventTypeIndx: e.detail.value
        }), this.selectEventSmallType(this.data.bEventTypeArr[this.data.bEventTypeIndx]);
    },
    changeSType: function(e) {
        this.setData({
            sEventTypeIndx: e.detail.value
        });
    },
    changeEventLevel: function(e) {
        this.setData({
            levelIndex: e.detail.value
        });
    },
    changeSex: function(e) {
        this.setData({
            sexIndex: e.detail.value
        });
    },
    changeArea: function(e) {
        var t = this.data, a = t.areaIndex, n = e.detail.value, i = n[0], s = n[1], r = n[2];
        if (this.setData({
            areaIndex: n
        }), a[0] != n[0]) "" != (l = this.data.areaIds[i]) ? (this.setData({
            addr: t.areaNames[i],
            area_id: l
        }), this.selectAreaStreet(l)) : this.setData({
            addr: "",
            area_id: "",
            streetIds: "",
            streetNames: "",
            communityIds: "",
            communityNames: ""
        }); else if (a[1] != n[1]) {
            var o = t.streetIds[s], c = t.areaNames[i];
            if ("" != o && void 0 !== o) {
                var d = t.streetNames[s];
                this.setData({
                    addr: c + "-" + d,
                    area_id: o
                }), this.selectAreaCommunity(o);
            } else {
                var l = this.data.areaIds[i];
                this.setData({
                    communityIds: "",
                    communityNames: "",
                    addr: c,
                    area_id: l
                });
            }
        } else if (a[2] != n[2]) {
            var u = t.communityIds[r], c = t.areaNames[i] + "-" + t.streetNames[s];
            if ("" != u && void 0 !== u) {
                var m = t.communityNames[r];
                this.setData({
                    addr: c + "-" + m,
                    area_id: u
                });
            } else void 0 === (l = t.streetIds[s]) && (c = "" == (l = t.areaIds[i]) ? "" : t.areaNames[i]), 
            this.setData({
                addr: c,
                area_id: l
            }), console.log(this.data);
        }
    },
    open: function() {
        this.setData({
            condition: !this.data.condition
        }), 0 == this.data.openNum && (this.selectArea(this.data.latitude, this.data.longitude), 
        this.setData({
            openNum: 1
        }));
    },
    formSubmit: function(e) {
        var t = this;
        1 == this.validateData(e) ? (t.setData({
            action: !1
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getLocation({
                    type: "wgs84",
                    success: function(n) {
                        wx.request({
                            url: s + "/watch/saveAppletEvent?userId=" + a.data,
                            data: e.detail.value,
                            success: function(e) {
                                if ("1" == e.data.code) {
                                    wx.showToast({
                                        title: "上报成功！",
                                        icon: "success",
                                        duration: 5e3
                                    });
                                    for (var n = e.data.eventId, i = t.data.imageList, r = 0; r < i.length; r++) wx.uploadFile({
                                        url: s + "/addEventFilewx?event_id=" + n + "&userId=" + a.data + "&type=图片",
                                        filePath: i[r],
                                        name: "image"
                                    });
                                    "" != t.data.radioPath && null != t.data.radioPath && wx.uploadFile({
                                        url: s + "/addEventFilewx?event_id=" + n + "&userId=" + a.data + "&type=语音",
                                        filePath: t.data.radioPath,
                                        name: "radio"
                                    }), setTimeout(function() {
                                        wx.navigateBack({});
                                    }, 2e3);
                                } else wx.showToast({
                                    title: e.data.msg,
                                    icon: "success",
                                    duration: 2e3
                                }), setTimeout(function() {
                                    t.setData({
                                        action: !0
                                    });
                                }, 2e3), t.errorMsg(e.data.msg);
                            },
                            fail: function(e) {
                                t.setData({
                                    action: !0
                                }), wx.showToast({
                                    title: "请求失败，请检查网络！",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                });
            }
        })) : wx.showToast({
            title: "请将信息填写完整！",
            icon: "success",
            duration: 2e3
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
        var t = this, a = !0, n = e.detail.value;
        return "" == n.event_type_id ? a = t.errorMsg("请选择事件类别！") : "" == n.area_id ? a = t.errorMsg("请选择事件上报地址！") : "" == n.location ? a = t.errorMsg("请输入事发地祥址！") : "" == n.detail && (a = t.errorMsg("请输入事件描述！")), 
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
    onLoad: function(e) {
        getApp();
        var t = this;
        wx.getLocation({
            success: function(e) {
                t.setData({
                    latitude: e.latitude,
                    longitude: e.longitude
                });
            }
        });
    },
    previewImage: function(e) {
        var t = e.target.dataset.src;
        wx.previewImage({
            current: t,
            urls: this.data.imageList
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
        n = setInterval(function() {
            var t = e.data.recordTime += 1;
            e.setData({
                formatedRecordTime: i.formatTime(e.data.recordTime),
                recordTime: t
            });
        }, 1e3), wx.startRecord({
            success: function(t) {
                e.setData({
                    hasRecord: !0,
                    radioPath: t.tempFilePath,
                    formatedPlayTime: i.formatTime(e.data.playTime)
                });
            },
            complete: function() {
                e.setData({
                    recording: !1
                }), clearInterval(n);
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
                console.log("stop record success"), clearInterval(n), e.setData({
                    recording: !1,
                    hasRecord: !1,
                    recordTime: 0,
                    formatedRecordTime: i.formatTime(0)
                });
            }
        });
    },
    playVoice: function() {
        var e = this;
        a = setInterval(function() {
            var t = e.data.playTime + 1;
            console.log("update playTime", t), e.setData({
                playing: !0,
                formatedPlayTime: i.formatTime(t),
                playTime: t
            });
        }, 1e3), wx.playVoice({
            filePath: this.data.radioPath,
            success: function() {
                clearInterval(a);
                console.log("play voice finished"), e.setData({
                    playing: !1,
                    formatedPlayTime: i.formatTime(0),
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
            formatedPlayTime: i.formatTime(0),
            playTime: 0
        }), wx.stopVoice();
    },
    clear: function() {
        clearInterval(a), wx.stopVoice(), this.setData({
            playing: !1,
            hasRecord: !1,
            radioPath: "",
            formatedRecordTime: i.formatTime(0),
            recordTime: 0,
            playTime: 0
        });
    },
    onReady: function() {},
    onShow: function() {}
}, e(t, "onHide", function() {}), e(t, "onUnload", function() {}), e(t, "onPullDownRefresh", function() {}), 
e(t, "onReachBottom", function() {}), e(t, "onShareAppMessage", function() {}), 
t));