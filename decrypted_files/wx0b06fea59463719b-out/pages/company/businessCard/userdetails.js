var t = getApp(), e = require("../AddrManage.js"), a = require("../../../components/utils/socket.js");

Page({
    data: {
        baseUrl: t.globalData.siteBaseUrl,
        pullDownRefreshFlag: !0,
        winHeight: "",
        currentTab: 1,
        routerCardid: "",
        routerHeadImgUrl: "",
        routerNickName: "",
        routerUserId: "",
        RecordList: [],
        RecordCount: "",
        RecordPage: 1,
        RecordpageCount: "",
        RecordTabStatus: !1,
        showMoreView: !1,
        showNoMore: !1,
        recordDefaultImg: !1,
        rankingLists: [],
        ChartList: [],
        ChartTabStatus: !1,
        moreGoods: !1,
        userInfoData: {},
        userName: "",
        regionText: "",
        butStatus: !0,
        userTabStatus: !1,
        usergender: "",
        useraddress: "",
        AreaListCopy: "河北省,石家庄市,长安区",
        loadDone: !1,
        RecordCountNum: !1,
        optionsobjMsg: !0,
        hudongStatus: !1,
        socketHide: !1,
        socketTimeOut: !0,
        socketlianjie: !1
    },
    onLoad: function(t) {
        var a = this;
        t.bossMsgStatus && "true" == t.bossMsgStatus && a.setData({
            optionsobjMsg: !1
        }), a.setData({
            routerCardid: t.cardid,
            routerHeadImgUrl: t.headImgUrl,
            routerNickName: t.nickName,
            routerUserId: t.userId,
            optionsobj: t
        }), 1 == t.currentTab ? a.setData({
            currentTab: t.currentTab,
            hudongStatus: !0
        }, function() {
            a.getInteractRecord();
        }) : 0 == t.currentTab ? a.setData({
            currentTab: t.currentTab,
            ChartTabStatus: !0
        }, function() {
            a.getInteractSituation();
        }) : 2 == t.currentTab && a.setData({
            currentTab: t.currentTab,
            userTabStatus: !0
        }, function() {
            a.userTypeDetail();
        }), a.getSwipHeight(), a.addrManage = new e({
            page: a,
            onSelected: a.onAddrManageClick
        });
    },
    onShow: function() {
        t.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket());
    },
    openSocket: function() {
        var e = this, o = t.globalData.WebUserID;
        "{}" != JSON.stringify(t.globalData.socket_config) && o ? (t.globalData.cardSocket = a.run(), 
        t.globalData.cardSocket.listen("websocket-connected", function(a) {
            var r = {
                client_id: a.clientid,
                fromUserID: o
            };
            t.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: r,
                method: "POST",
                hideLoading: !0,
                success: function(a) {
                    200 == a.code ? (e.setData({
                        socketHide: !1
                    }), console.log("绑定成功"), t.globalData.cardSocket.socketTask.onClose(function(a) {
                        e.data.socketlianjie && (t.globalData.cardSocket = void 0, e.setData({
                            socketHide: !0
                        }), e.openSocket());
                    })) : setTimeout(function() {
                        e.data.socketlianjie && e.openSocket();
                    }, 5e3);
                },
                fail: function(t) {}
            });
        }), t.globalData.cardSocket.socketTask.onError(function(t) {
            setTimeout(function() {
                e.data.socketlianjie && e.openSocket();
            }, 5e3);
        })) : setTimeout(function() {
            e.openSocket();
        }, 1500);
    },
    listenSocket: function() {
        var e = this;
        e.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), t.globalData.cardSocket.socketTask.onClose(function(a) {
            e.data.socketTimeOut && (t.globalData.cardSocket = void 0, e.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), e.openSocket());
        });
    },
    swichNav: function(t) {
        var e = t.currentTarget.dataset.current, a = this;
        if (a.data.currentTab != e) if (a.setData({
            currentTab: e
        }), "0" == e) {
            if (a.data.ChartTabStatus) return;
            a.setData({
                ChartTabStatus: !0
            }, function() {
                a.getInteractSituation();
            });
        } else if ("1" == e) {
            if (a.data.hudongStatus) return;
            a.setData({
                hudongStatus: !0
            }, function() {
                a.getInteractRecord();
            });
        } else if ("2" == e) {
            if (a.data.userTabStatus) return;
            a.setData({
                userTabStatus: !0,
                butStatus: !0
            }, function() {
                a.userTypeDetail();
            });
        }
    },
    switchTab: function(t) {
        var e = t.detail.current, a = this;
        if (a.data.currentTab != e) if (a.setData({
            currentTab: e
        }), "0" == e) {
            if (a.data.ChartTabStatus) return;
            a.setData({
                ChartTabStatus: !0
            }, function() {
                a.getInteractSituation();
            });
        } else if ("1" == e) {
            if (a.data.hudongStatus) return;
            a.setData({
                hudongStatus: !0
            }, function() {
                a.getInteractRecord();
            });
        } else if ("2" == e) {
            if (a.data.userTabStatus) return;
            a.setData({
                userTabStatus: !0,
                butStatus: !0
            }, function() {
                a.userTypeDetail();
            });
        }
    },
    from_send: function(e) {
        var a = {
            formID: e.detail.formId,
            userID: t.globalData.WebUserID
        };
        t.saveFormID(a, function(t) {});
    },
    getSwipHeight: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.windowHeight * (750 / e.windowWidth) - 284;
                t.setData({
                    winHeight: a
                });
            }
        });
    },
    getInteractRecord: function(e) {
        var a = this;
        e && a.setData({
            RecordPage: 1
        }), t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getInteractRecord&tbPage=" + a.data.RecordPage + "&tbTypeID=" + a.data.routerCardid + "&tbUserID=" + a.data.routerUserId,
            method: "GET",
            hideLoading: a.data.RecordPage > 1,
            success: function(t) {
                if (t.success) {
                    var o = a.data.RecordList, r = [];
                    (o = e ? t.list : o.concat(t.list)).forEach(function(t, e) {
                        parseInt(t.quantity) > 1e5 && ((r = t.quantity.split("")).splice(-4, 4, "万"), o[e].quantity = r.join(""));
                    }), a.setData({
                        RecordCount: t.count,
                        RecordpageCount: t.pageCount,
                        RecordList: o
                    }), 0 == a.data.RecordList.length && a.setData({
                        RecordCountNum: !0
                    });
                }
            },
            fail: function(t) {}
        });
    },
    RecordListPage: function() {
        var t = this;
        if (t.data.RecordPage != t.data.RecordpageCount) {
            this.setData({
                showMoreView: !0
            });
            t.data.RecordPage++;
            t.getInteractRecord();
        } else this.setData({
            showNoMore: !0,
            showMoreView: !1
        });
    },
    getInteractSituation: function() {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getInteractSituation&tbTypeID=" + e.data.routerCardid + "&tbUserID=" + e.data.routerUserId,
            method: "GET",
            success: function(a) {
                if (a.success) {
                    var o = 0;
                    a.data.forEach(function(t) {
                        o += parseInt(t.maxQuantity);
                    }), a.data.forEach(function(t) {
                        t.column = parseInt(t.maxQuantity / o * 462);
                    });
                    var r = t.globalData.siteId;
                    a.list.forEach(function(t) {
                        t.typeImg.indexOf("comdata") < 0 && (t.typeImg = "/comdata/" + r + "/product/" + t.typeImg);
                    }), e.setData({
                        ChartList: a.data,
                        rankingLists: a.list,
                        moreGoods: a.list.length > 0
                    });
                }
            },
            fail: function(t) {}
        });
    },
    userTypeDetail: function() {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=userTypeDetail&user_id=" + e.data.routerUserId,
            method: "GET",
            success: function(t) {
                var a = "";
                a = "" !== t.data.areaList ? t.data.areaList.replace(/,/g, "") + t.data.address : t.data.address, 
                t.success && e.setData({
                    userInfoData: t.data,
                    selectedArea: t.data.areaList,
                    useraddress: a,
                    usergender: t.data.gender,
                    loadDone: !0
                });
            },
            fail: function(t) {}
        });
    },
    saveUserInfo: function(e) {
        var a = this;
        if (a.from_send(e), 0 != e.currentTarget.dataset.status) {
            var o = {}, r = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, s = /^1[0-9]{10}$/;
            return o.user_id = a.data.routerUserId, o.name = e.detail.value.username, o.phone = e.detail.value.useriphone, 
            o.gender = a.data.usergender, o.wechat = e.detail.value.userwechat, o.email = e.detail.value.useremail, 
            o.address = e.detail.value.useraddress, o.areaList = e.detail.value.AreaList, a.getLength(e.detail.value.username, 40) ? (t.showToast({
                title: "姓名限20个汉字",
                icon: "none",
                duration: 2500
            }), void setTimeout(function() {
                t.hideToast();
            }, 3e3)) : "" == e.detail.value.useriphone || s.test(e.detail.value.useriphone) ? "" == e.detail.value.useremail || r.test(e.detail.value.useremail) ? void t.sendRequest({
                url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=saveUserInfo",
                method: "POST",
                data: o,
                success: function(e) {
                    e.success ? (a.userTypeDetail(), a.setData({
                        butStatus: !0
                    })) : t.showToast({
                        title: e.msg,
                        icon: "none",
                        duration: 2500
                    });
                },
                fail: function(t) {}
            }) : (t.showToast({
                title: "请输入正确的邮箱",
                icon: "none",
                duration: 2500
            }), void setTimeout(function() {
                t.hideToast();
            }, 3e3)) : (t.showToast({
                title: "请输入正确的电话号码",
                icon: "none",
                duration: 2500
            }), void setTimeout(function() {
                t.hideToast();
            }, 3e3));
        }
    },
    onIphone: function(t) {
        var e = t.currentTarget.dataset.iphone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    radioChange: function(t) {
        this.setData({
            usergender: t.detail.value,
            "userInfoData.gender": t.detail.value
        });
    },
    onButtonChange: function(t) {
        var e = this;
        1 != t.currentTarget.dataset.status && e.setData({
            butStatus: !1
        });
    },
    initChatdialogue: function() {
        t.globalData.aiSocket && (t.globalData.aiSocket.close(), setTimeout(function() {
            t.globalData.aiSocket = void 0;
        }, 200)), wx.navigateTo({
            url: "/pages/company/businessCard/chatDialogue?id=" + this.data.routerUserId + "&imgurl=" + this.data.routerHeadImgUrl + "&CardID=" + this.data.routerCardid + "&OtherName=" + this.data.routerNickName + "&userdetails=true"
        });
    },
    onPullDownRefresh: function() {
        var t = this, e = t.data.pullDownRefreshFlag, a = t.data.currentTab;
        e && (t.setData({
            pullDownRefreshFlag: !1
        }), t.data.pullDownRefreshFlag = !1, setTimeout(function() {
            0 == a ? t.getInteractSituation() : 1 == a ? t.getInteractRecord(!0) : 2 == a && t.userTypeDetail(), 
            t.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    errArticleImg: function(t) {
        var e = this, a = t.target.dataset.errImg, o = t.target.dataset.errIndex, r = e.data.rankingLists;
        r[o].typeImg = a, e.setData({
            rankingLists: r
        });
    },
    getLength: function(t, e) {
        for (var a = 0, o = null === t ? "" : t.length, r = -1, s = 0; s < o; s++) a += (r = t.charCodeAt(s)) >= 0 && r <= 128 ? 1 : 2;
        return a > e;
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (t.globalData.cardSocket = void 0);
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (t.globalData.cardSocket = void 0);
    }
});