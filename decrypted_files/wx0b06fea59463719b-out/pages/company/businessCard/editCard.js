var t = getApp(), e = wx.getRecorderManager(), a = require("../AddrManage.js");

Page({
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    innerAudioContext: "",
    data: {
        baseUrl: t.globalData.siteBaseUrl,
        ellipsis: !1,
        currentPosition: "",
        mycarsrc: "",
        upload_picture_list: [],
        evalList: [ {
            tempFilePaths: [],
            imgList: []
        } ],
        picture_list: [],
        showView: !1,
        PersonImg: "",
        mark: "0",
        cardcolor: !1,
        formSubmitFlag: !0,
        haveRecording: !1,
        isPlay: !1,
        audioSrc: "",
        showToastFlag: !1,
        audioFile: "",
        recordAuthMethod: 2,
        isLongPress: !1
    },
    getLength: function(t, e) {
        for (var a = 0, o = null === t ? "" : t.length, i = -1, n = 0; n < o; n++) a += (i = t.charCodeAt(n)) >= 0 && i <= 128 ? 1 : 2;
        return a > e;
    },
    onShow: function() {
        var t = this, e = wx.getStorageSync("mydata");
        t.setData({
            bb: e,
            recordAuthMethod: 2,
            isLongPress: !1
        }), t.data.bb && (t.setData({
            mycarsrc: t.data.bb.avatar
        }), t.gosavePersonal());
    },
    onLoad: function(e) {
        var o = this, i = wx.getStorageSync("resultData");
        this.innerAudioContext = wx.createInnerAudioContext(), o.setData({
            SiteID: t.globalData.baseInfo.SiteID,
            optionsobj: e,
            sign: e.sign ? e.sign : "",
            mark: e.mark ? e.mark : "0"
        }), o.addrManage = new a({
            page: o,
            onSelected: o.onAddrManageClick
        }), i && o.setData({
            lat: i.result.location.lat,
            lng: i.result.location.lng
        }), o.cardEditor();
    },
    onUnload: function() {
        wx.removeStorageSync("mydata"), this.innerAudioContext.destroy();
    },
    getUserSetting: function() {
        var t = this;
        (1 == t.data.recordAuthMethod || wx.getStorageSync("isSecondClick")) && wx.getSetting({
            success: function(e) {
                e.authSetting["scope.record"] ? (console.log("onshow已经授权"), t.setData({
                    recordAuthMethod: 2
                })) : t.setData({
                    recordAuthMethod: 1
                });
            },
            fail: function(e) {
                console.log("onshow未授权"), t.setData({
                    recordAuthMethod: 1
                });
            }
        });
    },
    unfold: function() {
        var t = !this.data.ellipsis;
        this.setData({
            ellipsis: t
        });
    },
    joinPicture: function(t) {
        t.currentTarget.dataset.index, this.data.evalList;
        var e = this, a = e.data.upload_picture_list, o = 9 - a.length;
        e.chooseWxImage(a, o);
    },
    chooseWxImage: function(t, e) {
        var a = this, o = t.length, a = this, i = [];
        wx.chooseImage({
            count: e,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                var e = t.tempFilePaths, n = e.length;
                if (o + n >= 9) for (var s = 9 - o, l = 0; l < s; l++) (d = {}).pic = e[l], i.push(d); else for (var r = 0; r < n; r++) {
                    var d = {};
                    d.pic = e[r], i.push(d);
                }
                a.upLoadImg(i);
            }
        });
    },
    upLoadImg: function(t) {
        var e = this;
        this.upload(e, t);
    },
    uploadImgData: function(e, a, o) {
        var i = this;
        t.uploadRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadImage",
            filePath: e,
            name: "imageFile",
            hideLoading: !0,
            formData: {
                upload_type: "2"
            },
            header: {
                "Content-Type": "multipart/form-data"
            },
            success: function(t) {
                var e = JSON.parse(t);
                if (e.success) (n = a && a(e.info.path)) && i.uploadImgData(n, a, o); else {
                    var n = o && o(e.msg);
                    n && i.uploadImgData(n, a, o);
                }
            },
            fail: function(t) {
                o && o(!1, t), wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            }
        });
    },
    upload: function(t, e) {
        if (e && e.length) {
            var a = this, o = 0, i = 0, n = 0, s = e.length, l = "";
            wx.showLoading({
                title: "正在上传中",
                mask: !0
            }), this.setData({
                formSubmitFlag: !1
            }), a.uploadImgData(e[n].pic, function(t) {
                if (o++, n++, a.data.upload_picture_list.push(t), a.setData({
                    upload_picture_list: a.data.upload_picture_list
                }), n !== s) return e[n].pic;
                a.setData({
                    formSubmitFlag: !0
                });
                var r = "";
                i && (r = "上传成功：" + o + "，上传失败：" + i + (l ? "，上传失败原因：" + l : "")), a.getSucImgData(r, function() {
                    wx.hideLoading();
                });
            }, function(t) {
                if (!t && "boolean" == typeof t) return a.setData({
                    formSubmitFlag: !0
                }), void wx.hideLoading();
                if (l = t, i++, ++n !== s) return e[n].pic;
                a.setData({
                    formSubmitFlag: !0
                });
                var r = "";
                i && (r = "上传成功：" + o + "，上传失败：" + i + (l ? "，上传失败原因：" + l : "")), a.getSucImgData(r, function() {
                    wx.hideLoading();
                });
            });
        }
    },
    getSucImgData: function(t, e) {
        e && e(), t && wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1
        });
    },
    uploadplp: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var a = e.tempFilePaths[0];
                wx.navigateTo({
                    url: "upload?src=" + a + "&ID=" + t.data.optionsobj.ID + "&CompanyName=" + t.data.CompanyName + "&UserName=" + t.data.UserName + "&Mobile=" + t.data.Mobile + "&Position=" + t.data.Position + "&WeChat=" + t.data.WeChat + "&QQ=" + t.data.QQ + "&selectedArea=" + t.data.selectedArea + "&currentPosition=" + t.data.currentPosition + "&Email=" + t.data.Email + "&mark=" + t.data.mark
                });
            }
        });
    },
    closepic: function(t) {
        var e = this, a = t.target.dataset.index;
        e.data.upload_picture_list.splice(a, 1), e.setData({
            upload_picture_list: e.data.upload_picture_list
        });
    },
    gosavePersonal: function() {
        var e = this;
        t.uploadRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadImage",
            filePath: e.data.mycarsrc,
            name: "imageFile",
            formData: {
                upload_type: "1"
            },
            success: function(t) {
                var a = JSON.parse(t);
                e.setData({
                    PersonImg: a.info.path
                });
            },
            fail: function(t) {}
        });
    },
    cardEditor: function() {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCard&ID=" + e.data.optionsobj.ID + "&SiteID=" + e.data.SiteID,
            method: "GET",
            success: function(t) {
                if (e.isloading = !1, t.success) {
                    if (t.info) {
                        e.data.optionsobj;
                        "1" === e.data.sign ? e.setData({
                            cardcontent: t.info,
                            CompanyName: e.data.optionsobj.CompanyName,
                            Mobile: e.data.optionsobj.Mobile,
                            Position: e.data.optionsobj.Position,
                            UserName: e.data.optionsobj.UserName,
                            QQ: e.data.optionsobj.QQ,
                            WeChat: e.data.optionsobj.WeChat,
                            selectedArea: e.data.optionsobj.selectedArea,
                            Email: e.data.optionsobj.Email,
                            currentPosition: e.data.optionsobj.currentPosition,
                            upload_picture_list: t.info.MoreImg ? t.info.MoreImg : [],
                            Bio: t.info.Bio
                        }) : (e.setData({
                            cardcontent: t.info,
                            CompanyName: null === t.info.CompanyName ? "" : t.info.CompanyName,
                            QQ: null === t.info.QQ ? "" : t.info.QQ,
                            Email: null === t.info.Email ? "" : t.info.Email,
                            selectedArea: t.info.AreaList ? t.info.AreaList : "",
                            WeChat: null === t.info.WeChat ? "" : t.info.WeChat,
                            Mobile: null === t.info.Mobile ? "" : t.info.Mobile,
                            Position: null === t.info.Position ? "" : t.info.Position,
                            UserName: null === t.info.UserName ? "" : t.info.UserName,
                            currentPosition: null === t.info.Address ? "" : t.info.Address,
                            upload_picture_list: t.info.MoreImg ? t.info.MoreImg : [],
                            Bio: t.info.Bio,
                            audioSrc: t.info.Recording
                        }), null == t.info.AreaList && null == t.info.AreaList || e.setData({
                            cardcolor: !0
                        }), t.info.PersonImg && e.setData({
                            mycarsrc: e.data.baseUrl + t.info.PersonImg,
                            PersonImg: t.info.PersonImg
                        })), t.info.Recording && e.setData({
                            haveRecording: !0,
                            RecordingTime: t.info.RecordingTime
                        });
                    }
                } else ;
            },
            fail: function(t) {
                e.isloading = !1;
            }
        });
    },
    formSubmit: function(e) {
        if (this.data.formSubmitFlag) {
            var a = this, o = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, i = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/, n = /^1[0-9]{10}$/, s = "", l = a.data.optionsobj.ID, r = e.detail.value.companyname, d = e.detail.value.compellation, u = e.detail.value.post, c = e.detail.value.telephone, h = e.detail.value.wechat, f = e.detail.value.qq, g = e.detail.value.location, p = e.detail.value.email, m = e.detail.value.AreaList, w = a.data.PersonImg, x = e.detail.value.Bio, v = a.data.lat, D = a.data.lng;
            null != a.data.upload_picture_list && "" != a.data.upload_picture_list && (s = a.data.upload_picture_list.join(","));
            var S = s;
            if (0 == e.detail.value.companyname.length) wx.showToast({
                title: "请输入公司名",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if (a.getLength(e.detail.value.companyname, 40)) wx.showToast({
                title: "公司名限20个汉字",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if (0 == e.detail.value.compellation.length) wx.showToast({
                title: "请输入姓名",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if (a.getLength(e.detail.value.compellation, 12)) wx.showToast({
                title: "姓名限6个汉字",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if (0 == e.detail.value.telephone.length) wx.showToast({
                title: "请输入电话",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if ("" == e.detail.value.email || o.test(e.detail.value.email)) if ("" == e.detail.value.telephone || n.test(e.detail.value.telephone)) if (0 == e.detail.value.post.length) wx.showToast({
                title: "请输入职位",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if (a.getLength(e.detail.value.post, 20)) wx.showToast({
                title: "职位限10个汉字",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if ("" == e.detail.value.wechat || i.test(e.detail.value.wechat)) if (a.getLength(e.detail.value.qq, 20)) wx.showToast({
                title: "QQ限20个汉字",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else if ("" === a.data.mycarsrc) wx.showToast({
                title: "请上传个人照片",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else {
                wx.showLoading({
                    title: "保存中...",
                    mask: !0
                });
                var T = {
                    ID: l,
                    CompanyName: r,
                    Email: p,
                    UserName: d,
                    Position: u,
                    Mobile: c,
                    WeChat: h,
                    QQ: f,
                    Address: g,
                    PersonImg: w,
                    MoreImg: S,
                    lat: v,
                    lng: D,
                    AreaList: m,
                    Bio: x
                };
                a.data.audioFile ? a.toUploadRecord(a.data.audioFile, function(t) {
                    T.Recording = t, a.saveBusiness(T, function(t) {
                        wx.hideLoading();
                    });
                }, function(e) {
                    T.Recording = a.data.audioSrc, t.showToast({
                        title: e,
                        icon: "none"
                    }), a.saveBusiness(T, function(t) {
                        wx.hideLoading();
                    });
                }) : (T.Recording = a.data.audioSrc, a.saveBusiness(T, function(t) {
                    wx.hideLoading();
                })), a.data.upload_picture_list = [];
            } else wx.showToast({
                title: "请输入正确微信号",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else wx.showToast({
                title: "请输入正确的电话号码",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3); else wx.showToast({
                title: "请输入正确的邮箱",
                icon: "none",
                duration: 1500
            }), setTimeout(function() {
                wx.hideToast();
            }, 2e3);
        }
    },
    saveBusiness: function(e, a) {
        var o = this;
        t.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=save",
            method: "POST",
            data: e,
            hideLoading: !0,
            success: function(t) {
                if (o.isloading = !1, a && a(t), t.success) if ("地址解析接口请求失败!" === t.msg) wx.showToast({
                    title: "您输入的地址有误，请重新输入",
                    icon: "none",
                    duration: 1500
                }); else if (wx.removeStorageSync("mydata"), wx.showToast({
                    title: "上传成功",
                    icon: "none",
                    duration: 1500
                }), wx.setStorageSync("editCardSuccessOnMycenter", !0), wx.setStorageSync("editCardSuccessOnIndex", !0), 
                "1" === o.data.mark) {
                    var e = getCurrentPages()[getCurrentPages().length - 2];
                    e && e.setData({
                        backselectFlag: !0
                    }), wx.navigateBack({
                        delta: 1
                    });
                } else wx.redirectTo({
                    url: "cardDetails?BusinessCardID=" + o.data.optionsobj.ID + "&business=1"
                }); else wx.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 1500
                });
            },
            fail: function(t) {
                err, err(), o.isloading = !1;
            }
        });
    },
    Inputcompanyname: function(t) {
        this.setData({
            CompanyName: t.detail.value
        });
    },
    Inputcompellation: function(t) {
        this.setData({
            UserName: t.detail.value
        });
    },
    Inputtelephone: function(t) {
        this.setData({
            Mobile: t.detail.value
        });
    },
    Inputpost: function(t) {
        this.setData({
            Position: t.detail.value
        });
    },
    Inputqq: function(t) {
        this.setData({
            QQ: t.detail.value
        });
    },
    InputweChat: function(t) {
        this.setData({
            WeChat: t.detail.value
        });
    },
    Inputemail: function(t) {
        this.setData({
            Email: t.detail.value
        });
    },
    InputcurrentPosition: function(t) {
        this.setData({
            currentPosition: t.detail.value
        });
    },
    start: function() {
        var t = this, a = {
            sampleRate: 16e3,
            numberOfChannels: 1,
            encodeBitRate: 96e3,
            format: "mp3",
            frameSize: 50
        };
        wx.getStorageSync("isSecondClick") ? wx.getSetting({
            success: function(o) {
                o.authSetting["scope.record"] ? (console.log("onshow已经授权"), t.setData({
                    recordAuthMethod: 2
                }), t.setData({
                    isLongPress: !0
                }), e.start(a), e.onStart(function() {
                    console.log("recorder start"), t.setData({
                        showToastFlag: !0
                    });
                }), e.onError(function(e) {
                    console.log(e, "错误回调"), (e.errMsg.indexOf("auth deny") > -1 || e.errMsg.indexOf("auth denied") > -1) && t.setData({
                        recordAuthMethod: 1
                    }), t.setData({
                        showToastFlag: !1
                    }), wx.setStorageSync("isSecondClick", !0);
                })) : wx.openSetting({});
            },
            fail: function(t) {
                console.log("onshow未授权"), wx.openSetting({});
            }
        }) : (t.setData({
            isLongPress: !0
        }), e.start(a), e.onStart(function() {
            console.log("recorder start"), t.setData({
                showToastFlag: !0
            });
        }), e.onError(function(e) {
            console.log(e, "错误回调"), (e.errMsg.indexOf("auth deny") > -1 || e.errMsg.indexOf("auth denied") > -1) && t.setData({
                recordAuthMethod: 1
            }), t.setData({
                showToastFlag: !1
            }), wx.setStorageSync("isSecondClick", !0);
        }));
    },
    stop: function() {
        var t = this;
        e.stop(), e.onStop(function(e) {
            t.setData({
                haveRecording: !0,
                showToastFlag: !1,
                audioFile: e.tempFilePath,
                RecordingTime: t.formseconds(e.duration),
                isPlay: !1,
                isLongPress: !1
            }), t.innerAudioContext.pause(), console.log("停止录音", e);
            e.tempFilePath;
        });
    },
    longTap: function() {
        console.log("longTap...."), this.start();
    },
    touchStart: function() {
        console.log("touchStart....");
    },
    touchEnd: function() {
        console.log("touchEnd....");
        var t = this;
        t.data.isLongPress && (this.stop(), t.setData({
            showToastFlag: !1
        }));
    },
    openSet: function() {
        var e = wx.getSystemInfoSync().SDKVersion;
        t.compareVersion("2.0.7", e) > -1 && wx.openSetting({});
    },
    play: function() {
        var t = this;
        t.data.isPlay ? (t.innerAudioContext.pause(), t.setData({
            isPlay: !1
        })) : (t.data.audioFile ? t.innerAudioContext.src = t.data.audioFile : t.innerAudioContext.src = t.data.baseUrl + t.data.audioSrc, 
        t.innerAudioContext.play(), t.innerAudioContext.onPlay(function() {
            t.setData({
                isPlay: !0
            }), console.log("开始播放");
        }), t.innerAudioContext.onEnded(function() {
            console.log("播放结束"), t.setData({
                isPlay: !1
            });
        }), t.innerAudioContext.onError(function(t) {
            console.log(t.errMsg), console.log(t.errCode);
        }));
    },
    toUploadRecord: function(e, a, o) {
        var i = t.globalData.WebUserID;
        t.uploadRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=UploadRecording",
            filePath: e,
            name: "file",
            hideLoading: !0,
            formData: {
                UserID: i
            },
            header: {
                "Content-Type": "multipart/form-data"
            },
            success: function(t) {
                var e = JSON.parse(t);
                e.success ? a && a(e.path) : o && o(e.msg);
            },
            fail: function(t) {
                o && o(!1, t), wx.showModal({
                    title: "提示",
                    content: "上传失败",
                    showCancel: !1
                });
            }
        });
    },
    inputBio: function(t) {
        this.setData({
            Bio: t.detail.value
        });
    },
    deleteRecord: function() {
        var e = this;
        t.showModal({
            title: "提示",
            content: "确定删除吗？",
            showCancel: !0,
            confirm: function(t) {
                t.confirm && e.setData({
                    haveRecording: !1,
                    audioFile: "",
                    audioSrc: ""
                });
            }
        });
    },
    formseconds: function(t) {
        var e;
        return t && (t /= 1e3, e = (parseInt(t % 3600 / 60) > 9 ? parseInt(t % 3600 / 60) : "0" + parseInt(t % 3600 / 60)) + ":" + (parseInt(t % 3600 % 60) > 9 ? parseInt(t % 3600 % 60) : "0" + parseInt(t % 3600 % 60))), 
        e;
    }
});