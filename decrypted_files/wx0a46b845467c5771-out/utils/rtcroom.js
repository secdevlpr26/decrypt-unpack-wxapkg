function o(o) {
    if (!v) return console.log("请求服务器域名为空，请将wxlite/config里面的url配置成你的服务器域名"), void (o.fail && o.fail({
        errCode: -9,
        errMsg: "请求服务器域名为空，请将wxlite/config里面的url配置成你的服务器域名"
    }));
    b++;
    var r = v + o.url + (o.params ? "?" + e(o.params) + "&" : "?") + "userID=" + S.userID + (S.token ? "&token=" + S.token : "");
    console.log("请求url：", r), N[R++] = wx.request({
        url: v + o.url + (o.params ? "?" + e(o.params) + "&" : "?") + "userID=" + S.userID + (S.token ? "&token=" + S.token : ""),
        data: o.data || {},
        method: "POST",
        header: {
            "content-type": "application/json"
        },
        success: function(e) {
            if (o.success && o.success(e), e.data.code) {
                var s = -Math.abs(e.data.code);
                switch (o.url) {
                  case "get_push_url":
                    y.globalData.dataJson += JSON.stringify({
                        get_pushers: s,
                        url: r
                    }), M.setReportData({
                        int64_tc_get_pushers: s
                    });
                    break;

                  case "add_pusher":
                    y.globalData.dataJson += JSON.stringify({
                        add_pusher: s,
                        url: r
                    }), M.setReportData({
                        int64_tc_add_pusher: s
                    });
                }
                -1 == T.indexOf(o.url) && (console.error("逻辑失败上报：", o.url), M.report());
            }
        },
        fail: function(e) {
            o.fail && o.fail(e), -1 == T.indexOf(o.url) && (y.globalData.dataJson += JSON.stringify({
                "请求失败上报：url": r
            }), console.error("请求失败上报：", o.url), M.report());
        },
        complete: o.complete || function() {
            b--;
        }
    });
}

function e(o) {
    var e = [];
    for (var r in o) e.push(encodeURIComponent(r) + "=" + encodeURIComponent(o[r]));
    return e.join("&");
}

function r(o) {
    _.init({
        accountMode: S.accountMode,
        accountType: S.accountType,
        sdkAppID: S.sdkAppID,
        avChatRoomId: o.roomID || 0,
        selType: h.SESSION_TYPE.GROUP,
        selToID: S.selToID,
        selSess: null
    });
    var e = {
        sdkAppID: S.sdkAppID,
        appIDAt3rd: S.sdkAppID,
        accountType: S.accountType,
        identifier: S.userID,
        identifierNick: y.globalData.single.nickname || "小程序用户",
        userSig: S.userSig
    }, r = {
        5: function(o) {
            k.isDestory = !0, P.onRoomClose({});
        },
        11: _.onRevokeGroupNotify,
        255: function(o) {
            console.error("收到系统通知：", o.UserDefinedField);
            var e = JSON.parse(o.UserDefinedField);
            !k.isDestory && e && "notifyPusherChange" == e.cmd && i();
        }
    }, t = {
        onConnNotify: _.onConnNotify,
        onBigGroupMsgNotify: function(o) {
            _.onBigGroupMsgNotify(o, function(o) {
                a(o);
            });
        },
        onMsgNotify: _.onMsgNotify,
        onGroupSystemNotifys: r,
        onGroupInfoChangeNotify: _.onGroupInfoChangeNotify
    }, n = {
        isAccessFormalEnv: !0,
        isLogOn: !1
    };
    console.log("###loginIM rtcroom.js 321行### websdkappid=537048168 is web im sdk 版本 APPID", S), 
    S.accountMode, _.sdkLogin(e, t, n, s, o);
}

function s(o) {
    if (o.errCode) return console.log("IM登录失败:", o), o.callback.fail && o.callback.fail({
        errCode: -2,
        errMsg: "IM登录失败，如果你是在配置线上环境，请将IM域名[https://webim.tim.qq.com]配置到小程序request合法域名"
    }), M.setReportData({
        int64_tc_join_group: -2
    }), void M.report();
    console.log("IM登录成功", o), o.callback.success && o.callback.success({
        userName: S.userName
    });
}

function t(o) {
    if (o.errCode) {
        console.log("IM进群失败: ", o), o.callback.fail && o.callback.fail({
            errCode: -2,
            errMsg: "IM进群失败"
        });
        var e = -Math.abs(o.errCode);
        return M.setReportData({
            int64_tc_join_group: e
        }), void M.report();
    }
    console.log("进入IM房间成功: ", k.roomID), o.callback.success && o.callback.success({}), 
    M.setReportData({
        int64_tc_join_group: +new Date() - w.join_group_srart
    });
}

