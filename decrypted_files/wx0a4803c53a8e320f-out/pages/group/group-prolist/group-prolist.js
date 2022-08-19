var t = getApp(), a = "", i = 1, o = 1;

Page({
    data: {
        activityList: [],
        productList: [],
        activityInfo: {},
        navCurIdx: 0,
        isEndLoading: !1,
        countDownData: {},
        isGroupNull: !1
    },
    onLoad: function(t) {
        var a = this;
        this.getActivityList(0).then(function(t) {
            a.getProductList(t);
        });
    },
    getActivityList: function(i) {
        var o = this;
        return wx.showLoading({
            title: "加载中..."
        }), new Promise(function(e, n) {
            wx.request({
                url: t.globalData.comUrl + "activityProduct_groupsList.action",
                data: {
                    appId: t.globalData.projectInfo.appId
                },
                success: function(n) {
                    if (0 == n.data.length || 0 == n.code) return wx.hideLoading(), o.setData({
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
                    if (g > 0) s.activityStart = !1, o.setData({
                        activityInfo: s,
                        countDownData: o.secondToTime(g)
                    }), a = setInterval(function() {
                        g--, o.setData({
                            countDownData: o.secondToTime(g)
                        }), s.activityTime < 1 && (clearInterval(a), o.getActivityList(0).then(function(t) {
                            o.getProductList(t);
                        }));
                    }, 1e3); else {
                        s.activityStart = !0;
                        var l = s.activityTime;
                        o.setData({
                            activityInfo: s,
                            countDownData: o.secondToTime(l)
                        }), a = setInterval(function() {
                            l--, o.setData({
                                countDownData: o.secondToTime(l)
                            }), l < 1 && (clearInterval(a), o.setData({
                                navCurIdx: 0
                            }), o.getActivityList(o.data.navCurIdx).then(function(t) {
                                o.getProductList(t);
                            }));
                        }, 1e3);
                    }
                    o.setData({
                        activityList: n.data,
                        isGroupNull: !1
                    }), e(n.data[i].groupsId);
                }
            });
        });
    },
    secondToTime: function(t) {
        var a = Math.floor(t / 3600 / 24), i = Math.floor(t / 3600 % 24), o = Math.floor(t / 60 % 60), e = Math.floor(t % 60);
        return i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), e < 10 && (e = "0" + e), 
        {
            day: a,
            hours: i,
            minute: o,
            second: e
        };
    },
    getProductList: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_findGroupsProduceList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: i,
                groupsId: a
            },
            success: function(t) {
                wx.hideLoading(), o = t.data.pages;
                for (var a = 0; a < t.data.pageList.length; a++) {
                    var i = t.data.pageList[a];
                    t.data.pageList[a].percent = parseInt(i.saleCount / (i.saleCount + i.stock) * 100);
                }
                e.setData({
                    productList: e.data.productList.concat(t.data.pageList),
                    isEndLoading: !0
                });
            }
        });
    },
    navtap: function(t) {
        var a = this, o = t.currentTarget.dataset.index;
        i = 1, a.setData({
            navCurIdx: o,
            isEndLoading: !1,
            productList: []
        }), this.getActivityList(o).then(function(t) {
            a.getProductList(t);
        });
    },
    toProdetail: function(t) {
        wx.navigateTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toGroupIntroduce: function() {
        wx.navigateTo({
            url: "../group-introduce/group-introduce"
        });
    },
    onReachBottom: function() {
        i < o && (i++, this.getProductList(this.data.activityInfo.groupsId));
    }
});