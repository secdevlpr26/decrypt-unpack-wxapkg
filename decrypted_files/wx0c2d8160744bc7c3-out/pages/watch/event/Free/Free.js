var t = getApp().globalData.domain;

Page({
    data: {
        event_type_id: "ff8080816150d7040161547ec378043f",
        eventLevel: [ "一般", "较大", "重大" ],
        levelIndex: 0,
        sex: [ "女", "男" ],
        sexIndex: 0,
        condition: !1,
        area_id: "ff80808160a092e60160bb05e0a2490d",
        action: !0,
        addr: "大丰街道",
        imageList: []
    },
    onLoad: function(t) {
        var e = this;
        wx.getLocation({
            success: function(t) {
                e.setData({
                    latitude: t.latitude,
                    longitude: t.longitude
                }), e.selectArea(t.latitude, t.longitude);
            },
            fail: function() {
                wx.showToast({
                    title: "坐标获取失败，请打开手机定位或小程序位置权限！",
                    icon: "loading",
                    duration: 3e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 3e3);
            }
        });
    },
    selectArea: function(e, a) {
        var i = this;
        wx.request({
            url: t + "/applet/selectArea",
            data: {
                latitude: e,
                longitude: a
            },
            method: "GET",
            success: function(t) {
                var e = t.data.address;
                i.setData({
                    address: e
                });
            },
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    formSubmit: function(e) {
        var a = this;
        1 == this.validateData(e) && wx.showModal({
            title: "提示",
            content: "事件将上报至" + a.data.addr + "！是否确定？",
            success: function(i) {
                i.confirm ? (a.setData({
                    action: !1
                }), wx.getLocation({
                    type: "wgs84",
                    success: function(i) {
                        wx.request({
                            url: t + "/watch/saveAppletEvent?userId=ff8080816343408201634a00998a2095",
                            data: e.detail.value,
                            success: function(e) {
                                if ("1" == e.data.code) {
                                    wx.showToast({
                                        title: "上报成功！",
                                        icon: "success",
                                        duration: 5e3
                                    });
                                    for (var i = e.data.eventId, s = a.data.imageList, n = 0; n < s.length; n++) wx.uploadFile({
                                        url: t + "/addEventFilewx?event_id=" + i + "&userId=ff8080816343408201634a00998a2095&type=image",
                                        filePath: s[n],
                                        name: "image"
                                    });
                                    setTimeout(function() {
                                        wx.navigateBack({});
                                    }, 2e3);
                                } else wx.showToast({
                                    title: e.data.msg,
                                    icon: "success",
                                    duration: 2e3
                                }), setTimeout(function() {
                                    a.setData({
                                        action: !0
                                    });
                                }, 2e3), a.errorMsg(e.data.msg);
                            },
                            fail: function(t) {
                                a.setData({
                                    action: !0
                                }), wx.showToast({
                                    title: "请求失败，请检查网络！",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                })) : i.cancel;
            }
        });
    },
    chooseImage: function() {
        var t = this;
        wx.chooseImage({
            sourceType: [ "camera", "album" ],
            sizeType: [ "compressed" ],
            count: 9,
            success: function(e) {
                t.setData({
                    imageList: e.tempFilePaths
                });
            }
        });
    },
    errorMsg: function(t) {
        return wx.showToast({
            title: t,
            icon: "warn",
            duration: 2e3
        }), !1;
    },
    validateData: function(t) {
        var e = this, a = !0, i = t.detail.value;
        return "" == i.event_type_id || null == i.event_type_id ? a = e.errorMsg("请选择事件类别！") : "" == i.area_id ? a = e.errorMsg("请选择事件上报地址！") : "" == i.location ? a = e.errorMsg("请输入事发地祥址！") : "" == i.detail ? a = e.errorMsg("请输入事件描述！") : "" == i.phone && (a = e.errorMsg("请输入联系电话！")), 
        a;
    },
    getEventLocation: function() {
        var t = this;
        wx.chooseLocation({
            success: function(e) {
                t.setData({
                    address: e.address,
                    latitude: e.latitude,
                    longitude: e.longitude
                });
            }
        });
    },
    previewImage: function(t) {
        var e = t.target.dataset.src;
        wx.previewImage({
            current: e,
            urls: this.data.imageList
        });
    },
    onHide: function() {
        this.data.playing ? this.stopVoice() : this.data.recording && this.stopRecordUnexpectedly();
    }
});