var a = getApp();

Page({
    data: {
        businesslable: [],
        datas: {
            articles: "",
            business: {
                sphereBusiness: "",
                businessPresentation: ""
            },
            listData: [],
            images: [],
            logins: "",
            views: 0,
            info: {
                tel: "",
                officeName: "",
                workAge: 0,
                cityName: "",
                pronviceName: "",
                introduction: "",
                remark: ""
            }
        },
        anliList: [],
        pic: [ {
            imageUrl: "../../images/pic_1.png"
        }, {
            imageUrl: "../../images/pic_2.png"
        }, {
            imageUrl: "../../images/pic_3.png"
        }, {
            imageUrl: "../../images/pic_4.png"
        } ],
        listData: [],
        showDialog: !1,
        showlable: !1,
        showAllLable: !1,
        swiperCurrent: 0,
        loading: !1,
        autoplay: !0,
        haveLiuYan: !0,
        nickName: "",
        year: 2018
    },
    onLoad: function() {
        var t = this;
        t.setData({
            haveLiuYan: a.globalData.haveFreeConsult,
            year: new Date().getFullYear()
        }), t.loginevent(), t.getHomeInfo(), t.getAnliList();
    },
    loginevent: function() {
        if (!a.globalData.userInfo && 0 == this.data.loading) {
            var t = this;
            t.setData({
                loading: !0
            }), wx.showNavigationBarLoading(), a.getUserInfo(function(a) {
                t.setData({
                    loading: !1,
                    nickName: a.nickName
                }), wx.hideNavigationBarLoading();
            }, function(a) {
                t.setData({
                    loading: !1
                }), wx.hideNavigationBarLoading();
            });
        }
    },
    getHomeInfo: function() {
        var t = this;
        wx.showNavigationBarLoading(), a.apiRequestGet({
            urlMethod: "api/Users/Home",
            data: {},
            success: function(i) {
                wx.hideNavigationBarLoading();
                var e = i.data.info, n = e.tel;
                if (null != e.tel && e.tel.length > 13 && (i.data.info.tel = e.tel.substring(0, 11)), 
                i.data.articles.length > 0) for (var o = i.data.articles.list, s = 0; s < o.length; s++) i.data.articles.list[s].addTime = o[s].addTime.substring(0, 10);
                var l = i.data.business;
                if (null != l) {
                    if (l.sphereBusiness.length > 0 && null != l.sphereBusiness) {
                        var r = l.sphereBusiness.split(",");
                        t.setData({
                            businesslable: r
                        });
                    }
                    t.setData({
                        businessPresentation: l.businessPresentation
                    });
                }
                0 == i.data.images.length && (i.data.images = t.data.pic), t.setData({
                    datas: i.data
                }), a.globalData.info = i.data.info, a.globalData.views = i.data.views, a.globalData.otherTel = n;
            },
            fail: function(a) {
                wx.hideNavigationBarLoading();
            }
        });
    },
    getAnliList: function() {
        var t = this;
        a.apiRequestGet({
            urlMethod: "api/Article/getAnliList",
            data: {
                page: 0,
                size: 4
            },
            success: function(a) {
                null != a.data && t.setData({
                    anliList: a.data.list
                });
            },
            fail: function(a) {}
        });
    },
    onShareAppMessage: function(a) {
        return {
            success: function(a) {},
            fail: function(a) {}
        };
    },
    intor: function() {
        wx.navigateTo({
            url: "../File/File"
        });
    },
    toRecentList: function() {
        wx.navigateTo({
            url: "../RecentVisit/RecentVisit"
        });
    },
    files: function() {
        wx.navigateTo({
            url: "../CaseList/CaseList"
        });
    },
    swiperChange: function(a) {
        this.setData({
            swiperCurrent: a.detail.current
        });
    },
    gotoAdmire: function() {
        wx.navigateTo({
            url: "../Admire/Admire"
        });
    },
    allArticle: function() {
        wx.switchTab({
            url: "../ArticleList/ArticleList"
        });
    },
    intorduce: function() {
        wx.navigateTo({
            url: "../LawfirmIntroduction/LawfirmIntroduction?type=0&introduction=" + this.data.lawyerInstroduction
        });
    },
    album: function() {
        wx.navigateTo({
            url: "../Album/Album"
        });
    },
    gotoMap: function() {
        wx.navigateTo({
            url: "../ContactWay/ContactWay"
        });
    },
    gotomyReservation: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../OnlineReservation/OnlineReservation"
        });
    },
    gotomyFreeAdvice: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../MessageAdvice/MessageAdvice"
        });
    },
    gotomyPaidAdvice: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../PaidAdvice/PaidAdvice"
        });
    },
    saveNumber: function(a) {
        var t = this.data.datas.info;
        wx.addPhoneContact({
            lastName: t.officeName.substring(0, 2),
            firstName: t.officeName.substring(2, t.officeName.length),
            mobilePhoneNumber: t.tel,
            organization: t.officeName,
            success: function() {},
            fail: function(a) {}
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), this.getHomeInfo();
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.datas.info.tel,
            success: function() {},
            fail: function() {}
        });
    },
    onShow: function() {
        this.setData({
            autoplay: !0
        });
    },
    onHide: function() {
        this.setData({
            autoplay: !1
        });
    }
});