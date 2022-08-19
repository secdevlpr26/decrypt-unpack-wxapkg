require("../../resource/js/qqmap-wx-jssdk.min.js"), require("../../resource/js/config.js");

var e = getApp();

Page({
    data: {
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        showmsg: !0,
        msgList: null,
        currentTab: 1
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "讯商房产中介"
        });
        var a = this;
        e.util.request({
            url: "entry/wxapp/getbanner",
            success: function(e) {
                e.data.message.errno || a.setData({
                    banners: e.data.data
                });
            }
        }), e.util.request({
            url: "entry/wxapp/Intro",
            success: function(e) {
                e.data.message.errno || (wx.setStorageSync("companyinfo", e.data.data), wx.setNavigationBarTitle({
                    title: wx.getStorageSync("companyinfo").name
                }), a.setData({
                    intro: e.data.data
                }));
            }
        }), e.util.request({
            url: "entry/wxapp/getlethouselist",
            data: {
                houseareaid: a.data.houseareaid,
                housepriceid: a.data.housepriceid,
                housetype: a.data.housetype,
                letway: a.data.letway
            },
            success: function(e) {
                e.data.message.errno || (console.log(e.data.data), a.setData({
                    houselist: e.data.data
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), a.setData({
                    loadMore: ""
                });
            }
        }), e.util.request({
            url: "entry/wxapp/GetIndexList",
            data: {},
            success: function(e) {
                e.data.message.errno || a.setData({
                    newhouselist: e.data.data.newhouselist,
                    oldhouselist: e.data.data.oldhouselist
                });
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        }), e.util.request({
            url: "entry/wxapp/getarticle",
            data: {},
            success: function(e) {
                e.data.message.errno || a.setData({
                    msgList: e.data.data.article
                });
            },
            complete: function() {}
        });
    },
    toNewHouse: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/contact/index"
        });
    },
    toOldHouse: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/mortgage/mortgage"
        });
    },
    toZXHouse: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/article/index"
        });
    },
    toLethouse: function(e) {
        wx.switchTab({
            url: "/wurui_house/pages/lethouselist/index"
        });
    },
    toAgentlist: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/agentlist/index"
        });
    },
    toHouseDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/lethousedetail/index?id=" + t
        });
    },
    toArticle: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/salelist/index"
        });
    },
    toActive: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/active/index"
        });
    },
    toNewHouseDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/newhousedetail/index?id=" + t
        });
    },
    toOldHouseDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/oldhousedetail/index?id=" + t
        });
    },
    tolethouseDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/lethousedetail/index?id=" + t
        });
    },
    toMessage: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/message/index"
        });
    },
    toSearch: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/search/index"
        });
    },
    PubOldhouse: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/pub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    PubLethouse: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/letpub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    toSaleOldPub: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/pub/index"
        });
    },
    toSalePub: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/salepub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    toSaleBuyPub: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/salebuypub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    toSaleLetPub: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/saleletpub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    },
    goPub: function(e) {
        this.data.showmsg = !1, this.setData({
            showmsg: this.data.showmsg
        });
    },
    closemsg: function(e) {
        this.data.showmsg = !0, this.setData({
            showmsg: this.data.showmsg
        });
    },
    goMap: function(e) {
        wx.openLocation({
            latitude: parseFloat(wx.getStorageSync("companyinfo").lat),
            longitude: parseFloat(wx.getStorageSync("companyinfo").lng),
            scale: 18,
            name: wx.getStorageSync("companyinfo").name,
            address: wx.getStorageSync("companyinfo").address
        });
    },
    onReady: function() {},
    bindInput: function(e) {
        var t = this;
        this.setData({
            inputValue: e.detail.value
        }), t.onShow();
    },
    onShow: function() {
        var e = this;
        this.checkuser({
            doServices: function() {
                var t = wx.getStorageSync("userInfo");
                console.log("首页userinfo" + t), e.setData({
                    userinfo: t
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    doCall: function() {
        var e = this.data.textData.shop_tel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onShareAppMessage: function() {
        return {
            title: wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/index/index"
        };
    },
    checkuser: function(t) {
        var a = this, t = t, s = wx.getStorageSync("userInfo");
        return s ? s.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(t), t.doServices()) : 2 == e.data.data.error && t.doServices();
            }
        }) : (console.log("tmddddsssssqqqqs1111"), e.util.getUserInfo(function(e) {
            a.setData({
                userinfo: e
            });
        }), !1) : (console.log("tmddddssssss222222"), e.util.getUserInfo(function(e) {
            a.setData({
                userinfo: e
            });
        }), !1);
    },
    openNewHouse: function() {
        wx.switchTab({
            url: "/wurui_house/pages/newhouselist/index"
        });
    },
    openOldHouse: function() {
        wx.switchTab({
            url: "/wurui_house/pages/oldhouselist/index"
        });
    },
    openZuHouse: function() {
        wx.switchTab({
            url: "/wurui_house/pages/lethouselist/index"
        });
    },
    clickTab: function(e) {
        var t = this;
        if (this.data.currentTab === e.target.dataset.current) return !1;
        t.setData({
            currentTab: e.target.dataset.current
        });
    }
});