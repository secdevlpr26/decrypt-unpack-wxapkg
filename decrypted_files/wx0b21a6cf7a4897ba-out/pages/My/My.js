var a = getApp();

Page({
    data: {
        iconimg: {
            default_pic: "../../images/default_pic@2x.png",
            zx_zxyy: "../../images/zx_zxyy@2x.png",
            zx_lyzx: "../../images/zx_lyzx@2x.png",
            zx_fuzx: "../../images/zx_fuzx@2x.png"
        },
        avatarUrl: "",
        nickName: "",
        loading: !1,
        haveFreeConsult: !1
    },
    onLoad: function(t) {
        this.setData({
            haveFreeConsult: a.globalData.haveFreeConsult
        }), this.loginevent();
    },
    loginevent: function() {
        if (0 == this.data.nickName.length && 0 == this.data.loading) {
            var t = this;
            t.setData({
                loading: !0
            }), wx.showNavigationBarLoading(), a.getUserInfo(function(a) {
                t.setData({
                    avatarUrl: a.avatarUrl,
                    nickName: a.nickName,
                    loading: !1
                }), wx.hideNavigationBarLoading();
            }, function(a) {
                t.setData({
                    loading: !1
                }), wx.hideNavigationBarLoading();
            });
        }
    },
    gotomyReservation: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../MyReservation/MyReservation"
        });
    },
    gotomyFreeAdvice: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../MyFreeAdvice/MyFreeAdvice"
        });
    },
    gotomyPaidAdvice: function(a) {
        0 == this.data.nickName.length ? wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        }) : wx.navigateTo({
            url: "../MyPaidAdvice/MyPaidAdvice"
        });
    }
});