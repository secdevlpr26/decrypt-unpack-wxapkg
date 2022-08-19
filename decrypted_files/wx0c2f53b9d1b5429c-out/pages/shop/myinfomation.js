var e = getApp(), a = (require("../../components/utils/imgutil.js"), require("../../components/wxb.js"));

Page({
    isloading: !1,
    bannerLoaded: !1,
    url: !1,
    onShareAppMessage: function() {
        return e.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    onLoad: function(a) {
        var t = this;
        t.url = e.getPageUrl(t, a), e.registerGlobalFunctions(t), this.setData({
            queryparams: a,
            hasrefunds: "",
            info: ""
        }), this.loadmyinfomation();
    },
    data: {
        classid: 0,
        currentTab: 0,
        baseUrl: e.globalData.siteBaseUrl,
        showPanelMark: !1,
        isIOS: !1
    },
    loadmyinfomation: function() {
        var a = this;
        a.isloading || (a.isloading = !0, e.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=getMyCenterData",
            method: "GET",
            success: function(e) {
                if (1 == e.needLogin) wx.reLaunch({
                    url: "/pages/company/mycenter"
                }); else {
                    a.isloading = !1;
                    var t = wx.getStorageSync("phoneNumber");
                    t && "" != t && (e.info.Mobile = t), a.setData({
                        info: e.info
                    }), "" == e.info.Mobile && a.setData({
                        showPanelMark: !0,
                        isIOS: !0
                    });
                }
                e.success || console.log("getProductList fail：" + e.msg);
            },
            fail: function(e) {
                a.isloading = !1, console.log("getProductList fail");
            }
        }));
    },
    navbarTap: function(e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        });
    },
    getPhoneNumber: function(t) {
        var n = this, i = e.globalData.appId, s = e.globalData.session_key, o = new a(i, s).decryptData(t.detail.encryptedData, t.detail.iv);
        wx.setStorageSync("phoneNumber", o.phoneNumber), n.setData({
            "info.Mobile": o.phoneNumber
        });
    },
    turnOff: function() {
        this.setData({
            showPanelMark: !1,
            isIOS: !1
        });
    }
});