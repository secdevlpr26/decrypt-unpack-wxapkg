var e = 0, t = 0;

module.exports = function() {
    var n = {}, o = {
        login: function(e, t, n) {},
        syncMsgs: function(e, t) {},
        getC2CHistoryMsgs: function(e, t, n) {},
        syncGroupMsgs: function(e, t, n) {},
        sendMsg: function(e, t, n) {},
        logout: function(e, t) {},
        setAutoRead: function(e, t, n) {},
        getProfilePortrait: function(e, t, n) {},
        setProfilePortrait: function(e, t, n) {},
        applyAddFriend: function(e, t, n) {},
        getPendency: function(e, t, n) {},
        deletePendency: function(e, t, n) {},
        responseFriend: function(e, t, n) {},
        getAllFriend: function(e, t, n) {},
        deleteFriend: function(e, t, n) {},
        addBlackList: function(e, t, n) {},
        getBlackList: function(e, t, n) {},
        deleteBlackList: function(e, t, n) {},
        uploadPic: function(e, t, n) {},
        createGroup: function(e, t, n) {},
        applyJoinGroup: function(e, t, n) {},
        handleApplyJoinGroup: function(e, t, n) {},
        deleteApplyJoinGroupPendency: function(e, t, n) {},
        quitGroup: function(e, t, n) {},
        getGroupPublicInfo: function(e, t, n) {},
        getGroupInfo: function(e, t, n) {},
        modifyGroupBaseInfo: function(e, t, n) {},
        destroyGroup: function(e, t, n) {},
        getJoinedGroupListHigh: function(e, t, n) {},
        getGroupMemberInfo: function(e, t, n) {},
        addGroupMember: function(e, t, n) {},
        modifyGroupMember: function(e, t, n) {},
        forbidSendMsg: function(e, t, n) {},
        deleteGroupMember: function(e, t, n) {},
        sendCustomGroupNotify: function(e, t, n) {},
        Msg: function(e, t, n, o, r, i, s, u) {},
        MsgStore: {
            sessMap: function() {
                return {};
            },
            sessCount: function() {
                return 0;
            },
            sessByTypeId: function(e, t) {
                return {};
            },
            delSessByTypeId: function(e, t) {
                return !0;
            },
            resetCookieAndSyncFlag: function() {},
            downloadMap: {}
        }
    };
    return function(o) {
        var r = {
            VERSION: "1.7.0",
            APPID: "537048168"
        }, i = !0, s = {
            FORMAL: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com"
            }
        }, u = {}, a = {
            OPEN_IM: "openim",
            GROUP: "group_open_http_svc",
            FRIEND: "sns",
            PROFILE: "profile",
            RECENT_CONTACT: "recentcontact",
            PIC: "openpic",
            BIG_GROUP: "group_open_http_noauth_svc",
            BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_noauth_svc",
            IM_OPEN_STAT: "imopenstat"
        }, l = {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v1",
            group_open_long_polling_http_noauth_svc: "v1",
            imopenstat: "v4"
        }, c = {
            login: 1,
            pic_up: 3,
            apply_join_group: 9,
            create_group: 10,
            longpolling: 18,
            send_group_msg: 19,
            sendmsg: 20
        }, p = {
            C2C: "C2C",
            GROUP: "GROUP"
        }, f = {
            C2C: 1,
            GROUP: 2
        }, g = {
            C2C: 12e3,
            GROUP: 8898
        }, d = {
            OK: "OK",
            FAIL: "FAIL"
        }, m = {
            TEXT: "TIMTextElem",
            FACE: "TIMFaceElem",
            IMAGE: "TIMImageElem",
            CUSTOM: "TIMCustomElem",
            SOUND: "TIMSoundElem",
            FILE: "TIMFileElem",
            LOCATION: "TIMLocationElem",
            GROUP_TIP: "TIMGroupTipElem"
        }, I = {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        }, M = {
            RAW_DATA: 0,
            BASE64_DATA: 1
        }, E = {
            BUSSINESS_ID: "10001",
            AUTH_KEY: "617574686b6579",
            SERVER_IP: "182.140.186.147"
        }, _ = {
            SOUND: 2106,
            FILE: 2107
        }, y = {
            IMAGE: 1,
            FILE: 2,
            SHORT_VIDEO: 3,
            SOUND: 4
        }, h = {
            APP_VERSION: "2.1",
            SERVER_VERSION: 1
        }, C = {
            C2C: 1,
            GROUP_COMMON: 3,
            GROUP_TIP: 4,
            GROUP_SYSTEM: 5,
            GROUP_TIP2: 6,
            FRIEND_NOTICE: 7,
            PROFILE_NOTICE: 8,
            C2C_COMMON: 9,
            C2C_EVENT: 10
        }, T = {
            COMMON: 0
        }, A = {
            READED: 92
        }, S = {
            COMMON: 0,
            LOVEMSG: 1,
            TIP: 2,
            REDPACKET: 3
        }, G = {
            REDPACKET: 1,
            COMMON: 2,
            LOVEMSG: 3
        }, O = {
            JOIN: 1,
            QUIT: 2,
            KICK: 3,
            SET_ADMIN: 4,
            CANCEL_ADMIN: 5,
            MODIFY_GROUP_INFO: 6,
            MODIFY_MEMBER_INFO: 7
        }, F = {
            FACE_URL: 1,
            NAME: 2,
            OWNER: 3,
            NOTIFICATION: 4,
            INTRODUCTION: 5
        }, R = {
            JOIN_GROUP_REQUEST: 1,
            JOIN_GROUP_ACCEPT: 2,
            JOIN_GROUP_REFUSE: 3,
            KICK: 4,
            DESTORY: 5,
            CREATE: 6,
            INVITED_JOIN_GROUP_REQUEST: 7,
            QUIT: 8,
            SET_ADMIN: 9,
            CANCEL_ADMIN: 10,
            REVOKE: 11,
            READED: 15,
            CUSTOM: 255
        }, v = {
            FRIEND_ADD: 1,
            FRIEND_DELETE: 2,
            PENDENCY_ADD: 3,
            PENDENCY_DELETE: 4,
            BLACK_LIST_ADD: 5,
            BLACK_LIST_DELETE: 6,
            PENDENCY_REPORT: 7,
            FRIEND_UPDATE: 8
        }, N = {
            PROFILE_MODIFY: 1
        }, P = {
            OK: 0,
            SIGNATURE_EXPIRATION: 11
        }, b = {
            INIT: -1,
            ON: 0,
            RECONNECT: 1,
            OFF: 9999
        }, L = {
            GROUP_MSG: 1,
            C2C_MSG: 2,
            USER_HEAD: 3,
            GROUP_HEAD: 4
        }, U = {
            ING: 14,
            STOP: 15
        }, D = b.INIT, k = !1, w = 0, q = 6e4, x = null, B = 0, K = 0, z = 0, V = null, J = null, H = 0, Y = [], X = null, Q = null, W = {
            sdkAppID: null,
            appIDAt3rd: null,
            accountType: null,
            identifier: null,
            tinyid: null,
            identifierNick: null,
            userSig: null,
            a2: null,
            contentType: "json",
            apn: 1
        }, j = {}, $ = 0, Z = {}, ee = 0, te = [], ne = [], oe = [], re = {
            downloadMap: {}
        }, ie = {
            "[惊讶]": 0,
            "[撇嘴]": 1,
            "[色]": 2,
            "[发呆]": 3,
            "[得意]": 4,
            "[流泪]": 5,
            "[害羞]": 6,
            "[闭嘴]": 7,
            "[睡]": 8,
            "[大哭]": 9,
            "[尴尬]": 10,
            "[发怒]": 11,
            "[调皮]": 12,
            "[龇牙]": 13,
            "[微笑]": 14,
            "[难过]": 15,
            "[酷]": 16,
            "[冷汗]": 17,
            "[抓狂]": 18,
            "[吐]": 19,
            "[偷笑]": 20,
            "[可爱]": 21,
            "[白眼]": 22,
            "[傲慢]": 23,
            "[饿]": 24,
            "[困]": 25,
            "[惊恐]": 26,
            "[流汗]": 27,
            "[憨笑]": 28,
            "[大兵]": 29,
            "[奋斗]": 30,
            "[咒骂]": 31,
            "[疑问]": 32,
            "[嘘]": 33,
            "[晕]": 34
        }, se = {}, ue = new function() {
            this.formatTimeStamp = function(e, t) {
                if (!e) return 0;
                var n;
                t = t || "yyyy-MM-dd hh:mm:ss";
                var o = new Date(1e3 * e), r = {
                    "M+": o.getMonth() + 1,
                    "d+": o.getDate(),
                    "h+": o.getHours(),
                    "m+": o.getMinutes(),
                    "s+": o.getSeconds()
                };
                n = /(y+)/.test(t) ? t.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length)) : t;
                for (var i in r) new RegExp("(" + i + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
                return n;
            }, this.groupTypeEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Public":
                    t = "公开群";
                    break;

                  case "ChatRoom":
                    t = "聊天室";
                    break;

                  case "Private":
                    t = "讨论组";
                    break;

                  case "AVChatRoom":
                    t = "直播聊天室";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupTypeCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "公开群":
                    t = "Public";
                    break;

                  case "聊天室":
                    t = "ChatRoom";
                    break;

                  case "讨论组":
                    t = "Private";
                    break;

                  case "直播聊天室":
                    t = "AVChatRoom";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "Member":
                    t = "成员";
                    break;

                  case "Admin":
                    t = "管理员";
                    break;

                  case "Owner":
                    t = "群主";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupRoleCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "成员":
                    t = "Member";
                    break;

                  case "管理员":
                    t = "Admin";
                    break;

                  case "群主":
                    t = "Owner";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagEn2Ch = function(e) {
                var t = null;
                switch (e) {
                  case "AcceptAndNotify":
                    t = "接收并提示";
                    break;

                  case "AcceptNotNotify":
                    t = "接收不提示";
                    break;

                  case "Discard":
                    t = "屏蔽";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.groupMsgFlagCh2En = function(e) {
                var t = null;
                switch (e) {
                  case "接收并提示":
                    t = "AcceptAndNotify";
                    break;

                  case "接收不提示":
                    t = "AcceptNotNotify";
                    break;

                  case "屏蔽":
                    t = "Discard";
                    break;

                  default:
                    t = e;
                }
                return t;
            }, this.formatText2Html = function(e) {
                var t = e;
                return t && (t = (t = (t = this.xssFilter(t)).replace(/ /g, "&nbsp;")).replace(/\n/g, "<br/>")), 
                t;
            }, this.formatHtml2Text = function(e) {
                var t = e;
                return t && (t = (t = t.replace(/&nbsp;/g, " ")).replace(/<br\/>/g, "\n")), t;
            }, this.getStrBytes = function(e) {
                if (null == e || void 0 === e) return 0;
                if ("string" != typeof e) return 0;
                var t, n, o, r = 0;
                for (n = 0, o = e.length; n < o; n++) r += (t = e.charCodeAt(n)) <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
                return r;
            }, this.xssFilter = function(e) {
                return e = e.toString(), e = e.replace(/[<]/g, "&lt;"), e = e.replace(/[>]/g, "&gt;");
            }, this.trimStr = function(e) {
                return e ? (e = e.toString()).replace(/(^\s*)|(\s*$)/g, "") : "";
            }, this.validNumber = function(e) {
                return (e = e.toString()).match(/(^\d{1,8}$)/g);
            }, this.getReturnError = function(e, t) {
                return t || (t = -100), {
                    ActionStatus: d.FAIL,
                    ErrorCode: t,
                    ErrorInfo: e + "[" + t + "]"
                };
            }, this.setCookie = function(e, t, n, o, r) {
                var i = new Date();
                i.setTime(i.getTime() + 1e3 * n), document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString();
            }, this.getCookie = function(e) {
                var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                return null != t ? unescape(t[2]) : null;
            }, this.delCookie = function(e) {
                var t = new Date();
                t.setTime(t.getTime() - 1);
                var n = this.getCookie(e);
                null != n && (document.cookie = e + "=" + escape(n) + ";expires=" + t.toGMTString());
            }, this.getQueryString = function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = location.search.substr(1).match(t);
                return null != n ? unescape(n[2]) : null;
            };
        }(), ae = new function() {
            var e = !0;
            this.setOn = function(t) {
                e = t;
            }, this.getOn = function() {
                return e;
            }, this.error = function(t) {
                try {
                    e && console.error(t);
                } catch (e) {}
            }, this.warn = function(t) {
                try {
                    e && console.warn(t);
                } catch (e) {}
            }, this.info = function(t) {
                try {
                    e && console.info(t);
                } catch (e) {}
            }, this.debug = function(t) {
                try {
                    e && console.debug(t);
                } catch (e) {}
            };
        }(), le = function(e) {
            return e || (e = new Date()), Math.round(e.getTime() / 1e3);
        }, ce = function() {
            return ee ? ee += 1 : ee = Math.round(1e7 * Math.random()), ee;
        }, pe = function() {
            return Math.round(4294967296 * Math.random());
        }, fe = function(n, o, r, i, s, u, a) {
            e++, t++, Z[$++] = wx.request({
                url: o + "&reqSeq=" + e,
                data: r,
                dataType: "json",
                method: n,
                header: {
                    "Content-Type": "application/json"
                },
                success: function(e) {
                    t--, w = B = 0, u && u(e.data);
                },
                fail: function(e) {
                    t--, setTimeout(function() {
                        var e = ue.getReturnError("请求服务器失败,请检查你的网络是否正常", -2);
                        a && a(e);
                    }, 16);
                }
            });
        }, ge = function(e, t, n, o, r, i, s) {
            fe(e, t, JSON.stringify(n), 0, 0, function(e) {
                var t = null;
                e && (t = e), i && i(t);
            }, s);
        }, de = function() {
            return W.sdkAppID && W.identifier;
        }, me = function(e, t) {
            if (!de()) {
                if (t) {
                    var n = ue.getReturnError("请登录", -4);
                    e && e(n);
                }
                return !1;
            }
            return !0;
        }, Ie = function() {
            return i;
        }, Me = function(e, t, n, o) {
            var i = s;
            i = Ie() ? s.FORMAL.COMMON : s.TEST.COMMON, e == a.PIC && (i = Ie() ? s.FORMAL.PIC : s.TEST.PIC);
            var u = i + "/" + l[e] + "/" + e + "/" + t + "?websdkappid=" + r.APPID + "&v=" + r.VERSION;
            if (de()) {
                if ("login" == t) u += "&identifier=" + encodeURIComponent(W.identifier) + "&usersig=" + W.userSig; else if (W.tinyid && W.a2) u += "&tinyid=" + W.tinyid + "&a2=" + W.a2; else if (o) return ae.error("tinyid或a2为空[" + e + "][" + t + "]"), 
                o(ue.getReturnError("tinyid或a2为空[" + e + "][" + t + "]", -5)), !1;
                u += "&contenttype=" + W.contentType;
            }
            return u += "&sdkappid=" + W.sdkAppID + "&accounttype=" + W.accountType + "&apn=" + W.apn + "&reqtime=" + le();
        }, Ee = function(e, t) {
            var n = null;
            return X && Y[0] ? n = "http://" + Y[0] + "/asn.com/stddownload_common_file?authkey=" + X + "&bid=" + E.BUSSINESS_ID + "&subbid=" + W.sdkAppID + "&fileid=" + e + "&filetype=" + _.SOUND + "&openid=" + t + "&ver=0" : ae.error("拼接语音下载url不报错：ip或者authkey为空"), 
            n;
        }, _e = function(e, t, n) {
            var o = null;
            return X && Y[0] ? o = "http://" + Y[0] + "/asn.com/stddownload_common_file?authkey=" + X + "&bid=" + E.BUSSINESS_ID + "&subbid=" + W.sdkAppID + "&fileid=" + e + "&filetype=" + _.FILE + "&openid=" + t + "&ver=0&filename=" + encodeURIComponent(n) : ae.error("拼接文件下载url不报错：ip或者authkey为空"), 
            re.downloadMap["uuid_" + e] = o, o;
        }, ye = function(e, t, n, o, r, i, s) {
            var u = {
                From_Account: t,
                To_Account: r,
                os_platform: 10,
                Timestamp: le().toString(),
                Random: pe().toString(),
                request_info: [ {
                    busi_id: i,
                    download_flag: o,
                    type: s,
                    uuid: e,
                    version: h.SERVER_VERSION,
                    auth_key: X,
                    ip: Y[0]
                } ]
            };
            yt(u, function(e) {
                0 == e.error_code && e.response_info && (re.downloadMap["uuid_" + u.uuid] = e.response_info.url), 
                onAppliedDownloadUrl && onAppliedDownloadUrl({
                    uuid: u.uuid,
                    url: e.response_info.url,
                    maps: re.downloadMap
                });
            }, function(e) {
                ae.error("获取下载地址失败", u.uuid);
            });
        }, he = function() {
            for (var e in Z) {
                var t = Z[e];
                t && (t.abort(), Z[$] = null);
            }
            $ = 0, Z = {};
        }, Ce = function() {
            he(), W = {
                sdkAppID: null,
                appIDAt3rd: null,
                accountType: null,
                identifier: null,
                identifierNick: null,
                userSig: null,
                contentType: "json",
                apn: 1
            }, j = {}, ee = 0, z = 0, V = null, oe = [], Gt.clear(), x = null;
        }, Te = function(e, t, n, o, r) {
            Ce(), n && (j = n), 0 == j.isAccessFormalEnv && (ae.error("请切换为正式环境"), i = j.isAccessFormalEnv), 
            0 == j.isLogOn && ae.setOn(j.isLogOn), e || !r ? e.sdkAppID || !r ? e.accountType || !r ? (e.identifier && (W.identifier = e.identifier.toString()), 
            e.identifier && !e.userSig && r ? r(ue.getReturnError("loginInfo.userSig is empty", -9)) : (e.userSig && (W.userSig = e.userSig.toString()), 
            W.sdkAppID = e.sdkAppID, W.accountType = e.accountType, W.identifier && W.userSig ? Se(function(e, n) {
                Gt.init(t, function(t) {
                    o && (t.identifierNick = e, t.headurl = n, o(t));
                }, r);
            }, r) : Gt.init(t, o, r))) : r(ue.getReturnError("loginInfo.accountType is empty", -8)) : r(ue.getReturnError("loginInfo.sdkAppID is empty", -7)) : r(ue.getReturnError("loginInfo is empty", -6));
        }, Ae = function(e, t, n) {
            if ("longpolling" != e || 60008 != t && 91101 != t) {
                var o = c[e];
                if (o) {
                    var i = le(), s = null, u = {
                        Code: t,
                        ErrMsg: n
                    };
                    if (W.a2 ? s = W.a2.substring(0, 10) + "_" + i + "_" + pe() : W.userSig && (s = W.userSig.substring(0, 10) + "_" + i + "_" + pe()), 
                    s) {
                        var a = {
                            UniqKey: s,
                            EventId: o,
                            ReportTime: i,
                            MsgCmdErrorCode: u
                        };
                        if ("login" == e) {
                            var l = [];
                            l.push(a), Et({
                                EvtItems: l,
                                MainVersion: r.VERSION,
                                Version: "0"
                            }, function(e) {
                                l = null;
                            }, function(e) {
                                l = null;
                            });
                        } else oe.push(a), oe.length >= 20 && Et({
                            EvtItems: oe,
                            MainVersion: r.VERSION,
                            Version: "0"
                        }, function(e) {
                            oe = [];
                        }, function(e) {
                            oe = [];
                        });
                    }
                }
            }
        }, Se = function(e, t) {
            ht.apiCall(a.OPEN_IM, "login", {
                State: "Online"
            }, function(n) {
                if (n.TinyId) W.tinyid = n.TinyId; else if (t) return void t(ue.getReturnError("TinyId is empty", -10));
                if (n.A2Key) W.a2 = n.A2Key; else if (t) return void t(ue.getReturnError("A2Key is empty", -11));
                var o = [ "Tag_Profile_IM_Nick", "Tag_Profile_IM_Image" ], r = {
                    From_Account: W.identifier,
                    To_Account: [ W.identifier ],
                    LastStandardSequence: 0,
                    TagList: o
                };
                ct(r, function(t) {
                    var n, o;
                    if (t.UserProfileItem && t.UserProfileItem.length > 0) for (var r in t.UserProfileItem) for (var i in t.UserProfileItem[r].ProfileItem) switch (t.UserProfileItem[r].ProfileItem[i].Tag) {
                      case "Tag_Profile_IM_Nick":
                        (n = t.UserProfileItem[r].ProfileItem[i].Value) && (W.identifierNick = n);
                        break;

                      case "Tag_Profile_IM_Image":
                        (o = t.UserProfileItem[r].ProfileItem[i].Value) && (W.headurl = o);
                    }
                    e && e(W.identifierNick, W.headurl);
                }, t);
            }, t);
        }, Ge = function(e, t, n) {
            if (!me(n, !1)) return Ce(), void (t && t({
                ActionStatus: d.OK,
                ErrorCode: 0,
                ErrorInfo: "logout success"
            }));
            "all" == e ? ht.apiCall(a.OPEN_IM, "logout", {}, function(e) {
                Ce(), t && t(e);
            }, n) : ht.apiCall(a.OPEN_IM, "longpollinglogout", {
                LongPollingId: x
            }, function(e) {
                Ce(), t && t(e);
            }, n);
        }, Oe = function(e, t, n) {
            if (me(n, !0)) {
                var o = null;
                switch (e.sess.type()) {
                  case p.C2C:
                    o = {
                        From_Account: W.identifier,
                        To_Account: e.sess.id().toString(),
                        MsgTimeStamp: e.time,
                        MsgSeq: e.seq,
                        MsgRandom: e.random,
                        MsgBody: []
                    };
                    break;

                  case p.GROUP:
                    var r = e.getSubType();
                    switch (o = {
                        GroupId: e.sess.id().toString(),
                        From_Account: W.identifier,
                        Random: e.random,
                        MsgBody: []
                    }, r) {
                      case S.COMMON:
                        o.MsgPriority = "COMMON";
                        break;

                      case S.REDPACKET:
                        o.MsgPriority = "REDPACKET";
                        break;

                      case S.LOVEMSG:
                        o.MsgPriority = "LOVEMSG";
                        break;

                      case S.TIP:
                        ae.error("不能主动发送群提示消息,subType=" + r);
                        break;

                      default:
                        return void ae.error("发送群消息时，出现未知子消息类型：subType=" + r);
                    }
                }
                for (var i in e.elems) {
                    var s = e.elems[i], u = null, l = s.type;
                    switch (l) {
                      case m.TEXT:
                        u = {
                            Text: s.content.text
                        };
                        break;

                      case m.FACE:
                        u = {
                            Index: s.content.index,
                            Data: s.content.data
                        };
                        break;

                      case m.IMAGE:
                        var c = [];
                        for (var f in s.content.ImageInfoArray) c.push({
                            Type: s.content.ImageInfoArray[f].type,
                            Size: s.content.ImageInfoArray[f].size,
                            Width: s.content.ImageInfoArray[f].width,
                            Height: s.content.ImageInfoArray[f].height,
                            URL: s.content.ImageInfoArray[f].url
                        });
                        u = {
                            UUID: s.content.UUID,
                            ImageInfoArray: c
                        };
                        break;

                      case m.SOUND:
                        ae.warn("web端暂不支持发送语音消息");
                        continue;

                      case m.LOCATION:
                        ae.warn("web端暂不支持发送地理位置消息");
                        continue;

                      case m.FILE:
                        u = {
                            UUID: s.content.uuid,
                            FileName: s.content.name,
                            FileSize: s.content.size,
                            DownloadFlag: s.content.downFlag
                        };
                        break;

                      case m.CUSTOM:
                        u = {
                            Data: s.content.data,
                            Desc: s.content.desc,
                            Ext: s.content.ext
                        }, l = m.CUSTOM;
                        break;

                      default:
                        ae.warn("web端暂不支持发送" + s.type + "消息");
                        continue;
                    }
                    e.PushInfoBoolean && (o.OfflinePushInfo = e.PushInfo), o.MsgBody.push({
                        MsgType: l,
                        MsgContent: u
                    });
                }
                e.sess.type() == p.C2C ? ht.apiCall(a.OPEN_IM, "sendmsg", o, t, n) : e.sess.type() == p.GROUP && ht.apiCall(a.GROUP, "send_group_msg", o, t, n);
            }
        }, Fe = function(e, t, n) {
            (i || "undefined" == typeof stopPolling || 1 != stopPolling) && me(n, !0) && ht.apiCall(a.OPEN_IM, "longpolling", e, t, n, q, !0);
        }, Re = function(e, t, n, o) {
            ht.apiCall(a.BIG_GROUP_LONG_POLLING, "get_msg", e, t, n, o);
        }, ve = function e(t, n, o, r) {
            me(r, !0) && ht.apiCall(a.OPEN_IM, "getmsg", {
                Cookie: t,
                SyncFlag: n
            }, function(t) {
                if (t.MsgList && t.MsgList.length) for (var n in t.MsgList) te.push(t.MsgList[n]);
                1 == t.SyncFlag ? e(t.Cookie, t.SyncFlag, o, r) : (t.MsgList = te, te = [], o && o(t));
            }, r);
        }, Ne = function(e, t, n, o) {
            if (me(o, !0)) {
                var r = [];
                for (var i in t) {
                    var s = {
                        To_Account: t[i].toAccount,
                        LastedMsgTime: t[i].lastedMsgTime
                    };
                    r.push(s);
                }
                ht.apiCall(a.OPEN_IM, "msgreaded", {
                    C2CMsgReaded: {
                        Cookie: e,
                        C2CMsgReadedItem: r
                    }
                }, n, o);
            }
        }, Pe = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.OPEN_IM, "deletemsg", e, t, n);
        }, be = function e(t, n, o) {
            me(o, !0) && ht.apiCall(a.OPEN_IM, "getroammsg", t, function(r) {
                var i = t.MaxCnt, s = r.Complete, u = r.MaxCnt, a = r.MsgKey, l = r.LastMsgTime;
                if (r.MsgList && r.MsgList.length) for (var c in r.MsgList) ne.push(r.MsgList[c]);
                var p = null;
                0 == s && u < i && (p = {
                    Peer_Account: t.Peer_Account,
                    MaxCnt: i - u,
                    LastMsgTime: l,
                    MsgKey: a
                }), p ? e(p, n, o) : (r.MsgList = ne, ne = [], n && n(r));
            }, o);
        }, Le = function(e, t, n) {
            if (me(n, !0)) {
                for (var o = {
                    Type: e.Type,
                    Name: e.Name
                }, r = [], i = 0; i < e.MemberList.length; i++) r.push({
                    Member_Account: e.MemberList[i]
                });
                o.MemberList = r, e.GroupId && (o.GroupId = e.GroupId), e.Owner_Account && (o.Owner_Account = e.Owner_Account), 
                e.Introduction && (o.Introduction = e.Introduction), e.Notification && (o.Notification = e.Notification), 
                e.MaxMemberCount && (o.MaxMemberCount = e.MaxMemberCount), e.ApplyJoinOption && (o.ApplyJoinOption = e.ApplyJoinOption), 
                e.AppDefinedData && (o.AppDefinedData = e.AppDefinedData), e.FaceUrl && (o.FaceUrl = e.FaceUrl), 
                ht.apiCall(a.GROUP, "create_group", o, t, n);
            }
        }, Ue = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "create_group", e, t, n);
        }, De = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "modify_group_base_info", e, t, n);
        }, ke = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, t, n);
        }, we = function(e, t, n) {
            var o;
            o = me(n, !1) ? a.GROUP : a.BIG_GROUP, ht.apiCall(o, "apply_join_group", {
                GroupId: e.GroupId,
                ApplyMsg: e.ApplyMsg,
                UserDefinedField: e.UserDefinedField
            }, function(o) {
                if (o.JoinedStatus && "JoinedSuccess" == o.JoinedStatus) {
                    if (!o.LongPollingKey) return void (n && n(ue.getReturnError("The type of group is not AVChatRoom: groupid=" + e.GroupId, -12)));
                    Gt.resetBigGroupLongPollingInfo(), Gt.setBigGroupLongPollingOn(!0), Gt.setBigGroupLongPollingKey(o.LongPollingKey), 
                    Gt.setBigGroupLongPollingMsgMap(e.GroupId, 0), Gt.bigGroupLongPolling();
                }
                t && t(o);
            }, function(e) {
                n && n(e);
            });
        }, qe = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "handle_apply_join_group", {
                GroupId: e.GroupId,
                Applicant_Account: e.Applicant_Account,
                HandleMsg: e.HandleMsg,
                Authentication: e.Authentication,
                MsgKey: e.MsgKey,
                ApprovalMsg: e.ApprovalMsg,
                UserDefinedField: e.UserDefinedField
            }, t, function(e) {
                if (10024 == e.ErrorCode) {
                    if (t) {
                        var o = {
                            ActionStatus: d.OK,
                            ErrorCode: 0,
                            ErrorInfo: "该申请已经被处理过"
                        };
                        t(o);
                    }
                } else n && n(e);
            });
        }, xe = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "quit_group", {
                GroupId: e.GroupId
            }, t, n);
        }, Be = function(e, t, n) {
            var o;
            o = me(n, !1) ? a.GROUP : a.BIG_GROUP, Gt.resetBigGroupLongPollingInfo(), ht.apiCall(o, "quit_group", {
                GroupId: e.GroupId
            }, function(e) {
                Gt.resetBigGroupLongPollingInfo(), t && t(e);
            }, n);
        }, Ke = function(e, t, n) {
            ht.apiCall(a.GROUP, "search_group", e, t, n);
        }, ze = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "get_group_public_info", {
                GroupIdList: e.GroupIdList,
                ResponseFilter: {
                    GroupBasePublicInfoFilter: e.GroupBasePublicInfoFilter
                }
            }, function(e) {
                if (e.ErrorInfo = "", e.GroupInfo) for (var o in e.GroupInfo) {
                    var r = e.GroupInfo[o].ErrorCode;
                    r > 0 && (e.ActionStatus = d.FAIL, e.GroupInfo[o].ErrorInfo = "[" + r + "]" + e.GroupInfo[o].ErrorInfo, 
                    e.ErrorInfo += e.GroupInfo[o].ErrorInfo + "\n");
                }
                e.ActionStatus == d.FAIL ? n && n(e) : t && t(e);
            }, n);
        }, Ve = function(e, t, n) {
            if (me(n, !0)) {
                var o = {
                    GroupIdList: e.GroupIdList,
                    ResponseFilter: {
                        GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                        MemberInfoFilter: e.MemberInfoFilter
                    }
                };
                e.AppDefinedDataFilter_Group && (o.ResponseFilter.AppDefinedDataFilter_Group = e.AppDefinedDataFilter_Group), 
                e.AppDefinedDataFilter_GroupMember && (o.ResponseFilter.AppDefinedDataFilter_GroupMember = e.AppDefinedDataFilter_GroupMember), 
                ht.apiCall(a.GROUP, "get_group_info", o, t, n);
            }
        }, Je = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "get_group_member_info", {
                GroupId: e.GroupId,
                Offset: e.Offset,
                Limit: e.Limit,
                MemberInfoFilter: e.MemberInfoFilter,
                MemberRoleFilter: e.MemberRoleFilter,
                AppDefinedDataFilter_GroupMember: e.AppDefinedDataFilter_GroupMember
            }, t, n);
        }, He = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "add_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberList: e.MemberList
            }, t, n);
        }, Ye = function(e, t, n) {
            if (me(n, !0)) {
                var o = {};
                e.GroupId && (o.GroupId = e.GroupId), e.Member_Account && (o.Member_Account = e.Member_Account), 
                e.Role && (o.Role = e.Role), e.MsgFlag && (o.MsgFlag = e.MsgFlag), e.ShutUpTime && (o.ShutUpTime = e.ShutUpTime), 
                e.NameCard && (o.NameCard = e.NameCard), e.AppMemberDefinedData && (o.AppMemberDefinedData = e.AppMemberDefinedData), 
                ht.apiCall(a.GROUP, "modify_group_member_info", o, t, n);
            }
        }, Xe = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "delete_group_member", {
                GroupId: e.GroupId,
                Silence: e.Silence,
                MemberToDel_Account: e.MemberToDel_Account,
                Reason: e.Reason
            }, t, n);
        }, Qe = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "destroy_group", {
                GroupId: e.GroupId
            }, t, n);
        }, We = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "change_group_owner", e, t, n);
        }, je = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "get_joined_group_list", {
                Member_Account: e.Member_Account,
                Limit: e.Limit,
                Offset: e.Offset,
                GroupType: e.GroupType,
                ResponseFilter: {
                    GroupBaseInfoFilter: e.GroupBaseInfoFilter,
                    SelfInfoFilter: e.SelfInfoFilter
                }
            }, t, n);
        }, $e = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "get_role_in_group", {
                GroupId: e.GroupId,
                User_Account: e.User_Account
            }, t, n);
        }, Ze = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "forbid_send_msg", {
                GroupId: e.GroupId,
                Members_Account: e.Members_Account,
                ShutUpTime: e.ShutUpTime
            }, t, n);
        }, et = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "send_group_system_notification", e, t, n);
        }, tt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "group_msg_get", {
                GroupId: e.GroupId,
                ReqMsgSeq: e.ReqMsgSeq,
                ReqMsgNumber: e.ReqMsgNumber
            }, t, n);
        }, nt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.GROUP, "msg_read_report", {
                GroupId: e.GroupId,
                MsgReadedSeq: e.MsgReadedSeq
            }, t, n);
        }, ot = function(e) {
            var t = [];
            if (e.Fail_Account && e.Fail_Account.length && (t = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var n in e.Invalid_Account) t.push(e.Invalid_Account[n]);
            if (t.length) {
                e.ActionStatus = d.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "";
                for (var o in t) {
                    var r = t[o];
                    for (var i in e.ResultItem) if (e.ResultItem[i].To_Account == r) {
                        var s = e.ResultItem[i].ResultCode;
                        e.ResultItem[i].ResultInfo = "[" + s + "]" + e.ResultItem[i].ResultInfo, e.ErrorInfo += e.ResultItem[i].ResultInfo + "\n";
                        break;
                    }
                }
            }
            return e;
        }, rt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "friend_add", {
                From_Account: W.identifier,
                AddFriendItem: e.AddFriendItem
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, it = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "friend_delete", {
                From_Account: W.identifier,
                To_Account: e.To_Account,
                DeleteType: e.DeleteType
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, st = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "pendency_get", {
                From_Account: W.identifier,
                PendencyType: e.PendencyType,
                StartTime: e.StartTime,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n);
        }, ut = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "pendency_delete", {
                From_Account: W.identifier,
                PendencyType: e.PendencyType,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, at = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "friend_response", {
                From_Account: W.identifier,
                ResponseFriendItem: e.ResponseFriendItem
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, lt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "friend_get_all", {
                From_Account: W.identifier,
                TimeStamp: e.TimeStamp,
                StartIndex: e.StartIndex,
                GetCount: e.GetCount,
                LastStandardSequence: e.LastStandardSequence,
                TagList: e.TagList
            }, t, n);
        }, ct = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.PROFILE, "portrait_get", {
                From_Account: W.identifier,
                To_Account: e.To_Account,
                TagList: e.TagList
            }, function(e) {
                var o = [];
                if (e.Fail_Account && e.Fail_Account.length && (o = e.Fail_Account), e.Invalid_Account && e.Invalid_Account.length) for (var r in e.Invalid_Account) o.push(e.Invalid_Account[r]);
                if (o.length) {
                    e.ActionStatus = d.FAIL, e.ErrorCode = 99999, e.ErrorInfo = "";
                    for (var i in o) {
                        var s = o[i];
                        for (var u in e.UserProfileItem) if (e.UserProfileItem[u].To_Account == s) {
                            var a = e.UserProfileItem[u].ResultCode;
                            e.UserProfileItem[u].ResultInfo = "[" + a + "]" + e.UserProfileItem[u].ResultInfo, 
                            e.ErrorInfo += "账号:" + s + "," + e.UserProfileItem[u].ResultInfo + "\n";
                            break;
                        }
                    }
                }
                e.ActionStatus == d.FAIL ? n && n(e) : t && t(e);
            }, n);
        }, pt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.PROFILE, "portrait_set", {
                From_Account: W.identifier,
                ProfileItem: e.ProfileItem
            }, function(n) {
                for (var o in e.ProfileItem) {
                    var r = e.ProfileItem[o];
                    if ("Tag_Profile_IM_Nick" == r.Tag) {
                        W.identifierNick = r.Value;
                        break;
                    }
                }
                t && t(n);
            }, n);
        }, ft = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "black_list_add", {
                From_Account: W.identifier,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, gt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "black_list_delete", {
                From_Account: W.identifier,
                To_Account: e.To_Account
            }, function(e) {
                var o = ot(e);
                o.ActionStatus == d.FAIL ? n && n(o) : t && t(o);
            }, n);
        }, dt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.FRIEND, "black_list_get", {
                From_Account: W.identifier,
                StartIndex: e.StartIndex,
                MaxLimited: e.MaxLimited,
                LastSequence: e.LastSequence
            }, t, n);
        }, mt = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.RECENT_CONTACT, "get", {
                From_Account: W.identifier,
                Count: e.Count
            }, t, n);
        }, It = function(e, t, n) {
            if (me(n, !0)) {
                var o;
                o = Ie() ? "pic_up" : "pic_up_test", ht.apiCall(a.PIC, o, {
                    App_Version: h.APP_VERSION,
                    From_Account: W.identifier,
                    To_Account: e.To_Account,
                    Seq: e.Seq,
                    Timestamp: e.Timestamp,
                    Random: e.Random,
                    File_Str_Md5: e.File_Str_Md5,
                    File_Size: e.File_Size,
                    File_Type: e.File_Type,
                    Server_Ver: h.SERVER_VERSION,
                    Auth_Key: X,
                    Busi_Id: e.Busi_Id,
                    PkgFlag: e.PkgFlag,
                    Slice_Offset: e.Slice_Offset,
                    Slice_Size: e.Slice_Size,
                    Slice_Data: e.Slice_Data
                }, t, n);
            }
        }, Mt = function(e, t) {
            me(t, !0) && ht.apiCall(a.OPEN_IM, "authkey", {}, e, t);
        }, Et = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.IM_OPEN_STAT, "web_report", e, t, n);
        }, _t = function(e, t, n) {
            me(n, !0) && ht.apiCall(a.OPEN_IM, "getlongpollingid", {}, function(e) {
                t && t(e);
            }, n);
        }, yt = function(e, t, n) {
            ht.apiCall(a.PIC, "apply_download", e, t, n);
        };
        u = "wechat";
        var ht = new function() {
            var e = null;
            this.init = function(t, n, o) {
                t && (e = t);
            }, this.callBack = function(t) {
                e && e(t);
            }, this.clear = function() {
                e = null;
            }, this.apiCall = function(e, t, n, o, r, i, s) {
                var u = Me(e, t, 0, r);
                0 != u && ge("POST", u, n, 0, 0, function(i) {
                    var s = null, a = "";
                    "pic_up" == t && (n.Slice_Data = "");
                    var l = "\n request url: \n" + u + "\n request body: \n" + JSON.stringify(n) + "\n response: \n" + JSON.stringify(i);
                    i.ActionStatus == d.OK ? (ae.info("[" + e + "][" + t + "]success: " + l), o && o(i), 
                    s = 0, a = "") : (s = i.ErrorCode, a = i.ErrorInfo, r && (i.SrcErrorInfo = i.ErrorInfo, 
                    i.ErrorInfo = "[" + e + "][" + t + "]failed: " + l, "longpolling" == t && 60008 == i.ErrorCode || ae.error(i.ErrorInfo), 
                    r(i))), Ae(t, s, a);
                }, function(e) {
                    r && r(e), Ae(t, e.ErrorCode, e.ErrorInfo);
                });
            };
        }(), Ct = function e(t, n, o, r, i, s) {
            this._impl = {
                skey: e.skey(t, n),
                type: t,
                id: n,
                name: o,
                icon: r,
                unread: 0,
                isAutoRead: !1,
                time: i >= 0 ? i : 0,
                curMaxMsgSeq: s >= 0 ? s : 0,
                msgs: [],
                isFinished: 1
            };
        };
        Ct.skey = function(e, t) {
            return e + t;
        }, Ct.prototype.type = function() {
            return this._impl.type;
        }, Ct.prototype.id = function() {
            return this._impl.id;
        }, Ct.prototype.name = function() {
            return this._impl.name;
        }, Ct.prototype.icon = function() {
            return this._impl.icon;
        }, Ct.prototype.unread = function(e) {
            if (void 0 === e) return this._impl.unread;
            this._impl.unread = e;
        }, Ct.prototype.isFinished = function(e) {
            if (void 0 === e) return this._impl.isFinished;
            this._impl.isFinished = e;
        }, Ct.prototype.time = function() {
            return this._impl.time;
        }, Ct.prototype.curMaxMsgSeq = function(e) {
            if (void 0 === e) return this._impl.curMaxMsgSeq;
            this._impl.curMaxMsgSeq = e;
        }, Ct.prototype.msgCount = function() {
            return this._impl.msgs.length;
        }, Ct.prototype.msg = function(e) {
            return this._impl.msgs[e];
        }, Ct.prototype.msgs = function() {
            return this._impl.msgs;
        }, Ct.prototype._impl_addMsg = function(e) {
            this._impl.msgs.push(e), e.time > this._impl.time && (this._impl.time = e.time), 
            e.seq > this._impl.curMaxMsgSeq && (this._impl.curMaxMsgSeq = e.seq), e.isSend || this._impl.isAutoRead || this._impl.unread++;
        };
        var Tt = function(e, t) {
            this.toAccount = e, this.lastedMsgTime = t;
        }, At = function(e, t, n, o, r, i, s, u) {
            this.sess = e, this.subType = s >= 0 ? s : 0, this.fromAccount = i, this.fromAccountNick = u || i, 
            this.isSend = Boolean(t), this.seq = n >= 0 ? n : ce(), this.random = o >= 0 ? o : pe(), 
            this.time = r >= 0 ? r : le(), this.elems = [];
        };
        At.prototype.getSession = function() {
            return this.sess;
        }, At.prototype.getType = function() {
            return this.subType;
        }, At.prototype.getSubType = function() {
            return this.subType;
        }, At.prototype.getFromAccount = function() {
            return this.fromAccount;
        }, At.prototype.getFromAccountNick = function() {
            return this.fromAccountNick;
        }, At.prototype.getIsSend = function() {
            return this.isSend;
        }, At.prototype.getSeq = function() {
            return this.seq;
        }, At.prototype.getTime = function() {
            return this.time;
        }, At.prototype.getRandom = function() {
            return this.random;
        }, At.prototype.getElems = function() {
            return this.elems;
        }, At.prototype.addText = function(e) {
            this.addElem(new o.Msg.Elem(m.TEXT, e));
        }, At.prototype.addFace = function(e) {
            this.addElem(new o.Msg.Elem(m.FACE, e));
        }, At.prototype.addImage = function(e) {
            this.addElem(new o.Msg.Elem(m.IMAGE, e));
        }, At.prototype.addLocation = function(e) {
            this.addElem(new o.Msg.Elem(m.LOCATION, e));
        }, At.prototype.addFile = function(e) {
            this.addElem(new o.Msg.Elem(m.FILE, e));
        }, At.prototype.addCustom = function(e) {
            this.addElem(new o.Msg.Elem(m.CUSTOM, e));
        }, At.prototype.addElem = function(e) {
            this.elems.push(e);
        }, At.prototype.toHtml = function() {
            var e = "";
            for (var t in this.elems) e += this.elems[t].toHtml();
            return e;
        }, (At.Elem = function(e, t) {
            this.type = e, this.content = t;
        }).prototype.getType = function() {
            return this.type;
        }, At.Elem.prototype.getContent = function() {
            return this.content;
        }, At.Elem.prototype.toHtml = function() {
            return this.content.toHtml();
        }, At.Elem.Text = function(e) {
            this.text = ue.xssFilter(e);
        }, At.Elem.Text.prototype.getText = function() {
            return this.text;
        }, At.Elem.Text.prototype.toHtml = function() {
            return this.text;
        }, At.Elem.Face = function(e, t) {
            this.index = e, this.data = t;
        }, At.Elem.Face.prototype.getIndex = function() {
            return this.index;
        }, At.Elem.Face.prototype.getData = function() {
            return this.data;
        }, At.Elem.Face.prototype.toHtml = function() {
            var e = null, t = ie[this.data], n = se[t];
            return n && n[1] && (e = n[1]), e ? "<img src='" + e + "'/>" : this.data;
        }, At.Elem.Location = function(e, t, n) {
            this.latitude = t, this.longitude = e, this.desc = n;
        }, At.Elem.Location.prototype.getLatitude = function() {
            return this.latitude;
        }, At.Elem.Location.prototype.getLongitude = function() {
            return this.longitude;
        }, At.Elem.Location.prototype.getDesc = function() {
            return this.desc;
        }, At.Elem.Location.prototype.toHtml = function() {
            return "经度=" + this.longitude + ",纬度=" + this.latitude + ",描述=" + this.desc;
        }, At.Elem.Images = function(e) {
            this.UUID = e, this.ImageInfoArray = [];
        }, At.Elem.Images.prototype.addImage = function(e) {
            this.ImageInfoArray.push(e);
        }, At.Elem.Images.prototype.toHtml = function() {
            var e = this.getImage(I.SMALL), t = this.getImage(I.LARGE), n = this.getImage(I.ORIGIN);
            return t || (t = e), n || (n = e), "<img src='" + e.getUrl() + "#" + t.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + t.getUrl() + "' onclick='imageClick(this)' />";
        }, At.Elem.Images.prototype.getImageId = function() {
            return this.UUID;
        }, At.Elem.Images.prototype.getImage = function(e) {
            for (var t in this.ImageInfoArray) if (this.ImageInfoArray[t].getType() == e) return this.ImageInfoArray[t];
            return null;
        }, At.Elem.Images.Image = function(e, t, n, o, r) {
            this.type = e, this.size = t, this.width = n, this.height = o, this.url = r;
        }, At.Elem.Images.Image.prototype.getType = function() {
            return this.type;
        }, At.Elem.Images.Image.prototype.getSize = function() {
            return this.size;
        }, At.Elem.Images.Image.prototype.getWidth = function() {
            return this.width;
        }, At.Elem.Images.Image.prototype.getHeight = function() {
            return this.height;
        }, At.Elem.Images.Image.prototype.getUrl = function() {
            return this.url;
        }, At.Elem.Sound = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.second = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == p.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? ye(e, o, 0, i, r, this.busiId, y.SOUND) : this.downUrl = Ee(e, o);
        }, At.Elem.Sound.prototype.getUUID = function() {
            return this.uuid;
        }, At.Elem.Sound.prototype.getSecond = function() {
            return this.second;
        }, At.Elem.Sound.prototype.getSize = function() {
            return this.size;
        }, At.Elem.Sound.prototype.getSenderId = function() {
            return this.senderId;
        }, At.Elem.Sound.prototype.getDownUrl = function() {
            return this.downUrl;
        }, At.Elem.Sound.prototype.toHtml = function() {
            return "ie" == u.type && parseInt(u.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + this.downUrl : '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
        }, At.Elem.File = function(e, t, n, o, r, i, s) {
            this.uuid = e, this.name = t, this.size = n, this.senderId = o, this.receiverId = r, 
            this.downFlag = i, this.busiId = s == p.C2C ? 2 : 1, void 0 !== i && void 0 !== busiId ? ye(e, o, 0, i, r, this.busiId, y.FILE) : this.downUrl = _e(e, o, t);
        }, At.Elem.File.prototype.getUUID = function() {
            return this.uuid;
        }, At.Elem.File.prototype.getName = function() {
            return this.name;
        }, At.Elem.File.prototype.getSize = function() {
            return this.size;
        }, At.Elem.File.prototype.getSenderId = function() {
            return this.senderId;
        }, At.Elem.File.prototype.getDownUrl = function() {
            return this.downUrl;
        }, At.Elem.File.prototype.getDownFlag = function() {
            return this.downFlag;
        }, At.Elem.File.prototype.toHtml = function() {
            var e, t;
            return e = this.size, t = "Byte", this.size >= 1024 && (e = Math.round(this.size / 1024), 
            t = "KB"), '<a href="javascript" onclick="webim.onDownFile("' + this.uuid + '")" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + this.name + "(" + e + t + ")</i></a>";
        }, At.Elem.GroupTip = function(e, t, n, o, r) {
            this.opType = e, this.opUserId = t, this.groupId = n, this.groupName = o, this.userIdList = r || [], 
            this.groupInfoList = [], this.memberInfoList = [], this.groupMemberNum = null;
        }, At.Elem.GroupTip.prototype.addGroupInfo = function(e) {
            this.groupInfoList.push(e);
        }, At.Elem.GroupTip.prototype.addMemberInfo = function(e) {
            this.memberInfoList.push(e);
        }, At.Elem.GroupTip.prototype.getOpType = function() {
            return this.opType;
        }, At.Elem.GroupTip.prototype.getOpUserId = function() {
            return this.opUserId;
        }, At.Elem.GroupTip.prototype.getGroupId = function() {
            return this.groupId;
        }, At.Elem.GroupTip.prototype.getGroupName = function() {
            return this.groupName;
        }, At.Elem.GroupTip.prototype.getUserIdList = function() {
            return this.userIdList;
        }, At.Elem.GroupTip.prototype.getGroupInfoList = function() {
            return this.groupInfoList;
        }, At.Elem.GroupTip.prototype.getMemberInfoList = function() {
            return this.memberInfoList;
        }, At.Elem.GroupTip.prototype.getGroupMemberNum = function() {
            return this.groupMemberNum;
        }, At.Elem.GroupTip.prototype.setGroupMemberNum = function(e) {
            return this.groupMemberNum = e;
        }, At.Elem.GroupTip.prototype.toHtml = function() {
            var e = "[群提示消息]";
            switch (this.opType) {
              case O.JOIN:
                e += this.opUserId + "邀请了";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "加入该群";
                break;

              case O.QUIT:
                e += this.opUserId + "主动退出该群";
                break;

              case O.KICK:
                e += this.opUserId + "将";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "踢出该群";
                break;

              case O.SET_ADMIN:
                e += this.opUserId + "将";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "设为管理员";
                break;

              case O.CANCEL_ADMIN:
                e += this.opUserId + "取消";
                for (var t in this.userIdList) if (e += this.userIdList[t] + ",", this.userIdList.length > 10 && 9 == t) {
                    e += "等" + this.userIdList.length + "人";
                    break;
                }
                e += "的管理员资格";
                break;

              case O.MODIFY_GROUP_INFO:
                e += this.opUserId + "修改了群资料：";
                for (var t in this.groupInfoList) {
                    var n = this.groupInfoList[t].getType(), o = this.groupInfoList[t].getValue();
                    switch (n) {
                      case F.FACE_URL:
                        e += "群头像为" + o + "; ";
                        break;

                      case F.NAME:
                        e += "群名称为" + o + "; ";
                        break;

                      case F.OWNER:
                        e += "群主为" + o + "; ";
                        break;

                      case F.NOTIFICATION:
                        e += "群公告为" + o + "; ";
                        break;

                      case F.INTRODUCTION:
                        e += "群简介为" + o + "; ";
                        break;

                      default:
                        e += "未知信息为:type=" + n + ",value=" + o + "; ";
                    }
                }
                break;

              case O.MODIFY_MEMBER_INFO:
                e += this.opUserId + "修改了群成员资料:";
                for (var t in this.memberInfoList) {
                    var r = this.memberInfoList[t].getUserId(), i = this.memberInfoList[t].getShutupTime();
                    if (e += r + ": ", e += null != i && void 0 !== i ? 0 == i ? "取消禁言; " : "禁言" + i + "秒; " : " shutupTime为空", 
                    this.memberInfoList.length > 10 && 9 == t) {
                        e += "等" + this.memberInfoList.length + "人";
                        break;
                    }
                }
                break;

              case O.READED:
                Log.info("消息已读同步");
                break;

              default:
                e += "未知群提示消息类型：type=" + this.opType;
            }
            return e;
        }, At.Elem.GroupTip.GroupInfo = function(e, t) {
            this.type = e, this.value = t;
        }, At.Elem.GroupTip.GroupInfo.prototype.getType = function() {
            return this.type;
        }, At.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
            return this.value;
        }, At.Elem.GroupTip.MemberInfo = function(e, t) {
            this.userId = e, this.shutupTime = t;
        }, At.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
            return this.userId;
        }, At.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
            return this.shutupTime;
        }, At.Elem.Custom = function(e, t, n) {
            this.data = e, this.desc = t, this.ext = n;
        }, At.Elem.Custom.prototype.getData = function() {
            return this.data;
        }, At.Elem.Custom.prototype.getDesc = function() {
            return this.desc;
        }, At.Elem.Custom.prototype.getExt = function() {
            return this.ext;
        }, At.Elem.Custom.prototype.toHtml = function() {
            return this.data;
        };
        var St = new function() {
            var e = {}, t = [];
            n = {}, this.cookie = "", this.syncFlag = 0;
            var o = function(t) {
                for (var n in e) t(e[n]);
            }, r = function(e) {
                var t = !1, o = e.sess._impl.skey, r = e.isSend + e.seq + e.random;
                return n[o] && n[o][r] && (t = !0), n[o] ? n[o][r] = {
                    time: e.time
                } : (n[o] = {}, n[o][r] = {
                    time: e.time
                }), t;
            };
            this.sessMap = function() {
                return e;
            }, this.sessCount = function() {
                return t.length;
            }, this.sessByTypeId = function(t, n) {
                var o = Ct.skey(t, n);
                return void 0 === o || null == o ? null : e[o];
            }, this.delSessByTypeId = function(t, o) {
                var r = Ct.skey(t, o);
                return void 0 !== r && null != r && (e[r] && (delete e[r], delete n[r]), !0);
            }, this.resetCookieAndSyncFlag = function() {
                this.cookie = "", this.syncFlag = 0;
            }, this.setAutoRead = function(e, t, n) {
                if (n && o(function(e) {
                    e._impl.isAutoRead = !1;
                }), e && (e._impl.isAutoRead = t, t)) if (e._impl.unread = 0, e._impl.type == p.C2C) {
                    var r = [];
                    r.push(new Tt(e._impl.id, e._impl.time)), Ne(St.cookie, r, function(e) {
                        ae.info("[setAutoRead]: c2CMsgReaded success");
                    }, function(e) {
                        ae.error("[setAutoRead}: c2CMsgReaded failed:" + e.ErrorInfo);
                    });
                } else if (e._impl.type == p.GROUP) {
                    var i = {
                        GroupId: e._impl.id,
                        MsgReadedSeq: e._impl.curMaxMsgSeq
                    };
                    nt(i, function(e) {
                        ae.info("groupMsgReaded success");
                    }, function(e) {
                        ae.error("groupMsgReaded failed:" + e.ErrorInfo);
                    });
                }
            }, this.c2CMsgReaded = function(e, t, n) {
                var o = [];
                o.push(new Tt(e.To_Account, e.LastedMsgTime)), Ne(St.cookie, o, function(e) {
                    t && (ae.info("c2CMsgReaded success"), t(e));
                }, function(e) {
                    n && (ae.error("c2CMsgReaded failed:" + e.ErrorInfo), n(e));
                });
            }, this.addSession = function(t) {
                e[t._impl.skey] = t;
            }, this.delSession = function(t) {
                delete e[t._impl.skey];
            }, this.addMsg = function(t) {
                if (r(t)) return !1;
                var n = t.sess;
                return e[n._impl.skey] || this.addSession(n), t.time > n._impl.time && (n._impl.time = t.time), 
                t.seq > n._impl.curMaxMsgSeq && (n._impl.curMaxMsgSeq = t.seq), t.isSend || n._impl.isAutoRead || n._impl.unread++, 
                !0;
            }, this.updateTimeline = function() {
                var e = new Array();
                o(function(t) {
                    e.push(t);
                }), e.sort(function(e, t) {
                    return t.time - e.time;
                }), t = e;
            };
        }(), Gt = new function() {
            var e = null, t = null, n = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null,
                9: null,
                10: null,
                11: null,
                15: null,
                255: null
            }, o = {
                1: null,
                2: null,
                3: null,
                4: null,
                5: null,
                6: null,
                7: null,
                8: null
            }, r = {
                1: null
            }, i = null, s = !1, u = 0, a = 0, l = null, c = !1, f = 0, g = 90, I = null, M = {}, E = 0, _ = {}, y = {};
            this.setLongPollingOn = function(e) {
                s = e;
            }, this.getLongPollingOn = function() {
                return s;
            }, this.resetLongPollingInfo = function() {
                s = !1, u = 0, a = 0;
            }, this.setBigGroupLongPollingOn = function(e) {
                c = e;
            }, this.setBigGroupLongPollingKey = function(e) {
                I = e;
            }, this.resetBigGroupLongPollingInfo = function() {
                c = !1, f = 0, I = null, M = {};
            }, this.setBigGroupLongPollingMsgMap = function(e, t) {
                var n = M[e];
                n ? (n = parseInt(n) + t, M[e] = n) : M[e] = t;
            }, this.clear = function() {
                t = null, n = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null,
                    10: null,
                    11: null,
                    15: null,
                    255: null
                }, o = {
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null
                }, r = {
                    1: null
                }, e = null, s = !1, u = 0, a = 0, l = null, c = !1, f = 0, I = null, M = {}, y = {}, 
                Y = [], X = null, Q = null;
            };
            var h = function(e, t) {
                Mt(function(t) {
                    Y = t.IpList, X = t.AuthKey, Q = t.ExpireTime, e && e(t);
                }, function(e) {
                    ae.error("initIpAndAuthkey failed:" + e.ErrorInfo), t && t(e);
                });
            }, T = function(e, t) {
                var n = {
                    Member_Account: W.identifier,
                    Limit: 1e3,
                    Offset: 0,
                    GroupBaseInfoFilter: [ "NextMsgSeq" ]
                };
                je(n, function(t) {
                    if (!t.GroupIdList || 0 == t.GroupIdList.length) return ae.info("initMyGroupMaxSeqs: 目前还没有加入任何群组"), 
                    void (e && e(t));
                    for (var n = 0; n < t.GroupIdList.length; n++) {
                        var o = t.GroupIdList[n].GroupId, r = t.GroupIdList[n].NextMsgSeq - 1;
                        _[o] = r;
                    }
                    e && e(t);
                }, function(e) {
                    ae.error("initMyGroupMaxSeqs failed:" + e.ErrorInfo), t && t(e);
                });
            }, P = function(e, t, n) {
                E++;
                var o = {
                    GroupId: e,
                    ReqMsgSeq: t,
                    ReqMsgNumber: n
                };
                ae.warn("第" + E + "次补齐群消息,参数=" + JSON.stringify(o)), Gt.syncGroupMsgs(o);
            }, L = function(e, t) {
                var n = _[e];
                n ? t > n && (_[e] = t) : _[e] = t;
            }, K = function(e, t) {
                for (var n in e) {
                    var o = e[n];
                    if (o.From_Account) {
                        var r = re(o, !1, !0);
                        r && t.push(r), L(o.ToGroupId, o.MsgSeq);
                    }
                }
                return t;
            }, z = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > a && (ae.warn("noticeSeq=" + a + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    a = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) {
                    var l = o[u].max - o[u].min + 1, c = _[u];
                    c ? o[u].min - c > 1 || o[u].msgs.length < l ? (ae.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + c + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + l), 
                    P(u, o[u].max, o[u].max - c), L(u, o[u].max)) : r = K(o[u].msgs, r) : (ae.warn("不存在该群的最大消息seq，群id=" + u), 
                    o[u].msgs.length < l ? (ae.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + l), 
                    P(u, o[u].max, l), L(u, o[u].max)) : r = K(o[u].msgs, r));
                }
                r.length && St.updateTimeline(), e && r.length && e(r);
            }, V = function(t, n) {
                var o = {}, r = [];
                for (var i in n) {
                    var s = o[n[i].ToGroupId];
                    s || (s = o[n[i].ToGroupId] = {
                        min: 99999999,
                        max: -1,
                        msgs: []
                    }), n[i].NoticeSeq > a && (ae.warn("noticeSeq=" + a + ",msgNoticeSeq=" + n[i].NoticeSeq), 
                    a = n[i].NoticeSeq), n[i].Event = t, o[n[i].ToGroupId].msgs.push(n[i]), n[i].MsgSeq < s.min && (o[n[i].ToGroupId].min = n[i].MsgSeq), 
                    n[i].MsgSeq > s.max && (o[n[i].ToGroupId].max = n[i].MsgSeq);
                }
                for (var u in o) {
                    var l = o[u].max - o[u].min + 1, c = _[u];
                    c ? o[u].min - c > 1 || o[u].msgs.length < l ? (ae.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + c + ", minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + l), 
                    P(u, o[u].max, o[u].max - c), L(u, o[u].max)) : r = K(o[u].msgs, r) : (ae.warn("不存在该群的最大消息seq，群id=" + u), 
                    o[u].msgs.length < l ? (ae.warn("发起一次补齐群消息请求,minMsgSeq=" + o[u].min + ", maxMsgSeq=" + o[u].max + ", msgs.length=" + o[u].msgs.length + ", tempCount=" + l), 
                    P(u, o[u].max, l), L(u, o[u].max)) : r = K(o[u].msgs, r));
                }
                r.length && St.updateTimeline(), e && r.length && e(r);
            }, J = function(e, t) {
                for (var o in e) {
                    var r = e[o], i = r.MsgBody, s = i.ReportType;
                    0 == t && r.NoticeSeq && r.NoticeSeq > a && (a = r.NoticeSeq);
                    r.GroupInfo.To_Account;
                    if (t) {
                        var u = r.ToGroupId + "_" + s + "_" + i.Operator_Account;
                        if (y[u]) {
                            ae.warn("收到重复的群系统消息：key=" + u);
                            continue;
                        }
                        y[u] = !0;
                    }
                    var l = {
                        SrcFlag: 0,
                        ReportType: s,
                        GroupId: r.ToGroupId,
                        GroupName: r.GroupInfo.GroupName,
                        Operator_Account: i.Operator_Account,
                        MsgTime: r.MsgTimeStamp,
                        groupReportTypeMsg: i
                    };
                    switch (s) {
                      case R.JOIN_GROUP_REQUEST:
                        l.RemarkInfo = i.RemarkInfo, l.MsgKey = i.MsgKey, l.Authentication = i.Authentication, 
                        l.UserDefinedField = r.UserDefinedField, l.From_Account = r.From_Account, l.MsgSeq = r.ClientSeq, 
                        l.MsgRandom = r.MsgRandom;
                        break;

                      case R.JOIN_GROUP_ACCEPT:
                      case R.JOIN_GROUP_REFUSE:
                        l.RemarkInfo = i.RemarkInfo;
                        break;

                      case R.KICK:
                      case R.DESTORY:
                      case R.CREATE:
                      case R.INVITED_JOIN_GROUP_REQUEST:
                      case R.QUIT:
                      case R.SET_ADMIN:
                      case R.CANCEL_ADMIN:
                      case R.REVOKE:
                      case R.READED:
                        break;

                      case R.CUSTOM:
                        l.MsgSeq = r.MsgSeq, l.UserDefinedField = i.UserDefinedField;
                        break;

                      default:
                        ae.error("未知群系统消息类型：reportType=" + s);
                    }
                    if (t) s == R.JOIN_GROUP_REQUEST && n[s] && n[s](l); else if (n[s]) if (s == R.READED) for (var c = l.groupReportTypeMsg.GroupReadInfoArray, p = 0, f = c.length; p < f; p++) {
                        var g = c[p];
                        n[s](g);
                    } else n[s](l);
                }
            }, H = function(e, t) {
                var n, r, i;
                for (var s in e) {
                    switch (n = e[s], r = n.PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > a && (a = n.NoticeSeq), 
                    i = {
                        Type: r
                    }, r) {
                      case v.FRIEND_ADD:
                        i.Accounts = n.FriendAdd_Account;
                        break;

                      case v.FRIEND_DELETE:
                        i.Accounts = n.FriendDel_Account;
                        break;

                      case v.PENDENCY_ADD:
                        i.PendencyList = n.PendencyAdd;
                        break;

                      case v.PENDENCY_DELETE:
                        i.Accounts = n.FrienPencydDel_Account;
                        break;

                      case v.BLACK_LIST_ADD:
                        i.Accounts = n.BlackListAdd_Account;
                        break;

                      case v.BLACK_LIST_DELETE:
                        i.Accounts = n.BlackListDel_Account;
                        break;

                      default:
                        ae.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(n));
                    }
                    t ? r == v.PENDENCY_ADD && o[r] && o[r](i) : o[r] && o[r](i);
                }
            }, j = function(e, t) {
                var n, o, i;
                for (var s in e) {
                    switch (n = e[s], o = n.PushType, 0 == t && n.NoticeSeq && n.NoticeSeq > a && (a = n.NoticeSeq), 
                    i = {
                        Type: o
                    }, o) {
                      case N.PROFILE_MODIFY:
                        i.Profile_Account = n.Profile_Account, i.ProfileList = n.ProfileList;
                        break;

                      default:
                        ae.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(n));
                    }
                    t ? o == N.PROFILE_MODIFY && r[o] && r[o](i) : r[o] && r[o](i);
                }
            }, $ = function(e) {
                var t = e.MsgBody, o = t.ReportType, r = (e.GroupInfo.To_Account, {
                    SrcFlag: 1,
                    ReportType: o,
                    GroupId: e.ToGroupId,
                    GroupName: e.GroupInfo.GroupName,
                    Operator_Account: t.Operator_Account,
                    MsgTime: e.MsgTimeStamp
                });
                switch (o) {
                  case R.JOIN_GROUP_REQUEST:
                    r.RemarkInfo = t.RemarkInfo, r.MsgKey = t.MsgKey, r.Authentication = t.Authentication, 
                    r.UserDefinedField = e.UserDefinedField, r.From_Account = e.From_Account, r.MsgSeq = e.ClientSeq, 
                    r.MsgRandom = e.MsgRandom;
                    break;

                  case R.JOIN_GROUP_ACCEPT:
                  case R.JOIN_GROUP_REFUSE:
                    r.RemarkInfo = t.RemarkInfo;
                    break;

                  case R.KICK:
                  case R.DESTORY:
                  case R.CREATE:
                  case R.INVITED_JOIN_GROUP_REQUEST:
                  case R.QUIT:
                  case R.SET_ADMIN:
                  case R.CANCEL_ADMIN:
                  case R.REVOKE:
                    break;

                  case R.CUSTOM:
                    r.MsgSeq = e.MsgSeq, r.UserDefinedField = t.UserDefinedField;
                    break;

                  default:
                    ae.error("未知群系统消息类型：reportType=" + o);
                }
                n[o] && n[o](r);
            }, Z = function(e) {
                for (var t = 0, n = e.length; t < n; t++) ee(e[t]);
            }, ee = function(e) {
                var t = e.SubMsgType;
                switch (t) {
                  case A.READED:
                    break;

                  default:
                    ae.error("未知C2c系统消息：reportType=" + reportType);
                }
                if (e.ReadC2cMsgNotify.UinPairReadArray && onC2cEventCallbacks[t]) for (var n = 0, o = e.ReadC2cMsgNotify.UinPairReadArray.length; n < o; n++) {
                    var r = e.ReadC2cMsgNotify.UinPairReadArray[n];
                    onC2cEventCallbacks[t](r);
                }
            };
            this.longPolling = function(e, t) {
                function n() {
                    Fe(o, function(e) {
                        for (var t in e.EventArray) {
                            var n = e.EventArray[t];
                            switch (n.Event) {
                              case C.C2C:
                                u = n.NotifySeq, ae.warn("longpolling: received new c2c msg"), Gt.syncMsgs();
                                break;

                              case C.GROUP_COMMON:
                                ae.warn("longpolling: received new group msgs"), V(n.Event, n.GroupMsgArray);
                                break;

                              case C.GROUP_TIP:
                                ae.warn("longpolling: received new group tips"), V(n.Event, n.GroupTips);
                                break;

                              case C.GROUP_SYSTEM:
                                ae.warn("longpolling: received new group system msgs"), J(n.GroupTips, !1);
                                break;

                              case C.FRIEND_NOTICE:
                                ae.warn("longpolling: received new friend system notice"), H(n.FriendListMod, !1);
                                break;

                              case C.PROFILE_NOTICE:
                                ae.warn("longpolling: received new profile system notice"), j(n.ProfileDataMod, !1);
                                break;

                              case C.C2C_COMMON:
                                a = n.C2cMsgArray[0].NoticeSeq, ae.warn("longpolling: received new c2c_common msg", a), 
                                z(n.Event, n.C2cMsgArray);
                                break;

                              case C.C2C_EVENT:
                                a = n.C2cNotifyMsgArray[0].NoticeSeq, ae.warn("longpolling: received new c2c_event msg"), 
                                Z(n.C2cNotifyMsgArray);
                                break;

                              default:
                                ae.error("longpolling收到未知新消息类型: Event=" + n.Event);
                            }
                        }
                        var o = {
                            ActionStatus: d.OK,
                            ErrorCode: 0
                        };
                        te(o);
                    }, function(e) {
                        te(e), t && t(e);
                    });
                }
                var o = {
                    Timeout: q / 1e3,
                    Cookie: {
                        NotifySeq: u,
                        NoticeSeq: a
                    }
                };
                x ? (o.Cookie.LongPollingId = x, n()) : _t(0, function(e) {
                    x = o.Cookie.LongPollingId = e.LongPollingId, q = e.Timeout > 60 ? q : 1e3 * e.Timeout, 
                    n();
                });
            }, this.bigGroupLongPolling = function(e, t) {
                Re({
                    StartSeq: f,
                    HoldTime: g,
                    Key: I
                }, function(t) {
                    var n = [];
                    if (f = t.NextSeq, g = t.HoldTime, I = t.Key, t.RspMsgList && t.RspMsgList.length > 0) {
                        for (var o, r, i, s = 0, u = t.RspMsgList.length - 1; u >= 0; u--) if (!(o = t.RspMsgList[u]).IsPlaceMsg && o.From_Account && o.MsgBody && 0 != o.MsgBody.length) switch (r = o.Event) {
                          case C.GROUP_COMMON:
                            ae.info("bigGroupLongPolling: return new group msg"), (i = re(o, !1, !1)) && n.push(i), 
                            s += 1;
                            break;

                          case C.GROUP_TIP:
                          case C.GROUP_TIP2:
                            ae.info("bigGroupLongPolling: return new group tip"), (i = re(o, !1, !1)) && n.push(i);
                            break;

                          case C.GROUP_SYSTEM:
                            ae.info("bigGroupLongPolling: new group system msg"), $(o);
                            break;

                          default:
                            ae.error("bigGroupLongPolling收到未知新消息类型: Event=" + r);
                        }
                        s > 0 && (Gt.setBigGroupLongPollingMsgMap(o.ToGroupId, s), ae.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(M)));
                    }
                    B = 0;
                    var a = {
                        ActionStatus: d.OK,
                        ErrorCode: b.ON,
                        ErrorInfo: "connection is ok..."
                    };
                    ht.callBack(a), e ? e(n) : l && l(n), c && Gt.bigGroupLongPolling();
                }, function(e) {
                    if (60008 != e.ErrorCode && (ae.error(e.ErrorInfo), B++), 91101 != e.ErrorCode && (ae.error("多实例登录，被kick"), 
                    i && i()), B < 10) c && Gt.bigGroupLongPolling(); else {
                        var n = {
                            ActionStatus: d.FAIL,
                            ErrorCode: b.OFF,
                            ErrorInfo: "connection is off"
                        };
                        ht.callBack(n);
                    }
                    t && t(e);
                }, 1e3 * g);
            };
            var te = function(e) {
                if (0 == e.ErrorCode || 60008 == e.ErrorCode) {
                    w = 0, k = !1;
                    var t, n = !1;
                    switch (D) {
                      case b.INIT:
                        n = !0, D = b.ON, t = "create connection successfully(INIT->ON)";
                        break;

                      case b.ON:
                        t = "connection is on...(ON->ON)";
                        break;

                      case b.RECONNECT:
                        D = b.ON, t = "connection is on...(RECONNECT->ON)";
                        break;

                      case b.OFF:
                        n = !0, D = b.RECONNECT, t = "reconnect successfully(OFF->RECONNECT)";
                    }
                    var o = {
                        ActionStatus: d.OK,
                        ErrorCode: D,
                        ErrorInfo: t
                    };
                    n && ht.callBack(o), s && Gt.longPolling();
                } else if (91101 == e.ErrorCode) ae.error("多实例登录，被kick"), i && i(); else if (w++, 
                ae.warn("longPolling接口第" + w + "次报错: " + e.ErrorInfo), w <= 10) setTimeout(ne, 100); else {
                    D = b.OFF;
                    var r = {
                        ActionStatus: d.FAIL,
                        ErrorCode: b.OFF,
                        ErrorInfo: "connection is off"
                    };
                    0 == k && ht.callBack(r), k = !0, ae.warn("5000毫秒之后,SDK会发起新的longPolling请求..."), 
                    setTimeout(ne, 5e3);
                }
            }, z = function(t, n) {
                var o = [], r = [];
                r = n;
                for (var i in r) {
                    var s, u, a, l = r[i];
                    l.From_Account == W.identifier ? (s = !0, u = l.To_Account, a = "") : (s = !1, u = l.From_Account, 
                    a = "");
                    var c = St.sessByTypeId(p.C2C, u);
                    c || (c = new Ct(p.C2C, u, u, a, 0, 0));
                    var f = new At(c, s, l.MsgSeq, l.MsgRandom, l.MsgTimeStamp, l.From_Account), g = null, d = null, I = null;
                    for (var M in l.MsgBody) {
                        switch (g = l.MsgBody[M], I = g.MsgType) {
                          case m.TEXT:
                            d = new At.Elem.Text(g.MsgContent.Text);
                            break;

                          case m.FACE:
                            d = new At.Elem.Face(g.MsgContent.Index, g.MsgContent.Data);
                            break;

                          case m.IMAGE:
                            d = new At.Elem.Images(g.MsgContent.UUID);
                            for (var E in g.MsgContent.ImageInfoArray) {
                                var _ = g.MsgContent.ImageInfoArray[E];
                                d.addImage(new At.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                            }
                            break;

                          case m.SOUND:
                            g.MsgContent ? d = new At.Elem.Sound(g.MsgContent.UUID, g.MsgContent.Second, g.MsgContent.Size, l.From_Account, l.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                            d = new At.Elem.Text("[语音消息]下载地址解析出错"));
                            break;

                          case m.LOCATION:
                            d = new At.Elem.Location(g.MsgContent.Longitude, g.MsgContent.Latitude, g.MsgContent.Desc);
                            break;

                          case m.FILE:
                          case m.FILE + " ":
                            I = m.FILE, g.MsgContent ? d = new At.Elem.File(g.MsgContent.UUID, g.MsgContent.FileName, g.MsgContent.FileSize, l.From_Account, l.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                            d = new At.Elem.Text("[文件消息下载地址解析出错]"));
                            break;

                          case m.CUSTOM:
                            try {
                                var y = JSON.parse(g.MsgContent.Data);
                                if (y && y.userAction && y.userAction == U.ING) continue;
                            } catch (e) {}
                            I = m.CUSTOM, d = new At.Elem.Custom(g.MsgContent.Data, g.MsgContent.Desc, g.MsgContent.Ext);
                            break;

                          default:
                            I = m.TEXT, d = new At.Elem.Text("web端暂不支持" + g.MsgType + "消息");
                        }
                        f.elems.push(new At.Elem(I, d));
                    }
                    f.elems.length > 0 && St.addMsg(f) && o.push(f);
                }
                o.length > 0 && St.updateTimeline(), o.length > 0 && e && e(o);
            }, ne = function() {
                s && Gt.longPolling();
            }, oe = function(e) {
                for (var t in e) {
                    var n = e[t];
                    switch (n.Event) {
                      case C.GROUP_SYSTEM:
                        ae.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg"), J(n.GroupTips, !0);
                        break;

                      default:
                        ae.error("syncMsgs收到未知的群系统消息类型: Event=" + n.Event);
                    }
                }
            };
            this.syncMsgs = function(t, n) {
                var o = [], r = [];
                ve(St.cookie, St.syncFlag, function(n) {
                    2 == n.SyncFlag && (St.syncFlag = 0), r = n.MsgList, St.cookie = n.Cookie;
                    for (var i in r) {
                        var s, u, a, l = r[i];
                        l.From_Account == W.identifier ? (s = !0, u = l.To_Account, a = "") : (s = !1, u = l.From_Account, 
                        a = "");
                        var c = St.sessByTypeId(p.C2C, u);
                        c || (c = new Ct(p.C2C, u, u, a, 0, 0));
                        var f = new At(c, s, l.MsgSeq, l.MsgRandom, l.MsgTimeStamp, l.From_Account), g = null, d = null, I = null;
                        for (var M in l.MsgBody) {
                            switch (g = l.MsgBody[M], I = g.MsgType) {
                              case m.TEXT:
                                d = new At.Elem.Text(g.MsgContent.Text);
                                break;

                              case m.FACE:
                                d = new At.Elem.Face(g.MsgContent.Index, g.MsgContent.Data);
                                break;

                              case m.IMAGE:
                                d = new At.Elem.Images(g.MsgContent.UUID);
                                for (var E in g.MsgContent.ImageInfoArray) {
                                    var _ = g.MsgContent.ImageInfoArray[E];
                                    d.addImage(new At.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                                }
                                break;

                              case m.SOUND:
                                g.MsgContent ? d = new At.Elem.Sound(g.MsgContent.UUID, g.MsgContent.Second, g.MsgContent.Size, l.From_Account, l.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                                d = new At.Elem.Text("[语音消息]下载地址解析出错"));
                                break;

                              case m.LOCATION:
                                d = new At.Elem.Location(g.MsgContent.Longitude, g.MsgContent.Latitude, g.MsgContent.Desc);
                                break;

                              case m.FILE:
                              case m.FILE + " ":
                                I = m.FILE, g.MsgContent ? d = new At.Elem.File(g.MsgContent.UUID, g.MsgContent.FileName, g.MsgContent.FileSize, l.From_Account, l.To_Account, g.MsgContent.Download_Flag, p.C2C) : (I = m.TEXT, 
                                d = new At.Elem.Text("[文件消息下载地址解析出错]"));
                                break;

                              case m.CUSTOM:
                                try {
                                    var y = JSON.parse(g.MsgContent.Data);
                                    if (y && y.userAction && y.userAction == U.ING) continue;
                                } catch (e) {}
                                I = m.CUSTOM, d = new At.Elem.Custom(g.MsgContent.Data, g.MsgContent.Desc, g.MsgContent.Ext);
                                break;

                              default:
                                I = m.TEXT, d = new At.Elem.Text("web端暂不支持" + g.MsgType + "消息");
                            }
                            f.elems.push(new At.Elem(I, d));
                        }
                        f.elems.length > 0 && St.addMsg(f) && o.push(f);
                    }
                    oe(n.EventArray), o.length > 0 && St.updateTimeline(), t ? t(o) : o.length > 0 && e && e(o);
                }, function(e) {
                    ae.error("getMsgs failed:" + e.ErrorInfo), n && n(e);
                });
            }, this.getC2CHistoryMsgs = function(e, t, n) {
                if (e.Peer_Account || !n) if (e.MaxCnt || (e.MaxCnt = 15), e.MaxCnt <= 0 && n) n(ue.getReturnError("MaxCnt should be greater than 0", -14)); else if (e.MaxCnt > 15) {
                    if (n) return void n(ue.getReturnError("MaxCnt can not be greater than 15", -15));
                } else {
                    null != e.MsgKey && void 0 !== e.MsgKey || (e.MsgKey = "");
                    var o = {
                        Peer_Account: e.Peer_Account,
                        MaxCnt: e.MaxCnt,
                        LastMsgTime: e.LastMsgTime,
                        MsgKey: e.MsgKey
                    };
                    be(o, function(n) {
                        var o = [], r = [];
                        r = n.MsgList;
                        var i = St.sessByTypeId(p.C2C, e.Peer_Account);
                        i || (i = new Ct(p.C2C, e.Peer_Account, e.Peer_Account, "", 0, 0));
                        for (var s in r) {
                            var u, a = r[s];
                            a.From_Account == W.identifier ? (u = !0, a.To_Account, "") : (u = !1, a.From_Account, 
                            "");
                            var l = new At(i, u, a.MsgSeq, a.MsgRandom, a.MsgTimeStamp, a.From_Account), c = null, f = null, g = null;
                            for (var d in a.MsgBody) {
                                switch (c = a.MsgBody[d], g = c.MsgType) {
                                  case m.TEXT:
                                    f = new At.Elem.Text(c.MsgContent.Text);
                                    break;

                                  case m.FACE:
                                    f = new At.Elem.Face(c.MsgContent.Index, c.MsgContent.Data);
                                    break;

                                  case m.IMAGE:
                                    f = new At.Elem.Images(c.MsgContent.UUID);
                                    for (var I in c.MsgContent.ImageInfoArray) {
                                        var M = c.MsgContent.ImageInfoArray[I];
                                        f.addImage(new At.Elem.Images.Image(M.Type, M.Size, M.Width, M.Height, M.URL));
                                    }
                                    break;

                                  case m.SOUND:
                                    c.MsgContent ? f = new At.Elem.Sound(c.MsgContent.UUID, c.MsgContent.Second, c.MsgContent.Size, a.From_Account, a.To_Account, c.MsgContent.Download_Flag, p.C2C) : (g = m.TEXT, 
                                    f = new At.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;

                                  case m.LOCATION:
                                    f = new At.Elem.Location(c.MsgContent.Longitude, c.MsgContent.Latitude, c.MsgContent.Desc);
                                    break;

                                  case m.FILE:
                                  case m.FILE + " ":
                                    g = m.FILE, c.MsgContent ? f = new At.Elem.File(c.MsgContent.UUID, c.MsgContent.FileName, c.MsgContent.FileSize, a.From_Account, a.To_Account, c.MsgContent.Download_Flag, p.C2C) : (g = m.TEXT, 
                                    f = new At.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;

                                  case m.CUSTOM:
                                    g = m.CUSTOM, f = new At.Elem.Custom(c.MsgContent.Data, c.MsgContent.Desc, c.MsgContent.Ext);
                                    break;

                                  default:
                                    g = m.TEXT, f = new At.Elem.Text("web端暂不支持" + c.MsgType + "消息");
                                }
                                l.elems.push(new At.Elem(g, f));
                            }
                            St.addMsg(l), o.push(l);
                        }
                        if (St.updateTimeline(), t) {
                            var E = {
                                Complete: n.Complete,
                                MsgCount: o.length,
                                LastMsgTime: n.LastMsgTime,
                                MsgKey: n.MsgKey,
                                MsgList: o
                            };
                            i.isFinished(n.Complete), t(E);
                        }
                    }, function(e) {
                        ae.error("getC2CHistoryMsgs failed:" + e.ErrorInfo), n && n(e);
                    });
                } else n(ue.getReturnError("Peer_Account is empty", -13));
            }, this.syncGroupMsgs = function(t, n, o) {
                if (t.ReqMsgSeq <= 0) {
                    if (o) {
                        var r = ue.getReturnError("ReqMsgSeq must be greater than 0", -16);
                        o(r);
                    }
                } else {
                    var i = {
                        GroupId: t.GroupId,
                        ReqMsgSeq: t.ReqMsgSeq,
                        ReqMsgNumber: t.ReqMsgNumber
                    };
                    tt(i, function(t) {
                        var o = [], r = (t.GroupId, t.RspMsgList), i = t.IsFinished;
                        if (null != r && void 0 !== r) {
                            for (var s = r.length - 1; s >= 0; s--) {
                                var u = r[s];
                                if (!u.IsPlaceMsg && u.From_Account && u.MsgBody && 0 != u.MsgBody.length) {
                                    var a = re(u, !0, !0, i);
                                    a && o.push(a);
                                }
                            }
                            o.length > 0 && St.updateTimeline(), n ? n(o) : o.length > 0 && e && e(o);
                        } else n && n([]);
                    }, function(e) {
                        ae.error("getGroupMsgs failed:" + e.ErrorInfo), o && o(e);
                    });
                }
            };
            var re = function(e, n, o, r) {
                if (e.IsPlaceMsg || !e.From_Account || !e.MsgBody || 0 == e.MsgBody.length) return null;
                var i, s, u, a = e.ToGroupId, l = a;
                e.GroupInfo && e.GroupInfo.GroupName && (l = e.GroupInfo.GroupName), u = e.From_Account, 
                e.GroupInfo && e.GroupInfo.From_AccountNick && (u = e.GroupInfo.From_AccountNick), 
                e.From_Account == W.identifier ? (i = !0, e.From_Account, s = "") : (i = !1, e.From_Account, 
                s = "");
                var c = St.sessByTypeId(p.GROUP, a);
                c || (c = new Ct(p.GROUP, a, l, s, 0, 0)), void 0 !== r && c.isFinished(r || 0);
                var f = S.COMMON;
                if (C.GROUP_TIP == e.Event || C.GROUP_TIP2 == e.Event) {
                    f = S.TIP;
                    var g = e.MsgBody;
                    e.MsgBody = [], e.MsgBody.push({
                        MsgType: m.GROUP_TIP,
                        MsgContent: g
                    });
                } else e.MsgPriority && (e.MsgPriority == G.REDPACKET ? f = S.REDPACKET : e.MsgPriority == G.LOVEMSG && (f = S.LOVEMSG));
                var d = new At(c, i, e.MsgSeq, e.MsgRandom, e.MsgTimeStamp, e.From_Account, f, u), I = null, M = null, E = null;
                for (var _ in e.MsgBody) {
                    switch (I = e.MsgBody[_], E = I.MsgType) {
                      case m.TEXT:
                        M = new At.Elem.Text(I.MsgContent.Text);
                        break;

                      case m.FACE:
                        M = new At.Elem.Face(I.MsgContent.Index, I.MsgContent.Data);
                        break;

                      case m.IMAGE:
                        M = new At.Elem.Images(I.MsgContent.UUID);
                        for (var y in I.MsgContent.ImageInfoArray) M.addImage(new At.Elem.Images.Image(I.MsgContent.ImageInfoArray[y].Type, I.MsgContent.ImageInfoArray[y].Size, I.MsgContent.ImageInfoArray[y].Width, I.MsgContent.ImageInfoArray[y].Height, I.MsgContent.ImageInfoArray[y].URL));
                        break;

                      case m.SOUND:
                        I.MsgContent ? M = new At.Elem.Sound(I.MsgContent.UUID, I.MsgContent.Second, I.MsgContent.Size, e.From_Account, e.To_Account, I.MsgContent.Download_Flag, p.GROUP) : (E = m.TEXT, 
                        M = new At.Elem.Text("[语音消息]下载地址解析出错"));
                        break;

                      case m.LOCATION:
                        M = new At.Elem.Location(I.MsgContent.Longitude, I.MsgContent.Latitude, I.MsgContent.Desc);
                        break;

                      case m.FILE:
                      case m.FILE + " ":
                        E = m.FILE;
                        _e(I.MsgContent.UUID, e.From_Account, I.MsgContent.FileName);
                        I.MsgContent ? M = new At.Elem.File(I.MsgContent.UUID, I.MsgContent.FileName, I.MsgContent.FileSize, e.From_Account, e.To_Account, I.MsgContent.Download_Flag, p.GROUP) : (E = m.TEXT, 
                        M = new At.Elem.Text("[文件消息]地址解析出错"));
                        break;

                      case m.GROUP_TIP:
                        var h = I.MsgContent.OpType;
                        if (M = new At.Elem.GroupTip(h, I.MsgContent.Operator_Account, a, e.GroupInfo.GroupName, I.MsgContent.List_Account), 
                        O.JOIN == h || O.QUIT == h) M.setGroupMemberNum(I.MsgContent.MemberNum); else if (O.MODIFY_GROUP_INFO == h) {
                            var T = !1, A = {
                                GroupId: a,
                                GroupFaceUrl: null,
                                GroupName: null,
                                OwnerAccount: null,
                                GroupNotification: null,
                                GroupIntroduction: null
                            }, R = I.MsgContent.MsgGroupNewInfo;
                            if (R.GroupFaceUrl) {
                                var v = new At.Elem.GroupTip.GroupInfo(F.FACE_URL, R.GroupFaceUrl);
                                M.addGroupInfo(v), T = !0, A.GroupFaceUrl = R.GroupFaceUrl;
                            }
                            if (R.GroupName) {
                                var N = new At.Elem.GroupTip.GroupInfo(F.NAME, R.GroupName);
                                M.addGroupInfo(N), T = !0, A.GroupName = R.GroupName;
                            }
                            if (R.Owner_Account) {
                                var P = new At.Elem.GroupTip.GroupInfo(F.OWNER, R.Owner_Account);
                                M.addGroupInfo(P), T = !0, A.OwnerAccount = R.Owner_Account;
                            }
                            if (R.GroupNotification) {
                                var b = new At.Elem.GroupTip.GroupInfo(F.NOTIFICATION, R.GroupNotification);
                                M.addGroupInfo(b), T = !0, A.GroupNotification = R.GroupNotification;
                            }
                            if (R.GroupIntroduction) {
                                var L = new At.Elem.GroupTip.GroupInfo(F.INTRODUCTION, R.GroupIntroduction);
                                M.addGroupInfo(L), T = !0, A.GroupIntroduction = R.GroupIntroduction;
                            }
                            0 == n && T && t && t(A);
                        } else if (O.MODIFY_MEMBER_INFO == h) {
                            var U = I.MsgContent.MsgMemberInfo;
                            for (var D in U) {
                                var k = U[D];
                                M.addMemberInfo(new At.Elem.GroupTip.MemberInfo(k.User_Account, k.ShutupTime));
                            }
                        }
                        break;

                      case m.CUSTOM:
                        E = m.CUSTOM, M = new At.Elem.Custom(I.MsgContent.Data, I.MsgContent.Desc, I.MsgContent.Ext);
                        break;

                      default:
                        E = m.TEXT, M = new At.Elem.Text("web端暂不支持" + I.MsgType + "消息");
                    }
                    d.elems.push(new At.Elem(E, M));
                }
                return 0 == o ? d : St.addMsg(d) ? d : null;
            };
            this.init = function(u, a, c) {
                if (u.onMsgNotify || ae.warn("listeners.onMsgNotify is empty"), e = u.onMsgNotify, 
                u.onBigGroupMsgNotify ? l = u.onBigGroupMsgNotify : ae.warn("listeners.onBigGroupMsgNotify is empty"), 
                u.onC2cEventNotifys ? onC2cEventCallbacks = u.onC2cEventNotifys : ae.warn("listeners.onC2cEventNotifys is empty"), 
                u.onGroupSystemNotifys ? n = u.onGroupSystemNotifys : ae.warn("listeners.onGroupSystemNotifys is empty"), 
                u.onGroupInfoChangeNotify ? t = u.onGroupInfoChangeNotify : ae.warn("listeners.onGroupInfoChangeNotify is empty"), 
                u.onFriendSystemNotifys ? o = u.onFriendSystemNotifys : ae.warn("listeners.onFriendSystemNotifys is empty"), 
                u.onProfileSystemNotifys ? r = u.onProfileSystemNotifys : ae.warn("listeners.onProfileSystemNotifys is empty"), 
                u.onKickedEventCall ? i = u.onKickedEventCall : ae.warn("listeners.onKickedEventCall is empty"), 
                u.onAppliedDownloadUrl ? onAppliedDownloadUrl = u.onAppliedDownloadUrl : ae.warn("listeners.onAppliedDownloadUrl is empty"), 
                W.identifier && W.userSig) T(function(e) {
                    ae.info("initMyGroupMaxSeqs success"), h(function(e) {
                        if (ae.info("initIpAndAuthkey success"), a) {
                            ae.info("login success(have login state))");
                            var t = {
                                ActionStatus: d.OK,
                                ErrorCode: 0,
                                ErrorInfo: "login success"
                            };
                            a(t);
                        }
                        Gt.setLongPollingOn(!0), s && Gt.longPolling(a);
                    }, c);
                }, c); else if (a) {
                    var p = {
                        ActionStatus: d.OK,
                        ErrorCode: 0,
                        ErrorInfo: "login success(no login state)"
                    };
                    a(p);
                }
            }, this.sendMsg = function(e, t, n) {
                Oe(e, function(o) {
                    if (e.sess.type() == p.C2C) {
                        if (!St.addMsg(e)) {
                            var r = "sendMsg: addMsg failed!", i = ue.getReturnError(r, -17);
                            return ae.error(r), void (n && n(i));
                        }
                        St.updateTimeline();
                    }
                    t && t(o);
                }, function(e) {
                    n && n(e);
                });
            };
        }(), Ot = new function() {
            this.fileMd5 = null;
            var e = function(e, t, n) {
                function o() {
                    var t = a * s, n = t + s >= e.size ? e.size : t + s, o = i.call(e, t, n);
                    r.readAsArrayBuffer(o);
                }
                var r = null;
                try {
                    r = new FileReader();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if (n) return void n(ue.getReturnError("当前浏览器不支持FileReader", -18));
                }
                var i = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                if (i || !n) {
                    var s = 2097152, u = Math.ceil(e.size / s), a = 0, l = new SparkMD5();
                    r.onload = function(e) {
                        for (var n = "", r = new Uint8Array(e.target.result), i = r.byteLength, s = 0; s < i; s++) n += String.fromCharCode(r[s]);
                        l.appendBinary(n), ++a < u ? o() : (this.fileMd5 = l.end(), t && t(this.fileMd5));
                    }, o();
                } else n(ue.getReturnError("当前浏览器不支持FileAPI", -19));
            };
            this.submitUploadFileForm = function(e, t, n) {
                function o(e, t) {
                    var n = document.createElement("input");
                    n.type = "hidden", n.name = e, n.value = t, f.appendChild(n);
                }
                function r() {
                    var e;
                    try {
                        e = JSON.parse(m.contentWindow.name) || {};
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        e = {};
                    }
                    e.ActionStatus ? (m.src = "about:blank", m.parentNode.removeChild(m), m = null, 
                    e.ActionStatus == d.OK ? t && t(e) : n && n(e)) : setTimeout(r, 100);
                }
                var i, s, u = e.formId, a = e.fileId, l = "uploadResultIframe_" + H++, c = e.To_Account, p = e.businessType, f = document.getElementById(u);
                if (!f) return i = "获取表单对象为空: formId=" + u + "(formId非法)", s = ue.getReturnError(i, -20), 
                void (n && n(s));
                var g = document.getElementById(a);
                if (!g) return i = "获取文件对象为空: fileId=" + a + "(没有选择文件或者fileId非法)", s = ue.getReturnError(i, -21), 
                void (n && n(s));
                g.name = "file";
                var m = document.createElement("iframe");
                m.name = l, m.id = l, m.style.display = "none", document.body.appendChild(m);
                var I, E = "https://pic.tim.qq.com/v4/openpic/" + (I = Ie() ? "pic_up" : "pic_up_test") + "?tinyid=" + W.tinyid + "&a2=" + W.a2 + "&sdkappid=" + W.sdkAppID + "&accounttype=" + W.accountType + "&contenttype=http";
                f.action = E, f.method = "post", f.target = l, o("App_Version", h.APP_VERSION), 
                o("From_Account", W.identifier), o("To_Account", c), o("Seq", ce().toString()), 
                o("Timestamp", le().toString()), o("Random", pe().toString()), o("Busi_Id", p), 
                o("PkgFlag", M.RAW_DATA.toString()), o("Auth_Key", X), o("Server_Ver", h.SERVER_VERSION.toString()), 
                o("File_Type", e.fileType), setTimeout(r, 500), f.submit();
            }, this.uploadFile = function(t, n, o) {
                var r = {
                    init: function(e, t, n) {
                        var o = this;
                        o.file = e.file, o.onProgressCallBack = e.onProgressCallBack, e.abortButton && (e.abortButton.onclick = o.abortHandler), 
                        o.total = o.file.size, o.loaded = 0, o.step = 1105920, o.sliceSize = 0, o.sliceOffset = 0, 
                        o.timestamp = le(), o.seq = ce(), o.random = pe(), o.fromAccount = W.identifier, 
                        o.toAccount = e.To_Account, o.fileMd5 = e.fileMd5, o.businessType = e.businessType, 
                        o.fileType = e.fileType, o.cbOk = t, o.cbErr = n, o.reader = new FileReader(), o.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, 
                        o.reader.onloadstart = o.onLoadStart, o.reader.onprogress = o.onProgress, o.reader.onabort = o.onAbort, 
                        o.reader.onerror = o.onerror, o.reader.onload = o.onLoad, o.reader.onloadend = o.onLoadEnd;
                    },
                    upload: function() {
                        r.readBlob(0);
                    },
                    onLoadStart: function() {},
                    onProgress: function(e) {
                        var t = r;
                        t.loaded += e.loaded, t.onProgressCallBack && t.onProgressCallBack(t.loaded, t.total);
                    },
                    onAbort: function() {},
                    onError: function() {},
                    onLoad: function(e) {
                        var t = r;
                        if (e.target.readyState == FileReader.DONE) {
                            var n = e.target.result, o = n.indexOf(",");
                            -1 != o && (n = n.substr(o + 1));
                            var i = {
                                From_Account: t.fromAccount,
                                To_Account: t.toAccount,
                                Busi_Id: t.businessType,
                                File_Type: t.fileType,
                                File_Str_Md5: t.fileMd5,
                                PkgFlag: M.BASE64_DATA,
                                File_Size: t.total,
                                Slice_Offset: t.sliceOffset,
                                Slice_Size: t.sliceSize,
                                Slice_Data: n,
                                Seq: t.seq,
                                Timestamp: t.timestamp,
                                Random: t.random
                            }, s = function(e) {
                                if (0 == e.IsFinish) t.loaded = e.Next_Offset, t.loaded < t.total ? t.readBlob(t.loaded) : t.loaded = t.total; else if (t.cbOk) {
                                    var n = {
                                        ActionStatus: e.ActionStatus,
                                        ErrorCode: e.ErrorCode,
                                        ErrorInfo: e.ErrorInfo,
                                        File_UUID: e.File_UUID,
                                        File_Size: e.Next_Offset,
                                        URL_INFO: e.URL_INFO,
                                        Download_Flag: e.Download_Flag
                                    };
                                    t.fileType == y.FILE && (n.URL_INFO = _e(e.File_UUID, W.identifier, t.file.name)), 
                                    t.cbOk(n);
                                }
                                K = 0;
                            };
                            It(i, s, function e(n) {
                                K < 20 ? (K++, setTimeout(function() {
                                    It(i, s, e);
                                }, 1e3)) : t.cbErr(n);
                            });
                        }
                    },
                    onLoadEnd: function() {},
                    readBlob: function(e) {
                        var t, n = r, o = n.file, i = e + n.step;
                        i > n.total ? (i = n.total, n.sliceSize = i - e) : n.sliceSize = n.step, n.sliceOffset = e, 
                        t = n.blobSlice.call(o, e, i), n.reader.readAsDataURL(t);
                    },
                    abortHandler: function() {
                        var e = r;
                        e.reader && e.reader.abort();
                    }
                };
                e(t.file, function(e) {
                    ae.info("fileMd5: " + e), t.fileMd5 = e, r.init(t, n, o), r.upload();
                }, o);
            };
        }();
        o.SESSION_TYPE = p, o.MSG_MAX_LENGTH = g, o.C2C_MSG_SUB_TYPE = T, o.GROUP_MSG_SUB_TYPE = S, 
        o.MSG_ELEMENT_TYPE = m, o.GROUP_TIP_TYPE = O, o.IMAGE_TYPE = I, o.GROUP_SYSTEM_TYPE = R, 
        o.FRIEND_NOTICE_TYPE = v, o.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = F, o.BROWSER_INFO = u, 
        o.Emotions = o.EmotionPicData = se, o.EmotionDataIndexs = o.EmotionPicDataIndex = ie, 
        o.TLS_ERROR_CODE = P, o.CONNECTION_STATUS = b, o.UPLOAD_PIC_BUSSINESS_TYPE = L, 
        o.RECENT_CONTACT_TYPE = f, o.UPLOAD_RES_TYPE = y, o.Tool = ue, o.Log = ae, o.Msg = At, 
        o.Session = Ct, o.MsgStore = {
            sessMap: function() {
                return St.sessMap();
            },
            sessCount: function() {
                return St.sessCount();
            },
            sessByTypeId: function(e, t) {
                return St.sessByTypeId(e, t);
            },
            delSessByTypeId: function(e, t) {
                return St.delSessByTypeId(e, t);
            },
            resetCookieAndSyncFlag: function() {
                return St.resetCookieAndSyncFlag();
            }
        }, o.Resources = re, o.login = o.init = function(e, t, n, o, r) {
            ht.init(t.onConnNotify, o, r), t.jsonpCallback && (J = t.jsonpCallback), Te(e, t, n, o, r);
        }, o.logout = o.offline = function(e, t) {
            return Ge("instance", e, t);
        }, o.logoutAll = function(e, t) {
            return Ge("all", e, t);
        }, o.sendMsg = function(e, t, n) {
            return Gt.sendMsg(e, t, n);
        }, o.syncMsgs = function(e, t) {
            return Gt.syncMsgs(e, t);
        }, o.getC2CHistoryMsgs = function(e, t, n) {
            return Gt.getC2CHistoryMsgs(e, t, n);
        }, o.syncGroupMsgs = function(e, t, n) {
            return Gt.syncGroupMsgs(e, t, n);
        }, o.c2CMsgReaded = function(e, t, n) {
            return St.c2CMsgReaded(e, t, n);
        }, o.groupMsgReaded = function(e, t, n) {
            return nt(e, t, n);
        }, o.setAutoRead = function(e, t, n) {
            return St.setAutoRead(e, t, n);
        }, o.createGroup = function(e, t, n) {
            return Le(e, t, n);
        }, o.createGroupHigh = function(e, t, n) {
            return Ue(e, t, n);
        }, o.applyJoinGroup = function(e, t, n) {
            return ke(e, t, n);
        }, o.handleApplyJoinGroupPendency = function(e, t, n) {
            return qe(e, t, n);
        }, o.deleteApplyJoinGroupPendency = function(e, t, n) {
            return Pe(e, t, n);
        }, o.quitGroup = function(e, t, n) {
            return xe(e, t, n);
        }, o.searchGroupByName = function(e, t, n) {
            return Ke(e, t, n);
        }, o.getGroupPublicInfo = function(e, t, n) {
            return ze(e, t, n);
        }, o.getGroupInfo = function(e, t, n) {
            return Ve(e, t, n);
        }, o.modifyGroupBaseInfo = function(e, t, n) {
            return De(e, t, n);
        }, o.getGroupMemberInfo = function(e, t, n) {
            return Je(e, t, n);
        }, o.addGroupMember = function(e, t, n) {
            return He(e, t, n);
        }, o.modifyGroupMember = function(e, t, n) {
            return Ye(e, t, n);
        }, o.deleteGroupMember = function(e, t, n) {
            return Xe(e, t, n);
        }, o.destroyGroup = function(e, t, n) {
            return Qe(e, t, n);
        }, o.changeGroupOwner = function(e, t, n) {
            return We(e, t, n);
        }, o.getJoinedGroupListHigh = function(e, t, n) {
            return je(e, t, n);
        }, o.getRoleInGroup = function(e, t, n) {
            return $e(e, t, n);
        }, o.forbidSendMsg = function(e, t, n) {
            return Ze(e, t, n);
        }, o.sendCustomGroupNotify = function(e, t, n) {
            return et(e, t, n);
        }, o.applyJoinBigGroup = function(e, t, n) {
            return we(e, t, n);
        }, o.quitBigGroup = function(e, t, n) {
            return Be(e, t, n);
        }, o.getProfilePortrait = function(e, t, n) {
            return ct(e, t, n);
        }, o.setProfilePortrait = function(e, t, n) {
            return pt(e, t, n);
        }, o.applyAddFriend = function(e, t, n) {
            return rt(e, t, n);
        }, o.getPendency = function(e, t, n) {
            return st(e, t, n);
        }, o.deletePendency = function(e, t, n) {
            return ut(e, t, n);
        }, o.responseFriend = function(e, t, n) {
            return at(e, t, n);
        }, o.getAllFriend = function(e, t, n) {
            return lt(e, t, n);
        }, o.deleteFriend = function(e, t, n) {
            return it(e, t, n);
        }, o.addBlackList = function(e, t, n) {
            return ft(e, t, n);
        }, o.deleteBlackList = function(e, t, n) {
            return gt(e, t, n);
        }, o.getBlackList = function(e, t, n) {
            return dt(e, t, n);
        }, o.getRecentContactList = function(e, t, n) {
            return mt(e, t, n);
        }, o.uploadFile = o.uploadPic = function(e, t, n) {
            return Ot.uploadFile(e, t, n);
        }, o.submitUploadFileForm = function(e, t, n) {
            return Ot.submitUploadFileForm(e, t, n);
        }, o.uploadFileByBase64 = o.uploadPicByBase64 = function(e, t, n) {
            var o = {
                To_Account: e.toAccount,
                Busi_Id: e.businessType,
                File_Type: e.File_Type,
                File_Str_Md5: e.fileMd5,
                PkgFlag: M.BASE64_DATA,
                File_Size: e.totalSize,
                Slice_Offset: 0,
                Slice_Size: e.totalSize,
                Slice_Data: e.base64Str,
                Seq: ce(),
                Timestamp: le(),
                Random: pe()
            };
            return It(o, t, n);
        }, o.setJsonpLastRspData = function(e) {
            V = "string" == typeof e ? JSON.parse(e) : e;
        }, o.getLongPollingId = function(e, t, n) {
            return _t(0, t, n);
        }, o.applyDownload = function(e, t, n) {
            return yt(e, t, n);
        }, o.onDownFile = function(e) {
            window.open(re.downloadMap["uuid_" + e]);
        }, o.checkLogin = function(e, t) {
            return me(e, t);
        };
    }(o), o;
}();