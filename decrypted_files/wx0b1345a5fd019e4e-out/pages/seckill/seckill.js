var t = getApp(), a = "", i = 1, e = 1;

Page({
    data: {
        activityList: [],
        productList: [],
        activityInfo: {},
        navCurIdx: 0,
        isEndLoading: !1,
        countDownData: {}
    },
    onLoad: function(t) {
        var a = this;
        this.getActivityList(0).then(function(t) {
            a.getProductList(t);
        });
    },
    getActivityList: function(i) {
        var e = this;
        return wx.showLoading({
            title: "加载中..."
        }), new Promise(function(o, n) {
            wx.request({
                url: t.globalData.comUrl + "activityProduct_groupsList.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    actType: "3"
                },
                success: function(n) {
                    if (0 == n.data.length || 0 == n.code) return wx.hideLoading(), e.setData({
                        activityList: [],
                        isGroupNull: !0
                    }), !1;
                    for (var r = 0; r < n.data.length; r++) {
                        var c = n.data[r];
                        n.data[r].begin = c.beginTime.substr(c.beginTime.length - 8, 5);
                    }
                    clearInterval(a);
                    var s = n.data[i];
                    wx.setStorageSync("groupRemark" + t.globalData.autoId, s.remark);
                    var u = new Date(s.beginTime), d = new Date(s.nowTime), g = parseInt((u - d) / 1e3);
                    if (g > 0) s.activityStart = !1, e.setData({
                        activityInfo: s,
                        countDownData: e.secondToTime(g)
                    }), a = setInterval(function() {
                        g--, e.setData({
                            countDownData: e.secondToTime(g)
                        }), s.activityTime < 1 && (clearInterval(a), e.getActivityList(0).then(function(t) {
                            e.getProductList(t);
                        }));
                    }, 1e3); else {
                        s.activityStart = !0;
                        var p = s.activityTime;
                        e.setData({
                            activityInfo: s,
                            countDownData: e.secondToTime(p)
                        }), a = setInterval(function() {
                            p--, e.setData({
                                countDownData: e.secondToTime(p)
                            }), p < 1 && (clearInterval(a), e.setData({
                                navCurIdx: 0
                            }), e.getActivityList(e.data.navCurIdx).then(function(t) {
                                e.getProductList(t);
                            }));
                        }, 1e3);
                    }
                    e.setData({
                        activityList: n.data,
                        isGroupNull: !1
                    }), o(n.data[i].groupsId);
                }
            });
        });
    },
    secondToTime: function(t) {
        var a = Math.floor(t / 3600 / 24), i = Math.floor(t / 3600 % 24), e = Math.floor(t / 60 % 60), o = Math.floor(t % 60);
        return i < 10 && (i = "0" + i), e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), 
        {
            day: a,
            hours: i,
            minute: e,
            second: o
        };
    },
    getProductList: function(a) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_findGroupsProduceList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: i,
                groupsId: a
            },
            success: function(t) {
                wx.hideLoading(), e = t.data.pages;
                for (var a = 0; a < t.data.pageList.length; a++) {
                    var i = t.data.pageList[a];
                    t.data.pageList[a].percent = parseInt(i.saleCount / (i.saleCount + i.stock) * 100);
                }
                o.setData({
                    productList: o.data.productList.concat(t.data.pageList),
                    isEndLoading: !0
                });
            }
        });
    },
    navtap: function(t) {
        var a = this, e = t.currentTarget.dataset.index;
        i = 1, a.setData({
            navCurIdx: e,
            isEndLoading: !1,
            productList: []
        }), this.getActivityList(e).then(function(t) {
            a.getProductList(t);
        });
    },
    toProdetail: function(t) {
        wx.navigateTo({
            url: "../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toGroupIntroduce: function() {
        wx.navigateTo({
            url: "/pages/group/group-introduce/group-introduce"
        });
    },
    onReachBottom: function() {
        i < e && (i++, this.getProductList(this.data.activityInfo.groupsId));
    }
});