function a(o) {
    if (o.content) {
        if (console.log("IM消息: ", o), "@TIM#SYSTEM" == o.fromAccountNick) o.fromAccountNick = "", 
        o.content = o.content.split(";"), o.content = o.content[0], o.time = ""; else {
            var e = new Date(), r = e.getHours() + "", s = e.getMinutes() + "", t = e.getSeconds() + "";
            1 == r.length && (r = "0" + r), 1 == s.length && (s = "0" + s), 1 == t.length && (t = "0" + t), 
            e = r + ":" + s + ":" + t, o.time = e;
            var a, n;
            if (n = o.content.split("}}"), "CustomTextMsg" == (a = JSON.parse(n[0] + "}}")).cmd) {
                o.nickName = a.data.nickName, o.headPic = a.data.headPic;
                for (var i = "", u = 1; u < n.length; u++) u == n.length - 1 ? i += n[u] : i += n[u] + "}}";
                o.content = i;
            }
        }
        P.onRecvRoomTextMsg({
            roomID: k.roomID,
            userID: o.fromAccountNick,
            nickName: o.nickName,
            headPic: o.headPic,
            textMsg: o.content,
            time: o.time
        });
    }
}

function n(o) {
    if (!o) return console.log("sendRoomTextMsg参数错误", o), void (o.fail && o.fail({
        errCode: -9,
        errMsg: "sendRoomTextMsg参数错误"
    }));
    "1" == o.typedata.flag ? _.sendCustomMsg(o.data, o.typedata, "", function() {
        o.success && o.success();
    }) : "3" == o.typedata.flag ? _.onSendMsg(o.data.msg, o.typedata, function() {
        o.success && o.success();
    }) : _.sendCustomMsg({
        data: '{"cmd":"CustomTextMsg","data":{"nickName":"' + S.userName + '","headPic":"' + S.userAvatar + '"}}',
        text: o.data.msg
    }, function() {
        o.success && o.success();
    });
}

function i() {
    w.get_pushers_start = +new Date(), d({
        data: {
            roomID: k.roomID
        },
        success: function(o) {
            var e = [], r = [], s = 0;
            console.log("去重操作"), console.log("旧", k.pushers), console.log("新", o.pushers), o.pushers.forEach(function(o) {
                s = 0, k.pushers.forEach(function(e) {
                    o.userID == e.userID && (s = 1);
                }), s || e.push(o), s = 0;
            }), k.pushers.forEach(function(e) {
                s = 0, o.pushers.forEach(function(o) {
                    e.userID == o.userID && (s = 1);
                }), s || r.push(e), s = 0;
            }), k.roomID = o.roomID, k.roomInfo = o.roomInfo, k.roomCreator = o.roomCreator, 
            k.pushers = o.pushers, e.length && (console.log("进房:", JSON.stringify(e)), P.onPusherJoin({
                pushers: e
            })), r.length && (console.log("退房:", JSON.stringify(r), "房间解散"), P.onPusherQuit({
                pushers: r
            }), P.onRoomClose({})), w.get_pushers_end = +new Date(), M.setReportData({
                str_room_creator: k.roomCreator,
                int64_tc_get_pushers: +new Date() - w.get_pushers_start
            });
        },
        fail: function(o) {
            M.setReportData({
                int64_tc_get_pushers: -Math.abs(o.errCode)
            }), M.report();
        }
    });
}

function u(o) {
    o && setTimeout(function() {
        c();
    }, 3e3), C && setTimeout(function() {
        c(), u();
    }, 7e3);
}

function c() {
    console.log("心跳请求"), o({
        url: "pusher_heartbeat",
        data: {
            roomID: k.roomID,
            userID: S.userID
        },
        success: function(o) {
            o.data.code ? console.log("心跳失败：", o) : console.log("心跳成功", o);
        },
        fail: function(o) {
            console.log("心跳失败：", o);
        }
    });
}

function l() {
    C = !1;
}

