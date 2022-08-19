var t, a = require("../../../utils/rtcroom.js"), e = require("../../../utils/util.js"), o = getApp(), s = require("../../../config.js"), n = (require("../../../utils/webim_wx.js"), 
null);

Page({
    data: {
        roomID: "",
        roomname: "",
        beauty: 5,
        muted: !1,
        debug: !1,
        frontCamera: !0,
        assistant: {},
        startTime: null,
        endTime: null,
        flagStatus: 1,
        selToID: null,
        dynatownId: null,
        hideBg: !1,
        flag: !1,
        status: "正在呼叫对方",
        color1: s.color1,
        color2: s.color2,
        backColor: s.backColor,
        hzdlFlag: !1,
        ysglFlag: !1,
        hqcsFlag: !1,
        wlkdFlag: !1,
        fwbjFlag: !1,
        bmsyFlag: !1,
        qtyyFlag: !1,
        goodIndex: "",
        evaluateFlag: "",
        TextArea: "",
        selectTags: [],
        aliveFlag: !1
    },
    handlehzdl: function(t) {
        this.setData({
            hzdlFlag: !this.data.hzdlFlag
        });
        this.data.selectTags.includes("画质低劣") ? (this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "画质低劣" === t;
        }), 1), console.log(this.data.selectTags.join(","))) : (this.data.selectTags.push("画质低劣"), 
        console.log(this.data.selectTags.join(",")));
    },
    handleysgl: function(t) {
        this.setData({
            ysglFlag: !this.data.ysglFlag
        });
        this.data.selectTags.includes("隐私顾虑") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "隐私顾虑" === t;
        }), 1) : this.data.selectTags.push("隐私顾虑");
    },
    handlehqcs: function(t) {
        this.setData({
            hqcsFlag: !this.data.hqcsFlag
        });
        this.data.selectTags.includes("好奇尝试") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "好奇尝试" === t;
        }), 1) : this.data.selectTags.push("好奇尝试");
    },
    handlewlkd: function(t) {
        this.setData({
            wlkdFlag: !this.data.wlkdFlag
        });
        this.data.selectTags.includes("网络卡顿") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "网络卡顿" === t;
        }), 1) : this.data.selectTags.push("网络卡顿");
    },
    handlefwbj: function(t) {
        this.setData({
            fwbjFlag: !this.data.fwbjFlag
        });
        this.data.selectTags.includes("服务不佳") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "服务不佳" === t;
        }), 1) : this.data.selectTags.push("服务不佳");
    },
    handlebmsy: function(t) {
        this.setData({
            bmsyFlag: !this.data.bmsyFlag
        });
        this.data.selectTags.includes("不明所以") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "不明所以" === t;
        }), 1) : this.data.selectTags.push("不明所以");
    },
    handleqtyy: function(t) {
        this.setData({
            qtyyFlag: !this.data.qtyyFlag
        });
        this.data.selectTags.includes("其他原因") ? this.data.selectTags.splice(this.data.selectTags.findIndex(function(t) {
            return "其他原因" === t;
        }), 1) : this.data.selectTags.push("其他原因");
    },
    handleIndex: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            goodIndex: a
        });
    },
    onRoomEvent: function(t) {
        var a = this;
        switch (console.log("收到消息:", t), t.detail.tag) {
          case "recvTextMsg":
            var e = JSON.parse(t.detail.detail);
            if (console.log("收到消息recvTextMsg:", t.detail.detail, e.textMsg), e.textMsg.indexOf(a.data.selToID + "离开房间") > 0 && (wx.showToast({
                title: "对方已挂断",
                icon: "none",
                duration: 1500
            }), a.setData({
                flagStatus: 3,
                hideBg: !1,
                endTime: Date.now()
            }), a.videoInsert(30, 10), o.globalData.dataJson += JSON.stringify({
                getMessage: a.data.selToID,
                text: "对方已挂断"
            }), a.exit()), e.textMsg.indexOf(a.data.selToID + "进入房间") > 0 && (o.globalData.dataJson += JSON.stringify({
                getMessage: a.data.selToID,
                text: "对方接收到视频请求并进入房间"
            }), console.log("***对方接收到视频请求并进入房间***", a.data.hideBg)), e.textMsg.indexOf("108") > 0) try {
                s = JSON.parse(e.textMsg);
                console.log("==========", s), "108" !== s.type && 108 !== s.type || (a.setData({
                    hideBg: !0
                }), o.globalData.dataJson += JSON.stringify({
                    getMessage: e.textMsg,
                    text: "对方接通视频"
                }), console.log("***对方接通视频***", a.data.hideBg));
            } catch (t) {}
            if (e.textMsg.indexOf("109") > 0) try {
                var s = JSON.parse(e.textMsg);
                console.log("==========", s), "109" !== s.type && 109 !== s.type || (a.setData({
                    hideBg: !1
                }), console.log("***对方隐藏视频***", a.data.hideBg));
            } catch (t) {}
            break;

          case "roomClosed":
            console.log("roomClose:", t.detail.detail), this.setData({
                flagStatus: 4,
                endTime: Date.now()
            });
            n = getCurrentPages();
            console.log(n, n.length, n[n.length - 1].__route__), n.length > 1 && "pages/multiroom/room/room" == n[n.length - 1].__route__ && (wx.showToast({
                title: "对方已挂断",
                icon: "none",
                duration: 1500
            }), n = getCurrentPages(), console.log(n, n.length, n[n.length - 1].__route__), 
            n.length > 1 && "pages/multiroom/room/room" == n[n.length - 1].__route__ && a.exit());
            break;

          case "error":
            console.error("error:", t.detail.detail), console.log("error:", t.detail.detail), 
            o.globalData.dataJson += JSON.stringify(t), this.setData({
                flagStatus: 5,
                endTime: Date.now()
            }), this.videoInsert(99, 40);
            var n = getCurrentPages();
            console.log(n, n.length, n[n.length - 1].__route__), n.length > 1 && "pages/multiroom/room/room" == n[n.length - 1].__route__ && wx.showModal({
                title: "提示",
                content: t.detail.detail,
                showCancel: !1,
                complete: function() {
                    (n = getCurrentPages()).length > 1 && "pages/multiroom/room/room" == n[n.length - 1].__route__ && a.exit();
                }
            });
        }
    },
    exit: function() {
        var a = this;
        if (!0 === a.data.aliveFlag) return !1;
        a.data.aliveFlag = !0;
        var s = 0, n = 0, l = a.data.startTime || "", i = "", d = "";
        if (i = a.data.endTime = a.data.endTime ? a.data.endTime : Date.now(), console.log("&&&&&exit-self.data.flagStatus&&&&&", a.data.flagStatus, a.data.startTime, a.data.endTime), 
        a.data.endTime && a.data.startTime) {
            var g = Math.floor((a.data.endTime - a.data.startTime) / 1e3);
            d = 1e3 * g, n = Math.floor(g / 60), s = g % 60, t = (n > 9 ? n : "0" + n) + ":" + (s > 9 ? s : "0" + s), 
            console.log("***exit***", n, s, t);
        }
        var r = {
            talkStartTime: l,
            talkEndTime: i,
            talkLongTime: d
        };
        if (1 == this.data.flagStatus || n < 1) {
            this.setData({
                evaluateFlag: "0"
            });
            var c = {
                ip: o.globalData.ip,
                type: "PV",
                adviserId: o.globalData.videoCustomer.id,
                imTalkType: "2",
                pvId: "P_2cMINA_7",
                pvCurPageName: "fankuiyemian",
                pvCurPageParams: JSON.stringify(r),
                pvLastPageName: "",
                pvLastPageParams: "",
                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
            };
            console.log(c, "视频通话反馈埋点pv"), e.trackRequest(c, o);
        } else {
            this.setData({
                evaluateFlag: "1"
            });
            var u = {
                ip: o.globalData.ip,
                type: "PV",
                adviserId: o.globalData.videoCustomer.id,
                imTalkType: "2",
                pvId: "P_2cMINA_8",
                pvCurPageName: "pingjiayemian",
                pvCurPageParams: JSON.stringify(r),
                pvLastPageName: "",
                pvLastPageParams: "",
                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
            };
            console.log(u, "视频通话评价埋点pv"), e.trackRequest(u, o);
        }
        console.log("*******evaluateFlag******", this.data.evaluateFlag, a.data.endTime, a.data.startTime);
    },
    realExit: function() {
        var a = this;
        a.data.flag ? a.data.endTime && a.data.startTime ? wx.redirectTo({
            url: "../../chat/chat?videoStatus=1&videoTime=" + t
        }) : wx.redirectTo({
            url: "../../chat/chat?videoStatus=2"
        }) : wx.navigateBack({
            delta: 1
        }), console.log("***真实退出该页面组件***", a.data.flag, a.data.endTime, a.data.startTime);
    },
    sendText: function() {
        var t = this.selectComponent("#rtcroom");
        if (t) {
            var a = {
                flag: "3",
                myselToID: "2758_83"
            };
            t.sendTextMsg("asdjgklasjdgklasdgk", a);
        }
    },
    onliveplay: function() {
        if (!this.data.startTime) {
            console.log("***onliveplay***", this.data.startTime), this.setData({
                flagStatus: 2,
                startTime: Date.now()
            });
            var t = {
                ip: o.globalData.ip,
                type: "PV",
                adviserId: o.globalData.videoCustomer.id,
                imTalkType: "2",
                pvId: "P_2cMINA_6",
                pvCurPageName: "ekanfangjietongye",
                pvCurPageParams: "",
                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
                pvLastPageParams: "",
                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
            };
            console.log(t, "视频通话埋点pv"), e.trackRequest(t, o);
        }
    },
    trigVideo: function() {
        this.videoInsert(1, 1);
    },
    decline: function() {
        var s = this, n = 0, l = 0;
        console.log("***room.js-decline***", s.data.flag, s.data.flagStatus);
        var i = this.selectComponent("#rtcroom"), d = a.getRoomInfo();
        if (console.log("***roomInfo***", d.isPush), !d.isPush) return !1;
        s.videoInsert(30, 10);
        var g = "fankuiyemian", r = "";
        if (2 == s.data.flagStatus && (r = "ekanfangjietongye"), s.data.endTime = s.data.endTime ? s.data.endTime : Date.now(), 
        s.setData({
            hideBg: !1
        }), s.data.endTime && s.data.startTime) {
            var c = Math.floor((s.data.endTime - s.data.startTime) / 1e3);
            l = Math.floor(c / 60), n = c % 60, t = (l > 9 ? l : "0" + l) + ":" + (n > 9 ? n : "0" + n), 
            console.log("***decline-exit***", l, n, t), l >= 1 && (g = "pingjiayemian");
        }
        var u = {
            clkId: "clk_2cmina_28",
            clkDesPage: g,
            type: "CLK",
            adviserId: o.globalData.videoCustomer.id,
            imTalkType: "2",
            pvCurPageName: r,
            clkName: "bodaguaduan",
            pvCurPageParams: ""
        };
        console.log(u, "视频通话挂断点击埋点pv"), e.trackRequest(u, o), s.videoInsert(30, 10), s.exit(), 
        console.log("***rtcroomCom.exitRoom()***"), i.exitRoom();
    },
    bindTextAreaBlur: function(t) {
        console.log("**bindTextAreaBlur***", t.detail.value), this.setData({
            TextArea: t.detail.value
        });
    },
    videoInsert: function(t, a) {
        var n = this, l = o.globalData.single.id, i = s.houseId;
        console.log("***videoInsert***", l, i, t, a, e.newUrl() + "elab-marketing-system/imlog/insert"), 
        wx.request({
            url: e.newUrl() + "elab-marketing-system/imlog/insert",
            method: "POST",
            data: {
                userId: l,
                dataJson: o.globalData.dataJson,
                pullLog: o.globalData.pullLog,
                pushLog: o.globalData.pushLog,
                mobile: o.globalData.phone,
                reqStatus: a,
                reqType: t,
                system: 3,
                roomNo: n.data.roomID,
                roleType: 0,
                created: Date.now(),
                creator: l + "_" + i
            },
            success: function(t) {
                console.log("&&&success-videoInsert***", t);
            },
            fail: function(t) {
                console.log("&&&fail-videoInsert***", t);
            },
            complete: function(t) {
                o.globalData.dataJso = o.globalData.pullLog = o.globalData.pushLog = "";
            }
        });
    },
    submitEvaluate: function() {
        var t = this, a = o.globalData.single.id, n = s.houseId;
        console.log("***submitEvaluate***", a, n), wx.request({
            url: e.newUrl() + "elab-marketing-authentication/feedback/insertFeedback",
            method: "POST",
            data: {
                userId: a,
                houseId: n,
                mobile: o.globalData.phone,
                remark: t.data.TextArea,
                tags: t.data.selectTags.join(",")
            },
            success: function(a) {
                console.log("&&&success-submitEvaluate***", a), t.realExit();
            },
            fail: function(a) {
                console.log("&&&fail-submitEvaluate***", a), t.realExit();
            }
        });
    },
    submitEvaluate2: function() {
        var t = this, a = o.globalData.single.id, n = s.houseId, l = "1" == this.data.goodIndex ? "10" : "2" == this.data.goodIndex ? "5" : "0";
        console.log("***submitEvaluate***", a, n, l), wx.request({
            url: e.newUrl() + "elab-marketing-authentication/evalute/adviser/insert",
            method: "POST",
            data: {
                evaluateCustomerId: a,
                adviserId: this.data.dynatownId,
                houseId: n,
                evaluateMobile: o.globalData.phone,
                remark: t.data.TextArea,
                totalEvaluate: l
            },
            success: function(a) {
                console.log("&&&success-submitEvaluate***", a), t.realExit();
            },
            fail: function(a) {
                console.log("&&&fail-submitEvaluate***", a), t.realExit();
            }
        });
    },
    changeCamera: function() {},
    setBeauty: function() {
        var t = this.selectComponent("#rtcroom");
        if (t) {
            a.getAccountInfo();
            var e = {
                type: 106,
                time: Date.now(),
                param: {
                    text: "123456zjs"
                }
            }, o = {
                flag: "0"
            };
            t.sendTextMsg(JSON.stringify(e), o), a.getRoomList({
                data: {
                    index: 0,
                    cnt: 20
                },
                success: function(t) {
                    console.log(t), console.log("拉取房间列表成功", t);
                },
                fail: function(t) {
                    console.log(t), wx.showModal({
                        title: "提示",
                        content: t.errMsg,
                        showCancel: !1
                    });
                }
            });
        }
    },
    changeMute: function() {
        this.data.muted = !this.data.muted, this.setData({
            muted: this.data.muted
        });
    },
    showLog: function() {
        this.data.debug = !this.data.debug, this.setData({
            debug: this.data.debug
        });
    },
    updateDynatown: function(t) {
        var a = this.data.dynatownId, o = s.houseId;
        console.log("***updateDynatown***", t, a, o, e.url()), wx.request({
            url: e.newUrl() + "elab-marketing-authentication/worker/adviser/switchStatus",
            method: "POST",
            data: {
                adviserId: a,
                houseId: o,
                userRole: 2,
                onlineStatus: t
            },
            success: function(t) {
                console.log("***updateDynatown_res***", t);
            },
            fail: function(t) {}
        });
    },
    onLoad: function(t) {
        n = JSON.stringify(t), console.log("********------", t), t && t.isSuc ? this.setData({
            flag: !0
        }) : this.setData({
            flag: !1
        });
        var a = this;
        wx.getSetting({
            success: function(e) {
                console.log("=======rtcroomCom.onLoad***getSetting", e), e.authSetting["scope.record"] && e.authSetting["scope.camera"] ? a.init(t) : wx.openSetting({
                    success: function(e) {
                        e.authSetting["scope.record"] && e.authSetting["scope.camera"] ? a.init(t) : (console.log("******openSetting——success-other&&&&&&&", e), 
                        a.data.flag ? wx.redirectTo({
                            url: "../../chat/chat"
                        }) : wx.navigateBack({
                            delta: 1
                        }));
                    },
                    fail: function(t) {
                        console.log("******openSetting错误&&&&&&&", t), wx.showModal({
                            title: "提示",
                            content: "操作太快,请稍后再试",
                            success: function(t) {
                                t.confirm ? a.data.flag ? wx.redirectTo({
                                    url: "../../chat/chat"
                                }) : wx.navigateBack({
                                    delta: 1
                                }) : t.cancel && (a.data.flag ? wx.redirectTo({
                                    url: "../../chat/chat"
                                }) : wx.navigateBack({
                                    delta: 1
                                }));
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
    callConsultant: function(t) {},
    init: function(t) {
        var e = this;
        console.log("room.js onLoad");
        var o = new Date();
        o = o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds(), console.log("*************开始视频看房：" + o + "**************"), 
        console.log(t), e.data.aliveFlag = !1, e.data.role = t.type, e.data.roomID = t.roomID || "", 
        e.data.roomname = t.roomName, e.data.username = t.userName, e.setData({
            roomID: e.data.roomID,
            roomname: e.data.roomname,
            username: e.data.username
        }, function() {
            var t = e.selectComponent("#rtcroom");
            if (t) {
                console.log("rtcroomCom");
                var o = a.getAccountInfo();
                console.log("accountInfo.opt:", o.opt), e.setData({
                    assistant: o.opt || {},
                    dynatownId: o.opt ? o.opt.id : "",
                    selToID: o.selToID || ""
                }), t.start(function(t) {
                    e.setData({
                        roomID: t
                    }), e.updateDynatown("1"), e.videoInsert(10, 10);
                });
            }
        });
    },
    chuli: function() {},
    onReady: function() {},
    onShow: function() {
        wx.setStorageSync("loadTime", new Date().getTime());
        console.log("room.js onShow"), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    onHide: function() {
        console.log("room.js onHide");
    },
    onUnload: function() {
        console.log("***onUnload***room.js onUnload", this.data.flagStatus), 1 == this.data.flagStatus && console.log("=====this.data.flagStatus======", this.data.flagStatus);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});