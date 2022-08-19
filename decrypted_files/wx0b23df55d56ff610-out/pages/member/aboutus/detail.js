var t = require("../../../utils/wxParse/wxParse.js"), a = require("../../../utils/server");

Page({
    data: {
        content: ""
    },
    onLoad: function(t) {
        this.handler(t);
    },
    handler: function(a) {
        var e = this, n = getApp().globalData.article;
        this.setData({
            articles: n
        });
        var i = n.content;
        return console.log(i), t.wxParse("article", "html", i, e, 5), void t.wxParse("marticle", "html", article.mcontent, e, 5);
    },
    onReady: function() {},
    input: function(t) {
        this.setData({
            content: t.detail.value
        });
    },
    submit: function(t) {
        var e = this, n = getApp().globalData.userInfo.user_id, i = this.data.content, o = this.data.articles.article_id;
        i = encodeURI(i), a.getJSON("/User/addArticle", {
            a_id: o,
            content: i,
            user_id: n
        }, function(t) {
            e.dopay(t.data.order.id);
        });
    },
    open: function(t) {
        wx.navigateTo({
            url: "../mine/member/index"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    call: function() {
        var t = this.data.train.phone;
        wx.makePhoneCall({
            phoneNumber: t,
            success: function(t) {}
        });
    },
    map: function() {
        var t = this.data.train.address, a = this.data.train.longitude, e = this.data.train.latitude;
        wx.openLocation({
            latitude: parseFloat(a),
            longitude: parseFloat(e),
            address: t,
            scale: 6
        });
    },
    about: function() {
        wx.navigateTo({
            url: "../html/article",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    onShareAppMessage: function() {
        var t = this.data.articles.title, a = this.data.articles.id;
        return console.log(t), {
            title: t,
            desc: t,
            path: "/pages/index/detail?id=" + a
        };
    },
    share: function(t) {
        wx.showShareMenu({
            complete: function(t) {
                console.log(t);
            }
        });
    },
    details: function(t) {
        var a = t.currentTarget.dataset.index;
        wx.navigateTo({
            url: "detail?id=" + this.data.articlelist[a].id
        });
    },
    dopay: function(t) {
        var e = this, n = getApp();
        a.getJSON("/Cart/bookPayData/user_id/1/order_id/" + t, function(t) {
            n.globalData.wxdata = t.data.result, e.pay();
        });
    },
    pay: function() {
        var t = (i = getApp()).globalData.wxdata.wdata, a = t.timeStamp + "", e = t.nonceStr + "", n = t.package, i = getApp(), o = t.sign;
        wx.requestPayment({
            nonceStr: e,
            package: n,
            signType: "MD5",
            timeStamp: a,
            paySign: o,
            success: function(t) {
                console.log(t), i.globalData.return = 1, wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(t) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            },
            fail: function(t) {
                console.log(t), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(t) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            }
        });
    }
});