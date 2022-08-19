var e = require("../../../utils/liveroom.js"), t = (require("../../../config.js"), 
null), o = [ {
    name: "静音"
}, {
    name: "美颜"
}, {
    name: "相机"
}, {
    name: "连麦"
} ];

Component({
    properties: {
        role: {
            type: String,
            value: "audience"
        },
        roomid: {
            type: String,
            value: "",
            observer: function(e, t) {
                this.data.roomID = e;
            }
        },
        roomname: {
            type: String,
            value: "undefined"
        },
        debug: {
            type: Boolean,
            value: !1
        },
        template: {
            type: String,
            value: "1v3"
        },
        beauty: {
            type: Number,
            value: 5
        },
        muted: {
            type: Boolean,
            value: !1
        },
        pureaudio: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isCaster: !0,
        menuItems: [],
        userName: "",
        userID: "",
        roomID: "",
        pusherContext: null,
        playerContext: null,
        linkedPlayerContext: null,
        unload: 1,
        isInRoom: 0,
        unfold: !1,
        mainPusherInfo: {
            url: "",
            aspect: "3:4",
            minBitrate: 0,
            maxBitrate: 0,
            puserID: ""
        },
        audience: {
            url: null,
            mixUrl: null,
            accelerateUrl: null,
            pusherName: "",
            pusherID: "",
            isLinked: !1,
            aspect: "3:4",
            loading: !1,
            objectFit: !1
        },
        linkPusherInfo: {
            url: "",
            loading: !0,
            debug: !0
        },
        members: [],
        visualPlayers: [],
        requestLinking: !1,
        mode: "SD"
    },
    methods: {
        toggleDebug: function() {
            var e = this;
            e.setData({
                debug: !e.data.debug
            }, function() {
                console.log(">> Debug: ", e.data.debug);
            });
        },
        toggleBeauty: function() {
            var e = this, t = 5 == e.data.beauty ? 0 : 5;
            e.setData({
                beauty: t
            }, function() {
                console.log(t > 0 ? "开启美颜" : "关闭美颜");
            });
        },
        toggleMuted: function() {
            var e = this;
            e.setData({
                muted: !e.data.muted
            }, function() {
                console.log(e.data.muted ? "静音" : "非静音");
            });
        },
        clipPusherIDs: function() {
            var e = this, t = "", o = "", n = "";
            e.data.mainPusherInfo.url && (o = substring(aa.lastIndexOf("/") + 1, aa.indexOf("?"))), 
            e.data.linkPusherInfo.url && (n = substring(aa.lastIndexOf("/") + 1, aa.indexOf("?"))), 
            t = "MAIN: " + o + "; LINK: " + n, wx.setClipboardData({
                data: t,
                success: function(e) {
                    wx.showToast({
                        title: "复制成功",
                        duration: 500,
                        mask: !0
                    });
                }
            });
        },
        unfoldCtrlMenu: function() {
            var e = this, t = e.data.menuItems;
            t = t.length > 0 ? [] : o, e.setData({
                menuItems: t,
                unfold: !e.data.unfold
            }, function() {
                wx.showToast({
                    title: t.length > 0 ? "unfold" : "close",
                    duration: 500,
                    mask: !0
                });
            });
        },
        selectMenu: function(e) {
            var t = this, o = e.currentTarget.dataset.index;
            wx.showToast({
                title: "选中 " + o + ": " + t.data.menuItems[o],
                duration: 500,
                mask: !0
            });
        },
        sendTextMsg: function(t) {
            var o = this;
            if (t.startsWith(">")) switch (t) {
              case ">debug":
                return void o.toggleDebug();
            }
            e.sendRoomTextMsg({
                data: {
                    msg: t
                },
                success: function() {},
                fail: function(e) {
                    console.log("发送消息失败: ", e), o.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -9005,
                        detail: "发送消息失败"
                    });
                }
            });
        },
        switchCamera: function() {
            var e = this;
            console.log("切换摄像头: ", e.data.pusherContext), e.data.pusherContext && e.data.pusherContext.switchCamera({});
        },
        respondJoinReq: function(t, o) {
            console.info("respondJoinReq(agree:" + t + ", audience:" + o + ") called");
            t ? e.acceptJoinPusher({
                data: o
            }) : e.rejectJoinPusher({
                data: o
            });
        },
        setupLiveRoomListener: function() {
            var t = this;
            e.setListener({
                onRoomClose: t.onRoomClose,
                onRecvRoomTextMsg: t.onRecvRoomTextMsg,
                onSketchpadData: t.onSketchpadData,
                onKickOut: t.onKickOut,
                onRecvJoinPusherRequest: t.onRecvJoinPusherRequest,
                onPusherQuit: t.onPusherQuit,
                onPusherJoin: t.onPusherJoin,
                onPushersChange: t.onPushersChange
            });
        },
        start: function() {
            console.info("start() called");
            var t = this;
            0 == t.data.isCaster ? t.enter() : e.getPushURL({
                success: function(e) {
                    console.log("getPushURL 成功，", e), t.data.mainPusherInfo.url = e.pushURL, console.log("设置推流模式为:SD"), 
                    t.setData({
                        mainPusherInfo: t.data.mainPusherInfo,
                        mode: "SD"
                    }, function() {
                        t.setupLiveRoomListener(), t.data.pusherContext = wx.createLivePusherContext("pusher"), 
                        console.log("创建 pusherContext：", t.data.pusherContext), t.data.pusherContext.start();
                    });
                },
                fail: function(e) {
                    console.log("获取推流地址失败: ", e), t.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -9002,
                        detail: "获取推流地址失败"
                    });
                }
            });
        },
        stop: function() {
            console.log("stop() called");
            var t = this;
            console.log("stop pusherContext：", t.data.pusherContext, t.data.playerContext), 
            t.data.pusherContext && t.data.pusherContext.stop(), t.data.playerContext && t.data.playerContext.stop();
            var o = t.data.members;
            o && o.forEach(function(e) {
                e.context && e.context.stop();
            }), t.setData({
                unload: 1,
                members: [ {} ],
                visualPlayer: [],
                pusherContext: null,
                playerContext: null,
                linkedPlayerContext: null
            }), t.exit(), e.setListener({});
        },
        pause: function() {
            console.log("pause() called");
            var e = this;
            e.data.pusherContext && e.data.pusherContext.pause(), e.data.playerContext && e.data.playerContext.pause();
        },
        resume: function() {
            console.log("resume() called");
            var e = this;
            e.data.pusherContext && e.data.pusherContext.resume(), e.data.playerContext && e.data.playerContext.resume();
        },
        onPusherJoin: function(e) {
            console.log("==> onPusherJion() called: ", e);
            var o = t, n = o.data.members.filter(function(e) {
                return e.userID;
            }), a = e.pushers, r = a.map(function(e) {
                return e.userID;
            }).indexOf(o.data.userID);
            switch (-1 != r && a.splice(r, 1), -1 != (r = a.map(function(e) {
                return e.userID;
            }).indexOf(o.data.audience.pusherID)) && a.splice(r, 1), console.log("%c===> " + a.length + " 人加入Link", "color: red"), 
            a = a.map(function(e) {
                return {
                    userID: e.userID,
                    userName: e.userName,
                    accelerateURL: e.accelerateURL,
                    context: null
                };
            }), n = n.concat(a), o.data.template) {
              case "1v1":
                n.length > 1 ? n.splice(1, n.length - 1) : n.length < 1 && n.push({});
                break;

              case "vertical1v3":
              case "1v3":
                if (n.length > 3) n.splice(3, n.length - 3); else for (var s = 3 - n.length - (!o.data.isCaster && o.data.linkPusherInfo.url ? 1 : 0), l = 0; l < s; l++) n.push({});
            }
            console.log("设置推流模式为:RTC"), o.setData({
                members: n,
                mode: "RTC"
            }, function() {
                n.forEach(function(e) {
                    e.context || e.userID && (e.context = wx.createLivePlayerContext(e.userID, o));
                }), console.log("data.members: ", o.data.members);
            });
        },
        onPusherQuit: function(e) {
            console.log("===> onPusherQuit() called: ", e);
            var o = t, n = e.pushers, a = o.data.members, r = !0, s = !1, l = void 0;
            try {
                for (var i, u = n[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                    var c = i.value;
                    for (var d in a) if (c.userID == a[d].userID) {
                        a[d].context && a[d].context.stop(), a.splice(d, 1), a.push({});
                        break;
                    }
                }
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                s = !0, l = e;
            } finally {
                try {
                    !r && u.return && u.return();
                } finally {
                    if (s) throw l;
                }
            }
            for (var h = "SD", d = 0; d < a.length; ++d) a[d].userID && (h = "RTC");
            console.log("设置推流模式为:", h), o.setData({
                members: a,
                mode: h
            }, function() {
                console.log("members after onPusherQuit: ", o.data.members);
            });
        },
        onRecvJoinPusherRequest: function(e) {
            var o = t;
            console.log("onRecvJoinPusherRequest() called, pusher = ", JSON.stringify(e)), o.triggerEvent("RoomEvent", {
                tag: "joinPusher",
                code: 0,
                detail: e
            });
        },
        onKickOut: function() {
            console.log("onKickOut() called");
        },
        enter: function() {
            var t = this;
            console.log("enter room width roomid: ", t.data.roomID), e.setListener({
                onRoomClose: t.onRoomClose,
                onRecvRoomTextMsg: t.onRecvRoomTextMsg,
                onSketchpadData: t.onSketchpadData,
                onPusherQuit: t.onLinkPusherQuit,
                onPusherJoin: t.onPusherJoin,
                onKickOut: t.onLinkKickOut,
                onPushersChange: t.onPushersChange
            }), e.enterRoom({
                data: {
                    roomID: t.data.roomID
                },
                success: function(o) {
                    console.info("enterRoom 成功: ", o), t.data.audience.url = o.mixedPlayURL, t.data.audience.mixUrl = o.mixedPlayURL, 
                    t.data.mainPusherInfo.puserID = o.roomCreator, o.pushers && o.pushers.length > 0 ? (t.data.audience.pusherName = o.pushers[0].userName, 
                    t.data.audience.pusherID = o.pushers[0].userID, t.data.audience.accelerateUrl = o.pushers[0].accelerateURL) : console.error("缺少加速流"), 
                    e.sendC2CCustomMsg({
                        cmd: "sketchpad",
                        msg: '{"type":"request", "action":"currentPPT"}'
                    }), t.playMixedUrl().then(function() {
                        console.log("playMixedUrl done");
                    }).catch(function(e) {
                        console.log("playMixedUrl Error: ", e);
                    });
                },
                fail: function(e) {
                    console.error("enterRoom 失败: ", e), t.data.unload || (t.data.playerContex && t.data.playerContext.stop(), 
                    t.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -9003,
                        detail: "enterRoom 失败"
                    }));
                }
            });
        },
        create: function() {
            console.log("create() called");
            var t = this;
            e.createRoom({
                data: {
                    roomInfo: t.data.roomname,
                    pushURL: t.data.mainPusherInfo.url
                },
                success: function(e) {
                    console.log("创建房间成功, ret = ", e), t.setData({
                        roomID: e.roomID
                    }), t.triggerEvent("RoomEvent", {
                        tag: "created",
                        code: 0,
                        detail: "创建房间成功"
                    });
                },
                fail: function(e) {
                    console.error("创建房间失败", e), t.data.unload || t.data.pusherContext.stop(), t.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -9001,
                        detail: "创建房间失败"
                    });
                }
            });
        },
        exit: function() {
            console.log("exit() called"), e.exitRoom({});
        },
        onPlay: function(e) {
            var t = this;
            switch (console.error("拉流情况：", e.detail.code), e.detail.code) {
              case -2301:
                console.error("多次拉流失败"), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: e.detail.code,
                    detail: "多次拉流失败"
                });
            }
        },
        linkJionPusher: function() {
            console.log("linkJionPusher() called");
            var t = this;
            e.joinPusher({
                data: {
                    pushURL: t.data.linkPusherInfo.url,
                    roomID: t.data.roomID
                },
                success: function() {
                    console.log("连麦成功完成"), t.triggerEvent("RoomEvent", {
                        tag: "LinkOn",
                        code: 0,
                        detail: "连麦成功完成"
                    });
                },
                fail: function(e) {
                    console.error("连麦失败: ", e), t.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: 0,
                        detail: "连麦失败"
                    });
                }
            });
        },
        playMixedUrl: function() {
            console.log("==> playMixedUrl");
            var e = t, o = [ {
                debug: !1,
                mute: !1,
                url: e.data.audience.mixUrl,
                mode: "live",
                maxCache: 3,
                minCache: 1,
                loading: !1,
                objectFit: "contain",
                userName: e.data.audience.pusherName
            } ];
            return new Promise(function(t) {
                e.setData({
                    visualPlayers: o
                }, function() {
                    t();
                });
            });
        },
        playAccelerateUrl: function() {
            console.info("playAccelerateUrl() called");
            var e = t, o = [ {
                debug: !1,
                mute: !1,
                url: e.data.audience.accelerateUrl,
                mode: "RTC",
                maxCache: .3,
                minCache: .1,
                loading: !1,
                objectFit: "fillCrop",
                userName: e.data.audience.pusherName
            } ];
            return new Promise(function(t) {
                e.setData({
                    visualPlayers: o
                }, function() {
                    t();
                });
            });
        },
        stopPlayUrl: function() {
            var e = t;
            return new Promise(function(t) {
                e.setData({
                    visualPlayers: []
                }, function() {
                    t();
                });
            });
        },
        getPushUrl: function() {
            console.info("getPushUrl() called");
            return new Promise(function(t, o) {
                e.getPushURL({
                    success: function(e) {
                        console.log("getPushURL() 成功，", e), t(e.pushURL);
                    },
                    fail: function(e) {
                        console.log("getPushUrl() 获取推流地址失败: ", e), o(e);
                    }
                });
            });
        },
        startLinkPush: function(e) {
            console.info("startLinkPush() called");
            var o = t;
            return new Promise(function(t, n) {
                o.data.linkPusherInfo.url = e, o.data.members.splice(0, 1), console.log("设置推流模式为:RTC"), 
                o.setData({
                    members: o.data.members,
                    linkPusherInfo: o.data.linkPusherInfo,
                    mode: "RTC"
                }, function() {
                    o.data.pusherContext = wx.createLivePusherContext("audience_pusher"), console.log("startLinkPush.创建 pusherContext：", o.data.pusherContext), 
                    o.data.pusherContext.start(), t();
                });
            });
        },
        link: function() {
            var e = this;
            Promise.resolve().then(e.stopPlayer).then(e.playAccelerateUrl).then(e.getPushUrl).then(e.startLinkPush).then(function() {
                return new Promise(function(t, o) {
                    console.log("----\x3e link() self.data: ", e.data), t();
                });
            }).catch(function(t) {
                console.log("过程出错： 停止mix流播放 --\x3e 播放 accelerate流 --\x3e 获取推流连接开始推流 --\x3e onLinkPush 成功后 jionPusher: ", t), 
                e.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1,
                    detail: "连麦过程发生错误"
                });
            });
        },
        requestJionPusher: function() {
            console.log("requestJionPusher() called");
            var o = t;
            o.data.requestLinking ? wx.showToast({
                title: "等待大主播接受连麦",
                duration: 1e3
            }) : (console.info("用户请求连麦"), o.data.requestLinking = !0, e.requestJoinPusher({
                data: {
                    timeout: 5e3
                },
                success: function(e) {
                    o.data.requestLinking = !1, console.log("请求连麦成功: ", e), o.link();
                },
                fail: function(e) {
                    console.log("请求连麦失败: ", e), o.data.requestLinking = !1, o.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -9004,
                        detail: "请求连麦失败"
                    });
                }
            }));
        },
        onLinkError: function(e) {
            console.error("onLinkError() called: ", e), self.triggerEvent("RoomEvent", {
                tag: "error",
                code: -2,
                detail: "播放错误"
            });
        },
        kickoutSubPusher: function(o) {
            console.log("kickoutSubPusher() called");
            var n = t;
            console.log("==> kickoutSubPusher: ", o);
            var a = o.currentTarget.dataset.userid;
            e.kickoutSubPusher({
                data: {
                    userID: a
                },
                success: function(e) {
                    console.log("--\x3e 踢人成功： ", e);
                    var t = n.data.members, o = t.map(function(e) {
                        return e.userID;
                    }).indexOf(a);
                    -1 != o && (t.splice(o, 1), t.push({})), n.setData({
                        members: t
                    }), console.log("data.members: ", n.data.members);
                },
                fail: function(e) {
                    console.log("---\x3e 踢人失败： ", e);
                }
            });
        },
        quitLink: function() {
            console.log("quitLink() called");
            var t = this;
            e.quitPusher({
                success: function(e) {
                    console.log("quitPusher 成功：", e), t.resetToAudience();
                },
                fail: function(e) {
                    console.error("quitPusher Error: ", e), t.triggerEvent("RoomEvent", {
                        tag: "error",
                        code: -1,
                        detail: '退出连麦"quitPusher"返回错误'
                    });
                }
            });
        },
        resetToAudience: function() {
            console.log("resetToAudience() called");
            var e = t;
            Promise.resolve().then(function() {
                return console.log("停止推流"), new Promise(function(t) {
                    console.log("停止推流"), e.data.pusherContext && e.data.pusherContext.stop(), e.data.linkPusherInfo.url = null, 
                    e.setData({
                        pusherContext: null,
                        linkPusherInfo: e.data.linkPusherInfo
                    }, function() {
                        return t();
                    });
                });
            }).then(function() {
                return console.log("清理 member players"), new Promise(function(t) {
                    var o = e.data.members;
                    o && o.forEach(function(e) {
                        e.context && e.context.stop();
                    }), o = "1v1" == e.data.template ? [ {} ] : [ {}, {}, {} ], e.setData({
                        members: o
                    }, function() {
                        return t();
                    });
                });
            }).then(e.stopPlayUrl).then(e.playMixedUrl).then(function() {
                return new Promise(function(t) {
                    e.triggerEvent("RoomEvent", {
                        tag: "LinkOut",
                        code: 0,
                        detail: "连麦断开"
                    }), t();
                });
            }).catch(function(e) {
                console.error("resetToAudience 流程出现错误：", e);
            });
        },
        onLinkPusherQuit: function(e) {
            console.log("onLinkPusherQuit() called ", e);
            var o = t, n = e.pushers;
            n && (-1 != n.map(function(e) {
                return e.userID;
            }).indexOf(o.data.userID) ? o.resetToAudience() : o.onPusherQuit(e));
        },
        onLinkKickOut: function(e) {
            console.log("onLinkKickOut() called");
            var o = t;
            console.log("%c onLinkKickOut: ", "color: red;", e), o.quitLink();
        },
        onPushEvent: function(e) {
            var t = this;
            switch (e) {
              case -1301:
                console.log("打开摄像头失败: ", e), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1301,
                    detail: "打开摄像头失败"
                });
                break;

              case -1302:
                console.log("打开麦克风失败: ", e), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1302,
                    detail: "打开麦克风失败"
                });
                break;

              case -1307:
                console.error("推流连接断开: ", e), t.exit(), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1307,
                    detail: "推流连接断开"
                });
                break;

              case -1305:
                console.log("不支持的视频分辨率"), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1305,
                    detail: "不支持的视频分辨率"
                });
                break;

              case -1306:
                console.log("不支持的音频采样率"), t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: -1306,
                    detail: "不支持的音频采样率"
                });
                break;

              default:
                console.log("推流事件：", e);
            }
        },
        onLinkPush: function(e) {
            var t = this;
            switch (console.log("onLinkPush推流情况：", e.detail.code), e.detail.code) {
              case 1002:
                console.log("onLinkPush推流成功：", e.detail.code), t.linkJionPusher();
                break;

              case 5e3:
                console.log("收到5000: ", e.detail.code), t.exit(), t.data.exit = 5e3, t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: 5e3,
                    detail: "收到5000就退房"
                });
                break;

              default:
                t.onPushEvent(e.detail.code);
            }
        },
        onMainPush: function(e) {
            var t = this;
            switch (console.log(">> onMainPush() called: ", e), console.log("推流情况：", e.detail.code), 
            e.detail.code) {
              case 1005:
                console.log("推流动态分辨率改变： ", e);
                break;

              case 1002:
                console.log("推流成功：", e.detail.code), t.data.isInRoom || (t.setData({
                    isInRoom: 1
                }), t.create());
                break;

              case 5e3:
                console.log("收到5000: ", e.detail.code), t.exit(), t.data.exit = 5e3, t.triggerEvent("RoomEvent", {
                    tag: "error",
                    code: 5e3,
                    detail: "收到5000就退房"
                });
                break;

              default:
                t.onPushEvent(e.detail.code);
            }
        },
        onMainError: function(e) {
            var t = this;
            console.error("onMainError called: ", e), t.triggerEvent("RoomEvent", {
                tag: "error",
                code: -1,
                detail: e.detail && e.detail.errMsg || "推流错误"
            });
        },
        onMainPlayState: function(e) {
            console.log("===> onMainPlayState: ", e);
        },
        onMainPlayError: function(e) {
            console.log("===> onMainPlayError: ", e);
        },
        onRoomClose: function(e) {
            console.log("onRoomClose: e=", e), t && t.triggerEvent("RoomEvent", {
                tag: "roomClosed",
                code: -9006,
                detail: "房间已经解散了"
            });
        },
        onRecvRoomTextMsg: function(e) {
            var o = t;
            console.log("onRecvRoomTextMsg called, ret: ", e), o.triggerEvent("RoomEvent", {
                tag: "recvTextMsg",
                code: 0,
                detail: e
            });
        },
        onSketchpadData: function(e) {
            var o = t;
            console.log("onSketchpadData called, ret: ", e), o.triggerEvent("RoomEvent", {
                tag: "sketchpadData",
                code: 0,
                detail: e
            });
        },
        onPushersChange: function() {
            var o = t;
            o && o.data && !o.data.isCaster && e.getPushers({
                success: function(e) {
                    var t = e.data.pushers;
                    if (t && t.length > 1) console.log("处于连麦状态，改变播放缓冲区时长为1-3s"), o.data.visualPlayers && o.data.visualPlayers.length > 0 && ((n = o.data.visualPlayers[0]).maxCache = 3, 
                    o.setData({
                        visualPlayers: o.data.visualPlayers
                    })); else if (console.log("处于非连麦状态，改变播放缓冲区时长为1-5s"), o.data.visualPlayers && o.data.visualPlayers.length > 0) {
                        var n = o.data.visualPlayers[0];
                        n.maxCache = 5, o.setData({
                            visualPlayers: o.data.visualPlayers
                        });
                    }
                },
                fail: function(e) {}
            });
        }
    },
    attached: function() {
        console.log("ready() called"), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
        var o = this;
        t = this;
        var n = e.getAccountInfo(), a = n.userID, r = n.userName;
        o.data.isCaster = "presenter" == o.data.role, o.setData({
            isCaster: o.data.isCaster,
            userID: a,
            userName: r,
            unload: 0,
            members: "1v1" == o.data.template ? [ {} ] : [ {}, {}, {} ]
        }), console.log("data: ", o.data);
    },
    detached: function() {
        console.log("detached() called"), t = null, this.stop();
    }
});