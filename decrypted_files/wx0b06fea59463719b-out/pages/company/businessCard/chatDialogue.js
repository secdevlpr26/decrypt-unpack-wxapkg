var t = require("../../../components/utils/socket.js"), a = getApp();

Page({
    data: {
        msgLists: [],
        jsonStatus: !0,
        modalStatus: !1,
        defaultStatus: !1,
        sendStatus: !0,
        copyStatus: !1,
        scrollStatus: "",
        inputStatus: !1,
        introduceStatus: !0,
        WebUserID: "",
        inputValue: "",
        nickName: "",
        avatarUrl: "",
        OtherID: "",
        OtherURL: "",
        BusinessCardID: "",
        SiteID: "",
        card_info: null,
        BusinessMobile: "",
        BusinessWeChat: "",
        curpage: "",
        nottomHeight: "",
        pagecount: "",
        loading_top: -80,
        baseUrl: a.globalData.siteBaseUrl,
        sendRepeat: !1,
        listRepeat: !1,
        socketTimeOut: !0,
        scrollHeight: "",
        lastTime: "",
        userdetails: !0,
        bottomRPX: 0,
        resetSendMsgStatus: !1,
        socketlianjie: !1,
        socketHide: !1,
        resetSendMsgData: {},
        isChatlog: !1
    },
    onLoad: function(t) {
        var e = this;
        t.BusinessCardID ? e.setData({
            BusinessCardID: t.BusinessCardID,
            OtherID: t.UserID,
            SiteID: t.SiteID,
            defaultStatus: !0
        }) : (e.setData({
            OtherID: t.id,
            OtherURL: t.imgurl,
            BusinessCardID: t.CardID,
            SiteID: a.globalData.baseInfo.SiteID,
            sendStatus: !1
        }), t.userdetails && e.setData({
            userdetails: !1,
            sendStatus: !0
        }), wx.setNavigationBarTitle({
            title: t.OtherName
        })), e.businessUser(), a.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        }), wx.getSystemInfo({
            success: function(t) {
                "iOS" === t.system.split(" ")[0] ? e.setData({
                    inputStatus: !0
                }) : "Android" === t.system.split(" ")[0] && e.setData({
                    inputStatus: !1
                });
            }
        });
    },
    initData: function() {
        var t = a.globalData.userInfo;
        this.setData({
            nickName: t.nickName,
            avatarUrl: t.avatarUrl,
            WebUserID: a.globalData.WebUserID
        }), this.isSendDefaultChatMsg(), this.getChatMessageList(), this.updateMessageIsRead(), 
        this.updateServiceNoticeIsProcess();
    },
    businessUser: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID&UserID=" + t.data.OtherID + "&SiteID=" + t.data.SiteID + "&BusinessCardID=" + t.data.BusinessCardID,
            method: "GET",
            success: function(a) {
                a.success && (t.setData({
                    card_info: a.info.card_info,
                    BusinessMobile: a.info.card_info.Mobile,
                    BusinessWeChat: a.info.card_info.WeChat
                }), t.data.defaultStatus && (t.setData({
                    OtherURL: a.info.card_info.HeadImgUrl
                }), wx.setNavigationBarTitle({
                    title: a.info.card_info.UserName
                })));
            }
        });
    },
    openSocket: function() {
        var e = this, s = a.globalData.WebUserID;
        "{}" == JSON.stringify(a.globalData.socket_config) ? setTimeout(function() {
            e.openSocket();
        }, 5e3) : (a.globalData.cardSocket && a.globalData.cardSocket.close(), a.globalData.cardSocket = t.run(), 
        t.listen("websocket-connected", function(t) {
            var i = {
                client_id: t.clientid,
                fromUserID: s
            };
            a.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: i,
                method: "POST",
                success: function(t) {
                    200 == t.code ? (e.setData({
                        socketHide: !1
                    }), console.log("绑定成功"), a.globalData.cardSocket.socketTask.onClose(function(t) {
                        e.data.socketlianjie && (a.globalData.cardSocket = void 0, e.setData({
                            socketHide: !0
                        }), e.openSocket());
                    })) : setTimeout(function() {
                        e.data.socketlianjie && e.openSocket();
                    }, 5e3);
                },
                fail: function(t) {}
            });
        }), a.globalData.cardSocket.listen("chat_msg", function(t) {
            var a = t;
            if (a.fromUserID === e.data.OtherID) {
                var s = {}, i = e.data.msgLists;
                s.FromUserID = e.data.OtherID, s.Type = a.msgType, s.Content = a.content, i.push(s);
                var n = "";
                n = "scrollBottom" == e.data.scrollStatus ? "scrollBottom1" : "scrollBottom", e.setData({
                    msgLists: i,
                    scrollStatus: n,
                    lastTime: a.crTime
                }), e.data.isChatlog && e.updateMessageIsRead();
            }
        }), a.globalData.cardSocket.socketTask.onError(function(t) {
            setTimeout(function() {
                e.data.socketlianjie && e.openSocket();
            }, 5e3);
        }));
    },
    listenSocket: function() {
        var t = this;
        t.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), a.globalData.cardSocket.listen("chat_msg", function(a) {
            var e = a;
            if (e.fromUserID === t.data.OtherID) {
                var s = {}, i = t.data.msgLists;
                s.FromUserID = t.data.OtherID, s.Type = e.msgType, s.Content = e.content, i.push(s);
                var n = "";
                n = "scrollBottom" == t.data.scrollStatus ? "scrollBottom1" : "scrollBottom", t.setData({
                    msgLists: i,
                    scrollStatus: n,
                    lastTime: e.crTime
                }), t.data.isChatlog && t.updateMessageIsRead();
            }
        }), a.globalData.cardSocket.socketTask.onClose(function(e) {
            t.data.socketTimeOut && (a.globalData.cardSocket = void 0, t.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), t.openSocket());
        });
    },
    getChatMessageList: function(t, e) {
        var s = this, i = "", n = !1;
        t ? (i = t, n = !0) : i = "1", a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=getChatMessageList&fromUserID=" + s.data.WebUserID + "&toUserID=" + s.data.OtherID + "&page=" + i + "&pagesize=20",
            method: "GET",
            hideLoading: n,
            success: function(a) {
                if (200 == a.code) {
                    a.data.curpage != a.data.pagecount || s.data.defaultStatus || a.data.list.length > 0 && (a.data.list[0].TimeOut = 1);
                    var i = "";
                    if (a.data.list.forEach(function(t, a) {
                        1 == t.TimeOut && (i = t.CrTime);
                    }), setTimeout(function() {
                        s.setData({
                            listRepeat: !1
                        });
                    }, 500), t) {
                        var n = [], o = s.data.msgLists;
                        n = a.data.list.concat(o), s.setData({
                            msgLists: n,
                            curpage: a.data.curpage,
                            pagecount: a.data.pagecount,
                            lastTime: i,
                            loading_top: -80,
                            scrollStatus: e
                        });
                    } else s.setData({
                        msgLists: a.data.list,
                        curpage: a.data.curpage,
                        pagecount: a.data.pagecount,
                        lastTime: i,
                        loading_top: -80,
                        scrollStatus: "scrollBottom"
                    });
                } else s.setData({
                    loading_top: -80
                });
            }
        });
    },
    updateMessageIsRead: function() {
        var t = {};
        t.fromUserID = a.globalData.WebUserID, t.toUserID = this.data.OtherID, a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=updateMessageIsRead",
            data: t,
            method: "POST",
            hideLoading: !0,
            success: function(t) {
                t.code;
            },
            fail: function(t) {}
        });
    },
    updateServiceNoticeIsProcess: function() {
        var t = {};
        t.fromUserID = a.globalData.WebUserID, t.toUserID = this.data.OtherID, a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=updateServiceNoticeIsProcess",
            data: t,
            method: "POST",
            hideLoading: !0,
            success: function(t) {
                t.code;
            },
            fail: function(t) {}
        });
    },
    getInputValue: function(t) {
        var a = t.detail.value;
        this.setData({
            inputValue: a
        });
    },
    sendMeesge: function() {
        var t = this;
        if ("" != t.data.inputValue.replace(/(^\s*)/g, "") || t.data.sendStatus) {
            t.setData({
                sendRepeat: !0
            });
            var e = {}, s = new Date().getTime(), i = t.data.inputValue;
            if (!t.data.sendStatus) {
                var n = t.data.msgLists, o = "";
                if (o = "scrollBottom" == t.data.scrollStatus ? "scrollBottom1" : "scrollBottom", 
                e.Content = i, e.tanhaoStatus = !1, e.loadingStatus = !1, e.FromUserID = t.data.WebUserID, 
                t.data.resetSendMsgStatus) e.uniqueId = t.data.resetSendMsgData.uniqueid, s = t.data.resetSendMsgData.uniqueid, 
                e.Content = t.data.resetSendMsgData.sendmsg, i = t.data.resetSendMsgData.sendmsg, 
                t.setData({
                    inputValue: "",
                    resetSendMsgStatus: !1
                }); else {
                    if (e.uniqueId = new Date().getTime(), parseInt(e.uniqueId / 1e3) - t.data.lastTime > 300) {
                        var d = t.changeTime(s);
                        e.pageTime = d, e.TimeOut = 1, t.setData({
                            lastTime: parseInt(e.uniqueId / 1e3)
                        });
                    }
                    n.push(e), t.setData({
                        msgLists: n,
                        scrollStatus: o,
                        inputValue: ""
                    });
                }
                setTimeout(function() {
                    if (t.data.sendRepeat) {
                        var a = t.data.msgLists;
                        a.forEach(function(t, s) {
                            t.uniqueId && t.uniqueId == e.uniqueId && (a[s].loadingStatus = !0);
                        }), t.setData({
                            msgLists: a
                        });
                    }
                }, 2e3);
            }
            var u = "text", r = t.data.WebUserID, c = t.data.OtherID;
            t.data.sendStatus && (i = "default", u = "default", r = t.data.OtherID, c = t.data.WebUserID);
            var l = {
                fromUserID: r,
                toUserID: c,
                content: i,
                msgType: u,
                uniqueId: s,
                businessCardID: t.data.BusinessCardID
            };
            a.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=sendChatMsg",
                data: l,
                method: "POST",
                hideLoading: !0,
                chatHiddenModal: !0,
                success: function(e) {
                    t.setData({
                        sendRepeat: !1
                    });
                    var s = t.data.msgLists;
                    if (200 != e.code || t.data.sendStatus) t.data.sendStatus && t.getChatMessageList(), 
                    200 !== e.code && (s.forEach(function(t, a) {
                        t.uniqueId && t.uniqueId == e.data.uniqueId && (s[a].tanhaoStatus = !0, s[a].loadingStatus = !1);
                    }), t.setData({
                        msgLists: s
                    })), t.setData({
                        sendStatus: !1
                    }); else {
                        if (t.data.defaultStatus) {
                            var i = {
                                tbUserID: a.globalData.WebUserID,
                                tbType: "4",
                                tbTypeID: t.data.BusinessCardID,
                                tbTypeName: "",
                                tbTypeImg: "",
                                tbBusinessCardID: t.data.BusinessCardID
                            };
                            a.buried(i, function(t) {});
                        }
                        s.forEach(function(t, a) {
                            t.uniqueId && t.uniqueId == e.data.uniqueId && (s[a].loadingStatus = !1);
                        }), t.setData({
                            msgLists: s,
                            sendStatus: !1
                        });
                    }
                },
                fail: function(a) {
                    var s = t.data.msgLists;
                    s.forEach(function(t, a) {
                        t.uniqueId && t.uniqueId == e.uniqueId && (s[a].tanhaoStatus = !0, s[a].loadingStatus = !1);
                    }), t.setData({
                        msgLists: s,
                        sendRepeat: !1
                    });
                }
            });
        }
    },
    initBusiness: function() {
        wx.navigateTo({
            url: "/pages/company/businessCard/cardDetails?BusinessCardID=" + this.data.BusinessCardID + "&SiteID=" + this.data.SiteID
        });
    },
    goMyShop: function() {
        var t = this;
        a.globalData.cardSocket && (t.setData({
            socketTimeOut: !1
        }), a.globalData.cardSocket.close(), setTimeout(function() {
            a.globalData.cardSocket = void 0;
        }, 200)), wx.switchTab({
            url: "/pages/company/index"
        });
    },
    goCardDetails: function() {
        wx.navigateTo({
            url: "/pages/company/businessCard/cardDetails?BusinessCardID=" + this.data.BusinessCardID + "&SiteID=" + this.data.SiteID + "&dongtai=true"
        });
    },
    Dialing: function(t) {
        var e = this, s = this.data.BusinessMobile;
        if (e.data.defaultStatus) {
            var i = {
                tbUserID: a.globalData.WebUserID,
                tbType: "2",
                tbTypeID: this.data.BusinessCardID,
                tbTypeName: "",
                tbTypeImg: "",
                tbBusinessCardID: e.data.BusinessCardID
            };
            a.buried(i, function(t) {});
        }
        wx.makePhoneCall({
            phoneNumber: s
        });
    },
    addWechat: function() {
        this.setData({
            modalStatus: !0
        });
    },
    hiddenModal: function() {
        this.setData({
            modalStatus: !1
        });
    },
    copyWeChat: function() {
        var t = this;
        if (t.data.defaultStatus) {
            var e = {
                tbUserID: a.globalData.WebUserID,
                tbType: "7",
                tbTypeID: this.data.BusinessCardID,
                tbTypeName: "",
                tbTypeImg: "",
                tbBusinessCardID: t.data.BusinessCardID
            };
            a.buried(e, function(t) {});
        }
        wx.setClipboardData({
            data: t.data.BusinessWeChat,
            success: function(e) {
                a.showToast({
                    title: "内容已复制",
                    icon: "none"
                }), t.setData({
                    copyStatus: !0
                });
            }
        });
    },
    onChatSubmit: function(t) {
        var e = {
            formID: t.detail.formId,
            userID: a.globalData.WebUserID
        };
        a.saveFormID(e, function(t) {});
    },
    errMessage: function() {
        wx.showModal({
            title: "",
            content: "网络异常，请稍后再试！",
            showCancel: !1,
            success: function(t) {
                t.confirm ? wx.navigateBack({
                    delta: 1
                }) : t.cancel;
            }
        });
    },
    isSendDefaultChatMsg: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=isSendDefaultChatMsg&fromUserID=" + t.data.OtherID + "&toUserID=" + t.data.WebUserID,
            method: "GET",
            success: function(a) {
                200 == a.code && (0 == a.data.isSendDefault ? t.sendMeesge() : t.setData({
                    sendStatus: !1
                }));
            },
            fail: function(t) {}
        });
    },
    onShow: function() {
        a.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket());
        var t = void 0;
        t = this.data.defaultStatus ? parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 176) : parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 104), 
        this.setData({
            scrollHeight: t,
            isChatlog: !0
        });
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1,
            isChatlog: !1
        }), this.data.socketHide && (a.globalData.cardSocket = void 0);
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1,
            isChatlog: !1
        }), this.data.socketHide && (a.globalData.cardSocket = void 0);
    },
    onbindfocus: function(t) {
        var a = t.detail.height;
        this.data.inputStatus && this.setData({
            bottomRPX: a
        });
    },
    onbindblur: function() {
        this.data.inputStatus && this.setData({
            bottomRPX: 0
        });
    },
    resetSendMsg: function(t) {
        var a = this, e = {}, s = a.data.msgLists;
        e.sendmsg = t.currentTarget.dataset.sendmsg, e.uniqueid = t.currentTarget.dataset.uniqueid, 
        s.forEach(function(a, e) {
            a.uniqueId && a.uniqueId == t.currentTarget.dataset.uniqueid && (s[e].tanhaoStatus = !1, 
            s[e].loadingStatus = !0);
        }), a.setData({
            inputValue: t.currentTarget.dataset.sendmsg,
            resetSendMsgStatus: !0,
            resetSendMsgData: e,
            msgLists: s
        }), a.sendMeesge();
    },
    changeTime: function(t) {
        var a = new Date(t), e = a.getFullYear(), s = a.getMonth() + 1, i = a.getDate(), n = a.getHours(), o = a.getMinutes();
        return e + "/" + this.add0(s) + "/" + this.add0(i) + " " + this.add0(n) + ":" + this.add0(o);
    },
    add0: function(t) {
        return t < 10 ? "0" + t : t;
    },
    onDownMore: function() {
        var t = this;
        if (!this.data.listRepeat) {
            this.setData({
                listRepeat: !0
            });
            var a = "id" + this.data.msgLists[0].ID;
            if (this.data.curpage != this.data.pagecount) {
                this.setData({
                    loading_top: 0
                });
                var e = Number(this.data.curpage) + 1;
                setTimeout(function() {
                    t.getChatMessageList(e, a);
                }, 1e3);
            }
        }
    }
});