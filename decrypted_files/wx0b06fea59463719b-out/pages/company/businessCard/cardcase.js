var a = getApp();

Page({
    isloading: !1,
    data: {
        baseUrl: a.globalData.siteBaseUrl,
        incard: !1,
        isBinding: !1,
        currentPage: 1,
        sum_page: 1
    },
    onLoad: function(t) {
        var s = this;
        s.setData({
            cardsiteID: a.globalData.baseInfo.SiteID,
            userID: a.globalData.WebUserID,
            optionsobj: t
        }), s.loadData();
    },
    businessCards: function() {
        var a = this;
        a.data.goToInfo ? wx.reLaunch({
            url: "/pages/company/businessCard/workbench?BusinessCardID=" + a.data.mycard
        }) : wx.navigateTo({
            url: "editCard?ID=" + a.data.mycard + "&mark=0"
        });
    },
    loadData: function() {
        var t = this;
        t.isloading || (t.isloading = !0, a.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getBusinessCardAttentionList&UserID=" + t.data.userID + "&SiteID=" + t.data.cardsiteID + "&page=" + t.data.currentPage,
            method: "GET",
            success: function(a) {
                t.isloading = !1, a.success && (0 === a.info.list.length ? t.setData({
                    incard: !0
                }) : t.setData({
                    incard: !1
                }), t.setData({
                    cardcontent: a.info.list,
                    mycard: a.info.businessCardID,
                    isBinding: a.info.isBindingMember,
                    goToInfo: a.info.goToInfo
                }));
            },
            fail: function(a) {
                t.isloading = !1;
            },
            hideLoading: !0
        }));
    },
    cardDetails: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.reLaunch({
            url: "cardDetails?BusinessCardID=" + t + "&business=0"
        });
    },
    onReachBottom: function(a) {
        var t = this, s = null;
        if (s = t.data.current_page + 1, t.setData({
            current_page: s
        }), s <= t.data.sum_page) wx.showToast({
            title: "加载中！",
            icon: "loading",
            duration: 1e3
        }), t.getwcinfo(); else if (s > t.data.sum_page) return void wx.showToast({
            title: "数据已加载完",
            icon: "loading",
            duration: 1e3
        });
    },
    sendMessage: function(t) {
        t.detail.formId, t.detail.target.dataset.id, a.globalData.WebUserID;
    }
});