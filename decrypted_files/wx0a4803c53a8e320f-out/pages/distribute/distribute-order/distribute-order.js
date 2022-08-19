var t = getApp(), e = "", a = "", r = 1, i = 1, s = !1;

Page({
    data: {
        curIdx: "0",
        orderList: [],
        inCome: "",
        noOrder: !1,
        hideBottom: !0
    },
    onLoad: function() {
        this.getOrderList("", "");
    },
    getDistributorIncome: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "dis_getDistributorIncome",
            data: {
                memberId: t.getMemberId()
            },
            success: function(t) {
                e.setData({
                    inCome: t.data.content.distributorIncome
                });
            }
        });
    },
    getOrderList: function(e, a) {
        if (!s) {
            var o = this;
            wx.request({
                url: t.globalData.comUrl + "dis_getDistributionAppOrderByPage.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    current: r,
                    parentMemberId: t.getMemberId(),
                    payStatus: e,
                    status: a
                },
                success: function(e) {
                    var a = t.getJsonData(e.data);
                    i = a.pages;
                    for (var r = 0; r < a.pageList.length; r++) a.pageList[r].fee = (a.pageList[r].totalMoney - a.pageList[r].totalLinePrice).toFixed(2);
                    o.setData({
                        orderList: o.data.orderList.concat(a.pageList)
                    }), o.setData({
                        noOrder: 0 == o.data.orderList.length
                    }), s = !1;
                }
            });
        }
    },
    navtap: function(t) {
        var i = t.currentTarget.dataset.idx;
        r = 1, this.setData({
            curIdx: t.currentTarget.dataset.idx,
            orderList: []
        }), 0 == i ? (e = "", a = "") : 1 == i ? (e = 0, a = 1) : 2 == i ? (e = 1, a = 1) : 3 == i && (e = 1, 
        a = 4), this.getOrderList(e, a);
    },
    onReachBottom: function() {
        r < i ? (s || r++, this.getOrderList(e, a)) : r > 1 && r >= i && this.setData({
            hideBottom: !1
        });
    }
});