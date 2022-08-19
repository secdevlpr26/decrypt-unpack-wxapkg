var e = getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        offset: 0,
        current_day_webcast: [],
        old_webcast_list: [],
        play_time_already: 0,
        is_show_page: !0
    },
    onLoad: function(e) {
        this.getList();
        var t = new Date("2019/11/21 00:00:00").getTime();
        new Date().getTime() > t && this.setData({
            is_show_page: !1
        });
    },
    getList: function(t) {
        var a = this, s = {
            offset: "concat" == t ? a.data.offset : 0,
            limit: 10
        };
        wx.request({
            url: e.globalData.liveBaseUrl + "learning/getWebcastList",
            data: s,
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (0 == e.data.code) {
                    var s = e.data.data.current_day_webcast, i = e.data.data.old_webcast_list.data;
                    0 != s.length && a.setData({
                        current_day_webcast: s
                    }), 0 != i && ("concat" == t ? a.setData({
                        old_webcast_list: a.data.old_webcast_list.concat(i)
                    }) : a.setData({
                        old_webcast_list: i
                    })), "concat" == t && Array.isArray(i) && 0 == i.length && wx.showToast({
                        title: "没有数据了～",
                        icon: "none"
                    });
                } else wx.showToast({
                    title: e.data.err_msg,
                    icon: "none"
                });
            }
        });
    },
    clickVideo: function(e) {
        var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.time, s = e.currentTarget.dataset.begin, i = new Date().getTime(), n = s.replace(/-/g, "/"), r = new Date(n).getTime(), c = r + 1e3 * a, o = Math.abs((parseInt(r) - parseInt(i)) / 1e3);
        i < r ? wx.redirectTo({
            url: "/pages/liveclass/before/before?webcast_time=" + s
        }) : i >= r && i < c ? wx.redirectTo({
            url: "/pages/liveclass/index/index?play_time_already=" + o + "&id=" + t
        }) : wx.redirectTo({
            url: "/pages/liveclass/reminisce/reminisce?id=" + t
        });
    },
    playVideo: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/liveclass/index/index?id=" + t
        });
    },
    onPullDownRefresh: function(e) {
        this.getList();
    },
    onReachBottom: function() {
        this.setData({
            offset: this.data.offset + 10
        }), this.getList("concat");
    }
});