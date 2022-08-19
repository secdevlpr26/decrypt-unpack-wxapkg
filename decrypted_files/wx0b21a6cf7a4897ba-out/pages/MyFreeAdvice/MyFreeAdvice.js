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
        list: [],
        noMoreData: !1
    },
    onLoad: function(t) {
        var i = this;
        a.getUserInfo(function(a) {
            i.setData({
                avatarUrl: a.avatarUrl,
                nickName: a.nickName,
                openid: a.u_openid
            }), i.getAskList();
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            pageIndex: 0
        }), this.getAskList();
    },
    onReachBottom: function() {
        this.data.noMoreData || this.getAskList();
    },
    getAskList: function(t) {
        var i = this;
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中"
        }), a.apiRequestGet({
            urlMethod: "api/Question/getAskList",
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
                    for (var s in t.list) n.push(t.list[s]);
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
    }
});