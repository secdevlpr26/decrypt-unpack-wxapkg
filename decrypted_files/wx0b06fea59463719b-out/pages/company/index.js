var e = getApp(), t = require("../../common.js"), a = 0;

Page({
    data: {
        pullDownRefreshFlag: !0,
        baseUrl: e.globalData.siteBaseUrl,
        isFirstEnter: !0,
        isClose: !1,
        reminder: "授权提示",
        matter: "授权失败，请重新授权",
        abrogate: "暂时先不",
        permission: "允许",
        officialscene: !1,
        isShowLeadCollection: !1
    },
    onPullDownRefresh: function() {
        var a = this;
        a.data.pullDownRefreshFlag && (a.setData({
            pullDownRefreshFlag: !1
        }), a.data.pullDownRefreshFlag = !1, a.data.optionsData.refresh = !0, e.gettBusinessCardEntrance(e.globalData.WebUserID), 
        t.initCommonModules(), setTimeout(function() {
            a.onLoad(a.data.optionsData), a.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    onLoad: function(a) {
        (n = this).getHeight(), this.setData({
            optionsData: a,
            isFirst: !0,
            scene: wx.getStorageSync("scene")
        }), e.globalData.PSESSID ? n.loadPageData() : e.login({
            success: function() {
                n.loadPageData();
            },
            fail: function() {
                n.loadPageData();
            }
        }), this.getBusinessInfo(function(t) {
            if (t && t.businessCardInfo) {
                if (t.businessCardInfo.admin) {
                    var a = {
                        tbUserID: t.userid,
                        tbType: "16",
                        tbTypeID: "",
                        tbTypeName: "",
                        tbTypeImg: "",
                        tbBusinessCardID: wx.getStorageSync("otherMemberCardId") ? wx.getStorageSync("otherMemberCardId") : 0
                    };
                    e.buried(a, function(e) {});
                } else {
                    var s = {
                        tbUserID: t.userid,
                        tbType: "16",
                        tbTypeID: "",
                        tbTypeName: "",
                        tbTypeImg: "",
                        tbBusinessCardID: wx.getStorageSync("businessCardId") ? wx.getStorageSync("businessCardId") : 0
                    };
                    e.buried(s, function(e) {});
                }
                setTimeout(function() {
                    n.setData({
                        isFirst: !1
                    });
                }, 1500);
            }
        }), wx.setStorageSync("iscatchCardCount", 1), e.registerGlobalFunctions(n), t.registerGlobalFunc(), 
        t.loadPageModules(a);
        var n = this;
    },
    onShow: function() {
        if (1 == wx.getStorageSync("iscatchCardCount") && e.globalData.businessCardInfo && (t.initCommonModules(), 
        wx.removeStorageSync("iscatchCardCount")), (this.data.backselectFlag || wx.getStorageSync("switchToIndex") || wx.getStorageSync("editCardSuccessOnIndex")) && (e.gettBusinessCardEntrance(e.globalData.WebUserID), 
        t.initCommonModules(), wx.removeStorageSync("switchToIndex"), wx.removeStorageSync("editCardSuccess")), 
        wx.getStorageSync("otherMemberCardId") && !this.data.isFirst) if (wx.getStorageSync("businessCardInfo").admin) {
            var a = {
                tbUserID: e.globalData.WebUserID,
                tbType: "16",
                tbTypeID: "",
                tbTypeName: "",
                tbTypeImg: "",
                tbBusinessCardID: wx.getStorageSync("otherMemberCardId")
            };
            e.buried(a, function(e) {});
        } else {
            var n = {
                tbUserID: e.globalData.WebUserID,
                tbType: "16",
                tbTypeID: "",
                tbTypeName: "",
                tbTypeImg: "",
                tbBusinessCardID: wx.getStorageSync("businessCardId") ? wx.getStorageSync("businessCardId") : 0
            };
            e.buried(n, function(e) {});
        }
    },
    yijiandaohhang: function(e) {
        for (var t, a, n = e.currentTarget.dataset.hi, s = n[0].Latitude, o = n[0].Longitude, i = 0; i < n.length; i++) 1 == n[i].Type && (t = n[i].Text, 
        a = n[i].Title);
        wx.openLocation({
            name: a,
            address: t,
            longitude: Number(o),
            latitude: Number(s)
        });
    },
    yijianbohao: function(e) {
        var t = e.currentTarget.dataset.iphone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    loadPageData: function() {
        var e = this, t = getApp(), n = t.globalData.notice || {};
        e.setData({
            officialscene: !(!t.globalData.officialscene || 0 !== Object.keys(n).length),
            isShowLeadCollection: t.globalData.isShowLeadCollection,
            isCollection: wx.getStorageSync("isCollection"),
            isOfficialscene: wx.getStorageSync("isOfficialscene")
        }), t.globalData && Object.keys(t.globalData.baseInfo).length > 0 ? (null == t.globalData.notice || t.globalData.notice.ButtonValue || (t.globalData.notice.ButtonValue = "查看详情"), 
        Math.round(new Date().getTime() / 1e3) - a > 86400 && e.setData({
            notice: t.globalData.notice
        }), a = Math.round(new Date().getTime() / 1e3)) : setTimeout(function() {
            e.loadPageData();
        }, 200);
    },
    closeNotic: function() {
        this.setData({
            notice: null,
            officialscene: !0
        });
    },
    onNoticeClick: function(e) {
        var t = this.data.notice, a = (t.RedirectTo, t.RedirectToID, this);
        wx.navigateTo({
            url: t.URL || "noticedetail",
            complete: function() {
                a.setData({
                    notice: null
                });
            }
        });
    },
    navBtnShowAndHide: function() {
        var e = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: e
        });
    },
    onPageScroll: function() {},
    onShareAppMessage: function() {
        return e.shareAppMessage();
    },
    getHeight: function() {
        this.setData({
            height: parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 100),
            cardBoxLeft: parseInt(wx.getSystemInfoSync().windowWidth - wx.getSystemInfoSync().windowWidth / 750 * 698) / 2
        });
    },
    getBusinessInfo: function(a) {
        var n = this, s = this;
        if (e.globalData.businessCardInfo) {
            e.globalData.businessCardInfo.PersonImg && e.globalData.businessCardInfo.PersonImg.indexOf("https://wx.qlogo.cn/") < 0 && (e.globalData.businessCardInfo.PersonImg = s.data.baseUrl + e.globalData.businessCardInfo.PersonImg), 
            s.setData({
                businessCardInfo: e.globalData.businessCardInfo
            });
            var o = {
                userid: e.globalData.WebUserID,
                businessCardInfo: e.globalData.businessCardInfo
            };
            a && a(o);
        } else setTimeout(function() {
            t.initCommonModules(), n.getBusinessInfo(a);
        }, 1500);
    },
    closeCardLayer: function() {
        this.setData({
            isClose: !0
        });
    },
    goToCardDetail: function() {
        var t = e.globalData.businessCardInfo;
        wx.navigateTo({
            url: "/pages/company/businessCard/cardDetails?BusinessCardID=" + t.BusinessCardID + "&UserID=" + t.UserID + "&SiteID=" + t.SiteID + "&AdminID=" + t.adminID
        });
    },
    officialDel: function() {
        this.setData({
            officialscene: !1,
            scene: !1
        }), wx.setStorageSync("isOfficialscene", !1);
    },
    isShowLeadCollection: function() {
        this.setData({
            isShowLeadCollection: !1
        }), wx.setStorageSync("isCollection", !1);
    }
});