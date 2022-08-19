var t = getApp(), r = t.globalData.projectInfo, a = 1, e = 0;

Page({
    data: {
        groupOrderList: [],
        navCurIdx: 0,
        hasGroupOrder: !0
    },
    onLoad: function(t) {
        this.getMyGroupOrderList();
    },
    onShow: function() {},
    getMyGroupOrderList: function() {
        var d = this, o = t.getMemberId();
        wx.request({
            url: t.globalData.comUrl + "activityOrder_getMyGroupOrderList.action",
            data: {
                appId: r.appId,
                current: a,
                memberId: o,
                activityStatus: d.data.navCurIdx
            },
            success: function(r) {
                var a = t.getJsonData(r.data);
                e = a.pages, d.setData({
                    groupOrderList: d.data.groupOrderList.concat(a.pageList)
                }), d.setData({
                    hasGroupOrder: !!d.data.groupOrderList.length
                });
            }
        });
    },
    toGroupDetail: function(t) {
        wx.navigateTo({
            url: "../group-detail/group-detail?activityId=" + t.currentTarget.dataset.aid + "&groupOrderNo=" + t.currentTarget.dataset.gno + "&productId=" + t.currentTarget.dataset.pid
        });
    },
    toOderDetail: function(t) {
        wx.navigateTo({
            url: "../../self/myOrder/myOrder-detail/myOrder-detail?id=" + t.currentTarget.dataset.oid
        });
    },
    navtap: function(t) {
        a = 1, this.setData({
            groupOrderList: [],
            navCurIdx: t.currentTarget.dataset.idx
        }), this.getMyGroupOrderList();
    },
    onReachBottom: function() {
        a < e && (a++, this.getMyGroupOrderList());
    }
});