function d(e) {
    if (!e) return console.log("getPushers参数错误", e), void (e.fail && e.fail({
        errCode: -9,
        errMsg: "getPushers参数错误"
    }));
    console.log("******", e), o({
        url: "get_pushers",
        data: {
            roomID: e.data.roomID
        },
        success: function(o) {
            if (o.data.code) return console.log("拉取所有主播信息失败: ", o), void (e.fail && e.fail({
                errCode: o.data.code,
                errMsg: o.data.message + "[" + o.data.code + "]"
            }));
            var r = [], s = 0;
            console.log("拉取所有主播信息成功", o.data, I(o.data.pushersMap));
            for (var t in o.data.pushersMap) {
                var a = o.data.pushersMap[t];
                a.userID != S.userID ? r.push(a) : s = 1;
            }
            console.log("拉取所有主播信息成功", r), !e.type || s ? e.success && e.success({
                roomID: o.data.roomID,
                roomInfo: o.data.roomInfo,
                roomCreator: o.data.roomCreator,
                mixedPlayURL: o.data.mixedPlayURL,
                pushers: r
            }) : e.fail && e.fail({
                errCode: -1,
                errMsg: "你已退出"
            });
        },
        fail: function(o) {
            if ("request:fail timeout" == o.errMsg) var r = -1, s = "网络请求超时，请检查网络状态";
            e.fail && e.fail({
                errCode: r || -1,
                errMsg: s || "获取主播信息失败"
            });
        }
    });
}

function f(e) {
    console.log(e), o({
        url: "create_room",
        data: {
            userID: S.userID,
            roomID: k.roomID,
            roomInfo: k.roomInfo
        },
        success: function(o) {
            return e.data.roomID = k.roomID, o.data.code ? (console.log("创建房间失败:", o), void (e.fail && e.fail({
                errCode: o.data.code,
                errMsg: o.data.message + "[" + o.data.code + "]"
            }))) : (k.roomID = o.data.roomID, k.roomCreator = S.userID, console.log("&&&&&&&proto_createRoom创建房间成功&&&&&", k.roomID, o), 
            k.isDestory ? (console.log("***======roomInfo.isDestory by proto_createRoom rtcroom.js***"), 
            void D({})) : void (e.success && e.success({
                roomID: k.roomID
            })));
        },
        fail: function(o) {
            if (console.log("创建后台房间失败:", o), "request:fail timeout" == o.errMsg) var r = -1, s = "网络请求超时，请检查网络状态";
            e.fail && e.fail({
                errCode: r || -3,
                errMsg: s || "创建房间失败"
            });
        }
    });
}

function g(o) {
    if (!o || !o.data.roomID || !o.data.pushURL) return console.log("joinPusher参数错误", o), 
    void (o.fail && o.fail({
        errCode: -9,
        errMsg: "joinPusher参数错误"
    }));
    k.roomID = o.data.roomID, k.roomInfo = o.data.roomInfo, m(o);
}

function m(e) {
    w.join_group_srart = +new Date(), w.add_pusher_start = +new Date(), o({
        url: "add_pusher",
        data: {
            roomID: k.roomID,
            roomInfo: k.roomInfo,
            userID: S.userID,
            userName: S.userName,
            userAvatar: S.userAvatar,
            pushURL: e.data.pushURL
        },
        success: function(o) {
            if (o.data.code) return console.log("进入房间失败:", o), void (e.fail && e.fail({
                errCode: o.data.code,
                errMsg: o.data.message + "[" + o.data.code + "]"
            }));
            console.log("加入推流成功"), M.setReportData({
                int64_tc_add_pusher: +new Date() - w.add_pusher_start,
                int64_ts_add_pusher: +new Date()
            }), C = !0, u(1), console.log("*****proto_joinPusher 928 rtcroom.js ****", k), p(), 
            _.applyJoinBigGroup(k.roomID, t, {
                success: function() {
                    k.isPush = !0, e.success && e.success({});
                },
                fail: function() {
                    e.fail;
                }
            }), i();
        },
        fail: function(o) {
            if (console.log("进入房间失败:", o), "request:fail timeout" == o.errMsg) var r = -1, s = "网络请求超时，请检查网络状态";
            e.fail && e.fail({
                errCode: r || -4,
                errMsg: s || "进入房间失败"
            });
        }
    });
}

function p() {
    var o = "";
    "string" == typeof y.globalData.phone ? o = y.globalData.phone : "object" === I(y.globalData.phone) && y.globalData.phone && y.globalData.phone.phone && (o = y.globalData.phone.phone);
    var e = {
        csyzwfelab20180425hhhdfq: "secretkey",
        param: {
            consultantName: S.opt.username,
            currentTime: Date.now(),
            roomNum: k.roomID,
            customerId: S.userSplitID,
            customerGender: S.gender,
            customerLoginId: S.loginid,
            customerMobile: o,
            customerNickname: S.userName,
            customerAvatar: S.userAvatar
        },
        type: 512,
        typedesc: "发起视频看房请求"
    };
    console.log("*****callVideo-sendComment*****", JSON.stringify(e), S.selToID);
    var r = {
        flag: "1",
        myselToID: S.selToID
    };
    n({
        data: {
            text: "客户" + S.userName + "发起视频看房请求",
            ext: JSON.stringify(e),
            msg: JSON.stringify(e),
            data: ""
        },
        typedata: {
            TYPE: h.SESSION_TYPE.C2C,
            myselToID: r.myselToID || "",
            flag: r.flag
        }
    });
}

