var t = getApp(), a = 1, e = 1, i = !1;

Page({
    data: {
        curIdx: 1,
        distributorIncome: "",
        withdrawList: [],
        wdListNull: !1,
        hideBottom: !0
    },
    onLoad: function(t) {
        a = 1, this.getWithdrawList();
    },
    onShow: function() {},
    getTotalCommission: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getDistributorIncome",
            data: {
                memberId: t.getMemberId()
            },
            success: function(t) {
                a.setData({
                    distributorIncome: t.data.content.distributorIncome
                });
            }
        });
    },
    getWithdrawList: function() {
        if (!i) {
            var s = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_getApplyCashList",
                data: {
                    projectId: t.globalData.projectInfo.appId,
                    memberId: t.getMemberId(),
                    status: s.data.curIdx,
                    current: a
                },
                success: function(t) {
                    var a = t.data.content.applyCashList;
                    e = t.data.content.pages;
                    for (var r = 0; r < a.length; r++) a[r].date = a[r].createDate.substr(0, 10), a[r].time = a[r].createDate.substr(11, 8), 
                    a[r].account = a[r].account.substring(0, 4) + "******" + a[r].account.substr(a[r].account.length - 4);
                    s.setData({
                        withdrawList: s.data.withdrawList.concat(t.data.content.applyCashList)
                    }), s.setData({
                        wdListNull: 0 == s.data.withdrawList.length
                    }), i = !1;
                }
            });
        }
    },
    toWithdrawDetail: function(t) {
        wx.navigateTo({
            url: "withdraw-detail/withdraw-detail?id=" + t.currentTarget.dataset.id
        });
    },
    navtap: function(t) {
        a = 1, this.setData({
            withdrawList: [],
            curIdx: t.currentTarget.dataset.idx,
            hideBottom: !0
        }), this.getWithdrawList();
    },
    onReachBottom: function() {
        a < e ? (i || a++, this.getWithdrawList()) : a > 1 && a >= e && this.setData({
            hideBottom: !1
        });
    }
});