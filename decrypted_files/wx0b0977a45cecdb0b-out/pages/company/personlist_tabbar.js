var e = getApp(), s = (require("../../components/utils/imgutil.js"), require("../../common.js"));

Page({
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return e.shareAppMessage({
            url: this.url
        });
    },
    onLoad: function(t) {
        var a = this;
        a.url = e.getPageUrl(a, t), e.registerGlobalFunctions(a), this.setData({
            queryparams: t
        }), this.loadProduct(), s.setPopupFromShare();
    },
    data: {
        currentTab: 0,
        bannerHeight: 150,
        plugNavFlag: !0
    },
    loadProduct: function() {
        var s = this;
        s.isloading || (s.isloading = !0, e.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getPersonList&pagesize=99",
            method: "GET",
            success: function(t) {
                console.log(t);
                for (var a = 0; a < t.personlist.length; a++) t.personlist[a].HeadImg = e.globalData.siteBaseUrl + "/comdata/" + t.personlist[a].SiteID + "/serviceperson/" + t.personlist[a].HeadImg;
                s.isloading = !1, t.success ? (wx.setNavigationBarTitle({
                    title: "师资"
                }), s.setData({
                    personlist: t.personlist
                })) : console.log("getProductInfo fail：" + t.msg);
            },
            fail: function(e) {
                s.isloading = !1, console.log("getProductInfo fail");
            }
        }));
    },
    navBtnShowAndHide: function() {
        var e = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: e
        });
    }
});