function D(e) {
    if (l(), !k.isDestory) {
        k.isDestory = !0;
        k.roomCreator;
        console.log(k), k.roomID && o({
            url: "delete_pusher",
            data: {
                roomID: k.roomID,
                userID: S.userID
            },
            success: function(o) {
                if (o.data.code) return console.error("退出房间失败:", o), console.error("退房信息: roomID:" + k.roomID + ", userID:" + S.userID), 
                void (e.fail && e.fail({
                    errCode: o.data.code,
                    errMsg: o.data.message + "[" + o.data.code + "]"
                }));
                console.log("退出推流成功"), e.success && e.success({});
            },
            fail: function(o) {
                console.log("退出房间失败:", o);
                var r = o.errCode || -1, s = o.errMsg || "退出房间失败";
                "request:fail timeout" == o.errMsg && (r = -1, s = "网络请求超时，请检查网络状态"), e.fail && e.fail({
                    errCode: r,
                    errMsg: s
                });
            }
        }), console.log("***webimhandler.quitBigGroup***", e), _.quitBigGroup(e.roomID), 
        k.roomID = "", k.pushers = [], k.mixedPlayURL = "", k.roomInfo = "", S.pushURL = "", 
        S.isCreator = !1;
    }
}

var I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, h = require("webim_wx.js"), _ = require("webim_handler.js"), M = (require("tls.js"), 
require("encrypt.js"), require("report.js")), y = getApp(), v = (require("./util.js"), 
require("../config.js"), ""), C = "", R = 0, N = [], S = {
    userID: "",
    userName: "",
    userAvatar: "",
    userSig: "",
    sdkAppID: "",
    accountType: "",
    accountMode: 0,
    token: ""
}, k = {
    roomID: "",
    roomCreator: "",
    roomInfo: "",
    mixedPlayURL: "",
    pushers: [],
    isDestory: !1,
    isPush: !1
}, P = {
    onGetPusherList: function() {},
    onPusherJoin: function() {},
    onPusherQuit: function() {},
    onRoomClose: function() {},
    onRecvRoomTextMsg: function() {}
}, b = 0, T = [ "pusher_heartbeat", "get_room_list", "create_room", "delete_pusher", "get_pushers", "" ], w = {
    join_group_srart: 0,
    get_pushers_start: 0,
    get_pushers_end: 0,
    get_pushurl_start: 0,
    add_pusher_start: 0
};

