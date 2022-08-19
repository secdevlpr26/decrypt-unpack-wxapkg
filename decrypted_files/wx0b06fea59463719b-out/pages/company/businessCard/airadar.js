function a(a) {
    if (Array.isArray(a)) {
        for (var t = 0, e = Array(a.length); t < a.length; t++) e[t] = a[t];
        return e;
    }
    return Array.from(a);
}

var t = getApp(), e = (require("../../../common.js"), require("../../../components/utils/socket.js"));

Page({
    filterBox: null,
    data: {
        isLoading: !1,
        pullDownRefreshFlag: !0,
        falgAjax: !0,
        markFlag: !1,
        filterDayFlag: !1,
        baseUrl: t.globalData.siteBaseUrl,
        currentTab: 0,
        winHeight: "",
        behaviorBlank: !1,
        behaviorcount: 99,
        haveGetBehavior: !1,
        pagesize: 10,
        behaviorList: [],
        cardFilterDay: 7,
        userFilterDay: 7,
        dataFilterDay: 7,
        dataSocket: "",
        showMesTipFlag: !1,
        mesNum: 0,
        showBehaviorNoDataTip: !1,
        haveGetCardStatistics: !1,
        statistics: {},
        userCountList: [],
        userCurrentPage: 1,
        userTotalPage: 99,
        haveUserTypeGroup: !1,
        userCountBlank: !1,
        userTop: 0,
        noMoreUserdataTip: !1,
        dataCountList: [],
        goodsCount: "",
        goodsSaleCount: "",
        serviceCount: "",
        businessCount: "",
        articeCount: "",
        socketTimeOut: !0,
        socketlianjie: !1,
        socketHide: !1,
        haveSummary: !1
    },
    onLoad: function(a) {
        var t = this;
        t.getSwipHeight(), t.setData({
            optionsobj: a
        }), t.loadCurData(a);
    },
    onShow: function() {
        var a = this;
        t.globalData.cardSocket ? this.listenSocket() : (a.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket());
    },
    onPullDownRefresh: function() {
        var a = this, t = a.data.pullDownRefreshFlag, e = a.data.currentTab;
        t && (a.setData({
            pullDownRefreshFlag: !1
        }), a.data.pullDownRefreshFlag = !1, setTimeout(function() {
            0 == e && a.getTrackingBehaviorList(!0), a.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    openSocket: function() {
        var a = this, s = a.data.optionsobj.bossMsgStatus, i = t.globalData.WebUserID;
        "{}" != JSON.stringify(t.globalData.socket_config) && i ? (t.globalData.cardSocket && t.globalData.cardSocket.close(), 
        t.globalData.cardSocket = e.run(), t.globalData.cardSocket.listen("websocket-connected", function(e) {
            var s = {
                client_id: e.clientid,
                fromUserID: i
            };
            t.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: s,
                method: "POST",
                hideLoading: !0,
                success: function(e) {
                    200 == e.code ? (a.setData({
                        socketHide: !1
                    }), console.log("绑定成功"), t.globalData.cardSocket.socketTask.onClose(function(e) {
                        a.data.socketlianjie && (t.globalData.cardSocket = void 0, a.setData({
                            socketHide: !0
                        }), a.openSocket());
                    })) : setTimeout(function() {
                        a.data.socketlianjie && a.openSocket();
                    }, 5e3);
                },
                fail: function(a) {}
            });
        }), t.globalData.cardSocket.listen("businesscard_msg", function(t) {
            t.count > 0 && ("false" == s || !s) && a.setData({
                showMesTipFlag: !0,
                mesNum: t.count
            });
        }), t.globalData.cardSocket.socketTask.onError(function(t) {
            setTimeout(function() {
                a.data.socketlianjie && a.openSocket();
            }, 5e3);
        })) : setTimeout(function() {
            a.openSocket();
        }, 5e3);
    },
    listenSocket: function() {
        var a = this, e = a.data.optionsobj.bossMsgStatus;
        a.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), t.globalData.cardSocket.listen("businesscard_msg", function(t) {
            t.count > 0 && ("false" == e || !e) && a.setData({
                showMesTipFlag: !0,
                mesNum: t.count
            });
        }), t.globalData.cardSocket.socketTask.onClose(function(e) {
            a.data.socketTimeOut && (t.globalData.cardSocket = void 0, a.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), a.openSocket());
        });
    },
    loadCurData: function(a) {
        var t = this;
        switch (this.setData({
            currentTab: a.currentTab
        }), a.currentTab) {
          case "0":
            t.data.haveGetBehavior || (t.getTrackingBehaviorList(!0), t.setData({
                haveGetBehavior: !0
            }));
            break;

          case "1":
            t.data.haveGetCardStatistics || (t.getBusinessCardStatistics(), t.setData({
                haveGetCardStatistics: !0
            }));
            break;

          case "2":
            t.data.haveUserTypeGroup || (t.userTypeGroup(), t.setData({
                haveUserTypeGroup: !0
            }));
            break;

          case "3":
            t.data.haveSummary || (t.summary(), t.setData({
                haveSummary: !0
            }));
        }
    },
    switchTab: function(a) {
        var t = this, e = a.detail.current;
        t.data.currentTab != e && (this.setData({
            currentTab: a.detail.current
        }), 0 == e ? t.data.haveGetBehavior || (t.getTrackingBehaviorList(!0), t.setData({
            haveGetBehavior: !0
        })) : 1 == e ? t.data.haveGetCardStatistics || (t.getBusinessCardStatistics(), t.setData({
            haveGetCardStatistics: !0
        })) : 2 == e ? t.data.haveUserTypeGroup || (t.userTypeGroup(), t.setData({
            haveUserTypeGroup: !0
        })) : 3 == e && (t.data.haveSummary || (t.summary(), t.setData({
            haveSummary: !0
        }))));
    },
    refresh: function() {
        var a = this;
        a.setData({
            showMesTipFlag: !1,
            mesNum: 0,
            showBehaviorNoDataTip: !1
        }, function() {
            a.getTrackingBehaviorList(!0);
        });
    },
    swichNav: function(a) {
        var t = a.currentTarget.dataset.current, e = this;
        e.data.currentTab != t && (this.setData({
            currentTab: t
        }), 0 == t ? e.data.haveGetBehavior || (e.getTrackingBehaviorList(!0), e.setData({
            haveGetBehavior: !0
        })) : 1 == t ? e.data.haveGetCardStatistics || (e.getBusinessCardStatistics(), e.setData({
            haveGetCardStatistics: !0
        })) : 2 == t ? e.data.haveUserTypeGroup || (e.userTypeGroup(), e.setData({
            haveUserTypeGroup: !0
        })) : 3 == t && (e.data.haveSummary || (e.summary(), e.setData({
            haveSummary: !0
        }))));
    },
    from_send: function(a) {
        var e = {
            formID: a.detail.formId,
            userID: t.globalData.WebUserID
        };
        t.saveFormID(e, function(a) {});
    },
    getSwipHeight: function() {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                var e = t.windowHeight, s = t.windowWidth, i = 750 / s, o = e * i - 88, r = e * i - 168;
                a.setData({
                    winHeight: o,
                    winHeight2: r,
                    afterWinHeight: e * i,
                    userCountHeight: parseInt(e - s / 750 * 184)
                });
            }
        });
    },
    touserdetails: function(a) {
        var t = this, e = t.data.currentTab, s = void 0;
        0 == e ? s = 1 : 2 == e && (s = 0);
        var i = t.data.optionsobj.cardid, o = a.currentTarget.dataset.headimgurl, r = a.currentTarget.dataset.nickname, n = a.currentTarget.dataset.userid;
        wx.navigateTo({
            url: "/pages/company/businessCard/userdetails?cardid=" + i + "&headImgUrl=" + o + "&userId=" + n + "&currentTab=" + s + "&bossMsgStatus=" + t.data.optionsobj.bossMsgStatus + "&nickName=" + r
        });
    },
    toDataDetails: function(a) {
        var t = this, e = a.currentTarget.dataset.index, s = t.data.cardFilterDay, i = t.data.optionsobj.cardid, o = a.currentTarget.dataset.typeid, r = "";
        switch (Number(e)) {
          case 15:
            r = "查看商城详细";
            break;

          case 12:
            r = "查看动态详细";
            break;

          case 3:
            r = "查看保存电话详细";
            break;

          case 5:
            r = "查看转发名片详细";
            break;

          case 6:
            r = "查看点赞详细";
            break;

          case 7:
            r = "查看复制微信详细";
            break;

          case 8:
            r = "查看复制QQ详细";
            break;

          case 9:
            r = "查看复制邮箱详细";
            break;

          case 11:
            r = "查看播放语音详细";
            break;

          case 1:
            r = "查看名片浏览详细";
            break;

          case 2:
            r = "查看拨打电话详细";
            break;

          case 4:
            r = "查看留言互动详细";
        }
        wx.navigateTo({
            url: "/pages/company/businessCard/datadetails?title=" + r + "&cardFilterDay=" + s + "&typeId=" + o + "&cardid=" + i + "&isNoMember=1&bossMsgStatus=" + t.data.optionsobj.bossMsgStatus
        });
    },
    chooseValue: function(a) {
        var t = this, e = a.currentTarget.dataset.value, s = t.data.currentTab, i = t.data.cardFilterDay, o = t.data.userFilterDay, r = t.data.dataFilterDay;
        switch (s) {
          case "1":
            i != e && t.setData({
                cardFilterDay: e
            }, function() {
                t.getBusinessCardStatistics();
            });
            break;

          case "2":
            o != e && t.setData({
                userFilterDay: e,
                userTop: 0,
                noMoreUserdataTip: !1
            }, function() {
                t.userTypeGroup(!0);
            });
            break;

          case "3":
            r != e && t.setData({
                dataFilterDay: e
            }, function() {
                t.summary();
            });
        }
    },
    getTrackingBehaviorList: function(e) {
        var s = this, i = s.data.optionsobj.bossMsgStatus;
        e && (s.data.behaviorcount = 99, s.data.behaviorList = []);
        var o = s.data.behaviorcount, r = s.data.behaviorList, n = 0;
        if (r.length > 0) for (var c = 0; c < r.length; c++) n += r[c].list.length; else n = 0;
        var u = s.data.optionsobj.cardid;
        if (o > n && s.data.falgAjax) {
            s.setData({
                falgAjax: !1
            }), n > 0 && s.setData({
                isLoading: !0
            });
            var d = Math.ceil(n / 20) + 1;
            t.sendRequest({
                hideLoading: n > 0,
                url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getTrackingBehaviorList&tbPage=" + d + "&tbTypeID=" + u,
                method: "GET",
                success: function(t) {
                    if (t.success) {
                        0 == t.list.length ? s.setData({
                            behaviorBlank: !0
                        }) : s.setData({
                            behaviorBlank: !1
                        });
                        var e = t.list;
                        e.forEach(function(a) {
                            a.list.forEach(function(a) {
                                Number(a.quantity) > 1e5 && (a.quantity = (a.quantity / 1e4).toFixed(0), a.showwan = !0), 
                                "" == a.headImgUrl && (a.headImgUrl = s.data.baseUrl + "/images/wxapp/touxiang.jpg");
                            });
                        });
                        var o = r.length;
                        o ? (e[0].time || (r[o - 1].list = [].concat(a(r[o - 1].list), a(e[0].list)), e.splice(0, 1)), 
                        r = [].concat(a(r), a(e))) : r = e, s.setData({
                            behaviorList: r,
                            falgAjax: !0,
                            behaviorcount: t.count
                        }, function() {
                            s.setData({
                                isLoading: !1
                            });
                        }), "false" != i && i || s.updateBehaviorStatus();
                    } else console.log("getTrackingBehaviorList fail" + t.msg);
                }
            });
        } else o == n && s.setData({
            showBehaviorNoDataTip: !0
        });
    },
    getBusinessCardStatistics: function() {
        var a = this, e = a.data.optionsobj.cardid, s = a.data.cardFilterDay;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getBusinessCardStatistics&scope=" + s + "&businessCardID=" + e,
            method: "GET",
            success: function(t) {
                t.success ? (t.data.body.forEach(function(a) {
                    switch (Number(a.type)) {
                      case 15:
                        a.icon = "icon-enterprise";
                        break;

                      case 12:
                        a.icon = "icon-dongtai1";
                        break;

                      case 3:
                        a.icon = "icon-dianhua1";
                        break;

                      case 5:
                        a.icon = "icon-mingpian-copy";
                        break;

                      case 6:
                        a.icon = "icon-zan1";
                        break;

                      case 7:
                        a.icon = "icon-weixin";
                        break;

                      case 8:
                        a.icon = "icon-qq";
                        break;

                      case 9:
                        a.icon = "icon-_youxiang-copy";
                        break;

                      case 11:
                        a.icon = "icon-yuyin--copy";
                    }
                }), a.setData({
                    statistics: t.data
                })) : console.log("getBusinessCardStatistics fail" + t.msg);
            },
            fail: function(a) {}
        });
    },
    loadMoreData: function() {
        var a = this, t = a.data.currentTab;
        0 == t ? a.getTrackingBehaviorList() : 2 == t && a.userTypeGroup();
    },
    updateBehaviorStatus: function() {
        var a = this.data.optionsobj.cardid;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=edit",
            method: "POST",
            data: {
                tbTypeID: a
            },
            hideLoading: !0,
            success: function(a) {
                a.success || console.log("updateBehaviorStatus fail" + a.msg);
            },
            fail: function(a) {}
        });
    },
    userTypeGroup: function(a) {
        var e = this, s = e.data.optionsobj.cardid, i = e.data.userFilterDay;
        a && (e.data.userCurrentPage = 1, e.data.userTotalPage = 99, e.data.userCountList = []);
        var o = e.data.userTotalPage, r = e.data.userCurrentPage, n = e.data.userCountList.length;
        if (o > r && e.data.falgAjax) {
            var c = Math.ceil(n / 20) + 1;
            e.setData({
                falgAjax: !1
            }), n > 0 && e.setData({
                isLoading: !0
            }), t.sendRequest({
                hideLoading: n > 0,
                url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=userTypeGroup&scope=" + i + "&page=" + c + "&businessCardID=" + s,
                method: "GET",
                success: function(a) {
                    if (a.success) {
                        var t = a.data.list;
                        if (0 == t.length) e.setData({
                            userCountBlank: !0
                        }); else {
                            t.forEach(function(a) {
                                a.number > 1e5 && (a.number = (a.number / 1e4).toFixed(0), a.showwan = !0), "" == a.avatar && (a.avatar = e.data.baseUrl + "/images/wxapp/touxiang.jpg");
                            });
                            for (var s = 0; s < t.length; s++) e.data.userCountList.push(t[s]);
                            e.setData({
                                userCountList: e.data.userCountList,
                                userTotalPage: a.data.statPage,
                                userCurrentPage: a.data.page,
                                falgAjax: !0
                            }, function() {
                                e.setData({
                                    isLoading: !1
                                });
                            });
                        }
                    } else console.log("userTypeGroup fail" + a.msg);
                },
                fail: function(a) {}
            });
        } else o == r && e.setData({
            noMoreUserdataTip: !0
        });
    },
    summary: function() {
        var a = this, e = a.data.dataFilterDay;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=summary&scope=" + e,
            method: "GET",
            success: function(t) {
                t.success && (t.data.forEach(function(a) {
                    18 == a.type ? a.iconfont = "icon-shangpin introduceIcon1" : 24 == a.type ? a.iconfont = "icon-qianbao1 introduceIcon2" : 19 == a.type ? a.iconfont = "icon-fuwu introduceIcon3" : 1 == a.type ? a.iconfont = "icon-mingpian-copy introduceIcon4" : 12 == a.type ? a.iconfont = "icon-wenzhang introduceIcon5" : 23 == a.type && (a.iconfont = "icon-huiyuan1 introduceIcon1");
                }), a.setData({
                    dataCountList: t.data
                }));
            },
            fail: function(a) {}
        });
    },
    initRankingList: function(a) {
        var t = this, e = a.currentTarget.dataset.initname, s = t.data.dataFilterDay, i = a.currentTarget.dataset.type, o = t.data.optionsobj.cardid;
        23 == i ? wx.navigateTo({
            url: "/pages/company/businessCard/datadetails?title=" + e + "&dataFilterDay=" + s + "&cardid=" + o + "&isNoMember=0&bossMsgStatus=" + t.data.optionsobj.bossMsgStatus
        }) : wx.navigateTo({
            url: "/pages/company/businessCard/rankinglist?typename=" + e + "&filterDay=" + s + "&itemType=" + i
        });
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (t.globalData.cardSocket = void 0);
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (t.globalData.cardSocket = void 0);
    }
});