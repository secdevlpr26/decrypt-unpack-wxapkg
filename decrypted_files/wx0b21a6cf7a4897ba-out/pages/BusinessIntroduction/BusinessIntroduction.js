var e = getApp(), a = require("../../wxParse/wxParse.js");

Page(function(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}({
    data: {
        imageUrl: "",
        info: "",
        year: 0
    },
    onLoad: function(t) {
        var n = this;
        n.setData({
            info: e.globalData.info,
            year: new Date().getFullYear()
        });
        if (null != t.introduction && t.introduction.length > 0) {
            var i = t.introduction.replace(new RegExp("</h2>", "gm"), "</h2><div style='display: flex;flex-direction: column;margin:15px 0px 25px 0px;'><div style='width:44px;height:2px;background-color:#4480f6;'/> <div style='margin-left:40px;height:1px;background-color:#eee;'/></div>");
            a.wxParse("content", "html", i, n, 5);
        }
        n.getUserImageByType(), n.getUserBusiness();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    getUserBusiness: function() {
        var t = this;
        e.apiRequestGet({
            urlMethod: "api/Users/getUserBusiness",
            data: {},
            success: function(e) {
                var n = e.data.businessPresentation.replace(new RegExp("</h2>", "gm"), "</h2><div style='display: flex;flex-direction: column;margin:15px 0px 25px 0px;'><div style='width:44px;height:2px;background-color:#4480f6;'/> <div style='margin-left:40px;height:1px;background-color:#eee;'/></div>");
                a.wxParse("content", "html", n, t, 5);
            },
            fail: function(e) {}
        });
    },
    getUserImageByType: function() {
        var a = this;
        e.apiRequestGet({
            urlMethod: "api/Users/getUserImageByType",
            data: {
                type: 2
            },
            success: function(e) {
                if (0 == e.data.length) {
                    var t;
                    t = "../../images/banner_ywjs.png", a.setData({
                        imageUrl: t
                    });
                } else null == e.data.imageUrl && (e.data[0].imageUrl = "../../images/banner_ywjs.png"), 
                a.setData({
                    imageUrl: e.data[0].imageUrl
                });
            },
            fail: function(e) {}
        });
    },
    saveNumber: function() {
        wx.addPhoneContact({
            lastName: e.globalData.info.officeName.substring(0, 1),
            firstName: e.globalData.info.officeName.substring(1, e.globalData.info.officeName.length),
            mobilePhoneNumber: e.globalData.info.tel,
            organization: e.globalData.info.officeName,
            success: function() {},
            fail: function(e) {}
        });
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: e.globalData.info.tel,
            success: function() {},
            fail: function() {}
        });
    }
}, "onPullDownRefresh", function() {
    wx.stopPullDownRefresh(), this.getUserBusiness();
}));