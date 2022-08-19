function t(t) {
    if (Array.isArray(t)) {
        for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
        return e;
    }
    return Array.from(t);
}

var a = function(t) {
    if (t && t.__esModule) return t;
    var a = {};
    if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
    return a.default = t, a;
}(require("./common/ec-canvas/echarts")), e = require("../../../components/utils/socket.js"), i = getApp();

Page({
    data: {
        isLoading: !1,
        falgAjax: !0,
        baseUrl: i.globalData.siteBaseUrl,
        markFlag: !1,
        filterDayFlag: !1,
        statisticsLines: {},
        barTitle: "",
        cardFilterDay: 7,
        dataFilterDay: 7,
        statisticsBlank: !1,
        haveStatistics: !1,
        statisticsList: [],
        statisticscount: 99,
        total: 0,
        haveGetMemberChart: !1,
        memberList: [],
        userCurrentPage: 1,
        userTotalPage: 99,
        toTop: 0,
        noMoreDataTip: !1,
        socketHide: !1,
        socketTimeOut: !0,
        socketlianjie: !1
    },
    onLoad: function(t) {
        var a = this;
        1 == t.isNoMember ? (this.setBarTitle(t), this.setData({
            cardFilterDay: t.cardFilterDay,
            isNoMember: !0
        })) : this.setData({
            dataFilterDay: t.dataFilterDay,
            isNoMember: !1
        }, function() {
            wx.setNavigationBarTitle({
                title: t.title
            });
        }), this.getHeight(), this.setData({
            optionsobj: t
        }), 1 == t.isNoMember ? a.getBusinessCardStatisticsByType(!0) : this.getNewUsersChart();
    },
    onShow: function() {
        i.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket());
    },
    openSocket: function() {
        var t = this, a = i.globalData.WebUserID;
        "{}" != JSON.stringify(i.globalData.socket_config) && a ? (i.globalData.cardSocket = e.run(), 
        i.globalData.cardSocket.listen("websocket-connected", function(e) {
            var s = {
                client_id: e.clientid,
                fromUserID: a
            };
            i.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: s,
                method: "POST",
                hideLoading: !0,
                success: function(a) {
                    200 == a.code ? (t.setData({
                        socketHide: !1
                    }), console.log("绑定成功"), i.globalData.cardSocket.socketTask.onClose(function(a) {
                        t.data.socketlianjie && (i.globalData.cardSocket = void 0, t.setData({
                            socketHide: !0
                        }), t.openSocket());
                    })) : setTimeout(function() {
                        t.data.socketlianjie && t.openSocket();
                    }, 5e3);
                },
                fail: function(t) {}
            });
        }), i.globalData.cardSocket.socketTask.onError(function(a) {
            setTimeout(function() {
                t.data.socketlianjie && t.openSocket();
            }, 5e3);
        })) : setTimeout(function() {
            t.openSocket();
        }, 1500);
    },
    listenSocket: function() {
        var t = this;
        t.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), i.globalData.cardSocket.socketTask.onClose(function(a) {
            t.data.socketTimeOut && (i.globalData.cardSocket = void 0, t.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), t.openSocket());
        });
    },
    getHeight: function() {
        this.setData({
            height: parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 96)
        });
    },
    setBarTitle: function(t) {
        wx.setNavigationBarTitle({
            title: t.title
        });
    },
    init_line: function(t) {
        var e = this;
        this.statisticsLine.init(function(i, s, o) {
            e.setData({
                eWidth: s,
                eHeight: o
            });
            var n = a.init(i, null, {
                width: s,
                height: o
            });
            return n.setOption(e.getLineOption(t)), n;
        });
    },
    getLineOption: function(t) {
        var a = t.num, e = t.day;
        return {
            title: {
                text: t.name,
                textStyle: {
                    color: "#999",
                    fontSize: 11
                },
                top: "4%"
            },
            tooltip: {
                trigger: "axis",
                show: !0,
                showContent: !1
            },
            color: [ "#ff7200" ],
            grid: {
                left: "2%",
                right: "4%",
                bottom: "0%",
                top: "18%",
                containLabel: !0
            },
            xAxis: {
                type: "category",
                name: "天",
                boundaryGap: !0,
                data: e,
                axisLabel: {
                    textStyle: {
                        color: "#999",
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisTick: {
                    show: !1
                }
            },
            yAxis: {
                x: "left",
                offset: 0,
                type: "value",
                axisTick: {
                    show: !1
                },
                axisLabel: {
                    textStyle: {
                        color: "#999",
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                splitLine: {
                    show: !1
                }
            },
            series: [ {
                name: "",
                type: "line",
                symbol: "circle",
                smooth: !0,
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "top",
                            color: "#333",
                            fontWeight: "bold"
                        }
                    }
                },
                lineStyle: {
                    width: 1
                },
                data: a
            } ]
        };
    },
    chooseValue: function(t) {
        var a = this, e = this, i = t.currentTarget.dataset.value, s = e.data.cardFilterDay, o = e.data.dataFilterDay, n = e.data.isNoMember;
        setTimeout(function() {
            e.setData({
                hideCanvas: !1
            });
        }, 200), this.setData({
            toTop: 0,
            noMoreDataTip: !1
        }), n ? s != i && e.setData({
            cardFilterDay: i,
            toTop: 0
        }, function() {
            a.getBusinessCardStatisticsByType(!0);
        }) : o != i && e.setData({
            dataFilterDay: i,
            haveGetMemberChart: !1,
            toTop: 0
        }, function() {
            e.getNewUsersChart(), e.getNewUsers(!0);
        }), this.setData({
            filterDayFlag: !1
        }, function() {
            setTimeout(function() {
                e.setData({
                    markFlag: !1
                });
            }, 200);
        });
    },
    loadMoreData: function() {
        var t = this;
        1 == t.data.optionsobj.isNoMember ? t.getBusinessCardStatisticsByType() : t.getNewUsers();
    },
    getBusinessCardStatisticsByType: function(a) {
        var e = this;
        a && (e.data.statisticscount = 99, e.data.statisticsList = []);
        var s = e.data.optionsobj.typeId, o = e.data.optionsobj.cardid, n = e.data.cardFilterDay, r = e.data.statisticscount, c = e.data.statisticsList, l = 0;
        if (c.length > 0) for (var d = 0; d < c.length; d++) l += c[d].list.length; else l = 0;
        if (r > l && e.data.falgAjax) {
            e.setData({
                falgAjax: !1
            }), l > 0 && e.setData({
                isLoading: !0
            });
            var u = Math.ceil(l / 20) + 1;
            i.sendRequest({
                hideLoading: l > 0,
                url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=getBusinessCardStatisticsByType&tbPage=" + u + "&tbTypeID=" + s + "&tbBusinessCardID=" + o + "&scope=" + n,
                method: "GET",
                success: function(a) {
                    if (a.success) {
                        if (0 == a.list.list.length) e.setData({
                            statisticsBlank: !0,
                            haveStatistics: !1
                        }); else {
                            var i = a.data;
                            i.day && i.num && (i.name = "单位：次", e.setData({
                                statisticsBlank: !1,
                                haveStatistics: !0,
                                total: a.total
                            }, function() {
                                e.statisticsLine = e.selectComponent("#mychart-dom"), e.init_line(i);
                            }));
                            var s = a.list.list;
                            s.forEach(function(t) {
                                t.list.forEach(function(t) {
                                    Number(t.quantity) > 1e5 && (t.quantity = (t.quantity / 1e4).toFixed(0), t.showwan = !0), 
                                    "" == t.headImgUrl && (t.headImgUrl = e.data.baseUrl + "/images/wxapp/touxiang.jpg");
                                });
                            });
                            var o = c.length;
                            o ? (s[0].time || (c[o - 1].list = [].concat(t(c[o - 1].list), t(s[0].list)), s.splice(0, 1)), 
                            c = [].concat(t(c), t(s))) : c = s;
                        }
                        e.setData({
                            statisticsList: c,
                            falgAjax: !0,
                            statisticscount: a.list.count
                        }, function() {
                            e.setData({
                                isLoading: !1
                            });
                        });
                    } else console.log("getTrackingBehaviorList fail" + a.msg);
                }
            });
        } else r == l && e.setData({
            noMoreDataTip: !0
        });
    },
    scrolling: function(t) {
        var a = this, e = 0;
        wx.getSystemInfo({
            success: function(t) {
                var a = t.windowWidth;
                e = a / 750 * 480;
            }
        });
        var i = this.data;
        t.detail.scrollTop >= 20 && i.toTop < e && !i.hideCanvas ? this.setData({
            hideCanvas: !0,
            toTop: e
        }) : t.detail.scrollTop <= e && t.detail.deltaY > 0 && i.hideCanvas && (setTimeout(function() {
            a.setData({
                hideCanvas: !1
            });
        }, 200), this.setData({
            toTop: 0
        }));
    },
    from_send: function(t) {
        var a = {
            formID: t.detail.formId,
            userID: i.globalData.WebUserID
        };
        i.saveFormID(a, function(t) {});
    },
    touserdetails: function(t) {
        var a = this, e = void 0;
        e = a.data.isNoMember ? 1 : 2;
        var i = a.data.optionsobj.cardid, s = t.currentTarget.dataset.headimgurl, o = t.currentTarget.dataset.nickname, n = t.currentTarget.dataset.userid;
        wx.navigateTo({
            url: "/pages/company/businessCard/userdetails?cardid=" + i + "&headImgUrl=" + s + "&userId=" + n + "&currentTab=" + e + "&bossMsgStatus=" + a.data.optionsobj.bossMsgStatus + "&nickName=" + o
        });
    },
    getNewUsers: function(a) {
        var e = this, s = e.data.dataFilterDay;
        a && (e.data.userCurrentPage = 1, e.data.userTotalPage = 99, e.data.memberList = []);
        var o = e.data.userTotalPage, n = e.data.userCurrentPage, r = e.data.memberList, c = 0;
        if (r.length > 0) for (var l = 0; l < r.length; l++) c += r[l].list.length; else c = 0;
        if (o > n && e.data.falgAjax) {
            var d = Math.ceil(c / 20) + 1;
            e.setData({
                falgAjax: !1
            }), i.sendRequest({
                url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=newUsers&page=" + d + "&scope=" + s + "&pageSize=20",
                method: "GET",
                success: function(a) {
                    if (a.success) if (0 == a.data.userList.length) e.setData({
                        statisticsBlank: !0,
                        haveStatistics: !1
                    }); else {
                        e.setData({
                            statisticsBlank: !1,
                            haveStatistics: !0
                        }), e.data.haveGetMemberChart || e.setData({
                            haveGetMemberChart: !0
                        }, function() {
                            var t = e.data.memberChart;
                            t.name = "单位：个", e.statisticsLine = e.selectComponent("#mychart-dom"), e.init_line(t);
                        });
                        var i = a.data.userList;
                        i.forEach(function(t) {
                            t.list.forEach(function(t) {
                                "" == t.avatar && (t.avatar = e.data.baseUrl + "/images/wxapp/touxiang.jpg");
                            });
                        });
                        var s = r.length;
                        s ? (i[0].time == r[s - 1].time && (r[s - 1].list = [].concat(t(r[s - 1].list), t(i[0].list)), 
                        i.splice(0, 1)), r = [].concat(t(r), t(i))) : r = i;
                    } else console.log("getNewUsers fail" + a.msg);
                    e.setData({
                        total: a.data.total,
                        memberList: r,
                        userTotalPage: a.data.statPage,
                        userCurrentPage: Number(a.data.page),
                        falgAjax: !0
                    });
                },
                fail: function(t) {}
            });
        } else o == n && e.setData({
            noMoreDataTip: !0
        });
    },
    getNewUsersChart: function() {
        var t = this, a = t.data.dataFilterDay;
        i.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=newUsersChart&scope=" + a,
            method: "GET",
            success: function(a) {
                a.success ? t.setData({
                    memberChart: a.data
                }, function() {
                    t.getNewUsers(!0);
                }) : console.log("getNewUsersChart fail" + a.msg);
            },
            fail: function(t) {}
        });
    },
    onUnload: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (i.globalData.cardSocket = void 0);
    },
    onHide: function() {
        this.setData({
            socketTimeOut: !1,
            socketlianjie: !1
        }), this.data.socketHide && (i.globalData.cardSocket = void 0);
    }
});