require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        showmsg: !0
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: "我的"
        });
    },
    onReady: function() {},
    toOrderlist: function(e) {
        var s = e.currentTarget.dataset.id;
        console.log(s), wx.navigateTo({
            url: "/wurui_house/pages/orderlist/index?id=" + s
        });
    },
    toMypub: function(e) {
        var s = e.currentTarget.dataset.id;
        console.log(s), wx.navigateTo({
            url: "/wurui_house/pages/mypub/index?id=" + s
        });
    },
    toMyletpub: function(e) {
        var s = e.currentTarget.dataset.id;
        console.log(s), wx.navigateTo({
            url: "/wurui_house/pages/myletpub/index?id=" + s
        });
    },
    toMysalepub: function(e) {
        var s = e.currentTarget.dataset.id;
        console.log(s), wx.navigateTo({
            url: "/wurui_house/pages/mysalepub/index?id=" + s
        });
    },
    onShow: function() {
        var e = this;
        this.checkuser({
            doServices: function() {
                var s = wx.getStorageSync("userInfo");
                console.log(s.wxInfo), e.setData({
                    userinfo: s
                });
            }
        });
    },
    toSalePub: function(e) {
        var s = this;
        wx.navigateTo({
            url: "/wurui_house/pages/salepub/index",
            success: function() {
                s.data.showmsg = !0, s.setData({
                    showmsg: s.data.showmsg
                });
            }
        });
    },
    toSaleLetPub: function(e) {
        var s = this;
        wx.navigateTo({
            url: "/wurui_house/pages/saleletpub/index",
            success: function() {
                s.data.showmsg = !0, s.setData({
                    showmsg: s.data.showmsg
                });
            }
        });
    },
    toSaleBuyPub: function(e) {
        var s = this;
        wx.navigateTo({
            url: "/wurui_house/pages/salebuypub/index",
            success: function() {
                s.data.showmsg = !0, s.setData({
                    showmsg: s.data.showmsg
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    binduserinfo: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/message/index"
        });
    },
    saveuserinfo: function(s) {
        var o = this, t = s.detail.value.name, a = s.detail.value.tel;
        o.data.showmsg = !0;
        var n = wx.getStorageSync("userInfo");
        "" != t ? "" != a ? e.util.request({
            url: "entry/wxapp/saveuserinfo",
            data: {
                sessionid: n.sessionid,
                uid: n.memberInfo.uid,
                name: t,
                tel: a
            },
            success: function(e) {
                if (0 != e.data.errno) return wx.hideLoading(), void wx.showModal({
                    title: "失败",
                    content: e.data.msg,
                    showCancel: !1
                });
                wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    duration: 2e3
                }), o.setData({
                    showmsg: o.data.showmsg
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的手机号",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的姓名",
            showCancel: !1
        });
    },
    closemsg: function(e) {
        this.data.showmsg = !0, this.setData({
            showmsg: this.data.showmsg
        });
    },
    onReachBottom: function() {},
    toMycouponlist: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/couponlist/index"
        });
    },
    Puboldhouse: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/pub/index"
        });
    },
    onShareAppMessage: function() {},
    checkuser: function(s) {
        var o = this, s = s, t = wx.getStorageSync("userInfo");
        return t ? t.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: t.sessionid,
                uid: t.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(s), s.doServices()) : 2 == e.data.data.error && s.doServices();
            }
        }) : (console.log("tmddddsssssqqqqs1111"), e.util.getUserInfo(function(e) {
            o.setData({
                userinfo: e
            });
        }), !1) : (console.log("tmddddssssss222222"), e.util.getUserInfo(function(e) {
            o.setData({
                userinfo: e
            });
        }), !1);
    },
    toNewHouse: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/contact/index"
        });
    }
});