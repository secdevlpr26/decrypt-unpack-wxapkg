function e() {
    var e = this, a = 1;
    this.timer = setInterval(function() {
        a++, a %= 5, e.setData({
            j: a
        });
    }, 200);
}

var a = getApp(), t = a.globalData.domain;

Page({
    data: {
        areaId: "",
        audioBtn: [ {
            name: "播放",
            icon: "image/play.png",
            event: "playVoice"
        }, {
            name: "停止",
            icon: "image/pause.png",
            event: "stopVoice"
        }, {
            name: "重录",
            icon: "image/replay.png",
            event: "deleteVoice"
        } ],
        subclassId: "",
        addr: "",
        address: "",
        imageList: [],
        playing: !1,
        isRecord: !1,
        isSpeaking: !1,
        j: 1,
        radioPath: "",
        showTopTips: !1,
        reporting: !1,
        levelIndex: 0,
        bEventTypeNameArr: [ "请选择" ],
        bEventTypeArr: [ "" ],
        bEventTypeIndx: 0,
        sEventTypeNameArr: [ "请选择" ],
        sEventTypeArr: [ "" ],
        sEventTypeIndx: 0,
        areaIndex: [ 0, 0, 0 ],
        showAreaChoose: !1
    },
    changeAddress: function(e) {
        this.setData({
            address: e.detail.value
        });
    },
    getCurrentLocationByServer: function() {
        var e = this;
        wx.getLocation({
            success: function(a) {
                e.setData({
                    latitude: a.latitude,
                    longitude: a.longitude
                }), wx.request({
                    url: t + "/applet/selectArea",
                    data: {
                        latitude: a.latitude,
                        longitude: a.longitude
                    },
                    method: "GET",
                    success: function(a) {
                        e.setData({
                            address: a.data.address
                        });
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            },
            fail: function() {
                wx.showToast({
                    title: "坐标获取失败，请检查手机定位或小程序位置权限！",
                    icon: "none",
                    duration: 3e3
                });
            }
        });
    },
    selectAreaStreet: function(e) {
        var a = this;
        wx.request({
            url: t + "/applet/selectArea",
            data: {
                upper_area_id: e
            },
            method: "GET",
            success: function(e) {
                var t = e.data, s = new Array(), i = new Array();
                s[s.length] = "", i[i.length] = "请选择";
                for (var n = 0; n < t.length; n++) s[s.length] = t[n].area_id, i[i.length] = t[n].area_name;
                var r = s.length > 0 ? a.data.areaIndex[1] : 0;
                a.setData({
                    streetIds: s,
                    streetNames: i
                }), "" != s[r] && a.selectAreaCommunity(s[r]);
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    selectAreaCommunity: function(e) {
        var a = this;
        wx.request({
            url: t + "/applet/selectArea",
            data: {
                upper_area_id: e
            },
            method: "GET",
            success: function(e) {
                var t = e.data, s = new Array(), i = new Array();
                s[s.length] = "", i[i.length] = "请选择";
                for (var n = 0; n < t.length; n++) s[s.length] = t[n].area_id, i[i.length] = t[n].area_name;
                a.setData({
                    communityIds: s,
                    communityNames: i
                });
            },
            fail: function(e) {},
            complete: function(e) {}
        });
    },
    changeArea: function(e) {
        var a = this.data, t = a.areaIndex, s = e.detail.value, i = s[0], n = s[1], r = s[2];
        if (this.setData({
            areaIndex: s
        }), t[0] != s[0]) "" != (u = this.data.areaIds[i]) ? (this.setData({
            addr: a.areaNames[i],
            area_id: u,
            areaIndex: [ i, 0, 0 ]
        }), this.selectAreaStreet(u)) : this.setData({
            addr: "",
            area_id: "",
            streetIds: "",
            streetNames: "",
            communityIds: "",
            communityNames: "",
            areaIndex: [ i, 0, 0 ]
        }); else if (t[1] != s[1]) {
            var o = a.streetIds[n], d = a.areaNames[i];
            if ("" != o && void 0 !== o) {
                var c = a.streetNames[n];
                this.setData({
                    addr: d + "-" + c,
                    area_id: o,
                    areaIndex: [ i, n, 0 ]
                }), this.selectAreaCommunity(o);
            } else {
                var u = this.data.areaIds[i];
                this.setData({
                    communityIds: "",
                    communityNames: "",
                    addr: d,
                    area_id: u,
                    areaIndex: [ i, n, 0 ]
                });
            }
        } else if (t[2] != s[2]) {
            var l = a.communityIds[r], d = a.areaNames[i] + "-" + a.streetNames[n];
            if ("" != l && void 0 !== l) {
                var h = a.communityNames[r];
                this.setData({
                    addr: d + "-" + h,
                    area_id: l
                });
            } else void 0 === (u = a.streetIds[n]) && (d = "" == (u = a.areaIds[i]) ? "" : a.areaNames[i]), 
            this.setData({
                addr: d,
                area_id: u,
                areaIndex: [ i, n, r ]
            });
        }
    },
    openOrCloseAreaChoose: function() {
        this.setData({
            showAreaChoose: !this.data.showAreaChoose
        });
    },
    getTextareaValue: function(e) {
        this.setData({
            textareaValue: e.detail.value
        });
    },
    submit: function(e) {
        this.validateData() && (this.report(), this.setData({
            reporting: !0
        }));
    },
    success: function() {
        wx.navigateTo({
            url: "report-success"
        });
    },
    fail: function(e) {
        wx.navigateTo({
            url: "report-fail?errorMsg=" + e
        });
    },
    report: function() {
        var e = this;
        wx.request({
            url: t + "/watch/saveAppletEvent",
            data: {
                userId: a.globalData.userId,
                location: e.data.address,
                coordination: e.data.latitude + "," + e.data.longitude,
                detail: e.data.textareaValue,
                event_type_id: e.data.subclassId,
                area_id: e.data.areaId
            },
            success: function(a) {
                if ("1" == a.data.code) {
                    var t = a.data.eventId;
                    e.uploadEventFiles(t);
                } else e.fail(a.data.msg);
            },
            fail: function(e) {
                wx.showToast({
                    title: "请求失败，请检查网络！",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    uploadEventFiles: function(e) {
        for (var s = this.data.imageList, i = 0; i < s.length; i++) console.log(s), wx.uploadFile({
            url: t + "/addEventFilewx?event_id=" + e + "&userId=" + a.globalData.userId + "&type=image",
            filePath: s[i],
            name: "image"
        });
        this.data.radioPath && (console.log("开始上传语音。" + this.data.radioPath), wx.uploadFile({
            url: t + "/addEventFilewx?event_id=" + e + "&userId=" + a.globalData.userId + "&type=radio",
            filePath: this.data.radioPath,
            name: "radio"
        })), this.success();
    },
    chooseImage: function() {
        var e = this;
        wx.chooseImage({
            sourceType: [ "camera", "album" ],
            sizeType: [ "compressed" ],
            count: 8,
            success: function(a) {
                var t = e.data.imageList;
                if ((t = t.concat(a.tempFilePaths)).length > 8) return e.setData({
                    showTopTips: "最多上传8张图片。"
                }), !1;
                e.setData({
                    imageList: t
                });
            }
        });
    },
    validateData: function() {
        return this.data.subclassId ? this.data.areaId ? this.data.address ? !!this.data.textareaValue || (this.setData({
            showTopTips: "请输入事件描述！"
        }), !1) : (this.setData({
            showTopTips: "请输入事发地祥址！"
        }), !1) : (this.setData({
            showTopTips: "请选择事件上报地址！"
        }), !1) : (this.setData({
            showTopTips: "请选择事件类别！"
        }), !1);
    },
    getCurrentLocation: function() {
        var e = this;
        wx.chooseLocation({
            success: function(a) {
                e.setData({
                    address: a.address,
                    latitude: a.latitude,
                    longitude: a.longitude
                });
            }
        });
    },
    previewImage: function(e) {
        var a = e.target.dataset.src;
        wx.previewImage({
            current: a,
            urls: this.data.imageList
        });
    },
    getUserAreaInfo: function() {
        var e = this;
        wx.request({
            url: t + "/applet/getUserAreaInfo",
            data: {
                userId: a.globalData.userId
            },
            success: function(a) {
                console.log(a), e.setData({
                    addr: a.data.address,
                    areaId: a.data.areaId,
                    areaIds: [ a.data.qareaId ],
                    areaNames: [ a.data.qareaName ]
                }), e.selectAreaStreet(a.data.qareaId);
            }
        });
    },
    touchdown: function() {
        var a = {
            sampleRate: 44100,
            numberOfChannels: 1,
            encodeBitRate: 192e3,
            format: "mp3",
            frameSize: 50
        };
        this.recorderManager.start(a), e.call(this), this.setData({
            isSpeaking: !0
        });
    },
    touchup: function() {
        this.recorderManager.stop();
    },
    playVoice: function(e) {
        this.innerAudioContext.src = this.data.radioPath, this.innerAudioContext.play();
    },
    stopVoice: function() {
        this.innerAudioContext.stop();
    },
    deleteVoice: function() {
        this.innerAudioContext.stop();
        var e = this;
        wx.showModal({
            title: "是否删除？",
            content: "删除后可重新录制！",
            success: function(a) {
                a.confirm && e.setData({
                    isRecord: !1
                });
            }
        });
    },
    onReady: function(e) {
        var a = this;
        this.recorderManager = wx.getRecorderManager(), this.innerAudioContext = wx.createInnerAudioContext(), 
        this.recorderManager.onStop(function(e) {
            wx.showToast({
                title: "录音成功",
                icon: "success",
                duration: 1e3
            }), a.setData({
                radioPath: e.tempFilePath,
                isRecord: !0,
                isSpeaking: !1
            });
        });
    },
    onLoad: function(e) {
        this.getUserAreaInfo(), this.setData({
            subclassId: e.subclassId
        }), this.getCurrentLocationByServer();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});