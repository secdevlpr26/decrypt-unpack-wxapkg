var a = getApp();

require("../../utils/util.js");

Page({
    data: {
        iconimg: {
            default_pic: "../../images/default_pic@2x.png"
        },
        avatarUrl: "",
        nickName: "",
        openid: "",
        size: 10,
        pageIndex: 0,
        errorMsg: "",
        list: [],
        noMoreData: !1
    },
    onShow: function(t) {
        var i = this;
        a.getUserInfo(function(a) {
            i.setData({
                avatarUrl: a.avatarUrl,
                nickName: a.nickName,
                openid: a.u_openid
            }), i.getPayList();
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            pageIndex: 0
        }), this.getPayList();
    },
    onReachBottom: function() {
        this.data.noMoreData || this.getPayList();
    },
    getPayList: function(t) {
        var i = this;
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中"
        }), a.apiRequestGet({
            urlMethod: "api/Question/getAppreciateList",
            data: {
                openid: this.data.openid,
                page: this.data.pageIndex ? this.data.pageIndex : 0,
                size: this.data.size
            },
            success: function(a) {
                var t = a.data;
                if (t) {
                    var e = !((i.data.pageindex + 1) * i.data.size < t.pageCount), n = i.data.list;
                    0 == i.data.pageIndex && (n = []);
                    for (var o in t.list) n.push(t.list[o]);
                    i.setData({
                        list: n,
                        noMoreData: e
                    });
                }
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    showInfo: function(a) {
        var t = a.currentTarget.dataset.item;
        if (3 == t.status) {
            var i = {
                payMoney: t.payMoney,
                id: t.id
            };
            wx.navigateTo({
                url: "../PayAdviceQRCode/PayAdviceQRCode?data=" + JSON.stringify(i)
            });
        } else wx.navigateTo({
            url: "../MyPaidAdviceInfo/MyPaidAdviceInfo?id=" + t.id
        });
    }
});