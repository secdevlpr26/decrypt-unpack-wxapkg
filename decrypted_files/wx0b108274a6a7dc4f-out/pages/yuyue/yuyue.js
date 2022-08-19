var e = require("../../request/api.js"), t = getApp();

Page({
    data: {
        val: "",
        name1: "",
        tel: "",
        name2: "",
        imgurl: e.API_IMG
    },
    onLoad: function(e) {
        var t = new Date(), n = 1900 + t.getYear(), a = "0" + (t.getMonth() + 1), o = "0" + t.getDate();
        this.setData({
            date: n + "-" + a.substring(a.length - 2, a.length) + "-" + o.substring(o.length - 2, o.length)
        }), this.getImg();
    },
    getImg: function() {
        var t = this;
        wx.request({
            url: e.getImg(),
            success: function(e) {
                console.log(e.data.re.image), t.setData({
                    imageurl: e.data.re.image
                });
            }
        });
    },
    binddatechange: function(e) {
        console.log(e), this.setData({
            val: e.detail.value
        });
    },
    tijiao: function(n) {
        var a = this;
        console.log(n), n.detail.value.time ? n.detail.value.name.trim() ? /^1[34578]\d{9}$/.test(n.detail.value.phone) ? wx.request({
            url: e.yuyue(n.detail.value.name, n.detail.value.phone, n.detail.value.time, t.globalData.openid),
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "预约成功"
                }), a.setData({
                    val: "",
                    name1: "",
                    tel: "",
                    name2: ""
                });
            }
        }) : wx.showToast({
            title: "手机号输入有误",
            icon: "none"
        }) : wx.showToast({
            title: "请输入姓名",
            icon: "none"
        }) : wx.showToast({
            title: "请选择时间",
            icon: "none"
        });
    },
    Myyuyeu: function() {
        wx.navigateTo({
            url: "../myyuyue/myyuyue"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        console.log("onhide页面隐藏"), this.setData({
            val: "",
            name1: "",
            name3: "",
            tel: ""
        });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {
        var e = this;
        wx.showLoading({
            title: "努力加载中",
            success: function() {
                console.log(""), e.getImg(), e.setData({
                    val: "",
                    name1: "",
                    name3: "",
                    tel: ""
                }), setTimeout(function() {
                    wx.hideLoading(), wx.stopPullDownRefresh();
                }, 1e3);
            }
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});