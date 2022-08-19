var a = getApp(), e = a.globalData.config.base;

Page({
    onShow: function() {
        console.log("fx-downgrade");
        var a = this;
        t.getPageData(a);
    },
    toMemberList: function() {
        wx.navigateTo({
            url: "../fx-members/fx-members"
        });
    }
});

var t = {
    getPageData: function(t) {
        var o = a.globalData.userKey;
        wx.request({
            url: e + "/Mobile/UserApi/getagentbind",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o
            },
            success: function(a) {
                (a = a || {}).data = a.data || {}, a.data.data = a.data.data || {};
                var e = a.data.data;
                e.one = e.one || 0, e.two = e.two || 0, e.all = e.all || 0, e.month = e.month || 0, 
                e.week = e.week || 0, e.oneHeight = 2 * e.one > 200 ? 200 : 2 * e.one, e.twoHeight = 2 * e.two > 200 ? 200 : 2 * e.two, 
                t.setData({
                    summary: e
                });
            }
        });
    }
};