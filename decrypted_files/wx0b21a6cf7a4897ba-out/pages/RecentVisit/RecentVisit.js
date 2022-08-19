var a = getApp();

Page({
    data: {
        loadeMore: !1,
        page: 0,
        showMore: !1,
        info: "",
        list: [ {
            name: "测试",
            time: "2018-2-10 19:30",
            photo: ""
        }, {
            name: "测试",
            time: "2018-2-10 19:30",
            photo: ""
        } ],
        logins: [],
        views: 0
    },
    onLoad: function(t) {
        var e = this;
        e.setData({
            info: a.globalData.info,
            views: a.globalData.views
        }), e.getUserAccess();
    },
    getUserAccess: function(t) {
        wx.showNavigationBarLoading();
        var e = this;
        a.apiRequestGet({
            urlMethod: "api/Users/getUserAccess",
            data: {
                page: e.data.page
            },
            success: function(a) {
                if (wx.hideNavigationBarLoading(), 0 == e.data.page) null != a.data && a.data.length > 0 && e.setData({
                    logins: a.data,
                    showMore: a.data.length > 9
                }); else if (null != a.data && a.data.length > 0) {
                    e.data.logins.push.apply(e.data.logins, a.data);
                    var t = e.data.logins;
                    e.setData({
                        logins: t
                    });
                }
                e.data.page++;
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.showToast({
                    title: "加载失败",
                    icon: "warn",
                    duration: 2e3
                });
            }
        });
    },
    onPullDownRefresh: function() {
        this.data.page = 0, wx.stopPullDownRefresh(), this.getUserAccess();
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    }
});