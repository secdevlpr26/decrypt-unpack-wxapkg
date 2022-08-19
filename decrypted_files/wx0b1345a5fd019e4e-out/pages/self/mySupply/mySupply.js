var t = getApp(), a = 1, o = 0;

Page({
    data: {
        pageList: [],
        bottomHint: !0,
        noSupply: !0,
        times: 0
    },
    onLoad: function() {
        this.getSupplyList();
    },
    getSupplyList: function() {
        var s = this, e = t.getMemberId();
        wx.request({
            url: t.globalData.comUrl + "mctab_searchPhotoInfo.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                current: a,
                memberId: e,
                customizeTabId: t.globalData.customizeTabId.LynxPhoto_Info_Post_Tab
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                o = e.pages, s.setData({
                    pageList: s.data.pageList.concat(e.pageList)
                }), 0 == s.data.pageList.length ? s.setData({
                    noSupply: !1
                }) : s.setData({
                    noSupply: !0
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    onShow: function() {
        var t = this.data.times + 1;
        a = 1, this.setData({
            times: t
        }), 1 != this.data.times && (this.setData({
            pageList: [],
            bottomHint: !0,
            noSupply: !0
        }), this.onLoad());
    },
    onReachBottom: function() {
        a < o ? (a++, this.onLoad()) : this.setData({
            bottomHint: !1
        });
    }
});