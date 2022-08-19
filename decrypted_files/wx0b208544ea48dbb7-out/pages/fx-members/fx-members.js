var t = getApp(), e = t.globalData.config.base;

Page({
    onShow: function() {
        var t = this;
        this.getLevel1(), wx.getSystemInfo({
            success: function(e) {
                var a = e.windowHeight - 50;
                t.setData({
                    listHeight: a
                });
            }
        });
    },
    getLevel1: function() {
        var t = this;
        t.setData({
            page: 1,
            type: 1,
            isLast: !1,
            memberList: []
        }), a.getMemberList(t);
    },
    getLevel2: function() {
        var t = this;
        t.setData({
            page: 1,
            type: 2,
            isLast: !1,
            memberList: []
        }), a.getMemberList(t);
    },
    loadMore: function() {
        var t = this;
        if (!t.data.isLast) {
            var e = t.data.page++;
            t.setData({
                page: e
            }), a.getMemberList(t);
        }
    }
});

var a = {
    getMemberList: function(s) {
        wx.showLoading({
            title: "加载中"
        });
        var i = t.globalData.userKey, n = s.data.page || 1, r = s.data.type;
        wx.request({
            url: e + "/Mobile/UserApi/getagentbindlist",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: i,
                page: n,
                type_id: r
            },
            success: function(t) {
                wx.hideLoading();
                var e = t.data;
                a.renderList(s, e.data), s.setData({
                    isLast: 0 === e.agentStatus
                });
            }
        });
    },
    renderList: function(t, e) {
        var a = (t.data.memberList || []).concat(e);
        t.setData({
            memberList: a
        });
    }
};