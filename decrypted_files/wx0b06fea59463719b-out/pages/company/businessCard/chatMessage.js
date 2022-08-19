function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
    return Array.from(e);
}

var t = require("../../../components/utils/socket.js"), a = getApp();

Page({
    data: {
        lists: [ {} ],
        WebUserID: "",
        baseUrl: a.globalData.siteBaseUrl,
        DefaultImg: !1,
        BusinessCardID: "",
        socketHide: !1,
        socketTimeOut: !0,
        socketlianjie: !1
    },
    onShow: function() {
        a.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket()), this.getChatUserList();
    },
    onLoad: function(e) {
        e.CardID && this.setData({
            BusinessCardID: e.CardID,
            WebUserID: a.globalData.WebUserID
        });
    },
    openSocket: function() {
        var s = this, o = a.globalData.WebUserID;
        "{}" != JSON.stringify(a.globalData.socket_config) && o ? (a.globalData.cardSocket = t.run(), 
        s.setData({
            WebUserID: o
        }), t.listen("websocket-connected", function(e) {
            var t = {
                client_id: e.clientid,
                fromUserID: o
            };
            a.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: t,
                method: "POST",
                hideLoading: !0,
                success: function(e) {
                    200 == e.code ? (s.setData({
                        socketHide: !1
                    }), console.log("绑定成功"), a.globalData.cardSocket.socketTask.onClose(function(e) {
                        s.data.socketlianjie && (a.globalData.cardSocket = void 0, s.setData({
                            socketHide: !0
                        }), s.openSocket());
                    })) : setTimeout(function() {
                        s.data.socketlianjie && s.openSocket();
                    }, 5e3);
                },
                fail: function(e) {}
            });
        }), a.globalData.cardSocket.listen("chat_msg", function(t) {
            var o = t, n = s.data.lists, i = n.find(function(e) {
                return e.LastMessageInfo.FromUserID === t.fromUserID;
            });
            if (i) {
                i.CrTime = t.crTime, "..." == i.IsReadCount ? (i.LastMessageInfo.Content = o.content, 
                i.LastMessageInfo.CrTime = o.listTime) : (i.IsReadCount = Number(i.IsReadCount) + 1, 
                i.LastMessageInfo.Content = o.content, i.LastMessageInfo.CrTime = o.listTime), "null" == i.IsReadCount && (i.IsReadCount = "...");
                var r = n.findIndex(function(e) {
                    return e.LastMessageInfo.FromUserID === t.fromUserID;
                });
                r > -1 && (n[r] = i);
            } else {
                var c = {
                    CrTime: 0,
                    IsReadCount: 0,
                    LastMessageInfo: {
                        Content: "",
                        CrTime: "",
                        FromUserID: "",
                        ID: "",
                        IsRead: "",
                        SiteID: "",
                        ToUserID: "",
                        Type: "text"
                    },
                    UserInfo: {
                        BindWxApp: "",
                        HeadImgUrl: "",
                        NickName: "",
                        UserID: ""
                    }
                };
                c.CrTime = t.crTime, c.IsReadCount = 1, c.LastMessageInfo = {
                    Content: t.content,
                    CrTime: t.listTime,
                    FromUserID: t.fromUserID,
                    ID: "",
                    IsRead: "0",
                    SiteID: a.globalData.siteId,
                    ToUserID: t.toUserID,
                    Type: "text"
                }, c.UserInfo = {
                    BindWxApp: "",
                    HeadImgUrl: t.HeadImgUrl,
                    NickName: t.NickName,
                    UserID: t.fromUserID
                }, n = [].concat(e(n), [ c ]);
            }
            n = n.sort(function(e, t) {
                return t.CrTime - e.CrTime;
            }), s.setData({
                lists: n
            });
        }), a.globalData.cardSocket.socketTask.onError(function(e) {
            setTimeout(function() {
                s.data.socketlianjie && s.openSocket();
            }, 5e3);
        })) : setTimeout(function() {
            s.openSocket();
        }, 1500);
    },
    listenSocket: function() {
        var t = this;
        t.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), a.globalData.cardSocket.listen("chat_msg", function(s) {
            var o = s, n = t.data.lists, i = n.find(function(e) {
                return e.LastMessageInfo.FromUserID === s.fromUserID;
            });
            if (i) {
                i.CrTime = s.crTime, "..." == i.IsReadCount ? (i.LastMessageInfo.Content = o.content, 
                i.LastMessageInfo.CrTime = o.listTime) : (i.IsReadCount = Number(i.IsReadCount) + 1, 
                i.LastMessageInfo.Content = o.content, i.LastMessageInfo.CrTime = o.listTime), "null" == i.IsReadCount && (i.IsReadCount = "...");
                var r = n.findIndex(function(e) {
                    return e.LastMessageInfo.FromUserID === s.fromUserID;
                });
                r > -1 && (n[r] = i);
            } else {
                var c = {
                    CrTime: 0,
                    IsReadCount: 0,
                    LastMessageInfo: {
                        Content: "",
                        CrTime: "",
                        FromUserID: "",
                        ID: "",
                        IsRead: "",
                        SiteID: "",
                        ToUserID: "",
                        Type: "text"
                    },
                    UserInfo: {
                        BindWxApp: "",
                        HeadImgUrl: "",
                        NickName: "",
                        UserID: ""
                    }
                };
                c.CrTime = s.crTime, c.IsReadCount = 1, c.LastMessageInfo = {
                    Content: s.content,
                    CrTime: s.listTime,
                    FromUserID: s.fromUserID,
                    ID: "",
                    IsRead: "0",
                    SiteID: a.globalData.siteId,
                    ToUserID: s.toUserID,
                    Type: "text"
                }, c.UserInfo = {
                    BindWxApp: "",
                    HeadImgUrl: s.HeadImgUrl,
                    NickName: s.NickName,
                    UserID: s.fromUserID
                }, n = [].concat(e(n), [ c ]);
            }
            n = n.sort(function(e, t) {
                return t.CrTime - e.CrTime;
            }), t.setData({
                lists: n
            });
        }), a.globalData.cardSocket.socketTask.onClose(function(e) {
            t.data.socketTimeOut && (a.globalData.cardSocket = void 0, t.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), t.openSocket());
        });
    },
    goChatDialogue: function(e) {
        var t = this, a = e.currentTarget.dataset.userid, s = e.currentTarget.dataset.imgurl, o = e.currentTarget.dataset.chatname;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/chatDialogue?id=" + a + "&imgurl=" + s + "&CardID=" + t.data.BusinessCardID + "&OtherName=" + o
            });
        }, 10);
    },
    getChatUserList: function() {
        var e = this;
        a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=getChatUserList&fromUserID=" + e.data.WebUserID,
            method: "GET",
            success: function(t) {
                200 == t.code && (e.setData({
                    lists: t.data.list
                }), 0 == t.data.list.length && e.setData({
                    DefaultImg: !0
                }));
            },
            fail: function(e) {}
        });
    },
    onMessageSubmit: function(e) {
        var t = {
            formID: e.detail.formId,
            userID: a.globalData.WebUserID
        };
        a.saveFormID(t, function(e) {});
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (a.globalData.cardSocket = void 0);
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (a.globalData.cardSocket = void 0);
    }
});