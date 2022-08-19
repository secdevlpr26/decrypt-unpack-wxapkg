function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

var a = getApp(), e = (require("../../../common.js"), require("../../../components/utils/socket.js"));

Page({
    data: {
        baseUrl: a.globalData.siteBaseUrl,
        msgList: [],
        otherMsgList: [],
        radarFn: [ {
            img: "/images/wxapp/bench_01.png",
            name: "行为跟踪",
            count: 0,
            type: 0
        }, {
            img: "/images/wxapp/bench_02.png",
            name: "名片统计",
            count: 0,
            type: 1
        }, {
            img: "/images/wxapp/bench_03.png",
            name: "用户统计",
            count: 0,
            type: 2
        }, {
            img: "/images/wxapp/bench_04.png",
            name: "数据统计",
            count: 0,
            type: 3
        } ],
        msgBlank: !1,
        materialCount: 0,
        socketTimeOut: !0,
        socketlianjie: !1,
        phonelicense: !1,
        fork: !1,
        rankingList: [],
        materialList: [],
        canSave: !0,
        rankingListBlank: !1,
        materialListBlank: !1
    },
    onLoad: function(t) {
        var e = this;
        a.registerGlobalFunctions(e), this.setData({
            optionsobj: t
        });
    },
    onShow: function() {
        a.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData,
            timesLimit: !1
        }), wx.getSetting({
            success: function(t) {
                "" != wx.getStorageSync("authorize") && "false" == wx.getStorageSync("authorize") && (t.authSetting["scope.writePhotosAlbum"] ? that.setData({
                    canSave: !0
                }) : that.setData({
                    canSave: !1
                }));
            }
        });
    },
    initData: function() {
        var t = this, e = a.globalData.userInfo;
        t.setData({
            nickName: e.nickName,
            avatarUrl: e.avatarUrl
        }), this.getBusinessCardInfo(), this.getChatUserList(), a.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket()), this.getMaterialList();
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        });
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), a.globalData.cardSocket && (a.globalData.cardSocket.close(), setTimeout(function() {
            a.globalData.cardSocket = void 0;
        }, 200));
    },
    onShareAppMessage: function() {
        var t = this, e = t.data.optionsobj;
        e.currentTab = 0;
        var s = "/pages/company/businessCard/cardDetails?BusinessCardID=" + e.BusinessCardID + "&SiteID=" + e.SiteID + "&currentTab=0&userid=" + a.globalData.WebUserID + "&isShare=1";
        console.log(s, "eee"), t.ontranspond();
        var n = t.data.cardcontent, o = "您好，我是" + n.CompanyName + n.Position + n.UserName + "，这是我的名片请惠存", i = t.data.baseUrl + n.PersonImg;
        return a.shareAppMessage({
            url: s,
            title: o,
            imageUrl: i
        });
    },
    openSocket: function() {
        var s = this, n = a.globalData.WebUserID;
        "{}" == JSON.stringify(a.globalData.socket_config) ? setTimeout(function() {
            s.openSocket();
        }, 5e3) : (a.globalData.cardSocket && a.globalData.cardSocket.close(), a.globalData.cardSocket = e.run(), 
        e.listen("websocket-connected", function(t) {
            var e = {
                client_id: t.clientid,
                fromUserID: n
            };
            a.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: e,
                method: "POST",
                hideLoading: !0,
                success: function(t) {
                    200 == t.code ? (console.log("绑定成功"), a.globalData.cardSocket.socketTask.onClose(function(t) {
                        s.data.socketlianjie && (a.globalData.cardSocket = void 0, s.openSocket());
                    })) : setTimeout(function() {
                        s.data.socketlianjie && s.openSocket();
                    }, 5e3);
                },
                fail: function(t) {}
            });
        }), a.globalData.cardSocket.listen("businesscard_msg", function(t) {
            var a = s.data.radarFn;
            a[0].count = t.count, s.setData({
                radarFn: a
            });
        }), a.globalData.cardSocket.listen("chat_msg", function(e) {
            var n = s.data.msgList, o = s.data.otherMsgList, i = o.find(function(t) {
                return t.LastMessageInfo.FromUserID === e.fromUserID;
            });
            if (i) {
                i.CrTime = e.crTime, "" == i.IsReadCount ? i.IsReadCount = 1 : "..." != i.IsReadCount && (i.IsReadCount = Number(i.IsReadCount) + 1);
                var r = o.findIndex(function(t) {
                    return t.LastMessageInfo.FromUserID === e.fromUserID;
                });
                r > -1 && (o[r] = i);
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
                c.CrTime = e.crTime, c.IsReadCount = 1, c.LastMessageInfo = {
                    Content: e.content,
                    CrTime: e.crTime,
                    FromUserID: e.fromUserID,
                    ID: "",
                    IsRead: "0",
                    SiteID: a.globalData.siteId,
                    ToUserID: e.toUserID,
                    Type: "text"
                }, c.UserInfo = {
                    BindWxApp: "",
                    HeadImgUrl: e.HeadImgUrl,
                    NickName: e.NickName,
                    UserID: e.fromUserID
                }, o = [].concat(t(o), [ c ]);
            }
            o = o.sort(function(t, a) {
                return a.CrTime - t.CrTime;
            }), n = [].concat(t(o));
            for (var u = [], d = 0; d < n.length; d++) "" != n[d].IsReadCount && u.push(n[d]);
            s.setData({
                otherMsgList: o,
                msgList: u,
                msgBlank: !1
            });
        }), a.globalData.cardSocket.socketTask.onError(function(t) {
            setTimeout(function() {
                s.data.socketlianjie && s.openSocket();
            }, 5e3);
        }));
    },
    listenSocket: function() {
        var e = this;
        e.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), a.globalData.cardSocket.listen("businesscard_msg", function(t) {
            var a = e.data.radarFn;
            a[0].count = t.count, e.setData({
                radarFn: a
            });
        }), a.globalData.cardSocket.listen("chat_msg", function(s) {
            var n = e.data.msgList, o = e.data.otherMsgList, i = o.find(function(t) {
                return t.LastMessageInfo.FromUserID === s.fromUserID;
            });
            if (i) {
                i.CrTime = s.crTime, "" == i.IsReadCount ? i.IsReadCount = 1 : "..." != i.IsReadCount && (i.IsReadCount = Number(i.IsReadCount) + 1);
                var r = o.findIndex(function(t) {
                    return t.LastMessageInfo.FromUserID === s.fromUserID;
                });
                r > -1 && (o[r] = i);
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
                    CrTime: s.crTime,
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
                }, o = [].concat(t(o), [ c ]);
            }
            o = o.sort(function(t, a) {
                return a.CrTime - t.CrTime;
            }), n = [].concat(t(o));
            for (var u = [], d = 0; d < n.length; d++) "" != n[d].IsReadCount && u.push(n[d]);
            e.setData({
                otherMsgList: o,
                msgList: u,
                msgBlank: !1
            });
        }), a.globalData.cardSocket.socketTask.onClose(function(t) {
            e.data.socketTimeOut && (a.globalData.cardSocket = void 0, e.setData({
                socketTimeOut: !1,
                socketlianjie: !0
            }), e.openSocket());
        });
    },
    from_send: function(t) {
        var e = {
            formID: t.detail.formId,
            userID: a.globalData.WebUserID
        };
        a.saveFormID(e, function(t) {});
    },
    toAIradar: function(t) {
        var a = this, e = t.currentTarget.dataset.currenttab, s = a.data.optionsobj.BusinessCardID;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/airadar?cardid=" + s + "&currentTab=" + e
            });
        }, 50);
    },
    toLeaveWrod: function(t) {
        var a = this.data.optionsobj.BusinessCardID;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/chatmessage?CardID=" + a
            });
        }, 50);
    },
    goChatDialogue: function(t) {
        var a = this, e = t.currentTarget.dataset.imgurl, s = t.currentTarget.dataset.id, n = t.currentTarget.dataset.name, o = a.data.optionsobj.BusinessCardID;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/chatDialogue?id=" + s + "&imgurl=" + e + "&CardID=" + o + "&OtherName=" + n
            });
        }, 50);
    },
    ontranspond: function() {
        a.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateShareForwardingAmount&ID=1600&SiteID=6688",
            method: "GET",
            success: function(t) {
                t.success;
            },
            fail: function(t) {},
            hideLoading: !0
        });
    },
    toCardDetails: function() {
        var t = this, e = a.globalData.siteId, s = t.data.optionsobj.BusinessCardID;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/cardDetails?BusinessCardID=" + s + "&SiteID=" + e + "&fromWrokbench=1"
            });
        }, 50);
    },
    getBusinessCardInfo: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardInfoByCardID&UserID=" + a.globalData.WebUserID + "&SiteID=" + t.data.optionsobj.SiteID + "&BusinessCardID=" + t.data.optionsobj.BusinessCardID,
            method: "GET",
            success: function(a) {
                if (a.success) {
                    var e = t.data.radarFn;
                    e[0].count = a.unreadNum, t.setData({
                        cardcontent: a.info.card_info,
                        radarFn: e,
                        materialCount: a.info.materialCount,
                        phonestatus: 0
                    }), a.info.card_info.UserName && a.info.card_info.Position && a.info.card_info.UserName.length + a.info.card_info.Position.length >= 12 && t.setData({
                        wrap: !0
                    }), 1 == a.info.card_info.IsBoss && t.getBusinessCardScan();
                } else console.log("getBusinessCardInfo fail" + a.msg);
            },
            fail: function(t) {}
        });
    },
    shareHfive: function() {
        var t = this;
        this.setData({
            shareMarkFlag: !1
        }), setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/shareCard?companyName=" + t.data.cardcontent.CompanyName + "&position=" + t.data.cardcontent.Position + "&mobile=" + t.data.cardcontent.Mobile + "&personImg=" + t.data.cardcontent.PersonImg + "&id=" + t.data.cardcontent.ID + "&username=" + t.data.cardcontent.UserName + "&email=" + t.data.cardcontent.Email + "&SiteID=" + a.globalData.siteId
            });
        }, 50);
    },
    toMaterials: function() {
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/material-library"
            });
        }, 50);
    },
    toBossList: function(t) {
        var a = this.data.optionsobj.BusinessCardID;
        t.currentTarget.dataset.isboss;
        setTimeout(function() {
            wx.navigateTo({
                url: "/pages/company/businessCard/rankinglist?typename=名片浏览&filterDay=7&itemType=1&isBoss=1&BusinessCardID=" + a
            });
        }, 50);
    },
    getChatUserList: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=getChatUserList&fromUserID=" + a.globalData.WebUserID,
            method: "GET",
            success: function(a) {
                if (a.success) {
                    var e = a.data.list, s = [];
                    e.forEach(function(t) {
                        "" != t.IsReadCount && s.push(t);
                    }), 0 == s.length ? t.setData({
                        msgBlank: !0
                    }) : t.setData({
                        msgBlank: !1
                    }), t.setData({
                        msgList: s,
                        otherMsgList: e
                    });
                } else console.log("getChatUserList fail" + a.msg);
            },
            fail: function(t) {}
        });
    },
    getBusinessCardScan: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=businessCardScan&scope=7&page=1&pageSize=3",
            method: "GET",
            success: function(a) {
                a.success ? 0 == a.data.list.length ? t.setData({
                    rankingListBlank: !0
                }) : t.setData({
                    rankingList: a.data.list,
                    rankingListBlank: !1
                }) : console.log("getBusinessCardScan fail" + a.msg);
            },
            fail: function(t) {}
        });
    },
    toUserAi: function(t) {
        var a = t.currentTarget.dataset.cardid, e = !1;
        this.data.optionsobj.BusinessCardID && a != this.data.optionsobj.BusinessCardID && (e = !0), 
        wx.navigateTo({
            url: "/pages/company/businessCard/airadar?cardid=" + a + "&currentTab=0&bossMsgStatus=" + e
        });
    },
    getMaterialList: function() {
        var t = this;
        a.sendRequest({
            url: "/index.php?c=Front/Material/Material&a=getMaterialList&page=1",
            method: "GET",
            success: function(a) {
                a.success ? 0 == a.list.length ? t.setData({
                    materialListBlank: !0
                }) : t.setData({
                    materialList: a.list,
                    materialListBlank: !1
                }) : console.log("getMaterialList fail" + a.msg);
            },
            fail: function(t) {}
        });
    },
    saveImg: function(t) {
        var a = this;
        wx.getSetting({
            success: function(e) {
                if (e.authSetting["scope.writePhotosAlbum"]) {
                    var s = t.currentTarget.dataset.saveindex, n = [];
                    if (0 == (n = a.data.materialList[s].MaterialContent).length) return;
                    n.forEach(function(t, e) {
                        n[e].indexOf("https") < 0 && (n[e] = a.data.baseUrl + t);
                    });
                    var o = 0;
                    a.saveLoad(n[o], function(t) {
                        if (wx.showToast({
                            title: "第" + (o + 1) + "张" + (t ? "成功" : "失败"),
                            icon: "success",
                            mask: !0,
                            duration: 2e3
                        }), n.length !== o + 1) return o++, n[o];
                    });
                } else wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        wx.setStorageSync("authorize", "true");
                    },
                    fail: function() {
                        wx.setStorageSync("authorize", "false"), a.setData({
                            canSave: !1
                        });
                    }
                });
            }
        });
    },
    copyText: function(t) {
        var e = this, s = t.currentTarget.dataset.descriptor, n = e.data.materialList[s].Descriptor;
        wx.setClipboardData({
            data: n,
            success: function(t) {
                a.showToast({
                    title: "内容已复制",
                    icon: "none"
                });
            }
        });
    },
    bindClickImg: function(t) {
        var a = this, e = t.currentTarget.dataset.index, s = t.currentTarget.dataset.imagearr;
        s.forEach(function(t, e) {
            s[e] = a.data.baseUrl + t;
        }), wx.previewImage({
            current: s[e],
            urls: s
        });
    },
    saveLoad: function(t, a) {
        var e = this;
        wx.showToast({
            title: "",
            icon: "loading",
            mask: !0,
            duration: 5e3
        }), wx.downloadFile({
            url: t,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function(t) {
                        var s = a && a(!0);
                        s && setTimeout(function() {
                            e.saveLoad(s, a);
                        }, 2e3);
                    },
                    fail: function(t) {
                        var s = a && a(!1);
                        s && e.saveLoad(s, a);
                    }
                });
            }
        });
    },
    openSet: function() {
        wx.getStorageSync("userSystemInfo") && a.compareVersion("2.0.7", wx.getStorageSync("userSystemInfo").SDKVersion) > -1 && wx.openSetting({});
    }
});