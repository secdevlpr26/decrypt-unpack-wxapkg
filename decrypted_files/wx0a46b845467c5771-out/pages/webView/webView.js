var e = require("../../utils/util.js"), a = getApp(), t = require("../../config.js"), o = require("../../getlogininfo.js"), i = (o.authorizeInfo, 
o.getUserInfo, null);

Page({
    data: {
        view: "",
        encodeView: "",
        loginid: "",
        linkUrl: "",
        despage: "",
        title: "",
        isMomentPage: !1,
        imgUrl: ""
    },
    onShareAppMessage: function(t) {
        var o = {
            clkId: "clk_2cMINA_1",
            clkDesPage: "",
            clkName: "fenxiang",
            type: "CLK",
            pvCurPageName: a.globalData.currDespage || "",
            pvCurPageParams: i
        };
        return e.trackRequest(o, a), {
            imageUrl: a.globalData.shareImage || "",
            title: this.data.title || a.globalData.projectName,
            path: "/pages/webView/webView?shareToken=" + a.globalData.shareToken + "&view=" + this.data.encodeView + "&title=" + this.data.title
        };
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        }), i = JSON.stringify(e), e.shareToken && (a.globalData.fromChannel = e.shareToken || ""), 
        e.title && this.setData({
            title: e.title || a.globalData.projectName
        });
        var o = "";
        if (e.momentId && this.setData({
            isMoment: e.momentId
        }), e.q) {
            var n = decodeURIComponent(e.q), l = n.substring(n.lastIndexOf("/") + 1, n.length);
            o = l.startsWith("N") || l.startsWith("n") ? t.newTemplateUrl + l.replace("N", "") : t.templateUrl + l, 
            console.log("======options.q******", e.q, n, o);
        } else o = decodeURIComponent(e.view), console.log(o, e.view, "转发的url");
        -1 == o.indexOf("https") && (o = o.replace("http", "https")), o = o.includes("?fromProduce=xcx") ? o : o.includes("?") ? o.replace("?", "?fromProduce=xcx&") : o + "?fromProduce=xcx", 
        this.setData({
            view: o,
            encodeView: e.view || encodeURIComponent(o) || "",
            linkUrl: e.linkUrl || "",
            imgUrl: e.imgUrl || "",
            loginid: e.shareToken || a.globalData.shareToken || ""
        }), console.log("***WebView Data***", this.data, e.shareToken, "***", a.globalData.shareToken);
    },
    onReady: function() {
        wx.hideLoading(), this.setData({
            despage: a.globalData.currDespage
        }), wx.setNavigationBarTitle({
            title: this.data.title
        });
    },
    onShow: function() {
        a.login(function() {
            console.log("***webview-onshow-app.login***");
        });
    },
    onHide: function() {
        a.globalData.currDespage = null;
    },
    onUnload: function() {
        console.log(this.data.isMoment, "webview-onUnload-ppppp");
    }
});