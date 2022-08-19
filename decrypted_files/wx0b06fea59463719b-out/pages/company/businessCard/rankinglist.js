var t = getApp(), a = require("../../../components/utils/socket.js");

Page({
    data: {
        rankingList: [],
        baseUrl: t.globalData.siteBaseUrl,
        page_count: "",
        rankingpage: 1,
        DefaultImg: !1,
        showMoreView: !1,
        showNoMore: !1,
        typename: "",
        cardFilterDay: 7,
        InterfaceURL: "",
        isBoss: !1,
        socketHide: !1,
        socketTimeOut: !0,
        socketlianjie: !1
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: t.typename + "排行"
        }), this.setData({
            optionsobj: t,
            cardFilterDay: t.filterDay
        }), 1 == t.isBoss && this.setData({
            isBoss: !0
        }), this.gettypename(t);
    },
    onShow: function() {
        t.globalData.cardSocket ? this.listenSocket() : (this.setData({
            socketTimeOut: !1,
            socketlianjie: !0
        }), this.openSocket());
    },
    openSocket: function() {
        var e = this, i = t.globalData.WebUserID;
        "{}" != JSON.stringify(t.globalData.socket_config) && i ? (t.globalData.cardSocket = a.run(), 
        t.globalData.cardSocket.listen("websocket-connected", function(a) {
            var o = {
                client_id: a.clientid,
                fromUserID: i
            };
            t.sendRequest({
                url: "/index.php?c=Front/Chat/Chat&a=bindUid",
                data: o,
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
        var a = this;
        a.setData({
            socketTimeOut: !0,
            socketlianjie: !1
        }), t.globalData.cardSocket.socketTask.onClose(function(e) {
            a.data.socketTimeOut && (t.globalData.cardSocket = void 0, a.setData({
                socketTimeOut: !1,
                socketlianjie: !0,
                socketHide: !0
            }), a.openSocket());
        });
    },
    from_send: function(a) {
        var e = {
            formID: a.detail.formId,
            userID: t.globalData.WebUserID
        };
        t.saveFormID(e, function(t) {});
    },
    gettypename: function(t) {
        var a = t.itemType, e = "";
        24 == a ? e = "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=ProductSales" : 18 == a ? e = "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=productScan" : 19 == a ? e = "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=serviceScan" : 1 == a ? e = "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=businessCardScan" : 12 == a && (e = "/index.php?c=Front/WxApp/TrackingBehavior/Report&a=articleScan"), 
        this.setData({
            InterfaceURL: e,
            typename: t.typename,
            optionsobj: t
        }), this.getRankingList(t);
    },
    getRankingList: function(a) {
        var e = this, i = e.data.cardFilterDay, o = e.data.optionsobj.itemType;
        t.sendRequest({
            url: e.data.InterfaceURL + "&scope=" + i + "&page=" + e.data.rankingpage + "&pageSize=20",
            method: "GET",
            hideLoading: e.data.rankingpage > 1,
            success: function(a) {
                if (a.success) {
                    var i = e.data.rankingList;
                    i = i.concat(a.data.list);
                    var n = t.globalData.siteId;
                    i.forEach(function(t) {
                        t.img && t.img.indexOf("comdata") < 0 && 18 == o && (t.img = "/comdata/" + n + "/product/" + t.img);
                    }), e.setData({
                        rankingList: i,
                        page_count: a.data.statPage
                    }), 0 == e.data.rankingList.length ? e.setData({
                        DefaultImg: !0
                    }) : e.setData({
                        DefaultImg: !1
                    });
                }
            },
            fail: function(t) {}
        });
    },
    onReachBottom: function() {
        Number(this.data.rankingpage) + 1 > this.data.page_count ? this.setData({
            showNoMore: !0,
            showMoreView: !1
        }) : (this.setData({
            showMoreView: !0
        }), this.data.rankingpage++, this.getRankingList());
    },
    chooseValue: function(t) {
        var a = this, e = t.currentTarget.dataset.value;
        e != a.data.cardFilterDay && (a.setData({
            cardFilterDay: e,
            rankingpage: 1,
            rankingList: []
        }), a.getRankingList());
    },
    errArticleImg: function(t) {
        var a = this, e = t.target.dataset.errImg, i = t.target.dataset.errIndex, o = a.data.rankingList;
        o[i].img || "" == o[i].img ? o[i].img = e : (o[i].headImgUrl || "" == o[i].headImgUrl) && (o[i].headImgUrl = e), 
        a.setData({
            rankingList: o
        });
    },
    toUserAi: function(t) {
        var a = t.currentTarget.dataset.cardid, e = !1;
        this.data.optionsobj.BusinessCardID && a != this.data.optionsobj.BusinessCardID && (e = !0), 
        wx.navigateTo({
            url: "/pages/company/businessCard/airadar?cardid=" + a + "&currentTab=0&bossMsgStatus=" + e
        });
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