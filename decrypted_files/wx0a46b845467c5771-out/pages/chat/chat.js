var e = require("../../utils/util.js"), t = require("../../utils/webim_wx.js"), a = require("../../config.js"), s = require("../../utils/webim_handler.js"), o = require("../../utils/tls.js"), i = getApp(), n = null, r = "http://skyforest.static.elab-plus.com/", d = null, l = {
    sdkappid: a.sdkAppID,
    accountType: a.accType,
    accountMode: 0
};

o.init({
    sdkappid: l.sdkappid
}), Page({
    onShow: function() {
        wx.setStorageSync("loadTime", new Date().getTime());
        var t = {
            type: "PV",
            pvId: "P_2cMINA_5",
            pvCurPageName: "liaotianchuangkou",
            pvCurPageParams: "",
            adviserId: this.data.adviserInfo.id,
            imTalkId: this.data.adviserInfo.id + "_" + i.globalData.single.id + "_" + a.houseId,
            imTalkType: "1",
            pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despageForChat : "",
            pvLastPageParams: "",
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
        };
        console.log(t, "埋点"), e.trackRequest(t, i);
    },
    onUnload: function() {
        e.stopTrackEventTimeObj(), clearInterval(d), console.log(d, "aaaaaaaaaa"), this.data.videoFlag;
    },
    clearInput: function() {
        this.setData({
            currentMessage: ""
        });
    },
    data: {
        serverUrl: r,
        tempMessages: [],
        loading: !1,
        putMess: !1,
        loadMsgFlag: !1,
        messageNone: !1,
        lastMsgTime: 0,
        msgKey: "",
        videoImg: r + "im/videoImg.jpg",
        isBusy: !1,
        getFirstMsg: !1,
        isFirstSend: !0,
        showvideo: !1,
        videoFlag: !0,
        videoStatus: null,
        timeUse: null,
        adviserWx: "",
        tryAgainFlag: !1,
        despage: "liaotianchuangkou",
        adviserPhone: "",
        toView: "",
        isGiveTel: !1,
        pdfImg: r + "im/pdf.png",
        loadingImg: "../../image/wepy_pro/loading.gif",
        scrollTop: 200,
        currentMessage: "",
        userInfo: {},
        imgUrl: "",
        adviserId: "",
        adviserName: "",
        backButton: r + "im/back-button.png",
        busyButton: r + "im/online.png",
        dialog: !1,
        localMessages: [],
        Identifier: null,
        UserSig: null
    },
    bindConfirm: function(e) {
        var a = this, o = this.data.currentMessage;
        o.replace(/^\s*|\s*$/g, "") && s.onSendMsg(o, {
            TYPE: t.SESSION_TYPE.C2C,
            myselToID: a.data.adviserId
        }, i.globalData.identifier, function(e) {
            a.receiveMsgs(e, !0), a.clearInput();
        });
    },
    goBack: function() {},
    deny: function() {
        var e = this, a = {
            csyzwfelab20180425hhhdfq: "secretkey",
            type: 505,
            typedesc: "获取手机号码"
        };
        s.sendCustomMsg({
            text: "[用户已拒绝]",
            ext: JSON.stringify(a),
            data: ""
        }, {
            TYPE: t.SESSION_TYPE.C2C,
            myselToID: e.data.adviserId
        }, i.globalData.identifier, function(e) {}), wx.setStorageSync("isGiveTel", !0), 
        e.setData({
            isGiveTel: !0
        }), wx.showToast({
            title: "您已拒绝该请求"
        });
    },
    admit: function() {
        var o = this;
        i.globalData.phone, wx.request({
            url: e.newUrl() + "elab-marketing-authentication/adviser/text/bindCustomer",
            method: "POST",
            data: {
                houseId: a.houseId,
                customerId: i.globalData.single.id,
                adviserId: o.data.adviserInfo.id,
                shareParam: i.globalData.fromChannel
            },
            success: function(e) {
                if (wx.setStorageSync("isGiveTel", !0), o.setData({
                    isGiveTel: !0
                }), e.data.success) {
                    wx.showToast({
                        title: "您已同意！",
                        icon: "success",
                        duration: 2e3
                    });
                    var a = {
                        csyzwfelab20180425hhhdfq: "secretkey",
                        type: 503,
                        typedesc: "获取手机号码"
                    };
                    s.sendCustomMsg({
                        text: "[用户已同意]",
                        ext: JSON.stringify(a),
                        data: ""
                    }, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: o.data.adviserId
                    }, i.globalData.identifier, function(e) {});
                } else "CUSTOMER.HAS.BIND.ERROR" == e.data.errorCode && wx.showToast({
                    title: "您已被绑定",
                    icon: "success"
                }), s.onSendMsg("客户已被其他顾问绑定", {
                    TYPE: t.SESSION_TYPE.C2C,
                    myselToID: o.data.adviserId
                }, i.globalData.identifier, function(e) {});
            }
        });
    },
    previewImage: function(e) {
        var t = e.target.dataset.src;
        t && wx.previewImage({
            current: t,
            urls: [ e.target.dataset.src ]
        });
    },
    tryAgain: function(e) {
        var o = this;
        o.data.tryAgainFlag || (o.data.tryAgainFlag = !0, s.onSendMsg(e.currentTarget.dataset.msg, {
            TYPE: t.SESSION_TYPE.C2C,
            myselToID: o.data.adviserId
        }, i.globalData.identifier, function(t) {
            wx.setStorageSync("isSend" + a.houseId, !0), o.data.localMessages.splice(e.currentTarget.dataset.index, 1), 
            o.data.tempMessages.splice(e.currentTarget.dataset.index, 1), console.log(o.data.localMessages), 
            o.data.tryAgainFlag = !1, o.receiveMsgs(t, !0), o.data.isBusy && o.receiveMsgs({
                content: "您好，非常抱歉，我正在为其他用户服务，稍后回复您！",
                type: !1
            }, !1);
        }, function(e) {
            o.data.tryAgainFlag = !1, o.receiveMsgs(e, !0, !0);
        }));
    },
    receiveMsgs: function(t, a, s) {
        t.local = a, t.time = e.formatTodayTime(new Date());
        var o = this.data.localMessages || [], i = this.data.tempMessages;
        s && (t.failed = !0), i.push(t), o.push(t), this.setData({
            tempMessages: i,
            localMessages: o
        }), console.log(this.data.localMessages, "hhhh"), this.setData({
            toView: "hei"
        });
    },
    goVideo: function() {
        var t = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            clkDesPage: "ekanfangjietongye",
            clkName: "shipin_guwentuisong",
            clkId: "clk_2cmina_40",
            clkParams: ""
        };
        e.trackRequest(t, i), wx.getSetting({
            success: function(e) {
                console.log("***chat.onLoad***getSetting", e), e.authSetting["scope.record"] ? e.authSetting["scope.camera"] ? wx.redirectTo({
                    url: "../multiroom/aide/aide?isSuc=1"
                }) : wx.authorize({
                    scope: "scope.camera",
                    complete: function() {
                        wx.redirectTo({
                            url: "../multiroom/aide/aide?isSuc=1"
                        });
                    }
                }) : wx.authorize({
                    scope: "scope.record",
                    complete: function() {
                        e.authSetting["scope.camera"] ? wx.redirectTo({
                            url: "../multiroom/aide/aide?isSuc=1"
                        }) : wx.authorize({
                            scope: "scope.camera",
                            complete: function() {
                                wx.redirectTo({
                                    url: "../multiroom/aide/aide?isSuc=1"
                                });
                            }
                        });
                    }
                });
            },
            fail: function() {
                wx.showToast({
                    title: "系统提示:网络错误",
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    initIM: function(e, o) {
        var r = this;
        s.init({
            accountMode: l.accountMode,
            accountType: l.accountType,
            sdkAppID: l.sdkappid,
            avChatRoomId: "@TGS#1Q3DQEEFH",
            selType: t.SESSION_TYPE.C2C,
            selToID: r.data.adviserId,
            selSess: null
        });
        var d = {
            sdkAppID: l.sdkappid,
            appIDAt3rd: l.sdkappid,
            accountType: l.accountType,
            identifier: i.globalData.identifier,
            identifierNick: i.globalData.single.nickname || "小程序用户",
            userSig: i.globalData.userSig
        }, c = (s.onDestoryGroupNotify, s.onRevokeGroupNotify, s.onCustomGroupNotify, {
            onConnNotify: s.onConnNotify,
            onBigGroupMsgNotify: function(e) {
                s.onBigGroupMsgNotify(e, function(e) {
                    r.receiveMsgs(e);
                });
            },
            onMsgNotify: function(e) {
                s.onMsgNotify(e, function(e) {
                    wx.setStorageSync("isSend" + a.houseId, !0), r.data.getFirstMsg || r.setData({
                        getFirstMsg: !0
                    });
                    var o = "【系统消息】该用户当前登录方式为微信小程序登录，无法使用此功能";
                    if (e.content && 102 == e.content.type || 512 == e.content.type) s.onSendMsg(o, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: e.fromAccountNick
                    }); else if (e.content && 502 == e.content.type) {
                        if (console.log(e), !e.content.param.isShowInvitation) return void console.log("150723");
                        if (e.fromAccountNick != r.data.adviserId || !wx.getStorageSync("phone")) return void s.onSendMsg("【系统消息】当前用户未授权手机号，暂时无法获取。请通过聊天方式索取客户手机号码！", {
                            TYPE: t.SESSION_TYPE.C2C,
                            myselToID: e.fromAccountNick
                        });
                        wx.setStorageSync("isGiveTel", !1), r.setData({
                            isGiveTel: !1
                        }), e.content.isover = !1, r.receiveMsgs(e, !1);
                    } else {
                        if (e.content && 513 == e.content.type || 504 == e.content.type) return;
                        e.content && "string" == typeof e.content && e.content.includes("onChangePlayAudio") ? s.onSendMsg(o, {
                            TYPE: t.SESSION_TYPE.C2C,
                            myselToID: e.fromAccountNick
                        }) : e.fromAccountNick == r.data.adviserId && r.receiveMsgs(e, !1);
                    }
                });
            },
            onGroupSystemNotifys: s.onGroupSystemNotifys,
            onGroupInfoChangeNotify: s.onGroupInfoChangeNotify
        }), g = {
            isAccessFormalEnv: !0,
            isLogOn: !1
        };
        1 == l.accountMode ? s.sdkLogin(d, c, g, function() {
            r.addFriend();
        }) : s.sdkLogin(d, c, g, function() {
            console.log("登陆Im所需要的时间", new Date().getTime() - n), r.loadMessage();
        });
    },
    scrollTop: function() {
        this.data.messageNone && this.data.putMess && (this.setData({
            putMess: !1
        }), this.loadMessage());
    },
    loadMessage: function() {
        var o = this;
        console.log("开始获取历史消息", new Date() - n);
        var r = this;
        this.setData({
            loading: !0
        }), setTimeout(function() {
            o.setData({
                loading: !1
            });
        }, 2e3), s.getC2CHistoryMsgs(function(t, a, s) {
            if (console.log(new Date().getTime() - n, "渲染数据时间", t.elems[0].content), a && (r.setData({
                localMessages: r.data.tempMessages
            }), s && r.setData({
                toView: "hei"
            })), console.log(r.data.localMessages, r.data.tempMessages), t.elems[0].content.ext) {
                if (513 == (o = JSON.parse(t.elems[0].content.ext)).type || 504 == o.type || 512 == o.type || 505 == o.type || 503 == o.type || 501 == o.type || 500 == o.type) return;
                return t.elems[0].content = o, 515 == t.elems[0].content.type || 516 == t.elems[0].content.type ? t.elems[0].local = !1 : t.elems[0].local = !0, 
                t.elems[0].time = e.formatTodayTime(new Date(1e3 * t.time)), (d = r.data.tempMessages).unshift(t.elems[0]), 
                r.setData({
                    tempMessages: d
                }), void (a && (r.setData({
                    localMessages: r.data.tempMessages
                }), s && r.setData({
                    toView: "hei"
                })));
            }
            if (!(t.elems[0].type && "TIMSoundElem" == t.elems[0].type || t.elems[0].content.text.includes("【系统消息】") || t.elems[0].content.text.includes("顾问不存在") || t.elems[0].content.text.indexOf("该手机号码已被其他顾问绑定") > -1)) {
                if (t.elems[0].content.text.indexOf("csyzwfelab20180425hhhdfq") > -1) {
                    var o = JSON.parse(t.elems[0].content.text);
                    if (513 == o.type || 504 == o.type || 512 == o.type || 505 == o.type || 503 == o.type || 501 == o.type || 500 == o.type) return;
                    if (502 == o.type && !wx.getStorageSync("phone")) return;
                    if (t.elems[0].content = o, 515 == t.elems[0].content.type || 516 == t.elems[0].content.type) return t.elems[0].local = !1, 
                    t.elems[0].time = e.formatTodayTime(new Date(1e3 * t.time)), (d = r.data.tempMessages).unshift(t.elems[0]), 
                    r.setData({
                        tempMessages: d
                    }), void (a && (r.setData({
                        localMessages: r.data.tempMessages
                    }), s && r.setData({
                        toView: "hei"
                    })));
                } else t.elems[0].content = t.elems[0].content.text;
                t.fromAccount == i.globalData.identifier ? t.elems[0].local = !0 : t.elems[0].local = !1, 
                t.elems[0].time = e.formatTodayTime(new Date(1e3 * t.time));
                var d = r.data.tempMessages;
                d.unshift(t.elems[0]), r.setData({
                    tempMessages: d
                }), a && (r.setData({
                    localMessages: r.data.tempMessages
                }), s && r.setData({
                    toView: "hei"
                }));
            }
        }, r.data.msgKey, r.data.lastMsgTime, function(e, t) {
            r.setData({
                loading: !1
            }), r.setData({
                msgKey: e
            }), r.setData({
                lastMsgTime: t
            }), r.setData({
                putMess: !0
            }), r.setData({
                messageNone: !0
            });
        }, function() {
            r.setData({
                loading: !1
            }), r.setData({
                messageNone: !1
            });
        }, function(o) {
            if (1 == o) {
                if (1 == r.data.videoStatus) {
                    var n = {
                        csyzwfelab20180425hhhdfq: "secretkey",
                        param: {
                            timeUse: r.data.timeUse
                        },
                        type: 500,
                        typedesc: "视频通讯成功"
                    };
                    s.sendCustomMsg({
                        text: "视频通讯成功",
                        ext: JSON.stringify(n),
                        data: ""
                    }, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: r.data.adviserId
                    }, i.globalData.identifier);
                }
                if (2 == r.data.videoStatus) {
                    var d = {
                        csyzwfelab20180425hhhdfq: "secretkey",
                        type: 501,
                        typedesc: "视频通讯失败"
                    };
                    s.sendCustomMsg({
                        text: "视频通讯失败",
                        ext: JSON.stringify(d),
                        data: ""
                    }, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: r.data.adviserId
                    }, i.globalData.identifier);
                }
                setTimeout(function() {
                    var o = i.globalData.imHelloWord ? i.globalData.imHelloWord : "您好，我是项目的置业顾问，请问您想咨询什么问题？我在这里为您快速解答。";
                    console.log(o);
                    var n = {
                        csyzwfelab20180425hhhdfq: "secretkey",
                        param: {
                            text: o
                        },
                        type: 515,
                        typedesc: o
                    };
                    (new Date().getTime() - wx.getStorageSync("needRepeatTo" + r.data.adviserId)) / 1e3 / 60 / 60 > 23 ? s.sendCustomMsg({
                        text: o,
                        ext: JSON.stringify(n),
                        data: ""
                    }, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: r.data.adviserId
                    }, i.globalData.identifier, function(t) {
                        r.receiveMsgs({
                            content: o,
                            type: !1
                        }, !1), wx.setStorageSync("needRepeatTo" + r.data.adviserId, new Date().getTime()), 
                        wx.request({
                            url: e.newUrl() + "elab-marketing-notify/message/push",
                            method: "POST",
                            header: {
                                token: i.globalData.tonken
                            },
                            data: {
                                houseId: a.houseId,
                                receiver: r.data.adviserInfo.id,
                                businessType: 1,
                                workId: i.globalData.single.id,
                                title: "消息通知顾问",
                                code: "PUSH_003",
                                pushContent: "已有客户发起在线咨询，请及时回复",
                                receiverType: "adviser"
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        }), wx.request({
                            url: e.newUrl() + "elab-marketing-authentication/adviser/text/getCustomerDetail",
                            method: "POST",
                            data: {
                                adviserId: r.data.adviserInfo.id,
                                customerId: i.globalData.single.id,
                                houseId: a.houseId
                            },
                            success: function(t) {
                                t.data.success && (console.log(t.data, "ffff"), "小程序用户" == t.data.single.nameRemark && (t.data.single.nameRemark = !1), 
                                wx.request({
                                    url: e.newUrl() + "elab-marketing-authentication/vcode/send/chatSms",
                                    method: "POST",
                                    data: {
                                        param: {
                                            name: t.data.single.nameRemark || i.globalData.single.nickname || t.data.single.mobileRemark || i.globalData.phone || "小程序客户"
                                        },
                                        phoneNumber: r.data.adviserInfo.mobile
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    }
                                }));
                            }
                        });
                    }) : wx.setStorageSync("needRepeatTo" + r.data.adviserId, new Date().getTime());
                }, 2e3);
            }
        }, function(e) {
            setTimeout(function() {
                r.loadMessage();
            }, 1e3), console.log(e);
        });
    },
    showDialog: function(e) {
        e.currentTarget.dataset.url && this.setData({
            imgUrl: encodeURI(decodeURIComponent(e.currentTarget.dataset.url))
        }), e.currentTarget.dataset.showvideo && this.setData({
            showvideo: e.currentTarget.dataset.showvideo
        }), this.setData({
            dialog: e.currentTarget.dataset.dialog
        });
    },
    fun: function(e) {
        console.log(e, "fun");
    },
    onReady: function() {
        wx.hideLoading(), wx.setNavigationBarTitle({
            title: "在线咨询"
        });
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "正在加载"
        }), n = new Date().getTime(), console.log(t, "yuu", n), t.videoStatus && 1 == t.videoStatus && (this.setData({
            videoStatus: 1
        }), this.setData({
            timeUse: t.videoTime
        })), t.videoStatus && 2 == t.videoStatus && this.setData({
            videoStatus: 2
        });
        var s = this, o = JSON.parse(wx.getStorageSync("adviserInfo"));
        console.log(o, "顾问信息"), s.setData({
            adviserInfo: o
        }), s.setData({
            adviserName: o.name || "顾问"
        });
        var d = o.id + "_" + o.houseId;
        wx.getStorageSync("isGiveTel") && this.setData({
            isGiveTel: !0
        }), this.setData({
            adviserId: d
        }), wx.request({
            url: e.newUrl() + "elab-marketing-authentication/adviser/text/connect",
            method: "POST",
            data: {
                adviserId: o.id,
                customerId: i.globalData.single.id,
                houseId: a.houseId
            },
            success: function(e) {}
        }), wx.request({
            header: {
                token: i.globalData.tonken
            },
            url: e.newUrl() + "elab-marketing-authentication/worker/account/selfInfo",
            method: "POST",
            data: {
                adviserId: o.id
            },
            success: function(e) {
                s.setData({
                    isBusy: e.data.single.onlineStatus || !1
                }), s.setData({
                    adviserWx: e.data.single.wxno || ""
                }), s.setData({
                    adviserPhone: e.data.single.mobile || ""
                }), s.setData({
                    busyButton: s.data.isBusy ? r + "im/offline.png" : r + "im/online.png"
                });
            },
            fail: function(e) {
                console.log(e);
            }
        }), console.log("开始调用IM接口", new Date() - n), s.initIM();
    },
    goH5: function(e) {
        wx.setStorageSync("h5page", e.currentTarget.dataset.url), console.log(e.currentTarget.dataset.url, "uuuuu"), 
        console.log(decodeURI(e.currentTarget.dataset.url)), console.log(encodeURIComponent(e.currentTarget.dataset.url)), 
        wx.navigateTo({
            url: "../webView/webView?view=" + encodeURIComponent(e.currentTarget.dataset.url),
            success: function() {},
            fail: function(e) {
                console.log(e);
            }
        });
    },
    goVideoPage: function(e) {
        this.setData({
            videoFlag: !1
        }), wx.navigateTo({
            url: "../video/video?source=" + e.currentTarget.dataset.url
        });
    },
    goPDF: function(e) {
        wx.downloadFile({
            url: e.currentTarget.dataset.url,
            success: function(e) {
                var t = e.tempFilePath;
                wx.openDocument({
                    filePath: t,
                    success: function(e) {
                        console.log("打开文档成功");
                    }
                });
            }
        });
    },
    bindButtonTap: function() {
        var o = this, n = this;
        if (this.data.isFirstSend) {
            this.setData({
                isFirstSend: !1
            });
            var r = 300;
            d = setInterval(function() {
                if (r--, o.data.getFirstMsg) clearInterval(d); else if (r < 1) {
                    var e = "", a = {
                        text: e = i.globalData.imRepeat ? i.globalData.imRepeat : "您好，我现在在忙，请您留下电话号码，我会尽快联系您；\n您也可以通过以下方式联系我：\n我的电话号码：" + n.data.adviserPhone + "\n我的微信号：" + n.data.adviserWx,
                        conSultantWeichat: n.data.adviserWx,
                        conSultantphone: n.data.adviserPhone
                    }, l = {
                        csyzwfelab20180425hhhdfq: "secretkey",
                        param: a,
                        type: 516,
                        typedesc: "您好，我现在在忙，请您留下电话号码，我会尽快联系您"
                    };
                    s.sendCustomMsg({
                        text: "您好，我现在在忙，请您留下电话号码，我会尽快联系您",
                        ext: JSON.stringify(l),
                        data: ""
                    }, {
                        TYPE: t.SESSION_TYPE.C2C,
                        myselToID: n.data.adviserId
                    }, i.globalData.identifier, function(e) {
                        n.receiveMsgs({
                            content: a.text,
                            type: !1
                        }, !1);
                    }), clearInterval(d);
                }
            }, 1e3);
        }
        n = this;
        this.data.currentMessage.replace(/^\s*|\s*$/g, "") && (s.onSendMsg(this.data.currentMessage, {
            TYPE: t.SESSION_TYPE.C2C,
            myselToID: n.data.adviserId
        }, i.globalData.identifier, function(t) {
            wx.setStorageSync("isSend" + a.houseId, !0);
            var s = {
                type: "CLK",
                adviserId: n.data.adviserInfo.id,
                imTalkId: n.data.adviserInfo.id + "_" + i.globalData.single.id + "_" + a.houseId,
                imTalkType: "1",
                clkName: "dianjifasong",
                pvCurPageName: "liaotianchuangkou",
                pvCurPageParams: "",
                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despageForChat : "",
                clkId: "clk_2cmina_27",
                clkParams: ""
            };
            e.trackRequest(s, i), n.receiveMsgs(t, !0), n.data.isBusy && n.receiveMsgs({
                content: "您好，非常抱歉，我正在为其他用户服务，稍后回复您！",
                type: !1
            }, !1);
        }, function(e) {
            n.receiveMsgs(e, !0, !0);
        }), this.setData({
            currentMessage: ""
        }));
    },
    bindKeyInput: function(e) {
        this.setData({
            currentMessage: e.detail.value
        });
    }
});