module.exports = {
    login: function(e) {
        if (k.isPush = !1, !e || !e.data.serverDomain) return console.log("init参数错误", e), 
        void (e.fail && e.fail({
            errCode: -9,
            errMsg: "init参数错误"
        }));
        v = e.data.serverDomain, S.userID = e.data.userID, S.loginid = e.data.loginid, S.userSplitID = e.data.userSplitID, 
        S.userSig = e.data.userSig, S.sdkAppID = e.data.sdkAppID, S.accountType = e.data.accType, 
        S.userName = e.data.userName || e.data.loginid || S.userID, S.userAvatar = e.data.userAvatar || "123", 
        S.gender = e.data.gender || "1", S.selToID = e.data.selToID, S.opt = e.data.opt, 
        e.data.userSig || (console.log("***userSig***", e.data.userSig), wx.navigateTo({
            url: "../pages/index/index"
        })), o({
            url: "login",
            params: {
                accountType: S.accountType,
                sdkAppID: S.sdkAppID,
                userSig: S.userSig
            },
            method: "POST",
            data: {},
            success: function(o) {
                if (console.log("####login###", o), o.data.code) return wx.showModal({
                    title: "登录到RoomService后台失败",
                    content: o.errMsg,
                    showCancel: !1
                }), console.error("登录到RoomService后台失败:", JSON.stringify(o)), void (e.fail && e.fail({
                    errCode: o.data.code,
                    errMsg: o.data.message
                }));
                S.token = o.data.token, S.userID = o.data.userID, r({
                    success: function(o) {
                        console.log("####IM###", o), e.success && e.success({
                            userID: S.userID,
                            userAvatar: S.userAvatar,
                            userName: S.userName
                        });
                    },
                    fail: function(o) {
                        wx.showModal({
                            title: "IM登录失败",
                            content: o.errMsg,
                            showCancel: !1
                        }), console.error("IM登录失败:", JSON.stringify(o)), e.fail && e.fail({
                            errCode: -999,
                            errMsg: "IM登录失败"
                        });
                    }
                });
            },
            fail: function(o) {
                wx.showModal({
                    title: "1登录到RoomService后台失败1",
                    content: o.errMsg,
                    showCancel: !1
                }), console.error("登录到RoomService后台失败:", JSON.stringify(o)), e.fail && e.fail(o);
            }
        });
    },
    loginIM: r,
    logout: function() {
        o({
            url: "logout",
            success: function(o) {},
            fail: function(o) {}
        }), v = "", S.userID = "", S.userSig = "", S.sdkAppID = "", S.accountType = "", 
        S.userName = "", S.userAvatar = "", S.token = "", _.logout();
    },
    getRoomList: function(e) {
        if (!e) return console.log("getRoomList参数错误", e), void (e.fail && e.fail({
            errCode: -9,
            errMsg: "getRoomList参数错误"
        }));
        o({
            url: "get_room_list",
            data: {
                index: e.data.index || 0,
                cnt: e.data.cnt || 20
            },
            success: function(o) {
                if (o.data.code) return console.error("获取房间列表失败: ", o), void (e.fail && e.fail({
                    errCode: o.data.code,
                    errMsg: o.data.message + "[" + o.data.code + "]"
                }));
                console.log("房间列表信息:", o), e.success && e.success({
                    rooms: o.data.rooms
                });
            },
            fail: function(o) {
                if (console.log("获取房间列表失败: ", o), "request:fail timeout" == o.errMsg) var r = -1, s = "网络请求超时，请检查网络状态";
                e.fail && e.fail({
                    errCode: r || -1,
                    errMsg: s || "获取房间列表失败"
                });
            }
        });
    },
    getPushURL: function(e) {
        if (!e) return console.log("getPushURL参数错误", e), void (e.fail && e.fail({
            errCode: -9,
            errMsg: "getPushURL参数错误"
        }));
        M.setReportData({
            int64_ts_enter_room: +new Date()
        }), w.get_pushurl_start = +new Date();
        var r = {};
        e.data.roomID ? (r.roomID = e.data.roomID, r.userID = S.userID) : r.userID = S.userID, 
        o({
            url: "get_push_url",
            data: r,
            success: function(o) {
                if (o.data.code) return console.log("获取推流地址失败: ", o), void (e.fail && e.fail({
                    errCode: o.data.code,
                    errMsg: o.data.message + "[" + o.data.code + "]"
                }));
                M.setReportData({
                    int64_tc_get_pushurl: +new Date() - w.get_pushurl_start
                }), console.log("获取推流地址成功：", o.data.pushURL), e.success && e.success({
                    pushURL: o.data.pushURL
                });
            },
            fail: function(o) {
                if ("request:fail timeout" == o.errMsg) var r = -1, s = "网络请求超时，请检查网络状态";
                e.fail && e.fail({
                    errCode: r || -3,
                    errMsg: s || "获取推流地址失败"
                });
            }
        });
    },
    createRoom: function(o) {
        if (k.isDestory = !1, !o) return console.log("createRoom参数错误", o), void (o.fail && o.fail({
            errCode: -9,
            errMsg: "createRoom参数错误"
        }));
        k.roomInfo = o.data.roomInfo.roomName || "", k.roomID = o.data.roomInfo.roomID || "", 
        k.pushers = [], f(o);
    },
    getPushers: d,
    enterRoom: function(o) {
        console.log("***enterRoom***", k.isPush), k.isDestory = !1, M.setReportData({
            str_roomid: o.data.roomID,
            str_userid: S.userID
        }), g(o);
    },
    exitRoom: D,
    sendRoomTextMsg: n,
    setListener: function(o) {
        o ? (P.onGetPusherList = o.onGetPusherList || function() {}, P.onPusherJoin = o.onPusherJoin || function() {}, 
        P.onPusherQuit = o.onPusherQuit || function() {}, P.onRoomClose = o.onRoomClose || function() {}, 
        P.onRecvRoomTextMsg = o.onRecvRoomTextMsg || function() {}) : console.log("setListener参数错误", o);
    },
    getAccountInfo: function() {
        return S;
    },
    getRoomInfo: function() {
        return k;
    }
};